import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MaterialModule} from '../../material.module';
import {MatDatepickerInputEvent, MatDatepicker} from '@angular/material/datepicker';
import { BehaviorSubject } from 'rxjs';
import {StatisticsService} from '../../services/statistics.service'
import * as moment from 'moment';

@Component({
  selector: 'app-datesselection',
  templateUrl: './datesselection.component.html',
  styleUrls: ['./datesselection.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    {provide: DateAdapter,
     useClass: MomentDateAdapter,
     deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
  ],
})
export class DatesselectionComponent implements OnInit {

  constructor(private adapter: DateAdapter<any>, private statisticsService: StatisticsService) { }

  ngOnInit() {
  }

  addEvent(type: string, event: MatDatepickerInputEvent<any>){
   const  frenchDateFormat = moment(event.value).format('L');
   if (type === 'inputFrom' || type === 'changeFrom') {
     this.statisticsService.setFromDateSelected({
      fromDate: frenchDateFormat });
    }
   if (type === 'inputTo' || type === 'changeTo') {
      this.statisticsService.setToDateSelected({
       toDate: frenchDateFormat });
    }
  }

  french() {
    this.adapter.setLocale('fr');
  }
}
