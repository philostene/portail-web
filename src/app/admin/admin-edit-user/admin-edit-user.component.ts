import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PortailService } from 'src/app/services/portail.service';
import { User } from 'src/app/models/User';
import { Role } from 'src/app/models/Role';
import { Roles } from 'src/app/models/Roles';
import { Subscription } from 'rxjs';
import { ApplisComponent } from 'src/app/applis/applis.component';
import { Applis } from 'src/app/models/Applis';
import { Appli } from 'src/app/models/Appli';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent implements OnInit {
  currentUser: User;
  currentRoles: Array<Role>;
  currentApplis: Appli [];

  constructor(private portailService: PortailService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    /* console.log(this.activatedRoute.snapshot.params.id);
    let id = this.activatedRoute.snapshot.params.id;
    this.portailService.getUserById(id)
        .subscribe(data => {
          console.log('data', data);
          this.currentUser = data;
        }, err => {
          console.error(err);
        });
    */

    // récupérer la valeur de l'URL
    let url = atob(this.activatedRoute.snapshot.params.url);
    console.log('url: ' + url);


    this.portailService.getUser(url)
        .subscribe(data => {
          this.currentUser = data;
          console.log('currentUser in getUser(url) : ' );
          console.log( this.currentUser);
          this.getUserRoles(this.currentUser);
          this.getUserApplis(this.currentUser);
        }, err => {
          console.error(err);
        });

    }

    getUserRoles(user: User) {
      this.portailService.getRoleByUser(user)
        .subscribe(data => {

            this.currentRoles = data._embedded.roleApps;
            console.log('currentRoles in getRoleByUser(user) : ' );
          console.log(this.currentRoles);

          },
          err => {
          console.error(err);
        });
    }

    getUserApplis(user: User) {
      this.portailService.getApplisByUser(user)
        .subscribe(data => {

            this.currentApplis = data._embedded.applis;
            console.log('currentApplis : ' );
            console.log(this.currentApplis);

          },
          err => {
          console.error(err);
        });
    }


}
