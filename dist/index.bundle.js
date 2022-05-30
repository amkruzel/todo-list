/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color-background: #ededed;\n  --color-primary: #ffa41b;\n  --color-secondary: #ff5151;\n  --color-tertiary: #9818d6;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-family: 'Raleway', sans-serif;\n}\n\n.content {\n  display: grid;\n  grid-template:\n    \"header header\" 50px \n    \"sidebar main\" max(calc(100vh - 50px), 600px) \n    / 250px auto;\n}\n\n/*////////\n/ Header /\n////////*/\n\n.header {\n  grid-area: header;\n\n  background-color: var(--color-secondary);\n  font-size: 30px;\n  color: var(--color-background);\n  padding-left: 30px;\n  padding-top: 4px;\n}\n\n.header button {\n  color: var(--color-background);\n  background-color: rgba(234, 234, 234, .2);\n  padding: 6px 8px;\n  margin: 3px 40px;\n  border: none;\n  border-radius: 7px;\n  font-size: 18px;\n  float: right;\n}\n\n.header button:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, .15);\n}\n\n/*/////////\n/ Sidebar /\n/////////*/\n\n.sidebar-container {\n  grid-area: sidebar;\n\n  background-color: #fafafa;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.sidebar-container > div {\n  display: grid;\n  padding: 12px 10px 8px 20px;\n  border-radius: 5px;\n}\n\n.sidebar-container ul {\n  display: grid;\n  gap: 2px;\n}\n\nli {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: start;\n  justify-items: start;\n  gap: 7px;\n  grid-template-columns: 24px auto 1fr;\n  align-items: center;\n  list-style: none;\n  height: min-content;\n  border-radius: 8px;\n  padding: 4px 10px;\n}\n\nli.extra-chevron {\n  padding: 4px 0px;\n  position: relative;\n  width: 183px;\n  left: -15px;\n}\n\nli.extra-chevron img:last-child {\n  padding-right: 5px;\n}\n\nli img {\n  justify-self: center;\n}\n\n.sidebar-container span {\n  width: max-content;\n  justify-self: end;\n  color: #555;\n}\n\nli:hover {\n  cursor: pointer;\n  transform: translateX(2px);\n  border-left: 3px solid var(--color-secondary);\n  border-radius: 8px;\n}\n\n.selected-li {\n  background-color: #eaeaea;\n}\n\n.list-header {\n  font-weight: 600;\n}\n\n.proj-header {\n  width: 148px;\n}\n\nli[data-is-proj-child='1'] {\n  margin-left: 24px;\n}\n\n/*//////\n/ Main /\n//////*/\n\n.main-container {\n  display: grid;\n  align-items: center;\n  align-content: start;\n  grid-template-rows: 80px;\n  margin: 10px 30px 30px 60px;\n}\n\n.main-header-container {\n  display: grid;\n  align-items: start;\n  grid-template-columns: 100px auto;\n}\n\n.main-header-container div {\n  justify-self: end;\n  \n  display: grid;\n  grid-auto-flow: column;\n  justify-content: start;\n  justify-items: start;\n  gap: 7px;\n  grid-template-columns: 24px auto 1fr;\n  align-items: center;\n  list-style: none;\n  height: min-content;\n  padding: 4px 10px;\n\n  font-size: 16px;\n  color: rgb(96, 96, 96);\n}\n\n.main-header-container div img {\n  padding-right: 5px;\n}\n\n.main-container > div:not(.main-header-container) {\n  display: grid;\n  align-items: center;\n  gap: 4px;\n  font-size: 14px;\n  grid-template: 24px 24px / 24px calc(100% - 84px) 60px;\n}\n.main-container > div:not(.main-header-container):not(:last-child) {\n  border-bottom: 1px solid gray;\n}\n\n.main-container > div:not(.main-header-container) > div:nth-child(2) {\n  grid-column: 2 / 4;\n}\n\ninput[type='checkbox'] {\n  appearance: none;\n  width: 18px;\n  height: 18px;\n  justify-self: center;\n  border: .13rem solid gray;\n  border-radius: 10px;\n\n  display: grid;\n  place-content: center;\n}\n\ninput[type='checkbox'].high-priority {\n  border: .13rem solid #c00;\n  background-color: rgba(204, 0, 0, .1);\n}\n\ninput[type='checkbox'].recurring {\n  border: .13rem solid orange;\n}\n\ninput[type='checkbox']:hover {\n  cursor: pointer;\n}\n\ninput[type='checkbox']::before {\n  content: '';\n  width: 10px;\n  height: 10px;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em green;\n  outline: .13rem solid gray !important;\n  outline-offset: 10px;\n  transform-origin: bottom left;\n  clip-path: polygon(\n    14% 44%, 0 65%, \n    50% 100%, 100% 16%, \n    80% 0%, 43% 62%);\n}\n\ninput[type='checkbox']:checked::before {\n  transform: scale(1);\n}\n\n.modal {\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n  width: 80%;\n  height: 300px;\n  background-color: rgba(0, 0, 0, .15);\n  margin: 15% auto;\n  border-radius: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,wBAAwB;EACxB,0BAA0B;EAC1B,yBAAyB;AAC3B;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb;;;gBAGc;AAChB;;AAEA;;SAES;;AAET;EACE,iBAAiB;;EAEjB,wCAAwC;EACxC,eAAe;EACf,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;EAC9B,yCAAyC;EACzC,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,eAAe;EACf,oCAAoC;AACtC;;AAEA;;UAEU;;AAEV;EACE,kBAAkB;;EAElB,yBAAyB;EACzB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,oBAAoB;EACpB,QAAQ;EACR,oCAAoC;EACpC,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,0BAA0B;EAC1B,6CAA6C;EAC7C,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;OAEO;;AAEP;EACE,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,iBAAiB;;EAEjB,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,oBAAoB;EACpB,QAAQ;EACR,oCAAoC;EACpC,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;;EAEjB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,eAAe;EACf,sDAAsD;AACxD;AACA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,yBAAyB;EACzB,mBAAmB;;EAEnB,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,qCAAqC;AACvC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,uCAAuC;EACvC,+BAA+B;EAC/B,qCAAqC;EACrC,oBAAoB;EACpB,6BAA6B;EAC7B;;;oBAGkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,4BAA4B,EAAE,mBAAmB;EACjD,iCAAiC,EAAE,qBAAqB;AAC1D;;AAEA;EACE,UAAU;EACV,aAAa;EACb,oCAAoC;EACpC,gBAAgB;EAChB,mBAAmB;AACrB","sourcesContent":[":root {\n  --color-background: #ededed;\n  --color-primary: #ffa41b;\n  --color-secondary: #ff5151;\n  --color-tertiary: #9818d6;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-family: 'Raleway', sans-serif;\n}\n\n.content {\n  display: grid;\n  grid-template:\n    \"header header\" 50px \n    \"sidebar main\" max(calc(100vh - 50px), 600px) \n    / 250px auto;\n}\n\n/*////////\n/ Header /\n////////*/\n\n.header {\n  grid-area: header;\n\n  background-color: var(--color-secondary);\n  font-size: 30px;\n  color: var(--color-background);\n  padding-left: 30px;\n  padding-top: 4px;\n}\n\n.header button {\n  color: var(--color-background);\n  background-color: rgba(234, 234, 234, .2);\n  padding: 6px 8px;\n  margin: 3px 40px;\n  border: none;\n  border-radius: 7px;\n  font-size: 18px;\n  float: right;\n}\n\n.header button:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, .15);\n}\n\n/*/////////\n/ Sidebar /\n/////////*/\n\n.sidebar-container {\n  grid-area: sidebar;\n\n  background-color: #fafafa;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.sidebar-container > div {\n  display: grid;\n  padding: 12px 10px 8px 20px;\n  border-radius: 5px;\n}\n\n.sidebar-container ul {\n  display: grid;\n  gap: 2px;\n}\n\nli {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: start;\n  justify-items: start;\n  gap: 7px;\n  grid-template-columns: 24px auto 1fr;\n  align-items: center;\n  list-style: none;\n  height: min-content;\n  border-radius: 8px;\n  padding: 4px 10px;\n}\n\nli.extra-chevron {\n  padding: 4px 0px;\n  position: relative;\n  width: 183px;\n  left: -15px;\n}\n\nli.extra-chevron img:last-child {\n  padding-right: 5px;\n}\n\nli img {\n  justify-self: center;\n}\n\n.sidebar-container span {\n  width: max-content;\n  justify-self: end;\n  color: #555;\n}\n\nli:hover {\n  cursor: pointer;\n  transform: translateX(2px);\n  border-left: 3px solid var(--color-secondary);\n  border-radius: 8px;\n}\n\n.selected-li {\n  background-color: #eaeaea;\n}\n\n.list-header {\n  font-weight: 600;\n}\n\n.proj-header {\n  width: 148px;\n}\n\nli[data-is-proj-child='1'] {\n  margin-left: 24px;\n}\n\n/*//////\n/ Main /\n//////*/\n\n.main-container {\n  display: grid;\n  align-items: center;\n  align-content: start;\n  grid-template-rows: 80px;\n  margin: 10px 30px 30px 60px;\n}\n\n.main-header-container {\n  display: grid;\n  align-items: start;\n  grid-template-columns: 100px auto;\n}\n\n.main-header-container div {\n  justify-self: end;\n  \n  display: grid;\n  grid-auto-flow: column;\n  justify-content: start;\n  justify-items: start;\n  gap: 7px;\n  grid-template-columns: 24px auto 1fr;\n  align-items: center;\n  list-style: none;\n  height: min-content;\n  padding: 4px 10px;\n\n  font-size: 16px;\n  color: rgb(96, 96, 96);\n}\n\n.main-header-container div img {\n  padding-right: 5px;\n}\n\n.main-container > div:not(.main-header-container) {\n  display: grid;\n  align-items: center;\n  gap: 4px;\n  font-size: 14px;\n  grid-template: 24px 24px / 24px calc(100% - 84px) 60px;\n}\n.main-container > div:not(.main-header-container):not(:last-child) {\n  border-bottom: 1px solid gray;\n}\n\n.main-container > div:not(.main-header-container) > div:nth-child(2) {\n  grid-column: 2 / 4;\n}\n\ninput[type='checkbox'] {\n  appearance: none;\n  width: 18px;\n  height: 18px;\n  justify-self: center;\n  border: .13rem solid gray;\n  border-radius: 10px;\n\n  display: grid;\n  place-content: center;\n}\n\ninput[type='checkbox'].high-priority {\n  border: .13rem solid #c00;\n  background-color: rgba(204, 0, 0, .1);\n}\n\ninput[type='checkbox'].recurring {\n  border: .13rem solid orange;\n}\n\ninput[type='checkbox']:hover {\n  cursor: pointer;\n}\n\ninput[type='checkbox']::before {\n  content: '';\n  width: 10px;\n  height: 10px;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em green;\n  outline: .13rem solid gray !important;\n  outline-offset: 10px;\n  transform-origin: bottom left;\n  clip-path: polygon(\n    14% 44%, 0 65%, \n    50% 100%, 100% 16%, \n    80% 0%, 43% 62%);\n}\n\ninput[type='checkbox']:checked::before {\n  transform: scale(1);\n}\n\n.modal {\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n  width: 80%;\n  height: 300px;\n  background-color: rgba(0, 0, 0, .15);\n  margin: 15% auto;\n  border-radius: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/buildHeader.js":
/*!****************************!*\
  !*** ./src/buildHeader.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");


const buildHeader = () => {
  const header = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', 'header')
  const newTaskBtn = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('button', 'new-task-btn')

  newTaskBtn.textContent = 'New Task'
  header.textContent = '// TO-DO'
  
  header.append(newTaskBtn)

  return header
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHeader);

/***/ }),

