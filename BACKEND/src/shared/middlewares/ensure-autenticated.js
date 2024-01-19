const jwt = require('jsonwebtoken')
const AppError = require('../AppError')

module.exports = async (request, response, next) => {
  const { authorization } = request.headers

  if (!authorization) {
    return response.status(401).json({ error: 'Token not provided' })
  }
  const [, token] = authorization.split(' ');

  console.log('Received token:', token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log('Decoded payload:', decoded);

    request.user = {
      id: decoded.id,
    };

    return next();
  } catch (error) {
    console.error('JWT Verification Error:', error.message);
    throw new AppError(error.message, 401);
  }

}
