//import modules
import express from 'express';
import { config } from 'dotenv';

//call dotenv config function
config();


//set variables
const app = express(); // express app
const PORT = process.env.PORT || 4000; // port number
const baseApiPath = process.env.BASE_API_PATH || '/api'; //base api path
const appName = process.env.APP_NAME || 'Default App Name'; //name of application

//use application middlewares
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

//listen port
app.listen(PORT, (err) => {
  if (err) console.log('Error in server setup');
  console.log('Server started running');
  console.log('======================');
  console.log('PORT : ', PORT);
});
