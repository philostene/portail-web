import { Statistic } from './Statistic';

export interface Statistics {
   _embedded: {
    statistics: Array<Statistic>;
  };
}
