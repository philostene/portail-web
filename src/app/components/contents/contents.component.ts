import { Component, OnInit } from '@angular/core';
import { PortailService } from '../../services/portail.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  contentList;
  ngOnInitVar;
  // tslint:disable-next-line: max-line-length
  constructor(private statisticsService: StatisticsService, private portailService: PortailService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

 ngOnInit() {
    // le constructeur se charge une seule fois donc il faut écouter l'url pour que changement OK
    // Navigation Start : on peut récupérer paramètres avant que l'url change
    // Navigation End : on peut récupérer paramètres quand l'url change
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     console.log('url encodée Base64: ' + this.activatedRoute.snapshot.params.url);
    //     const param: string = this.activatedRoute.snapshot.params.url;
    //     // const param: string = this.activatedRoute.snapshot.params.id;
    //     const url = atob(param); // url décodée en base 64
    //     console.log('url décodée Base64: ' + url);
    //     this.getContents(url);
    //   }
    // });
    this.ngOnInitVar = true;
    console.log('ngoninit of contents ok');
    this.getContents();
   }

  // récupère contenus via l'url décodée en Base 64 et via le Service
  getContents() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('url encodée Base64: ' + this.activatedRoute.snapshot.params.url);
        const param: string = this.activatedRoute.snapshot.params.url;
        // const param: string = this.activatedRoute.snapshot.params.id;
        const url = atob(param); // url décodée en base 64
        console.log('url décodée Base64: ' + url);
       //  this.getContents(url);
        this.portailService.getRessource(url)
            .subscribe(data => {
                  this.contentList = data;
            }, err => {
            console.log(err);
       });
     }
  });

  }

  goToLink(content) {
    console.log('cnt url' + content.contentURL);
    console.log('cnt phil: ' + content.idContentKM );
 //   this.statisticsService.setCurrentContent(content);
    this.statisticsService.setContentSelected({
      contentName: content.contentName,
      idAppliKM: content.idContentKM,
      id: content.id,
      contentURL: content.contentURL
    });
    const urlInterne = '/stats';
    this.router.navigateByUrl(urlInterne).then( (e) => {
      if (e) { console.log('Navigation is successfull : ' + urlInterne); } else  { console.log('Navigation has fail : ' + urlInterne); }
    });
  }

}

