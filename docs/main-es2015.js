(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-game></app-game>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<span>-->\n<!--  <span class=\"btn-default\" (click)=\"startGame(false)\">basic game</span>-->\n<!--  <span class=\"btn-default\" (click)=\"startGame(true)\">experimental features</span>-->\n<!--</span>-->\n\n<canvas [width]=\"width\" [height]=\"height\" class=\"canvas\" #canvas></canvas> <br />\n<span>\n  <div style=\"display: inline-block\"><button class=\"btn-default\" (click)=\"foo(false)\">start: false</button></div>\n  <div style=\"display: inline-block\"><button class=\"btn-default\" (click)=\"foo(true)\">start: true</button></div>\n  <div style=\"display: inline-block\">\n    <button class=\"btn-default\" (click)=\"gameService.forceStopGame()\">kill</button>\n  </div>\n  <div style=\"display: inline-block\">\n    <button class=\"btn-default\" (click)=\"gameService.setLevel(10)\">max level</button>\n  </div>\n  <div style=\"display: inline-block\">\n    <button class=\"btn-default\" (click)=\"gameService.notify('Obaida1234 travelled 10000 Light Years!', 50)\">\n      msg0\n    </button>\n  </div>\n  <div style=\"display: inline-block\">\n    <button class=\"btn-default\" (click)=\"gameService.notify('Bob has joined the lobby', 50)\">msg1</button>\n  </div>\n</span>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'space-game';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/game/alien.ts":
/*!*******************************!*\
  !*** ./src/app/game/alien.ts ***!
  \*******************************/
/*! exports provided: State, GunnerAlien */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GunnerAlien", function() { return GunnerAlien; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit */ "./src/app/game/unit.ts");


var State;
(function (State) {
    State[State["Firing"] = 1] = "Firing";
    State[State["Aiming"] = 2] = "Aiming";
    State[State["Moving"] = 4] = "Moving";
})(State || (State = {}));
class GunnerAlien extends _unit__WEBPACK_IMPORTED_MODULE_1__["Fighter"] {
    constructor(x, y, w, h, images, explosionsImages, hp, crashDamage, damagedImages, laserImages, laserExplosion, player, framesToShoot, burstLength, maxposition) {
        super(x, y, w, h, images, explosionsImages, hp, crashDamage, damagedImages, laserImages, laserExplosion);
        this.player = player;
        this.framesToShoot = framesToShoot;
        this.burstLength = burstLength;
        this.maxposition = maxposition;
        this.shootingCoolDown = framesToShoot;
        this.imgOffset = -Math.PI / 2;
    }
    turnToFacePlayer() {
        const center = this.getCenter();
        const playerCenter = this.player.getCenter();
        this.rad = -Math.atan2(-(playerCenter.y - center.y), playerCenter.x - center.x) + this.imgOffset;
    }
    update(frame) {
        if (!this.dying) {
            if (this.shootingCoolDown) {
                this.shootingCoolDown--;
            }
            else {
                this.ammo = this.burstLength;
                this.shootingCoolDown = this.framesToShoot;
            }
            this.turnToFacePlayer();
            this.fireLasers();
        }
        if (this.y > this.maxposition) {
            this.y = this.maxposition;
            this.vy = 0;
        }
        super.update(frame);
    }
    explode(frame) {
        super.explode(frame, this.h, this.h);
    }
}


/***/ }),

/***/ "./src/app/game/assets.ts":
/*!********************************!*\
  !*** ./src/app/game/assets.ts ***!
  \********************************/
