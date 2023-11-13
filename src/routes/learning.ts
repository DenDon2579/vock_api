import { Router } from 'express';

const learningRouter = Router();

learningRouter
  .get('/buildTest', (req, res) => {
    res.send('build test');
  })
  .get('/startTest', (req, res) => {
    res.send('start test');
  })
  .post('/saveAnswer', (req, res) => {
    res.send('save answer');
  })
  .post('/finishTest', (req, res) => {
    res.send('finish test');
  });

export default learningRouter;
