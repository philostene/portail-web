import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material.module';
// import { BehaviorSubject } from 'rxjs';

import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/login/login.component';
import { ApplisComponent } from './components/applis/applis.component';
import { ContentsComponent } from './components/contents/contents.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AdminApplisComponent } from './components/admin-applis/admin-applis.component';
import { AdminContentsComponent } from './components/admin-contents/admin-contents.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminEditUserComponent } from './components/admin-edit-user/admin-edit-user.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { DatesselectionComponent } from './components/datesselection/datesselection.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ArraySortPipe } from './ArraySortPipe';
import { AlertComponent } from './components/alert/alert.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplisComponent,
    ContentsComponent,
    LoginComponent,
    ContactComponent,
    HomeComponent,
    AdminApplisComponent,
    AdminContentsComponent,
    AdminUsersComponent,
    AdminEditUserComponent,
    StatisticsComponent,
    DatesselectionComponent,
    ArraySortPipe,
    AlertComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    NgbModule
    ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
