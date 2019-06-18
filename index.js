import express from 'express';
import dotenv from 'dotenv';
import hbsExpress from 'express-handlebars';
import hds from 'handlebars';
import parser from 'body-parser';

// Datebase
import datebaseConnect from './helper/datebase';

// Route
import register from './routes/register';

// Dotenv run
dotenv.config();
// Datebase connection
datebaseConnect();

const app = express();

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

app.get('/', (req, res) => {
    res.render('index', {
      title: 'Anasayfa', 
      login: false,
      username: 'Admin',
      user_role: 'user'
    });
});

app.get('/movies', (req, res) => {
  res.render('movies', {
    title: 'Filmler',
    login: false,
    username: 'Admin',
    user_role: 'user'
  });
});

app.get('/add', (req, res) => {
  res.render('add', {
    title: 'Film ekle',
    login: false,
    username: 'Admin',
    user_role: 'user'
  });
});

app.get('/users', (req, res) => {
  res.render('users', {
    title: 'Kayıtlı kullanıcılar',
    login: false,
    username: 'Admin',
    user_role: 'user'
  });
});

app.get('/published', (req, res) => {
  res.render('publishedMovies', { 
    title: 'Filmleri yayınla',
    login: false,
    username: 'Admin',
    user_role: 'user'
  });
});

app.get('/login', (req, res) => {
  res.render('login', { 
    title: 'Giriş yap',
    login: false,
    username: 'Admin',
    user_role: 'user'
  });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started: ${process.env.PORT}`);
});