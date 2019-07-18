import express from 'express';

const homeRoute = express.Router();

homeRoute.get('/', (request, response) => {
  response.json({
    status: 200
  });
});

export default homeRoute;