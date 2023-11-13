import Express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { User } from './models/User';
import dictionaryRouter from './routes/dictionary';
import learningRouter from './routes/learning';

mongoose.connect(
  'mongodb+srv://DenDon:1qGku4t32qmBkIHS@cluster.vvicvll.mongodb.net/vock'
);

const app = Express();
app.use(bodyParser.json());

app.use('/dictionary', dictionaryRouter);
app.use('/learning', learningRouter);

app.listen(3000);
