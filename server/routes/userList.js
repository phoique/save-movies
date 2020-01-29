import express from 'express';

// model
import userModel from '../models/User';

const userListRoute = express.Router();

userListRoute.get('/', (request, response) => {

  // 10 tane kullanıcı sayfa 1
  const users = userModel.paginate({}, { page: 1, limit: 10 });

  users.then(user => {
    response.json({
      users: user.docs,
      pages_number: user.pages
    });
  });

  users.catch(error => response.json({error}));

});

// Sayfa parametre olarak gelirse.
userListRoute.get('/:page', (request, response) => {

  const users = userModel.paginate({}, { page: request.params.page, limit: 10 });

  users.then(user => {
    response.json({
      users: user.docs,
      pages_number: user.pages
    });
  });

  users.catch(error => response.json({error}));

});

// Kullanıcıya işlemler yapıldığında gönderilen post
userListRoute.post('/', (request, response) => {
  response.json({
    status: 200,
    error: 'Kullanıcı güncelleme işlemi sonra yazılacaktır.'
  });
});

userListRoute.put('/', (request, response) => {
  const { user_id } = request.body;

  // Yetki verilecek kullanıcı id ile bulunur ve role kısmı admin olur.
  const perm_user = userModel.findByIdAndUpdate(user_id, { role: 'admin' }, {new: true} );

  perm_user.then(user => {
    response.json({
      update_user: user
    });
  });

  perm_user.catch(error => response.json({error}));
});

userListRoute.delete('/', (request, response) => {

  const { user_id } = request.body;
  // Silinecek kullanıcı id ile bulunur ve silinir.
  const delete_user = userModel.findByIdAndDelete(user_id);

  delete_user.then(user => {
    response.json({
      delete_user: user
    });
  });

  delete_user.catch(error => response.json({error}));
});

export default userListRoute;