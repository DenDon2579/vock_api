import { Router } from 'express';
import { User } from '../models/User';

const userRouter = Router();

userRouter
  .get('/', async (req: any, res) => {
    res.status(200).json(req.userData);
  })
  .get('/auth', async (req: any, res) => {
    const userData: any = req.userData;
    const isUserExist = await User.findOne({ uid: userData?.uid });

    if (!isUserExist) {
      await User.create({
        uid: userData.uid,
        userName: userData.name,
        email: userData.email,
        avatar: userData.avatar,
        dictionary: {
          words: [
            {
              englishWord: 'hello',
              type: 'common',
              progress: 56,
              translations: [{ pos: 'noun', popularity: 5, text: 'привет' }],
            },
          ],
        },
      });
    }
    res.sendStatus(200);
  });

export default userRouter;
