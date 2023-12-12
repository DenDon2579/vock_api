import { Router } from 'express';
import { User } from '../models/User';
import { DefaultRequest } from '../types';

const userRouter = Router();

userRouter
  .get('/', async (req: DefaultRequest, res) => {
    res.status(200).json(req.userData);
  })
  .head('/auth', async (req: DefaultRequest, res) => {
    const userData = req.userData;
    const isUserExist = await User.findOne({ uid: userData?.uid });

    if (!isUserExist && userData) {
      await User.create({
        uid: userData.uid,
        userName: userData.name,
        email: userData.email,
        avatar: userData.avatar,
        dictionary: {
          words: [],
        },
        lastResults: [],
      });
    }
    res.sendStatus(200);
  });

export default userRouter;
