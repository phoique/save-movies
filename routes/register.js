import express from 'express';
import bcrypt from 'bcrypt';
// Models import
import UserModel from '../models/User';

const register = express.Router();

// Register view
register.get('/', (request, reponse) => {
  reponse.render('register', { 
    title: 'Kayıt ol',
    login: false,
    username: 'Admin',
    user_role: 'user'
  });
});

// Register post
register.post('/', (request, response) => {
  const { username, password } = request.body;

  const hashPromise = bcrypt.hash(password, 10);

  // Password hash success
  hashPromise.then(
    password => {

      const newUser = new UserModel({
        username, 
        password
      });
    
      // User save
      const userPromise = newUser.save();
    
      // Register success
      userPromise.then((user) => {
        response.redirect('/');
      });
      userPromise.catch((error) => console.log(error));

    }
    );

    // Password hash error
    hashPromise.catch(error => console.log('Password hash error:', error));
});

export default register;