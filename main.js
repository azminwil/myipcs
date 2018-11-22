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
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/nopagefound/nopagefound.component */ "./src/app/shared/nopagefound/nopagefound.component.ts");
/* harmony import */ var _login_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/register/register.component */ "./src/app/login/register/register.component.ts");




var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _login_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: '**', component: _shared_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_2__["NopagefoundComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var APP_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


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

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MyIPCS';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/register/register.component */ "./src/app/login/register/register.component.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/sidebar.service */ "./src/app/services/sidebar.service.ts");
/* harmony import */ var _user_reg_user_reg_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-reg/user-reg.component */ "./src/app/user-reg/user-reg.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// modules

// routing

// services



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _login_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                _user_reg_user_reg_component__WEBPACK_IMPORTED_MODULE_9__["UserRegComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["APP_ROUTES"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_5__["PagesModule"]
            ],
            providers: [_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], _services_sidebar_service__WEBPACK_IMPORTED_MODULE_8__["SidebarService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\nTemplate Name: Admin pro Admin\r\nAuthor: Wrappixel\r\nEmail: niravjoshi87@gmail.com\r\nFile: scss\r\n*/\r\n/*\r\nTemplate Name: Admin Pro Admin\r\nAuthor: Wrappixel\r\nEmail: niravjoshi87@gmail.com\r\nFile: scss\r\n*/\r\n/*Theme Colors*/\r\n/*bootstrap Color*/\r\n/*Light colors*/\r\n/*Normal Color*/\r\n/*Extra Variable*/\r\n/*******************\r\nLogin register and recover password Page\r\n******************/\r\n.login-register {\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 10% 0;\r\n  position: fixed;\r\n}\r\n.login-box {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n}\r\n.login-box .footer {\r\n  width: 100%;\r\n  left: 0px;\r\n  right: 0px;\r\n}\r\n.login-box .social {\r\n  display: block;\r\n  margin-bottom: 30px;\r\n}\r\n#recoverform {\r\n  display: none;\r\n}\r\n.login-sidebar {\r\n  padding: 0px;\r\n  margin-top: 0px;\r\n}\r\n.login-sidebar .login-box {\r\n  right: 0px;\r\n  position: absolute;\r\n  height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7RUFLRTtBQUNGOzs7OztFQUtFO0FBQ0YsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQjs7bUJBRW1CO0FBQ25CO0VBQ0UsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxhQUFhO0VBQ2IsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0NBQ1o7QUFFRDtFQUNFLGVBQWU7RUFDZixvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLGNBQWM7Q0FDZjtBQUVEO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVGVtcGxhdGUgTmFtZTogQWRtaW4gcHJvIEFkbWluXHJcbkF1dGhvcjogV3JhcHBpeGVsXHJcbkVtYWlsOiBuaXJhdmpvc2hpODdAZ21haWwuY29tXHJcbkZpbGU6IHNjc3NcclxuKi9cclxuLypcclxuVGVtcGxhdGUgTmFtZTogQWRtaW4gUHJvIEFkbWluXHJcbkF1dGhvcjogV3JhcHBpeGVsXHJcbkVtYWlsOiBuaXJhdmpvc2hpODdAZ21haWwuY29tXHJcbkZpbGU6IHNjc3NcclxuKi9cclxuLypUaGVtZSBDb2xvcnMqL1xyXG4vKmJvb3RzdHJhcCBDb2xvciovXHJcbi8qTGlnaHQgY29sb3JzKi9cclxuLypOb3JtYWwgQ29sb3IqL1xyXG4vKkV4dHJhIFZhcmlhYmxlKi9cclxuLyoqKioqKioqKioqKioqKioqKipcclxuTG9naW4gcmVnaXN0ZXIgYW5kIHJlY292ZXIgcGFzc3dvcmQgUGFnZVxyXG4qKioqKioqKioqKioqKioqKiovXHJcbi5sb2dpbi1yZWdpc3RlciB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwJSAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuLmxvZ2luLWJveCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubG9naW4tYm94IC5mb290ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDBweDtcclxuICByaWdodDogMHB4O1xyXG59XHJcblxyXG4ubG9naW4tYm94IC5zb2NpYWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNyZWNvdmVyZm9ybSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmxvZ2luLXNpZGViYXIge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1zaWRlYmFyIC5sb2dpbi1ib3gge1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"wrapper\" class=\"login-register login-sidebar\" style=\"background-image:url(../assets/images/background/login-register.jpg);\">\r\n  <div class=\"login-box card\">\r\n    <div class=\"card-body\">\r\n      <form class=\"form-horizontal form-material\" id=\"loginform\" action=\"index.html\">\r\n        <a href=\"javascript:void(0)\" class=\"text-center db\"><img src=\"../assets/images/logo-pic-myipcs.jpeg\" alt=\"Home\" /><br /><img\r\n            src=\"../assets/images/logo-text-myipcs.jpeg\" alt=\"Home\" /></a>\r\n        <div class=\"form-group m-t-40\">\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Username\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\" type=\"password\" required=\"\" placeholder=\"Password\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"checkbox checkbox-primary pull-left p-t-0\">\r\n              <input id=\"checkbox-signup\" type=\"checkbox\" class=\"filled-in chk-col-light-blue\">\r\n              <label for=\"checkbox-signup\"> Remember me </label>\r\n            </div>\r\n            <a href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-dark pull-right\"><i class=\"fa fa-lock m-r-5\"></i>\r\n              Forgot pwd?</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group text-center m-t-20\">\r\n          <div class=\"col-xs-12\">\r\n            <button class=\"btn btn-info btn-lg btn-block text-uppercase btn-rounded\" type=\"submit\">Log In</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\r\n            <div class=\"social\"><a href=\"javascript:void(0)\" class=\"btn  btn-facebook\" data-toggle=\"tooltip\" title=\"Login with Facebook\">\r\n                <i aria-hidden=\"true\" class=\"fa fa-facebook\"></i> </a> <a href=\"javascript:void(0)\" class=\"btn btn-googleplus\"\r\n                data-toggle=\"tooltip\" title=\"Login with Google\"> <i aria-hidden=\"true\" class=\"fa fa-google-plus\"></i>\r\n              </a> </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group m-b-0\">\r\n          <div class=\"col-sm-12 text-center\">\r\n            Don't have an account? <a href=\"register\" class=\"text-primary m-l-5\"><b>Sign Up</b></a>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <form class=\"form-horizontal\" id=\"recoverform\" action=\"index.html\">\r\n        <div class=\"form-group \">\r\n          <div class=\"col-xs-12\">\r\n            <h3>Recover Password</h3>\r\n            <p class=\"text-muted\">Enter your Email and instructions will be sent to you! </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group \">\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Email\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group text-center m-t-20\">\r\n          <div class=\"col-xs-12\">\r\n            <button class=\"btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light\" type=\"submit\">Reset</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/login/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\nTemplate Name: Admin pro Admin\r\nAuthor: Wrappixel\r\nEmail: niravjoshi87@gmail.com\r\nFile: scss\r\n*/\r\n/*\r\nTemplate Name: Admin Pro Admin\r\nAuthor: Wrappixel\r\nEmail: niravjoshi87@gmail.com\r\nFile: scss\r\n*/\r\n/*Theme Colors*/\r\n/*bootstrap Color*/\r\n/*Light colors*/\r\n/*Normal Color*/\r\n/*Extra Variable*/\r\n/*******************\r\nLogin register and recover password Page\r\n******************/\r\n.login-register {\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 10% 0;\r\n  position: fixed;\r\n}\r\n.login-box {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n}\r\n.login-box .footer {\r\n  width: 100%;\r\n  left: 0px;\r\n  right: 0px;\r\n}\r\n.login-box .social {\r\n  display: block;\r\n  margin-bottom: 30px;\r\n}\r\n#recoverform {\r\n  display: none;\r\n}\r\n.login-sidebar {\r\n  padding: 0px;\r\n  margin-top: 0px;\r\n}\r\n.login-sidebar .login-box {\r\n  right: 0px;\r\n  position: absolute;\r\n  height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7RUFLRTtBQUNGOzs7OztFQUtFO0FBQ0YsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQjs7bUJBRW1CO0FBQ25CO0VBQ0UsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxhQUFhO0VBQ2IsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0NBQ1o7QUFFRDtFQUNFLGVBQWU7RUFDZixvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLGNBQWM7Q0FDZjtBQUVEO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVGVtcGxhdGUgTmFtZTogQWRtaW4gcHJvIEFkbWluXHJcbkF1dGhvcjogV3JhcHBpeGVsXHJcbkVtYWlsOiBuaXJhdmpvc2hpODdAZ21haWwuY29tXHJcbkZpbGU6IHNjc3NcclxuKi9cclxuLypcclxuVGVtcGxhdGUgTmFtZTogQWRtaW4gUHJvIEFkbWluXHJcbkF1dGhvcjogV3JhcHBpeGVsXHJcbkVtYWlsOiBuaXJhdmpvc2hpODdAZ21haWwuY29tXHJcbkZpbGU6IHNjc3NcclxuKi9cclxuLypUaGVtZSBDb2xvcnMqL1xyXG4vKmJvb3RzdHJhcCBDb2xvciovXHJcbi8qTGlnaHQgY29sb3JzKi9cclxuLypOb3JtYWwgQ29sb3IqL1xyXG4vKkV4dHJhIFZhcmlhYmxlKi9cclxuLyoqKioqKioqKioqKioqKioqKipcclxuTG9naW4gcmVnaXN0ZXIgYW5kIHJlY292ZXIgcGFzc3dvcmQgUGFnZVxyXG4qKioqKioqKioqKioqKioqKiovXHJcbi5sb2dpbi1yZWdpc3RlciB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwJSAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuLmxvZ2luLWJveCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubG9naW4tYm94IC5mb290ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDBweDtcclxuICByaWdodDogMHB4O1xyXG59XHJcblxyXG4ubG9naW4tYm94IC5zb2NpYWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNyZWNvdmVyZm9ybSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmxvZ2luLXNpZGViYXIge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1zaWRlYmFyIC5sb2dpbi1ib3gge1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/login/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"wrapper\" class=\"login-register login-sidebar\" style=\"background-image:url(../assets/images/background/login-register.jpg);\">\r\n  <div class=\"login-box card\">\r\n    <div class=\"card-body\">\r\n      <form class=\"form-horizontal form-material\" id=\"loginform\" action=\"index.html\">\r\n        <a href=\"javascript:void(0)\" class=\"text-center db\"><img src=\"../assets/images/logo-icon.png\" alt=\"Home\" /><br /><img\r\n            src=\"../assets/images/logo-text.png\" alt=\"Home\" /></a>\r\n        <h3 class=\"box-title m-t-40 m-b-0\">Register Now</h3><small>Create your account and enjoy</small>\r\n        <div class=\"form-group m-t-20\">\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group \">\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Email\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group \">\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\" type=\"password\" required=\"\" placeholder=\"Password\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\" type=\"password\" required=\"\" placeholder=\"Confirm Password\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"checkbox checkbox-primary p-t-0\">\r\n              <input id=\"checkbox-signup\" type=\"checkbox\">\r\n              <label for=\"checkbox-signup\"> I agree to all <a href=\"#\">Terms</a></label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group text-center m-t-20\">\r\n          <div class=\"col-xs-12\">\r\n            <button class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light\" type=\"submit\">Sign Up</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group m-b-0\">\r\n          <div class=\"col-sm-12 text-center\">\r\n            <p>Already have an account? <a href=\"login\" class=\"text-info m-l-5\"><b>Sign In</b></a></p>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/login/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/login/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/login/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-title label{\r\n    color: blueviolet;\r\n}\r\n\r\n.example-small-box, .example-large-box {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 16px;\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n  }\r\n\r\n.example-small-box {\r\n    height: 100px;\r\n    width: 100px;\r\n  }\r\n\r\n.example-large-box {\r\n      background: #2b2a2a;\r\n    height: 300px;\r\n    width: 300px;\r\n  }  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7R0FDcEI7O0FBRUQ7SUFDRSxjQUFjO0lBQ2QsYUFBYTtHQUNkOztBQUVEO01BQ0ksb0JBQW9CO0lBQ3RCLGNBQWM7SUFDZCxhQUFhO0dBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiLXRpdGxlIGxhYmVse1xyXG4gICAgY29sb3I6IGJsdWV2aW9sZXQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNtYWxsLWJveCwgLmV4YW1wbGUtbGFyZ2UtYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1zbWFsbC1ib3gge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtbGFyZ2UtYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogIzJiMmEyYTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfSAgIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group dynamicHeight>\r\n  <mat-tab class=\"tab-title\" label=\"Short tab\">\r\n    <div class=\"example-small-box mat-elevation-z4\">\r\n      Small content\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Long tab\">\r\n    <div class=\"example-large-box mat-elevation-z4\">\r\n      Large content\r\n    </div>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/manage-user/manage-user.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/manage-user/manage-user.component.ts ***!
  \************************************************************/
/*! exports provided: ManageUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUserComponent", function() { return ManageUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageUserComponent = /** @class */ (function () {
    function ManageUserComponent() {
        this.myFavLang = [
            {
                id: '900ea552-ef68-42cc-b6a6-b8c4dff10fb7',
                age: 32,
                name: 'Powers Schneider'
            },
            {
                id: '880381d3-8dca-4aed-b207-b3b4e575a15f',
                age: 25,
                name: 'Adrian Lawrence'
            },
            {
                id: '87b47684-c465-4c51-8c88-3f1a1aa2671b',
                age: 32,
                name: 'Boyer Stanley'
            }
        ];
    }
    ManageUserComponent.prototype.ngOnInit = function () {
    };
    ManageUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-user',
            template: "\n  \n  <ul *ngFor=\"let lang of myFavLang\">\n  <li>{{lang.id}} - {{lang.name}} - {{lang.age}}</li>\n  </ul>\n  \n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ManageUserComponent);
    return ManageUserComponent;
}());



/***/ }),

