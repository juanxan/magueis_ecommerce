import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  token = localStorage.getItem('token');

  constructor(private readonly loginService: LoginService,private router: Router) { }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    if (this.token) {
      this.verifyToken();
    }
  }
  verifyToken() {
    this.loginService.validateToken().subscribe((res:any) => {

    },( error:any) => {
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['auth/login']);
    });
  }

}
