(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_nurse_nurse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/nurse/nurse.component */ "./src/app/pages/nurse/nurse.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_videos_videos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/videos/videos.component */ "./src/app/pages/videos/videos.component.ts");
/* harmony import */ var _pages_tips_tips_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/tips/tips.component */ "./src/app/pages/tips/tips.component.ts");
/* harmony import */ var _pages_daily_info_daily_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/daily-info/daily-info.component */ "./src/app/pages/daily-info/daily-info.component.ts");
/* harmony import */ var _pages_daily_info_daily_info_update_daily_info_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/daily-info/daily-info-update/daily-info-update.component */ "./src/app/pages/daily-info/daily-info-update/daily-info-update.component.ts");
/* harmony import */ var _pages_tips_patient_tips_patient_tips_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/tips/patient-tips/patient-tips.component */ "./src/app/pages/tips/patient-tips/patient-tips.component.ts");
/* harmony import */ var _pages_patient_patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/patient/patient-details/patient-details.component */ "./src/app/pages/patient/patient-details/patient-details.component.ts");
/* harmony import */ var _pages_patient_patient_clinic_update_patient_clinic_update_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/patient/patient-clinic-update/patient-clinic-update.component */ "./src/app/pages/patient/patient-clinic-update/patient-clinic-update.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");















var routes = [
    { path: "home", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { title: "Final Project" } },
    {
        path: "nurse",
        component: _pages_nurse_nurse_component__WEBPACK_IMPORTED_MODULE_4__["NurseComponent"],
        data: { title: "Nurse Account", expectedRole: "nurse" },
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    },
    { path: "login", component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], data: { title: "Login" } },
    { path: "signup", component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], data: { title: "Sign Up" } },
    {
        path: "videos",
        component: _pages_videos_videos_component__WEBPACK_IMPORTED_MODULE_7__["VideosComponent"],
        data: { title: "Videos", expectedRole: "patient" },
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    },
    {
        path: "patient-tips",
        component: _pages_tips_patient_tips_patient_tips_component__WEBPACK_IMPORTED_MODULE_11__["PatientTipsComponent"],
        data: { title: "Patients", expectedRole: "patient" },
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    },
    {
        path: "patient-daily",
        component: _pages_daily_info_daily_info_component__WEBPACK_IMPORTED_MODULE_9__["DailyInfoComponent"],
        data: { title: "Patients", expectedRole: "patient" },
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    },
    {
        path: "patient-daily-update",
        component: _pages_daily_info_daily_info_update_daily_info_update_component__WEBPACK_IMPORTED_MODULE_10__["DailyInfoUpdateComponent"],
        data: { title: "Patients", expectedRole: "patient" },
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    },
    {
        path: "patient-details",
        component: _pages_patient_patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_12__["PatientDetailsComponent"],
        data: { title: "Nurse Account", expectedRole: "nurse" },
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    },
    {
        path: "patient-details/:_id",
        component: _pages_patient_patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_12__["PatientDetailsComponent"],
        data: { title: "Nurse Account", expectedRole: "nurse" },
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    },
    {
        path: "patient-clinic-update/:_id",
        component: _pages_patient_patient_clinic_update_patient_clinic_update_component__WEBPACK_IMPORTED_MODULE_13__["PatientClinicUpdateComponent"],
        data: { title: "Nurse Account", expectedRole: "nurse" },
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    },
    {
        path: "nurse/tips/:_id",
        component: _pages_tips_tips_component__WEBPACK_IMPORTED_MODULE_8__["TipsComponent"],
        data: { title: "Nurse Account", expectedRole: "nurse" },
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    },
    { path: "", redirectTo: "/home", pathMatch: "full" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<flash-messages></flash-messages>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm5/ngx-youtube-player.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_nurse_nurse_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/nurse/nurse.component */ "./src/app/pages/nurse/nurse.component.ts");
/* harmony import */ var _partials_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./partials/header/header.component */ "./src/app/partials/header/header.component.ts");
/* harmony import */ var _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./partials/footer/footer.component */ "./src/app/partials/footer/footer.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_patient_patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/patient/patient-details/patient-details.component */ "./src/app/pages/patient/patient-details/patient-details.component.ts");
/* harmony import */ var _pages_patient_patient_clinic_update_patient_clinic_update_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/patient/patient-clinic-update/patient-clinic-update.component */ "./src/app/pages/patient/patient-clinic-update/patient-clinic-update.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _pages_videos_videos_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/videos/videos.component */ "./src/app/pages/videos/videos.component.ts");
/* harmony import */ var _pages_tips_tips_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/tips/tips.component */ "./src/app/pages/tips/tips.component.ts");
/* harmony import */ var _pages_tips_patient_tips_patient_tips_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/tips/patient-tips/patient-tips.component */ "./src/app/pages/tips/patient-tips/patient-tips.component.ts");
/* harmony import */ var _pages_daily_info_daily_info_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/daily-info/daily-info.component */ "./src/app/pages/daily-info/daily-info.component.ts");
/* harmony import */ var _pages_daily_info_daily_info_update_daily_info_update_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/daily-info/daily-info-update/daily-info-update.component */ "./src/app/pages/daily-info/daily-info-update/daily-info-update.component.ts");

//Modules






//Components









//Services

