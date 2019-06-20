import express from 'express';
import bcrypt from 'bcrypt';
// Models import
import UserModel from '../models/User';

// Settings
const register = express.Router();

// Register view
register.get('/', (request, reponse) => {
  reponse.render('register', {
    title: 'Kayıt ol',
    login: (request.session.username) ? true : false,
    username: request.session.username,
    user_role: request.session.role
  });
});

// Register post
register.post('/', (request, response) => {
  const { username, password, password_repeat } = request.body;

  if (password !== password_repeat) {
    response.redirect('/register');
  } else {

    const hashPromise = bcrypt.hash(password, 10);

    // Password hash success
    hashPromise.then(
      password => {

        const newUser = new UserModel({
          username,
          password,
          role: 'user'
        });

        // User save
        const userPromise = newUser.save();

        // Register success
        userPromise.then((user) => {
          request.session.username = username;
          request.session.role = 'user';
          response.redirect('/');
        });
        userPromise.catch((error) => console.log(error));

      }
    );

    // Password hash error
    hashPromise.catch(error => console.log('Password hash error:', error));

  }

});

export default register;