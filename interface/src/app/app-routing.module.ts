import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { NurseComponent } from './pages/nurse/nurse.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: 'nurse', component: NurseComponent, data: {title: 'Nurse Account'} },
  { path: 'login', component: LoginComponent, data: {title: 'Login'} },
  { path: 'signup', component: SignupComponent, data: {title: 'Sign Up'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
