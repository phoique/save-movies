import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Models import
import UserModel from '../models/User';

const loginRoute = express.Router();

loginRoute.get('/', (request, response) => {
  response.json({
    status: 200
  });
});

loginRoute.post('/', async (request, response) => {
  const { username, password } = request.body;

  // Giriş bilgileri ile kullanıcıyı arama
  await UserModel.findOne({ username }, (error, user) => {
    // Bir hata varsa.
    if (error) {
      response.json({
        error: error
      });
    } 
    // Kullanıcı yoksa
    else if (!user) {
      response.json({
        error: 'Böyle bir kullanıcı yoktur.'
      });
    }
    // Kullanıcı varsa yazdığı şifreyi hashleyip veritabanı ile karşılaştırılması.
    else {

      const passCheck = bcrypt.compare(password, user.password);

      passCheck.then(result => {

        if(!result) {
          response.json({
            error: 'Şifreniz yanlıştır.'
          });
        }
        else {

          const payload = {
            username: user.username,
            user_role: user.role
          };

          const token = jwt.sign(payload, process.env.SECRET_KEY);

          response.json({
            status: 200,
            token: token
          });
        }
        
      });

      passCheck.catch(error => response.json({
        error: error
      }));

    }
  });

});

export default loginRoute;