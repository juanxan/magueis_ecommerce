import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  
  formularioLogin: FormGroup;

  constructor(private fb: FormBuilder,private router: Router,private api: LoginService) { 
    this.formularioLogin = this.fb.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      pass: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      )
    });
  }

  ngOnInit(): void {
  }
  
  signUp(form : any){
    console.log(form);
     this.api.loginByUser(form).subscribe((data: any) =>{
      console.log(data);
       const dataResponse: any = data;
       if(dataResponse.response){
          localStorage.setItem('token',dataResponse.token);
          localStorage.setItem('document',dataResponse.rows[0].document);
          localStorage.setItem('user',dataResponse.rows[0].id);
          localStorage.setItem('rol',dataResponse.rows[0].rol);
          localStorage.setItem('isIntoShowed','true');
          this.router.navigate(['/admin']);
       }else{

       }
     });
  }
}
