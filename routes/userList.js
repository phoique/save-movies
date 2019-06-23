import express from 'express';

// model
import userModel from '../models/User';

const userListRoute = express.Router();

userListRoute.get('/', (request, response) => {

  // Tüm kullanıcılar
  const users = userModel.find({});

  users.then(user => {
    response.render('users', {
      title: 'Kayıtlı kullanıcılar',
      login: (request.session.username) ? true : false,
      username: request.session.username,
      user_role: request.session.role,
      users: user
    });
  });

  users.catch(error => console.log(error));

});

// Kullanıcıya işlemler yapıldığında gönderilen post
userListRoute.post('/', (request, response) => {
  
  // İşlemlerin post yollanması
  const { permission, user_delete } = request.body;

  // Eğer yetki vermek istenirse
  if(permission) {

    // Yetki verilecek kullanıcı id ile bulunur ve role kısmı admin olur.
    const perm_user = userModel.findOneAndUpdate(permission, { role: 'admin' }, {new: true} );

    perm_user.then(user => {
      response.redirect('/users');
    });

    perm_user.catch(error => console.log(error));

  }

  // Eğer kullanıcı silinecek ise
  else if (user_delete) {

    // Silinecek kullanıcı id ile bulunur ve silinir.
    const delete_user = userModel.findOneAndDelete(user_delete);

    delete_user.then(user => {
      response.redirect('/users');
    });

    delete_user.catch(error => console.log(error));

  }

  // Farklı bir istek gelirse başka sayfaya yönlendir.
  else {
    response.redirect('/users');
  }


});

export default userListRoute;