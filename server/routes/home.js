import express from 'express';

const homeRoute = express.Router();

homeRoute.get('/', (request, response) => {
  response.json({
    status: true
  });
});

export default homeRoute;