/***/ "./src/app/pages/my/main/main.component.css":
/*!**************************************************!*\
  !*** ./src/app/pages/my/main/main.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215L21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/my/main/main.component.html":
/*!***************************************************!*\
  !*** ./src/app/pages/my/main/main.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Main wrapper - style you can find in pages.scss -->\n<!-- ============================================================== -->\n<div id=\"main-wrapper\">\n  <app-header></app-header>\n  <app-menusisi></app-menusisi>\n  <!-- ============================================================== -->\n  <!-- Page wrapper  -->\n  <!-- ============================================================== -->\n  <div class=\"page-wrapper\">\n\n    <!-- ============================================================== -->\n    <!-- Container fluid  -->\n    <!-- ============================================================== -->\n    <div class=\"container-fluid\">\n      <!-- ============================================================== -->\n      <!-- Start Page Content -->\n      <!-- ============================================================== -->\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <router-outlet></router-outlet>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- ============================================================== -->\n      <!-- End PAge Content -->\n      <!-- ============================================================== -->\n    </div>\n\n    <!-- ============================================================== -->\n    <!-- END Container fluid  -->\n    <!-- ============================================================== -->\n  </div>\n  <!-- ============================================================== -->\n  <!--  END Page wrapper  -->\n  <!-- ============================================================== -->\n</div>"

/***/ }),

