import express from 'express';
import bcrypt from 'bcrypt';
// Models import
import UserModel from '../models/User';

const loginRoute = express.Router();

// User login view
loginRoute.get('/', (request, response) => {
  response.render('login', {
    title: 'Giriş yap',
    login: (request.session.username) ? true : false,
    username: request.session.username,
    user_role: request.session.role
  });
});

loginRoute.post('/', (request, response) => {
  const { username, password } = request.body;

  // Giriş bilgileri ile kullanıcıyı arama
  UserModel.findOne({ username }, (error, user) => {
    // Bir hata varsa.
    if (error) {
      console.log(error);
    } 
    // Kullanıcı yoksa
    else if (!user) {
      console.log('Böyle bir kullanıcı yoktur.');
    }
    // Kullanıcı varsa yazdığı şifreyi hashleyip veritabanı ile karşılaştırılması.
    else {

      const passCheck = bcrypt.compare(password, user.password);

      passCheck.then(result => {

        if(!result) {
          console.log('Şifreniz yanlıştır.');
        }
        else {
          request.session.username = user.username;
          request.session.role = user.role;
          response.redirect('/');
        }
        
      });

      passCheck.catch(error => console.log("Error:",error));

    }
  });

});

export default loginRoute;