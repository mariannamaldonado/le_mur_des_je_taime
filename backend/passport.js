// Estrategia de autenticación con Facebook y Google
var FacebookStrategy = require('passport-facebook').Strategy
var GoogleStrategy = require('passport-google-oauth').OAuthStrategy

// Fichero de configuración donde se encuentran las API keys
var config = require('./config');
const User = require('../models/User')

module.exports = function(passport) {

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
		callbackURL	  : '/auth/facebook/callback',
		profileFields : ['id', 'displayName', 'provider', 'avatar']
	}, function(accessToken, refreshToken, profile, done) {
		// El campo 'profileFields' nos permite que los campos que almacenamos
		// se llamen igual tanto para si el usuario se autentica por Google o
		// por Facebook, ya que cada proveedor entrega los datos en el JSON con
		// un nombre diferente.
		// Passport esto lo sabe y nos lo pone más sencillo con ese campo
		User.findOne({provider_id: profile.id}, function(err, user) {
			if(err) throw(err);
			if(!err && user!= null) return done(null, user);

			// Al igual que antes, si el usuario ya existe lo devuelve
			// y si no, lo crea y salva en la base de datos
			var user = new User({
				provider_id	: profile.id,
				provider	: profile.provider,
				firstname	: profile.displayName,
				avatar		: profile.avatar[0].value
			});
			user.save(function(err) {
				if(err) throw err;
				done(null, user);
			});
		});
	}));

	// Configuración del autenticado con Google
	passport.use(new GoogleStrategy({
		clientID		: config.google.id,
		clientSecret	: config.google.secret,
		callbackURL: "http://www.example.com/auth/google/callback"
	  },
	  function(token, tokenSecret, profile, done) {
	  User.findOrCreate({provider_id: profile.id}, function (err, user) {
			if(err) throw(err);
			if(!err && user!= null) return done(null, user);
			
			var user = new User({
				provider_id	: profile.id,
				provider	: profile.provider,
				firstname	: profile.displayName,
				avatar		: profile.avatar[0].value
			});
			user.save(function(err) {
				if(err) throw err;
				done(null, user);
			});
		  });
	  }
	));
};
