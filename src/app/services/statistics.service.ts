import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appli } from '../models/Appli';
import { Statistic } from '../models/statistic';
import { ContentAppli } from '../models/ContentAppli';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  public  BASE_URL = 'toto';
  // public  currentAppli: Array<Appli> = [];
  private  currentContent: ContentAppli;
  public   currentContents: Array<ContentAppli> = [];
  public   currentStatistics: Array<Statistic> = [];
  private  currentAppli: Appli;

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }

  private appliSelected = new BehaviorSubject<any>({
       appliname: 'Knowmore',
       idAppliKM: 'KnowmoreKM'

   });

  setAppliSelectedInfo(appli: any) {
    this.appliSelected.next(appli);
  }

  getAppliSelectedInfo() {
    return this.appliSelected.asObservable();
  }

  goToLink() {
    return `${this.BASE_URL}`;
  }

  getStatistiquesParJourById(id: string): Observable<Statistic> {
    console.log('id: ', id);
    return this.httpClient.get<Statistic>(`${this.BASE_URL}/statistiquesParJour/` + id);
  }

  setCurrentContent(content) {
    this.currentContent = content;
  }

  getCurrentContent(){
    return this.currentContent;
  }

  setCurrentAppli(appli){
    this.currentAppli = appli;
  }

  getCurrentAppli(){
    return this.currentAppli;
  }

}
