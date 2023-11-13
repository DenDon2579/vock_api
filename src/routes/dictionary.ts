import { Router } from 'express';

const dictionaryRouter = Router();

dictionaryRouter
  .get('/', (req, res) => {
    res.send('dictionary root');
  })
  .get('/words', (req, res) => {
    res.send('words');
  });

export default dictionaryRouter;