/*! exports provided: loadImages, loadSong, loadBoost, loadLaser, loadMissile, loadNoAmmo, loadDamage, loadShipExplosion, loadAsteroidExplosion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImages", function() { return loadImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSong", function() { return loadSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBoost", function() { return loadBoost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLaser", function() { return loadLaser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMissile", function() { return loadMissile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadNoAmmo", function() { return loadNoAmmo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDamage", function() { return loadDamage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadShipExplosion", function() { return loadShipExplosion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAsteroidExplosion", function() { return loadAsteroidExplosion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const BaseFolder = 'assets/game';
const SFXBaseFolder = `${BaseFolder}/sfx`;
function loadImages() {
    return new Promise((resolve, reject) => {
        const res = {};
        let numImages = 0;
        let numLoaded = 0;
        function loadImage(s) {
            numImages++;
            const img = new Image();
            img.src = s;
            img.onload = () => {
                numLoaded++;
                if (numLoaded === numImages) {
                    resolve(res);
                }
            };
            return img;
        }
        res.asteroids = {
            asteroid1: [
                loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid1.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid2.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid3.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid4.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid5.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid6.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid7.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid8.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid9.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid10.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid11.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid12.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid13.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid14.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid1/asteroid15.svg`)
            ],
            asteroid2: [
                loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid1.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid2.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid3.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid4.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid5.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid6.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid7.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid8.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid9.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid10.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid11.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid12.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid13.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid14.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid15.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid16.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid17.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid2/asteroid18.svg`)
            ],
            asteroid3: [
                loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid1.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid2.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid3.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid4.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid5.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid6.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid7.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid8.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid9.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid10.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid11.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid12.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid13.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid14.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid15.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid16.svg`),
                loadImage(`${BaseFolder}/asteroids/asteroid3/asteroid17.svg`)
            ],
            damaged: {
                asteroid1: [loadImage(`${BaseFolder}/asteroids/damaged-asteroids/asteroid1.svg`)],
                asteroid2: [loadImage(`${BaseFolder}/asteroids/damaged-asteroids/asteroid2.svg`)],
                asteroid3: [loadImage(`${BaseFolder}/asteroids/damaged-asteroids/asteroid3.svg`)]
            }
        };
        res.aliens = {
            alien1: [
                loadImage(`${BaseFolder}/aliens/alien1/alien1.svg`),
                loadImage(`${BaseFolder}/aliens/alien1/alien2.svg`),
                loadImage(`${BaseFolder}/aliens/alien1/alien3.svg`),
                loadImage(`${BaseFolder}/aliens/alien1/alien4.svg`),
                loadImage(`${BaseFolder}/aliens/alien1/alien5.svg`),
                loadImage(`${BaseFolder}/aliens/alien1/alien6.svg`),
                loadImage(`${BaseFolder}/aliens/alien1/alien7.svg`)
            ],
            alien2: [
                loadImage(`${BaseFolder}/aliens/alien2/alien1.svg`),
                loadImage(`${BaseFolder}/aliens/alien2/alien2.svg`),
                loadImage(`${BaseFolder}/aliens/alien2/alien3.svg`),
                loadImage(`${BaseFolder}/aliens/alien2/alien4.svg`),
                loadImage(`${BaseFolder}/aliens/alien2/alien5.svg`),
                loadImage(`${BaseFolder}/aliens/alien2/alien6.svg`),
                loadImage(`${BaseFolder}/aliens/alien2/alien7.svg`),
                loadImage(`${BaseFolder}/aliens/alien2/alien8.svg`)
            ]
        };
        res.coin = [
            loadImage(`${BaseFolder}/ammo/ammo1.svg`),
            loadImage(`${BaseFolder}/ammo/ammo2.svg`),
            loadImage(`${BaseFolder}/ammo/ammo3.svg`),
            loadImage(`${BaseFolder}/ammo/ammo4.svg`),
            loadImage(`${BaseFolder}/ammo/ammo5.svg`),
            loadImage(`${BaseFolder}/ammo/ammo6.svg`),
            loadImage(`${BaseFolder}/ammo/ammo7.svg`),
            loadImage(`${BaseFolder}/ammo/ammo8.svg`),
            loadImage(`${BaseFolder}/ammo/ammo9.svg`)
        ];
        res.coinShine = [
            loadImage(`${BaseFolder}/ammo/shine/shine1.svg`),
            loadImage(`${BaseFolder}/ammo/shine/shine2.svg`),
            loadImage(`${BaseFolder}/ammo/shine/shine3.svg`),
            loadImage(`${BaseFolder}/ammo/shine/shine4.svg`),
            loadImage(`${BaseFolder}/ammo/shine/shine5.svg`)
        ];
        res.ship = [
            loadImage(`${BaseFolder}/ship/ship1.svg`),
            loadImage(`${BaseFolder}/ship/ship2.svg`),
            loadImage(`${BaseFolder}/ship/ship3.svg`),
            loadImage(`${BaseFolder}/ship/ship4.svg`),
            loadImage(`${BaseFolder}/ship/ship5.svg`),
            loadImage(`${BaseFolder}/ship/ship6.svg`)
        ];
        res.damagedShip = [loadImage(`${BaseFolder}/ship/damaged-ship/ship.svg`)];
        res.explosions = {
            asteroid: [
                loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion1.svg`),
                loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion2.svg`),
                loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion3.svg`),
                loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion4.svg`),
                loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion5.svg`),
                loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion6.svg`),
                loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion7.svg`),
                loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion8.svg`),
                loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion9.svg`),
                loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion10.svg`),
                loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion11.svg`),
                loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion12.svg`),
                loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion13.svg`),
                loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion14.svg`),
                loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion15.svg`),
                loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion16.svg`),
                loadImage(`${BaseFolder}/explosions/asteroid-explosion/explosion17.svg`)
            ],
            ship: [
                loadImage(`${BaseFolder}/explosions/ship-explosion/explosion1.svg`),
                loadImage(`${BaseFolder}/explosions/ship-explosion/explosion2.svg`),
                loadImage(`${BaseFolder}/explosions/ship-explosion/explosion3.svg`),
                loadImage(`${BaseFolder}/explosions/ship-explosion/explosion4.svg`),
                loadImage(`${BaseFolder}/explosions/ship-explosion/explosion5.svg`),
                loadImage(`${BaseFolder}/explosions/ship-explosion/explosion6.svg`),
                loadImage(`${BaseFolder}/explosions/ship-explosion/explosion7.svg`),
                loadImage(`${BaseFolder}/explosions/ship-explosion/explosion8.svg`),
                loadImage(`${BaseFolder}/explosions/ship-explosion/explosion9.svg`),
                loadImage(`${BaseFolder}/explosions/ship-explosion/explosion10.svg`),
                loadImage(`${BaseFolder}/explosions/ship-explosion/explosion11.svg`),
                loadImage(`${BaseFolder}/explosions/ship-explosion/explosion12.svg`),
                loadImage(`${BaseFolder}/explosions/ship-explosion/explosion13.svg`),
                loadImage(`${BaseFolder}/explosions/ship-explosion/explosion14.svg`),
                loadImage(`${BaseFolder}/explosions/ship-explosion/explosion15.svg`),
                loadImage(`${BaseFolder}/explosions/ship-explosion/explosion16.svg`)
            ],
            laser: [
                loadImage(`${BaseFolder}/explosions/laser-explosion/explosion1.svg`),
                loadImage(`${BaseFolder}/explosions/laser-explosion/explosion2.svg`),
                loadImage(`${BaseFolder}/explosions/laser-explosion/explosion3.svg`),
                loadImage(`${BaseFolder}/explosions/laser-explosion/explosion4.svg`),
                loadImage(`${BaseFolder}/explosions/laser-explosion/explosion5.svg`),
                loadImage(`${BaseFolder}/explosions/laser-explosion/explosion6.svg`),
                loadImage(`${BaseFolder}/explosions/laser-explosion/explosion7.svg`),
                loadImage(`${BaseFolder}/explosions/laser-explosion/explosion8.svg`),
                loadImage(`${BaseFolder}/explosions/laser-explosion/explosion9.svg`),
                loadImage(`${BaseFolder}/explosions/laser-explosion/explosion10.svg`),
                loadImage(`${BaseFolder}/explosions/laser-explosion/explosion11.svg`),
                loadImage(`${BaseFolder}/explosions/laser-explosion/explosion12.svg`),
                loadImage(`${BaseFolder}/explosions/laser-explosion/explosion13.svg`),
                loadImage(`${BaseFolder}/explosions/laser-explosion/explosion14.svg`),
                loadImage(`${BaseFolder}/explosions/laser-explosion/explosion15.svg`),
                loadImage(`${BaseFolder}/explosions/laser-explosion/explosion16.svg`)
            ],
            alienLaser: [
                loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion1.svg`),
                loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion2.svg`),
                loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion3.svg`),
                loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion4.svg`),
                loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion5.svg`),
                loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion6.svg`),
                loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion7.svg`),
                loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion8.svg`),
                loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion9.svg`),
                loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion10.svg`),
                loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion11.svg`),
                loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion12.svg`),
                loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion13.svg`),
                loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion14.svg`),
                loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion15.svg`),
                loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion16.svg`),
                loadImage(`${BaseFolder}/explosions/alien-laser-explosion/explosion17.svg`)
            ]
        };
        res.mainMenu = loadImage(`${BaseFolder}/main-menu.svg`);
        res.mainMenuMeetingStarted = loadImage(`${BaseFolder}/main-menu-2.svg`);
        res.helpMenu = loadImage(`${BaseFolder}/instructions.svg`);
        res.gameOverMenu = loadImage(`${BaseFolder}/game-over.svg`);
        res.gameOverMenuMeetingStarted = loadImage(`${BaseFolder}/game-over-2.svg`);
        res.pointer = loadImage(`${BaseFolder}/pointer.svg`);
        res.toolbars = {
            container: loadImage(`${BaseFolder}/toolbars/healthbar-container.svg`),
            healthbar: loadImage(`${BaseFolder}/toolbars/healthbar.svg`),
            ammobar: loadImage(`${BaseFolder}/toolbars/ammobar.svg`),
            distancebar: loadImage(`${BaseFolder}/toolbars/distancebar.svg`)
        };
        res.toolbarsTransparent = {
            container: loadImage(`${BaseFolder}/toolbars/healthbar-container-transparent.svg`),
            healthbar: loadImage(`${BaseFolder}/toolbars/healthbar-transparent.svg`),
            ammobar: loadImage(`${BaseFolder}/toolbars/ammobar-transparent.svg`),
            distancebar: loadImage(`${BaseFolder}/toolbars/distancebar-transparent.svg`)
        };
        res.mitelbar = loadImage(`${BaseFolder}/mitelbar.svg`);
        res.laser = [loadImage(`${BaseFolder}/lasers/laser.svg`)];
        res.alienLaser = [loadImage(`${BaseFolder}/lasers/alien-laser.svg`)];
        res.comet = [
            loadImage(`${BaseFolder}/lasers/comet/comet1.svg`),
            loadImage(`${BaseFolder}/lasers/comet/comet2.svg`),
            loadImage(`${BaseFolder}/lasers/comet/comet3.svg`),
            loadImage(`${BaseFolder}/lasers/comet/comet4.svg`),
            loadImage(`${BaseFolder}/lasers/comet/comet5.svg`),
            loadImage(`${BaseFolder}/lasers/comet/comet6.svg`),
            loadImage(`${BaseFolder}/lasers/comet/comet7.svg`),
            loadImage(`${BaseFolder}/lasers/comet/comet8.svg`),
            loadImage(`${BaseFolder}/lasers/comet/comet9.svg`),
            loadImage(`${BaseFolder}/lasers/comet/comet10.svg`)
        ];
        res.bomb = [
            loadImage(`${BaseFolder}/lasers/bomb/bomb1.svg`),
            loadImage(`${BaseFolder}/lasers/bomb/bomb2.svg`),
            loadImage(`${BaseFolder}/lasers/bomb/bomb3.svg`),
            loadImage(`${BaseFolder}/lasers/bomb/bomb4.svg`),
            loadImage(`${BaseFolder}/lasers/bomb/bomb5.svg`),
            loadImage(`${BaseFolder}/lasers/bomb/bomb6.svg`),
            loadImage(`${BaseFolder}/lasers/bomb/bomb7.svg`),
            loadImage(`${BaseFolder}/lasers/bomb/bomb8.svg`)
        ];
        res.missile = [
            loadImage(`${BaseFolder}/missile/missile1.svg`),
            loadImage(`${BaseFolder}/missile/missile2.svg`),
            loadImage(`${BaseFolder}/missile/missile3.svg`),
            loadImage(`${BaseFolder}/missile/missile4.svg`),
            loadImage(`${BaseFolder}/missile/missile5.svg`),
            loadImage(`${BaseFolder}/missile/missile6.svg`),
            loadImage(`${BaseFolder}/missile/missile7.svg`),
            loadImage(`${BaseFolder}/missile/missile8.svg`),
            loadImage(`${BaseFolder}/missile/missile9.svg`),
            loadImage(`${BaseFolder}/missile/missile10.svg`)
        ];
        res.background = loadImage(`${BaseFolder}/background.svg`);
        res.meetingStarted = [loadImage(`${BaseFolder}/meeting-started-notification.svg`)];
        return res;
    });
}
function loadSong() {
    const song = new Audio(`${SFXBaseFolder}/mitel-space-song.mp3`);
    song.volume = 0.64;
    return song;
}
function loadBoost() {
    const boost = new Audio(`${SFXBaseFolder}/boost.mp3`);
    return boost;
}
function loadLaser() {
    const laser = new Audio(`${SFXBaseFolder}/laser.mp3`);
    return laser;
}
function loadMissile() {
    const missile = new Audio(`${SFXBaseFolder}/missile.mp3`);
    return missile;
}
function loadNoAmmo() {
    const noAmmo = new Audio(`${SFXBaseFolder}/no-ammo.mp3`);
    return noAmmo;
}
function loadDamage() {
    const damage = new Audio(`${SFXBaseFolder}/ship-damage.mp3`);
    return damage;
}
function loadShipExplosion() {
    const shipExplosion = new Audio(`${SFXBaseFolder}/ship-explosion.mp3`);
    return shipExplosion;
}
function loadAsteroidExplosion() {
    const asteroidExplosion = new Audio(`${SFXBaseFolder}/asteroid-explosion.mp3`);
    return asteroidExplosion;
}


/***/ }),

