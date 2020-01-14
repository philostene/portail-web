export interface ContentAppli {
  id: number;
  idContentKM: string;
  contentName: string;
  published: boolean;
  typeService: string;
  nbAffichages: number;
  nbLectures: number;
  icone: string;
  contentURL: string;
  debut: Date;
  fin: Date;
  pubID: string;
  _links: {
    self: {
      href: string
    },
    content:{
      href: string
    },
    appli: {
      href: string
    },
    statistiquesParJoursList: {
      href: string
    }
  };
}
