import { Component, OnInit } from "@angular/core";

import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  userStatus: any;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getLoggedInStatus.subscribe(status =>
      this.changeStatus(status)
    );
    this.userService.getLoggedInStatus.emit("Inactive");
  }

  onLogout() {
    this.userService.deleteToken();
    this.userService.getLoggedInStatus.emit("Inactive");
    this.router.navigate(["/login"]);
  }

  private changeStatus(userStatus) {
    this.userStatus = userStatus;
  }
}
