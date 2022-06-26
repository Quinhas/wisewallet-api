import express from 'express';
import path from 'path';
import cors from './middlewares/cors';
import errorHandler from './middlewares/errorHandler';
import logMiddleware from './middlewares/logMiddleware';
import routes from './routes';
import log from './utils/log';

const { PORT = 3001 } = process.env;

const app = express();

app.use(express.json());
app.use(cors);
app.use(logMiddleware);
app.use(routes);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  log(`Server started at http://localhost:${PORT}`);
});