/***/ "./src/app/pages/my/main/main.component.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/my/main/main.component.ts ***!
  \*************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/pages/my/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/pages/my/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/pages/my/menusisi/menusisi.component.css":
/*!**********************************************************!*\
  !*** ./src/app/pages/my/menusisi/menusisi.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".langlink a\r\n{\r\n    color: #e78989;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXkvbWVudXNpc2kvbWVudXNpc2kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXkvbWVudXNpc2kvbWVudXNpc2kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5nbGluayBhXHJcbntcclxuICAgIGNvbG9yOiAjZTc4OTg5O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/my/menusisi/menusisi.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/my/menusisi/menusisi.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Left Sidebar - style you can find in sidebar.scss  -->\n<!-- ============================================================== -->\n<aside class=\"left-sidebar\">\n  <!-- Sidebar scroll-->\n  <div class=\"scroll-sidebar\">\n    <!-- Sidebar navigation-->\n    <nav class=\"sidebar-nav\">\n      <ul id=\"sidebarnav\">        \n        <li class=\"nav-small-cap\">Pentadbiran</li>\n        \n        <a href=\"en\">Ubah ke : EN</a>\n        \n        <li class=\"nav-devider\"></li>\n        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-gauge\"></i>\n          <span class=\"hide-menu\">PENGURUSAN PENGGUNA<span class=\"label label-rouded label-themecolor pull-right\">4</span></span></a>\n          <ul aria-expanded=\"false\" class=\"collapse\">\n            <li><a href=\"my/urus_pengguna\">Urus Pengguna</a></li>\n            <li><a href=\"page/user-reg\">Daftar Pengguna</a></li>\n            <li><a href=\"user-reg\">Daftar Pengguna (bulk)</a></li>\n            <li><a href=\"https://www.tutorialspoint.com/\">Group Management</a></li>\n          </ul>\n        </li>\n        <li class=\"nav-devider\"></li>\n        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-gauge\"></i>\n          <span class=\"hide-menu\">PEMANTAUAN<span class=\"label label-rouded label-themecolor pull-right\">4</span></span></a>\n          <ul aria-expanded=\"false\" class=\"collapse\">\n            <li><a href=\"user-reg\">Pemantauan Pelayan</a></li>\n            <li><a href=\"user-reg\">Pemantauan Aplikasi</a></li>\n            <li><a href=\"https://www.tutorialspoint.com/\">Pemantauan Tugas</a></li>\n            <li><a href=\"user-reg\">Analisa Laman Web</a></li>\n          </ul>\n        </li>\n        <li class=\"nav-devider\"></li>\n        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-gauge\"></i>\n          <span class=\"hide-menu\">PENGUMUMAN<span class=\"label label-rouded label-themecolor pull-right\">2</span></span></a>\n          <ul aria-expanded=\"false\" class=\"collapse\">\n            <li><a href=\"user-reg\">Sejarah</a></li>\n            <li><a href=\"user-reg\">Baru</a></li>\n          </ul>\n        </li>\n      </ul>\n    </nav>\n    <!-- End Sidebar navigation -->\n  </div>\n  <!-- End Sidebar scroll-->\n</aside>\n<!-- ============================================================== -->\n<!-- End Left Sidebar - style you can find in sidebar.scss  -->\n<!-- ============================================================== -->\n"

/***/ }),

