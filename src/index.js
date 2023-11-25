import express from 'express';
import { routereEmployees } from './routes/employees.route.js';
import cors from 'cors';
import { PORT } from './config.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/employees', routereEmployees);

app.get('/', (req, res) => {
  res.json('hola');
});

app.listen(PORT, () => {
  console.log(`listen in port ${PORT}`);
});
