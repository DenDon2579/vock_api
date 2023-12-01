import axios, { ResponseType } from 'axios';
import { RequestParamHandler, Response } from 'express';
import { ITranslation, IYandexDictTranslation } from '../types';

export const translate = async (req: any, res: any) => {
  console.log(req.query.word);
  if (req.query.word) {
    const responce: IYandexDictTranslation[] = await axios
      .get(
        `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20231114T095349Z.e9533bbdd5907c47.5066f417c100bcd5afaa9c90593faf7f6a47428d&lang=en-ru&text=${req.query.word}`
      )
      .then((res) => res.data.def);
    const translations: ITranslation[] = [];

    responce.forEach((posGroup) =>
      posGroup.tr.forEach((translation) => {
        if (translation.fr >= 5) {
          translations.push({
            pos: posGroup.pos,
            text: translation.text,
            popularity: translation.fr,
          });
        }
      })
    );
    translations.sort((a, b) => b.popularity - a.popularity);
    if (translations.length > 0) {
      res.status(200).json(translations);
    } else {
      res.status(404).send('No translation');
    }
  } else {
    res.status(404).send('No word entered');
  }
};
