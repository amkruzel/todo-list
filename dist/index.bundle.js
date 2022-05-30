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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color-background: #ededed;\n  --color-primary: #ffa41b;\n  --color-secondary: #ff5151;\n  --color-tertiary: #9818d6;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-family: 'Raleway', sans-serif;\n}\n\n.content {\n  display: grid;\n  grid-template:\n    \"header header\" 50px \n    \"sidebar main\" max(calc(100vh - 50px), 600px) \n    / 250px auto;\n}\n\n/*////////\n/ Header /\n////////*/\n\n.header {\n  grid-area: header;\n\n  background-color: var(--color-secondary);\n  font-size: 30px;\n  color: var(--color-background);\n  padding-left: 30px;\n  padding-top: 4px;\n}\n\n.header button {\n  color: var(--color-background);\n  background-color: rgba(234, 234, 234, .2);\n  padding: 6px 8px;\n  margin: 3px 40px;\n  border: none;\n  border-radius: 7px;\n  font-size: 18px;\n  float: right;\n}\n\n.header button:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, .15);\n}\n\n/*/////////\n/ Sidebar /\n/////////*/\n\n.sidebar-container {\n  grid-area: sidebar;\n\n  background-color: #fafafa;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.sidebar-container > div {\n  display: grid;\n  padding: 12px 10px 8px 20px;\n  border-radius: 5px;\n}\n\n.sidebar-container ul {\n  display: grid;\n  gap: 2px;\n}\n\nli {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: start;\n  justify-items: start;\n  gap: 7px;\n  grid-template-columns: 24px auto 1fr;\n  align-items: center;\n  list-style: none;\n  height: min-content;\n  border-radius: 8px;\n  padding: 4px 10px;\n}\n\nli.extra-chevron {\n  padding: 4px 0px;\n  position: relative;\n  width: 183px;\n  left: -15px;\n}\n\nli.extra-chevron img:last-child {\n  padding-right: 5px;\n}\n\nli img {\n  justify-self: center;\n}\n\n.sidebar-container span {\n  width: max-content;\n  justify-self: end;\n  color: #555;\n}\n\nli:hover {\n  cursor: pointer;\n  transform: translateX(2px);\n  border-left: 3px solid var(--color-secondary);\n  border-radius: 8px;\n}\n\n.selected-li {\n  background-color: #eaeaea;\n}\n\n.list-header {\n  font-weight: 600;\n}\n\n.proj-header {\n  width: 148px;\n}\n\nli[data-is-proj-child='1'] {\n  margin-left: 24px;\n}\n\n/*//////\n/ Main /\n//////*/\n\n.main-container {\n  display: grid;\n  align-items: center;\n  grid-template-rows: 40px auto;\n  margin: 30px 30px 30px 60px;\n  border: 1px solid red;\n}\n\n.main-header-container {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 100px auto;\n}\n\n.main-header-container div {\n  justify-self: end;\n  \n  display: grid;\n  grid-auto-flow: column;\n  justify-content: start;\n  justify-items: start;\n  gap: 7px;\n  grid-template-columns: 24px auto 1fr;\n  align-items: center;\n  list-style: none;\n  height: min-content;\n  border-radius: 8px;\n  padding: 4px 10px;\n\n  font-size: 16px;\n  color: rgb(96, 96, 96);\n}\n\n.main-header-container div img {\n  padding-right: 5px;\n}\n\n.modal {\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n  width: 80%;\n  height: 300px;\n  background-color: rgba(0, 0, 0, .15);\n  margin: 15% auto;\n  border-radius: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,wBAAwB;EACxB,0BAA0B;EAC1B,yBAAyB;AAC3B;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb;;;gBAGc;AAChB;;AAEA;;SAES;;AAET;EACE,iBAAiB;;EAEjB,wCAAwC;EACxC,eAAe;EACf,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;EAC9B,yCAAyC;EACzC,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,eAAe;EACf,oCAAoC;AACtC;;AAEA;;UAEU;;AAEV;EACE,kBAAkB;;EAElB,yBAAyB;EACzB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,oBAAoB;EACpB,QAAQ;EACR,oCAAoC;EACpC,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,0BAA0B;EAC1B,6CAA6C;EAC7C,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;OAEO;;AAEP;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,2BAA2B;EAC3B,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iCAAiC;AACnC;;AAEA;EACE,iBAAiB;;EAEjB,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,oBAAoB;EACpB,QAAQ;EACR,oCAAoC;EACpC,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;;EAEjB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,4BAA4B,EAAE,mBAAmB;EACjD,iCAAiC,EAAE,qBAAqB;AAC1D;;AAEA;EACE,UAAU;EACV,aAAa;EACb,oCAAoC;EACpC,gBAAgB;EAChB,mBAAmB;AACrB","sourcesContent":[":root {\n  --color-background: #ededed;\n  --color-primary: #ffa41b;\n  --color-secondary: #ff5151;\n  --color-tertiary: #9818d6;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-family: 'Raleway', sans-serif;\n}\n\n.content {\n  display: grid;\n  grid-template:\n    \"header header\" 50px \n    \"sidebar main\" max(calc(100vh - 50px), 600px) \n    / 250px auto;\n}\n\n/*////////\n/ Header /\n////////*/\n\n.header {\n  grid-area: header;\n\n  background-color: var(--color-secondary);\n  font-size: 30px;\n  color: var(--color-background);\n  padding-left: 30px;\n  padding-top: 4px;\n}\n\n.header button {\n  color: var(--color-background);\n  background-color: rgba(234, 234, 234, .2);\n  padding: 6px 8px;\n  margin: 3px 40px;\n  border: none;\n  border-radius: 7px;\n  font-size: 18px;\n  float: right;\n}\n\n.header button:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, .15);\n}\n\n/*/////////\n/ Sidebar /\n/////////*/\n\n.sidebar-container {\n  grid-area: sidebar;\n\n  background-color: #fafafa;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.sidebar-container > div {\n  display: grid;\n  padding: 12px 10px 8px 20px;\n  border-radius: 5px;\n}\n\n.sidebar-container ul {\n  display: grid;\n  gap: 2px;\n}\n\nli {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: start;\n  justify-items: start;\n  gap: 7px;\n  grid-template-columns: 24px auto 1fr;\n  align-items: center;\n  list-style: none;\n  height: min-content;\n  border-radius: 8px;\n  padding: 4px 10px;\n}\n\nli.extra-chevron {\n  padding: 4px 0px;\n  position: relative;\n  width: 183px;\n  left: -15px;\n}\n\nli.extra-chevron img:last-child {\n  padding-right: 5px;\n}\n\nli img {\n  justify-self: center;\n}\n\n.sidebar-container span {\n  width: max-content;\n  justify-self: end;\n  color: #555;\n}\n\nli:hover {\n  cursor: pointer;\n  transform: translateX(2px);\n  border-left: 3px solid var(--color-secondary);\n  border-radius: 8px;\n}\n\n.selected-li {\n  background-color: #eaeaea;\n}\n\n.list-header {\n  font-weight: 600;\n}\n\n.proj-header {\n  width: 148px;\n}\n\nli[data-is-proj-child='1'] {\n  margin-left: 24px;\n}\n\n/*//////\n/ Main /\n//////*/\n\n.main-container {\n  display: grid;\n  align-items: center;\n  grid-template-rows: 40px auto;\n  margin: 30px 30px 30px 60px;\n  border: 1px solid red;\n}\n\n.main-header-container {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 100px auto;\n}\n\n.main-header-container div {\n  justify-self: end;\n  \n  display: grid;\n  grid-auto-flow: column;\n  justify-content: start;\n  justify-items: start;\n  gap: 7px;\n  grid-template-columns: 24px auto 1fr;\n  align-items: center;\n  list-style: none;\n  height: min-content;\n  border-radius: 8px;\n  padding: 4px 10px;\n\n  font-size: 16px;\n  color: rgb(96, 96, 96);\n}\n\n.main-header-container div img {\n  padding-right: 5px;\n}\n\n.modal {\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n  width: 80%;\n  height: 300px;\n  background-color: rgba(0, 0, 0, .15);\n  margin: 15% auto;\n  border-radius: 10px;\n}"],"sourceRoot":""}]);
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



