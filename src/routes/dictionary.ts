import { Router } from 'express';
import axios from 'axios';
import { User } from '../models/User';
import { translate } from '../functions/translate';
import Word from '../models/Word';

const dictionaryRouter = Router();

dictionaryRouter
  .get('/', (req, res) => {
    res.send('dictionary root');
  })
  .get('/words', async (req: any, res) => {
    const words = await User.findOne({
      uid: req.userData.uid,
    }).select('dictionary.words');

    res.status(200).json(words?.dictionary.words);
  })
  .get('/translate', translate);

export default dictionaryRouter;
