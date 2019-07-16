import express from 'express';
import dotenv from 'dotenv';
import parser from 'body-parser';
import session from 'express-session';
import fileUpload from 'express-fileupload';

// Datebase
import datebaseConnect from './helper/datebase';

// Route
import register from './routes/register';
import login from './routes/login';
import logout from './routes/logout';
import home from './routes/home';
import addMovies from './routes/addMovies';
import myMovies from './routes/myMovies';
import userList from './routes/userList';
import publicCheck from './routes/publicCheck';

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

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// Use route
app.use('/register', loginRedirect, register);
app.use('/login', loginRedirect, login);
app.use('/add', isLogin, addMovies);
app.use('/movies', isLogin, myMovies);
app.use('/users', isLogin, userList);
app.use('/check', isLogin, publicCheck);
app.use('/logout', logout);
app.use('/', home);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started: ${process.env.PORT}`);
});