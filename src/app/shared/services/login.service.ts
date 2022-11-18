import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
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

  loginByUser(body: LoginI): Observable<LoginI>{
    const url = this.urlGtBack + `/users/login`;
    return this.http.post<LoginI>(url,body);
  }
  
  validateToken(){
    const direccion = this.urlGtBack + '/users/verify';
    return this.http.post(direccion,'')
    .pipe(
      map( (resp:any) =>{
        return resp.response;
      }),
      catchError( err => of(false))
    );
  }
  saveToken(token:any) {
    localStorage.setItem('token', token);
  }
}
