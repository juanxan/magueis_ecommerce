import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/menu-admin.interfaces';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenuOpts(): Observable<Componente[]>{
    return this.http.get<Componente[]>('../../assets/data/menu-admin.json');
  }
}
