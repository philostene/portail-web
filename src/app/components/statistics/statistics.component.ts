import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PortailService } from '../../services/portail.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { StatisticsService } from '../../services/statistics.service';
import { ContentAppli } from '../../models/ContentAppli';
import { Statistics } from '../../models/Statistics';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Appli } from 'src/app/models/Appli';
// import {  }

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  statsList;
  currentAppli;
  currentContent;
  ngOnInitVar;
  nomAppli;
  nomContent;
  appliTest: Appli;
  const moment = require('moment');
  toto = moment().format('DD/MM/YYYY');

  // tslint:disable-next-line: max-line-length
  constructor(private statisticsService: StatisticsService, private portailService: PortailService, private activatedRoute: ActivatedRoute, private router: Router) {
  }
 ngOnInit() {
  this.ngOnInitVar = true;
  console.log('ngoninit ok');
      // console.log('url encodée Base64: ' + this.activatedRoute.snapshot.params.url);
  // const param: string = this.activatedRoute.snapshot.params.url;
        // const param: string = this.activatedRoute.snapshot.params.id;
  this.currentContent = this.statisticsService.getCurrentContent(); // atob(param); // url décodée en base 64
  this.nomContent = this.statisticsService.getCurrentContent().contentName;
  this.statisticsService.getAppliSelectedInfo().subscribe( info => this.appliTest = info);
  this.nomAppli = this.appliTest.appliName;
  let url = this.currentContent.contentURL;
  const pubID = this.currentContent.id;
        // console.log('url décodée Base64: ' + this.currentContent);
       // url = 'http://localhost:8080/contents/2/statistiquesParJoursList';
 // url = 'http://localhost:8080/';
  const dateString = '2019/11/10';
  const dateString1 = '2019/11/15';
        // var toto = moment (dateString,"DD/MM/YYYY");
        // var titi = toto.toDate();
  const newDate = new Date(dateString);
  const newDate1 = new Date (dateString1);

 // url = 'http://localhost:8080/statistiquesParJours/search/findByDateDBBetween?date=' + newDate + '&date1=' + newDate1;
  url = 'http://localhost:8080/statistiquesparjour?pubId=' + pubID.toString() + '&fromDate=28%2f10%2f2019&toDate=19%2f11%2f2019';
  // url = 'http://localhost:8080/statistiquesParJours';
        // this.portailService.getRessource(url);
       // this.getStats(url);
        // getStats(url) {
  this.getStats(url);
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
        }, err => {
          console.log('stats errs ' + err);
        });

  }
}

