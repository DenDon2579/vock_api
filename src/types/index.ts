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
