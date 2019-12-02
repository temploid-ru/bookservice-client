(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurant-restaurant-module"],{

/***/ "./src/app/resolvers/session/session-admin.resolver.ts":
/*!*************************************************************!*\
  !*** ./src/app/resolvers/session/session-admin.resolver.ts ***!
  \*************************************************************/
/*! exports provided: SessionAdminResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionAdminResolver", function() { return SessionAdminResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_services_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services/session/session.service */ "./src/app/_services/session/session.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let SessionAdminResolver = class SessionAdminResolver {
    constructor(localStorage, sessionS, router) {
        this.localStorage = localStorage;
        this.sessionS = sessionS;
        this.router = router;
    }
    resolve(route, state) {
        const session = this.localStorage.retrieve('session');
        if (moment__WEBPACK_IMPORTED_MODULE_7__(session.expirationTime).isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_7__["now"]())) {
            this.router.navigateByUrl('/admin/auth');
            return;
        }
        if (session && session.token && !!session.is_admin) {
            this.sessionS.session$.next(session);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(session);
        }
        return this.sessionS.login()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(res => {
            if (!res.is_admin) {
                this.router.navigateByUrl('/admin/auth');
            }
        }));
    }
};
SessionAdminResolver.ctorParameters = () => [
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
    { type: _app_services_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SessionAdminResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
        _app_services_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SessionAdminResolver);



/***/ }),

/***/ "./src/app/restaurant/restaurant.module.ts":
/*!*************************************************!*\
  !*** ./src/app/restaurant/restaurant.module.ts ***!
  \*************************************************/
/*! exports provided: RestaurantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantModule", function() { return RestaurantModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _restaurant_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurant.routing */ "./src/app/restaurant/restaurant.routing.ts");




let RestaurantModule = class RestaurantModule {
};
RestaurantModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _restaurant_routing__WEBPACK_IMPORTED_MODULE_3__["RestaurantRouting"]
        ]
    })
], RestaurantModule);



/***/ }),

/***/ "./src/app/restaurant/restaurant.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/restaurant/restaurant.routing.ts ***!
  \**************************************************/
/*! exports provided: RestaurantRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantRouting", function() { return RestaurantRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_resolvers_session_session_admin_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/resolvers/session/session-admin.resolver */ "./src/app/resolvers/session/session-admin.resolver.ts");




const routes = [
    {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        resolve: {
            session: _app_resolvers_session_session_admin_resolver__WEBPACK_IMPORTED_MODULE_3__["SessionAdminResolver"]
        },
    },
    // {path: '', component: GanttTimelineChartComponent},
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
];
let RestaurantRouting = class RestaurantRouting {
};
RestaurantRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RestaurantRouting);



/***/ })

}]);
//# sourceMappingURL=restaurant-restaurant-module-es2015.js.map