//Authorization








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _pages_nurse_nurse_component__WEBPACK_IMPORTED_MODULE_8__["NurseComponent"],
                _partials_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _pages_videos_videos_component__WEBPACK_IMPORTED_MODULE_20__["VideosComponent"],
                _pages_patient_patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_14__["PatientDetailsComponent"],
                _pages_patient_patient_clinic_update_patient_clinic_update_component__WEBPACK_IMPORTED_MODULE_15__["PatientClinicUpdateComponent"],
                _pages_tips_tips_component__WEBPACK_IMPORTED_MODULE_21__["TipsComponent"],
                _pages_tips_patient_tips_patient_tips_component__WEBPACK_IMPORTED_MODULE_22__["PatientTipsComponent"],
                _pages_daily_info_daily_info_component__WEBPACK_IMPORTED_MODULE_23__["DailyInfoComponent"],
                _pages_daily_info_daily_info_update_daily_info_update_component__WEBPACK_IMPORTED_MODULE_24__["DailyInfoUpdateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__["FlashMessagesModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_6__["NgxYoutubePlayerModule"].forRoot()
            ],
            providers: [
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__["FlashMessagesService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__["AuthInterceptor"],
                    multi: true
                },
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var expectedUser = route.data.expectedRole;
        if (!this.userService.isLoggedIn() ||
            this.userService.getUserPayload().role !== expectedUser) {
            this.router.navigateByUrl("/login");
            this.userService.deleteToken();
            this.userService.getLoggedInStatus.emit("Inactive");
            this.userService.getLoggedInRole.emit("User");
            return false;
        }
        else {
            if (route.data.expectedRole == "nurse") {
                this.userService.getLoggedInRole.emit("Nurse");
            }
            else if (route.data.expectedRole == "patient") {
                this.userService.getLoggedInRole.emit("Patient");
            }
            this.userService.getLoggedInStatus.emit("Active");
            return true;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get("noauth"))
            return next.handle(req.clone());
        else {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) { }, function (err) {
                if (err.error.auth == false) {
                    _this.router.navigateByUrl("/login");
                }
            }));
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/models/clinic.ts":
/*!**********************************!*\
  !*** ./src/app/models/clinic.ts ***!
  \**********************************/
/*! exports provided: Clinic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clinic", function() { return Clinic; });
var Clinic = /** @class */ (function () {
    function Clinic() {
    }
    return Clinic;
}());



/***/ }),

/***/ "./src/app/models/daily-info.ts":
/*!**************************************!*\
  !*** ./src/app/models/daily-info.ts ***!
  \**************************************/
/*! exports provided: DailyInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyInfo", function() { return DailyInfo; });
var DailyInfo = /** @class */ (function () {
    function DailyInfo() {
    }
    return DailyInfo;
}());



/***/ }),

/***/ "./src/app/models/tips.ts":
/*!********************************!*\
  !*** ./src/app/models/tips.ts ***!
  \********************************/
/*! exports provided: Tips */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tips", function() { return Tips; });
var Tips = /** @class */ (function () {
    function Tips() {
    }
    return Tips;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/videos.ts":
/*!**********************************!*\
  !*** ./src/app/models/videos.ts ***!
  \**********************************/
/*! exports provided: videos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videos", function() { return videos; });
var videos = [
    {
        title: "Never, Ever Give Up. Arthur's Inspirational Transformation!",
        id: "qX9FSZJu448"
    },
    {
        title: "Never Accept Defeat | Injury Motivation",
        id: "KKqwPjm-54Q"
    },
    {
        title: "Kobe Bryant - Why Do We Fall | Motivational",
        id: "F_7dQovALGI"
    }
];


/***/ }),

/***/ "./src/app/pages/daily-info/daily-info-update/daily-info-update.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pages/daily-info/daily-info-update/daily-info-update.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhaWx5LWluZm8vZGFpbHktaW5mby11cGRhdGUvZGFpbHktaW5mby11cGRhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/daily-info/daily-info-update/daily-info-update.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/daily-info/daily-info-update/daily-info-update.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-dark\">\r\n  <div class=\"row justify-content-center align-items-center\">\r\n    <div class=\"col col-sm-6 col-md-6 col-lg-4 col-xl-3\">\r\n      <!-- Form container -->\r\n      <form #infoForm=\"ngForm\" (ngSubmit)=\"onSubmit(infoForm)\">\r\n        <h2 class=\"display-4 font-weight-bold\">Your Daily Info</h2>\r\n        <hr>\r\n        <br>\r\n        <div class=\"md-form\">\r\n          <i class=\"fa fa-thermometer-three-quarters prefix grey-text\"></i>\r\n          <label for=\"materialFormRegisterNameEx\">Body Temperature</label>\r\n          <input type=\"String\" id=\"materialFormRegisterNameEx\" name=\"bodyTemperature\" class=\"form-control\"\r\n            #bodyTemperature=\"ngModel\" [(ngModel)]=\"model.bodyTemperature\">\r\n        </div>\r\n\r\n        <div class=\"md-form\">\r\n          <i class=\"fa fa-weight prefix grey-text\"></i>\r\n          <label for=\"materialFormRegisterNameEx\">Weight</label>\r\n          <input type=\"String\" id=\"materialFormRegisterNameEx\" name=\"weight\" class=\"form-control\" #weight=\"ngModel\"\r\n            [(ngModel)]=\"model.weight\">\r\n        </div>\r\n\r\n        <div class=\"md-form\">\r\n          <i class=\"fa fa-tint prefix grey-text\"></i>\r\n          <label for=\"materialFormRegisterNameEx\">Blood Sugar Level</label>\r\n          <input type=\"String\" id=\"materialFormRegisterNameEx\" name=\"bloodSugar\" class=\"form-control\"\r\n            #bloodSugar=\"ngModel\" [(ngModel)]=\"model.bloodSugar\">\r\n        </div>\r\n\r\n        <div class=\"text-center mt-4\">\r\n          <input type=\"submit\" class=\"login\" value=\"Send\">\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/daily-info/daily-info-update/daily-info-update.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/daily-info/daily-info-update/daily-info-update.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DailyInfoUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyInfoUpdateComponent", function() { return DailyInfoUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_daily_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/daily-info.service */ "./src/app/services/daily-info.service.ts");
/* harmony import */ var src_app_models_daily_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/daily-info */ "./src/app/models/daily-info.ts");





