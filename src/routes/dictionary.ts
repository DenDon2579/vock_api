import { Router } from 'express';
import axios from 'axios';
import { User } from '../models/User';
import { translate } from '../functions/translate';
import Word from '../models/Word';
import { DefaultRequest } from '../types';
import { DateTime } from 'luxon';

const dictionaryRouter = Router();

dictionaryRouter
  .get('/', (req, res) => {
    res.send('dictionary root');
  })
  .get('/words', async (req: DefaultRequest, res) => {
    const words = await User.findOne({
      uid: req.userData?.uid,
    }).select('dictionary.words');

    res.status(200).json(words?.dictionary.words);
  })
  .get('/translate', translate)
  .post('/words', async (req: DefaultRequest, res) => {
    const user = await User.updateOne(
      {
        uid: req.userData?.uid,
      },
      {
        $push: {
          'dictionary.words': {
            ...req.body,
            lastTestTime: DateTime.now().toISODate(),
          },
        },
      }
    );
    res.status(201).json({});
  });

export default dictionaryRouter;
