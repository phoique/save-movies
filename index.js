import express from 'express';
import dotenv from 'dotenv';
import hbsExpress from 'express-handlebars';
import hds from 'handlebars';
import parser from 'body-parser';
import session from 'express-session';

// Datebase
import datebaseConnect from './helper/datebase';

// Route
import register from './routes/register';

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
app.use('/register', register);

app.get('/', (request, response) => {
  response.render('index', {
      title: 'Anasayfa', 
      login: (request.session.username) ? true : false,
      username: request.session.username,
      user_role: request.session.role
    });
});

app.get('/movies', (request, response) => {
  response.render('movies', {
    title: 'Filmler',
    login: (request.session.username) ? true : false,
    username: request.session.username,
    user_role: request.session.role
  });
});

app.get('/add', (request, response) => {
  response.render('add', {
    title: 'Film ekle',
    login: (request.session.username) ? true : false,
    username: request.session.username,
    user_role: request.session.role
  });
});

app.get('/users', (request, response) => {
  response.render('users', {
    title: 'Kayıtlı kullanıcılar',
    login: (request.session.username) ? true : false,
    username: request.session.username,
    user_role: request.session.role
  });
});

app.get('/published', (request, response) => {
  response.render('publishedMovies', { 
    title: 'Filmleri yayınla',
    login: (request.session.username) ? true : false,
    username: request.session.username,
    user_role: request.session.role
  });
});

app.get('/login', (request, response) => {
  response.render('login', { 
    title: 'Giriş yap',
    login: (request.session.username) ? true : false,
    username: request.session.username,
    user_role: request.session.role
  });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started: ${process.env.PORT}`);
});