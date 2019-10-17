import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private authService: AuthenticationService, private router: Router ) { }

  ngOnInit() {
  }

  register(formData) {
    this.authService.register(formData)
        .subscribe(resp => {
          console.log('success', resp);
          this.router.navigateByUrl('/profile');
        }, err => {
          console.error('failure', err);
        });
  }

}