var DailyInfoUpdateComponent = /** @class */ (function () {
    function DailyInfoUpdateComponent(route, router, infoService) {
        this.route = route;
        this.router = router;
        this.infoService = infoService;
        this.model = new src_app_models_daily_info__WEBPACK_IMPORTED_MODULE_4__["DailyInfo"]();
    }
    DailyInfoUpdateComponent.prototype.ngOnInit = function () {
        this.title = this.route.snapshot.data.title;
        //Get _id from params in order to get clinic data
    };
    DailyInfoUpdateComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (localStorage.getItem("infoId")) {
            this.model = form.value;
            this.model._id = localStorage.getItem("infoId");
            this.infoService.updateItem(this.model).subscribe(function (res) {
                localStorage.removeItem("infoId");
                _this.router.navigateByUrl("/patient-daily");
            }, function (err) { });
        }
        else {
            this.infoService.addItem(form.value).subscribe(function (res) {
                _this.router.navigateByUrl("/patient-daily");
            }, function (err) { });
        }
    };
    DailyInfoUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-daily-info-update",
            template: __webpack_require__(/*! ./daily-info-update.component.html */ "./src/app/pages/daily-info/daily-info-update/daily-info-update.component.html"),
            styles: [__webpack_require__(/*! ./daily-info-update.component.css */ "./src/app/pages/daily-info/daily-info-update/daily-info-update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_daily_info_service__WEBPACK_IMPORTED_MODULE_3__["DailyInfoService"]])
    ], DailyInfoUpdateComponent);
    return DailyInfoUpdateComponent;
}());



/***/ }),

/***/ "./src/app/pages/daily-info/daily-info.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/daily-info/daily-info.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhaWx5LWluZm8vZGFpbHktaW5mby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/daily-info/daily-info.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/daily-info/daily-info.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mask rgba-black-light d-flex justify-content-center align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row wow fadeIn\">\r\n      <div class=\"col-md-9 mb-4 white-text text-center text-md-left\">\r\n        <h2 class=\"display-4 font-weight-bold\">Patient's Daily Info</h2>\r\n        <hr class=\"hr-light\">\r\n\r\n        <a class=\"btn btn-primary\" routerLink=\"/patient-daily-update\" role=\"button\">\r\n          <i class=\"fas fa-plus-circle\"></i>Add record\r\n        </a>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-offsetr-3 col-md-12\">\r\n            <table class=\"table table-bordered table-striped table-hover\">\r\n              <tr>\r\n                <th class=\"text-center\">Record Id</th>\r\n                <th class=\"text-center\">Record Time</th>\r\n                <th class=\"text-center\">Body Temperature</th>\r\n                <th class=\"text-center\">Weight</th>\r\n                <th class=\"text-center\">Blood Sugar</th>\r\n                <th class=\"text-center\"></th>\r\n                <th class=\"text-center\"></th>\r\n              </tr>\r\n              <tr *ngFor=\"let info of infoDetails\">\r\n                <td class=\"text-center\">{{ info._id }}</td>\r\n                <td class=\"text-center\">{{ info.recorded }}</td>\r\n\r\n                <div *ngIf=\"(info.hasOwnProperty('bodyTemperature'));then tempContent else other_content\">\r\n                </div>\r\n                <ng-template #tempContent>\r\n                  <td class=\"text-center\">\r\n                    {{ info.bodyTemperature }}\r\n                  </td>\r\n                </ng-template>\r\n\r\n                <div *ngIf=\"((info.hasOwnProperty('weight')));then heartContent else other_content\">\r\n                </div>\r\n                <ng-template #heartContent>\r\n                  <td class=\"text-center\">\r\n                    {{ info.weight }}\r\n                  </td>\r\n                </ng-template>\r\n\r\n                <div *ngIf=\"((info.hasOwnProperty('bloodSugar')));then bloodContent else other_content\">\r\n                </div>\r\n                <ng-template #bloodContent>\r\n                  <td class=\"text-center\">\r\n                    {{ info.bloodSugar }}\r\n                  </td>\r\n                </ng-template>\r\n                <ng-template #other_content>\r\n                  <td class=\"text-center\">*NR</td>\r\n                </ng-template>\r\n\r\n                <td class=\"text-center\">\r\n                  <a (click)=\"onEdit(info._id)\" class=\"btn btn-info\"><i class=\"fas fa-pencil-alt\"></i> Edit</a>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <a (click)=\"onDelete(info._id)\" class=\"btn btn-danger\"><i class=\"fas fa-pencil-alt\"></i> Delete</a>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n            <p class=\"text-uppercase font-weight-bold\">*NR: Not Recorded Test</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/daily-info/daily-info.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/daily-info/daily-info.component.ts ***!
  \**********************************************************/
/*! exports provided: DailyInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyInfoComponent", function() { return DailyInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_daily_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/daily-info.service */ "./src/app/services/daily-info.service.ts");




