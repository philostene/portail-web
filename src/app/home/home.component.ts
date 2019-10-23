import { Component, OnInit } from '@angular/core';
import { PortailService } from '../services/portail.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

statsImg = 'assets/images/stats-digital.jpg';

  constructor(private portailService: PortailService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }
}
