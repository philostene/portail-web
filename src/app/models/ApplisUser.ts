import { Appli } from './Appli';
import { AppliUser } from './AppliUser';

export interface ApplisUser {
  _embedded: {
    applis: Array<AppliUser>;
  };
}
