const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine','.hbs');



//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true})) //acepta desde el formulario los datos con extension.
app.use(express.json()); //acepta los datos en formato json

//Global Variables
app.use((req,res,next) => {
    next();
})

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));
app.use(require('./routes/certifications'));

//Publics
app.use(express.static(path.join(__dirname,'public')));
app.use('/docs', express.static(path.join(__dirname, '/src/docs')));

//Starting the server
app.listen(app.get('port'),()=> {
    console.log('Server on port', app.get('port'));
});