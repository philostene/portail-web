import { Component, OnInit } from '@angular/core';
import { Appli } from '../models/Appli';
import { PortailService } from '../services/portail.service';
import { User } from '../models/User';


@Component({
  selector: 'app-test-user-applis',
  templateUrl: './test-user-applis.component.html',
  styleUrls: ['./test-user-applis.component.css']
})
export class TestUserApplisComponent implements OnInit {
  currentUser: User;
  currentApplis: Appli [];
  currentApplisIds: number [];
  allApplis: Array<Appli>;

  constructor(private portailService: PortailService) { }

  ngOnInit() {
    let url = this.portailService.getBaseUrl() + '/userApps/' + this.currentUser.id + '/applis';
    this.portailService.getUser(url)
    .subscribe(data => {
      this.currentUser = data;
      console.log('currentUser in getUser(url) : ' );
      console.log( this.currentUser);
      this.onGetUserById();
      this.getUserApplis(this.currentUser);
    }, err => {
      console.error(err);
    });

  }

  getUserApplis(currentUser: User) {
    this.portailService.getApplisByUser(currentUser)
      .subscribe(data => {
          this.currentApplis = data._embedded.applis;
          this.currentApplisIds = [this.currentApplis.length];
          this.currentApplis.forEach(appli => {
            console.log('appli ', appli);
            this.currentApplisIds.push(appli.id);
          });
          // console.log('currentApplis : ' );
          // console.log(this.currentApplis);
        },
        err => {
        console.error(err);
      });
  }

  onGetUserById() {
    let url = this.portailService.getBaseUrl() + `/getUserById/` + this.currentUser.id ;
    this.portailService.getRessource(url)
        .subscribe(data => {
          console.log(this.currentUser);
        }, err => {
          console.error(err);
        });
  }

}
