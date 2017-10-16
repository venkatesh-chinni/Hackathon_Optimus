webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar{\r\n  margin-bottom: 30px;\r\n  text-align: center;\r\n}\r\na:hover\r\n{\r\n\tcolor: white;\r\n\ttext-decoration: none;\r\n}\r\n\r\na\r\n{\r\n\tcolor: white;\r\n}\r\n.navbar-brand\r\n{\r\n\ttext-align: center;\r\n}\r\n\r\nfooter, footer .container{\r\n  background-color:#232323;\r\n  color: white;\r\n  font-size: 12px;\r\n  padding: 20px 0px;\r\n}\r\n\r\n.column_test{\r\n\tposition: relative;\r\n\tclear: both;\r\n\ttop: 100px;\r\n\tfont-weight: 500;\r\n}\r\nbody{\r\n\ttext-align: center;\r\n}\r\n\r\n.leftCol {\r\n\tfloat: left;\r\n\twidth: 50%;\r\n    height: 300px;\r\n}\r\n\r\n.rightCol {\r\n\tposition: relative;\r\n\tfloat: left;\r\n\twidth: 50%;\r\n}\r\n\r\n.rightCol1{\r\n\theight: 150px;\r\n\tborder: 1px solid black;\r\n}\r\n.rightCol2 {\r\n\theight: 150px;\r\n\tborder: 1px solid black;\r\n}\r\n\r\n.col-3{\r\n\tmargin: 0px;\r\n\tpadding: 10px 0px;\r\n\t\r\n}\r\nbody\r\n{\r\n\tbackground-color: grey;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark \">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"#\">Tap the white</a>\r\n    <span style=\"color:white\"> <a href=\"#\" >Help</a> </span>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<br><br>\r\n<div class=\"container\">\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-3\"></div>\r\n    <div class=\"col-3\">\r\n      <div class=\"rightCol2\" [style.background-color]=\"this.hackathon.colors[0]\" (click)=\"this.hackathon.onClickTimer();onClick(this.hackathon.colors[0]);hackathon.shuffle(this.hackathon.colors);\"></div>\r\n      <div class=\"rightCol1\"  [style.background-color]=\"this.hackathon.colors[1]\" (click)=\"this.hackathon.onClickTimer();onClick(this.hackathon.colors[1]);hackathon.shuffle(this.hackathon.colors);\"></div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <div class=\"rightCol1\"  [style.background-color]=\"this.hackathon.colors[2]\" (click)=\"this.hackathon.onClickTimer();onClick(this.hackathon.colors[2]);hackathon.shuffle(this.hackathon.colors);\"></div>\r\n      <div class=\"rightCol2\"  [style.background-color]=\"this.hackathon.colors[3]\" (click)=\"this.hackathon.onClickTimer();onClick(this.hackathon.colors[3]);hackathon.shuffle(this.hackathon.colors);\"></div>\r\n    </div>\r\n    <div class=\"col-3\"></div>\r\n</div>\r\n<br>\r\n<h3 class=\"text-center\">Timer:\r\n    {{this.hackathon.hoursDisplay ? this.hackathon.hoursDisplay : '00'}} :\r\n    {{(this.hackathon.minutesDisplay) && (this.hackathon.minutesDisplay <= 59) ? this.hackathon.minutesDisplay : '00'}} :\r\n    {{(this.hackathon.secondsDisplay) && (this.hackathon.secondsDisplay <= 59) ? this.hackathon.secondsDisplay : '00'}} <br/>\r\n</h3>\r\n<br>\r\n<h3 class=\"text-center\"  *ngIf=\"!this.hackathon.change\">Score:{{score}}</h3>\r\n<h2 class=\"text-center\" *ngIf=\"this.hackathon.change\">Game Over. Your score is {{ score }}.</h2><br><br><br>\r\n<app-submit-form></app-submit-form>\r\n</div>\r\n<br><br>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hackathon_service__ = __webpack_require__("../../../../../src/app/hackathon.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(hackathon) {
        this.hackathon = hackathon;
        this.title = 'app';
        this.colors = this.colors;
        this.score = 0;
        this.ticks = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.hackathon.colors = this.hackathon.shuffle(['white', 'red', 'green', 'blue']);
        console.log(this.colors);
    };
    AppComponent.prototype.onClick = function (color) {
        if (color === 'white' && this.hackathon.finish) {
            this.hackathon.scores++;
            this.score++;
        }
        console.log(this.hackathon.scores);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__hackathon_service__["a" /* HackathonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__hackathon_service__["a" /* HackathonService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__submit_component__ = __webpack_require__("../../../../../src/app/submit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hackathon_service__ = __webpack_require__("../../../../../src/app/hackathon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__submit_service__ = __webpack_require__("../../../../../src/app/submit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_0__submit_component__["a" /* SubmitComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_1__hackathon_service__["a" /* HackathonService */], __WEBPACK_IMPORTED_MODULE_6__submit_service__["a" /* SubmitService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/hackathon.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HackathonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HackathonService = (function () {
    function HackathonService() {
        this.count = 0;
        this.change = false;
        this.finish = true;
        this.ticks = 0;
        this.minutesDisplay = 0;
        this.hoursDisplay = 0;
        this.secondsDisplay = 0;
        this.scores = 0;
    }
    HackathonService.prototype.shuffle = function (array) {
        if (this.finish) {
            var currentIndex = array.length, temporaryValue = void 0, randomIndex = void 0;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            console.log(array);
            return array;
        }
    };
    HackathonService.prototype.onClickTimer = function () {
        if ((this.count) === 0) {
            this.startTimer();
        }
        (this.count) = (this.count) + 1;
        console.log(this.count);
    };
    HackathonService.prototype.startTimer = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(1, 500);
        this.sub = timer.subscribe(function (t) {
            _this.ticks = t;
            console.log(_this.ticks);
            _this.colors = _this.shuffle(['white', 'red', 'green', 'blue']);
            if ((_this.ticks) <= 20) {
                _this.secondsDisplay = Math.round(_this.getSeconds(_this.ticks) / 2);
                console.log(_this.secondsDisplay);
                _this.minutesDisplay = _this.getMinutes(_this.ticks);
                _this.hoursDisplay = _this.getHours(_this.ticks);
                // tslint:disable-next-line:one-line
            }
            else {
                _this.finish = false;
                console.log(_this.finish);
                _this.change = true;
                _this.sub.unsubscribe();
            }
        });
    };
    HackathonService.prototype.getSeconds = function (ticks) {
        return this.pad(ticks % 60);
    };
    HackathonService.prototype.getMinutes = function (ticks) {
        return this.pad((Math.floor(ticks / 60)) % 60);
    };
    HackathonService.prototype.getHours = function (ticks) {
        return this.pad(Math.floor((ticks / 60) / 60));
    };
    HackathonService.prototype.pad = function (digit) {
        return digit <= 9 ? '0' + digit : digit;
    };
    return HackathonService;
}());
HackathonService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], HackathonService);

//# sourceMappingURL=hackathon.service.js.map

/***/ }),

