import express from 'express';
import dotenv from 'dotenv';
import parser from 'body-parser';
import session from 'express-session';
import fileUpload from 'express-fileupload';
import cors from 'cors';

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
import verifyToken from './middleware/verifyToken';
import loginRedirect from './middleware/loginRedirect';
import adminRoute from './middleware/adminRoute';

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

// Cors.
app.use(cors());

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
app.use('/api/register', loginRedirect, register);
app.use('/api/login', loginRedirect, login);
app.use('/api/add', verifyToken, addMovies);
app.use('/api/movies', verifyToken, myMovies);
app.use('/api/users', adminRoute, userList);
app.use('/api/checks', adminRoute, publicCheck);
app.use('/api/logout', logout);
app.use('/api/', home);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started: ${process.env.PORT}`);
});