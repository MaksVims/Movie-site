export enum PROFESSION_KEY {
  ACTOR = 'ACTOR',
  DIRECTOR = 'DIRECTOR',
  PRODUCER = 'PRODUCER',
  WRITER = 'WRITER',
  OPERATOR = 'OPERATOR',
  COMPOSER = 'COMPOSER',
  DESIGN = 'DESIGN',
  EDITOR = 'EDITOR',
}

export interface IStaffByMovie {
  staffId: number,
  nameRu: string,
  nameEn: string,
  posterUrl: string
  professionText: string,
  professionKey: PROFESSION_KEY
}

export interface IPersonMovie {
  filmId: number,
  nameRu: string,
  nameEn: string,
  rating: string,
  description: string,
  professionKey: PROFESSION_KEY,
  posterUrlPreview: string,
  year: string,
  countries: [{ country: string }],
}

export interface ISpecificStaff {
  personId: number,
  webUrl: string,
  nameRu: string,
  nameEn: string,
  sex: string,
  posterUrl: string,
  birthday: string,
  age: number,
  birthplace: string,
  profession: string,
  growth: number,
  facts: [string]
  films: IPersonMovie[]
}
