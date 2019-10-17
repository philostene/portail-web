import { Component, OnInit } from '@angular/core';
import { PortailService } from '../services/portail.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Appli } from '../models/Appli';

@Component({
  selector: 'app-applis',
  templateUrl: './applis.component.html',
  styleUrls: ['./applis.component.css']
})
export class ApplisComponent implements OnInit {
  // appliList: Appli[];
  // appliList$: Observable<Applis[]>;
  appliList;
  currentAppli;
  constructor(private portailService: PortailService, private router: Router) { }

  ngOnInit() {

    // this.appliList$ = this.portailService.getAllApplis();
    this.portailService.getAllApplis()
        .subscribe(data => {
          this.appliList = data;
        }, err => {
          console.error(err);
        });
  }

  // récupère les contenus d'une appli avec clic sur l'appli et renvoi vers page "contents" avec url encodée en base 64
  onGetContentsAppli(appli) {
    this.currentAppli = appli;
    console.log('appli : ' + appli._links.contents.href);
    const urlContents = appli._links.contents.href;
    this.router.navigateByUrl('/contents/' + btoa(urlContents)); // btoa() => encoder une url en string base 64
  }


}
