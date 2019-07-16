import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Models import
import UserModel from '../models/User';

const registerRoute = express.Router();

registerRoute.get('/', (request, reponse) => {
  reponse.json({
    status: 200
  });
  console.log(request.decode)
});

// Kullanıcı kayıt post route.
registerRoute.post('/', (request, response) => {
  const { username, password } = request.body;

  const hashPromise = bcrypt.hash(password, 10);

  // Girdiği şifreyi bcrypt ile şifreliyoruz.
  hashPromise.then(
    password => {
      // Yeni kullanıcı.
      const newUser = new UserModel({
        username,
        password,
        role: 'user'
      });

      // Kullanıcı kaydı promise.
      const userPromise = newUser.save();

      // başarılı olursa.
      userPromise.then((user) => {
        const payload = {
          username: username,
          user_role: 'user'
        };
        // Kullanıcıyı giriş yaptırıyoruz.
        const token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: 720 // 12 saat boyunca geçerli token.
        });
        response.json({
          status: 200,
          newUser: user,
          token: token
        });
      });

      userPromise.catch((error) => response.json({
        error: error
      }));

    }
  );

  // Password hash error
  hashPromise.catch(error => response.json({
    error: error
  }));

});

export default registerRoute;