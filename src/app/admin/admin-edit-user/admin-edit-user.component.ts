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
import { MatOptionSelectionChange } from '@angular/material/core';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent implements OnInit {
  currentUser;
  currentRoles: Array<Role>;
  currentApplis: Appli [];
  allRoles: Array<Role>;
  currentRolesIds: number [];

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
    this.getAllRoles();
    }

    getUserRoles(user: User) {
      this.portailService.getRoleByUser(user)
        .subscribe(data => {
          this.currentRoles = data._embedded.roleApps;
          this.currentRolesIds = [this.currentRoles.length];
          this.currentRoles.forEach(role => {
              console.log('role ', role);
              this.currentRolesIds.push(role.id);
            });
          },
          err => {
          console.error(err);
        });
    }

    getAllRoles() {
      this.portailService.getRoles()
        .subscribe(data => {
            this.allRoles = data._embedded.roleApps;
            console.log('allRoles : ' );
            console.log(this.allRoles);
          },
          err => {
          console.error(err);
        });
    }

    // modifie le role selectionné dans la mat-select puis add ou delete role
    updateUserRoles(event: MatOptionSelectionChange, role: Role) {
      // role selectionné dans les options mat-select
      let selected = event.source.selected;
      if (selected === true) {
        this.addInCurrentRoles(role);
      } else {
        this.deleteInCurrentRoles(role);
      }
      console.log('currentRoles ', this.currentRoles);
    }

    // si role selectionné n'est pas dans la liste des rôles du USER, on l'ajoute
    addInCurrentRoles(role: Role) {
      if (!this.isInCurrentRoles(role)) {
      this.currentRoles.push(role);
      this.currentRolesIds.push(role.id);
      }
    }

    // si role est dans la liste des rôles du USER, on le décoche et on le supprime
    deleteInCurrentRoles(role: Role) {
      if (this.isInCurrentRoles(role)) {
        // on vérifie que le role est dans la liste des roles de USER (currentRoles)
        for ( let i = 0; i < this.currentRoles.length; i++) {
          const idCurrentRole = this.currentRoles[i].id ;
          if (idCurrentRole === role.id) {
            // suppression de la liste des roles du user
            this.currentRoles.splice(i, 1);
            // suppression de la liste des currentRolesIds du user
            const index = this.currentRolesIds.indexOf(idCurrentRole);
            if (index > -1) {
              this.currentRolesIds.splice(index, 1);
            }
          }
       }
      }
    }

    // Vérifie si le role coché est dans la liste des roles du user
    isInCurrentRoles(role: Role) {
      for (let i = 0; i < this.currentRoles.length; i++) {
        if ( this.currentRoles[i].id === role.id) {
         return true;
        }
     }
      return false;
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

    // update ressources sauf roles et applis
    onUpdateUser(formData) {
      let url = this.currentUser._links.self.href;
      this.portailService.patchRessource(url, formData)
          .subscribe(userReturned => {
            this.currentUser = userReturned;
            this.onUpdateUserRoles();
            this.onUpdateUserApplis();
            this.router.navigateByUrl('/adminUsers');
          }, err => {
            console.error(err);
          });


    }

    onUpdateUserRoles() {
      let url =  this.portailService.getBaseUrl() + `/updateUserRoles/` + this.currentUser.id ;

      this.portailService.putRessource(url, this.currentRoles)
      .subscribe(resp => {
       let retour: HttpResponse<any> =resp;
       console.log(retour);

      }, err => {
        console.error(err);
      });
    }

    onUpdateUserApplis() {

    }
}
