import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginAdminComponent } from './login-admin/login-admin.component';


@NgModule({
  declarations: [
    LoginAdminComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
