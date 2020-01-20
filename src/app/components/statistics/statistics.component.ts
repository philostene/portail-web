import { Component, OnInit, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { PortailService } from '../../services/portail.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { StatisticsService } from '../../services/statistics.service';
import { ContentAppli } from '../../models/ContentAppli';
import { Statistics } from '../../models/Statistics';
import { Appli } from 'src/app/models/Appli';
// import { DatesselectionComponent } from '../datesselection';
import * as moment from 'moment';
import { DatesselectionComponent } from '../datesselection/datesselection.component';
import { BehaviorSubject } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
// import { fromdate } from  '../datesselection/datesselection.component';

// import {  }

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
 // statsList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  statsList;
  statsList1: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  statsResponse;
  currentAppli;
  currentContent;
  ngOnInitVar;
  nomAppli;
  nomContent;
  appliTest: Appli;
  pubID;
  url;

  // tslint:disable-next-line: max-line-length
  constructor( private statisticsService: StatisticsService, private portailService: PortailService, private activatedRoute: ActivatedRoute, private router: Router) {
  }
 ngOnInit() {

  this.ngOnInitVar = true;
  console.log('ngoninit ok');
      // console.log('url encodée Base64: ' + this.activatedRoute.snapshot.params.url);
  // const param: string = this.activatedRoute.snapshot.params.url;
        // const param: string = this.activatedRoute.snapshot.params.id;

  this.statisticsService.getContentSelected().subscribe(info => this.currentContent = info);
  // this.nomContent = this.statisticsService.getContentSelectedInfo();
  this.statisticsService.getAppliSelected().subscribe( info => this.appliTest = info);
  this.nomAppli = this.appliTest.appliName;
  this.url = this.currentContent.contentURL;
  this.pubID = this.currentContent.id;
        // console.log('url décodée Base64: ' + this.currentContent);
       // url = 'http://localhost:8080/contents/2/statistiquesParJoursList';
 // url = 'http://localhost:8080/';
  const dateString = '2019/11/10';
  const dateString1 = '2019/11/15';
        // var toto = moment (dateString,"DD/MM/YYYY");
        // var titi = toto.toDate();
  const newDate = new Date(dateString);
  const newDate1 = new Date (dateString1);
  let toDate = moment().format('DD/MM/YYYY');
  let fromDate = moment().subtract(3, 'months').format('DD/MM/YYYY');
  fromDate = fromDate.replace('/' , '%2f');
  fromDate = fromDate.replace('/' , '%2f');
  toDate = toDate.replace('/' , '%2f');
  toDate = toDate.replace('/' , '%2f');


  // toDate.format('DD/MM/YYYY');

 // url = 'http://localhost:8080/statistiquesParJours/search/findByDateDBBetween?date=' + newDate + '&date1=' + newDate1;
 // url = 'http://localhost:8080/statistiquesparjour?pubId=' + pubID.toString() + '&fromDate=19%2f10%2f2019&toDate=19%2f11%2f2019';
  this.url = 'http://localhost:8080/statistiquesparjour?pubId=' + this.pubID.toString() + '&fromDate=' + fromDate + '&toDate=' + toDate;
  // url = 'http://localhost:8080/statistiquesParJours';
        // this.portailService.getRessource(url);
       // this.getStats(url);
        // getStats(url) {
  this.getStats(this.url);
      // this.portailService.getRessource(url)
      //    .subscribe(dataS => {
      //      this.statsList = dataS;
      //    }, err => {
      //      console.log(err);
      //    });

     // }

 }

   // récupère contenus via l'url décodée en Base 64 et via le Service
getStats(url) {
     //  this.portailService.getStats(url)
     this.portailService.getRessource(url)
        .subscribe(data => {
          this.statsList = data;

          // let index = 0;
          // for (const stats of this.statsResponse._embedded.statistiquesParJourDtoes) {
          //       console.log(stats);
          //       console.log(this.statsResponse._embedded.statistiquesParJourDtoes.length);
          //       this.statsList1[index].subscribe(stats);
          //       index++;
          //     }
          // this.statsList.subscribe(this.statsList1) ;
        }, err => {
          console.log('stats errs ' + err);
        });

  }

  startrequest() {
  let fromDate: any;
  this.statisticsService.getFromDateSelected().subscribe(info => fromDate = info.fromDate);
  let toDate: any;
  this.statisticsService.getToDateSelected().subscribe(info => toDate = info.toDate);
  fromDate = fromDate.replace('/' , '%2f');
  fromDate = fromDate.replace('/' , '%2f');
  toDate = toDate.replace('/' , '%2f');
  toDate = toDate.replace('/' , '%2f');
  // const urlInterne = '/stats';
  // this.statsList = [];

  // this.router.navigateByUrl(urlInterne).then( (e) => {
  //  if (e) { console.log('Navigation is successfull : ' + urlInterne); } else  { console.log('Navigation has fail : ' + urlInterne); }
  // });
  this.url = 'http://localhost:8080/statistiquesparjour?pubId=' + this.pubID.toString() + '&fromDate=' + fromDate + '&toDate=' + toDate;
  this.getStats(this.url);
  console.log('toto');
 }
}


