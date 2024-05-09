import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './routes';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// default route
app.get('/', (req: Request, res: Response) => {
  // Constructing server status object
  const serverStatus = {
    status: 'running',
    message: 'Frozify API is operational and running smoothly.',
    timestamp: new Date().toISOString(),
    version: 'v1.0.1',
    uptime: process.uptime(),
    author: 'Ibrahim Khalil',
    contact: {
      email: 'iibrahiim.dev@gmail.com',
      website: 'https://iibrahim-dev.netlify.app/',
    },
  };
  res.json(serverStatus);
});

// application routes
app.use('/api/v1', router);

// global error handler
app.use(globalErrorHandler);

// not found route
app.use(notFound);

export default app;
