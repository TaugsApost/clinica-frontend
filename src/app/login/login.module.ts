import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { PrimengModule } from '../utils/primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './tela-login/login.component';
import { LoginService } from './shared/login.service';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
  ],
  providers: [
    //LoginService
  ]
})
export class LoginModule { }
