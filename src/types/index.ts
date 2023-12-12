import { Request } from 'express';

export interface IYandexDictTranslation {
  text: string;
  pos: string;
  tr: [
    {
      text: string;
      pos?: any;
      fr: number;
      syn?: any;
      mean?: any;
      ex?: any;
    }
  ];
}

export interface ITranslation {
  pos: string;
  text: string;
  popularity: number;
}

export interface IUser {
  uid: string;
  name: string;
  avatar: string;
  email: string;
}

export interface DefaultRequest extends Request {
  userData?: IUser;
}
