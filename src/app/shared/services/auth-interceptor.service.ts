import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,HttpErrorResponse  } from '@angular/common/http';
import { catchError, Observable, throwError   } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{
  token: string = '';
  constructor( private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

   this.token= String(localStorage.getItem('token'));

    let request = req;

    if (this.token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ this.token }`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.router.navigateByUrl('/index');
        }

        return throwError( err );

      })
    );
  }

}
