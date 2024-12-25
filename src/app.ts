import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import router from './app/routes';
import { notFound } from './app/middlewares/notFound';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';

const app: Application = express();

// PARSER
app.use(express.json());
app.use(cors());

// APPLICATION ROUTES
app.use('/api/v1', router);

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

// ERROR-HANDLING AND NOT-FOUND MIDDLEWARE
app.use(globalErrorHandler);
app.use(notFound);

export default app;