var DailyInfoComponent = /** @class */ (function () {
    //title: String;
    function DailyInfoComponent(route, router, dailyService) {
        this.route = route;
        this.router = router;
        this.dailyService = dailyService;
    }
    DailyInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get _id from params in order to get clinic data
        this.route.params.subscribe(function (params) {
            _this.patientId = params._id;
        });
        this.displayDailyInfo();
    };
    DailyInfoComponent.prototype.displayDailyInfo = function () {
        var _this = this;
        this.dailyService.getList().subscribe(function (data) {
            //console.log(data);
            _this.infoDetails = data;
        });
    };
    DailyInfoComponent.prototype.onDelete = function (_id) {
        if (confirm("Are you sure to delete this record ?") == true) {
            this.dailyService.deleteItem(_id).subscribe(function (res) { });
            this.displayDailyInfo();
        }
    };
    DailyInfoComponent.prototype.onEdit = function (infoId) {
        localStorage.setItem("infoId", infoId);
        this.router.navigateByUrl("/patient-daily-update");
    };
    DailyInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-daily-info",
            template: __webpack_require__(/*! ./daily-info.component.html */ "./src/app/pages/daily-info/daily-info.component.html"),
            styles: [__webpack_require__(/*! ./daily-info.component.css */ "./src/app/pages/daily-info/daily-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_daily_info_service__WEBPACK_IMPORTED_MODULE_3__["DailyInfoService"]])
    ], DailyInfoComponent);
    return DailyInfoComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <h1 class=\"display-4\">Welcome to {{ title }}</h1>\r\n    <p class=\"lead\">Project Specifications</p>\r\n    <hr class=\"my-4\">\r\n    <p>Client needs an application to help nurse practitioners to monitor patients during the first weeks of their\r\n        release from hospital and also helps the patients to monitor their daily activities. Develop a responsive app that\r\n        implements the following functionalities:\r\n        1. User registers/login\r\n        2. If user is a nurse:\r\n        a. Allow the user to enter vital signs: body temperature, heart rate, blood pressure, or respiratory\r\n        rate.\r\n        b. Allow the user to access information captured during a previous clinical visit, vital signs: body\r\n        temperature, heart rate, blood pressure, or respiratory rate.\r\n        c. Allow the user to send daily motivational tips to the patient (by storing them in database and\r\n        providing a daily tips page for the patient to view, etc.).\r\n        3. If user is a patient:\r\n        a. Allow user to create and send an emergency alert to first responders (by emailing them, etc.)\r\n        b. Allow user to run video or games to motivate patients to do their physical exercises at home.\r\n        c. Allow user to enter daily information as specified by the doctor/nurse practitioner.\r\n        d. Allow user to use a checklist of common signs and symptoms, to generate a list of possible\r\n        medical conditions and advice on when to consult a health care provider.</p>\r\n    <a class=\"btn btn-info btn-lg\" routerLink=\"/login\" role=\"button\">Let's get started!</a>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(route) {
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.title = this.route.snapshot.data.title;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-dark\">\r\n  <div class=\"row justify-content-center align-items-center\">\r\n    <div class=\"col col-sm-6 col-md-6 col-lg-4 col-xl-3\">\r\n      <form method=\"POST\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(loginForm)\">\r\n        <p class=\"h2 text-center mb-4\">Welcome!</p>\r\n        <div class=\"md-form\">\r\n          <i class=\"fa fa-user\"> </i>\r\n          <label for=\"username\"> Username</label>\r\n          <input type=\"text\" id=\"username\" name=\"userName\" class=\"form-control\" #userName=\"ngModel\"\r\n            [(ngModel)]=\"model.userName\">\r\n        </div>\r\n        <br>\r\n        <div class=\"md-form\">\r\n          <i class=\"fa fa-lock\"></i>\r\n          <label for=\"password\"> Password</label>\r\n          <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" #password=\"ngModel\"\r\n            [(ngModel)]=\"model.password\">\r\n          Or\r\n          <a routerLink=\"/signup\">Register Here</a>\r\n        </div>\r\n        <div class=\"text-center mt-4\">\r\n          <input type=\"submit\" class=\"login\" value=\"Login\">\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.model = {
            userName: "",
            password: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.login(form.value).subscribe(function (res) {
            _this.userService.setToken(res["token"]);
            _this.userService.getLoggedInStatus.emit("Active");
            _this.role = _this.userService.getUserPayload().role;
            if (_this.role == "nurse") {
                _this.userService.getLoggedInRole.emit("Nurse");
                _this.router.navigateByUrl("/nurse");
            }
            else if (_this.role == "patient") {
                _this.userService.getLoggedInRole.emit("Patient");
                _this.router.navigateByUrl("/videos");
            }
        }, function (err) {
            if (err.status === 422) {
                _this.serverErrorMessages = err.error.join("\n");
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/nurse/nurse.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/nurse/nurse.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL251cnNlL251cnNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/nurse/nurse.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/nurse/nurse.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mask rgba-black-light d-flex justify-content-center align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row wow fadeIn\">\r\n      <div class=\"col-md-9 mb-4 white-text text-center text-md-left\">\r\n        <h2 class=\"display-4 font-weight-bold\">Welcome to {{ title }}</h2>\r\n        <hr class=\"hr-light\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-offsetr-3 col-md-12\">\r\n            <table class=\"table table-bordered table-striped table-hover\">\r\n              <tr>\r\n                <th class=\"text-center\">Patient Id</th>\r\n                <th class=\"text-center\">First Name</th>\r\n                <th class=\"text-center\">Last Name</th>\r\n                <th class=\"text-center\">Username</th>\r\n                <th class=\"text-center\"></th>\r\n                <th class=\"text-center\"></th>\r\n                <th class=\"text-center\"></th>\r\n              </tr>\r\n              <tr *ngFor=\"let user of users\">\r\n                <td class=\"text-center\">{{ user._id }}</td>\r\n                <td class=\"text-center\">{{ user.firstName }}</td>\r\n                <td class=\"text-center\">{{ user.lastName }}</td>\r\n                <td class=\"text-center\">{{ user.userName }}</td>\r\n                <td class=\"text-center\">\r\n                  <a routerLink=\"/patient-details/{{user._id}}\" class=\"btn btn-info\"><i class=\"fas fa-pencil-alt\"></i>\r\n                    View</a>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <a routerLink=\"/nurse/tips/{{user._id}}\" class=\"btn btn-link\"><i class=\"fas fa-comments\"></i>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/nurse/nurse.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/nurse/nurse.component.ts ***!
  \************************************************/
/*! exports provided: NurseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseComponent", function() { return NurseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var NurseComponent = /** @class */ (function () {
    function NurseComponent(route, userService, flashMessage) {
        this.route = route;
        this.userService = userService;
        this.flashMessage = flashMessage;
    }
    NurseComponent.prototype.ngOnInit = function () {
        this.title = this.route.snapshot.data.title;
        this.users = new Array();
        this.displayUsers();
    };
    NurseComponent.prototype.displayUsers = function () {
        var _this = this;
        this.userService.getList().subscribe(function (data) {
            //console.log(data);
            _this.users = data;
        });
    };
    NurseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nurse',
            template: __webpack_require__(/*! ./nurse.component.html */ "./src/app/pages/nurse/nurse.component.html"),
            styles: [__webpack_require__(/*! ./nurse.component.css */ "./src/app/pages/nurse/nurse.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], NurseComponent);
    return NurseComponent;
}());



/***/ }),

/***/ "./src/app/pages/patient/patient-clinic-update/patient-clinic-update.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/patient/patient-clinic-update/patient-clinic-update.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnQvcGF0aWVudC1jbGluaWMtdXBkYXRlL3BhdGllbnQtY2xpbmljLXVwZGF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/patient/patient-clinic-update/patient-clinic-update.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/patient/patient-clinic-update/patient-clinic-update.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-dark\">\r\n  <div class=\"row justify-content-center align-items-center\">\r\n    <div class=\"col col-sm-6 col-md-6 col-lg-4 col-xl-3\">\r\n      <!-- Form container -->\r\n      <form #clinicForm=\"ngForm\" (ngSubmit)=\"onSubmitPatientClinicUpdate(clinicForm)\">\r\n        <h2 class=\"display-4 font-weight-bold\">Patient's Info</h2>\r\n        <hr>\r\n        <br>\r\n        <div class=\"md-form\">\r\n          <i class=\"fa fa-user prefix grey-text\"></i>\r\n          <label for=\"materialFormRegisterNameEx\">Body Temperature</label>\r\n          <input type=\"Number\" id=\"materialFormRegisterNameEx\" name=\"bodyTemperature\" class=\"form-control\"\r\n            #bodyTemperature=\"ngModel\" [(ngModel)]=\"clinic.bodyTemperature\">\r\n        </div>\r\n        <div class=\"md-form\">\r\n          <i class=\"fa fa-heart prefix grey-text\"></i>\r\n          <label for=\"materialFormRegisterEmailEx\">Heart Rate</label>\r\n          <input type=\"text\" id=\"materialFormRegisterEmailEx\" name=\"heartRate\" class=\"form-control\" #heartRate=\"ngModel\"\r\n            [(ngModel)]=\"clinic.heartRate\">\r\n\r\n        </div>\r\n        <div class=\"md-form\">\r\n          <i class=\"fa fa-exclamation-triangle prefix grey-text\"></i>\r\n          <label for=\"materialFormRegisterConfirmEx\">Blood Pressure</label>\r\n          <input type=\"text\" id=\"materialFormRegisterConfirmEx\" name=\"bloodPressure\" class=\"form-control\"\r\n            #bloodPressure=\"ngModel\" [(ngModel)]=\"clinic.bloodPressure\">\r\n        </div>\r\n        <div class=\"md-form\">\r\n          <i class=\"fa fa-lock prefix grey-text\"></i>\r\n          <label for=\"materialFormRegisterPasswordEx\">Respiratory Rate</label>\r\n          <input type=\"text\" id=\"materialFormRegisterPasswordEx\" name=\"respiratoryRate\" class=\"form-control\"\r\n            #respiratoryRate=\"ngModel\" [(ngModel)]=\"clinic.respiratoryRate\">\r\n        </div>\r\n        <div class=\"text-center mt-4\">\r\n          <input type=\"submit\" class=\"login\" value=\"Add\">\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/patient/patient-clinic-update/patient-clinic-update.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/patient/patient-clinic-update/patient-clinic-update.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PatientClinicUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientClinicUpdateComponent", function() { return PatientClinicUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_clinic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/clinic */ "./src/app/models/clinic.ts");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");





var PatientClinicUpdateComponent = /** @class */ (function () {
    function PatientClinicUpdateComponent(route, clinicService, router) {
        this.route = route;
        this.clinicService = clinicService;
        this.router = router;
        this.clinic = new _models_clinic__WEBPACK_IMPORTED_MODULE_3__["Clinic"]();
    }
    PatientClinicUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get _id from params in order to get clinic data
        this.route.params.subscribe(function (params) {
            _this.patientId = params._id;
        });
    };
    PatientClinicUpdateComponent.prototype.onSubmitPatientClinicUpdate = function (form) {
        var _this = this;
        this.clinic = form.value;
        this.clinic.patient = this.patientId;
        if (localStorage.getItem("clinicId")) {
            this.clinic._id = localStorage.getItem("clinicId");
            this.clinicService.updateClinic(this.clinic).subscribe(function (data) {
                localStorage.removeItem("clinicId");
                _this.router.navigateByUrl("/nurse");
            });
        }
        else {
            this.clinicService.addList(this.clinic).subscribe(function (data) {
                _this.router.navigateByUrl("/nurse");
            });
        }
    };
    PatientClinicUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-patient-clinic-update",
            template: __webpack_require__(/*! ./patient-clinic-update.component.html */ "./src/app/pages/patient/patient-clinic-update/patient-clinic-update.component.html"),
            styles: [__webpack_require__(/*! ./patient-clinic-update.component.css */ "./src/app/pages/patient/patient-clinic-update/patient-clinic-update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_4__["ClinicService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PatientClinicUpdateComponent);
    return PatientClinicUpdateComponent;
}());



/***/ }),

/***/ "./src/app/pages/patient/patient-details/patient-details.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/patient/patient-details/patient-details.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnQvcGF0aWVudC1kZXRhaWxzL3BhdGllbnQtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/patient/patient-details/patient-details.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/patient/patient-details/patient-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mask rgba-black-light d-flex justify-content-center align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row wow fadeIn\">\r\n      <div class=\"col-md-9 mb-4 white-text text-center text-md-left\">\r\n        <h2 class=\"display-4 font-weight-bold\">Patient's Details</h2>\r\n        <hr class=\"hr-light\">\r\n\r\n        <a class=\"btn btn-primary\" routerLink=\"/patient-clinic-update/{{patientId}}\" role=\"button\">\r\n          <i class=\"fas fa-plus-circle\"></i>Add record\r\n        </a>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-offsetr-3 col-md-12\">\r\n            <table class=\"table table-bordered table-striped table-hover\">\r\n              <tr>\r\n                <th class=\"text-center\">Record Id</th>\r\n                <th class=\"text-center\">Record Time</th>\r\n                <th class=\"text-center\">Body Temperature</th>\r\n                <th class=\"text-center\">Heart Rate</th>\r\n                <th class=\"text-center\">Blood Pressure</th>\r\n                <th class=\"text-center\">Respiratory Rate</th>\r\n                <th class=\"text-center\">Assigned To</th>\r\n                <th class=\"text-center\"></th>\r\n                <th class=\"text-center\"></th>\r\n              </tr>\r\n              <tr *ngFor=\"let clinic of clinicDetails\">\r\n                <td class=\"text-center\">{{ clinic._id }}</td>\r\n                <td class=\"text-center\">{{ clinic.recorded }}</td>\r\n\r\n                <div *ngIf=\"(clinic.hasOwnProperty('bodyTemperature'));then tempContent else other_content\">\r\n                </div>\r\n                <ng-template #tempContent>\r\n                  <td class=\"text-center\">\r\n                    {{ clinic.bodyTemperature }}\r\n                  </td>\r\n                </ng-template>\r\n\r\n                <div *ngIf=\"((clinic.hasOwnProperty('heartRate')));then heartContent else other_content\">\r\n                </div>\r\n                <ng-template #heartContent>\r\n                  <td class=\"text-center\">\r\n                    {{ clinic.heartRate }}\r\n                  </td>\r\n                </ng-template>\r\n\r\n                <div *ngIf=\"((clinic.hasOwnProperty('bloodPressure')));then bloodContent else other_content\">\r\n                </div>\r\n                <ng-template #bloodContent>\r\n                  <td class=\"text-center\">\r\n                    {{ clinic.bloodPressure }}\r\n                  </td>\r\n                </ng-template>\r\n\r\n                <div *ngIf=\"((clinic.hasOwnProperty('respiratoryRate')));then respContent else other_content\">\r\n                </div>\r\n                <ng-template #respContent>\r\n                  <td class=\"text-center\">\r\n                    {{ clinic.respiratoryRate }}\r\n                  </td>\r\n                </ng-template>\r\n                <ng-template #other_content>\r\n                  <td class=\"text-center\">*NR</td>\r\n                </ng-template>\r\n\r\n                <td class=\"text-center\">{{ clinic.nurse }}</td>\r\n                <td class=\"text-center\">\r\n                  <a (click)=\"onEdit(clinic._id)\" class=\"btn btn-info\"><i class=\"fas fa-pencil-alt\"></i> Edit</a>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <a (click)=\"onDelete(clinic._id)\" class=\"btn btn-danger\"><i class=\"fas fa-pencil-alt\"></i> Delete</a>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n            <p class=\"text-uppercase font-weight-bold\">*NR: Not Recorded Test</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/patient/patient-details/patient-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/patient/patient-details/patient-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: PatientDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDetailsComponent", function() { return PatientDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/clinic.service */ "./src/app/services/clinic.service.ts");




var PatientDetailsComponent = /** @class */ (function () {
    //title: String;
    function PatientDetailsComponent(route, router, clinicService) {
        this.route = route;
        this.router = router;
        this.clinicService = clinicService;
    }
    PatientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get _id from params in order to get clinic data
        this.route.params.subscribe(function (params) {
            _this.patientId = params._id;
        });
        this.displayClinic();
    };
    PatientDetailsComponent.prototype.displayClinic = function () {
        var _this = this;
        this.clinicService.getList(this.patientId).subscribe(function (data) {
            //console.log(data);
            _this.clinicDetails = data;
        });
    };
    PatientDetailsComponent.prototype.onDelete = function (_id) {
        if (confirm("Are you sure to delete this record ?") == true) {
            this.clinicService.deleteList(_id).subscribe(function (res) { });
            this.displayClinic();
        }
    };
    PatientDetailsComponent.prototype.onEdit = function (clinicId) {
        localStorage.setItem("clinicId", clinicId);
        this.router.navigateByUrl("/patient-clinic-update/" + this.patientId);
    };
    PatientDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-patient-details",
            template: __webpack_require__(/*! ./patient-details.component.html */ "./src/app/pages/patient/patient-details/patient-details.component.html"),
            styles: [__webpack_require__(/*! ./patient-details.component.css */ "./src/app/pages/patient/patient-details/patient-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_clinic_service__WEBPACK_IMPORTED_MODULE_3__["ClinicService"]])
    ], PatientDetailsComponent);
    return PatientDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/signup/signup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-dark\">\r\n  <div class=\"row justify-content-center align-items-center\">\r\n    <div class=\"col col-sm-6 col-md-6 col-lg-4 col-xl-3\">\r\n      <form #signUpForm=\"ngForm\" (ngSubmit)=\"onSubmit(signUpForm)\">\r\n        <p class=\"h2 text-center mb-4\">{{ title }}</p>\r\n        <div class=\"md-form\">\r\n\r\n          <label for=\"materialFormRegisterNameEx\">First Name</label>\r\n          <input type=\"text\" id=\"materialFormRegisterNameEx\" #firstName=\"ngModel\" [(ngModel)]=\"model.firstName\"\r\n            class=\"form-control\" name=\"firstName\">\r\n        </div>\r\n        <div class=\"md-form\">\r\n\r\n          <label for=\"materialFormRegisterEmailEx\">Last Name</label>\r\n          <input type=\"text\" id=\"materialFormRegisterEmailEx\" #lastName=\"ngModel\" [(ngModel)]=\"model.lastName\"\r\n            class=\"form-control\" name=\"lastName\">\r\n\r\n        </div>\r\n        <div class=\"md-form\">\r\n\r\n          <label for=\"materialFormRegisterConfirmEx\">Username</label>\r\n          <input type=\"text\" id=\"materialFormRegisterConfirmEx\" #userName=\"ngModel\" [(ngModel)]=\"model.userName\"\r\n            class=\"form-control\" name=\"userName\">\r\n        </div>\r\n        <div class=\"md-form\">\r\n\r\n          <label for=\"materialFormRegisterConfirmEx\">Password</label>\r\n          <input type=\"password\" id=\"materialFormRegisterConfirmEx\" class=\"form-control\" #password=\"ngModel\"\r\n            [(ngModel)]=\"model.password\" name=\"password\">\r\n        </div>\r\n        <div class=\"md-form\">\r\n\r\n          <label for=\"materialFormRegisterPasswordEx\">Email</label>\r\n          <input type=\"Email\" id=\"materialFormRegisterPasswordEx\" class=\"form-control\" #email=\"ngModel\"\r\n            [(ngModel)]=\"model.email\" name=\"email\">\r\n        </div>\r\n        <div class=\"md-form\">\r\n\r\n          <label for=\"materialFormRegisterPasswordEx\">Role</label>\r\n          <input type=\"text\" id=\"materialFormRegisterPasswordEx\" class=\"form-control\" #role=\"ngModel\"\r\n            [(ngModel)]=\"model.role\" name=\"role\">\r\n        </div>\r\n        <div class=\"text-center mt-4\">\r\n          <input type=\"submit\" class=\"login\" value=\"Register\">\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.model = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.title = this.route.snapshot.data.title;
    };
    SignupComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.postUser(form.value).subscribe(function (res) {
            _this.router.navigateByUrl("/login");
        }, function (err) { });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-signup",
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/pages/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/pages/tips/patient-tips/patient-tips.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pages/tips/patient-tips/patient-tips.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RpcHMvcGF0aWVudC10aXBzL3BhdGllbnQtdGlwcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tips/patient-tips/patient-tips.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tips/patient-tips/patient-tips.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mask rgba-black-light d-flex justify-content-center align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row wow fadeIn\">\r\n      <div class=\"col-md-9 mb-4 white-text text-center text-md-left\">\r\n        <h2 class=\"display-4 font-weight-bold\">Your Daily Tips!</h2>\r\n        <hr class=\"hr-light\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-offsetr-3 col-md-12\">\r\n            <table class=\"table table-bordered table-striped table-hover\">\r\n              <tr>\r\n                <th class=\"text-center\">Tips</th>\r\n                <th class=\"text-center\">Message</th>\r\n              </tr>\r\n              <tr *ngFor=\"let tip of tips\">\r\n                <td class=\"text-center\">{{ tip.recorded }}</td>\r\n                <td class=\"text-center\">{{ tip.content }}</td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/tips/patient-tips/patient-tips.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tips/patient-tips/patient-tips.component.ts ***!
  \*******************************************************************/
/*! exports provided: PatientTipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientTipsComponent", function() { return PatientTipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tips_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tips.service */ "./src/app/services/tips.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var PatientTipsComponent = /** @class */ (function () {
    function PatientTipsComponent(route, tipsService, flashMessage) {
        this.route = route;
        this.tipsService = tipsService;
        this.flashMessage = flashMessage;
    }
    PatientTipsComponent.prototype.ngOnInit = function () {
        this.title = this.route.snapshot.data.title;
        this.tips = new Array();
        this.displayTips();
    };
    PatientTipsComponent.prototype.displayTips = function () {
        var _this = this;
        this.tipsService.getTips().subscribe(function (data) {
            //console.log(data);
            _this.tips = data;
        });
    };
    PatientTipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-patient-tips",
            template: __webpack_require__(/*! ./patient-tips.component.html */ "./src/app/pages/tips/patient-tips/patient-tips.component.html"),
            styles: [__webpack_require__(/*! ./patient-tips.component.css */ "./src/app/pages/tips/patient-tips/patient-tips.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_tips_service__WEBPACK_IMPORTED_MODULE_3__["TipsService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], PatientTipsComponent);
    return PatientTipsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tips/tips.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/tips/tips.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RpcHMvdGlwcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tips/tips.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/tips/tips.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-dark\">\r\n  <div class=\"row justify-content-center align-items-center\">\r\n    <div class=\"col col-sm-6 col-md-6 col-lg-4 col-xl-3\">\r\n      <!-- Form container -->\r\n      <form #tipsForm=\"ngForm\" (ngSubmit)=\"onSubmit(tipsForm)\">\r\n        <h2 class=\"display-4 font-weight-bold\">Patient Tips</h2>\r\n        <hr>\r\n        <br>\r\n        <div class=\"md-form\">\r\n          <i class=\"fa fa-comment prefix grey-text\"></i>\r\n          <label for=\"materialFormRegisterNameEx\">Message</label>\r\n          <input type=\"String\" id=\"materialFormRegisterNameEx\" name=\"content\" class=\"form-control\" #content=\"ngModel\"\r\n            [(ngModel)]=\"model.content\">\r\n        </div>\r\n\r\n        <div class=\"text-center mt-4\">\r\n          <input type=\"submit\" class=\"login\" value=\"Send\">\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/tips/tips.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/tips/tips.component.ts ***!
  \**********************************************/
/*! exports provided: TipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipsComponent", function() { return TipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tips_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tips.service */ "./src/app/services/tips.service.ts");
/* harmony import */ var src_app_models_tips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/tips */ "./src/app/models/tips.ts");





