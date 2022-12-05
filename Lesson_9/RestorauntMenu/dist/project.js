/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/Button/Button.js":
/*!*************************************!*\
  !*** ./Components/Button/Button.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
function Button(title) {
  var _this = this;
  this.title = title;
  this.render = function () {
    return "<div class=\"btn\">".concat(_this.title, "</div>");
  };
}

/***/ }),

/***/ "./Components/MenuItem/MenuItem.js":
/*!*****************************************!*\
  !*** ./Components/MenuItem/MenuItem.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuItem)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MenuItem = /*#__PURE__*/function () {
  function MenuItem(_ref) {
    var id = _ref.id,
      title = _ref.title,
      img = _ref.img,
      price = _ref.price,
      category = _ref.category,
      description = _ref.description;
    _classCallCheck(this, MenuItem);
    this.id = id;
    this.img = img;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
  }
  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      return "\n    <article class=\"menu-item\">\n            <div class=\"menu-item-photo\">\n              <img src=\"".concat(this.img, "\" alt=\"").concat(this.title, "\" width=\"300\" height=\"200\">\n            </div>\n            <div class=\"menu-item-content\">\n              <div class=\"menu-item-content-title\">\n                <span class=\"menu-item-content-name\">").concat(this.title, "</span>\n                <span class=\"menu-item-content-price\">$").concat(this.price, "</span>\n              </div>\n              <div class=\"menu-item-content-description\">").concat(this.description, "</div>\n            </div>\n        </article>\n    ");
    }
  }]);
  return MenuItem;
}();


/***/ }),

/***/ "./Models/Menu.js":
/*!************************!*\
  !*** ./Models/Menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _Components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/MenuItem/MenuItem */ "./Components/MenuItem/MenuItem.js");

var menu = [new _Components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 1,
  title: "buttermilk pancakes",
  category: "breakfast",
  price: 15.99,
  img: "./images/item-1.jpeg",
  description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed "
}), new _Components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 2,
  title: "diner double",
  category: "lunch",
  price: 13.99,
  img: "./images/item-2.jpeg",
  description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats "
}), new _Components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 3,
  title: "godzilla milkshake",
  category: "shakes",
  price: 6.99,
  img: "./images/item-3.jpeg",
  description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
}), new _Components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 4,
  title: "country delight",
  category: "breakfast",
  price: 20.99,
  img: "./images/item-4.jpeg",
  description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, "
}), new _Components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 5,
  title: "egg attack",
  category: "lunch",
  price: 22.99,
  img: "./images/item-5.jpeg",
  description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up "
}), new _Components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 6,
  title: "oreo dream",
  category: "shakes",
  price: 18.99,
  img: "./images/item-6.jpeg",
  description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
}), new _Components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 7,
  title: "bacon overflow",
  category: "breakfast",
  price: 8.99,
  img: "./images/item-7.jpeg",
  description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird "
}), new _Components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 8,
  title: "american classic",
  category: "lunch",
  price: 12.99,
  img: "./images/item-8.jpeg",
  description: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  "
}), new _Components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 9,
  title: "quarantine buddy",
  category: "shakes",
  price: 16.99,
  img: "./images/item-9.jpeg",
  description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
}), new _Components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 10,
  title: "Plov",
  category: "dinner",
  price: 25.99,
  img: "./images/item-10.jpeg",
  description: "plov plov plov plov plov plov plov plov plov plov plov plov "
}), new _Components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 10,
  title: "Jazz",
  category: "ice cream",
  price: 25.99,
  img: "./images/item-10.jpeg",
  description: "plov plov plov plov plov plov plov plov plov plov plov plov "
})];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************!*\
  !*** ./app.js ***!
  \****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/Button/Button */ "./Components/Button/Button.js");
/* harmony import */ var _Models_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Models/Menu */ "./Models/Menu.js");


var filter = "all";
function renderMenu(filter) {
  var menuContainer = document.querySelector("#menu");
  var menuAsHtmlString = _Models_Menu__WEBPACK_IMPORTED_MODULE_1__.menu.filter(function (menuItem) {
    return filter === "all" || menuItem.category === filter;
  }).map(function (menuItem) {
    return menuItem.render();
  }).join("");
  menuContainer.innerHTML = menuAsHtmlString;
  renderButtons();
}
function removeDuplicates(array) {
  return Array.from(new Set(array));
}
function renderButtons() {
  var buttonsContainer = document.getElementById("buttons");
  var categories = removeDuplicates(_Models_Menu__WEBPACK_IMPORTED_MODULE_1__.menu.map(function (menuItem) {
    return menuItem.category;
  }));
  categories.unshift("all");
  var buttonsAsHtmlString = categories.map(function (category) {
    return new _Components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.Button(category).render();
  }).join("");
  buttonsContainer.innerHTML = buttonsAsHtmlString;
}
renderMenu(filter);
document.addEventListener("click", function (event) {
  if (!event.target.classList.contains("btn")) return;
  var category = event.target.innerText;
  filter = category;
  renderMenu(filter);
});
})();

/******/ })()
;
//# sourceMappingURL=project.js.map