/***/ "./src/app/game/background.ts":
/*!************************************!*\
  !*** ./src/app/game/background.ts ***!
  \************************************/
/*! exports provided: Background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Background {
    constructor(image, scrollingSpeed, width) {
        this.image = image;
        this.scrollingSpeed = scrollingSpeed;
        this.width = width;
        this.nullPoint = 0;
        this.height = Math.round((width * image.height) / image.width);
    }
    draw(context) {
        this.nullPoint += this.scrollingSpeed;
        if (this.nullPoint >= this.height) {
            this.nullPoint = 0;
        }
        context.drawImage(this.image, 0, 
        // tslint:disable-next-line:no-bitwise
        (this.height - this.nullPoint) | 0, this.width, this.nullPoint, 0, 0, (this.width * this.width) / this.image.width, 
        // tslint:disable-next-line:no-bitwise
        this.nullPoint | 0);
        // tslint:disable-next-line:no-bitwise
        context.drawImage(this.image, 0, this.nullPoint | 0, this.width, this.height);
    }
}


/***/ }),

/***/ "./src/app/game/boost.ts":
/*!*******************************!*\
  !*** ./src/app/game/boost.ts ***!
  \*******************************/
/*! exports provided: Boost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Boost", function() { return Boost; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite */ "./src/app/game/sprite.ts");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets */ "./src/app/game/assets.ts");



class Boost extends _sprite__WEBPACK_IMPORTED_MODULE_1__["Sprite"] {
    applyBoost(player) {
        player.ammo += 10;
        this.alive = false;
        this.audio = Object(_assets__WEBPACK_IMPORTED_MODULE_2__["loadBoost"])();
    }
}


/***/ }),

/***/ "./src/app/game/forwardList.ts":
/*!*************************************!*\
  !*** ./src/app/game/forwardList.ts ***!
  \*************************************/
/*! exports provided: ForwardList, Node, Iterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForwardList", function() { return ForwardList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iterator", function() { return Iterator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ForwardList {
    constructor() {
        this.head = undefined;
    }
    push(value) {
        if (!this.head) {
            this.head = new Node(value, undefined);
        }
        else {
            let node = new Node(value, this.head);
            this.head = node;
        }
    }
    iterator() {
        return new Iterator(this);
    }
    toString() {
        let result = '[ ';
        const it = new Iterator(this);
        while (!it.isDone()) {
            result += it.next() + ', ';
        }
        return result + ']';
    }
}
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
class Iterator {
    constructor(list) {
        this.list = list;
        this.previous = undefined;
        this.current = undefined;
        this.current = list.head;
    }
    isDone() {
        return this.current == undefined;
    }
    peek() {
        if (this.isDone()) {
            throw "empty";
        }
        return this.current.value;
    }
    next() {
        if (this.isDone()) {
            throw "empty";
        }
        this.previous = this.current;
        this.current = this.current.next;
        return this.previous.value;
    }
    splice() {
        if (this.isDone()) {
            throw "empty";
        }
        if (this.current === this.list.head) {
            let tmp = this.list.head.value;
            this.list.head = this.current.next;
            this.previous = this.current;
            this.current = this.current.next;
            return tmp;
        }
        else {
            let tmp = this.current.value;
            this.previous.next = this.current.next;
            this.current = this.current.next;
            return tmp;
        }
    }
}


/***/ }),

/***/ "./src/app/game/game.component.scss":
/*!******************************************!*\
  !*** ./src/app/game/game.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700\");\n.canvas {\n  background-color: rgba(0, 0, 0, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNsaW5ocGhhbS9Eb2N1bWVudHMvcHJvamVjdHMvc3BhY2UtZ2FtZS9zcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHFGQUFBO0FBQ1I7RUFDRSxrQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNTAwLDYwMCw3MDAnKTtcbi5jYW52YXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDUwMCw2MDAsNzAwXCIpO1xuLmNhbnZhcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: Width, Height, GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Width", function() { return Width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Height", function() { return Height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets */ "./src/app/game/assets.ts");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./background */ "./src/app/game/background.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player */ "./src/app/game/player.ts");
/* harmony import */ var _boost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boost */ "./src/app/game/boost.ts");
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unit */ "./src/app/game/unit.ts");
/* harmony import */ var _alien__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alien */ "./src/app/game/alien.ts");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu */ "./src/app/game/menu.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game.service */ "./src/app/game/game.service.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message */ "./src/app/game/message.ts");
/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projectile */ "./src/app/game/projectile.ts");
/* harmony import */ var _forwardList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forwardList */ "./src/app/game/forwardList.ts");