var TipsComponent = /** @class */ (function () {
    function TipsComponent(route, router, tipsService) {
        this.route = route;
        this.router = router;
        this.tipsService = tipsService;
        this.model = new src_app_models_tips__WEBPACK_IMPORTED_MODULE_4__["Tips"]();
    }
    TipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.route.snapshot.data.title;
        //Get _id from params in order to get clinic data
        this.route.params.subscribe(function (params) {
            _this.patientId = params._id;
        });
    };
    TipsComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.model.patient = this.patientId;
        this.tipsService.addTips(this.model).subscribe(function (res) {
            _this.router.navigateByUrl("/nurse");
        }, function (err) { });
    };
    TipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tips",
            template: __webpack_require__(/*! ./tips.component.html */ "./src/app/pages/tips/tips.component.html"),
            styles: [__webpack_require__(/*! ./tips.component.css */ "./src/app/pages/tips/tips.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_tips_service__WEBPACK_IMPORTED_MODULE_3__["TipsService"]])
    ], TipsComponent);
    return TipsComponent;
}());



/***/ }),

/***/ "./src/app/pages/videos/videos.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/videos/videos.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZGVvcy92aWRlb3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/videos/videos.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/videos/videos.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"jumbotron bg-light\">\r\n    <h1 class=\"display-6\">Daily Motivational Videos</h1>\r\n    <hr class=\"my-4\">\r\n    <div class=\"card text-center\" *ngFor=\"let video of videos\">\r\n      <div class=\"card-header\">\r\n        {{video.title}}\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <youtube-player videoId=\"{{video.id}}\" (ready)=\"savePlayer($event)\" (change)=\"onStateChange($event)\"\r\n          [playerVars]=\"playerVars\" height=\"600\" width=\"900\">\r\n        </youtube-player>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/videos/videos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/videos/videos.component.ts ***!
  \**************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_videos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/videos */ "./src/app/models/videos.ts");



