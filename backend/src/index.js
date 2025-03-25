import cors from 'cors';
import express from 'express';

import { config } from './config/config.js';
import { errorHandler, boomErrorHandler, logErrors } from './middlewares/error.handler.js';
import { routerApi } from './routes/index.js';

const app = express();

app.use(express.json());
app.use(cors());

// Health check primero
app.get('/api/health', (_, res) => {
  res.json({ status: 'OK', environment: config.env });
});

// Ruta de prueba para verificar el servidor
app.get('/', (_, res) => {
  res.json({ message: 'API is running' });
});

// Configuración mejorada de CORS
const whitelist = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://sweet-bite-store.vercel.app',
  'https://sweet-bite-store-*.vercel.app',
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || whitelist.some((domain) => origin.includes(domain))) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

if (!process.env.VERCEL) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${port}`);
  });
}

export default app;
