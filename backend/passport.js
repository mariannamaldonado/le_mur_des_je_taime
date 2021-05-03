// Estrategia de autenticación con Facebook y Google
var FacebookStrategy = require('passport-facebook').Strategy
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy
var passport = require('passport')
// Fichero de configuración donde se encuentran las API keys
var config = require('./config');
const User = require('./models/User')
// Serializa al usuario para almacenarlo en la sesión
passport.serializeUser(function(user, done) {
	done(null, user);
});
// Deserializa el objeto usuario almacenado en la sesión para
// poder utilizarlo
passport.deserializeUser(function(obj, done) {
	done(null, obj);
});
// Configuración del autenticado con Facebook
passport.use(new FacebookStrategy({
	clientID	  : config.facebook.id,
	clientSecret  : config.facebook.secret,
	callbackURL	  : "http://localhost:8081/api/users/auth/facebook/callback",
	profileFields : ['id', 'name','displayName', 'email', 'picture.type(large)', ]
}, 
function(accessToken, refreshToken, profile, done) {

	const userData = {
		// provider    : 'facebook',
		provider_id	: 'facebook',
		email	    : profile.emails ? profile.emails[0].value : profile.name.givenName+profile.name.familyName+'@facebook.com',
		firstname	: profile.name.givenName,
		lastname    : profile.name.familyName,
		avatar		: profile.photos ? profile.photos[0].value : 'assets/img/faces/avatar1.jpg',
		password    : profile.id
	}

	console.log(profile)
	
	User.findOne({email: userData.email}, function(err, user) {

		if(err) throw(err);
		if(!err && user!= null) return done(null, user);

		var user = new User(userData);
		user.save(function(err) {
			if(err) throw err;
			return done(null, user);
		});
	});
}));

passport.use(new GoogleStrategy({
    clientID:     config.google.id,
    clientSecret: config.google.secret,
    callbackURL: "http://localhost:8081/api/users/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
	const profileJson = profile._json;

	const userData = {
	  email: profileJson.email,
	  firstname: profileJson.given_name,
	  lastname: profileJson.family_name,
	  password:profileJson.sub,
	  avatar: profileJson.picture? profileJson.picture: 'assets/img/faces/avatar1.jpg',
	  provider_id: 'google'
	}

	console.log(profile)

	User.findOne({email: userData.email}, function(err, user) {

		if(err) throw(err);
		if(!err && user!= null) return done(null, user);
		// Al igual que antes, si el usuario ya existe lo devuelve
		// y si no, lo crea y salva en la base de datos
		var user = new User(userData);

		user.save(function(err) {
			if(err) throw err;
			return done(null, user);
		});
	});

  }
));