var VideosComponent = /** @class */ (function () {
    function VideosComponent() {
        this.playerVars = {
            cc_lang_pref: "en"
        };
        this.videos = src_app_models_videos__WEBPACK_IMPORTED_MODULE_2__["videos"];
    }
    VideosComponent.prototype.onStateChange = function (event) {
        this.ytEvent = event.data;
    };
    VideosComponent.prototype.savePlayer = function (player) {
        this.player = player;
    };
    VideosComponent.prototype.playVideo = function () {
        this.player.playVideo();
    };
    VideosComponent.prototype.pauseVideo = function () {
        this.player.pauseVideo();
    };
    VideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-videos",
            template: __webpack_require__(/*! ./videos.component.html */ "./src/app/pages/videos/videos.component.html"),
            styles: [__webpack_require__(/*! ./videos.component.css */ "./src/app/pages/videos/videos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideosComponent);
    return VideosComponent;
}());



/***/ }),

/***/ "./src/app/partials/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar fixed-bottom navbar-light bg-light\">\r\n  <h6>&copy; Copyright {{ year }}. All Rights Reserved</h6>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        var date = new Date();
        this.year = date.getFullYear();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/partials/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/partials/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/partials/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/\"><i class=\"fas fa-lg fa-home\"></i> Home\r\n        </a>\r\n      </li>\r\n      <ng-container *ngIf=\"userRole=='User'\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/login\"><i class=\"fa fa-lg fa-lock\"></i> Login</a>\r\n        </li>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"userRole=='Nurse'\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/nurse\"><i class=\"fa fa-lg fa-user-nurse\"></i> Nurse Account</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n      </ng-container>\r\n      <ng-container *ngIf=\"userRole=='Patient'\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/videos\"><i class=\"fa fa-lg fa-video\"></i> Motivational Videos</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/patient-tips\"><i class=\"fa fa-lg fa-comments\"></i> Tips</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/patient-daily\"><i class=\"fa fa-lg fa-clipboard\"></i> Daily Info</a>\r\n        </li>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"userStatus=='Inactive'\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/signup\"><i class=\"fa fa-lg fa-id-badge\"></i> Sign Up</a>\r\n        </li>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"userStatus=='Active'\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" (click)=\"onLogout()\"><i class=\"fa fa-lg fa-id-badge\"></i> Sign Out</a>\r\n        </li>\r\n      </ng-container>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/partials/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedInStatus.subscribe(function (status) {
            return _this.changeStatus(status);
        });
        this.userService.getLoggedInRole.subscribe(function (role) { return _this.changeRole(role); });
        this.userService.getLoggedInRole.emit("User");
        this.userService.getLoggedInStatus.emit("Inactive");
    };
    HeaderComponent.prototype.onLogout = function () {
        this.userService.deleteToken();
        this.userService.getLoggedInStatus.emit("Inactive");
        this.userService.getLoggedInRole.emit("User");
        this.router.navigate(["/login"]);
    };
    HeaderComponent.prototype.changeStatus = function (userStatus) {
        this.userStatus = userStatus;
    };
    HeaderComponent.prototype.changeRole = function (userRole) {
        this.userRole = userRole;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/partials/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/partials/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/services/clinic.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/clinic.service.ts ***!
  \********************************************/
/*! exports provided: ClinicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicService", function() { return ClinicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ClinicService = /** @class */ (function () {
    function ClinicService(http) {
        this.http = http;
    }
    //method to get list of clinic
    ClinicService.prototype.getListAll = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/nurse/clinic");
    };
    //method to get list of clinic
    ClinicService.prototype.getList = function (_id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/nurse/clinic/patient/" + _id);
    };
    //method to get list of clinic
    ClinicService.prototype.deleteList = function (_id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/nurse/clinic/" + _id);
    };
    ClinicService.prototype.addList = function (clinic) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/nurse/clinic/", clinic);
    };
    ClinicService.prototype.updateClinic = function (clinic) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/nurse/clinic/" + clinic._id, clinic);
    };
    ClinicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClinicService);
    return ClinicService;
}());



