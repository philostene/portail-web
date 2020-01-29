import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentsComponent } from './app/components/contents/contents.component';
import { LoginComponent } from './app/components/login/login.component';
import { AdminApplisComponent } from './app/components/admin-applis/admin-applis.component';
import { AdminContentsComponent } from './app/components/admin-contents/admin-contents.component';
import { AdminUsersComponent } from './app/components/admin-users/admin-users.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { ApplisComponent } from './app/components/applis/applis.component';
import { HomeComponent } from './app/components/home/home.component';
import { AdminEditUserComponent } from './app/components/admin-edit-user/admin-edit-user.component';
import { StatisticsComponent } from './app/components/statistics/statistics.component';
// import { DatesselectionComponent} from './app/components/datesselection/datesselection.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'applis', component: ApplisComponent },
  { path: 'contents/:url', component: ContentsComponent },
  { path: 'contents', component: ContentsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminApplis', component: AdminApplisComponent },
  { path: 'adminContents', component: AdminContentsComponent },
  { path: 'adminUsers', component: AdminUsersComponent },
  // { path: 'admin-edit-user/:id', component: AdminEditUserComponent },
  { path: 'admin-edit-user/:url', component: AdminEditUserComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'userApps', component: AdminUsersComponent },
  { path: 'stats', component: StatisticsComponent }
  // { path: 'datesselection', component: DatesselectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