/***/ "./src/app/pages/my/menusisi/menusisi.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/my/menusisi/menusisi.component.ts ***!
  \*********************************************************/
/*! exports provided: MenusisiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusisiComponent", function() { return MenusisiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenusisiComponent = /** @class */ (function () {
    function MenusisiComponent() {
    }
    MenusisiComponent.prototype.ngOnInit = function () {
    };
    MenusisiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menusisi',
            template: __webpack_require__(/*! ./menusisi.component.html */ "./src/app/pages/my/menusisi/menusisi.component.html"),
            styles: [__webpack_require__(/*! ./menusisi.component.css */ "./src/app/pages/my/menusisi/menusisi.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenusisiComponent);
    return MenusisiComponent;
}());



/***/ }),

/***/ "./src/app/pages/my/uruspengguna/uruspengguna.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/my/uruspengguna/uruspengguna.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215L3VydXNwZW5nZ3VuYS91cnVzcGVuZ2d1bmEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/my/uruspengguna/uruspengguna.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/my/uruspengguna/uruspengguna.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  uruspengguna works!\n</p>"

/***/ }),

/***/ "./src/app/pages/my/uruspengguna/uruspengguna.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/my/uruspengguna/uruspengguna.component.ts ***!
  \*****************************************************************/
/*! exports provided: UruspenggunaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UruspenggunaComponent", function() { return UruspenggunaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UruspenggunaComponent = /** @class */ (function () {
    function UruspenggunaComponent() {
    }
    UruspenggunaComponent.prototype.ngOnInit = function () {
    };
    UruspenggunaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-uruspengguna',
            template: __webpack_require__(/*! ./uruspengguna.component.html */ "./src/app/pages/my/uruspengguna/uruspengguna.component.html"),
            styles: [__webpack_require__(/*! ./uruspengguna.component.css */ "./src/app/pages/my/uruspengguna/uruspengguna.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UruspenggunaComponent);
    return UruspenggunaComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<div id=\"main-wrapper\">\r\n  <app-header></app-header>\r\n  <app-sidebar></app-sidebar>\r\n  <!-- ============================================================== -->\r\n  <!-- Page wrapper  -->\r\n  <!-- ============================================================== -->\r\n  <div class=\"page-wrapper\">\r\n\r\n    <!-- ============================================================== -->\r\n    <!-- Container fluid  -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"container-fluid\">\r\n      <!-- ============================================================== -->\r\n      <!-- Start Page Content -->\r\n      <!-- ============================================================== -->\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <router-outlet></router-outlet>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- ============================================================== -->\r\n      <!-- End PAge Content -->\r\n      <!-- ============================================================== -->\r\n    </div>\r\n\r\n    <!-- ============================================================== -->\r\n    <!-- END Container fluid  -->\r\n    <!-- ============================================================== -->\r\n  </div>\r\n  <!-- ============================================================== -->\r\n  <!--  END Page wrapper  -->\r\n  <!-- ============================================================== -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _pages_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.routes */ "./src/app/pages/pages.routes.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage-user/manage-user.component */ "./src/app/pages/manage-user/manage-user.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _preflang_preflang_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preflang/preflang.component */ "./src/app/pages/preflang/preflang.component.ts");
/* harmony import */ var _my_main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my/main/main.component */ "./src/app/pages/my/main/main.component.ts");
/* harmony import */ var _my_menusisi_menusisi_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my/menusisi/menusisi.component */ "./src/app/pages/my/menusisi/menusisi.component.ts");
/* harmony import */ var _my_uruspengguna_uruspengguna_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my/uruspengguna/uruspengguna.component */ "./src/app/pages/my/uruspengguna/uruspengguna.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// router









var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _pages_component__WEBPACK_IMPORTED_MODULE_6__["PagesComponent"], _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_7__["ManageUserComponent"], _preflang_preflang_component__WEBPACK_IMPORTED_MODULE_9__["PreflangComponent"], _my_main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"], _my_menusisi_menusisi_component__WEBPACK_IMPORTED_MODULE_11__["MenusisiComponent"], _my_uruspengguna_uruspengguna_component__WEBPACK_IMPORTED_MODULE_12__["UruspenggunaComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _pages_routes__WEBPACK_IMPORTED_MODULE_4__["PAGES_ROUTES"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]],
            exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _pages_component__WEBPACK_IMPORTED_MODULE_6__["PagesComponent"]],
            providers: [],
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routes.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.routes.ts ***!
  \***************************************/
