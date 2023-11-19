import { Router } from 'express';
import axios from 'axios';
import { User } from '../models/User';

const dictionaryRouter = Router();

dictionaryRouter
  .get('/', (req, res) => {
    res.send('dictionary root');
  })
  .get('/words', async (req, res) => {
    // const words = await Word.find({});
    // res.json(words);
  })
  .get('/translate', async (req, res) => {
    const translations: IYandexDictResponce = await axios
      .get(
        `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20231114T095349Z.e9533bbdd5907c47.5066f417c100bcd5afaa9c90593faf7f6a47428d&lang=en-ru&text=${req.body.text}`
      )
      .then((res) => res.data);
    if (translations.def.length > 0) {
      const responceTranslations = translations.def.map((block) => ({
        pos: block.pos,
        words: block.tr
          .map((translation) => ({
            text: translation.text,
            popularity: translation.fr,
          }))
          .filter((translation) => translation.popularity >= 5),
      }));
      res.json(responceTranslations);
    } else {
      res.status(404).json({ errorMessage: 'Невозможно перевести это слово' });
    }
  });

export default dictionaryRouter;
