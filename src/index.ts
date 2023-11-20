import Express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { User } from './models/User';
import dictionaryRouter from './routes/dictionary';
import learningRouter from './routes/learning';
import { ObjectId } from 'mongodb';

mongoose.connect(
  'mongodb+srv://DenDon:1qGku4t32qmBkIHS@cluster.vvicvll.mongodb.net/vock'
);

const app = Express();

const isAuthenticated = () => {};

app.all('*', function (req, res, next) {
  if (isAuthenticated()) {
    next();
  } else {
    res.send(401);
  }
});

app.use(bodyParser.json());

app.use('/dictionary', dictionaryRouter);
app.use('/learning', learningRouter);

app.post('/auth', async (req, res) => {
  const userData = req.body;
  console.log(userData.sub);
  const isUserExist = await User.findOne({ uid: userData?.sub });
  console.log(isUserExist);
  if (!isUserExist) {
    await User.create({
      uid: userData.sub,
      userName: userData.name,
      email: userData.email,
      dictionary: {
        words: [],
      },
    });
  }
});

app.listen(3001);

// uid: userData.sub,
// userName: userData.name,
// email: userData.email,
// dictionary: {
//   words: [
//     {
//       englishWord: 'hello',
//       type: 'notLearning',
//       translations: [
//         {
//           pos: 'noun',
//           words: [
//             { text: 'привет', popularity: 10 },
//             { text: 'хай', popularity: 5 },
//           ],
//         },
//         {
//           pos: 'verb',
//           words: [{ text: 'поздороваться', popularity: 10 }],
//         },
//       ],
//       progress: 46,
//     },
//   ],
// },
// }
