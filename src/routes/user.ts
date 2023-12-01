import { Router } from 'express';
import { User } from '../models/User';

const userRouter = Router();

userRouter
  .get('/', async (req: any, res) => {
    res.status(200).json(req.userData);
  })
  .head('/auth', async (req: any, res) => {
    const userData: any = req.userData;
    const isUserExist = await User.findOne({ uid: userData?.uid });

    if (!isUserExist) {
      await User.create({
        uid: userData.uid,
        userName: userData.name,
        email: userData.email,
        avatar: userData.avatar,
        dictionary: {
          words: [],
        },
      });
    }
    res.sendStatus(200);
  });

export default userRouter;
