import express from 'express';
import cors from 'cors';
import { config } from './config/config.js';
import { routerApi } from './routes/v1/index.js';
import { errorHandler, boomErrorHandler, logErrors } from './middlewares/error.handler.js';

const app = express();
const port = config.port;

app.use(express.json());
app.use(cors());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
