import { Router } from 'express';
import axios from 'axios';
import { User } from '../models/User';
import { translate } from '../functions/translate';

const dictionaryRouter = Router();

dictionaryRouter
  .get('/', (req, res) => {
    res.send('dictionary root');
  })
  .get('/words', async (req, res) => {
    // const words = await Word.find({});
    // res.json(words);
  })
  .get('/translate', translate);

export default dictionaryRouter;
