import cors from 'cors';
import express from 'express';

import { config } from './config/config.js';
import { errorHandler, boomErrorHandler, logErrors } from './middlewares/error.handler.js';
import { routerApi } from './routes/index.js';

const app = express();
const port = config.port;

app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://sweet-bite.vercel.app',
      'https://sweet-bite-gyaca.vercel.app',
    ],
    credentials: true,
  })
);

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