main
.appendChild(mainHeaderContainer)
.append(mainHeader, mainFilter)


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNrQztBQUNmO0FBQ0U7O0FBRUg7QUFDdEMsaUJBQWlCLHdEQUFNLENBQUMsNENBQU87O0FBRS9COztBQUVBLGVBQWUsd0RBQVc7QUFDMUIsZ0JBQWdCLHlEQUFZOztBQUU1QixhQUFhLDREQUFVOztBQUV2Qiw0QkFBNEIsNERBQVU7QUFDdEMsbUJBQW1CLDREQUFVO0FBQzdCOztBQUVBLG1CQUFtQiw0REFBVTtBQUM3QjtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvYnVpbGRIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2J1aWxkU2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaGVscGVyRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNvbG9yLWJhY2tncm91bmQ6ICNlZGVkZWQ7XFxuICAtLWNvbG9yLXByaW1hcnk6ICNmZmE0MWI7XFxuICAtLWNvbG9yLXNlY29uZGFyeTogI2ZmNTE1MTtcXG4gIC0tY29sb3ItdGVydGlhcnk6ICM5ODE4ZDY7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiIDUwcHggXFxuICAgIFxcXCJzaWRlYmFyIG1haW5cXFwiIG1heChjYWxjKDEwMHZoIC0gNTBweCksIDYwMHB4KSBcXG4gICAgLyAyNTBweCBhdXRvO1xcbn1cXG5cXG4vKi8vLy8vLy8vXFxuLyBIZWFkZXIgL1xcbi8vLy8vLy8vKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIHBhZGRpbmctdG9wOiA0cHg7XFxufVxcblxcbi5oZWFkZXIgYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM0LCAyMzQsIDIzNCwgLjIpO1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG4gIG1hcmdpbjogM3B4IDQwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5oZWFkZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjE1KTtcXG59XFxuXFxuLyovLy8vLy8vLy9cXG4vIFNpZGViYXIgL1xcbi8vLy8vLy8vLyovXFxuXFxuLnNpZGViYXItY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uc2lkZWJhci1jb250YWluZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDEycHggMTBweCA4cHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNpZGViYXItY29udGFpbmVyIHVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDJweDtcXG59XFxuXFxubGkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICBnYXA6IDdweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjRweCBhdXRvIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xcbn1cXG5cXG5saS5leHRyYS1jaGV2cm9uIHtcXG4gIHBhZGRpbmc6IDRweCAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTgzcHg7XFxuICBsZWZ0OiAtMTVweDtcXG59XFxuXFxubGkuZXh0cmEtY2hldnJvbiBpbWc6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbmxpIGltZyB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXItY29udGFpbmVyIHNwYW4ge1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBjb2xvcjogIzU1NTtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5zZWxlY3RlZC1saSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xcbn1cXG5cXG4ubGlzdC1oZWFkZXIge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnByb2otaGVhZGVyIHtcXG4gIHdpZHRoOiAxNDhweDtcXG59XFxuXFxubGlbZGF0YS1pcy1wcm9qLWNoaWxkPScxJ10ge1xcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxufVxcblxcbi8qLy8vLy8vXFxuLyBNYWluIC9cXG4vLy8vLy8qL1xcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCBhdXRvO1xcbiAgbWFyZ2luOiAzMHB4IDMwcHggMzBweCA2MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCBhdXRvO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXItY29udGFpbmVyIGRpdiB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIFxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICBnYXA6IDdweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjRweCBhdXRvIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xcblxcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHJnYig5NiwgOTYsIDk2KTtcXG59XFxuXFxuLm1haW4taGVhZGVyLWNvbnRhaW5lciBkaXYgaW1nIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xNSk7XFxuICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7OztnQkFHYztBQUNoQjs7QUFFQTs7U0FFUzs7QUFFVDtFQUNFLGlCQUFpQjs7RUFFakIsd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix5Q0FBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0NBQW9DO0FBQ3RDOztBQUVBOztVQUVVOztBQUVWO0VBQ0Usa0JBQWtCOztFQUVsQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixRQUFRO0VBQ1Isb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsNkNBQTZDO0VBQzdDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7T0FFTzs7QUFFUDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGlCQUFpQjs7RUFFakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLFFBQVE7RUFDUixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjs7RUFFakIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0VBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtBQUMxRDs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjZWRlZGVkO1xcbiAgLS1jb2xvci1wcmltYXJ5OiAjZmZhNDFiO1xcbiAgLS1jb2xvci1zZWNvbmRhcnk6ICNmZjUxNTE7XFxuICAtLWNvbG9yLXRlcnRpYXJ5OiAjOTgxOGQ2O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIiA1MHB4IFxcbiAgICBcXFwic2lkZWJhciBtYWluXFxcIiBtYXgoY2FsYygxMDB2aCAtIDUwcHgpLCA2MDBweCkgXFxuICAgIC8gMjUwcHggYXV0bztcXG59XFxuXFxuLyovLy8vLy8vL1xcbi8gSGVhZGVyIC9cXG4vLy8vLy8vLyovXFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBwYWRkaW5nLXRvcDogNHB4O1xcbn1cXG5cXG4uaGVhZGVyIGJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNCwgMjM0LCAyMzQsIC4yKTtcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICBtYXJnaW46IDNweCA0MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4uaGVhZGVyIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xNSk7XFxufVxcblxcbi8qLy8vLy8vLy8vXFxuLyBTaWRlYmFyIC9cXG4vLy8vLy8vLy8qL1xcblxcbi5zaWRlYmFyLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnNpZGViYXItY29udGFpbmVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAxMnB4IDEwcHggOHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciB1bCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbmxpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgZ2FwOiA3cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0cHggYXV0byAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA0cHggMTBweDtcXG59XFxuXFxubGkuZXh0cmEtY2hldnJvbiB7XFxuICBwYWRkaW5nOiA0cHggMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDE4M3B4O1xcbiAgbGVmdDogLTE1cHg7XFxufVxcblxcbmxpLmV4dHJhLWNoZXZyb24gaW1nOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG5cXG5saSBpbWcge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciBzcGFuIHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgY29sb3I6ICM1NTU7XFxufVxcblxcbmxpOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQtbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcXG59XFxuXFxuLmxpc3QtaGVhZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5wcm9qLWhlYWRlciB7XFxuICB3aWR0aDogMTQ4cHg7XFxufVxcblxcbmxpW2RhdGEtaXMtcHJvai1jaGlsZD0nMSddIHtcXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xcbn1cXG5cXG4vKi8vLy8vL1xcbi8gTWFpbiAvXFxuLy8vLy8vKi9cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggYXV0bztcXG4gIG1hcmdpbjogMzBweCAzMHB4IDMwcHggNjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLm1haW4taGVhZGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggYXV0bztcXG59XFxuXFxuLm1haW4taGVhZGVyLWNvbnRhaW5lciBkaXYge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgZ2FwOiA3cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0cHggYXV0byAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA0cHggMTBweDtcXG5cXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiByZ2IoOTYsIDk2LCA5Nik7XFxufVxcblxcbi5tYWluLWhlYWRlci1jb250YWluZXIgZGl2IGltZyB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMTUpO1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbmV3RWxlbWVudCB9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9uc1wiXG5cbmNvbnN0IGJ1aWxkSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBuZXdFbGVtZW50KCdkaXYnLCAnaGVhZGVyJylcbiAgY29uc3QgbmV3VGFza0J0biA9IG5ld0VsZW1lbnQoJ2J1dHRvbicsICduZXctdGFzay1idG4nKVxuXG4gIG5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSAnTmV3IFRhc2snXG4gIGhlYWRlci50ZXh0Q29udGVudCA9ICcvLyBUTy1ETydcbiAgXG4gIGhlYWRlci5hcHBlbmQobmV3VGFza0J0bilcblxuICByZXR1cm4gaGVhZGVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkSGVhZGVyIiwiaW1wb3J0IHsgbmV3RWxlbWVudCwgbmV3SW1nIH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnXG5cbmltcG9ydCB0b2RheVN2ZyAgICAgICAgZnJvbSAnLi9tZWRpYS9jYWxlbmRhci1hbGVydC5zdmcnXG5pbXBvcnQgdXBjb21pbmdTdmcgICAgIGZyb20gJy4vbWVkaWEvY2FsZW5kYXItbW9udGgtb3V0bGluZS5zdmcnXG5pbXBvcnQgZmlsdGVyU3ZnICAgICAgIGZyb20gJy4vbWVkaWEvaW1hZ2UtZmlsdGVyLW5vbmUuc3ZnJ1xuaW1wb3J0IGhpZ2hQcmlvcml0eVN2ZyBmcm9tICcuL21lZGlhL3dhdGVyLXJlZC5zdmcnXG5pbXBvcnQgcmVjdXJyaW5nU3ZnICAgIGZyb20gJy4vbWVkaWEvd2F0ZXItb3JhbmdlLnN2ZydcbmltcG9ydCBjYWxlbmRhclN2ZyAgICAgZnJvbSAnLi9tZWRpYS90YWcuc3ZnJ1xuaW1wb3J0IGNpcmNsZUdyZWVuU3ZnICBmcm9tICcuL21lZGlhL2NpcmNsZS1ncmVlbi5zdmcnXG5pbXBvcnQgY2lyY2xlQmx1ZVN2ZyAgIGZyb20gJy4vbWVkaWEvY2lyY2xlLWJsdWUuc3ZnJ1xuXG5pbXBvcnQgY2hldnJvbkRvd25TdmcgICAgICBmcm9tICcuL21lZGlhL2NoZXZyb24tZG93bi5zdmcnXG5pbXBvcnQgY2hldnJvblJpZ2h0U3ZnICAgICBmcm9tICcuL21lZGlhL2NoZXZyb24tcmlnaHQuc3ZnJ1xuaW1wb3J0IGNoZXZyb25Eb3duU21hbGxTdmcgZnJvbSAnLi9tZWRpYS9jaGV2cm9uLWRvd24tc21hbGwuc3ZnJ1xuXG5jb25zdCBidWlsZFNpZGViYXIgPSAoKSA9PiB7XG5cbiAgLyogXG4gIFxuICBJZiBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgYW4gaWNvbiBhcmUgbmVlZGVkLCBtdXN0IHVzZSBuZXdJbWcgZm9yIGVhY2ggaW5zdGFuY2VcblxuICBUaGVyZWZvcmUgd2hlbiB1c2luZyB0aGUgZm9sbG93aW5nIGljb25zLCB5b3UgbXVzdCBjYWxsIG5ld0ltZyBvbiB0aGUgc3ZnIGVsZW1lbnQgcmF0aGVyIHRoYW4gdXNpbmcgYW4gSWNvbiBjb25zdDpcblxuICBjaGV2cm9uRG93blN2Z1xuICBjaGV2cm9uUmlnaHRTdmdcbiAgY2hldnJvbkRvd25TbWFsbFN2Z1xuICBjaGV2cm9uUmlnaHRTbWFsbFN2Z1xuXG4gICovXG5cbiAgLy8gSWNvbnNcbiAgY29uc3QgdG9kYXlJY29uICAgICAgICA9IG5ld0ltZyh0b2RheVN2ZylcbiAgY29uc3QgdXBjb21pbmdJY29uICAgICA9IG5ld0ltZyh1cGNvbWluZ1N2ZylcbiAgY29uc3QgZmlsdGVySWNvbiAgICAgICA9IG5ld0ltZyhmaWx0ZXJTdmcpXG4gIGNvbnN0IGhpZ2hQcmlvcml0eUljb24gPSBuZXdJbWcoaGlnaFByaW9yaXR5U3ZnKVxuICBjb25zdCByZWN1cnJpbmdJY29uICAgID0gbmV3SW1nKHJlY3VycmluZ1N2ZylcbiAgY29uc3QgY2FsZW5kYXJJY29uICAgICA9IG5ld0ltZyhjYWxlbmRhclN2ZylcbiAgY29uc3QgY2lyY2xlR3JlZW5JY29uICA9IG5ld0ltZyhjaXJjbGVHcmVlblN2ZylcbiAgY29uc3QgY2lyY2xlQmx1ZUljb24gICA9IG5ld0ltZyhjaXJjbGVCbHVlU3ZnKVxuICBcbiAgLy8gRGl2IGNvbnRhaW5lcnNcbiAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IG5ld0VsZW1lbnQoJ2RpdicsICdzaWRlYmFyLWNvbnRhaW5lcicpXG5cbiAgY29uc3QgbWFpblRhc2tzQ29udGFpbmVyID0gbmV3RWxlbWVudCgnZGl2JylcbiAgY29uc3QgZmF2b3JpdGVzQ29udGFpbmVyID0gbmV3RWxlbWVudCgnZGl2JylcbiAgY29uc3QgUHJvamVjdHNDb250YWluZXIgID0gbmV3RWxlbWVudCgnZGl2JylcbiAgXG4gIGNvbnN0IHVsTWFpbiAgICAgID0gbmV3RWxlbWVudCgndWwnKVxuICBjb25zdCB1bEZhdm9yaXRlcyA9IG5ld0VsZW1lbnQoJ3VsJylcbiAgY29uc3QgdWxQcm9qZWN0cyAgPSBuZXdFbGVtZW50KCd1bCcpXG5cbiAgLy8gSW5kaXZpZHVhbCBsaXN0IGl0ZW1zXG4gIGNvbnN0IG1haW5Ub2RheSAgICAgICAgICAgICA9IG5ld0VsZW1lbnQoJ2xpJywgJ3NlbGVjdGVkLWxpJylcbiAgY29uc3QgbWFpblVwY29taW5nICAgICAgICAgID0gbmV3RWxlbWVudCgnbGknKVxuICBjb25zdCBtYWluRmlsdGVyICAgICAgICAgICAgPSBuZXdFbGVtZW50KCdsaScpXG4gIGNvbnN0IGZhdm9yaXRlc0hlYWRlciAgICAgICA9IG5ld0VsZW1lbnQoJ2xpJywgJ2xpc3QtaGVhZGVyJylcbiAgY29uc3QgZmF2b3JpdGVzSGlnaFByaW9yaXR5ID0gbmV3RWxlbWVudCgnbGknKVxuICBjb25zdCBmYXZvcml0ZXNSZWN1cnJpbmcgICAgPSBuZXdFbGVtZW50KCdsaScpXG4gIGNvbnN0IGZhdm9yaXRlc0NhbGVuZGFyICAgICA9IG5ld0VsZW1lbnQoJ2xpJylcbiAgY29uc3QgcHJvamVjdHNIZWFkZXIgICAgICAgID0gbmV3RWxlbWVudCgnbGknLCAnbGlzdC1oZWFkZXInLCAncHJvai1oZWFkZXInKVxuICBjb25zdCBwcm9qZWN0c1BlcnNvbmFsICAgICAgPSBuZXdFbGVtZW50KCdsaScpXG4gIGNvbnN0IHByb2plY3RzV29yayAgICAgICAgICA9IG5ld0VsZW1lbnQoJ2xpJylcblxuICAvLyBQcm9qZWN0IHN1Yi1pdGVtc1xuICBjb25zdCBwZXJzb25hbEhvbWUgICA9IG5ld0VsZW1lbnQoJ2xpJylcbiAgY29uc3QgcGVyc29uYWxGYW1pbHkgPSBuZXdFbGVtZW50KCdsaScpXG5cbiAgLy8gQWRkIHRleHQgdG8gZWFjaCBpdGVtXG4gIG1haW5Ub2RheS50ZXh0Q29udGVudCAgICAgICAgICAgICA9ICdUb2RheSdcbiAgbWFpblVwY29taW5nLnRleHRDb250ZW50ICAgICAgICAgID0gJ1VwY29taW5nJ1xuICBtYWluRmlsdGVyLnRleHRDb250ZW50ICAgICAgICAgICAgPSAnRmlsdGVycyAmIExhYmVscydcbiAgZmF2b3JpdGVzSGVhZGVyLnRleHRDb250ZW50ICAgICAgID0gJ0Zhdm9yaXRlcydcbiAgZmF2b3JpdGVzSGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2hlc3QgUHJpb3JpdHknXG4gIGZhdm9yaXRlc1JlY3VycmluZy50ZXh0Q29udGVudCAgICA9ICdSZWN1cnJpbmcnXG4gIGZhdm9yaXRlc0NhbGVuZGFyLnRleHRDb250ZW50ICAgICA9ICdDYWxlbmRhcidcbiAgcHJvamVjdHNIZWFkZXIudGV4dENvbnRlbnQgICAgICAgID0gJ1Byb2plY3RzJ1xuICBwcm9qZWN0c1BlcnNvbmFsLnRleHRDb250ZW50ICAgICAgPSAnUGVyc29uYWwnXG4gIHByb2plY3RzV29yay50ZXh0Q29udGVudCAgICAgICAgICA9ICdXb3JrJ1xuXG4gIC8vIEFkZCB0ZXh0IHRvIHByb2plY3Qgc3ViLWl0ZW1zXG4gIHBlcnNvbmFsSG9tZS50ZXh0Q29udGVudCAgID0gJ0hvbWUnXG4gIHBlcnNvbmFsRmFtaWx5LnRleHRDb250ZW50ID0gJ0ZhbWlseSdcblxuICAvLyBBZGQgaWNvbihzKSB0byBlYWNoIGl0ZW1cbiAgbWFpblRvZGF5LnByZXBlbmQodG9kYXlJY29uKVxuICBtYWluVXBjb21pbmcucHJlcGVuZCh1cGNvbWluZ0ljb24pXG4gIG1haW5GaWx0ZXIucHJlcGVuZChmaWx0ZXJJY29uKVxuICBmYXZvcml0ZXNIZWFkZXIucHJlcGVuZChuZXdJbWcoY2hldnJvbkRvd25TdmcpKVxuICBmYXZvcml0ZXNIaWdoUHJpb3JpdHkucHJlcGVuZChoaWdoUHJpb3JpdHlJY29uKVxuICBmYXZvcml0ZXNSZWN1cnJpbmcucHJlcGVuZChyZWN1cnJpbmdJY29uKVxuICBmYXZvcml0ZXNDYWxlbmRhci5wcmVwZW5kKGNhbGVuZGFySWNvbilcbiAgcHJvamVjdHNIZWFkZXIucHJlcGVuZChuZXdJbWcoY2hldnJvbkRvd25TdmcpKVxuICBwcm9qZWN0c1BlcnNvbmFsLnByZXBlbmQoY2lyY2xlR3JlZW5JY29uKVxuICBwcm9qZWN0c1BlcnNvbmFsLnByZXBlbmQobmV3SW1nKGNoZXZyb25Eb3duU21hbGxTdmcpKVxuICBwcm9qZWN0c1dvcmsucHJlcGVuZChjaXJjbGVCbHVlSWNvbilcbiAgcHJvamVjdHNXb3JrLnByZXBlbmQobmV3SW1nKGNoZXZyb25Eb3duU21hbGxTdmcpKVxuXG4gIHBlcnNvbmFsSG9tZS5wcmVwZW5kKG5ld0ltZyhjaXJjbGVHcmVlblN2ZykpXG4gIHBlcnNvbmFsRmFtaWx5LnByZXBlbmQobmV3SW1nKGNpcmNsZUdyZWVuU3ZnKSlcblxuICAvLyBBZGQgJ2V4dHJhLWNoZXZyb24nIGNsYXNzIHRvIGl0ZW1zIHRoYXQgaGF2ZSB0d28gaWNvbnNcbiAgcHJvamVjdHNQZXJzb25hbC5jbGFzc0xpc3QuYWRkKCdleHRyYS1jaGV2cm9uJylcbiAgcHJvamVjdHNXb3JrLmNsYXNzTGlzdC5hZGQoJ2V4dHJhLWNoZXZyb24nKVxuXG4gIC8vIEFkZCBkYXRhc2V0IHRvIHByb2plY3QgY2F0ZWdvcnkgZ3JvdXBlcnNcbiAgcHJvamVjdHNQZXJzb25hbC5kYXRhc2V0LmlzUHJvalBhcmVudCA9ICcxJ1xuICBwcm9qZWN0c1BlcnNvbmFsLmRhdGFzZXQucHJvak5hbWUgPSAncGVyc29uYWwnXG4gIHBlcnNvbmFsSG9tZS5kYXRhc2V0LmlzUHJvakNoaWxkID0gJzEnXG4gIHBlcnNvbmFsSG9tZS5kYXRhc2V0LnByb2pQYXJlbnQgPSAncGVyc29uYWwnXG4gIHBlcnNvbmFsRmFtaWx5LmRhdGFzZXQuaXNQcm9qQ2hpbGQgPSAnMSdcbiAgcGVyc29uYWxGYW1pbHkuZGF0YXNldC5wcm9qUGFyZW50ID0gJ3BlcnNvbmFsJ1xuXG4gIC8vIFB1dHRpbmcgZXZlcnl0aGluZyB0b2dldGhlclxuICBzaWRlYmFyQ29udGFpbmVyXG4gICAgLmFwcGVuZENoaWxkKG1haW5UYXNrc0NvbnRhaW5lcilcbiAgICAuYXBwZW5kQ2hpbGQodWxNYWluKVxuICAgIC5hcHBlbmQoXG4gICAgICBtYWluVG9kYXksXG4gICAgICBtYWluVXBjb21pbmcsXG4gICAgICBtYWluRmlsdGVyXG4gICAgKVxuXG4gIHNpZGViYXJDb250YWluZXJcbiAgICAuYXBwZW5kQ2hpbGQoZmF2b3JpdGVzQ29udGFpbmVyKVxuICAgIC5hcHBlbmRDaGlsZCh1bEZhdm9yaXRlcylcbiAgICAuYXBwZW5kKFxuICAgICAgZmF2b3JpdGVzSGVhZGVyLFxuICAgICAgZmF2b3JpdGVzSGlnaFByaW9yaXR5LFxuICAgICAgZmF2b3JpdGVzUmVjdXJyaW5nLFxuICAgICAgZmF2b3JpdGVzQ2FsZW5kYXJcbiAgICApXG4gIFxuICBzaWRlYmFyQ29udGFpbmVyXG4gICAgLmFwcGVuZENoaWxkKFByb2plY3RzQ29udGFpbmVyKVxuICAgIC5hcHBlbmRDaGlsZCh1bFByb2plY3RzKVxuICAgIC5hcHBlbmQoXG4gICAgICBwcm9qZWN0c0hlYWRlcixcbiAgICAgIHByb2plY3RzUGVyc29uYWwsXG4gICAgICBwZXJzb25hbEhvbWUsXG4gICAgICBwZXJzb25hbEZhbWlseSxcbiAgICAgIHByb2plY3RzV29ya1xuICAgIClcblxuICByZXR1cm4gc2lkZWJhckNvbnRhaW5lclxufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZFNpZGViYXIiLCJmdW5jdGlvbiBuZXdFbGVtZW50KHR5cGUsIC4uLmNsYXNzZXMpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxuICBjbGFzc2VzLmZvckVhY2goKGNsKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbClcbiAgfSlcbiAgcmV0dXJuIGVsXG59XG5cbmZ1bmN0aW9uIG5ld0ltZyhzcmMpIHtcbiAgbGV0IHRtcCA9IG5ldyBJbWFnZSgpXG4gIHRtcC5zcmMgPSBzcmNcbiAgcmV0dXJuIHRtcFxufVxuXG5leHBvcnQgeyBuZXdFbGVtZW50LCBuZXdJbWcgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHsgbmV3RWxlbWVudCwgbmV3SW1nIH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnXG5pbXBvcnQgYnVpbGRIZWFkZXIgZnJvbSAnLi9idWlsZEhlYWRlcidcbmltcG9ydCBidWlsZFNpZGViYXIgZnJvbSAnLi9idWlsZFNpZGViYXInXG5cbmltcG9ydCB2aWV3U3ZnIGZyb20gJy4vbWVkaWEvdHVuZS5zdmcnXG5jb25zdCB2aWV3SWNvbiA9IG5ld0ltZyh2aWV3U3ZnKVxuXG5jb25zdCBDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG5jb25zdCBoZWFkZXIgPSBidWlsZEhlYWRlcigpXG5jb25zdCBzaWRlYmFyID0gYnVpbGRTaWRlYmFyKClcblxuY29uc3QgbWFpbiA9IG5ld0VsZW1lbnQoJ2RpdicsICdtYWluLWNvbnRhaW5lcicpXG5cbmNvbnN0IG1haW5IZWFkZXJDb250YWluZXIgPSBuZXdFbGVtZW50KCdkaXYnLCAnbWFpbi1oZWFkZXItY29udGFpbmVyJylcbmNvbnN0IG1haW5IZWFkZXIgPSBuZXdFbGVtZW50KCdoMycpXG5tYWluSGVhZGVyLnRleHRDb250ZW50ID0gJ1RvZGF5J1xuXG5jb25zdCBtYWluRmlsdGVyID0gbmV3RWxlbWVudCgnZGl2Jylcbm1haW5GaWx0ZXIudGV4dENvbnRlbnQgPSAnVmlldydcbm1haW5GaWx0ZXIucHJlcGVuZCh2aWV3SWNvbilcblxuXG5cbm1haW5cbi5hcHBlbmRDaGlsZChtYWluSGVhZGVyQ29udGFpbmVyKVxuLmFwcGVuZChtYWluSGVhZGVyLCBtYWluRmlsdGVyKVxuXG5cbi8qXG5cbmNvbnN0IG1vZGFsID0gbmV3RWxlbWVudCgnZGl2JywgJ21vZGFsJylcbmNvbnN0IG1vZGFsQ29udGVudCA9IG5ld0VsZW1lbnQoJ2RpdicsICdtb2RhbC1jb250ZW50Jylcbm1vZGFsLmFwcGVuZChtb2RhbENvbnRlbnQpXG5tYWluLmFwcGVuZChtb2RhbClcblxuKi9cblxuQ29udGVudC5hcHBlbmQoaGVhZGVyLCBzaWRlYmFyLCBtYWluKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9