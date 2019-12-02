(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/ngx-take-until-destroy/fesm5/ngx-take-until-destroy.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-take-until-destroy/fesm5/ngx-take-until-destroy.js ***!
  \*****************************************************************************/
/*! exports provided: untilDestroyed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untilDestroyed", function() { return untilDestroyed; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return typeof value === 'function';
}
/** @type {?} */
var untilDestroyed = function (componentInstance, destroyMethodName) {
    if (destroyMethodName === void 0) { destroyMethodName = 'ngOnDestroy'; }
    return function (source) {
        /** @type {?} */
        var originalDestroy = componentInstance[destroyMethodName];
        if (isFunction(originalDestroy) === false) {
            throw new Error(componentInstance.constructor.name + " is using untilDestroyed but doesn't implement " + destroyMethodName);
        }
        if (!componentInstance['__takeUntilDestroy']) {
            componentInstance['__takeUntilDestroy'] = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            componentInstance[destroyMethodName] = function () {
                isFunction(originalDestroy) && originalDestroy.apply(this, arguments);
                componentInstance['__takeUntilDestroy'].next(true);
                componentInstance['__takeUntilDestroy'].complete();
            };
        }
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(componentInstance['__takeUntilDestroy']));
    };
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRha2UtdW50aWwtZGVzdHJveS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXRha2UtdW50aWwtZGVzdHJveS9zcmMvdGFrZS11bnRpbC1kZXN0cm95LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuXG5leHBvcnQgY29uc3QgdW50aWxEZXN0cm95ZWQgPSAoXG4gIGNvbXBvbmVudEluc3RhbmNlLFxuICBkZXN0cm95TWV0aG9kTmFtZSA9ICduZ09uRGVzdHJveSdcbikgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4ge1xuICBjb25zdCBvcmlnaW5hbERlc3Ryb3kgPSBjb21wb25lbnRJbnN0YW5jZVtkZXN0cm95TWV0aG9kTmFtZV07XG4gIGlmIChpc0Z1bmN0aW9uKG9yaWdpbmFsRGVzdHJveSkgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYCR7XG4gICAgICAgIGNvbXBvbmVudEluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWVcbiAgICAgIH0gaXMgdXNpbmcgdW50aWxEZXN0cm95ZWQgYnV0IGRvZXNuJ3QgaW1wbGVtZW50ICR7ZGVzdHJveU1ldGhvZE5hbWV9YFxuICAgICk7XG4gIH1cbiAgaWYgKCFjb21wb25lbnRJbnN0YW5jZVsnX190YWtlVW50aWxEZXN0cm95J10pIHtcbiAgICBjb21wb25lbnRJbnN0YW5jZVsnX190YWtlVW50aWxEZXN0cm95J10gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgY29tcG9uZW50SW5zdGFuY2VbZGVzdHJveU1ldGhvZE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICBpc0Z1bmN0aW9uKG9yaWdpbmFsRGVzdHJveSkgJiYgb3JpZ2luYWxEZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBjb21wb25lbnRJbnN0YW5jZVsnX190YWtlVW50aWxEZXN0cm95J10ubmV4dCh0cnVlKTtcbiAgICAgIGNvbXBvbmVudEluc3RhbmNlWydfX3Rha2VVbnRpbERlc3Ryb3knXS5jb21wbGV0ZSgpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIHNvdXJjZS5waXBlKHRha2VVbnRpbDxUPihjb21wb25lbnRJbnN0YW5jZVsnX190YWtlVW50aWxEZXN0cm95J10pKTtcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBR0Esb0JBQW9CLEtBQUs7SUFDdkIsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLENBQUM7Q0FDcEM7O0FBRUQsSUFBYSxjQUFjLEdBQUcsVUFDNUIsaUJBQWlCLEVBQ2pCLGlCQUFpQztJQUFqQyxrQ0FBQSxFQUFBLGlDQUFpQztJQUM5QixPQUFBLFVBQUksTUFBcUI7O1FBQzVCLElBQU0sZUFBZSxHQUFHLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDN0QsSUFBSSxVQUFVLENBQUMsZUFBZSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ3pDLE1BQU0sSUFBSSxLQUFLLENBRVgsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksdURBQ2MsaUJBQW1CLENBQ3RFLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQzVDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUV4RCxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHO2dCQUNyQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3RFLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuRCxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3BELENBQUM7U0FDSDtRQUNELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUksaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0U7Q0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/restaurant/auth/page-login/page-login.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/restaurant/auth/page-login/page-login.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-group\" [formGroup]=\"form\" (ngSubmit)=\"submit($event)\">\n  <h1>Авторизация</h1>\n  <div class=\"form-group\">\n    <input type=\"text\" formControlName=\"login\" class=\"form-control\" placeholder=\"Логин\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Пароль\">\n  </div>\n  <div class=\"form-group\">\n    <button class=\"btn btn-primary col btn-lg\">Войти</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/restaurant/auth/page-registration/page-registration.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/restaurant/auth/page-registration/page-registration.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-group\" [formGroup]=\"form\">\n  <h1>Регистрация</h1>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Логин\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Пароль\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Повтрите пароль\">\n  </div>\n  <div class=\"form-group\">\n    <button class=\"btn btn-primary col btn-lg\">Регистрация</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/restaurant/auth/auth.module.ts":
/*!************************************************!*\
  !*** ./src/app/restaurant/auth/auth.module.ts ***!
  \************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.routing */ "./src/app/restaurant/auth/auth.routing.ts");
