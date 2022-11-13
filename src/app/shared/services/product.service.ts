import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductsI } from '../interfaces/product.interface';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  public titanId = Number(localStorage.getItem('id'));
  private urlGtBack = environment.url;

  constructor(private readonly http: HttpClient) { }

  getProducts(): Observable<ProductsI[]> {
    const url = this.urlGtBack + `/product`;
    return this.http.get<ProductsI[]>(url);
  }
}