const Width = 640;
const Height = 768;
const MissileCost = 5;
const TimeToIncrementLevel = 20 * 50;
let GameComponent = class GameComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.width = Width;
        this.height = Height;
        this.score = 0;
        this.highScore = 0;
        this.started = false;
        this.level = 1;
        this.elements = new _forwardList__WEBPACK_IMPORTED_MODULE_13__["ForwardList"]();
        this.meetingStartedMessage = false;
        this.msgQueue = [];
        this.meetingStarted = false;
        this.keys = {};
        this.sound = false;
        this.dev = true;
    }
    ngOnInit() {
        this.gameService.gameClosed.subscribe(() => {
            if (this.mainLoopSubscription) {
                this.mainLoopSubscription.unsubscribe();
            }
        });
    }
    ngAfterViewInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.context = this.canvas.nativeElement.getContext('2d');
            yield this.loadRes();
            this.background = new _background__WEBPACK_IMPORTED_MODULE_4__["Background"](this.images.background, 0.5, Width);
            this.menu = new _menu__WEBPACK_IMPORTED_MODULE_9__["Menu"](this.images, this);
            window.addEventListener('keydown', e => this.keyDown(e));
            window.addEventListener('keyup', e => this.keyUp(e));
            this.mainLoopSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 20).subscribe(n => this.mainLoop(n));
            this.gameService.meetingStarted.subscribe(args => this.onMeetingStarted(args));
            this.gameService.levelChanged.subscribe(n => (this.level = n));
            this.gameService.notified.subscribe(args => {
                this.msgQueue.push(new _message__WEBPACK_IMPORTED_MODULE_11__["Toast"](150 - args.msg.length, -50, this.width, this.height, args.msg, args.frames, 30));
            });
        });
    }
    loadRes() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.images = yield Object(_assets__WEBPACK_IMPORTED_MODULE_3__["loadImages"])();
                this.song = Object(_assets__WEBPACK_IMPORTED_MODULE_3__["loadSong"])();
                if (this.sound) {
                    this.song.play().then(() => console.log('Playing music.'));
                }
                this.song.addEventListener('timeupdate', () => {
                    const buffer = 0.36;
                    console.log('Buffer value (loop):', buffer);
                    if (this.song.currentTime > this.song.duration - buffer) {
                        this.song.currentTime = 0;
                        this.song.play();
                    }
                });
            }
            catch (err) {
                console.log('error loading necessary resources');
            }
        });
    }
    onMeetingStarted(args) {
        if (!this.meetingStarted) {
            this.meetingStarted = true;
            this.meetingStartedMessage = new _message__WEBPACK_IMPORTED_MODULE_11__["Message"](this.width, this.height - 80, 160, 60, this.images.meetingStarted, 100, this.width - 180);
            if (args.urgent) {
                const width = 20;
                const height = 25;
                const slots = Width / width;
                const img = args.customImage ? [args.customImage] : this.images.bomb;
                for (let i = 0; i < slots; i++) {
                    const p = new _projectile__WEBPACK_IMPORTED_MODULE_12__["Projectile"](i * width, -height, width, height, 0, 5, 0, 0, img, this.images.explosions.alienLaser, 1000, true, 150);
                    p.imgOffset = -Math.PI / 2;
                    this.elements.push(p);
                }
            }
        }
    }
    startGame(dev) {
        this.started = true;
        this.menu.state = 'MAIN';
        this.score = 0;
        this.gameService.setLevel(1);
        this.level = 1;
        this.playerShip = new _player__WEBPACK_IMPORTED_MODULE_5__["Player"](Width / 2 - 40 / 2, Height - 70, 40, 70, this.images.ship, this.images.explosions.ship, this.images.damagedShip, this.images.laser, this.images.explosions.laser, this.images.missile, this.images.explosions.asteroid, Width, Height);
        this.dev = dev;
        this.elements = new _forwardList__WEBPACK_IMPORTED_MODULE_13__["ForwardList"]();
    }
    endGame() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
        }
        this.started = false;
        this.menu.state = 'GAME_OVER';
    }
    mainLoop(frame) {
        this.context.save();
        this.context.clearRect(0, 0, this.width, this.height);
        if (frame % TimeToIncrementLevel === 0) {
            this.gameService.setLevel(this.level + 1);
        }
        this.background.draw(this.context);
        if (this.started) {
            this.updateObstacles(frame);
            this.updateMissiles(frame);
            this.updateShip(frame);
            this.updateStats();
            this.spawnObstacles(frame);
        }
        else {
            this.menu.draw(this.context);
        }
        this.updateMessages(frame);
        this.context.restore();
    }
    updateMessages(frame) {
        if (this.meetingStartedMessage) {
            if (this.meetingStartedMessage.isAlive()) {
                this.meetingStartedMessage.update(frame);
                this.meetingStartedMessage.draw(this.context);
            }
            else {
                this.meetingStartedMessage = false;
            }
        }
        if (this.msgQueue.length) {
            const toast = this.msgQueue[0];
            if (toast.isAlive()) {
                toast.update(frame);
                toast.draw(this.context);
            }
            else {
                this.msgQueue.splice(0, 1);
            }
        }
    }
    updateShip(frame) {
        this.playerShip.update(frame);
        if (this.sound && this.playerShip.audio) {
            this.playerShip.audio.play();
            this.playerShip.audio = undefined;
        }
        if (this.playerShip.alive) {
            this.playerShip.draw(this.context);
        }
        else {
            this.endGame();
        }
    }
    updateObstacles(frame) {
        let elemIterator = this.elements.iterator();
        while (!elemIterator.isDone()) {
            const s = elemIterator.peek();
            s.update(frame);
            if (!s.dying && this.playerShip.intersects(s)) {
                if (s instanceof _boost__WEBPACK_IMPORTED_MODULE_6__["Boost"]) {
                    s.applyBoost(this.playerShip);
                }
                else if (s instanceof _projectile__WEBPACK_IMPORTED_MODULE_12__["Projectile"]) {
                    this.playerShip.damage(s.damage, frame);
                    s.explode(frame);
                }
                else {
                    this.playerShip.damage(s.crashDamage ? s.crashDamage : 25, frame);
                    s.damage(this.playerShip.crashDamage, frame);
                }
            }
            if (s.activeProjectiles) {
                let j = 0;
                while (j < s.activeProjectiles.length) {
                    const t = s.activeProjectiles[j];
                    t.update(frame);
                    if (!t.dying && t.intersects(this.playerShip)) {
                        t.explode(frame);
                        this.playerShip.damage(t.damage, frame);
                    }
                    if (t.isAlive()) {
                        t.draw(this.context);
                        j++;
                    }
                    else {
                        s.activeProjectiles.splice(j, 1);
                    }
                }
            }
            if (this.sound && s.audio) {
                s.audio.play();
                s.audio = undefined;
            }
            if (s.isAlive() && s.y < Height) {
                s.draw(this.context);
                elemIterator.next();
            }
            else {
                // so projectiles continue to stay in game even if their owner is dead
                if (!s.activeProjectiles || !s.activeProjectiles.length) {
                    elemIterator.splice();
                }
                else {
                    elemIterator.next();
                }
            }
        }
    }
    updateMissiles(frame) {
        let i = 0;
        const targets = this.elements;
        while (i < this.playerShip.activeProjectiles.length) {
            const p = this.playerShip.activeProjectiles[i];
            p.update(frame);
            if (!p.dying) {
                if (p.splash) {
                    // we must explode first because the blast radius may be bigger than the original missile
                    let targetsIterator = targets.iterator();
                    while (!targetsIterator.isDone()) {
                        const s = targetsIterator.next();
                        if (!(s instanceof _boost__WEBPACK_IMPORTED_MODULE_6__["Boost"]) &&
                            !(s instanceof _projectile__WEBPACK_IMPORTED_MODULE_12__["Projectile"]) &&
                            (!s.dying || s.dying === frame) &&
                            s.intersects(p, 0)) {
                            p.explode(frame);
                            break;
                        }
                    }
                    targetsIterator = targets.iterator();
                    while (!targetsIterator.isDone()) {
                        const s = targetsIterator.next();
                        if (!(s instanceof _boost__WEBPACK_IMPORTED_MODULE_6__["Boost"]) &&
                            !(s instanceof _projectile__WEBPACK_IMPORTED_MODULE_12__["Projectile"]) &&
                            (!s.dying || s.dying === frame) &&
                            s.intersects(p, 0)) {
                            s.damage(p.damage, frame);
                        }
                    }
                }
                else {
                    let targetsIterator = targets.iterator();
                    while (!targetsIterator.isDone()) {
                        const s = targetsIterator.next();
                        if (!(s instanceof _boost__WEBPACK_IMPORTED_MODULE_6__["Boost"]) &&
                            !(s instanceof _projectile__WEBPACK_IMPORTED_MODULE_12__["Projectile"]) &&
                            (!s.dying || s.dying === frame) &&
                            s.intersects(p, 0)) {
                            p.explode(frame);
                            s.damage(p.damage, frame);
                            break;
                        }
                    }
                }
            }
            if (p.isAlive()) {
                p.draw(this.context);
                i++;
            }
            else {
                this.playerShip.activeProjectiles.splice(i, 1);
            }
        }
    }
    spawnObstacles(frame) {
        const fObs = 40;
        const fBoost = 50;
        const fAlien = 200;
        const width = 40;
        const height = 45;
        const slots = Width / width;
        // random number between 0 and slots
        // tslint:disable-next-line:no-bitwise
        const location = ((Math.random() * slots) | 0) * width;
        if (frame % fBoost === 0) {
            const boost = new _boost__WEBPACK_IMPORTED_MODULE_6__["Boost"](location, -200, width, height, this.images.coin);
            boost.vy = 4 + 2 * Math.random();
            this.elements.push(boost);
        }
        if (frame % fObs < 1) {
            // tslint:disable-next-line:no-bitwise
            const flavor = (1 + Math.random() * 3) | 0;
            const asteroid = new _unit__WEBPACK_IMPORTED_MODULE_7__["Asteroid"](location, -200, width, height, this.images.asteroids['asteroid' + flavor], this.images.explosions.asteroid, this.images.asteroids.damaged['asteroid' + flavor]);
            asteroid.vy = 3 + (this.level * Math.random()) / 2;
            this.elements.push(asteroid);
        }
        if (frame % fAlien === 0 && this.level >= 1) {
            const alien = new _alien__WEBPACK_IMPORTED_MODULE_8__["GunnerAlien"](Math.random() * (Width - 54), -200, 54, 100, 
            // tslint:disable-next-line:no-bitwise
            this.images.aliens['alien' + 1 /*((1 + Math.random() * 1) | 0)*/], this.images.explosions.asteroid, 10 + this.level, 50, false, this.images.alienLaser, this.images.explosions.alienLaser, this.playerShip, 150, this.level, this.height / 2 - (Math.random() * this.height) / 2);
            alien.vy = 1;
            this.elements.push(alien);
        }
    }
    updateStats() {
        if (this.started) {
            this.score++;
        }
        this.context.font = '30px Montserrat';
        const toolbar = this.images.toolbarsTransparent;
        const toolbar2 = this.images.toolbars;
        const maxhpW = 164;
        this.context.drawImage(toolbar.container, 40, 40);
        this.context.drawImage(toolbar2.healthbar, 66 + 40, 52, maxhpW * (this.playerShip.hp / this.playerShip.maxHp), toolbar2.healthbar.height);
        this.context.drawImage(toolbar2.ammobar, 66 + 40, 96, maxhpW * Math.min(1, this.playerShip.ammo / 20), toolbar2.ammobar.height);
        this.context.drawImage(toolbar.distancebar, 360, 40);
        this.context.fillStyle = '#000000';
        if (this.dev) {
            this.context.font = '12px Montserrat';
            this.context.fillText(`${this.score}\tAmmo: ${this.playerShip.ammo}\tLife:${this.playerShip.hp}`, 420, 75);
        }
        else {
            this.context.fillText(`${this.score}`, 425, 82);
            this.context.fillText('LY', 540, 82);
        }
        const numMissiles = Math.min(3, Math.floor(this.playerShip.ammo / MissileCost));
        const width = 10;
        const height = 32;
        // this.context.translate(0, 100)
        for (let i = 0; i < numMissiles; i++) {
            this.context.save();
            // this.context.globalAlpha = 0.8;
            this.context.translate(110 + i * 20, 140);
            this.context.rotate(Math.PI / 6);
            this.context.drawImage(this.images.missile[0], -width / 2, -height / 2, width, height);
            this.context.restore();
        }
    }
    keyDown(e) {
        console.log(e);
        this.keys[e.key] = true;
        if ((e.key === 'm' || e.key === 'M') && this.menu.state !== 'GAME_OVER') {
            this.toggleSound();
        }
        if (this.started) {
            this.playerShip.keyDown(e.key);
        }
        else {
            this.menu.keyDown(e.key);
        }
    }
    keyUp(e) {
        this.keys[e.key] = false;
        if (this.started) {
            this.playerShip.keyUp(e.key, this.keys);
        }
    }
    ngOnDestroy() {
        this.gameService.forceStopGame();
    }
    toggleSound() {
        this.sound = !this.sound;
        if (this.sound) {
            this.song.play();
        }
        else {
            this.song.pause();
        }
    }
    foo(urgent) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const score = yield this.gameService.signalMeetingStarted(urgent);
                console.log('finished: ', score);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
};
GameComponent.ctorParameters = () => [
    { type: _game_service__WEBPACK_IMPORTED_MODULE_10__["GameService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: false })
], GameComponent.prototype, "canvas", void 0);
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game.component.scss */ "./src/app/game/game.component.scss")).default]
    })
], GameComponent);



