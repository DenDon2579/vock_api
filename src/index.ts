import Express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { User } from './models/User';
import dictionaryRouter from './routes/dictionary';
import learningRouter from './routes/learning';
import { ObjectId } from 'mongodb';
import axios from 'axios';
import validateToken from './security/validateToken';
import cors from 'cors';
import userRouter from './routes/user';
import { DefaultRequest } from './types';
import { DateTime } from 'luxon';
import calcDayDelta from './functions/calcDayDelta';

console.log(calcDayDelta(DateTime.fromISO('2023-12-15')));

mongoose.connect(
  'mongodb+srv://DenDon:1qGku4t32qmBkIHS@cluster.vvicvll.mongodb.net/vock'
);

const app = Express();

app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get('/', async (req, res) => {});

app.all('*', async (req: DefaultRequest, res, next) => {
  if (req.headers.authorization) {
    const userData: any = await validateToken(req.headers.authorization);
    if (userData) {
      const uid = await userData.sub;
      req.userData = {
        uid: userData.sub,
        name: userData.name,
        avatar: userData.picture,
        email: userData.email,
      };
      if (uid) {
        next();
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
});

app.use('/dictionary', dictionaryRouter);
app.use('/learning', learningRouter);
app.use('/user', userRouter);

app.listen(3001);
