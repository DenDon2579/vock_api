import Express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const app = Express();
app.use(bodyParser.json());
app.get('/users/:name', async (req, res) => {
  const user = await prisma.user.create({
    data: {
      name: req.params.name,
    },
  });
  res.status(502).send('GOOD');
});

app.listen(3000);