/***/ }),

/***/ "./src/app/game/game.service.ts":
/*!**************************************!*\
  !*** ./src/app/game/game.service.ts ***!
  \**************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let GameService = class GameService {
    constructor() {
        this.meetingStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.scoreSubmitted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.levelChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.gameClosed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.notified = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * prevent user from starting new games so they can get on with work
     * @param urgent also lose the game for user now
     * @param customImage custom image to use for the bomb
     * @return Promise that is fulfilled once user has submitted their score and rejected if user closes game
     *    without submitting
     */
    signalMeetingStarted(urgent = false, customImage) {
        this.meetingStarted.next({ urgent, customImage });
        return new Promise((resolve, reject) => {
            this.scoreSubmitted.subscribe(score => resolve(score));
            this.gameClosed.subscribe(() => reject('GAME_CLOSED'));
        });
    }
    /**
     * end the game now
     */
    forceStopGame() {
        this.gameClosed.next();
    }
    /**
     * sets difficulty to specified level
     * @param level
     */
    setLevel(level) {
        if (level <= 0) {
            level = 1;
        }
        if (level > 10) {
            level = 10;
        }
        this.levelChanged.next(level);
    }
    /**
     * display messages in game
     * @param msg message
     * @param frames frames to display
     */
    notify(msg, frames = 150) {
        this.notified.next({ msg, frames });
    }
};
GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GameService);



/***/ }),

