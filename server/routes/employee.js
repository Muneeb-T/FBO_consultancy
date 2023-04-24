import express from 'express';
import employeeControllers from '../controllers/employee-controllers.js';
import validate from '../middlewares/validate-request.js';
import schemas from '../utils/request-schemas.js';
import verifyJwtToken from '../middlewares/verify-jwt-token.js';
import authorize from '../middlewares/authorize.js';

const router = express.Router();

router.post(
  '/register',
  verifyJwtToken,
  authorize('admin'),
  validate(schemas.register, 'body'),
  employeeControllers.register,
);

export default router;