/***/ "../../../../../src/app/submit.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"container-fluid\">\r\n        <button class=\"btn btn-success\" data-target=\"#loginModal\" data-toggle=\"modal\">Submit Score Sheet</button>\r\n        <div class=\"modal fade\" tabindex=\"1\" id=\"loginModal\" data-keyboard=\"false\">\r\n            <div class=\"modal-dialog modal-sm\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                &times;\r\n                </button>\r\n                        <br>\r\n                        <br>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <form>\r\n                                <div class=\"form-group\">\r\n                                    <h2>Your score is {{ _hackathon.scores }}</h2>\r\n                                </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"Name\">NAME</label>\r\n                                <input  #inputname class=\"form-control\" placeholder=\" Enter Name\" type=\"text\" id=\"username\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"email\">EMAIL</label>\r\n                                <input #inputemail class=\"form-control\" placeholder=\"Enter email\" type=\"text\" id=\"email\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"location\">LOCATION</label>\r\n                                <input #inputloc class=\"form-control\" placeholder=\"Select Location\" type=\"text\" id=\"location\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"ID\">ID</label>\r\n                                <input  #inputid class=\"form-control\" placeholder=\"Enter id\" type=\"number\" id=\"ID\" />\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"submit\"  (click)=\"submitScore(inputname.value,inputemail.value,inputloc.value,inputid.value)\"class=\"btn btn-primary\">Submit</button>\r\n                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/submit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hackathon_service__ = __webpack_require__("../../../../../src/app/hackathon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__submit_service__ = __webpack_require__("../../../../../src/app/submit.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubmitComponent = (function () {
    function SubmitComponent(_submitservice, _hackathon) {
        this._submitservice = _submitservice;
        this._hackathon = _hackathon;
    }
    SubmitComponent.prototype.ngOnIt = function () {
        this.mark = this._hackathon.scores;
        console.log(this.mark);
    };
    SubmitComponent.prototype.submitScore = function (name, email, location, ID) {
        this._submitservice.submitform(name, email, location, ID, this._hackathon.scores);
    };
    return SubmitComponent;
}());
SubmitComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'app-submit-form',
        template: __webpack_require__("../../../../../src/app/submit.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__submit_service__["a" /* SubmitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__submit_service__["a" /* SubmitService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__hackathon_service__["a" /* HackathonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__hackathon_service__["a" /* HackathonService */]) === "function" && _b || Object])
], SubmitComponent);

var _a, _b;
//# sourceMappingURL=submit.component.js.map

/***/ }),

/***/ "../../../../../src/app/submit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubmitService = (function () {
    function SubmitService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:5000/api/hackathon';
    }
    SubmitService.prototype.submitform = function (name, email, location, id, score) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        console.log(score);
        this.http.post(this.baseUrl, JSON.stringify({ name: name, email: email, location: location, id: id, score: score }), { headers: headers }).subscribe();
    };
    return SubmitService;
}());
SubmitService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SubmitService);

var _a;
//# sourceMappingURL=submit.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map