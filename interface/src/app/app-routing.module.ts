import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { componentFactoryName } from "@angular/compiler";
import { HomeComponent } from "./pages/home/home.component";
import { NurseComponent } from "./pages/nurse/nurse.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { PatientComponent } from "./pages/patient/patient.component";
import { VideosComponent } from "./pages/videos/videos.component";

import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { title: "Final Project" } },
  {
    path: "nurse",
    component: NurseComponent,
    data: { title: "Nurse Account", expectedRole: "nurse" },
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent, data: { title: "Login" } },
  { path: "signup", component: SignupComponent, data: { title: "Sign Up" } },
  {
    path: "videos",
    component: VideosComponent,
    data: { title: "Videos", expectedRole: "patient" },
    canActivate: [AuthGuard]
  },
  { path: 'patient-clinic-list', component: PatientClinicListComponent },
  { path: 'patient-clinic-list/:id', component: PatientClinicListComponent },
  { path: 'patient-details', component: PatientDetailsComponent },
  { path: 'patient-details/:_id', component: PatientDetailsComponent },
  { path: 'patient-clinic-update', component: PatientClinicUpdateComponent },

  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
