import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { HomeComponent } from './pages/home/home.component';
import { NurseComponent } from './pages/nurse/nurse.component';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

import { PatientClinicListComponent } from './pages/patient/patient-clinic-list/patient-clinic-list.component';
import { PatientDetailsComponent } from './pages/patient/patient-details/patient-details.component';
import { PatientClinicUpdateComponent } from './pages/patient/patient-clinic-update/patient-clinic-update.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {title: 'Final Project'} },
  { path: 'nurse', component: NurseComponent, data: {title: 'Nurse Account'} },
  { path: 'login', component: LoginComponent, data: {title: 'Login'} },
  { path: 'signup', component: SignupComponent, data: {title: 'Sign Up'} },

  { path: 'patient-clinic-list', component: PatientClinicListComponent },
  { path: 'patient-clinic-list/:id', component: PatientClinicListComponent },
  { path: 'patient-details', component: PatientDetailsComponent },
  { path: 'patient-details/:_id', component: PatientDetailsComponent },
  { path: 'patient-clinic-update', component: PatientClinicUpdateComponent },


   // Redirecting all empty routes to home
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
