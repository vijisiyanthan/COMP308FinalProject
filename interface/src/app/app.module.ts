//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { NurseComponent } from './pages/nurse/nurse.component';


import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PatientDetailsComponent } from './pages/patient/patient-details/patient-details.component';
import { PatientClinicUpdateComponent } from './pages/patient/patient-clinic-update/patient-clinic-update.component';


//Services
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { PatientClinicListComponent } from './pages/patient/patient-clinic-list/patient-clinic-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NurseComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    PatientDetailsComponent,
    PatientClinicUpdateComponent,
    PatientClinicListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
