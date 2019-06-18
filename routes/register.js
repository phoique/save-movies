import express from 'express';
const register = express.Router();

register.get('/register', (req, res) => {
  res.render('register', { 
    title: 'Kayıt ol',
    login: false,
    username: 'Admin',
    user_role: 'user'
  });
});

export default register;