/*! exports provided: PAGES_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGES_ROUTES", function() { return PAGES_ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _user_reg_user_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-reg/user-reg.component */ "./src/app/user-reg/user-reg.component.ts");
/* harmony import */ var _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-user/manage-user.component */ "./src/app/pages/manage-user/manage-user.component.ts");
/* harmony import */ var _my_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my/main/main.component */ "./src/app/pages/my/main/main.component.ts");
/* harmony import */ var _my_uruspengguna_uruspengguna_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my/uruspengguna/uruspengguna.component */ "./src/app/pages/my/uruspengguna/uruspengguna.component.ts");







/*import { PreflangComponent } from './preflang/preflang.component';*/
var pagesRoutes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
        children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
            /*{ path: '', redirectTo:'/dashboard' ,pathMatch:'full'},*/
            { path: 'user-reg', component: _user_reg_user_reg_component__WEBPACK_IMPORTED_MODULE_3__["UserRegComponent"] },
            { path: 'manage-user', component: _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_4__["ManageUserComponent"] },
        ]
    },
    {
        path: 'my',
        component: _my_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
            /*{ path: '', redirectTo:'/dashboard' ,pathMatch:'full'},*/
            { path: 'urus_pengguna', component: _my_uruspengguna_uruspengguna_component__WEBPACK_IMPORTED_MODULE_6__["UruspenggunaComponent"] },
            { path: 'manage-user', component: _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_4__["ManageUserComponent"] },
        ]
    }
];
var PAGES_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(pagesRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/pages/preflang/preflang.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/preflang/preflang.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZWZsYW5nL3ByZWZsYW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/preflang/preflang.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/preflang/preflang.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  preflang works!\n</p>\n\n<!-- ============================================================== -->\n<!-- Main wrapper - style you can find in pages.scss -->\n<!-- ============================================================== -->\n<div id=\"main-wrapper\">\n  <app-header></app-header>\n  <app-sidebar></app-sidebar>\n  <!-- ============================================================== -->\n  <!-- Page wrapper  -->\n  <!-- ============================================================== -->\n  <div class=\"page-wrapper\">\n\n    <!-- ============================================================== -->\n    <!-- Container fluid  -->\n    <!-- ============================================================== -->\n    <div class=\"container-fluid\">\n      <!-- ============================================================== -->\n      <!-- Start Page Content -->\n      <!-- ============================================================== -->\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <router-outlet></router-outlet>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- ============================================================== -->\n      <!-- End PAge Content -->\n      <!-- ============================================================== -->\n    </div>\n\n    <!-- ============================================================== -->\n    <!-- END Container fluid  -->\n    <!-- ============================================================== -->\n  </div>\n  <!-- ============================================================== -->\n  <!--  END Page wrapper  -->\n  <!-- ============================================================== -->\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/preflang/preflang.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/preflang/preflang.component.ts ***!
  \******************************************************/
/*! exports provided: PreflangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreflangComponent", function() { return PreflangComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreflangComponent = /** @class */ (function () {
    function PreflangComponent() {
    }
    PreflangComponent.prototype.ngOnInit = function () {
    };
    PreflangComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preflang',
            template: __webpack_require__(/*! ./preflang.component.html */ "./src/app/pages/preflang/preflang.component.html"),
            styles: [__webpack_require__(/*! ./preflang.component.css */ "./src/app/pages/preflang/preflang.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreflangComponent);
    return PreflangComponent;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedService = /** @class */ (function () {
    function SharedService() {
    }
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/sidebar.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sidebar.service.ts ***!
  \*********************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarService = /** @class */ (function () {
    function SidebarService() {
    }
    SidebarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarService);
    return SidebarService;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumbs/breadcrumbs.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/breadcrumbs/breadcrumbs.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/breadcrumbs/breadcrumbs.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/breadcrumbs/breadcrumbs.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Bread crumb and right sidebar toggle -->\r\n<!-- ============================================================== -->\r\n<div class=\"row page-titles\">\r\n  <div class=\"col-md-5 align-self-center\">\r\n    <h3 class=\"text-themecolor\">Blank Page</h3>\r\n  </div>\r\n  <div class=\"col-md-7 align-self-center\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\">\r\n        <a href=\"javascript:void(0)\">Home</a>\r\n      </li>\r\n      <li class=\"breadcrumb-item\">pages</li>\r\n      <li class=\"breadcrumb-item active\">Blank Page</li>\r\n    </ol>\r\n  </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- End Bread crumb and right sidebar toggle -->\r\n<!-- ============================================================== -->\r\n"

/***/ }),

/***/ "./src/app/shared/breadcrumbs/breadcrumbs.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/breadcrumbs/breadcrumbs.component.ts ***!
  \*************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent() {
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumbs',
            template: __webpack_require__(/*! ./breadcrumbs.component.html */ "./src/app/shared/breadcrumbs/breadcrumbs.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumbs.component.css */ "./src/app/shared/breadcrumbs/breadcrumbs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Topbar header - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<header class=\"topbar\">\r\n  <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\r\n    <!-- ============================================================== -->\r\n    <!-- Logo -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"index.html\">\r\n        <!-- Logo icon --><b>\r\n          <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\r\n          <!-- Dark Logo icon -->\r\n          <img src=\"assets/images/logo-pic-myipcs.jpeg\" alt=\"homepage\" class=\"dark-logo\" />\r\n          <!-- Light Logo icon -->\r\n          <img src=\"assets/images/logo-light-icon.png\" alt=\"homepage\" class=\"light-logo\" />\r\n        </b>\r\n        <!--End Logo icon -->\r\n        <!-- Logo text --><span>\r\n          <!-- dark Logo text -->\r\n          <img src=\"assets/images/logo-text-myipcs.jpeg\" alt=\"homepage\" class=\"dark-logo\" />\r\n          <!-- Light Logo text -->\r\n          <img src=\"assets/images/logo-light-text.png\" class=\"light-logo\" alt=\"homepage\" /></span> </a>\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- End Logo -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"navbar-collapse\">\r\n      <!-- ============================================================== -->\r\n      <!-- toggle and nav items -->\r\n      <!-- ============================================================== -->\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <!-- This is  -->\r\n        <li class=\"nav-item\"> <a class=\"nav-link nav-toggler hidden-md-up waves-effect waves-dark\" href=\"javascript:void(0)\"><i\r\n              class=\"ti-menu\"></i></a> </li>\r\n        <li class=\"nav-item\"> <a class=\"nav-link sidebartoggler hidden-sm-down waves-effect waves-dark\" href=\"javascript:void(0)\"><i\r\n              class=\"ti-menu\"></i></a> </li>\r\n        <li class=\"nav-item hidden-sm-down\"></li>\r\n      </ul>\r\n      <!-- ============================================================== -->\r\n      <!-- User profile and search -->\r\n      <!-- ============================================================== -->\r\n      <ul class=\"navbar-nav my-lg-0\">\r\n      <!--\r\n            <li class=\"nav-item hidden-xs-down search-box\"> <a class=\"nav-link hidden-sm-down waves-effect waves-dark\" href=\"ms\">Malay</a>\r\n      </li>\r\n      <li class=\"nav-item hidden-xs-down search-box\"> <a class=\"nav-link hidden-sm-down waves-effect waves-dark\" href=\"page\">English</a>\r\n      </li>\r\n      -->\r\n        <!-- ============================================================== -->\r\n        <!-- Search -->\r\n        <!-- ============================================================== -->\r\n        <li class=\"nav-item hidden-xs-down search-box\"> <a class=\"nav-link hidden-sm-down waves-effect waves-dark\" href=\"javascript:void(0)\"><i\r\n              class=\"ti-search\"></i></a>\r\n          <form class=\"app-search\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search & enter\"> <a class=\"srh-btn\"><i class=\"ti-close\"></i></a>\r\n          </form>\r\n        </li>\r\n        <!-- ============================================================== -->\r\n        <!-- Messages -->\r\n        <!-- ============================================================== -->\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"\" id=\"2\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"mdi mdi-email\"></i>\r\n            <div class=\"notify\"> <span class=\"heartbit\"></span> <span class=\"point\"></span> </div>\r\n          </a>\r\n          <div class=\"dropdown-menu mailbox dropdown-menu-right animated bounceInDown\" aria-labelledby=\"2\">\r\n            <ul>\r\n              <li>\r\n                <div class=\"drop-title\">You have 4 new messages</div>\r\n              </li>\r\n              <li>\r\n                <div class=\"message-center\">\r\n                  <!-- Message -->\r\n                  <a href=\"#\">\r\n                    <div class=\"user-img\"> <img src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"img-circle\"> <span\r\n                        class=\"profile-status online pull-right\"></span> </div>\r\n                    <div class=\"mail-contnet\">\r\n                      <h5>Pavan kumar</h5> <span class=\"mail-desc\">Just see the my admin!</span> <span class=\"time\">9:30\r\n                        AM</span>\r\n                    </div>\r\n                  </a>\r\n                  <!-- Message -->\r\n                  <a href=\"#\">\r\n                    <div class=\"user-img\"> <img src=\"assets/images/users/2.jpg\" alt=\"user\" class=\"img-circle\"> <span\r\n                        class=\"profile-status busy pull-right\"></span> </div>\r\n                    <div class=\"mail-contnet\">\r\n                      <h5>Sonu Nigam</h5> <span class=\"mail-desc\">I've sung a song! See you at</span> <span class=\"time\">9:10\r\n                        AM</span>\r\n                    </div>\r\n                  </a>\r\n                  <!-- Message -->\r\n                  <a href=\"#\">\r\n                    <div class=\"user-img\"> <img src=\"assets/images/users/3.jpg\" alt=\"user\" class=\"img-circle\"> <span\r\n                        class=\"profile-status away pull-right\"></span> </div>\r\n                    <div class=\"mail-contnet\">\r\n                      <h5>Arijit Sinh</h5> <span class=\"mail-desc\">I am a singer!</span> <span class=\"time\">9:08 AM</span>\r\n                    </div>\r\n                  </a>\r\n                  <!-- Message -->\r\n                  <a href=\"#\">\r\n                    <div class=\"user-img\"> <img src=\"assets/images/users/4.jpg\" alt=\"user\" class=\"img-circle\"> <span\r\n                        class=\"profile-status offline pull-right\"></span> </div>\r\n                    <div class=\"mail-contnet\">\r\n                      <h5>Pavan kumar</h5> <span class=\"mail-desc\">Just see the my admin!</span> <span class=\"time\">9:02\r\n                        AM</span>\r\n                    </div>\r\n                  </a>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <a class=\"nav-link text-center\" href=\"javascript:void(0);\"> <strong>See all e-Mails</strong> <i class=\"fa fa-angle-right\"></i>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <!-- ============================================================== -->\r\n        <!-- End Messages -->\r\n        <!-- ============================================================== -->\r\n        <!-- ============================================================== -->\r\n        <!-- Language -->\r\n        <!-- ============================================================== -->\r\n        <!-- <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"> <i class=\"flag-icon flag-icon-us\"></i></a>\r\n          <div class=\"dropdown-menu dropdown-menu-right animated bounceInDown\"> <a class=\"dropdown-item\" href=\"#\"><i\r\n                class=\"flag-icon flag-icon-in\"></i> India</a> <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-icon flag-icon-fr\"></i>\r\n              French</a> <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-icon flag-icon-cn\"></i> China</a> <a class=\"dropdown-item\"\r\n              href=\"#\"><i class=\"flag-icon flag-icon-de\"></i> Dutch</a> </div>\r\n        </li> -->\r\n        <!-- ============================================================== -->\r\n        <!-- Profile -->\r\n        <!-- ============================================================== -->\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"><img src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"profile-pic\" /></a>\r\n          <div class=\"dropdown-menu dropdown-menu-right animated flipInY\">\r\n            <ul class=\"dropdown-user\">\r\n              <li>\r\n                <div class=\"dw-user-box\">\r\n                  <div class=\"u-img\"><img src=\"assets/images/users/1.jpg\" alt=\"user\"></div>\r\n                  <div class=\"u-text\">\r\n                    <h4>Steave Jobs</h4>\r\n                    <p class=\"text-muted\">varun@gmail.com</p><a href=\"pages-profile.html\" class=\"btn btn-rounded btn-danger btn-sm\">View\r\n                      Profile</a>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li role=\"separator\" class=\"divider\"></li>\r\n              <li><a href=\"#\"><i class=\"ti-user\"></i> My Profile</a></li>\r\n              <li><a href=\"#\"><i class=\"ti-wallet\"></i> My Balance</a></li>\r\n              <li><a href=\"#\"><i class=\"ti-email\"></i> Inbox</a></li>\r\n              <li role=\"separator\" class=\"divider\"></li>\r\n              <li><a href=\"#\"><i class=\"ti-settings\"></i> Account Setting</a></li>\r\n              <li role=\"separator\" class=\"divider\"></li>\r\n              <li><a href=\"#\"><i class=\"fa fa-power-off\"></i> Logout</a></li>\r\n            </ul>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n<!-- ============================================================== -->\r\n<!-- End Topbar header -->\r\n<!-- ============================================================== -->"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/nopagefound/nopagefound.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/nopagefound/nopagefound.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ub3BhZ2Vmb3VuZC9ub3BhZ2Vmb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/nopagefound/nopagefound.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/nopagefound/nopagefound.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  nopagefound works!\r\n</p>\r\n\r\n<li><a href=\"en\">Manage User</a></li>\r\n\r\n<li><a href=\"my\">Manage User</a></li>"

/***/ }),

/***/ "./src/app/shared/nopagefound/nopagefound.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/nopagefound/nopagefound.component.ts ***!
  \*************************************************************/
/*! exports provided: NopagefoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NopagefoundComponent", function() { return NopagefoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NopagefoundComponent = /** @class */ (function () {
    function NopagefoundComponent() {
    }
    NopagefoundComponent.prototype.ngOnInit = function () {
    };
    NopagefoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nopagefound',
            template: __webpack_require__(/*! ./nopagefound.component.html */ "./src/app/shared/nopagefound/nopagefound.component.html"),
            styles: [__webpack_require__(/*! ./nopagefound.component.css */ "./src/app/shared/nopagefound/nopagefound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NopagefoundComponent);
    return NopagefoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nopagefound/nopagefound.component */ "./src/app/shared/nopagefound/nopagefound.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ "./src/app/shared/breadcrumbs/breadcrumbs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_1__["NopagefoundComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
                _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]],
            imports: [],
            exports: [_nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_1__["NopagefoundComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
                _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"]],
            providers: [],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Left Sidebar - style you can find in sidebar.scss  -->\r\n<!-- ============================================================== -->\r\n<aside class=\"left-sidebar\">\r\n  <!-- Sidebar scroll-->\r\n  <div class=\"scroll-sidebar\">\r\n    <!-- Sidebar navigation-->\r\n    <nav class=\"sidebar-nav\">\r\n      <ul id=\"sidebarnav\">        \r\n        <li class=\"nav-small-cap\" i18n>Administration</li>\r\n\r\n        <a href=\"my\">Change to : MY</a>\r\n        \r\n\r\n        <li class=\"nav-devider\"></li>\r\n        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-gauge\"></i>\r\n          <span class=\"hide-menu\" i18n>USER MANAGEMENT<span class=\"label label-rouded label-themecolor pull-right\">4</span></span></a>\r\n          <ul aria-expanded=\"false\" class=\"collapse\">\r\n            <li><a href=\"page/manage-user\">Manage User</a></li>\r\n            <li><a href=\"page/user-reg\">User Registration</a></li>\r\n            <li><a href=\"user-reg\">Bulk User Registration</a></li>\r\n            <li><a href=\"https://www.tutorialspoint.com/\">Group Management</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"nav-devider\"></li>\r\n        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-gauge\"></i>\r\n          <span class=\"hide-menu\">MONITORING<span class=\"label label-rouded label-themecolor pull-right\">4</span></span></a>\r\n          <ul aria-expanded=\"false\" class=\"collapse\">\r\n            <li><a href=\"user-reg\">Server Monitoring</a></li>\r\n            <li><a href=\"user-reg\">Application Monitoring</a></li>\r\n            <li><a href=\"https://www.tutorialspoint.com/\">Job Monitoring</a></li>\r\n            <li><a href=\"user-reg\">Web Analytics</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"nav-devider\"></li>\r\n        <li> <a class=\"has-arrow waves-effect waves-dark\" href=\"#\" aria-expanded=\"false\"><i class=\"mdi mdi-gauge\"></i>\r\n          <span class=\"hide-menu\">ANNOUNCEMENT<span class=\"label label-rouded label-themecolor pull-right\">2</span></span></a>\r\n          <ul aria-expanded=\"false\" class=\"collapse\">\r\n            <li><a href=\"user-reg\">History</a></li>\r\n            <li><a href=\"user-reg\">New</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <!-- End Sidebar navigation -->\r\n  </div>\r\n  <!-- End Sidebar scroll-->\r\n</aside>\r\n<!-- ============================================================== -->\r\n<!-- End Left Sidebar - style you can find in sidebar.scss  -->\r\n<!-- ============================================================== -->"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/shared/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/user-reg/user-reg.component.css":
/*!*************************************************!*\
  !*** ./src/app/user-reg/user-reg.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcmVnL3VzZXItcmVnLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user-reg/user-reg.component.html":
/*!**************************************************!*\
  !*** ./src/app/user-reg/user-reg.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 i18n=\"@@templatesTitle\">\n\tTemplates\n</h1>\n<form class=\"form-horizontal\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">USER REGISTRATION</h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\" for=\"fullName\">Full Name</label>\n        <div class=\"col-sm-8\">\n          <input id=\"fullName\" type=\"text\" class=\"form-control\">\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\" for=\"email\">Email</label>\n        <div class=\"col-sm-8\">\n          <input id=\"email\" type=\"text\" class=\"form-control\">\n        </div>\n      </div>\n\n    </div>\n    <div class=\"panel-footer\">\n      <button class=\"btn btn-primary\" type=\"submit\">Save</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/user-reg/user-reg.component.ts":
/*!************************************************!*\
  !*** ./src/app/user-reg/user-reg.component.ts ***!
  \************************************************/
/*! exports provided: UserRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegComponent", function() { return UserRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserRegComponent = /** @class */ (function () {
    function UserRegComponent() {
    }
    UserRegComponent.prototype.ngOnInit = function () {
    };
    UserRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-reg',
            template: __webpack_require__(/*! ./user-reg.component.html */ "./src/app/user-reg/user-reg.component.html"),
            styles: [__webpack_require__(/*! ./user-reg.component.css */ "./src/app/user-reg/user-reg.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserRegComponent);
    return UserRegComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\MyIPCSDev\MyIPCS-Admin-Module - Copy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map