/***/ "./src/buildSidebar.js":
/*!*****************************!*\
  !*** ./src/buildSidebar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
/* harmony import */ var _media_calendar_alert_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/calendar-alert.svg */ "./src/media/calendar-alert.svg");
/* harmony import */ var _media_calendar_month_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media/calendar-month-outline.svg */ "./src/media/calendar-month-outline.svg");
/* harmony import */ var _media_image_filter_none_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/image-filter-none.svg */ "./src/media/image-filter-none.svg");
/* harmony import */ var _media_water_red_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/water-red.svg */ "./src/media/water-red.svg");
/* harmony import */ var _media_water_orange_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media/water-orange.svg */ "./src/media/water-orange.svg");
/* harmony import */ var _media_tag_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media/tag.svg */ "./src/media/tag.svg");
/* harmony import */ var _media_circle_green_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media/circle-green.svg */ "./src/media/circle-green.svg");
/* harmony import */ var _media_circle_blue_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./media/circle-blue.svg */ "./src/media/circle-blue.svg");
/* harmony import */ var _media_chevron_down_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./media/chevron-down.svg */ "./src/media/chevron-down.svg");
/* harmony import */ var _media_chevron_right_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./media/chevron-right.svg */ "./src/media/chevron-right.svg");
/* harmony import */ var _media_chevron_down_small_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./media/chevron-down-small.svg */ "./src/media/chevron-down-small.svg");















const buildSidebar = () => {

  /* 
  
  If multiple instances of an icon are needed, must use newImg for each instance

  Therefore when using the following icons, you must call newImg on the svg element rather than using an Icon const:

  chevronDownSvg
  chevronRightSvg
  chevronDownSmallSvg
  chevronRightSmallSvg

  */

  // Icons
  const todayIcon        = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newImg)(_media_calendar_alert_svg__WEBPACK_IMPORTED_MODULE_1__)
  const upcomingIcon     = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newImg)(_media_calendar_month_outline_svg__WEBPACK_IMPORTED_MODULE_2__)
  const filterIcon       = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newImg)(_media_image_filter_none_svg__WEBPACK_IMPORTED_MODULE_3__)
  const highPriorityIcon = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newImg)(_media_water_red_svg__WEBPACK_IMPORTED_MODULE_4__)
  const recurringIcon    = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newImg)(_media_water_orange_svg__WEBPACK_IMPORTED_MODULE_5__)
  const calendarIcon     = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newImg)(_media_tag_svg__WEBPACK_IMPORTED_MODULE_6__)
  const circleGreenIcon  = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newImg)(_media_circle_green_svg__WEBPACK_IMPORTED_MODULE_7__)
  const circleBlueIcon   = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newImg)(_media_circle_blue_svg__WEBPACK_IMPORTED_MODULE_8__)
  
  // Div containers
  const sidebarContainer = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', 'sidebar-container')

  const mainTasksContainer = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div')
  const favoritesContainer = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div')
  const ProjectsContainer  = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div')
  
  const ulMain      = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('ul')
  const ulFavorites = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('ul')
  const ulProjects  = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('ul')

  // Individual list items
  const mainToday             = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('li', 'selected-li')
  const mainUpcoming          = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('li')
  const mainFilter            = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('li')
  const favoritesHeader       = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('li', 'list-header')
  const favoritesHighPriority = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('li')
  const favoritesRecurring    = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('li')
  const favoritesCalendar     = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('li')
  const projectsHeader        = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('li', 'list-header', 'proj-header')
  const projectsPersonal      = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('li')
  const projectsWork          = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('li')

  // Project sub-items
  const personalHome   = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('li')
  const personalFamily = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('li')

  // Add text to each item
  mainToday.textContent             = 'Today'
  mainUpcoming.textContent          = 'Upcoming'
  mainFilter.textContent            = 'Filters & Labels'
  favoritesHeader.textContent       = 'Favorites'
  favoritesHighPriority.textContent = 'Highest Priority'
  favoritesRecurring.textContent    = 'Recurring'
  favoritesCalendar.textContent     = 'Calendar'
  projectsHeader.textContent        = 'Projects'
  projectsPersonal.textContent      = 'Personal'
  projectsWork.textContent          = 'Work'

  // Add text to project sub-items
  personalHome.textContent   = 'Home'
  personalFamily.textContent = 'Family'

  // Add icon(s) to each item
  mainToday.prepend(todayIcon)
  mainUpcoming.prepend(upcomingIcon)
  mainFilter.prepend(filterIcon)
  favoritesHeader.prepend((0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newImg)(_media_chevron_down_svg__WEBPACK_IMPORTED_MODULE_9__))
  favoritesHighPriority.prepend(highPriorityIcon)
  favoritesRecurring.prepend(recurringIcon)
  favoritesCalendar.prepend(calendarIcon)
  projectsHeader.prepend((0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newImg)(_media_chevron_down_svg__WEBPACK_IMPORTED_MODULE_9__))
  projectsPersonal.prepend(circleGreenIcon)
  projectsPersonal.prepend((0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newImg)(_media_chevron_down_small_svg__WEBPACK_IMPORTED_MODULE_11__))
  projectsWork.prepend(circleBlueIcon)
  projectsWork.prepend((0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newImg)(_media_chevron_down_small_svg__WEBPACK_IMPORTED_MODULE_11__))

  personalHome.prepend((0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newImg)(_media_circle_green_svg__WEBPACK_IMPORTED_MODULE_7__))
  personalFamily.prepend((0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newImg)(_media_circle_green_svg__WEBPACK_IMPORTED_MODULE_7__))

  // Add 'extra-chevron' class to items that have two icons
  projectsPersonal.classList.add('extra-chevron')
  projectsWork.classList.add('extra-chevron')

  // Add dataset to project category groupers
  projectsPersonal.dataset.isProjParent = '1'
  projectsPersonal.dataset.projName = 'personal'
  personalHome.dataset.isProjChild = '1'
  personalHome.dataset.projParent = 'personal'
  personalFamily.dataset.isProjChild = '1'
  personalFamily.dataset.projParent = 'personal'

  // Putting everything together
  sidebarContainer
    .appendChild(mainTasksContainer)
    .appendChild(ulMain)
    .append(
      mainToday,
      mainUpcoming,
      mainFilter
    )

  sidebarContainer
    .appendChild(favoritesContainer)
    .appendChild(ulFavorites)
    .append(
      favoritesHeader,
      favoritesHighPriority,
      favoritesRecurring,
      favoritesCalendar
    )
  
  sidebarContainer
    .appendChild(ProjectsContainer)
    .appendChild(ulProjects)
    .append(
      projectsHeader,
      projectsPersonal,
      personalHome,
      personalFamily,
      projectsWork
    )

  return sidebarContainer
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildSidebar);