/***/ "./src/app/game/menu.ts":
/*!******************************!*\
  !*** ./src/app/game/menu.ts ***!
  \******************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/app/game/player.ts");


class Menu {
    constructor(images, game) {
        this.images = images;
        this.game = game;
        this.name = '';
        this.validCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_+?.';
        this.maxNameLength = 10;
        this.cursorFlash = 0;
        this.state = 'MAIN';
        this.selected = 'START';
    }
    draw(c) {
        let img;
        switch (this.state) {
            case 'MAIN': {
                img = this.game.meetingStarted ? this.images.mainMenuMeetingStarted : this.images.mainMenu;
                c.drawImage(img, 0, 0, this.game.width, this.game.height);
                if (!this.game.meetingStarted) {
                    switch (this.selected) {
                        case 'START': {
                            c.drawImage(this.images.pointer, 217, 399 - this.images.pointer.height);
                            break;
                        }
                        case 'HELP': {
                            c.drawImage(this.images.pointer, 217, 462 - this.images.pointer.height);
                            break;
                        }
                        default: {
                            throw Error('Implement this');
                        }
                    }
                }
                break;
            }
            case 'HELP': {
                img = this.images.helpMenu;
                c.drawImage(img, 0, 0, this.game.width, this.game.height);
                if (this.game.meetingStarted) {
                    this.state = 'MAIN';
                }
                break;
            }
            case 'GAME_OVER': {
                img = this.game.meetingStarted ? this.images.gameOverMenuMeetingStarted : this.images.gameOverMenu;
                c.drawImage(img, 0, 0, this.game.width, this.game.height);
                c.font = '32px Montserrat';
                c.fillStyle = '#FFFFFF';
                c.fillText(this.game.score + '', 350, 240);
                c.fillText(this.game.highScore + '', 350, 290);
                c.fillStyle = '#000000';
                if (this.cursorFlash < 25 && this.name.length < this.maxNameLength) {
                    c.fillText(this.name + '_', 150, 490);
                }
                else {
                    c.fillText(this.name, 150, 490);
                }
                this.cursorFlash++;
                if (this.cursorFlash === 50) {
                    this.cursorFlash = 0;
                }
                break;
            }
            default: {
                throw Error('Implement this');
            }
        }
    }
    keyDown(key) {
        switch (this.state) {
            case 'HELP':
            case 'MAIN': {
                if (this.game.meetingStarted) {
                    break;
                }
                switch (key) {
                    case _player__WEBPACK_IMPORTED_MODULE_1__["Controls"].up:
                    case _player__WEBPACK_IMPORTED_MODULE_1__["Controls"].left: {
                        if (this.selected !== 'START') {
                            this.selected = 'START';
                        }
                        break;
                    }
                    case _player__WEBPACK_IMPORTED_MODULE_1__["Controls"].down:
                    case _player__WEBPACK_IMPORTED_MODULE_1__["Controls"].right: {
                        if (this.selected !== 'HELP') {
                            this.selected = 'HELP';
                        }
                        break;
                    }
                    case _player__WEBPACK_IMPORTED_MODULE_1__["Controls"].fire:
                    case 'Enter': {
                        switch (this.state) {
                            case 'MAIN': {
                                if (this.selected === 'START') {
                                    this.game.startGame(this.game.keys['Shift']);
                                }
                                else {
                                    this.state = 'HELP';
                                }
                                break;
                            }
                            case 'HELP': {
                                this.state = 'MAIN';
                            }
                        }
                        break;
                    }
                }
                break;
            }
            case 'GAME_OVER': {
                switch (key) {
                    case _player__WEBPACK_IMPORTED_MODULE_1__["Controls"].fire: {
                        if (this.game.meetingStarted) {
                            this.state = 'MAIN';
                        }
                        else {
                            this.game.startGame(this.game.keys['Shift']);
                        }
                        break;
                    }
                    case 'Enter': {
                        // non empty
                        if (this.name) {
                            this.submitScore(this.name, this.game.highScore);
                            this.state = 'MAIN';
                        }
                        break;
                    }
                    case 'Delete':
                    case 'Backspace': {
                        if (this.name.length) {
                            this.name = this.name.slice(0, -1);
                        }
                        break;
                    }
                    default: {
                        if (this.name.length < this.maxNameLength && this.validCharacters.indexOf(key) !== -1) {
                            // this.cursor = false;
                            // setTimeout(() => this.cursor = true;)
                            this.name += key;
                        }
                        break;
                    }
                }
            }
        }
    }
    submitScore(name, score) {
        // todo make api call
        console.log(`Name: ${name} Score: ${score}`);
        this.game.gameService.scoreSubmitted.next({ name, score });
    }
}


/***/ }),

/***/ "./src/app/game/message.ts":
/*!*********************************!*\
  !*** ./src/app/game/message.ts ***!
  \*********************************/
/*! exports provided: Message, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite */ "./src/app/game/sprite.ts");


const Width = 640;
class Message extends _sprite__WEBPACK_IMPORTED_MODULE_1__["Sprite"] {
    constructor(x, y, w, h, images, frames, endX) {
        super(x, y, w, h, images);
        this.frames = frames;
        this.endX = endX;
        this.currentFrame = 0;
        this.speed = 5;
        this.vx = -this.speed;
        this.maxH = h;
        this.maxW = w;
        this.w = 0;
        this.h = 0;
        this.growth = this.speed / (this.x - endX);
    }
    update(frame) {
        if (this.x <= this.endX) {
            this.vx = 0;
            if (this.currentFrame === this.frames) {
                this.vx = this.speed;
            }
            else {
                this.currentFrame++;
            }
        }
        else if (this.vx < 0) {
            this.w += this.growth * this.maxW;
            this.h += this.growth * this.maxH;
        }
        else if (this.x > Width) {
            this.alive = false;
        }
        super.update(frame);
    }
}
class Toast extends _sprite__WEBPACK_IMPORTED_MODULE_1__["Sprite"] {
    constructor(x, y, w, h, msg, frames, endY) {
        super(x, y, w, h, false);
        this.msg = msg;
        this.frames = frames;
        this.endY = endY;
        this.currentFrame = 0;
        this.speed = 3;
        this.vy = this.speed;
    }
    update(frame) {
        if (this.y >= this.endY) {
            this.vy = 0;
            this.currentFrame++;
            if (this.currentFrame === this.frames) {
                this.alive = false;
            }
        }
        super.update(frame);
    }
    draw(c) {
        c.fillStyle = '#FFFFFF';
        c.font = '20px Montserrat';
        c.fillText(this.msg, this.x, this.y);
    }
}


/***/ }),

/***/ "./src/app/game/player.ts":
/*!********************************!*\
  !*** ./src/app/game/player.ts ***!
  \********************************/
/*! exports provided: ShipSpeed, Controls, Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipSpeed", function() { return ShipSpeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controls", function() { return Controls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit */ "./src/app/game/unit.ts");
/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectile */ "./src/app/game/projectile.ts");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets */ "./src/app/game/assets.ts");




