import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AuthSigninV2RoutingModule } from './auth-signin-v2-routing.module';
import { AuthSigninV2Component } from './auth-signin-v2.component';

@NgModule({
  declarations: [AuthSigninV2Component],
  imports: [
    CommonModule,
    AuthSigninV2RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthSigninV2Module { }
