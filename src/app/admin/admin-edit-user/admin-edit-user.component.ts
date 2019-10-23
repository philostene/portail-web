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
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent implements OnInit {
  currentUser;
  currentRoles: Array<Role>;
  currentApplis: Appli [];

  constructor(
    private portailService: PortailService,
    private authService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
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

    /* onUpdateUser(data) {
      this.authService.updateRegister(data)
          .subscribe(resp => {
            // this.mode = 'list';
            // this.getAllUsers();
          }, err => {
            console.error(err);
          });
      } */

    onUpdateUser(formData) {
      let url = this.currentUser._links.self.href;
      this.portailService.patchRessource(url, formData)
          .subscribe(d => {
            this.currentUser = d;
            this.router.navigateByUrl('/adminUsers');
          }, err => {
            console.error(err);
          });
    }

}
