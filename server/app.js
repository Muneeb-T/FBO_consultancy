//import modules
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';
import dbRoutes from './routes/database.js';
import connectDatabase from './mongodb/connection.js';

try {
  //call dotenv config function
  config();

  //set variables
  const app = express(); // express app
  const PORT = process.env.PORT || 4000; // port number
  const baseApiPath = process.env.BASE_API_PATH || '/api'; //base api path
  const appName = process.env.APP_NAME || 'Default App Name'; //name of application
  const dbName = process.env.DB_NAME || 'FBO'; //name of database
  const mongoUri = process.env.MONGO_URI; //mongodb connection string
  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';

  //use cross origin
  app.use(cors({ origin: frontendUrl, credentials: true }));

  //use application middlewares
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  //handle request to base paths
  app.get('/', (_, res) => {
    res.send(`Welcome to ${appName}`);
  });

  app.get(baseApiPath, (_, res) => {
    res.send(`This is the base path of apis of ${appName}`);
  });

  //use routes to be done
  app.use(`${baseApiPath}/auth`, authRoutes);
  app.use(`${baseApiPath}/database`, dbRoutes);

  app.use((err, req, res, next) => {
    res.status(500).json({
      success: false,
      message: err.message || 'Internal server error.',
    });
  });

  //listen port
  await connectDatabase(mongoUri, dbName);

  app.listen(PORT, (err) => {
    try {
      if (err) {
        console.log('Error in server setup');
        process.exit();
      }
      console.log('Server started running.');
      console.log('=======================');
      console.log('PORT : ', PORT);
      console.log('\n');
      console.log('Database connected successfully');
      console.log('===============================');
      console.log('URI           : ', mongoUri);
      console.log('Database name : ', dbName);
    } catch (error) {
      console.log('Database connection error.');
      console.log('==========================');
      console.log(error);
      process.exit();
    }
  });
} catch (error) {
  console.log('Server Entry point error');
  console.log('========================');
  console.log(error);
  process.exit();
}