const ShipSpeed = 5;
const Controls = {
    left: 'ArrowLeft',
    right: 'ArrowRight',
    up: 'ArrowUp',
    down: 'ArrowDown',
    fire: ' ',
    missile: 'Control'
};
class Player extends _unit__WEBPACK_IMPORTED_MODULE_1__["Fighter"] {
    constructor(x, y, w, h, images, explosionsImages, damagedImages, laserImages, laserExplosions, missileImages, missileExplosions, borderX, borderY) {
        super(x, y, w, h, images, explosionsImages, 100, 100, damagedImages, laserImages, laserExplosions);
        this.borderX = borderX;
        this.borderY = borderY;
        this.firingLasers = false;
        this.firingMissle = false;
        this.showHp = false;
        this.ammo = 20;
        this.leftGun.shotInterval = 5;
        this.rightGun.shotInterval = 5;
        this.missleLauncher = new _projectile__WEBPACK_IMPORTED_MODULE_2__["ProjectileSource"](this, 0, 0, 10, 32, 5, 5, 5, 8, 0.25, 200, true, missileImages, missileExplosions, 75);
    }
    update(frame) {
        // don't let the ship get off screen
        if (this.x <= 0 && this.vx < 0) {
            this.x = 0;
            this.vx = 0;
        }
        else if (this.x + this.w >= this.borderX && this.vx > 0) {
            this.x = this.borderX - this.w;
            this.vx = 0;
        }
        if (this.y <= 0 && this.vy < 0) {
            this.y = 0;
            this.vy = 0;
        }
        else if (this.y + this.h >= this.borderY && this.vy > 0) {
            this.y = this.borderY - this.h;
            this.vy = 0;
        }
        this.missleLauncher.update(frame);
        if (this.firingLasers) {
            this.fireLasers();
        }
        if (this.firingMissle) {
            this.missile();
        }
        // uncomment this to allow ship to change facing as it moves
        // this.faceMotion();
        super.update(frame);
    }
    keyDown(key) {
        switch (key) {
            case Controls.fire: {
                this.firingLasers = true;
                this.fireLasers();
                break;
            }
            case Controls.missile: {
                this.firingMissle = true;
                this.missile();
                break;
            }
            case Controls.up: {
                this.vy = -ShipSpeed;
                break;
            }
            case Controls.left: {
                this.vx = -ShipSpeed;
                break;
            }
            case Controls.down: {
                this.vy = ShipSpeed;
                break;
            }
            case Controls.right: {
                this.vx = ShipSpeed;
                break;
            }
        }
    }
    keyUp(key, keys) {
        switch (key) {
            case Controls.fire: {
                this.firingLasers = false;
                break;
            }
            case Controls.missile: {
                this.firingMissle = false;
                break;
            }
            case Controls.up: {
                this.vy = 0;
                if (keys[Controls.down]) {
                    this.vy = ShipSpeed;
                }
                break;
            }
            case Controls.left: {
                this.vx = 0;
                if (keys[Controls.right]) {
                    this.vx = ShipSpeed;
                }
                break;
            }
            case Controls.down: {
                this.vy = 0;
                if (keys[Controls.up]) {
                    this.vy = -ShipSpeed;
                }
                break;
            }
            case Controls.right: {
                this.vx = 0;
                if (keys[Controls.left]) {
                    this.vx = -ShipSpeed;
                }
                break;
            }
        }
    }
    explode(frame) {
        this.audio = Object(_assets__WEBPACK_IMPORTED_MODULE_3__["loadShipExplosion"])();
        super.explode(frame);
    }
    missile() {
        if (this.ammo >= this.missleLauncher.ammoCost && this.missleLauncher.spawnProjectile()) {
            this.ammo -= this.missleLauncher.ammoCost;
            this.audio = Object(_assets__WEBPACK_IMPORTED_MODULE_3__["loadMissile"])();
        }
    }
}


/***/ }),

/***/ "./src/app/game/point.ts":
/*!*******************************!*\
  !*** ./src/app/game/point.ts ***!
  \*******************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    rotateAbout(p, rad) {
        const oldX = this.x;
        this.x = Math.cos(rad) * (oldX - p.x) - Math.sin(rad) * (this.y - p.y) + p.x;
        this.y = Math.sin(rad) * (oldX - p.x) + Math.cos(rad) * (this.y - p.y) + p.y;
        return this;
    }
    translate(p) {
        this.x += p.x;
        this.y += p.y;
        return this;
    }
}


/***/ }),

/***/ "./src/app/game/projectile.ts":
/*!************************************!*\
  !*** ./src/app/game/projectile.ts ***!
  \************************************/
/*! exports provided: Projectile, ProjectileSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projectile", function() { return Projectile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectileSource", function() { return ProjectileSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite */ "./src/app/game/sprite.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point */ "./src/app/game/point.ts");



class Projectile extends _sprite__WEBPACK_IMPORTED_MODULE_1__["ExplodingSprite"] {
    constructor(x, y, w, h, vx, vy, ax, ay, images, explosionsImages, damage, splash, blastRadius) {
        super(x, y, w, h, images, explosionsImages);
        this.damage = damage;
        this.splash = splash;
        this.blastRadius = blastRadius;
        this.vx = vx;
        this.vy = vy;
        this.ax = ax;
        this.ay = ay;
    }
    isAlive() {
        // flag as dead if it reaches top of screen
        return super.isAlive() && this.y >= -this.h;
    }
    explode(frame) {
        super.explode(frame, this.blastRadius, this.blastRadius);
    }
    update(frame) {
        this.faceMotion();
        super.update(frame);
    }
}
class ProjectileSource extends _point__WEBPACK_IMPORTED_MODULE_2__["Point"] {
    // x, y represents relative location from center of owner where down is positive and right is positive
    // reason center is used rather than top corner (as with canvas) is so that rotations can be done easier
    // and is easier to picture in head
    constructor(owner, x, y, w, h, damage, ammoCost, initialProjectileSpeed, maxProjectileSpeed, projectileAcceleration, blastRadius, splash, images, explosionImages, shotInterval) {
        super(x, y);
        this.owner = owner;
        this.w = w;
        this.h = h;
        this.damage = damage;
        this.ammoCost = ammoCost;
        this.initialProjectileSpeed = initialProjectileSpeed;
        this.maxProjectileSpeed = maxProjectileSpeed;
        this.projectileAcceleration = projectileAcceleration;
        this.blastRadius = blastRadius;
        this.splash = splash;
        this.images = images;
        this.explosionImages = explosionImages;
        this.shotInterval = shotInterval;
        this.shotCoolDown = 0;
    }
    update(frame) {
        if (this.shotCoolDown) {
            this.shotCoolDown--;
        }
    }
    spawnProjectile() {
        if (!this.shotCoolDown) {
            this.shotCoolDown = this.shotInterval;
            const center = this.owner.getCenter();
            const self = this.owner
                .getCenter()
                .translate(this)
                .rotateAbout(center, this.owner.rad);
            const cosTheta = Math.cos(this.owner.rad - this.owner.imgOffset);
            const sinTheta = Math.sin(this.owner.rad - this.owner.imgOffset);
            const projectile = new Projectile(self.x - this.w / 2, self.y - this.h / 2, this.w, this.h, this.initialProjectileSpeed * cosTheta, this.initialProjectileSpeed * sinTheta, this.projectileAcceleration * cosTheta, this.projectileAcceleration * sinTheta, this.images, this.explosionImages, this.damage, this.splash, this.blastRadius);
            projectile.maxSpeed = this.maxProjectileSpeed;
            this.owner.activeProjectiles.push(projectile);
            return true;
        }
        else {
            return false;
        }
    }
}


/***/ }),

/***/ "./src/app/game/sprite.ts":
/*!********************************!*\
  !*** ./src/app/game/sprite.ts ***!
  \********************************/
