require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const path = require('path');
var session = require('express-session')
const rtMain = require('./routers/rtMain')
const rtUsers = require('./routers/rtUsers')
const rtMessage = require('./routers/rtMessage')
const verifyToken = require('./middleware/validate-token');
var passport = require('passport')
require('./passport.js')

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));


// conexion bade de datos
const conexion = require('./mongodb')
// para servir tambien vue del lado del cliente
app.use(express.static('../dist'));
//gestión de sesiones
app.use(session({ 
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
// cors
const cors = require('cors');
let corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')    
    next()
})
// Configuración de Passport. Lo inicializamos
// y le indicamos que Passport maneje la Sesión
app.use(passport.initialize());
app.use(passport.session());
//rutas seguras . necesita login
app.all('*/secure/*', [verifyToken]);
//enrutadores
app.use('/api',rtMain)
app.use('/api/users',rtUsers)
app.use('/api/message',rtMessage)

app.listen(8081,(err)=>{
    if(err) console.log("Errores: ", err)
    console.log("Servidor backend arrancado en 8081")
})