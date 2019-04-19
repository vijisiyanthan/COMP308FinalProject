//Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

//Components
import { AppComponent } from "./app.component";
import { NurseComponent } from "./pages/nurse/nurse.component";
import { PatientComponent } from "./pages/patient/patient.component";
import { HeaderComponent } from "./partials/header/header.component";
import { FooterComponent } from "./partials/footer/footer.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";

//Services
import {
  FlashMessagesModule,
  FlashMessagesService
} from "angular2-flash-messages";

//Authorization
import { AuthGuard } from "./auth/auth.guard";
import { AuthInterceptor } from "./auth/auth.interceptor";
import { UserService } from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    NurseComponent,
    PatientComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [
    FlashMessagesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
