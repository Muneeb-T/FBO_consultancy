import jwt from 'jsonwebtoken';
import userModel from '../models/user-model.js';
import createToken from '../utils/create-token.js';

const validateToken = async (token, type) => {
  const types = ['accessToken', 'refreshToken'];
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw { message: 'Jwt secret missing. Cannot verify access token.' };
  }
  if (!token) {
    throw { message: 'Token not received' };
  }
  if (!types.includes(type)) {
    throw { message: 'Invalid token type.' };
  }
  const { userId } = jwt.verify(token, jwtSecret);
  if (!userId) {
    throw { message: 'Id not found inside token.' };
  }
  const user = await userModel.findById(userId);
  if (!user || token !== user[type]) {
    throw { message: 'Unauthorized access' };
  }
  return user;
};

export default async (req, res, next) => {
  try {
    const accessToken = req.cookies?.['access-token'];
    if (!accessToken) {
      return res
        .status(401)
        .json({ success: false, message: 'Unauthorized access' });
    }
    try {
      req.user = await validateToken(accessToken, 'accessToken');
      return next();
    } catch (error) {
      if (error.message === 'jwt expired') {
        const refreshToken = req.cookies?.['refresh-token'];
        if (!refreshToken) {
          return res
            .status(401)
            .json({ success: false, message: 'Unauthorized access' });
        }
        try {
          const user = await validateToken(refreshToken, 'refreshToken');
          const tokenData = { userId: user._id };
          user.accessToken = createToken(tokenData, '5m');
          user.refreshToken = createToken(tokenData, '30d');
          await user.save();
          res.cookie('access-token', user.accessToken);
          res.cookie('refresh-token', user.refreshToken);
          req.user = user;
          return next();
        } catch (error) {
          if (error.message === 'jwt expired') {
            return res.status(401).json({
              success: false,
              message: 'Session expired. Please login again.',
            });
          }
          throw error;
        }
      }
      if (error.message === 'invalid signature') {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized access. Invalid token',
        });
      }
      throw error;
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: error.message ?? 'Internal server error',
    });
  }
};
