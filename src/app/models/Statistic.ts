import { ContentAppli } from './ContentAppli';

export interface Statistic {
  id: number;
  date: string;
  nbAffichage: number;
  NbUsersAyantAffichesLaPastille: number;
  nbDeLectureDeLaPastille: number;
  nbUsersAyantLusLaPastille: number;
  tempsPasseSurLaPastilleMS: string;
  contents: ContentAppli;
  dateDB: Date;
  _links: {
    self: {
      href: string
    }
  };
}
