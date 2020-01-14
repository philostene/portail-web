import { Component, OnInit } from '@angular/core';
import { PortailService } from '../../services/portail.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { StatisticsService } from 'src/app/services/statistics.service';
import { Appli } from 'src/app/models/Appli';

@Component({
  selector: 'app-applis',
  templateUrl: './applis.component.html',
  styleUrls: ['./applis.component.css']
})
export class ApplisComponent implements OnInit {
  appliList;
  currentAppli;
  ngOnInitVar;

  // tslint:disable-next-line: max-line-length
  constructor(private portailService: PortailService, private router: Router, private authService: AuthenticationService, private statisticsService: StatisticsService) {  // liste des applis d'un user authentifié
  this.portailService.getApplisByUser(this.authService.user)
      .subscribe(data => {
        this.appliList = data;
      }, err => {
        console.error(err);
      }); }

  ngOnInit() {
    // liste des applis d'un user authentifié
    // this.portailService.getApplisByUser(this.authService.user)
    //     .subscribe(data => {
    //       this.appliList = data;
    //     }, err => {
    //       console.error(err);
    //     });
    this.ngOnInitVar = true;
    console.log('ngoninit ok');

  }

  // récupère les contenus d'une appli avec clic sur l'appli et renvoi vers page "contents" avec url encodée en base 64
  onGetContentsAppli(appli) {
    this.statisticsService.setAppliSelectedInfo({
      appliName: appli.appliName,
      idAppliKM: appli.idAppliKM
    });

    console.log('appli : ' + appli._links.contents.href);

    const url = appli._links.contents.href;
   // this.router.navigateByUrl('/contents/' + btoa(url)); // btoa() => encoder une url en string base 64

    this.router.navigateByUrl('/contents/' + btoa(url)).then( (e) => {
      if (e) { console.log('Navigation is successfull : ' + url); } else  { console.log('Navigation has fail : ' + url); }
    });
  }

}
