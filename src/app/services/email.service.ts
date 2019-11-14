import { Injectable } from '@angular/core';

import { Email } from '../models/Email';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }
  BASE_URL: string = 'http://localhost:8080';

  envoyerEmail(email: Email): Observable<any> {
    return this.httpClient.post(`${this.BASE_URL}/contact`, email, { responseType: 'text' });
  }
}
