import express from 'express';
import dbControllers from '../controllers/db-controllers.js';
import verifyJwtToken from '../middlewares/verify-jwt-token.js';

const router = express.Router();

router.get('/storage', dbControllers.getStorageUsed);

export default router;
