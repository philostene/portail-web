import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PortailService } from 'src/app/services/portail.service';
import { User } from 'src/app/models/User';
import { Role } from 'src/app/models/Role';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent implements OnInit {
  currentUser: User;
  role: Role;

  constructor(private portailService: PortailService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.id);
    let id = this.activatedRoute.snapshot.params.id;
    this.portailService.getUserById(id)
        .subscribe(data => {
          console.log('data', data);
          this.currentUser = data;
        }, err => {
          console.error(err);
        });
  }


}