/* harmony import */ var _page_login_page_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-login/page-login.component */ "./src/app/restaurant/auth/page-login/page-login.component.ts");
/* harmony import */ var _page_registration_page_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-registration/page-registration.component */ "./src/app/restaurant/auth/page-registration/page-registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _page_login_page_login_component__WEBPACK_IMPORTED_MODULE_4__["PageLoginComponent"],
                _page_registration_page_registration_component__WEBPACK_IMPORTED_MODULE_5__["PageRegistrationComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing__WEBPACK_IMPORTED_MODULE_3__["AuthRouting"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/restaurant/auth/auth.routing.ts":
/*!*************************************************!*\
  !*** ./src/app/restaurant/auth/auth.routing.ts ***!
  \*************************************************/
/*! exports provided: AuthRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRouting", function() { return AuthRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_restaurant_auth_page_login_page_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/restaurant/auth/page-login/page-login.component */ "./src/app/restaurant/auth/page-login/page-login.component.ts");
/* harmony import */ var _app_restaurant_auth_page_registration_page_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/restaurant/auth/page-registration/page-registration.component */ "./src/app/restaurant/auth/page-registration/page-registration.component.ts");





var routes = [
    { path: '', component: _app_restaurant_auth_page_login_page_login_component__WEBPACK_IMPORTED_MODULE_3__["PageLoginComponent"] },
    { path: 'register', component: _app_restaurant_auth_page_registration_page_registration_component__WEBPACK_IMPORTED_MODULE_4__["PageRegistrationComponent"] }
];
var AuthRouting = /** @class */ (function () {
    function AuthRouting() {
    }
    AuthRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRouting);
    return AuthRouting;
}());



/***/ }),

/***/ "./src/app/restaurant/auth/page-login/page-login.component.sass":
/*!**********************************************************************!*\
  !*** ./src/app/restaurant/auth/page-login/page-login.component.sass ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnQvYXV0aC9wYWdlLWxvZ2luL3BhZ2UtbG9naW4uY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/restaurant/auth/page-login/page-login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/restaurant/auth/page-login/page-login.component.ts ***!
  \********************************************************************/
/*! exports provided: PageLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoginComponent", function() { return PageLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services_session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services/session/session.service */ "./src/app/_services/session/session.service.ts");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm5/ngx-take-until-destroy.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var PageLoginComponent = /** @class */ (function () {
    function PageLoginComponent(fb, session, router) {
        this.fb = fb;
        this.session = session;
        this.router = router;
    }
    PageLoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            login: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    PageLoginComponent.prototype.submit = function (e) {
        var _this = this;
        e.preventDefault();
        if (this.form.invalid) {
            return;
        }
        this.session.login(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this))
            .subscribe(function () { return _this.router.navigateByUrl('/admin'); });
    };
    PageLoginComponent.prototype.ngOnDestroy = function () {
    };
    PageLoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _app_services_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    PageLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-login',
            template: __webpack_require__(/*! raw-loader!./page-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/restaurant/auth/page-login/page-login.component.html"),
            styles: [__webpack_require__(/*! ./page-login.component.sass */ "./src/app/restaurant/auth/page-login/page-login.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_services_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], PageLoginComponent);
    return PageLoginComponent;
}());



/***/ }),

/***/ "./src/app/restaurant/auth/page-registration/page-registration.component.sass":
/*!************************************************************************************!*\
  !*** ./src/app/restaurant/auth/page-registration/page-registration.component.sass ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnQvYXV0aC9wYWdlLXJlZ2lzdHJhdGlvbi9wYWdlLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/restaurant/auth/page-registration/page-registration.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/restaurant/auth/page-registration/page-registration.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PageRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRegistrationComponent", function() { return PageRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var PageRegistrationComponent = /** @class */ (function () {
    function PageRegistrationComponent(fb) {
        this.fb = fb;
    }
    PageRegistrationComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({});
    };
    PageRegistrationComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    PageRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-registration',
            template: __webpack_require__(/*! raw-loader!./page-registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/restaurant/auth/page-registration/page-registration.component.html"),
            styles: [__webpack_require__(/*! ./page-registration.component.sass */ "./src/app/restaurant/auth/page-registration/page-registration.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PageRegistrationComponent);
    return PageRegistrationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es5.js.map