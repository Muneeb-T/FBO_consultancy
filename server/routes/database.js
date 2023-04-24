import express from 'express';
import dbControllers from '../controllers/db-controllers.js';
import verifyJwtToken from '../middlewares/verify-jwt-token.js';
import authorize from '../middlewares/authorize.js';

const router = express.Router();

router.get(
  '/storage',
  verifyJwtToken,
  authorize(['admin', 'employee']),
  dbControllers.getStorageUsed,
);

export default router;
