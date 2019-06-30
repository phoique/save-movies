import express from 'express';

// model
import userModel from '../models/User';

const userListRoute = express.Router();

userListRoute.get('/', (request, response) => {

  // 10 tane kullanıcı sayfa 1
  const users = userModel.paginate({}, { page: 1, limit: 10 });

  users.then(user => {
    response.render('users', {
      title: 'Kayıtlı kullanıcılar',
      login: (request.session.username) ? true : false,
      username: request.session.username,
      user_role: request.session.role,
      users: user.docs,
      pages_number: (user.pages > 1) ? Array(user.pages).fill(0).map((e,i)=>i+1) : null
    });
  });

  users.catch(error => console.log(error));

});

// Sayfa parametre olarak gelirse.
userListRoute.get('/:page', (request, response) => {

  const users = userModel.paginate({}, { page: request.params.page, limit: 10 });

  users.then(user => {
    response.render('users', {
      title: 'Kayıtlı kullanıcılar',
      login: (request.session.username) ? true : false,
      username: request.session.username,
      user_role: request.session.role,
      users: user.docs,
      pages_number: (user.pages > 1) ? Array(user.pages).fill(0).map((e,i)=>i+1) : null
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
    const perm_user = userModel.findByIdAndUpdate(permission, { role: 'admin' }, {new: true} );

    perm_user.then(user => {
      response.redirect('/users');
    });

    perm_user.catch(error => console.log(error));

  }

  // Eğer kullanıcı silinecek ise
  else if (user_delete) {

    // Silinecek kullanıcı id ile bulunur ve silinir.
    const delete_user = userModel.findByIdAndDelete(user_delete);

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

userListRoute.post('/:page', (request, response) => {
  
  // İşlemlerin post yollanması
  const { permission, user_delete } = request.body;

  // Eğer yetki vermek istenirse
  if(permission) {

    // Yetki verilecek kullanıcı id ile bulunur ve role kısmı admin olur.
    const perm_user = userModel.findByIdAndUpdate(permission, { role: 'admin' }, {new: true} );

    perm_user.then(user => {
      response.redirect('/users');
    });

    perm_user.catch(error => console.log(error));

  }

  // Eğer kullanıcı silinecek ise
  else if (user_delete) {

    // Silinecek kullanıcı id ile bulunur ve silinir.
    const delete_user = userModel.findByIdAndDelete(user_delete);

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