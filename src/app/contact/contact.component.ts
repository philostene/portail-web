import { Component, OnInit } from '@angular/core';
import { Email } from '../models/Email';
import { EmailService } from '../services/email.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // imgConstruction = 'assets/images/page-en-construction.png';
  emailUser: Email = new Email();

  constructor(private httpClient: HttpClient, private emailService: EmailService) { }

  ngOnInit() {
  }

  envoyerEmail() {
    this.emailService.envoyerEmail(this.emailUser)
        .subscribe(data => {
          console.log(data);
          //location.reload();
        }, err => {
          console.error(err);
          alert('Une erreur est survenue lors de l\'envoi du courrier électronique');
        });
  }

  onSubmit() {
    this.envoyerEmail();
  }

}
