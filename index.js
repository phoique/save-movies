import express from 'express';
import dotenv from 'dotenv';
import hbsExpress from 'express-handlebars';
import hds from 'handlebars';
import parser from 'body-parser';
import session from 'express-session';
import fileUpload from 'express-fileupload';
import path from 'path';

// Datebase
import datebaseConnect from './helper/datebase';

// Route
import register from './routes/register';
import login from './routes/login';
import logout from './routes/logout';
import home from './routes/home';
import addMovies from './routes/addMovies';

// Midddleware
import isLogin from './middleware/isLogin';
import loginRedirect from './middleware/loginRedirect';

// Dotenv run
dotenv.config();
// Datebase connection
datebaseConnect();

const app = express();

// Session
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));

// File upload
app.use(fileUpload({
  createParentPath: true,
  limits: { 
    fileSize: 2 * 1024 * 1024 * 1024 //2MB max file(s) size
},
}));

// Template engine. Default layout. layout.hbs
const settings = hbsExpress.create({
  defaultLayout: 'layout', 
  extname: 'hbs'
});

// if_equals(x '===' y)
hds.registerHelper('if_equals', function (lvalue, operator, rvalue, options) {
  var operators, result;
  operators = {
      '===': function (l, r) { return l === r; },
  };
  result = operators[operator](lvalue, rvalue);
  if (result) {
      return options.fn(this);
  } else {
      return options.inverse(this);
  }

});

app.engine('hbs', settings.engine);
app.set('view engine', 'hbs');

// Static file css, js...
app.use('/static', express.static('public'));

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// Use route
app.use('/register', loginRedirect, register);
app.use('/login', loginRedirect, login);
app.use('/add', isLogin, addMovies);
app.use('/logout', logout);
app.use('/', home);


app.get('/movies', isLogin, (request, response) => {
  response.render('movies', {
    title: 'Filmler',
    login: (request.session.username) ? true : false,
    username: request.session.username,
    user_role: request.session.role
  });
});

app.get('/users', isLogin, (request, response) => {
  response.render('users', {
    title: 'Kayıtlı kullanıcılar',
    login: (request.session.username) ? true : false,
    username: request.session.username,
    user_role: request.session.role
  });
});

app.get('/published', isLogin, (request, response) => {
  response.render('publishedMovies', { 
    title: 'Filmleri yayınla',
    login: (request.session.username) ? true : false,
    username: request.session.username,
    user_role: request.session.role
  });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started: ${process.env.PORT}`);
});