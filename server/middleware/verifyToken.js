import jwt from 'jsonwebtoken';

function isLogin(request, response, next) {
  // Tokeni header veya body üzerinden alma.
  const token = request.headers['x-access-token'] || request.body.token;

  if(token) {

    // Token kısmı boş değilse kontrol işlemi gerçekleştiriliyor.
    jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {

      if(error) {
        response.json({
          error: error,
          message: 'Token doğrulanmadı.'
        });
      }

      else {
        request.decode = decoded;
        next();
      }

    });
  }
  else {
    response.json({
      error: 'Token yok.'
    });
  }
}

export default isLogin;