import express from 'express';
import authControllers from '../controllers/auth-controllers.js';
import validate from '../middlewares/validate-request.js';
import schemas from '../utils/request-schemas.js';

const router = express.Router();

router.post(
  '/signup',
  validate(schemas.signup, 'body'),
  authControllers.signup,
);

router.post('/login', validate(schemas.login, 'body'), authControllers.login);

export default router;
