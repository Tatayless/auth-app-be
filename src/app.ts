import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const startServer = async () => {
  const app = express();

  app
    .use(cors())
    .use(bodyParser.json())
    .listen(5000, () => {
      console.log('Server started at http://localhost:5000');
    });
};

startServer();
