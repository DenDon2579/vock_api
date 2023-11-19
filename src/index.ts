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

const user = {
  userName: 'vlad',
  email: 'qwe@gmail.com',
  dictionary: {
    words: [
      {
        englishWord: 'hello',
        type: 'notLearning',
        translations: [
          {
            pos: 'noun',
            words: [
              { text: 'привет', popularity: 10 },
              { text: 'хай', popularity: 5 },
            ],
          },
          {
            pos: 'verb',
            words: [{ text: 'поздороваться', popularity: 10 }],
          },
        ],
        progress: 46,
      },
    ],
  },
};
User.create(user).then((r) => console.log(r));

app.listen(3001);
