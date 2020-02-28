import { Appli } from './Appli';

export interface Applis {
  _embedded: {
    applicationDtoes: Array<Appli>;
  };
}
