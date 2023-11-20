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

mongoose.connect(
  'mongodb+srv://DenDon:1qGku4t32qmBkIHS@cluster.vvicvll.mongodb.net/vock'
);

const app = Express();

const isAuthenticated = () => {
  console.log('AUTHENTIFICATED !!! ALL IS OK URA URA URA GAY SEX Z ZOV ZOV');
  return true;
};

app.use(bodyParser.json());
app.use(cors({ origin: true }));
app.all('*', async (req: any, res, next) => {
  if (req.headers.authorization) {
    const userData: any = await validateToken(req.headers.authorization);
    const uid = await userData.sub;
    req.uid = uid;
    if (uid) {
      next();
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
});

app.use('/dictionary', dictionaryRouter);
app.use('/learning', learningRouter);

app.get('/auth', async (req: any, res) => {
  console.log(req.uid);
  const responce = await axios.get(
    'https://www.googleapis.com/oauth2/v3/userinfo',
    { headers: { Authorization: `Bearer ${req.query.token}` } }
  );
  const userData: any = await validateToken(req.query.token);

  const isUserExist = await User.findOne({ uid: userData?.sub });

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
  res.sendStatus(200);
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
