/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ISlider = function () {
    function ISlider(config) {
        _classCallCheck(this, ISlider);

        this.self = this;
        this.slideIndex = config.slideIndex;
        this.islider = document.getElementById(config.id);
        this.slides = document.getElementsByClassName(config.slider_item);
        this.dots = document.getElementsByClassName(config.dot_item);
        this.icontrols = this.islider.getElementsByClassName(config.controls_item);
        this.timer = config.timer;
        this.infinate = config.infinate;
    }

    _createClass(ISlider, [{
        key: "init",
        value: function init() {
            var self = this;
            this.showSlides(this.slideIndex);
            this.eventSlides();

            if (this.infinate) {
                this.intervalID = setInterval(function () {
                    self.showSlides(self.slideIndex += -1);
                }, self.timer);
            }
        }
    }, {
        key: "showSlides",
        value: function showSlides(n) {
            if (n > this.slides.length) {
                this.slideIndex = 1;
            }
            if (n < 1) {
                this.slideIndex = this.slides.length;
            }

            for (var i = 0; i < this.slides.length; i++) {
                this.slides[i].style.display = "none";
            }
            for (var _i = 0; _i < this.dots.length; _i++) {
                this.dots[_i].className = this.dots[_i].className.replace("active", "");
            }

            this.slides[this.slideIndex - 1].style.display = "block";
            this.dots[this.slideIndex - 1].className += " active";
        }
    }, {
        key: "moveAction",
        value: function moveAction(n) {
            this.showSlides(n);
        }
    }, {
        key: "eventSlides",
        value: function eventSlides() {
            var self = this.self;

            for (var i = 0; i < this.icontrols.length; i++) {
                this.icontrols[i].addEventListener("click", function () {
                    self.moveAction(self.slideIndex += +this.dataset.action);
                }, false);
            }

            for (var _i2 = 0; _i2 < this.dots.length; _i2++) {
                this.dots[_i2].addEventListener("click", function () {
                    self.moveAction(self.slideIndex = +this.dataset.action);
                }, false);
            }
        }
    }]);

    return ISlider;
}();

exports.default = ISlider;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ISlider = __webpack_require__(0);

var _ISlider2 = _interopRequireDefault(_ISlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
    id: 'islider1',
    slider_item: 'islider__item',
    dot_item: 'dot__item',
    controls_item: 'icontrols__item',
    slideIndex: 1,
    timer: 5000,
    infinate: true
};
var slider = new _ISlider2.default(config);

slider.init();

/***/ })
/******/ ]);