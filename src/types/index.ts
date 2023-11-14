interface IYandexDictResponce {
  def: [
    {
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
  ];
}
