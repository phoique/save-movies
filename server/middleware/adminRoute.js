import jwt from 'jsonwebtoken';

function isLogin(request, response, next) {
  // Tokeni header veya body üzerinden alma.
  const token = request.headers['x-access-token'] || request.body.token;
  const decode = jwt.decode(token, {complete: true});

  if(token) {

    // Token kısmı boş değilse kontrol işlemi gerçekleştiriliyor.
    jwt.verify(token, process.env.SECRET_KEY, (error) => {

      if(error) {
        response.json({
          error: error,
          message: 'Token doğrulanmadı.'
        });
      }

      else {
        if(decode.payload.user_role === 'admin') {
          next();
        }
        else {
          response.json({
            error: 'Yetkiniz yoktur.'
          });
        }
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