import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { Role } from '../models/Role';
import { Roles } from '../models/Roles';
import { Applis } from '../models/Applis';
import { Statistics } from '../models/Statistics';
import { ApplisUser } from '../models/ApplisUser';


@Injectable({
  providedIn: 'root'
})
export class PortailService {

  public BASE_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }

  getBaseUrl() {
    return `${this.BASE_URL}`;
  }

  getAllApplis() {
    return this.httpClient.get<Applis>(`${this.BASE_URL}/applis`);
  }

  getAllUsers() {
    const urltest = `${this.BASE_URL}/userApps`;
    return this.httpClient.get(urltest);
  }

  // récupérer n'importe quelle ressource par son url avec spring data rest
  getRessource(url) {
    return this.httpClient.get(url);
  }

  // récupérer n'importe quelle ressource par son url avec spring data rest
  getStats(url) {
    return this.httpClient.get(url);
  }

  // récupérer le user de type USER via URL
  getUser(url): Observable<User> {
    return this.httpClient.get<User>(url);
  }

  getUserById(id): Observable<User> {
    console.log('id: ', id);
    return this.httpClient.get<User>(`${this.BASE_URL}/userApps/` + id);
  }

  getRoles() {
    return this.httpClient.get<Roles>(`${this.BASE_URL}/roleApps`);
  }

/*   getRoleByUser(user: User) {
    return this.httpClient.get<Roles>(`${this.BASE_URL}/userApps/` + user.id + '/roles');
  } */

  getRoleByUser(user: User) {
    return this.httpClient.get<Role>(`${this.BASE_URL}/userApps/` + user.id + '/roles');
    }

  getApplisByUser(user: User) {
    return this.httpClient.get<ApplisUser>(`${this.BASE_URL}/userApps/` + user.id + '/applis');
  }

  deleteRessource(url) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.httpClient.delete(url, { headers});
  }

  postRessource(url, data) {
    console.log(url);
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.httpClient.post(url, data, { headers});
  }

  putRessource(url, data) {
    console.log(url);
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.httpClient.put(url, data, {headers, observe: 'response'});
  }

  patchRessource(url, data) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.httpClient.patch(url, data, {headers}); // patch => ne met à jour que la ou les données qu'on envoi
  }

}