/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newElement": () => (/* binding */ newElement),
/* harmony export */   "newImg": () => (/* binding */ newImg)
/* harmony export */ });
function newElement(type, ...classes) {
  let el = document.createElement(type)
  classes.forEach((cl) => {
    el.classList.add(cl)
  })
  return el
}

function newImg(src) {
  let tmp = new Image()
  tmp.src = src
  return tmp
}



/***/ }),

/***/ "./src/media/calendar-alert.svg":
/*!**************************************!*\
  !*** ./src/media/calendar-alert.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4b2c5c3ebd70c8938c9.svg";

/***/ }),

/***/ "./src/media/calendar-month-outline.svg":
/*!**********************************************!*\
  !*** ./src/media/calendar-month-outline.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e90eaec9ce93458b40ce.svg";

/***/ }),

/***/ "./src/media/chevron-down-small.svg":
/*!******************************************!*\
  !*** ./src/media/chevron-down-small.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7ae6e70527863cfbbf5.svg";

/***/ }),

/***/ "./src/media/chevron-down.svg":
/*!************************************!*\
  !*** ./src/media/chevron-down.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc1627c9fb5c88ed1a6a.svg";

/***/ }),

/***/ "./src/media/chevron-right.svg":
/*!*************************************!*\
  !*** ./src/media/chevron-right.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d08ef38365fd493aafb3.svg";

/***/ }),

/***/ "./src/media/circle-blue.svg":
/*!***********************************!*\
  !*** ./src/media/circle-blue.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b034ea578a95d54c26cb.svg";

/***/ }),

/***/ "./src/media/circle-green.svg":
/*!************************************!*\
  !*** ./src/media/circle-green.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8307ab1c33082dd20126.svg";

/***/ }),

/***/ "./src/media/image-filter-none.svg":
/*!*****************************************!*\
  !*** ./src/media/image-filter-none.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7fdbede79388747fcfb.svg";

/***/ }),

/***/ "./src/media/tag.svg":
/*!***************************!*\
  !*** ./src/media/tag.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ec9c02e5ccc71302c2f.svg";

/***/ }),

/***/ "./src/media/tune.svg":
/*!****************************!*\
  !*** ./src/media/tune.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f2d9b609a8096ab0ed7.svg";

/***/ }),

/***/ "./src/media/water-orange.svg":
/*!************************************!*\
  !*** ./src/media/water-orange.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66d0e03a99981787ea82.svg";

/***/ }),

/***/ "./src/media/water-red.svg":
/*!*********************************!*\
  !*** ./src/media/water-red.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4063f615c76444e83c3c.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
/* harmony import */ var _buildHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildHeader */ "./src/buildHeader.js");
/* harmony import */ var _buildSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buildSidebar */ "./src/buildSidebar.js");
/* harmony import */ var _media_tune_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/tune.svg */ "./src/media/tune.svg");






const viewIcon = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.newImg)(_media_tune_svg__WEBPACK_IMPORTED_MODULE_4__)

const Content = document.querySelector('.content')

const header = (0,_buildHeader__WEBPACK_IMPORTED_MODULE_2__["default"])()
const sidebar = (0,_buildSidebar__WEBPACK_IMPORTED_MODULE_3__["default"])()

const main = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.newElement)('div', 'main-container')

const mainHeaderContainer = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.newElement)('div', 'main-header-container')
const mainHeader = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.newElement)('h3')
mainHeader.textContent = 'Today'

const mainFilter = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.newElement)('div')
mainFilter.textContent = 'View'
mainFilter.prepend(viewIcon)

const practiceTask = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.newElement)('div')
const pracTaskRadio = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.newElement)('input')
pracTaskRadio.setAttribute('type', 'checkbox')
const pracTask = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.newElement)('div')
pracTask.textContent = 'Read work emails'
const pracTime = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.newElement)('div')

practiceTask.append(
  pracTaskRadio,
  pracTask
)

main
.appendChild(mainHeaderContainer)
.append(mainHeader, mainFilter)

main.append(
  practiceTask,
  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.newElement)('div'),
  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.newElement)('div'),
  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.newElement)('div'))

/*

const modal = newElement('div', 'modal')
const modalContent = newElement('div', 'modal-content')
modal.append(modalContent)
main.append(modal)

*/

