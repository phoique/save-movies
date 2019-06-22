import express from 'express';

const homeRoute = express.Router();

homeRoute.get('/', (request, response) => {
  response.render('index', {
      title: 'Anasayfa', 
      login: (request.session.username) ? true : false,
      username: request.session.username,
      user_role: request.session.role,
      content_text: "İzlediğin filmi mi kaydetmek istiyorsun, hadi o zaman hemen kaydet."
    });
});

export default homeRoute;