/***/ }),

/***/ "./src/app/services/daily-info.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/daily-info.service.ts ***!
  \************************************************/
/*! exports provided: DailyInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyInfoService", function() { return DailyInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var DailyInfoService = /** @class */ (function () {
    function DailyInfoService(http) {
        this.http = http;
    }
    DailyInfoService.prototype.getList = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/patient/daily");
    };
    DailyInfoService.prototype.deleteItem = function (_id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/patient/daily/" + _id);
    };
    DailyInfoService.prototype.addItem = function (info) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/patient/daily/", info);
    };
    DailyInfoService.prototype.updateItem = function (info) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/patient/daily/" + info._id, info);
    };
    DailyInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DailyInfoService);
    return DailyInfoService;
}());



/***/ }),

/***/ "./src/app/services/tips.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/tips.service.ts ***!
  \******************************************/
/*! exports provided: TipsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipsService", function() { return TipsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var TipsService = /** @class */ (function () {
    function TipsService(http) {
        this.http = http;
    }
    TipsService.prototype.getTips = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/patient/tips");
    };
    TipsService.prototype.addTips = function (tips) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/nurse/tips/", tips);
    };
    TipsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TipsService);
    return TipsService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    //Constructor
    function UserService(http) {
        this.http = http;
        this.getLoggedInStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getLoggedInRole = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.endpoint = "http://localhost:3000/api/nurse/patients";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            })
        };
        //NoAuth Header
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ NoAuth: "True" }) };
    }
    //method to get list of patients
    UserService.prototype.getList = function () {
        return this.http.get(this.endpoint, this.httpOptions);
    };
    //login
    UserService.prototype.login = function (authCredentials) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/authenticate", authCredentials, this.noAuthHeader);
    };
    //Post User
    UserService.prototype.postUser = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/register", user, this.noAuthHeader);
    };
    //Token
    UserService.prototype.setToken = function (token) {
        localStorage.setItem("token", token);
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem("token");
    };
    UserService.prototype.deleteToken = function () {
        localStorage.removeItem("token");
    };
    UserService.prototype.getUserPayload = function () {
        var token = this.getToken();
        if (token) {
            var userPayload = atob(token.split(".")[1]);
            return JSON.parse(userPayload);
        }
        else {
            return null;
        }
    };
    UserService.prototype.isLoggedIn = function () {
        var userPayload = this.getUserPayload();
        if (userPayload)
            return userPayload.exp > Date.now() / 1000;
        else
            return false;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiBaseUrl: "http://localhost:3000/api"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Documents\GitHub\COMP308FinalProject\interface\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map