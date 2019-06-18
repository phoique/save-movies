import express from 'express';
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
register.post('/', (request, reponse) => {
  console.log(request.body);
});

export default register;