import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  role: String;
  serverErrorMessages: string;

  constructor(private userService: UserService, private router: Router) {}

  model = {
    userName: "",
    password: ""
  };

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res["token"]);
        this.userService.getLoggedInStatus.emit("Active");
        this.role = this.userService.getUserPayload().role;
        if (this.role == "nurse") {
          this.router.navigateByUrl("/nurse");
        } else if (this.role == "patient") {
          this.router.navigateByUrl("/patient");
        }
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join("\n");
        }
      }
    );
  }
}
