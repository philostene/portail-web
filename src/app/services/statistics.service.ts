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
       appliname: 'DefaultAppliName',
       idAppliKM: 'DefaultAppliId'

   });

   private contentSelected = new BehaviorSubject<any>(
     {
       contentName: 'DefaultContentName',
       idContentKM: 'defalutContentId',
       id: 0,
       contentURL: 'defaulURL'
     }
   );

  private fromDateSelected = new BehaviorSubject<any>({
    fromDate: 'DefaultFromDate'
  });

  private toDateSelected = new BehaviorSubject<any>({
    toDate: 'DefaultToDate'
  });

  setAppliSelected(appli: any) {
    this.appliSelected.next(appli);
  }

  getAppliSelected() {
    return this.appliSelected.asObservable();
  }

  setContentSelected(content: any) {
    this.contentSelected.next(content);
  }

  getContentSelected() {
    return this.contentSelected.asObservable();
  }

  setFromDateSelected(date: any) {
   this.fromDateSelected.next(date);
  }

  getFromDateSelected() {
    return this.fromDateSelected.asObservable();
  }

  setToDateSelected(date: any) {
    this.toDateSelected.next(date);
   }

  getToDateSelected() {
    return this.toDateSelected.asObservable();
  }

  goToLink() {
    return `${this.BASE_URL}`;
  }

  getStatistiquesParJourById(id: string): Observable<Statistic> {
    console.log('id: ', id);
    return this.httpClient.get<Statistic>(`${this.BASE_URL}/statistiquesParJour/` + id);
  }

 // setCurrentContent(content) {
 //   this.currentContent = content;
 // }

  // getCurrentContent(){
  //   return this.currentContent;
  // }

  // setCurrentAppli(appli){
  //   this.currentAppli = appli;
  // }

  // getCurrentAppli(){
  //   return this.currentAppli;
  // }

}