Content.append(header, sidebar, main)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsZ0NBQWdDLDZCQUE2QiwrQkFBK0IsOEJBQThCLEdBQUcsT0FBTyxjQUFjLGVBQWUsR0FBRyxVQUFVLHVDQUF1QyxHQUFHLGNBQWMsa0JBQWtCLHdIQUF3SCxHQUFHLG1EQUFtRCxzQkFBc0IsK0NBQStDLG9CQUFvQixtQ0FBbUMsdUJBQXVCLHFCQUFxQixHQUFHLG9CQUFvQixtQ0FBbUMsOENBQThDLHFCQUFxQixxQkFBcUIsaUJBQWlCLHVCQUF1QixvQkFBb0IsaUJBQWlCLEdBQUcsMEJBQTBCLG9CQUFvQix5Q0FBeUMsR0FBRyxpRUFBaUUsdUJBQXVCLGdDQUFnQyxvQkFBb0IscUJBQXFCLEdBQUcsOEJBQThCLGtCQUFrQixnQ0FBZ0MsdUJBQXVCLEdBQUcsMkJBQTJCLGtCQUFrQixhQUFhLEdBQUcsUUFBUSxrQkFBa0IsMkJBQTJCLDJCQUEyQix5QkFBeUIsYUFBYSx5Q0FBeUMsd0JBQXdCLHFCQUFxQix3QkFBd0IsdUJBQXVCLHNCQUFzQixHQUFHLHNCQUFzQixxQkFBcUIsdUJBQXVCLGlCQUFpQixnQkFBZ0IsR0FBRyxxQ0FBcUMsdUJBQXVCLEdBQUcsWUFBWSx5QkFBeUIsR0FBRyw2QkFBNkIsdUJBQXVCLHNCQUFzQixnQkFBZ0IsR0FBRyxjQUFjLG9CQUFvQiwrQkFBK0Isa0RBQWtELHVCQUF1QixHQUFHLGtCQUFrQiw4QkFBOEIsR0FBRyxrQkFBa0IscUJBQXFCLEdBQUcsa0JBQWtCLGlCQUFpQixHQUFHLGdDQUFnQyxzQkFBc0IsR0FBRyxxREFBcUQsa0JBQWtCLHdCQUF3Qix5QkFBeUIsNkJBQTZCLGdDQUFnQyxHQUFHLDRCQUE0QixrQkFBa0IsdUJBQXVCLHNDQUFzQyxHQUFHLGdDQUFnQyxzQkFBc0Isc0JBQXNCLDJCQUEyQiwyQkFBMkIseUJBQXlCLGFBQWEseUNBQXlDLHdCQUF3QixxQkFBcUIsd0JBQXdCLHNCQUFzQixzQkFBc0IsMkJBQTJCLEdBQUcsb0NBQW9DLHVCQUF1QixHQUFHLHVEQUF1RCxrQkFBa0Isd0JBQXdCLGFBQWEsb0JBQW9CLDJEQUEyRCxHQUFHLHNFQUFzRSxrQ0FBa0MsR0FBRywwRUFBMEUsdUJBQXVCLEdBQUcsNEJBQTRCLHFCQUFxQixnQkFBZ0IsaUJBQWlCLHlCQUF5Qiw4QkFBOEIsd0JBQXdCLG9CQUFvQiwwQkFBMEIsR0FBRywwQ0FBMEMsOEJBQThCLDBDQUEwQyxHQUFHLHNDQUFzQyxnQ0FBZ0MsR0FBRyxrQ0FBa0Msb0JBQW9CLEdBQUcsb0NBQW9DLGdCQUFnQixnQkFBZ0IsaUJBQWlCLHdCQUF3Qiw0Q0FBNEMsb0NBQW9DLDBDQUEwQyx5QkFBeUIsa0NBQWtDLDhGQUE4RixHQUFHLDRDQUE0Qyx3QkFBd0IsR0FBRyxZQUFZLHFCQUFxQixtQ0FBbUMsNEJBQTRCLFdBQVcsaUJBQWlCLGtDQUFrQyxxQ0FBcUMsK0RBQStELDJEQUEyRCx5QkFBeUIsb0JBQW9CLGVBQWUsa0JBQWtCLHlDQUF5QyxxQkFBcUIsd0JBQXdCLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLE9BQU8sT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLHNCQUFzQixxQkFBcUIsV0FBVyxVQUFVLG9CQUFvQix1QkFBdUIsdUJBQXVCLHlCQUF5Qix5QkFBeUIsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxpQ0FBaUMsZ0NBQWdDLDZCQUE2QiwrQkFBK0IsOEJBQThCLEdBQUcsT0FBTyxjQUFjLGVBQWUsR0FBRyxVQUFVLHVDQUF1QyxHQUFHLGNBQWMsa0JBQWtCLHdIQUF3SCxHQUFHLG1EQUFtRCxzQkFBc0IsK0NBQStDLG9CQUFvQixtQ0FBbUMsdUJBQXVCLHFCQUFxQixHQUFHLG9CQUFvQixtQ0FBbUMsOENBQThDLHFCQUFxQixxQkFBcUIsaUJBQWlCLHVCQUF1QixvQkFBb0IsaUJBQWlCLEdBQUcsMEJBQTBCLG9CQUFvQix5Q0FBeUMsR0FBRyxpRUFBaUUsdUJBQXVCLGdDQUFnQyxvQkFBb0IscUJBQXFCLEdBQUcsOEJBQThCLGtCQUFrQixnQ0FBZ0MsdUJBQXVCLEdBQUcsMkJBQTJCLGtCQUFrQixhQUFhLEdBQUcsUUFBUSxrQkFBa0IsMkJBQTJCLDJCQUEyQix5QkFBeUIsYUFBYSx5Q0FBeUMsd0JBQXdCLHFCQUFxQix3QkFBd0IsdUJBQXVCLHNCQUFzQixHQUFHLHNCQUFzQixxQkFBcUIsdUJBQXVCLGlCQUFpQixnQkFBZ0IsR0FBRyxxQ0FBcUMsdUJBQXVCLEdBQUcsWUFBWSx5QkFBeUIsR0FBRyw2QkFBNkIsdUJBQXVCLHNCQUFzQixnQkFBZ0IsR0FBRyxjQUFjLG9CQUFvQiwrQkFBK0Isa0RBQWtELHVCQUF1QixHQUFHLGtCQUFrQiw4QkFBOEIsR0FBRyxrQkFBa0IscUJBQXFCLEdBQUcsa0JBQWtCLGlCQUFpQixHQUFHLGdDQUFnQyxzQkFBc0IsR0FBRyxxREFBcUQsa0JBQWtCLHdCQUF3Qix5QkFBeUIsNkJBQTZCLGdDQUFnQyxHQUFHLDRCQUE0QixrQkFBa0IsdUJBQXVCLHNDQUFzQyxHQUFHLGdDQUFnQyxzQkFBc0Isc0JBQXNCLDJCQUEyQiwyQkFBMkIseUJBQXlCLGFBQWEseUNBQXlDLHdCQUF3QixxQkFBcUIsd0JBQXdCLHNCQUFzQixzQkFBc0IsMkJBQTJCLEdBQUcsb0NBQW9DLHVCQUF1QixHQUFHLHVEQUF1RCxrQkFBa0Isd0JBQXdCLGFBQWEsb0JBQW9CLDJEQUEyRCxHQUFHLHNFQUFzRSxrQ0FBa0MsR0FBRywwRUFBMEUsdUJBQXVCLEdBQUcsNEJBQTRCLHFCQUFxQixnQkFBZ0IsaUJBQWlCLHlCQUF5Qiw4QkFBOEIsd0JBQXdCLG9CQUFvQiwwQkFBMEIsR0FBRywwQ0FBMEMsOEJBQThCLDBDQUEwQyxHQUFHLHNDQUFzQyxnQ0FBZ0MsR0FBRyxrQ0FBa0Msb0JBQW9CLEdBQUcsb0NBQW9DLGdCQUFnQixnQkFBZ0IsaUJBQWlCLHdCQUF3Qiw0Q0FBNEMsb0NBQW9DLDBDQUEwQyx5QkFBeUIsa0NBQWtDLDhGQUE4RixHQUFHLDRDQUE0Qyx3QkFBd0IsR0FBRyxZQUFZLHFCQUFxQixtQ0FBbUMsNEJBQTRCLFdBQVcsaUJBQWlCLGtDQUFrQyxxQ0FBcUMsK0RBQStELDJEQUEyRCx5QkFBeUIsb0JBQW9CLGVBQWUsa0JBQWtCLHlDQUF5QyxxQkFBcUIsd0JBQXdCLEdBQUcsbUJBQW1CO0FBQzd2VztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmOEM7O0FBRTlDO0FBQ0EsaUJBQWlCLDREQUFVO0FBQzNCLHFCQUFxQiw0REFBVTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkdUM7O0FBRUU7QUFDUTtBQUNMO0FBQ1I7QUFDRztBQUNUO0FBQ1M7QUFDRDs7QUFFSztBQUNDO0FBQ0s7O0FBRWhFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQix3REFBTSxDQUFDLHNEQUFRO0FBQzFDLDJCQUEyQix3REFBTSxDQUFDLDhEQUFXO0FBQzdDLDJCQUEyQix3REFBTSxDQUFDLHlEQUFTO0FBQzNDLDJCQUEyQix3REFBTSxDQUFDLGlEQUFlO0FBQ2pELDJCQUEyQix3REFBTSxDQUFDLG9EQUFZO0FBQzlDLDJCQUEyQix3REFBTSxDQUFDLDJDQUFXO0FBQzdDLDJCQUEyQix3REFBTSxDQUFDLG9EQUFjO0FBQ2hELDJCQUEyQix3REFBTSxDQUFDLG1EQUFhO0FBQy9DO0FBQ0E7QUFDQSwyQkFBMkIsNERBQVU7O0FBRXJDLDZCQUE2Qiw0REFBVTtBQUN2Qyw2QkFBNkIsNERBQVU7QUFDdkMsNkJBQTZCLDREQUFVO0FBQ3ZDO0FBQ0Esc0JBQXNCLDREQUFVO0FBQ2hDLHNCQUFzQiw0REFBVTtBQUNoQyxzQkFBc0IsNERBQVU7O0FBRWhDO0FBQ0EsZ0NBQWdDLDREQUFVO0FBQzFDLGdDQUFnQyw0REFBVTtBQUMxQyxnQ0FBZ0MsNERBQVU7QUFDMUMsZ0NBQWdDLDREQUFVO0FBQzFDLGdDQUFnQyw0REFBVTtBQUMxQyxnQ0FBZ0MsNERBQVU7QUFDMUMsZ0NBQWdDLDREQUFVO0FBQzFDLGdDQUFnQyw0REFBVTtBQUMxQyxnQ0FBZ0MsNERBQVU7QUFDMUMsZ0NBQWdDLDREQUFVOztBQUUxQztBQUNBLHlCQUF5Qiw0REFBVTtBQUNuQyx5QkFBeUIsNERBQVU7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdEQUFNLENBQUMsb0RBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdEQUFNLENBQUMsb0RBQWM7QUFDOUM7QUFDQSwyQkFBMkIsd0RBQU0sQ0FBQywyREFBbUI7QUFDckQ7QUFDQSx1QkFBdUIsd0RBQU0sQ0FBQywyREFBbUI7O0FBRWpELHVCQUF1Qix3REFBTSxDQUFDLG9EQUFjO0FBQzVDLHlCQUF5Qix3REFBTSxDQUFDLG9EQUFjOztBQUU5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDbEpmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNrQztBQUNmO0FBQ0U7O0FBRUg7QUFDdEMsaUJBQWlCLHdEQUFNLENBQUMsNENBQU87O0FBRS9COztBQUVBLGVBQWUsd0RBQVc7QUFDMUIsZ0JBQWdCLHlEQUFZOztBQUU1QixhQUFhLDREQUFVOztBQUV2Qiw0QkFBNEIsNERBQVU7QUFDdEMsbUJBQW1CLDREQUFVO0FBQzdCOztBQUVBLG1CQUFtQiw0REFBVTtBQUM3QjtBQUNBOztBQUVBLHFCQUFxQiw0REFBVTtBQUMvQixzQkFBc0IsNERBQVU7QUFDaEM7QUFDQSxpQkFBaUIsNERBQVU7QUFDM0I7QUFDQSxpQkFBaUIsNERBQVU7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw0REFBVTtBQUNaLEVBQUUsNERBQVU7QUFDWixFQUFFLDREQUFVOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9idWlsZEhlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvYnVpbGRTaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9oZWxwZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tY29sb3ItYmFja2dyb3VuZDogI2VkZWRlZDtcXG4gIC0tY29sb3ItcHJpbWFyeTogI2ZmYTQxYjtcXG4gIC0tY29sb3Itc2Vjb25kYXJ5OiAjZmY1MTUxO1xcbiAgLS1jb2xvci10ZXJ0aWFyeTogIzk4MThkNjtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCIgNTBweCBcXG4gICAgXFxcInNpZGViYXIgbWFpblxcXCIgbWF4KGNhbGMoMTAwdmggLSA1MHB4KSwgNjAwcHgpIFxcbiAgICAvIDI1MHB4IGF1dG87XFxufVxcblxcbi8qLy8vLy8vLy9cXG4vIEhlYWRlciAvXFxuLy8vLy8vLy8qL1xcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZy10b3A6IDRweDtcXG59XFxuXFxuLmhlYWRlciBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDIzNCwgMjM0LCAuMik7XFxuICBwYWRkaW5nOiA2cHggOHB4O1xcbiAgbWFyZ2luOiAzcHggNDBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLmhlYWRlciBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMTUpO1xcbn1cXG5cXG4vKi8vLy8vLy8vL1xcbi8gU2lkZWJhciAvXFxuLy8vLy8vLy8vKi9cXG5cXG4uc2lkZWJhci1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMTJweCAxMHB4IDhweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1jb250YWluZXIgdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG5saSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gIGdhcDogN3B4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNHB4IGF1dG8gMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogNHB4IDEwcHg7XFxufVxcblxcbmxpLmV4dHJhLWNoZXZyb24ge1xcbiAgcGFkZGluZzogNHB4IDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxODNweDtcXG4gIGxlZnQ6IC0xNXB4O1xcbn1cXG5cXG5saS5leHRyYS1jaGV2cm9uIGltZzpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuXFxubGkgaW1nIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhci1jb250YWluZXIgc3BhbiB7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGNvbG9yOiAjNTU1O1xcbn1cXG5cXG5saTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnNlbGVjdGVkLWxpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XFxufVxcblxcbi5saXN0LWhlYWRlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucHJvai1oZWFkZXIge1xcbiAgd2lkdGg6IDE0OHB4O1xcbn1cXG5cXG5saVtkYXRhLWlzLXByb2otY2hpbGQ9JzEnXSB7XFxuICBtYXJnaW4tbGVmdDogMjRweDtcXG59XFxuXFxuLyovLy8vLy9cXG4vIE1haW4gL1xcbi8vLy8vLyovXFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHg7XFxuICBtYXJnaW46IDEwcHggMzBweCAzMHB4IDYwcHg7XFxufVxcblxcbi5tYWluLWhlYWRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggYXV0bztcXG59XFxuXFxuLm1haW4taGVhZGVyLWNvbnRhaW5lciBkaXYge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgZ2FwOiA3cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0cHggYXV0byAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBwYWRkaW5nOiA0cHggMTBweDtcXG5cXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiByZ2IoOTYsIDk2LCA5Nik7XFxufVxcblxcbi5tYWluLWhlYWRlci1jb250YWluZXIgZGl2IGltZyB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciA+IGRpdjpub3QoLm1haW4taGVhZGVyLWNvbnRhaW5lcikge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGdyaWQtdGVtcGxhdGU6IDI0cHggMjRweCAvIDI0cHggY2FsYygxMDAlIC0gODRweCkgNjBweDtcXG59XFxuLm1haW4tY29udGFpbmVyID4gZGl2Om5vdCgubWFpbi1oZWFkZXItY29udGFpbmVyKTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIgPiBkaXY6bm90KC5tYWluLWhlYWRlci1jb250YWluZXIpID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXI6IC4xM3JlbSBzb2xpZCBncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10uaGlnaC1wcmlvcml0eSB7XFxuICBib3JkZXI6IC4xM3JlbSBzb2xpZCAjYzAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDQsIDAsIDAsIC4xKTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXS5yZWN1cnJpbmcge1xcbiAgYm9yZGVyOiAuMTNyZW0gc29saWQgb3JhbmdlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSBncmVlbjtcXG4gIG91dGxpbmU6IC4xM3JlbSBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMTBweDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAxNCUgNDQlLCAwIDY1JSwgXFxuICAgIDUwJSAxMDAlLCAxMDAlIDE2JSwgXFxuICAgIDgwJSAwJSwgNDMlIDYyJSk7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMTUpO1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHls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QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0VBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtBQUMxRDs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjZWRlZGVkO1xcbiAgLS1jb2xvci1wcmltYXJ5OiAjZmZhNDFiO1xcbiAgLS1jb2xvci1zZWNvbmRhcnk6ICNmZjUxNTE7XFxuICAtLWNvbG9yLXRlcnRpYXJ5OiAjOTgxOGQ2O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIiA1MHB4IFxcbiAgICBcXFwic2lkZWJhciBtYWluXFxcIiBtYXgoY2FsYygxMDB2aCAtIDUwcHgpLCA2MDBweCkgXFxuICAgIC8gMjUwcHggYXV0bztcXG59XFxuXFxuLyovLy8vLy8vL1xcbi8gSGVhZGVyIC9cXG4vLy8vLy8vLyovXFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBwYWRkaW5nLXRvcDogNHB4O1xcbn1cXG5cXG4uaGVhZGVyIGJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwgMjM0LCAyMzQsIC4yKTtcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICBtYXJnaW46IDNweCA0MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4uaGVhZGVyIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xNSk7XFxufVxcblxcbi8qLy8vLy8vLy8vXFxuLyBTaWRlYmFyIC9cXG4vLy8vLy8vLy8qL1xcblxcbi5zaWRlYmFyLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnNpZGViYXItY29udGFpbmVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAxMnB4IDEwcHggOHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciB1bCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbmxpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgZ2FwOiA3cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0cHggYXV0byAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA0cHggMTBweDtcXG59XFxuXFxubGkuZXh0cmEtY2hldnJvbiB7XFxuICBwYWRkaW5nOiA0cHggMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDE4M3B4O1xcbiAgbGVmdDogLTE1cHg7XFxufVxcblxcbmxpLmV4dHJhLWNoZXZyb24gaW1nOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG5cXG5saSBpbWcge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciBzcGFuIHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgY29sb3I6ICM1NTU7XFxufVxcblxcbmxpOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQtbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcXG59XFxuXFxuLmxpc3QtaGVhZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5wcm9qLWhlYWRlciB7XFxuICB3aWR0aDogMTQ4cHg7XFxufVxcblxcbmxpW2RhdGEtaXMtcHJvai1jaGlsZD0nMSddIHtcXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xcbn1cXG5cXG4vKi8vLy8vL1xcbi8gTWFpbiAvXFxuLy8vLy8vKi9cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweDtcXG4gIG1hcmdpbjogMTBweCAzMHB4IDMwcHggNjBweDtcXG59XFxuXFxuLm1haW4taGVhZGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCBhdXRvO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXItY29udGFpbmVyIGRpdiB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIFxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICBnYXA6IDdweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjRweCBhdXRvIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xcblxcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHJnYig5NiwgOTYsIDk2KTtcXG59XFxuXFxuLm1haW4taGVhZGVyLWNvbnRhaW5lciBkaXYgaW1nIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyID4gZGl2Om5vdCgubWFpbi1oZWFkZXItY29udGFpbmVyKSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZTogMjRweCAyNHB4IC8gMjRweCBjYWxjKDEwMCUgLSA4NHB4KSA2MHB4O1xcbn1cXG4ubWFpbi1jb250YWluZXIgPiBkaXY6bm90KC5tYWluLWhlYWRlci1jb250YWluZXIpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciA+IGRpdjpub3QoLm1haW4taGVhZGVyLWNvbnRhaW5lcikgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgd2lkdGg6IDE4cHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlcjogLjEzcmVtIHNvbGlkIGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXS5oaWdoLXByaW9yaXR5IHtcXG4gIGJvcmRlcjogLjEzcmVtIHNvbGlkICNjMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNCwgMCwgMCwgLjEpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddLnJlY3VycmluZyB7XFxuICBib3JkZXI6IC4xM3JlbSBzb2xpZCBvcmFuZ2U7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIGdyZWVuO1xcbiAgb3V0bGluZTogLjEzcmVtIHNvbGlkIGdyYXkgIWltcG9ydGFudDtcXG4gIG91dGxpbmUtb2Zmc2V0OiAxMHB4O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgIDE0JSA0NCUsIDAgNjUlLCBcXG4gICAgNTAlIDEwMCUsIDEwMCUgMTYlLCBcXG4gICAgODAlIDAlLCA0MyUgNjIlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xNSk7XFxuICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBuZXdFbGVtZW50IH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zXCJcblxuY29uc3QgYnVpbGRIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IG5ld0VsZW1lbnQoJ2RpdicsICdoZWFkZXInKVxuICBjb25zdCBuZXdUYXNrQnRuID0gbmV3RWxlbWVudCgnYnV0dG9uJywgJ25ldy10YXNrLWJ0bicpXG5cbiAgbmV3VGFza0J0bi50ZXh0Q29udGVudCA9ICdOZXcgVGFzaydcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJy8vIFRPLURPJ1xuICBcbiAgaGVhZGVyLmFwcGVuZChuZXdUYXNrQnRuKVxuXG4gIHJldHVybiBoZWFkZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRIZWFkZXIiLCJpbXBvcnQgeyBuZXdFbGVtZW50LCBuZXdJbWcgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucydcblxuaW1wb3J0IHRvZGF5U3ZnICAgICAgICBmcm9tICcuL21lZGlhL2NhbGVuZGFyLWFsZXJ0LnN2ZydcbmltcG9ydCB1cGNvbWluZ1N2ZyAgICAgZnJvbSAnLi9tZWRpYS9jYWxlbmRhci1tb250aC1vdXRsaW5lLnN2ZydcbmltcG9ydCBmaWx0ZXJTdmcgICAgICAgZnJvbSAnLi9tZWRpYS9pbWFnZS1maWx0ZXItbm9uZS5zdmcnXG5pbXBvcnQgaGlnaFByaW9yaXR5U3ZnIGZyb20gJy4vbWVkaWEvd2F0ZXItcmVkLnN2ZydcbmltcG9ydCByZWN1cnJpbmdTdmcgICAgZnJvbSAnLi9tZWRpYS93YXRlci1vcmFuZ2Uuc3ZnJ1xuaW1wb3J0IGNhbGVuZGFyU3ZnICAgICBmcm9tICcuL21lZGlhL3RhZy5zdmcnXG5pbXBvcnQgY2lyY2xlR3JlZW5TdmcgIGZyb20gJy4vbWVkaWEvY2lyY2xlLWdyZWVuLnN2ZydcbmltcG9ydCBjaXJjbGVCbHVlU3ZnICAgZnJvbSAnLi9tZWRpYS9jaXJjbGUtYmx1ZS5zdmcnXG5cbmltcG9ydCBjaGV2cm9uRG93blN2ZyAgICAgIGZyb20gJy4vbWVkaWEvY2hldnJvbi1kb3duLnN2ZydcbmltcG9ydCBjaGV2cm9uUmlnaHRTdmcgICAgIGZyb20gJy4vbWVkaWEvY2hldnJvbi1yaWdodC5zdmcnXG5pbXBvcnQgY2hldnJvbkRvd25TbWFsbFN2ZyBmcm9tICcuL21lZGlhL2NoZXZyb24tZG93bi1zbWFsbC5zdmcnXG5cbmNvbnN0IGJ1aWxkU2lkZWJhciA9ICgpID0+IHtcblxuICAvKiBcbiAgXG4gIElmIG11bHRpcGxlIGluc3RhbmNlcyBvZiBhbiBpY29uIGFyZSBuZWVkZWQsIG11c3QgdXNlIG5ld0ltZyBmb3IgZWFjaCBpbnN0YW5jZVxuXG4gIFRoZXJlZm9yZSB3aGVuIHVzaW5nIHRoZSBmb2xsb3dpbmcgaWNvbnMsIHlvdSBtdXN0IGNhbGwgbmV3SW1nIG9uIHRoZSBzdmcgZWxlbWVudCByYXRoZXIgdGhhbiB1c2luZyBhbiBJY29uIGNvbnN0OlxuXG4gIGNoZXZyb25Eb3duU3ZnXG4gIGNoZXZyb25SaWdodFN2Z1xuICBjaGV2cm9uRG93blNtYWxsU3ZnXG4gIGNoZXZyb25SaWdodFNtYWxsU3ZnXG5cbiAgKi9cblxuICAvLyBJY29uc1xuICBjb25zdCB0b2RheUljb24gICAgICAgID0gbmV3SW1nKHRvZGF5U3ZnKVxuICBjb25zdCB1cGNvbWluZ0ljb24gICAgID0gbmV3SW1nKHVwY29taW5nU3ZnKVxuICBjb25zdCBmaWx0ZXJJY29uICAgICAgID0gbmV3SW1nKGZpbHRlclN2ZylcbiAgY29uc3QgaGlnaFByaW9yaXR5SWNvbiA9IG5ld0ltZyhoaWdoUHJpb3JpdHlTdmcpXG4gIGNvbnN0IHJlY3VycmluZ0ljb24gICAgPSBuZXdJbWcocmVjdXJyaW5nU3ZnKVxuICBjb25zdCBjYWxlbmRhckljb24gICAgID0gbmV3SW1nKGNhbGVuZGFyU3ZnKVxuICBjb25zdCBjaXJjbGVHcmVlbkljb24gID0gbmV3SW1nKGNpcmNsZUdyZWVuU3ZnKVxuICBjb25zdCBjaXJjbGVCbHVlSWNvbiAgID0gbmV3SW1nKGNpcmNsZUJsdWVTdmcpXG4gIFxuICAvLyBEaXYgY29udGFpbmVyc1xuICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gbmV3RWxlbWVudCgnZGl2JywgJ3NpZGViYXItY29udGFpbmVyJylcblxuICBjb25zdCBtYWluVGFza3NDb250YWluZXIgPSBuZXdFbGVtZW50KCdkaXYnKVxuICBjb25zdCBmYXZvcml0ZXNDb250YWluZXIgPSBuZXdFbGVtZW50KCdkaXYnKVxuICBjb25zdCBQcm9qZWN0c0NvbnRhaW5lciAgPSBuZXdFbGVtZW50KCdkaXYnKVxuICBcbiAgY29uc3QgdWxNYWluICAgICAgPSBuZXdFbGVtZW50KCd1bCcpXG4gIGNvbnN0IHVsRmF2b3JpdGVzID0gbmV3RWxlbWVudCgndWwnKVxuICBjb25zdCB1bFByb2plY3RzICA9IG5ld0VsZW1lbnQoJ3VsJylcblxuICAvLyBJbmRpdmlkdWFsIGxpc3QgaXRlbXNcbiAgY29uc3QgbWFpblRvZGF5ICAgICAgICAgICAgID0gbmV3RWxlbWVudCgnbGknLCAnc2VsZWN0ZWQtbGknKVxuICBjb25zdCBtYWluVXBjb21pbmcgICAgICAgICAgPSBuZXdFbGVtZW50KCdsaScpXG4gIGNvbnN0IG1haW5GaWx0ZXIgICAgICAgICAgICA9IG5ld0VsZW1lbnQoJ2xpJylcbiAgY29uc3QgZmF2b3JpdGVzSGVhZGVyICAgICAgID0gbmV3RWxlbWVudCgnbGknLCAnbGlzdC1oZWFkZXInKVxuICBjb25zdCBmYXZvcml0ZXNIaWdoUHJpb3JpdHkgPSBuZXdFbGVtZW50KCdsaScpXG4gIGNvbnN0IGZhdm9yaXRlc1JlY3VycmluZyAgICA9IG5ld0VsZW1lbnQoJ2xpJylcbiAgY29uc3QgZmF2b3JpdGVzQ2FsZW5kYXIgICAgID0gbmV3RWxlbWVudCgnbGknKVxuICBjb25zdCBwcm9qZWN0c0hlYWRlciAgICAgICAgPSBuZXdFbGVtZW50KCdsaScsICdsaXN0LWhlYWRlcicsICdwcm9qLWhlYWRlcicpXG4gIGNvbnN0IHByb2plY3RzUGVyc29uYWwgICAgICA9IG5ld0VsZW1lbnQoJ2xpJylcbiAgY29uc3QgcHJvamVjdHNXb3JrICAgICAgICAgID0gbmV3RWxlbWVudCgnbGknKVxuXG4gIC8vIFByb2plY3Qgc3ViLWl0ZW1zXG4gIGNvbnN0IHBlcnNvbmFsSG9tZSAgID0gbmV3RWxlbWVudCgnbGknKVxuICBjb25zdCBwZXJzb25hbEZhbWlseSA9IG5ld0VsZW1lbnQoJ2xpJylcblxuICAvLyBBZGQgdGV4dCB0byBlYWNoIGl0ZW1cbiAgbWFpblRvZGF5LnRleHRDb250ZW50ICAgICAgICAgICAgID0gJ1RvZGF5J1xuICBtYWluVXBjb21pbmcudGV4dENvbnRlbnQgICAgICAgICAgPSAnVXBjb21pbmcnXG4gIG1haW5GaWx0ZXIudGV4dENvbnRlbnQgICAgICAgICAgICA9ICdGaWx0ZXJzICYgTGFiZWxzJ1xuICBmYXZvcml0ZXNIZWFkZXIudGV4dENvbnRlbnQgICAgICAgPSAnRmF2b3JpdGVzJ1xuICBmYXZvcml0ZXNIaWdoUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnSGlnaGVzdCBQcmlvcml0eSdcbiAgZmF2b3JpdGVzUmVjdXJyaW5nLnRleHRDb250ZW50ICAgID0gJ1JlY3VycmluZydcbiAgZmF2b3JpdGVzQ2FsZW5kYXIudGV4dENvbnRlbnQgICAgID0gJ0NhbGVuZGFyJ1xuICBwcm9qZWN0c0hlYWRlci50ZXh0Q29udGVudCAgICAgICAgPSAnUHJvamVjdHMnXG4gIHByb2plY3RzUGVyc29uYWwudGV4dENvbnRlbnQgICAgICA9ICdQZXJzb25hbCdcbiAgcHJvamVjdHNXb3JrLnRleHRDb250ZW50ICAgICAgICAgID0gJ1dvcmsnXG5cbiAgLy8gQWRkIHRleHQgdG8gcHJvamVjdCBzdWItaXRlbXNcbiAgcGVyc29uYWxIb21lLnRleHRDb250ZW50ICAgPSAnSG9tZSdcbiAgcGVyc29uYWxGYW1pbHkudGV4dENvbnRlbnQgPSAnRmFtaWx5J1xuXG4gIC8vIEFkZCBpY29uKHMpIHRvIGVhY2ggaXRlbVxuICBtYWluVG9kYXkucHJlcGVuZCh0b2RheUljb24pXG4gIG1haW5VcGNvbWluZy5wcmVwZW5kKHVwY29taW5nSWNvbilcbiAgbWFpbkZpbHRlci5wcmVwZW5kKGZpbHRlckljb24pXG4gIGZhdm9yaXRlc0hlYWRlci5wcmVwZW5kKG5ld0ltZyhjaGV2cm9uRG93blN2ZykpXG4gIGZhdm9yaXRlc0hpZ2hQcmlvcml0eS5wcmVwZW5kKGhpZ2hQcmlvcml0eUljb24pXG4gIGZhdm9yaXRlc1JlY3VycmluZy5wcmVwZW5kKHJlY3VycmluZ0ljb24pXG4gIGZhdm9yaXRlc0NhbGVuZGFyLnByZXBlbmQoY2FsZW5kYXJJY29uKVxuICBwcm9qZWN0c0hlYWRlci5wcmVwZW5kKG5ld0ltZyhjaGV2cm9uRG93blN2ZykpXG4gIHByb2plY3RzUGVyc29uYWwucHJlcGVuZChjaXJjbGVHcmVlbkljb24pXG4gIHByb2plY3RzUGVyc29uYWwucHJlcGVuZChuZXdJbWcoY2hldnJvbkRvd25TbWFsbFN2ZykpXG4gIHByb2plY3RzV29yay5wcmVwZW5kKGNpcmNsZUJsdWVJY29uKVxuICBwcm9qZWN0c1dvcmsucHJlcGVuZChuZXdJbWcoY2hldnJvbkRvd25TbWFsbFN2ZykpXG5cbiAgcGVyc29uYWxIb21lLnByZXBlbmQobmV3SW1nKGNpcmNsZUdyZWVuU3ZnKSlcbiAgcGVyc29uYWxGYW1pbHkucHJlcGVuZChuZXdJbWcoY2lyY2xlR3JlZW5TdmcpKVxuXG4gIC8vIEFkZCAnZXh0cmEtY2hldnJvbicgY2xhc3MgdG8gaXRlbXMgdGhhdCBoYXZlIHR3byBpY29uc1xuICBwcm9qZWN0c1BlcnNvbmFsLmNsYXNzTGlzdC5hZGQoJ2V4dHJhLWNoZXZyb24nKVxuICBwcm9qZWN0c1dvcmsuY2xhc3NMaXN0LmFkZCgnZXh0cmEtY2hldnJvbicpXG5cbiAgLy8gQWRkIGRhdGFzZXQgdG8gcHJvamVjdCBjYXRlZ29yeSBncm91cGVyc1xuICBwcm9qZWN0c1BlcnNvbmFsLmRhdGFzZXQuaXNQcm9qUGFyZW50ID0gJzEnXG4gIHByb2plY3RzUGVyc29uYWwuZGF0YXNldC5wcm9qTmFtZSA9ICdwZXJzb25hbCdcbiAgcGVyc29uYWxIb21lLmRhdGFzZXQuaXNQcm9qQ2hpbGQgPSAnMSdcbiAgcGVyc29uYWxIb21lLmRhdGFzZXQucHJvalBhcmVudCA9ICdwZXJzb25hbCdcbiAgcGVyc29uYWxGYW1pbHkuZGF0YXNldC5pc1Byb2pDaGlsZCA9ICcxJ1xuICBwZXJzb25hbEZhbWlseS5kYXRhc2V0LnByb2pQYXJlbnQgPSAncGVyc29uYWwnXG5cbiAgLy8gUHV0dGluZyBldmVyeXRoaW5nIHRvZ2V0aGVyXG4gIHNpZGViYXJDb250YWluZXJcbiAgICAuYXBwZW5kQ2hpbGQobWFpblRhc2tzQ29udGFpbmVyKVxuICAgIC5hcHBlbmRDaGlsZCh1bE1haW4pXG4gICAgLmFwcGVuZChcbiAgICAgIG1haW5Ub2RheSxcbiAgICAgIG1haW5VcGNvbWluZyxcbiAgICAgIG1haW5GaWx0ZXJcbiAgICApXG5cbiAgc2lkZWJhckNvbnRhaW5lclxuICAgIC5hcHBlbmRDaGlsZChmYXZvcml0ZXNDb250YWluZXIpXG4gICAgLmFwcGVuZENoaWxkKHVsRmF2b3JpdGVzKVxuICAgIC5hcHBlbmQoXG4gICAgICBmYXZvcml0ZXNIZWFkZXIsXG4gICAgICBmYXZvcml0ZXNIaWdoUHJpb3JpdHksXG4gICAgICBmYXZvcml0ZXNSZWN1cnJpbmcsXG4gICAgICBmYXZvcml0ZXNDYWxlbmRhclxuICAgIClcbiAgXG4gIHNpZGViYXJDb250YWluZXJcbiAgICAuYXBwZW5kQ2hpbGQoUHJvamVjdHNDb250YWluZXIpXG4gICAgLmFwcGVuZENoaWxkKHVsUHJvamVjdHMpXG4gICAgLmFwcGVuZChcbiAgICAgIHByb2plY3RzSGVhZGVyLFxuICAgICAgcHJvamVjdHNQZXJzb25hbCxcbiAgICAgIHBlcnNvbmFsSG9tZSxcbiAgICAgIHBlcnNvbmFsRmFtaWx5LFxuICAgICAgcHJvamVjdHNXb3JrXG4gICAgKVxuXG4gIHJldHVybiBzaWRlYmFyQ29udGFpbmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkU2lkZWJhciIsImZ1bmN0aW9uIG5ld0VsZW1lbnQodHlwZSwgLi4uY2xhc3Nlcykge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG4gIGNsYXNzZXMuZm9yRWFjaCgoY2wpID0+IHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsKVxuICB9KVxuICByZXR1cm4gZWxcbn1cblxuZnVuY3Rpb24gbmV3SW1nKHNyYykge1xuICBsZXQgdG1wID0gbmV3IEltYWdlKClcbiAgdG1wLnNyYyA9IHNyY1xuICByZXR1cm4gdG1wXG59XG5cbmV4cG9ydCB7IG5ld0VsZW1lbnQsIG5ld0ltZyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgeyBuZXdFbGVtZW50LCBuZXdJbWcgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucydcbmltcG9ydCBidWlsZEhlYWRlciBmcm9tICcuL2J1aWxkSGVhZGVyJ1xuaW1wb3J0IGJ1aWxkU2lkZWJhciBmcm9tICcuL2J1aWxkU2lkZWJhcidcblxuaW1wb3J0IHZpZXdTdmcgZnJvbSAnLi9tZWRpYS90dW5lLnN2ZydcbmNvbnN0IHZpZXdJY29uID0gbmV3SW1nKHZpZXdTdmcpXG5cbmNvbnN0IENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbmNvbnN0IGhlYWRlciA9IGJ1aWxkSGVhZGVyKClcbmNvbnN0IHNpZGViYXIgPSBidWlsZFNpZGViYXIoKVxuXG5jb25zdCBtYWluID0gbmV3RWxlbWVudCgnZGl2JywgJ21haW4tY29udGFpbmVyJylcblxuY29uc3QgbWFpbkhlYWRlckNvbnRhaW5lciA9IG5ld0VsZW1lbnQoJ2RpdicsICdtYWluLWhlYWRlci1jb250YWluZXInKVxuY29uc3QgbWFpbkhlYWRlciA9IG5ld0VsZW1lbnQoJ2gzJylcbm1haW5IZWFkZXIudGV4dENvbnRlbnQgPSAnVG9kYXknXG5cbmNvbnN0IG1haW5GaWx0ZXIgPSBuZXdFbGVtZW50KCdkaXYnKVxubWFpbkZpbHRlci50ZXh0Q29udGVudCA9ICdWaWV3J1xubWFpbkZpbHRlci5wcmVwZW5kKHZpZXdJY29uKVxuXG5jb25zdCBwcmFjdGljZVRhc2sgPSBuZXdFbGVtZW50KCdkaXYnKVxuY29uc3QgcHJhY1Rhc2tSYWRpbyA9IG5ld0VsZW1lbnQoJ2lucHV0JylcbnByYWNUYXNrUmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbmNvbnN0IHByYWNUYXNrID0gbmV3RWxlbWVudCgnZGl2JylcbnByYWNUYXNrLnRleHRDb250ZW50ID0gJ1JlYWQgd29yayBlbWFpbHMnXG5jb25zdCBwcmFjVGltZSA9IG5ld0VsZW1lbnQoJ2RpdicpXG5cbnByYWN0aWNlVGFzay5hcHBlbmQoXG4gIHByYWNUYXNrUmFkaW8sXG4gIHByYWNUYXNrXG4pXG5cbm1haW5cbi5hcHBlbmRDaGlsZChtYWluSGVhZGVyQ29udGFpbmVyKVxuLmFwcGVuZChtYWluSGVhZGVyLCBtYWluRmlsdGVyKVxuXG5tYWluLmFwcGVuZChcbiAgcHJhY3RpY2VUYXNrLFxuICBuZXdFbGVtZW50KCdkaXYnKSxcbiAgbmV3RWxlbWVudCgnZGl2JyksXG4gIG5ld0VsZW1lbnQoJ2RpdicpKVxuXG4vKlxuXG5jb25zdCBtb2RhbCA9IG5ld0VsZW1lbnQoJ2RpdicsICdtb2RhbCcpXG5jb25zdCBtb2RhbENvbnRlbnQgPSBuZXdFbGVtZW50KCdkaXYnLCAnbW9kYWwtY29udGVudCcpXG5tb2RhbC5hcHBlbmQobW9kYWxDb250ZW50KVxubWFpbi5hcHBlbmQobW9kYWwpXG5cbiovXG5cbkNvbnRlbnQuYXBwZW5kKGhlYWRlciwgc2lkZWJhciwgbWFpbilcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==