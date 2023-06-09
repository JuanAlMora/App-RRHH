const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const bot = require('./controllers/bot.js');
//Initializations

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'),'layouts'),
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
app.use(require('./routes/login'));
app.use(require('./routes/authentication'));
app.use(require('./routes/certifications'));
app.use(require('./routes/afiliations'));
app.use(require('./routes/main_menu'));
app.use(require('./routes/cand_menu'));
app.use(require('./routes/list_cand_cv'));
app.use(require('./routes/new_cand'));
app.use(require('./routes/cand_detail'));
app.use(require('./routes/cand_edit'));
app.use(require('./routes/cand_delete'));
app.use(require('./routes/emp_menu'));
app.use(require('./routes/list_emp_cv'));
app.use(require('./routes/emp_detail'));
app.use(require('./routes/emp_edit'));
app.use(require('./routes/emp_delete'));
app.use(require('./routes/paycheck_menu'));
app.use(require('./routes/vacancies'));
app.use(require('./routes/add_vacancy'));
app.use(require('./routes/paycheck_menu'));
app.use(require('./routes/paycheck_edit'));
app.use(require('./routes/paycheck_exe'));
app.use(require('./routes/contract'));

//Publics
app.use(express.static(path.join(__dirname,'public')));
app.use('/docs', express.static(path.join(__dirname, '/src/docs')));

//Starting the server and bot
bot.launch();
app.listen(app.get('port'),()=> {
    console.log('Server on port', app.get('port'));
});