/*! exports provided: FramesBeforeUpdateImage, FramesBeforeUpdateImageExplosion, Sprite, ExplodingSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FramesBeforeUpdateImage", function() { return FramesBeforeUpdateImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FramesBeforeUpdateImageExplosion", function() { return FramesBeforeUpdateImageExplosion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplodingSprite", function() { return ExplodingSprite; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./src/app/game/point.ts");


const FramesBeforeUpdateImage = 5;
const FramesBeforeUpdateImageExplosion = 2;
class Sprite extends _point__WEBPACK_IMPORTED_MODULE_1__["Point"] {
    constructor(x, y, w, h, images) {
        super(x, y);
        this.w = w;
        this.h = h;
        this.images = images;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.maxSpeed = 10;
        this.imgCounter = 0;
        this.currentImage = 0;
        this.cycleFrameCount = FramesBeforeUpdateImage;
        this.alive = true;
        this.vrad = 0;
        this.rad = 0;
        this.imgOffset = Math.PI / 2;
    }
    draw(c) {
        if (this.rad) {
            c.save();
            const center = this.getCenter();
            c.translate(center.x, center.y);
            c.rotate(this.rad);
            c.drawImage(this.images[this.currentImage], this.w / -2, this.h / -2, this.w, this.h);
            c.restore();
        }
        else {
            c.drawImage(this.images[this.currentImage], this.x, this.y, this.w, this.h);
        }
    }
    update(frame) {
        this.x += this.vx;
        this.y += this.vy;
        this.rad += this.vrad;
        this.vx += this.ax;
        this.vy += this.ay;
        if (this.vx > this.maxSpeed) {
            this.vx = this.maxSpeed;
        }
        else if (this.vx < -this.maxSpeed) {
            this.vx = -this.maxSpeed;
        }
        if (this.vy > this.maxSpeed) {
            this.vy = this.maxSpeed;
        }
        else if (this.vy < -this.maxSpeed) {
            this.vy = -this.maxSpeed;
        }
        this.imgCounter++;
        if (this.imgCounter === this.cycleFrameCount) {
            this.imgCounter = 0;
            this.currentImage++;
            if (this.currentImage === this.images.length) {
                this.currentImage = 0;
            }
        }
    }
    isAlive() {
        return this.alive;
    }
    intersects(other, flex = 5) {
        return (!(this.x > other.x + other.w - flex || other.x > this.x + this.w - flex) &&
            !(this.y > other.y + other.h - flex || other.y > this.y + this.h - flex));
    }
    getCenter() {
        return new _point__WEBPACK_IMPORTED_MODULE_1__["Point"](this.x + this.w / 2, this.y + this.h / 2);
    }
    faceMotion() {
        if (this.vx || this.vy) {
            this.rad = -Math.atan2(-this.vy, this.vx) + this.imgOffset;
        }
        else {
            this.rad = 0;
        }
    }
    fullStop() {
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
    }
}
class ExplodingSprite extends Sprite {
    constructor(x, y, w, h, images, explosionsImages) {
        super(x, y, w, h, images);
        this.explosionsImages = explosionsImages;
        // should be frame # of death as to allow overkill
        this.dying = 0;
    }
    explode(frame, w = this.w, h = this.h) {
        if (!this.dying) {
            this.dying = frame;
            if (this.explosionsImages) {
                // adjust explosion center if its larger than original image
                if (this.w !== w) {
                    this.x -= (w - this.w) / 2;
                }
                if (this.h !== h) {
                    this.y -= (h - this.h) / 2;
                }
                this.fullStop();
                this.w = w;
                this.h = h;
                this.imgCounter = 0;
                this.currentImage = 0;
                this.images = this.explosionsImages;
                this.cycleFrameCount = FramesBeforeUpdateImageExplosion;
            }
            else {
                this.alive = false;
            }
        }
    }
    update(frame) {
        if (this.dying && this.currentImage === this.explosionsImages.length - 1) {
            this.alive = false;
        }
        super.update(frame);
    }
}


/***/ }),

/***/ "./src/app/game/unit.ts":
/*!******************************!*\
  !*** ./src/app/game/unit.ts ***!
  \******************************/
/*! exports provided: Unit, Gunner, Asteroid, Fighter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unit", function() { return Unit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gunner", function() { return Gunner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asteroid", function() { return Asteroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fighter", function() { return Fighter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite */ "./src/app/game/sprite.ts");
/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectile */ "./src/app/game/projectile.ts");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets */ "./src/app/game/assets.ts");




class Unit extends _sprite__WEBPACK_IMPORTED_MODULE_1__["ExplodingSprite"] {
    constructor(x, y, w, h, images, explosionsImages, hp, crashDamage, damagedImages) {
        super(x, y, w, h, images, explosionsImages);
        this.hp = hp;
        this.crashDamage = crashDamage;
        this.damagedImages = damagedImages;
        this.drawHp = false;
        this.maxHp = hp;
        this.showHp = true;
    }
    draw(c) {
        super.draw(c);
        if (this.drawHp && !this.dying) {
            c.fillStyle = '#FF0000';
            c.globalAlpha = 0.5;
            c.fillRect(this.x, this.y - 5, this.w * (this.hp / this.maxHp), 5);
            c.globalAlpha = 1;
        }
    }
    damage(dmg, frame = 1) {
        this.hp -= dmg;
        if (this.hp <= 0) {
            this.hp = 0;
            this.explode(frame);
        }
        if (this.showHp) {
            this.drawHp = true;
        }
        if (!this.dying && this.damagedImages && this.damagedImages !== this.images) {
            const originalImage = this.images;
            const originalIndex = this.currentImage;
            this.images = this.damagedImages;
            this.currentImage = 0;
            setTimeout(() => {
                if (!this.dying) {
                    this.images = originalImage;
                    this.currentImage = originalIndex;
                    this.drawHp = false;
                }
            }, 200);
        }
        else if (this.showHp) {
            setTimeout(() => {
                this.drawHp = false;
            }, 200);
        }
    }
}
class Gunner extends Unit {
    constructor(x, y, w, h, images, explosionsImages, hp, crashDamage, damagedImages) {
        super(x, y, w, h, images, explosionsImages, hp, crashDamage, damagedImages);
        this.ammo = 0;
        this.activeProjectiles = [];
    }
}
class Asteroid extends Unit {
    constructor(x, y, w, h, images, explosionsImages, damagedImages) {
        super(x, y, w, h, images, explosionsImages, 5, 25, damagedImages);
    }
    explode(frame, w = this.w, h = this.h) {
        this.audio = Object(_assets__WEBPACK_IMPORTED_MODULE_3__["loadAsteroidExplosion"])();
        super.explode(frame, w, h);
    }
}
class Fighter extends Gunner {
    constructor(x, y, w, h, images, explosionsImages, hp, crashDamage, damagedImages, laserImages, laserExplosion) {
        super(x, y, w, h, images, explosionsImages, hp, crashDamage, damagedImages);
        this.leftGun = new _projectile__WEBPACK_IMPORTED_MODULE_2__["ProjectileSource"](this, -this.w / 3, 0, 5, 30, 1, 0.5, 10, 10, 0, 30, false, laserImages, laserExplosion, 10);
        this.rightGun = new _projectile__WEBPACK_IMPORTED_MODULE_2__["ProjectileSource"](this, this.w / 3, 0, 5, 30, 1, 0.5, 10, 10, 0, 30, false, laserImages, laserExplosion, 10);
        this.fireLaserCost = this.leftGun.ammoCost + this.rightGun.ammoCost;
    }
    update(frame) {
        this.leftGun.update(frame);
        this.rightGun.update(frame);
        super.update(frame);
    }
    fireLasers() {
        if (this.ammo >= this.fireLaserCost && this.leftGun.spawnProjectile() && this.rightGun.spawnProjectile()) {
            this.audio = Object(_assets__WEBPACK_IMPORTED_MODULE_3__["loadLaser"])();
            this.ammo -= this.fireLaserCost;
        }
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/maclinhpham/Documents/projects/space-game/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map