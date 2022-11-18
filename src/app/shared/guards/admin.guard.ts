import { Injectable,  } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { catchError, map, Observable, tap } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {


  constructor(private router: Router, private readonly loginService: LoginService){}
  canLoad(
    route: Route, 
    segments: UrlSegment[]):Observable<boolean> {
      return this.loginService.validateToken()
      .pipe(
        tap(valid =>{
          if(!valid){
            this.router.navigate(['/auth/login']);
          }
        })
      );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.loginService.validateToken()
      .pipe(
        tap(valid =>{
          if(!valid){
            this.router.navigate(['/auth/login']);
          }
        })
      );
  }
}
