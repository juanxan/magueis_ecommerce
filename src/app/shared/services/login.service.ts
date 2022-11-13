import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import {LoginI} from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public titanId = Number(localStorage.getItem('id'));
  private urlGtBack = environment.url;
  constructor(private readonly http: HttpClient) { }

  login(body: LoginI): Observable<LoginI>{
    const url = this.urlGtBack + `/users/login`;
    return this.http.post<LoginI>(url,body);
  }
}
