import express from 'express';
import dbControllers from '../controllers/db-controllers.js';
const router = express.Router();

router.get('/storage', dbControllers.getStorageUsed);

export default router;
