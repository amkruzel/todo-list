/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color-background: #ededed;\n  --color-primary: #ffa41b;\n  --color-secondary: #ff5151;\n  --color-tertiary: #9818d6;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-family: 'Raleway', sans-serif !important;\n}\n\n.content {\n  display: grid;\n  grid-template:\n    \"header header\" 50px \n    \"sidebar main\" calc(100vh - 50px)\n    / 250px auto;\n}\n\n/*////////\n/ Header /\n////////*/\n\n.header {\n  grid-area: header;\n\n  background-color: var(--color-secondary);\n  font-size: 30px;\n  color: var(--color-background);\n  padding-left: 30px;\n  padding-top: 4px;\n}\n\n.header button {\n  color: var(--color-background);\n  background-color: rgba(234, 234, 234, .2);\n  padding: 6px 8px;\n  margin: 3px 40px;\n  border: none;\n  border-radius: 7px;\n  font-size: 18px;\n  float: right;\n}\n\n.header button:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, .15);\n}\n\n/*/////////\n/ Sidebar /\n/////////*/\n\n.sidebar-container {\n  grid-area: sidebar;\n\n  background-color: #fafafa;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.sidebar-container > div {\n  display: grid;\n  padding: 12px 10px 8px 20px;\n  border-radius: 5px;\n}\n\n.sidebar-container ul {\n  display: grid;\n  gap: 2px;\n}\n\nli {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: start;\n  justify-items: start;\n  gap: 7px;\n  grid-template-columns: 24px auto 1fr;\n  align-items: center;\n  list-style: none;\n  height: min-content;\n  border-radius: 8px;\n  padding: 4px 10px;\n}\n\nli.extra-chevron {\n  padding: 4px 0px;\n  position: relative;\n  width: 183px;\n  left: -15px;\n}\n\nli.extra-chevron img:last-child {\n  padding-right: 5px;\n}\n\nli img {\n  justify-self: center;\n}\n\n.sidebar-container span {\n  width: max-content;\n  justify-self: end;\n  color: #555;\n}\n\nli:hover {\n  cursor: pointer;\n  transform: translateX(2px);\n  border-left: 3px solid var(--color-secondary);\n  border-radius: 8px;\n}\n\n.selected-li {\n  background-color: #eaeaea;\n}\n\n.list-header {\n  font-weight: 600;\n}\n\n.proj-header {\n  width: 148px;\n}\n\nli[data-is-proj-child='1'] {\n  margin-left: 24px;\n}\n\n/*//////\n/ Main /\n//////*/\n\n.main-container {\n  display: grid;\n  align-items: center;\n  align-content: start;\n  grid-template-rows: 80px;\n  margin: 10px 15px 30px 60px;\n  padding-right: 15px;\n  overflow-y: scroll;\n}\n\n.main-header-container {\n  display: grid;\n  align-items: start;\n  grid-template-columns: 100px auto;\n}\n\n.main-header-container div {\n  justify-self: end;\n  \n  display: grid;\n  grid-auto-flow: column;\n  justify-content: start;\n  justify-items: start;\n  gap: 7px;\n  grid-template-columns: 24px auto 1fr;\n  align-items: center;\n  list-style: none;\n  height: min-content;\n  padding: 4px 10px;\n\n  font-size: 16px;\n  color: rgb(96, 96, 96);\n}\n\n.main-header-container div img {\n  padding-right: 5px;\n}\n\n.main-container > div:not(.main-header-container),\n.main-container > div:not(.modal) {\n  display: grid;\n  align-items: center;\n  gap: 4px;\n  font-size: 14px;\n  grid-template: 24px 24px / 24px calc(100% - 84px) 60px;\n  padding-top: 5px;\n}\n\n.main-container > div:not(.main-header-container).new-task-form {\n  grid-template: min-content / min-content;\n}\n\n/*////////////////\n// Form styling //\n////////////////*/\n\n/* form */\n\nform {\n  border: 1px solid gray;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 15px;\n\n  display: grid;\n  gap: 7px;\n}\n\n/* text input */\n\n.main-container > div form input[type='text'] {\n  border: none;\n  border-bottom: 1px solid black;\n  margin-bottom: 10px;\n}\n\n/* text and textarea :focus; textarea */\n\n.main-container > div form input[type='text']:focus {\n  outline: none;\n}\n\ntextarea,\ntextarea:focus {\n  outline: none;\n  font-family: 'Raleway', sans-serif;\n  font-size: 13.5px;\n  border-radius: 7px;\n  border: 1px solid black;\n  box-shadow: none;\n  padding: 5px;\n}\n\n.form-priority-radios {\n  display: grid;\n  width: 50%;\n  padding-top: 5px;\n  grid-template: 20px / 20px 1fr;\n}\n\n.form-priority-radios p {\n  grid-area: 1 / 1 / 2 / 3;\n}\n\n.main-container > div:not(.main-header-container):not(:last-child) {\n  border-bottom: 1px solid gray;\n}\n\n.main-container > div:not(.main-header-container) > div:nth-child(2) {\n  grid-column: 2 / 4;\n}\n\ninput[type='checkbox'] {\n  appearance: none;\n  width: 18px;\n  height: 18px;\n  justify-self: center;\n  border: .13rem solid gray;\n  border-radius: 10px;\n\n  display: grid;\n  place-content: center;\n}\n\ninput[type='checkbox'].high-priority {\n  border: .13rem solid #c00;\n  background-color: rgba(204, 0, 0, .1);\n}\n\ninput[type='checkbox'].recurring {\n  border: .13rem solid orange;\n}\n\ninput[type='checkbox']:hover {\n  cursor: pointer;\n}\n\ninput[type='checkbox']::before {\n  content: '';\n  width: 10px;\n  height: 10px;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em green;\n  outline: .13rem solid gray !important;\n  outline-offset: 10px;\n  transform-origin: bottom left;\n  clip-path: polygon(\n    14% 44%, 0 65%, \n    50% 100%, 100% 16%, \n    80% 0%, 43% 62%);\n}\n\ninput[type='checkbox']:checked::before {\n  transform: scale(1);\n}\n\n /* The Modal (background) */\n .modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 40%; /* Could be more or less, depending on screen size */\n  border-radius: 15px;\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  justify-self: end;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n} ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --color-background: #ededed;\n  --color-primary: #ffa41b;\n  --color-secondary: #ff5151;\n  --color-tertiary: #9818d6;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-family: 'Raleway', sans-serif !important;\n}\n\n.content {\n  display: grid;\n  grid-template:\n    \"header header\" 50px \n    \"sidebar main\" calc(100vh - 50px)\n    / 250px auto;\n}\n\n/*////////\n/ Header /\n////////*/\n\n.header {\n  grid-area: header;\n\n  background-color: var(--color-secondary);\n  font-size: 30px;\n  color: var(--color-background);\n  padding-left: 30px;\n  padding-top: 4px;\n}\n\n.header button {\n  color: var(--color-background);\n  background-color: rgba(234, 234, 234, .2);\n  padding: 6px 8px;\n  margin: 3px 40px;\n  border: none;\n  border-radius: 7px;\n  font-size: 18px;\n  float: right;\n}\n\n.header button:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, .15);\n}\n\n/*/////////\n/ Sidebar /\n/////////*/\n\n.sidebar-container {\n  grid-area: sidebar;\n\n  background-color: #fafafa;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.sidebar-container > div {\n  display: grid;\n  padding: 12px 10px 8px 20px;\n  border-radius: 5px;\n}\n\n.sidebar-container ul {\n  display: grid;\n  gap: 2px;\n}\n\nli {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: start;\n  justify-items: start;\n  gap: 7px;\n  grid-template-columns: 24px auto 1fr;\n  align-items: center;\n  list-style: none;\n  height: min-content;\n  border-radius: 8px;\n  padding: 4px 10px;\n}\n\nli.extra-chevron {\n  padding: 4px 0px;\n  position: relative;\n  width: 183px;\n  left: -15px;\n}\n\nli.extra-chevron img:last-child {\n  padding-right: 5px;\n}\n\nli img {\n  justify-self: center;\n}\n\n.sidebar-container span {\n  width: max-content;\n  justify-self: end;\n  color: #555;\n}\n\nli:hover {\n  cursor: pointer;\n  transform: translateX(2px);\n  border-left: 3px solid var(--color-secondary);\n  border-radius: 8px;\n}\n\n.selected-li {\n  background-color: #eaeaea;\n}\n\n.list-header {\n  font-weight: 600;\n}\n\n.proj-header {\n  width: 148px;\n}\n\nli[data-is-proj-child='1'] {\n  margin-left: 24px;\n}\n\n/*//////\n/ Main /\n//////*/\n\n.main-container {\n  display: grid;\n  align-items: center;\n  align-content: start;\n  grid-template-rows: 80px;\n  margin: 10px 15px 30px 60px;\n  padding-right: 15px;\n  overflow-y: scroll;\n}\n\n.main-header-container {\n  display: grid;\n  align-items: start;\n  grid-template-columns: 100px auto;\n}\n\n.main-header-container div {\n  justify-self: end;\n  \n  display: grid;\n  grid-auto-flow: column;\n  justify-content: start;\n  justify-items: start;\n  gap: 7px;\n  grid-template-columns: 24px auto 1fr;\n  align-items: center;\n  list-style: none;\n  height: min-content;\n  padding: 4px 10px;\n\n  font-size: 16px;\n  color: rgb(96, 96, 96);\n}\n\n.main-header-container div img {\n  padding-right: 5px;\n}\n\n.main-container > div:not(.main-header-container),\n.main-container > div:not(.modal) {\n  display: grid;\n  align-items: center;\n  gap: 4px;\n  font-size: 14px;\n  grid-template: 24px 24px / 24px calc(100% - 84px) 60px;\n  padding-top: 5px;\n}\n\n.main-container > div:not(.main-header-container).new-task-form {\n  grid-template: min-content / min-content;\n}\n\n/*////////////////\n// Form styling //\n////////////////*/\n\n/* form */\n\nform {\n  border: 1px solid gray;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 15px;\n\n  display: grid;\n  gap: 7px;\n}\n\n/* text input */\n\n.main-container > div form input[type='text'] {\n  border: none;\n  border-bottom: 1px solid black;\n  margin-bottom: 10px;\n}\n\n/* text and textarea :focus; textarea */\n\n.main-container > div form input[type='text']:focus {\n  outline: none;\n}\n\ntextarea,\ntextarea:focus {\n  outline: none;\n  font-family: 'Raleway', sans-serif;\n  font-size: 13.5px;\n  border-radius: 7px;\n  border: 1px solid black;\n  box-shadow: none;\n  padding: 5px;\n}\n\n.form-priority-radios {\n  display: grid;\n  width: 50%;\n  padding-top: 5px;\n  grid-template: 20px / 20px 1fr;\n}\n\n.form-priority-radios p {\n  grid-area: 1 / 1 / 2 / 3;\n}\n\n.main-container > div:not(.main-header-container):not(:last-child) {\n  border-bottom: 1px solid gray;\n}\n\n.main-container > div:not(.main-header-container) > div:nth-child(2) {\n  grid-column: 2 / 4;\n}\n\ninput[type='checkbox'] {\n  appearance: none;\n  width: 18px;\n  height: 18px;\n  justify-self: center;\n  border: .13rem solid gray;\n  border-radius: 10px;\n\n  display: grid;\n  place-content: center;\n}\n\ninput[type='checkbox'].high-priority {\n  border: .13rem solid #c00;\n  background-color: rgba(204, 0, 0, .1);\n}\n\ninput[type='checkbox'].recurring {\n  border: .13rem solid orange;\n}\n\ninput[type='checkbox']:hover {\n  cursor: pointer;\n}\n\ninput[type='checkbox']::before {\n  content: '';\n  width: 10px;\n  height: 10px;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em green;\n  outline: .13rem solid gray !important;\n  outline-offset: 10px;\n  transform-origin: bottom left;\n  clip-path: polygon(\n    14% 44%, 0 65%, \n    50% 100%, 100% 16%, \n    80% 0%, 43% 62%);\n}\n\ninput[type='checkbox']:checked::before {\n  transform: scale(1);\n}\n\n /* The Modal (background) */\n .modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 40%; /* Could be more or less, depending on screen size */\n  border-radius: 15px;\n}\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  justify-self: end;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n} "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/DOMmethods.js":
/*!***************************!*\
  !*** ./src/DOMmethods.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildTaskFormModal": () => (/* binding */ buildTaskFormModal),
/* harmony export */   "clearTaskForm": () => (/* binding */ clearTaskForm),
/* harmony export */   "closeTaskForm": () => (/* binding */ closeTaskForm)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");


/*////////////////////// 

Description:
  Build form to get new task from user. It is built as a modal window

Parameters:
  projList - the current list of projects. Used to generate option inputs for the user to select a project to make the new task a part of

Returns:
  modal     - the modal div, which contains the form
  name      - task name input
  desc      - task description input
  dueDate   - task due date input
  project   - task project input
  closeBtn  - the button that can be clicked to close the form
  submitBtn - the button that can be clicked to submit the form
  priority  - object containing the three priority inputs:
    high, med, low

//////////////////////*/

const buildTaskFormModal = (projList = []) => {

  const modal   = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', 'modal')
  const formDiv = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', 'new-task-form', 'modal-content')
  const form    = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('form')

  // Form element labels
  const nameLabel         = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('label')
  const descLabel         = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('label')
  const priorityLabel     = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('p')
  const highPriorityLabel = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('label')
  const medPriorityLabel  = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('label')
  const lowPriorityLabel  = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('label')
  const dueDateLabel      = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('label')
  const projectLabel      = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('label')

  // Associate labels with inputs
  nameLabel.setAttribute('for', 'name')
  descLabel.setAttribute('for', 'desc')
  highPriorityLabel.setAttribute('for', 'high-priority')
  medPriorityLabel.setAttribute('for', 'med-priority')
  lowPriorityLabel.setAttribute('for', 'low-priority')
  dueDateLabel.setAttribute('for', 'due-date')
  projectLabel.setAttribute('for', 'project')

  priorityLabel.textContent = 'Priority: '
  dueDateLabel.textContent = 'Due date: '
  projectLabel.textContent = 'Project: '

  // Create inputs
  const name          = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('input')
  const desc          = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('textarea')
  const highPriority  = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('input')
  const medPriority   = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('input')
  const lowPriority   = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('input')
  const dueDate       = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('input')
  const project       = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('select')
  const taskSubmitBtn = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('button') 
  const formCloseBtn  = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('span', 'close')

  // Misc. attributes for each input
  name.type        = 'text'
  name.placeholder = 'Name'
  name.maxlength   = '20'
  name.id          = 'name'

  desc.rows        = '5'
  desc.cols        = '40'
  desc.placeholder = 'Description...'
  desc.id          = 'desc'

  highPriorityLabel.textContent = 'High'
  medPriorityLabel.textContent  = 'Medium'
  lowPriorityLabel.textContent  = 'Low'

  highPriority.type  = 'radio'
  highPriority.name  = 'priority'
  highPriority.value = 'high-priority'
  highPriority.id    = 'high-priority'

  medPriority.type  = 'radio'
  medPriority.name  = 'priority'
  medPriority.value = 'med-priority'
  medPriority.id    = 'med-priority'

  lowPriority.type  = 'radio'
  lowPriority.name  = 'priority'
  lowPriority.value = 'low-priority'
  lowPriority.id    = 'low-priority'

  dueDate.type = 'date'
  dueDate.id   = 'due-date'
  dueDate.min  = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.getDateTodayStr)()

  project.name = 'project'
  project.id   = 'project'

  taskSubmitBtn.type        = 'button'
  taskSubmitBtn.textContent = 'Add'
  taskSubmitBtn.classList.add('new-task-submit-btn')

  formCloseBtn.textContent = '\u2715'

  // Input containers
  const nameContainer    = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div')
  const descContainer    = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div')
  const dueDateContainer = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div')
  const projectContainer = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div')

  nameContainer.append(nameLabel, name)
  descContainer.append(descLabel, desc)
  dueDateContainer.append(dueDateLabel, dueDate)
  projectContainer.append(projectLabel, project)

  project.append(
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newOption)('none', 'None')
  )
  
  projList.forEach((proj) => {
    project.append(
      (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newOption)(proj.value, proj.name)
    )
  })

  const priorityContainer = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', 'form-priority-radios')
  priorityContainer.append(
    priorityLabel,
    highPriority, 
    highPriorityLabel,
    medPriority, 
    medPriorityLabel,
    lowPriority,
    lowPriorityLabel
  )

  form.append(
    formCloseBtn, 
    nameContainer,
    descContainer,
    priorityContainer,
    dueDateContainer,
    projectContainer,
    taskSubmitBtn
  )

  formDiv.append(form)

  modal.append(formDiv)

    return {
      modal,
      name,
      desc,
      dueDate,
      project,
      closeBtn: formCloseBtn,
      submitBtn: taskSubmitBtn,
      priority: {
        high: highPriority,
        med: medPriority,
        low: lowPriority
      }
    }
}

const clearTaskForm = (...elements) => {
  elements.forEach((el) => {
    el.value = ''
  })
}

const closeTaskForm = (form) => {
  form.style.display = 'none'
}



/***/ }),

/***/ "./src/buildHeader.js":
/*!****************************!*\
  !*** ./src/buildHeader.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");


const buildHeader = () => {
  const header     = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', 'header')
  const newTaskBtn = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('button', 'new-task-btn')

  newTaskBtn.textContent = 'New Task'
  header.textContent     = '// TO-DO'
  
  header.append(newTaskBtn)

  return header
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHeader);

/***/ }),

/***/ "./src/buildMain.js":
/*!**************************!*\
  !*** ./src/buildMain.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
/* harmony import */ var _media_tune_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/tune.svg */ "./src/media/tune.svg");




const buildMain = () => {
  const viewIcon = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newImg)(_media_tune_svg__WEBPACK_IMPORTED_MODULE_1__)

  const main = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', 'main-container')

  const mainHeaderContainer = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div', 'main-header-container')
  const mainHeader = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('h3')
  mainHeader.textContent = 'Today'

  const mainFilter = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div')
  mainFilter.textContent = 'View'
  mainFilter.prepend(viewIcon)
  
  const practiceTask = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div')
  const pracTaskRadio = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('input')
  pracTaskRadio.setAttribute('type', 'checkbox')
  const pracTask = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div')
  pracTask.textContent = 'Read work emails'
  const pracTime = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div')

  practiceTask.append(
    pracTaskRadio,
    pracTask
  )

  main
    .appendChild(mainHeaderContainer)
    .append(mainHeader, mainFilter)

  main.append(
    practiceTask,
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div'),
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div'),
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.newElement)('div'))

  return main
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildMain);

/***/ }),

/***/ "./src/buildSidebar.js":
/*!*****************************!*\
  !*** ./src/buildSidebar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/classes/PageProperties.js":
/*!***************************************!*\
  !*** ./src/classes/PageProperties.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// class for PageProperties

class PageProperties {
  isTaskFormOpen
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageProperties);

/***/ }),

/***/ "./src/classes/project.js":
/*!********************************!*\
  !*** ./src/classes/project.js ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/classes/projectList.js":
/*!************************************!*\
  !*** ./src/classes/projectList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// ProjectList class

class ProjectList {
  constructor() {
    this.#init()
  }

  #init() {
    this.all = []
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectList);

/***/ }),

/***/ "./src/classes/task.js":
/*!*****************************!*\
  !*** ./src/classes/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Task class

class Task {
  constructor(obj) {
    this.name     = obj.name
    this.dueDate  = obj.dueDate
    this.desc     = obj.desc
    this.priority = obj.priority
    this.project  = obj.project
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/classes/taskList.js":
/*!*********************************!*\
  !*** ./src/classes/taskList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// TaskList class 

class TaskList {
  constructor() {
    this.#init()
    this.curFilter = {
      priority: "",
      project: ""
    }
  }

  #init() {
    this.all        = []
    this.visible    = []
    this.amtAll     = 0
    this.amtVisible = 0
  }

  add(task) {
    this.all.push(task)
    this.amtAll++

    if (this.#shouldBeVisible(task)) {
      console.log('yes')
      
      this.visible.push(task)
      this.visible.sort()
    }
  }

  sort() {

  }

  filter() {

  }

  #shouldBeVisible(task) {
    if (this.curFilter === '' && this.curFilter.project === '') return true

    if (this.curFilter.priority) {
      if (task.priority === this.curFilter.priority) return true
    }

    if (this.curFilter.project) {
      if (task.project === this.curFilter.project) return true
    }

    return false
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskList);

/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDateTodayStr": () => (/* binding */ getDateTodayStr),
/* harmony export */   "newElement": () => (/* binding */ newElement),
/* harmony export */   "newImg": () => (/* binding */ newImg),
/* harmony export */   "newOption": () => (/* binding */ newOption)
/* harmony export */ });
function newElement(type, ...classes) {
  let el = document.createElement(type)
  classes.forEach((cl) => {
    el.classList.add(cl)
  })
  return el
}

function newOption(value, text) {
  let el = document.createElement('option')
  el.value = value
  el.textContent = text

  return el
}

function newImg(src) {
  let tmp = new Image()
  tmp.src = src
  return tmp
}

function getDateTodayStr() {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  if (month < 10) month = `0${month}`
  if (day < 10) day = `0${day}`

  return `${year}-${month}-${day}`
}



/***/ }),

/***/ "./src/media/calendar-alert.svg":
/*!**************************************!*\
  !*** ./src/media/calendar-alert.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a4b2c5c3ebd70c8938c9.svg";

/***/ }),

/***/ "./src/media/calendar-month-outline.svg":
/*!**********************************************!*\
  !*** ./src/media/calendar-month-outline.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e90eaec9ce93458b40ce.svg";

/***/ }),

/***/ "./src/media/chevron-down-small.svg":
/*!******************************************!*\
  !*** ./src/media/chevron-down-small.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b7ae6e70527863cfbbf5.svg";

/***/ }),

/***/ "./src/media/chevron-down.svg":
/*!************************************!*\
  !*** ./src/media/chevron-down.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cc1627c9fb5c88ed1a6a.svg";

/***/ }),

/***/ "./src/media/chevron-right.svg":
/*!*************************************!*\
  !*** ./src/media/chevron-right.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d08ef38365fd493aafb3.svg";

/***/ }),

/***/ "./src/media/circle-blue.svg":
/*!***********************************!*\
  !*** ./src/media/circle-blue.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b034ea578a95d54c26cb.svg";

/***/ }),

/***/ "./src/media/circle-green.svg":
/*!************************************!*\
  !*** ./src/media/circle-green.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8307ab1c33082dd20126.svg";

/***/ }),

/***/ "./src/media/image-filter-none.svg":
/*!*****************************************!*\
  !*** ./src/media/image-filter-none.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a7fdbede79388747fcfb.svg";

/***/ }),

/***/ "./src/media/tag.svg":
/*!***************************!*\
  !*** ./src/media/tag.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8ec9c02e5ccc71302c2f.svg";

/***/ }),

/***/ "./src/media/tune.svg":
/*!****************************!*\
  !*** ./src/media/tune.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f2d9b609a8096ab0ed7.svg";

/***/ }),

/***/ "./src/media/water-orange.svg":
/*!************************************!*\
  !*** ./src/media/water-orange.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "66d0e03a99981787ea82.svg";

/***/ }),

/***/ "./src/media/water-red.svg":
/*!*********************************!*\
  !*** ./src/media/water-red.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
/* harmony import */ var _buildHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildHeader */ "./src/buildHeader.js");
/* harmony import */ var _buildSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buildSidebar */ "./src/buildSidebar.js");
/* harmony import */ var _buildMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buildMain */ "./src/buildMain.js");
/* harmony import */ var _DOMmethods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMmethods */ "./src/DOMmethods.js");
/* harmony import */ var _classes_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes/task */ "./src/classes/task.js");
/* harmony import */ var _classes_taskList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classes/taskList */ "./src/classes/taskList.js");
/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes/project */ "./src/classes/project.js");
/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_classes_project__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _classes_projectList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./classes/projectList */ "./src/classes/projectList.js");
/* harmony import */ var _classes_PageProperties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./classes/PageProperties */ "./src/classes/PageProperties.js");

















const Page        = new _classes_PageProperties__WEBPACK_IMPORTED_MODULE_10__["default"]()
const taskList    = new _classes_taskList__WEBPACK_IMPORTED_MODULE_7__["default"]()
const projectList = new _classes_projectList__WEBPACK_IMPORTED_MODULE_9__["default"]()

const Content = document.querySelector('.content')

const header  = (0,_buildHeader__WEBPACK_IMPORTED_MODULE_2__["default"])()
const sidebar = (0,_buildSidebar__WEBPACK_IMPORTED_MODULE_3__["default"])()
const main    = (0,_buildMain__WEBPACK_IMPORTED_MODULE_4__["default"])()

const taskForm = (0,_DOMmethods__WEBPACK_IMPORTED_MODULE_5__.buildTaskFormModal)()

Content.append(header, sidebar, main, taskForm.modal)

// New task button functionality
const newTaskBtn = document.querySelector('.new-task-btn')

newTaskBtn.addEventListener('click', function() {
  if (!Page.isTaskFormOpen) {
    Page.isTaskFormOpen = true
    taskForm.modal.style.display = 'block'
    
    //buildNewTaskForm(modal, taskSubmitBtn, formDiv ,formCloseBtn)
  } else {
    alert('You must save or close the current task before creating a new one.')
  }
})

const closeAndClearForm = function() {
  ;(0,_DOMmethods__WEBPACK_IMPORTED_MODULE_5__.closeTaskForm)(taskForm.modal)
  ;(0,_DOMmethods__WEBPACK_IMPORTED_MODULE_5__.clearTaskForm)(
    taskForm.name, 
    taskForm.desc, 
    taskForm.dueDate, 
    taskForm.priority.high, 
    taskForm.priority.med, 
    taskForm.priority.low, 
    taskForm.project)
  Page.isTaskFormOpen = false
}

taskForm.closeBtn.addEventListener('click', function() {
  closeAndClearForm()
})

window.onclick = function(event) {
  if (event.target === taskForm.modal) {
    closeAndClearForm()
  }
}

taskForm.submitBtn.addEventListener('click', function() {
  
  let selectedPriority = 
    taskForm.priority.high.checked ? 'high' : 
    taskForm.priority.med.checked  ? 'med' : 
    taskForm.priority.low.checked  ? 'low' : undefined

  if (!taskForm.name.value) {
    alert('A task name is required.')
    return
  }

  if (!taskForm.dueDate.value) {
    alert('A due date is required.')
    return
  }

  let results = {
    name: taskForm.name.value,
    desc: taskForm.desc.value,
    dueDate: taskForm.dueDate.value,
    priority: selectedPriority,
    project: taskForm.project.value
  }

  taskList.add(new _classes_task__WEBPACK_IMPORTED_MODULE_6__["default"](results))

  console.log(results)
  
  closeAndClearForm()
  Page.isTaskFormOpen = false
/*
  taskForm.animate([
    { transform: 'scale(1,1)' },
    { transform: 'scale(0,0)' }
  ], { duration: 500 },
  function() {
    taskForm.remove()
  })


  let sc = 1
 

  setInterval(function() {
    sc -= .1
    taskForm.style.transform = 'scale(sc, sc)'
    console.log(taskForm.style)
    
  }, 200)

  function doThis() { taskForm.remove() }
  setInterval(doThis, 1000)


  

  console.log(taskList)
  */
  
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFFBQVEsWUFBWSxLQUFLLFlBQVksYUFBYSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixxREFBSTs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5QkFBeUI7QUFDL0IsTUFBTTtBQUNOLE9BQU8sZUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxzQkFBc0I7QUFDdEI7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvRE9NbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvYnVpbGRIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2J1aWxkTWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvYnVpbGRTaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9jbGFzc2VzL1BhZ2VQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9jbGFzc2VzL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9jbGFzc2VzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2NsYXNzZXMvdGFza0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjZWRlZGVkO1xcbiAgLS1jb2xvci1wcmltYXJ5OiAjZmZhNDFiO1xcbiAgLS1jb2xvci1zZWNvbmRhcnk6ICNmZjUxNTE7XFxuICAtLWNvbG9yLXRlcnRpYXJ5OiAjOTgxOGQ2O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiIDUwcHggXFxuICAgIFxcXCJzaWRlYmFyIG1haW5cXFwiIGNhbGMoMTAwdmggLSA1MHB4KVxcbiAgICAvIDI1MHB4IGF1dG87XFxufVxcblxcbi8qLy8vLy8vLy9cXG4vIEhlYWRlciAvXFxuLy8vLy8vLy8qL1xcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZy10b3A6IDRweDtcXG59XFxuXFxuLmhlYWRlciBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDIzNCwgMjM0LCAuMik7XFxuICBwYWRkaW5nOiA2cHggOHB4O1xcbiAgbWFyZ2luOiAzcHggNDBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLmhlYWRlciBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMTUpO1xcbn1cXG5cXG4vKi8vLy8vLy8vL1xcbi8gU2lkZWJhciAvXFxuLy8vLy8vLy8vKi9cXG5cXG4uc2lkZWJhci1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMTJweCAxMHB4IDhweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1jb250YWluZXIgdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG5saSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gIGdhcDogN3B4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNHB4IGF1dG8gMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogNHB4IDEwcHg7XFxufVxcblxcbmxpLmV4dHJhLWNoZXZyb24ge1xcbiAgcGFkZGluZzogNHB4IDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxODNweDtcXG4gIGxlZnQ6IC0xNXB4O1xcbn1cXG5cXG5saS5leHRyYS1jaGV2cm9uIGltZzpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuXFxubGkgaW1nIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhci1jb250YWluZXIgc3BhbiB7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGNvbG9yOiAjNTU1O1xcbn1cXG5cXG5saTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnNlbGVjdGVkLWxpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XFxufVxcblxcbi5saXN0LWhlYWRlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucHJvai1oZWFkZXIge1xcbiAgd2lkdGg6IDE0OHB4O1xcbn1cXG5cXG5saVtkYXRhLWlzLXByb2otY2hpbGQ9JzEnXSB7XFxuICBtYXJnaW4tbGVmdDogMjRweDtcXG59XFxuXFxuLyovLy8vLy9cXG4vIE1haW4gL1xcbi8vLy8vLyovXFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHg7XFxuICBtYXJnaW46IDEwcHggMTVweCAzMHB4IDYwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IGF1dG87XFxufVxcblxcbi5tYWluLWhlYWRlci1jb250YWluZXIgZGl2IHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gIGdhcDogN3B4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNHB4IGF1dG8gMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZzogNHB4IDEwcHg7XFxuXFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogcmdiKDk2LCA5NiwgOTYpO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXItY29udGFpbmVyIGRpdiBpbWcge1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIgPiBkaXY6bm90KC5tYWluLWhlYWRlci1jb250YWluZXIpLFxcbi5tYWluLWNvbnRhaW5lciA+IGRpdjpub3QoLm1vZGFsKSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZTogMjRweCAyNHB4IC8gMjRweCBjYWxjKDEwMCUgLSA4NHB4KSA2MHB4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyID4gZGl2Om5vdCgubWFpbi1oZWFkZXItY29udGFpbmVyKS5uZXctdGFzay1mb3JtIHtcXG4gIGdyaWQtdGVtcGxhdGU6IG1pbi1jb250ZW50IC8gbWluLWNvbnRlbnQ7XFxufVxcblxcbi8qLy8vLy8vLy8vLy8vLy8vL1xcbi8vIEZvcm0gc3R5bGluZyAvL1xcbi8vLy8vLy8vLy8vLy8vLy8qL1xcblxcbi8qIGZvcm0gKi9cXG5cXG5mb3JtIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogMTVweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDdweDtcXG59XFxuXFxuLyogdGV4dCBpbnB1dCAqL1xcblxcbi5tYWluLWNvbnRhaW5lciA+IGRpdiBmb3JtIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4vKiB0ZXh0IGFuZCB0ZXh0YXJlYSA6Zm9jdXM7IHRleHRhcmVhICovXFxuXFxuLm1haW4tY29udGFpbmVyID4gZGl2IGZvcm0gaW5wdXRbdHlwZT0ndGV4dCddOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMy41cHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5mb3JtLXByaW9yaXR5LXJhZGlvcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBncmlkLXRlbXBsYXRlOiAyMHB4IC8gMjBweCAxZnI7XFxufVxcblxcbi5mb3JtLXByaW9yaXR5LXJhZGlvcyBwIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG59XFxuXFxuLm1haW4tY29udGFpbmVyID4gZGl2Om5vdCgubWFpbi1oZWFkZXItY29udGFpbmVyKTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIgPiBkaXY6bm90KC5tYWluLWhlYWRlci1jb250YWluZXIpID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXI6IC4xM3JlbSBzb2xpZCBncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10uaGlnaC1wcmlvcml0eSB7XFxuICBib3JkZXI6IC4xM3JlbSBzb2xpZCAjYzAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDQsIDAsIDAsIC4xKTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXS5yZWN1cnJpbmcge1xcbiAgYm9yZGVyOiAuMTNyZW0gc29saWQgb3JhbmdlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSBncmVlbjtcXG4gIG91dGxpbmU6IC4xM3JlbSBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMTBweDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAxNCUgNDQlLCAwIDY1JSwgXFxuICAgIDUwJSAxMDAlLCAxMDAlIDE2JSwgXFxuICAgIDgwJSAwJSwgNDMlIDYyJSk7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbiAvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuIC5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogNDAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn0gXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxc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O0VBQ3JCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjZWRlZGVkO1xcbiAgLS1jb2xvci1wcmltYXJ5OiAjZmZhNDFiO1xcbiAgLS1jb2xvci1zZWNvbmRhcnk6ICNmZjUxNTE7XFxuICAtLWNvbG9yLXRlcnRpYXJ5OiAjOTgxOGQ2O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiIDUwcHggXFxuICAgIFxcXCJzaWRlYmFyIG1haW5cXFwiIGNhbGMoMTAwdmggLSA1MHB4KVxcbiAgICAvIDI1MHB4IGF1dG87XFxufVxcblxcbi8qLy8vLy8vLy9cXG4vIEhlYWRlciAvXFxuLy8vLy8vLy8qL1xcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZy10b3A6IDRweDtcXG59XFxuXFxuLmhlYWRlciBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDIzNCwgMjM0LCAuMik7XFxuICBwYWRkaW5nOiA2cHggOHB4O1xcbiAgbWFyZ2luOiAzcHggNDBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLmhlYWRlciBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMTUpO1xcbn1cXG5cXG4vKi8vLy8vLy8vL1xcbi8gU2lkZWJhciAvXFxuLy8vLy8vLy8vKi9cXG5cXG4uc2lkZWJhci1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMTJweCAxMHB4IDhweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1jb250YWluZXIgdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG5saSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gIGdhcDogN3B4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNHB4IGF1dG8gMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogNHB4IDEwcHg7XFxufVxcblxcbmxpLmV4dHJhLWNoZXZyb24ge1xcbiAgcGFkZGluZzogNHB4IDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxODNweDtcXG4gIGxlZnQ6IC0xNXB4O1xcbn1cXG5cXG5saS5leHRyYS1jaGV2cm9uIGltZzpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuXFxubGkgaW1nIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhci1jb250YWluZXIgc3BhbiB7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGNvbG9yOiAjNTU1O1xcbn1cXG5cXG5saTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnNlbGVjdGVkLWxpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XFxufVxcblxcbi5saXN0LWhlYWRlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucHJvai1oZWFkZXIge1xcbiAgd2lkdGg6IDE0OHB4O1xcbn1cXG5cXG5saVtkYXRhLWlzLXByb2otY2hpbGQ9JzEnXSB7XFxuICBtYXJnaW4tbGVmdDogMjRweDtcXG59XFxuXFxuLyovLy8vLy9cXG4vIE1haW4gL1xcbi8vLy8vLyovXFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHg7XFxuICBtYXJnaW46IDEwcHggMTVweCAzMHB4IDYwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IGF1dG87XFxufVxcblxcbi5tYWluLWhlYWRlci1jb250YWluZXIgZGl2IHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gIGdhcDogN3B4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNHB4IGF1dG8gMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZzogNHB4IDEwcHg7XFxuXFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogcmdiKDk2LCA5NiwgOTYpO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXItY29udGFpbmVyIGRpdiBpbWcge1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIgPiBkaXY6bm90KC5tYWluLWhlYWRlci1jb250YWluZXIpLFxcbi5tYWluLWNvbnRhaW5lciA+IGRpdjpub3QoLm1vZGFsKSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZTogMjRweCAyNHB4IC8gMjRweCBjYWxjKDEwMCUgLSA4NHB4KSA2MHB4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyID4gZGl2Om5vdCgubWFpbi1oZWFkZXItY29udGFpbmVyKS5uZXctdGFzay1mb3JtIHtcXG4gIGdyaWQtdGVtcGxhdGU6IG1pbi1jb250ZW50IC8gbWluLWNvbnRlbnQ7XFxufVxcblxcbi8qLy8vLy8vLy8vLy8vLy8vL1xcbi8vIEZvcm0gc3R5bGluZyAvL1xcbi8vLy8vLy8vLy8vLy8vLy8qL1xcblxcbi8qIGZvcm0gKi9cXG5cXG5mb3JtIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogMTVweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDdweDtcXG59XFxuXFxuLyogdGV4dCBpbnB1dCAqL1xcblxcbi5tYWluLWNvbnRhaW5lciA+IGRpdiBmb3JtIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4vKiB0ZXh0IGFuZCB0ZXh0YXJlYSA6Zm9jdXM7IHRleHRhcmVhICovXFxuXFxuLm1haW4tY29udGFpbmVyID4gZGl2IGZvcm0gaW5wdXRbdHlwZT0ndGV4dCddOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMy41cHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5mb3JtLXByaW9yaXR5LXJhZGlvcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBncmlkLXRlbXBsYXRlOiAyMHB4IC8gMjBweCAxZnI7XFxufVxcblxcbi5mb3JtLXByaW9yaXR5LXJhZGlvcyBwIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG59XFxuXFxuLm1haW4tY29udGFpbmVyID4gZGl2Om5vdCgubWFpbi1oZWFkZXItY29udGFpbmVyKTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIgPiBkaXY6bm90KC5tYWluLWhlYWRlci1jb250YWluZXIpID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXI6IC4xM3JlbSBzb2xpZCBncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10uaGlnaC1wcmlvcml0eSB7XFxuICBib3JkZXI6IC4xM3JlbSBzb2xpZCAjYzAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDQsIDAsIDAsIC4xKTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXS5yZWN1cnJpbmcge1xcbiAgYm9yZGVyOiAuMTNyZW0gc29saWQgb3JhbmdlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSBncmVlbjtcXG4gIG91dGxpbmU6IC4xM3JlbSBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMTBweDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAxNCUgNDQlLCAwIDY1JSwgXFxuICAgIDUwJSAxMDAlLCAxMDAlIDE2JSwgXFxuICAgIDgwJSAwJSwgNDMlIDYyJSk7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbiAvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuIC5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogNDAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn0gXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBuZXdFbGVtZW50LCBuZXdPcHRpb24sIGdldERhdGVUb2RheVN0ciB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJ1xuXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gXG5cbkRlc2NyaXB0aW9uOlxuICBCdWlsZCBmb3JtIHRvIGdldCBuZXcgdGFzayBmcm9tIHVzZXIuIEl0IGlzIGJ1aWx0IGFzIGEgbW9kYWwgd2luZG93XG5cblBhcmFtZXRlcnM6XG4gIHByb2pMaXN0IC0gdGhlIGN1cnJlbnQgbGlzdCBvZiBwcm9qZWN0cy4gVXNlZCB0byBnZW5lcmF0ZSBvcHRpb24gaW5wdXRzIGZvciB0aGUgdXNlciB0byBzZWxlY3QgYSBwcm9qZWN0IHRvIG1ha2UgdGhlIG5ldyB0YXNrIGEgcGFydCBvZlxuXG5SZXR1cm5zOlxuICBtb2RhbCAgICAgLSB0aGUgbW9kYWwgZGl2LCB3aGljaCBjb250YWlucyB0aGUgZm9ybVxuICBuYW1lICAgICAgLSB0YXNrIG5hbWUgaW5wdXRcbiAgZGVzYyAgICAgIC0gdGFzayBkZXNjcmlwdGlvbiBpbnB1dFxuICBkdWVEYXRlICAgLSB0YXNrIGR1ZSBkYXRlIGlucHV0XG4gIHByb2plY3QgICAtIHRhc2sgcHJvamVjdCBpbnB1dFxuICBjbG9zZUJ0biAgLSB0aGUgYnV0dG9uIHRoYXQgY2FuIGJlIGNsaWNrZWQgdG8gY2xvc2UgdGhlIGZvcm1cbiAgc3VibWl0QnRuIC0gdGhlIGJ1dHRvbiB0aGF0IGNhbiBiZSBjbGlja2VkIHRvIHN1Ym1pdCB0aGUgZm9ybVxuICBwcmlvcml0eSAgLSBvYmplY3QgY29udGFpbmluZyB0aGUgdGhyZWUgcHJpb3JpdHkgaW5wdXRzOlxuICAgIGhpZ2gsIG1lZCwgbG93XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8qL1xuXG5jb25zdCBidWlsZFRhc2tGb3JtTW9kYWwgPSAocHJvakxpc3QgPSBbXSkgPT4ge1xuXG4gIGNvbnN0IG1vZGFsICAgPSBuZXdFbGVtZW50KCdkaXYnLCAnbW9kYWwnKVxuICBjb25zdCBmb3JtRGl2ID0gbmV3RWxlbWVudCgnZGl2JywgJ25ldy10YXNrLWZvcm0nLCAnbW9kYWwtY29udGVudCcpXG4gIGNvbnN0IGZvcm0gICAgPSBuZXdFbGVtZW50KCdmb3JtJylcblxuICAvLyBGb3JtIGVsZW1lbnQgbGFiZWxzXG4gIGNvbnN0IG5hbWVMYWJlbCAgICAgICAgID0gbmV3RWxlbWVudCgnbGFiZWwnKVxuICBjb25zdCBkZXNjTGFiZWwgICAgICAgICA9IG5ld0VsZW1lbnQoJ2xhYmVsJylcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCAgICAgPSBuZXdFbGVtZW50KCdwJylcbiAgY29uc3QgaGlnaFByaW9yaXR5TGFiZWwgPSBuZXdFbGVtZW50KCdsYWJlbCcpXG4gIGNvbnN0IG1lZFByaW9yaXR5TGFiZWwgID0gbmV3RWxlbWVudCgnbGFiZWwnKVxuICBjb25zdCBsb3dQcmlvcml0eUxhYmVsICA9IG5ld0VsZW1lbnQoJ2xhYmVsJylcbiAgY29uc3QgZHVlRGF0ZUxhYmVsICAgICAgPSBuZXdFbGVtZW50KCdsYWJlbCcpXG4gIGNvbnN0IHByb2plY3RMYWJlbCAgICAgID0gbmV3RWxlbWVudCgnbGFiZWwnKVxuXG4gIC8vIEFzc29jaWF0ZSBsYWJlbHMgd2l0aCBpbnB1dHNcbiAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKVxuICBkZXNjTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzYycpXG4gIGhpZ2hQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2hpZ2gtcHJpb3JpdHknKVxuICBtZWRQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ21lZC1wcmlvcml0eScpXG4gIGxvd1ByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbG93LXByaW9yaXR5JylcbiAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZS1kYXRlJylcbiAgcHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QnKVxuXG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICdcbiAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlOiAnXG4gIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0OiAnXG5cbiAgLy8gQ3JlYXRlIGlucHV0c1xuICBjb25zdCBuYW1lICAgICAgICAgID0gbmV3RWxlbWVudCgnaW5wdXQnKVxuICBjb25zdCBkZXNjICAgICAgICAgID0gbmV3RWxlbWVudCgndGV4dGFyZWEnKVxuICBjb25zdCBoaWdoUHJpb3JpdHkgID0gbmV3RWxlbWVudCgnaW5wdXQnKVxuICBjb25zdCBtZWRQcmlvcml0eSAgID0gbmV3RWxlbWVudCgnaW5wdXQnKVxuICBjb25zdCBsb3dQcmlvcml0eSAgID0gbmV3RWxlbWVudCgnaW5wdXQnKVxuICBjb25zdCBkdWVEYXRlICAgICAgID0gbmV3RWxlbWVudCgnaW5wdXQnKVxuICBjb25zdCBwcm9qZWN0ICAgICAgID0gbmV3RWxlbWVudCgnc2VsZWN0JylcbiAgY29uc3QgdGFza1N1Ym1pdEJ0biA9IG5ld0VsZW1lbnQoJ2J1dHRvbicpIFxuICBjb25zdCBmb3JtQ2xvc2VCdG4gID0gbmV3RWxlbWVudCgnc3BhbicsICdjbG9zZScpXG5cbiAgLy8gTWlzYy4gYXR0cmlidXRlcyBmb3IgZWFjaCBpbnB1dFxuICBuYW1lLnR5cGUgICAgICAgID0gJ3RleHQnXG4gIG5hbWUucGxhY2Vob2xkZXIgPSAnTmFtZSdcbiAgbmFtZS5tYXhsZW5ndGggICA9ICcyMCdcbiAgbmFtZS5pZCAgICAgICAgICA9ICduYW1lJ1xuXG4gIGRlc2Mucm93cyAgICAgICAgPSAnNSdcbiAgZGVzYy5jb2xzICAgICAgICA9ICc0MCdcbiAgZGVzYy5wbGFjZWhvbGRlciA9ICdEZXNjcmlwdGlvbi4uLidcbiAgZGVzYy5pZCAgICAgICAgICA9ICdkZXNjJ1xuXG4gIGhpZ2hQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ0hpZ2gnXG4gIG1lZFByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgID0gJ01lZGl1bSdcbiAgbG93UHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCAgPSAnTG93J1xuXG4gIGhpZ2hQcmlvcml0eS50eXBlICA9ICdyYWRpbydcbiAgaGlnaFByaW9yaXR5Lm5hbWUgID0gJ3ByaW9yaXR5J1xuICBoaWdoUHJpb3JpdHkudmFsdWUgPSAnaGlnaC1wcmlvcml0eSdcbiAgaGlnaFByaW9yaXR5LmlkICAgID0gJ2hpZ2gtcHJpb3JpdHknXG5cbiAgbWVkUHJpb3JpdHkudHlwZSAgPSAncmFkaW8nXG4gIG1lZFByaW9yaXR5Lm5hbWUgID0gJ3ByaW9yaXR5J1xuICBtZWRQcmlvcml0eS52YWx1ZSA9ICdtZWQtcHJpb3JpdHknXG4gIG1lZFByaW9yaXR5LmlkICAgID0gJ21lZC1wcmlvcml0eSdcblxuICBsb3dQcmlvcml0eS50eXBlICA9ICdyYWRpbydcbiAgbG93UHJpb3JpdHkubmFtZSAgPSAncHJpb3JpdHknXG4gIGxvd1ByaW9yaXR5LnZhbHVlID0gJ2xvdy1wcmlvcml0eSdcbiAgbG93UHJpb3JpdHkuaWQgICAgPSAnbG93LXByaW9yaXR5J1xuXG4gIGR1ZURhdGUudHlwZSA9ICdkYXRlJ1xuICBkdWVEYXRlLmlkICAgPSAnZHVlLWRhdGUnXG4gIGR1ZURhdGUubWluICA9IGdldERhdGVUb2RheVN0cigpXG5cbiAgcHJvamVjdC5uYW1lID0gJ3Byb2plY3QnXG4gIHByb2plY3QuaWQgICA9ICdwcm9qZWN0J1xuXG4gIHRhc2tTdWJtaXRCdG4udHlwZSAgICAgICAgPSAnYnV0dG9uJ1xuICB0YXNrU3VibWl0QnRuLnRleHRDb250ZW50ID0gJ0FkZCdcbiAgdGFza1N1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCduZXctdGFzay1zdWJtaXQtYnRuJylcblxuICBmb3JtQ2xvc2VCdG4udGV4dENvbnRlbnQgPSAnXFx1MjcxNSdcblxuICAvLyBJbnB1dCBjb250YWluZXJzXG4gIGNvbnN0IG5hbWVDb250YWluZXIgICAgPSBuZXdFbGVtZW50KCdkaXYnKVxuICBjb25zdCBkZXNjQ29udGFpbmVyICAgID0gbmV3RWxlbWVudCgnZGl2JylcbiAgY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IG5ld0VsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBuZXdFbGVtZW50KCdkaXYnKVxuXG4gIG5hbWVDb250YWluZXIuYXBwZW5kKG5hbWVMYWJlbCwgbmFtZSlcbiAgZGVzY0NvbnRhaW5lci5hcHBlbmQoZGVzY0xhYmVsLCBkZXNjKVxuICBkdWVEYXRlQ29udGFpbmVyLmFwcGVuZChkdWVEYXRlTGFiZWwsIGR1ZURhdGUpXG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3RMYWJlbCwgcHJvamVjdClcblxuICBwcm9qZWN0LmFwcGVuZChcbiAgICBuZXdPcHRpb24oJ25vbmUnLCAnTm9uZScpXG4gIClcbiAgXG4gIHByb2pMaXN0LmZvckVhY2goKHByb2opID0+IHtcbiAgICBwcm9qZWN0LmFwcGVuZChcbiAgICAgIG5ld09wdGlvbihwcm9qLnZhbHVlLCBwcm9qLm5hbWUpXG4gICAgKVxuICB9KVxuXG4gIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gbmV3RWxlbWVudCgnZGl2JywgJ2Zvcm0tcHJpb3JpdHktcmFkaW9zJylcbiAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kKFxuICAgIHByaW9yaXR5TGFiZWwsXG4gICAgaGlnaFByaW9yaXR5LCBcbiAgICBoaWdoUHJpb3JpdHlMYWJlbCxcbiAgICBtZWRQcmlvcml0eSwgXG4gICAgbWVkUHJpb3JpdHlMYWJlbCxcbiAgICBsb3dQcmlvcml0eSxcbiAgICBsb3dQcmlvcml0eUxhYmVsXG4gIClcblxuICBmb3JtLmFwcGVuZChcbiAgICBmb3JtQ2xvc2VCdG4sIFxuICAgIG5hbWVDb250YWluZXIsXG4gICAgZGVzY0NvbnRhaW5lcixcbiAgICBwcmlvcml0eUNvbnRhaW5lcixcbiAgICBkdWVEYXRlQ29udGFpbmVyLFxuICAgIHByb2plY3RDb250YWluZXIsXG4gICAgdGFza1N1Ym1pdEJ0blxuICApXG5cbiAgZm9ybURpdi5hcHBlbmQoZm9ybSlcblxuICBtb2RhbC5hcHBlbmQoZm9ybURpdilcblxuICAgIHJldHVybiB7XG4gICAgICBtb2RhbCxcbiAgICAgIG5hbWUsXG4gICAgICBkZXNjLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIHByb2plY3QsXG4gICAgICBjbG9zZUJ0bjogZm9ybUNsb3NlQnRuLFxuICAgICAgc3VibWl0QnRuOiB0YXNrU3VibWl0QnRuLFxuICAgICAgcHJpb3JpdHk6IHtcbiAgICAgICAgaGlnaDogaGlnaFByaW9yaXR5LFxuICAgICAgICBtZWQ6IG1lZFByaW9yaXR5LFxuICAgICAgICBsb3c6IGxvd1ByaW9yaXR5XG4gICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjbGVhclRhc2tGb3JtID0gKC4uLmVsZW1lbnRzKSA9PiB7XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwudmFsdWUgPSAnJ1xuICB9KVxufVxuXG5jb25zdCBjbG9zZVRhc2tGb3JtID0gKGZvcm0pID0+IHtcbiAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG59XG5cbmV4cG9ydCB7IGJ1aWxkVGFza0Zvcm1Nb2RhbCwgY2xlYXJUYXNrRm9ybSwgY2xvc2VUYXNrRm9ybSB9IiwiaW1wb3J0IHsgbmV3RWxlbWVudCB9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9uc1wiXG5cbmNvbnN0IGJ1aWxkSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgICAgID0gbmV3RWxlbWVudCgnZGl2JywgJ2hlYWRlcicpXG4gIGNvbnN0IG5ld1Rhc2tCdG4gPSBuZXdFbGVtZW50KCdidXR0b24nLCAnbmV3LXRhc2stYnRuJylcblxuICBuZXdUYXNrQnRuLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJ1xuICBoZWFkZXIudGV4dENvbnRlbnQgICAgID0gJy8vIFRPLURPJ1xuICBcbiAgaGVhZGVyLmFwcGVuZChuZXdUYXNrQnRuKVxuXG4gIHJldHVybiBoZWFkZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRIZWFkZXIiLCJpbXBvcnQgeyBuZXdFbGVtZW50LCBuZXdJbWcgfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIlxuXG5pbXBvcnQgdmlld1N2ZyBmcm9tICcuL21lZGlhL3R1bmUuc3ZnJ1xuXG5jb25zdCBidWlsZE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IHZpZXdJY29uID0gbmV3SW1nKHZpZXdTdmcpXG5cbiAgY29uc3QgbWFpbiA9IG5ld0VsZW1lbnQoJ2RpdicsICdtYWluLWNvbnRhaW5lcicpXG5cbiAgY29uc3QgbWFpbkhlYWRlckNvbnRhaW5lciA9IG5ld0VsZW1lbnQoJ2RpdicsICdtYWluLWhlYWRlci1jb250YWluZXInKVxuICBjb25zdCBtYWluSGVhZGVyID0gbmV3RWxlbWVudCgnaDMnKVxuICBtYWluSGVhZGVyLnRleHRDb250ZW50ID0gJ1RvZGF5J1xuXG4gIGNvbnN0IG1haW5GaWx0ZXIgPSBuZXdFbGVtZW50KCdkaXYnKVxuICBtYWluRmlsdGVyLnRleHRDb250ZW50ID0gJ1ZpZXcnXG4gIG1haW5GaWx0ZXIucHJlcGVuZCh2aWV3SWNvbilcbiAgXG4gIGNvbnN0IHByYWN0aWNlVGFzayA9IG5ld0VsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHByYWNUYXNrUmFkaW8gPSBuZXdFbGVtZW50KCdpbnB1dCcpXG4gIHByYWNUYXNrUmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgY29uc3QgcHJhY1Rhc2sgPSBuZXdFbGVtZW50KCdkaXYnKVxuICBwcmFjVGFzay50ZXh0Q29udGVudCA9ICdSZWFkIHdvcmsgZW1haWxzJ1xuICBjb25zdCBwcmFjVGltZSA9IG5ld0VsZW1lbnQoJ2RpdicpXG5cbiAgcHJhY3RpY2VUYXNrLmFwcGVuZChcbiAgICBwcmFjVGFza1JhZGlvLFxuICAgIHByYWNUYXNrXG4gIClcblxuICBtYWluXG4gICAgLmFwcGVuZENoaWxkKG1haW5IZWFkZXJDb250YWluZXIpXG4gICAgLmFwcGVuZChtYWluSGVhZGVyLCBtYWluRmlsdGVyKVxuXG4gIG1haW4uYXBwZW5kKFxuICAgIHByYWN0aWNlVGFzayxcbiAgICBuZXdFbGVtZW50KCdkaXYnKSxcbiAgICBuZXdFbGVtZW50KCdkaXYnKSxcbiAgICBuZXdFbGVtZW50KCdkaXYnKSlcblxuICByZXR1cm4gbWFpblxufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZE1haW4iLCJpbXBvcnQgeyBuZXdFbGVtZW50LCBuZXdJbWcgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucydcblxuaW1wb3J0IHRvZGF5U3ZnICAgICAgICBmcm9tICcuL21lZGlhL2NhbGVuZGFyLWFsZXJ0LnN2ZydcbmltcG9ydCB1cGNvbWluZ1N2ZyAgICAgZnJvbSAnLi9tZWRpYS9jYWxlbmRhci1tb250aC1vdXRsaW5lLnN2ZydcbmltcG9ydCBmaWx0ZXJTdmcgICAgICAgZnJvbSAnLi9tZWRpYS9pbWFnZS1maWx0ZXItbm9uZS5zdmcnXG5pbXBvcnQgaGlnaFByaW9yaXR5U3ZnIGZyb20gJy4vbWVkaWEvd2F0ZXItcmVkLnN2ZydcbmltcG9ydCByZWN1cnJpbmdTdmcgICAgZnJvbSAnLi9tZWRpYS93YXRlci1vcmFuZ2Uuc3ZnJ1xuaW1wb3J0IGNhbGVuZGFyU3ZnICAgICBmcm9tICcuL21lZGlhL3RhZy5zdmcnXG5pbXBvcnQgY2lyY2xlR3JlZW5TdmcgIGZyb20gJy4vbWVkaWEvY2lyY2xlLWdyZWVuLnN2ZydcbmltcG9ydCBjaXJjbGVCbHVlU3ZnICAgZnJvbSAnLi9tZWRpYS9jaXJjbGUtYmx1ZS5zdmcnXG5cbmltcG9ydCBjaGV2cm9uRG93blN2ZyAgICAgIGZyb20gJy4vbWVkaWEvY2hldnJvbi1kb3duLnN2ZydcbmltcG9ydCBjaGV2cm9uUmlnaHRTdmcgICAgIGZyb20gJy4vbWVkaWEvY2hldnJvbi1yaWdodC5zdmcnXG5pbXBvcnQgY2hldnJvbkRvd25TbWFsbFN2ZyBmcm9tICcuL21lZGlhL2NoZXZyb24tZG93bi1zbWFsbC5zdmcnXG5cbmNvbnN0IGJ1aWxkU2lkZWJhciA9ICgpID0+IHtcblxuICAvKiBcbiAgXG4gIElmIG11bHRpcGxlIGluc3RhbmNlcyBvZiBhbiBpY29uIGFyZSBuZWVkZWQsIG11c3QgdXNlIG5ld0ltZyBmb3IgZWFjaCBpbnN0YW5jZVxuXG4gIFRoZXJlZm9yZSB3aGVuIHVzaW5nIHRoZSBmb2xsb3dpbmcgaWNvbnMsIHlvdSBtdXN0IGNhbGwgbmV3SW1nIG9uIHRoZSBzdmcgZWxlbWVudCByYXRoZXIgdGhhbiB1c2luZyBhbiBJY29uIGNvbnN0OlxuXG4gIGNoZXZyb25Eb3duU3ZnXG4gIGNoZXZyb25SaWdodFN2Z1xuICBjaGV2cm9uRG93blNtYWxsU3ZnXG4gIGNoZXZyb25SaWdodFNtYWxsU3ZnXG5cbiAgKi9cblxuICAvLyBJY29uc1xuICBjb25zdCB0b2RheUljb24gICAgICAgID0gbmV3SW1nKHRvZGF5U3ZnKVxuICBjb25zdCB1cGNvbWluZ0ljb24gICAgID0gbmV3SW1nKHVwY29taW5nU3ZnKVxuICBjb25zdCBmaWx0ZXJJY29uICAgICAgID0gbmV3SW1nKGZpbHRlclN2ZylcbiAgY29uc3QgaGlnaFByaW9yaXR5SWNvbiA9IG5ld0ltZyhoaWdoUHJpb3JpdHlTdmcpXG4gIGNvbnN0IHJlY3VycmluZ0ljb24gICAgPSBuZXdJbWcocmVjdXJyaW5nU3ZnKVxuICBjb25zdCBjYWxlbmRhckljb24gICAgID0gbmV3SW1nKGNhbGVuZGFyU3ZnKVxuICBjb25zdCBjaXJjbGVHcmVlbkljb24gID0gbmV3SW1nKGNpcmNsZUdyZWVuU3ZnKVxuICBjb25zdCBjaXJjbGVCbHVlSWNvbiAgID0gbmV3SW1nKGNpcmNsZUJsdWVTdmcpXG4gIFxuICAvLyBEaXYgY29udGFpbmVyc1xuICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gbmV3RWxlbWVudCgnZGl2JywgJ3NpZGViYXItY29udGFpbmVyJylcblxuICBjb25zdCBtYWluVGFza3NDb250YWluZXIgPSBuZXdFbGVtZW50KCdkaXYnKVxuICBjb25zdCBmYXZvcml0ZXNDb250YWluZXIgPSBuZXdFbGVtZW50KCdkaXYnKVxuICBjb25zdCBQcm9qZWN0c0NvbnRhaW5lciAgPSBuZXdFbGVtZW50KCdkaXYnKVxuICBcbiAgY29uc3QgdWxNYWluICAgICAgPSBuZXdFbGVtZW50KCd1bCcpXG4gIGNvbnN0IHVsRmF2b3JpdGVzID0gbmV3RWxlbWVudCgndWwnKVxuICBjb25zdCB1bFByb2plY3RzICA9IG5ld0VsZW1lbnQoJ3VsJylcblxuICAvLyBJbmRpdmlkdWFsIGxpc3QgaXRlbXNcbiAgY29uc3QgbWFpblRvZGF5ICAgICAgICAgICAgID0gbmV3RWxlbWVudCgnbGknLCAnc2VsZWN0ZWQtbGknKVxuICBjb25zdCBtYWluVXBjb21pbmcgICAgICAgICAgPSBuZXdFbGVtZW50KCdsaScpXG4gIGNvbnN0IG1haW5GaWx0ZXIgICAgICAgICAgICA9IG5ld0VsZW1lbnQoJ2xpJylcbiAgY29uc3QgZmF2b3JpdGVzSGVhZGVyICAgICAgID0gbmV3RWxlbWVudCgnbGknLCAnbGlzdC1oZWFkZXInKVxuICBjb25zdCBmYXZvcml0ZXNIaWdoUHJpb3JpdHkgPSBuZXdFbGVtZW50KCdsaScpXG4gIGNvbnN0IGZhdm9yaXRlc1JlY3VycmluZyAgICA9IG5ld0VsZW1lbnQoJ2xpJylcbiAgY29uc3QgZmF2b3JpdGVzQ2FsZW5kYXIgICAgID0gbmV3RWxlbWVudCgnbGknKVxuICBjb25zdCBwcm9qZWN0c0hlYWRlciAgICAgICAgPSBuZXdFbGVtZW50KCdsaScsICdsaXN0LWhlYWRlcicsICdwcm9qLWhlYWRlcicpXG4gIGNvbnN0IHByb2plY3RzUGVyc29uYWwgICAgICA9IG5ld0VsZW1lbnQoJ2xpJylcbiAgY29uc3QgcHJvamVjdHNXb3JrICAgICAgICAgID0gbmV3RWxlbWVudCgnbGknKVxuXG4gIC8vIFByb2plY3Qgc3ViLWl0ZW1zXG4gIGNvbnN0IHBlcnNvbmFsSG9tZSAgID0gbmV3RWxlbWVudCgnbGknKVxuICBjb25zdCBwZXJzb25hbEZhbWlseSA9IG5ld0VsZW1lbnQoJ2xpJylcblxuICAvLyBBZGQgdGV4dCB0byBlYWNoIGl0ZW1cbiAgbWFpblRvZGF5LnRleHRDb250ZW50ICAgICAgICAgICAgID0gJ1RvZGF5J1xuICBtYWluVXBjb21pbmcudGV4dENvbnRlbnQgICAgICAgICAgPSAnVXBjb21pbmcnXG4gIG1haW5GaWx0ZXIudGV4dENvbnRlbnQgICAgICAgICAgICA9ICdGaWx0ZXJzICYgTGFiZWxzJ1xuICBmYXZvcml0ZXNIZWFkZXIudGV4dENvbnRlbnQgICAgICAgPSAnRmF2b3JpdGVzJ1xuICBmYXZvcml0ZXNIaWdoUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnSGlnaGVzdCBQcmlvcml0eSdcbiAgZmF2b3JpdGVzUmVjdXJyaW5nLnRleHRDb250ZW50ICAgID0gJ1JlY3VycmluZydcbiAgZmF2b3JpdGVzQ2FsZW5kYXIudGV4dENvbnRlbnQgICAgID0gJ0NhbGVuZGFyJ1xuICBwcm9qZWN0c0hlYWRlci50ZXh0Q29udGVudCAgICAgICAgPSAnUHJvamVjdHMnXG4gIHByb2plY3RzUGVyc29uYWwudGV4dENvbnRlbnQgICAgICA9ICdQZXJzb25hbCdcbiAgcHJvamVjdHNXb3JrLnRleHRDb250ZW50ICAgICAgICAgID0gJ1dvcmsnXG5cbiAgLy8gQWRkIHRleHQgdG8gcHJvamVjdCBzdWItaXRlbXNcbiAgcGVyc29uYWxIb21lLnRleHRDb250ZW50ICAgPSAnSG9tZSdcbiAgcGVyc29uYWxGYW1pbHkudGV4dENvbnRlbnQgPSAnRmFtaWx5J1xuXG4gIC8vIEFkZCBpY29uKHMpIHRvIGVhY2ggaXRlbVxuICBtYWluVG9kYXkucHJlcGVuZCh0b2RheUljb24pXG4gIG1haW5VcGNvbWluZy5wcmVwZW5kKHVwY29taW5nSWNvbilcbiAgbWFpbkZpbHRlci5wcmVwZW5kKGZpbHRlckljb24pXG4gIGZhdm9yaXRlc0hlYWRlci5wcmVwZW5kKG5ld0ltZyhjaGV2cm9uRG93blN2ZykpXG4gIGZhdm9yaXRlc0hpZ2hQcmlvcml0eS5wcmVwZW5kKGhpZ2hQcmlvcml0eUljb24pXG4gIGZhdm9yaXRlc1JlY3VycmluZy5wcmVwZW5kKHJlY3VycmluZ0ljb24pXG4gIGZhdm9yaXRlc0NhbGVuZGFyLnByZXBlbmQoY2FsZW5kYXJJY29uKVxuICBwcm9qZWN0c0hlYWRlci5wcmVwZW5kKG5ld0ltZyhjaGV2cm9uRG93blN2ZykpXG4gIHByb2plY3RzUGVyc29uYWwucHJlcGVuZChjaXJjbGVHcmVlbkljb24pXG4gIHByb2plY3RzUGVyc29uYWwucHJlcGVuZChuZXdJbWcoY2hldnJvbkRvd25TbWFsbFN2ZykpXG4gIHByb2plY3RzV29yay5wcmVwZW5kKGNpcmNsZUJsdWVJY29uKVxuICBwcm9qZWN0c1dvcmsucHJlcGVuZChuZXdJbWcoY2hldnJvbkRvd25TbWFsbFN2ZykpXG5cbiAgcGVyc29uYWxIb21lLnByZXBlbmQobmV3SW1nKGNpcmNsZUdyZWVuU3ZnKSlcbiAgcGVyc29uYWxGYW1pbHkucHJlcGVuZChuZXdJbWcoY2lyY2xlR3JlZW5TdmcpKVxuXG4gIC8vIEFkZCAnZXh0cmEtY2hldnJvbicgY2xhc3MgdG8gaXRlbXMgdGhhdCBoYXZlIHR3byBpY29uc1xuICBwcm9qZWN0c1BlcnNvbmFsLmNsYXNzTGlzdC5hZGQoJ2V4dHJhLWNoZXZyb24nKVxuICBwcm9qZWN0c1dvcmsuY2xhc3NMaXN0LmFkZCgnZXh0cmEtY2hldnJvbicpXG5cbiAgLy8gQWRkIGRhdGFzZXQgdG8gcHJvamVjdCBjYXRlZ29yeSBncm91cGVyc1xuICBwcm9qZWN0c1BlcnNvbmFsLmRhdGFzZXQuaXNQcm9qUGFyZW50ID0gJzEnXG4gIHByb2plY3RzUGVyc29uYWwuZGF0YXNldC5wcm9qTmFtZSA9ICdwZXJzb25hbCdcbiAgcGVyc29uYWxIb21lLmRhdGFzZXQuaXNQcm9qQ2hpbGQgPSAnMSdcbiAgcGVyc29uYWxIb21lLmRhdGFzZXQucHJvalBhcmVudCA9ICdwZXJzb25hbCdcbiAgcGVyc29uYWxGYW1pbHkuZGF0YXNldC5pc1Byb2pDaGlsZCA9ICcxJ1xuICBwZXJzb25hbEZhbWlseS5kYXRhc2V0LnByb2pQYXJlbnQgPSAncGVyc29uYWwnXG5cbiAgLy8gUHV0dGluZyBldmVyeXRoaW5nIHRvZ2V0aGVyXG4gIHNpZGViYXJDb250YWluZXJcbiAgICAuYXBwZW5kQ2hpbGQobWFpblRhc2tzQ29udGFpbmVyKVxuICAgIC5hcHBlbmRDaGlsZCh1bE1haW4pXG4gICAgLmFwcGVuZChcbiAgICAgIG1haW5Ub2RheSxcbiAgICAgIG1haW5VcGNvbWluZyxcbiAgICAgIG1haW5GaWx0ZXJcbiAgICApXG5cbiAgc2lkZWJhckNvbnRhaW5lclxuICAgIC5hcHBlbmRDaGlsZChmYXZvcml0ZXNDb250YWluZXIpXG4gICAgLmFwcGVuZENoaWxkKHVsRmF2b3JpdGVzKVxuICAgIC5hcHBlbmQoXG4gICAgICBmYXZvcml0ZXNIZWFkZXIsXG4gICAgICBmYXZvcml0ZXNIaWdoUHJpb3JpdHksXG4gICAgICBmYXZvcml0ZXNSZWN1cnJpbmcsXG4gICAgICBmYXZvcml0ZXNDYWxlbmRhclxuICAgIClcbiAgXG4gIHNpZGViYXJDb250YWluZXJcbiAgICAuYXBwZW5kQ2hpbGQoUHJvamVjdHNDb250YWluZXIpXG4gICAgLmFwcGVuZENoaWxkKHVsUHJvamVjdHMpXG4gICAgLmFwcGVuZChcbiAgICAgIHByb2plY3RzSGVhZGVyLFxuICAgICAgcHJvamVjdHNQZXJzb25hbCxcbiAgICAgIHBlcnNvbmFsSG9tZSxcbiAgICAgIHBlcnNvbmFsRmFtaWx5LFxuICAgICAgcHJvamVjdHNXb3JrXG4gICAgKVxuXG4gIHJldHVybiBzaWRlYmFyQ29udGFpbmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkU2lkZWJhciIsIi8vIGNsYXNzIGZvciBQYWdlUHJvcGVydGllc1xuXG5jbGFzcyBQYWdlUHJvcGVydGllcyB7XG4gIGlzVGFza0Zvcm1PcGVuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VQcm9wZXJ0aWVzIiwiLy8gUHJvamVjdExpc3QgY2xhc3NcblxuY2xhc3MgUHJvamVjdExpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiNpbml0KClcbiAgfVxuXG4gICNpbml0KCkge1xuICAgIHRoaXMuYWxsID0gW11cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0TGlzdCIsIi8vIFRhc2sgY2xhc3NcblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG9iaikge1xuICAgIHRoaXMubmFtZSAgICAgPSBvYmoubmFtZVxuICAgIHRoaXMuZHVlRGF0ZSAgPSBvYmouZHVlRGF0ZVxuICAgIHRoaXMuZGVzYyAgICAgPSBvYmouZGVzY1xuICAgIHRoaXMucHJpb3JpdHkgPSBvYmoucHJpb3JpdHlcbiAgICB0aGlzLnByb2plY3QgID0gb2JqLnByb2plY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrIiwiLy8gVGFza0xpc3QgY2xhc3MgXG5cbmNsYXNzIFRhc2tMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4jaW5pdCgpXG4gICAgdGhpcy5jdXJGaWx0ZXIgPSB7XG4gICAgICBwcmlvcml0eTogXCJcIixcbiAgICAgIHByb2plY3Q6IFwiXCJcbiAgICB9XG4gIH1cblxuICAjaW5pdCgpIHtcbiAgICB0aGlzLmFsbCAgICAgICAgPSBbXVxuICAgIHRoaXMudmlzaWJsZSAgICA9IFtdXG4gICAgdGhpcy5hbXRBbGwgICAgID0gMFxuICAgIHRoaXMuYW10VmlzaWJsZSA9IDBcbiAgfVxuXG4gIGFkZCh0YXNrKSB7XG4gICAgdGhpcy5hbGwucHVzaCh0YXNrKVxuICAgIHRoaXMuYW10QWxsKytcblxuICAgIGlmICh0aGlzLiNzaG91bGRCZVZpc2libGUodGFzaykpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd5ZXMnKVxuICAgICAgXG4gICAgICB0aGlzLnZpc2libGUucHVzaCh0YXNrKVxuICAgICAgdGhpcy52aXNpYmxlLnNvcnQoKVxuICAgIH1cbiAgfVxuXG4gIHNvcnQoKSB7XG5cbiAgfVxuXG4gIGZpbHRlcigpIHtcblxuICB9XG5cbiAgI3Nob3VsZEJlVmlzaWJsZSh0YXNrKSB7XG4gICAgaWYgKHRoaXMuY3VyRmlsdGVyID09PSAnJyAmJiB0aGlzLmN1ckZpbHRlci5wcm9qZWN0ID09PSAnJykgcmV0dXJuIHRydWVcblxuICAgIGlmICh0aGlzLmN1ckZpbHRlci5wcmlvcml0eSkge1xuICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09IHRoaXMuY3VyRmlsdGVyLnByaW9yaXR5KSByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGlmICh0aGlzLmN1ckZpbHRlci5wcm9qZWN0KSB7XG4gICAgICBpZiAodGFzay5wcm9qZWN0ID09PSB0aGlzLmN1ckZpbHRlci5wcm9qZWN0KSByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tMaXN0IiwiZnVuY3Rpb24gbmV3RWxlbWVudCh0eXBlLCAuLi5jbGFzc2VzKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcbiAgY2xhc3Nlcy5mb3JFYWNoKChjbCkgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2wpXG4gIH0pXG4gIHJldHVybiBlbFxufVxuXG5mdW5jdGlvbiBuZXdPcHRpb24odmFsdWUsIHRleHQpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgZWwudmFsdWUgPSB2YWx1ZVxuICBlbC50ZXh0Q29udGVudCA9IHRleHRcblxuICByZXR1cm4gZWxcbn1cblxuZnVuY3Rpb24gbmV3SW1nKHNyYykge1xuICBsZXQgdG1wID0gbmV3IEltYWdlKClcbiAgdG1wLnNyYyA9IHNyY1xuICByZXR1cm4gdG1wXG59XG5cbmZ1bmN0aW9uIGdldERhdGVUb2RheVN0cigpIHtcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG5cbiAgaWYgKG1vbnRoIDwgMTApIG1vbnRoID0gYDAke21vbnRofWBcbiAgaWYgKGRheSA8IDEwKSBkYXkgPSBgMCR7ZGF5fWBcblxuICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YFxufVxuXG5leHBvcnQgeyBuZXdFbGVtZW50LCBuZXdPcHRpb24sIG5ld0ltZywgZ2V0RGF0ZVRvZGF5U3RyIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuaW1wb3J0IHsgbmV3RWxlbWVudCwgbmV3SW1nIH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnXG5cbmltcG9ydCBidWlsZEhlYWRlciAgZnJvbSAnLi9idWlsZEhlYWRlcidcbmltcG9ydCBidWlsZFNpZGViYXIgZnJvbSAnLi9idWlsZFNpZGViYXInXG5pbXBvcnQgYnVpbGRNYWluICAgIGZyb20gJy4vYnVpbGRNYWluJ1xuXG5pbXBvcnQgeyBidWlsZFRhc2tGb3JtTW9kYWwsIGNsb3NlVGFza0Zvcm0sIGNsZWFyVGFza0Zvcm0gfSBmcm9tICcuL0RPTW1ldGhvZHMnXG5cbmltcG9ydCBUYXNrICAgICAgICBmcm9tICcuL2NsYXNzZXMvdGFzaydcbmltcG9ydCBUYXNrTGlzdCAgICBmcm9tICcuL2NsYXNzZXMvdGFza0xpc3QnXG5pbXBvcnQgUHJvamVjdCAgICAgZnJvbSAnLi9jbGFzc2VzL3Byb2plY3QnXG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSAnLi9jbGFzc2VzL3Byb2plY3RMaXN0J1xuXG5pbXBvcnQgUGFnZVByb3BlcnRpZXMgZnJvbSAnLi9jbGFzc2VzL1BhZ2VQcm9wZXJ0aWVzJ1xuXG5jb25zdCBQYWdlICAgICAgICA9IG5ldyBQYWdlUHJvcGVydGllcygpXG5jb25zdCB0YXNrTGlzdCAgICA9IG5ldyBUYXNrTGlzdCgpXG5jb25zdCBwcm9qZWN0TGlzdCA9IG5ldyBQcm9qZWN0TGlzdCgpXG5cbmNvbnN0IENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbmNvbnN0IGhlYWRlciAgPSBidWlsZEhlYWRlcigpXG5jb25zdCBzaWRlYmFyID0gYnVpbGRTaWRlYmFyKClcbmNvbnN0IG1haW4gICAgPSBidWlsZE1haW4oKVxuXG5jb25zdCB0YXNrRm9ybSA9IGJ1aWxkVGFza0Zvcm1Nb2RhbCgpXG5cbkNvbnRlbnQuYXBwZW5kKGhlYWRlciwgc2lkZWJhciwgbWFpbiwgdGFza0Zvcm0ubW9kYWwpXG5cbi8vIE5ldyB0YXNrIGJ1dHRvbiBmdW5jdGlvbmFsaXR5XG5jb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLWJ0bicpXG5cbm5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgaWYgKCFQYWdlLmlzVGFza0Zvcm1PcGVuKSB7XG4gICAgUGFnZS5pc1Rhc2tGb3JtT3BlbiA9IHRydWVcbiAgICB0YXNrRm9ybS5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIFxuICAgIC8vYnVpbGROZXdUYXNrRm9ybShtb2RhbCwgdGFza1N1Ym1pdEJ0biwgZm9ybURpdiAsZm9ybUNsb3NlQnRuKVxuICB9IGVsc2Uge1xuICAgIGFsZXJ0KCdZb3UgbXVzdCBzYXZlIG9yIGNsb3NlIHRoZSBjdXJyZW50IHRhc2sgYmVmb3JlIGNyZWF0aW5nIGEgbmV3IG9uZS4nKVxuICB9XG59KVxuXG5jb25zdCBjbG9zZUFuZENsZWFyRm9ybSA9IGZ1bmN0aW9uKCkge1xuICBjbG9zZVRhc2tGb3JtKHRhc2tGb3JtLm1vZGFsKVxuICBjbGVhclRhc2tGb3JtKFxuICAgIHRhc2tGb3JtLm5hbWUsIFxuICAgIHRhc2tGb3JtLmRlc2MsIFxuICAgIHRhc2tGb3JtLmR1ZURhdGUsIFxuICAgIHRhc2tGb3JtLnByaW9yaXR5LmhpZ2gsIFxuICAgIHRhc2tGb3JtLnByaW9yaXR5Lm1lZCwgXG4gICAgdGFza0Zvcm0ucHJpb3JpdHkubG93LCBcbiAgICB0YXNrRm9ybS5wcm9qZWN0KVxuICBQYWdlLmlzVGFza0Zvcm1PcGVuID0gZmFsc2Vcbn1cblxudGFza0Zvcm0uY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgY2xvc2VBbmRDbGVhckZvcm0oKVxufSlcblxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0YXNrRm9ybS5tb2RhbCkge1xuICAgIGNsb3NlQW5kQ2xlYXJGb3JtKClcbiAgfVxufVxuXG50YXNrRm9ybS5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgXG4gIGxldCBzZWxlY3RlZFByaW9yaXR5ID0gXG4gICAgdGFza0Zvcm0ucHJpb3JpdHkuaGlnaC5jaGVja2VkID8gJ2hpZ2gnIDogXG4gICAgdGFza0Zvcm0ucHJpb3JpdHkubWVkLmNoZWNrZWQgID8gJ21lZCcgOiBcbiAgICB0YXNrRm9ybS5wcmlvcml0eS5sb3cuY2hlY2tlZCAgPyAnbG93JyA6IHVuZGVmaW5lZFxuXG4gIGlmICghdGFza0Zvcm0ubmFtZS52YWx1ZSkge1xuICAgIGFsZXJ0KCdBIHRhc2sgbmFtZSBpcyByZXF1aXJlZC4nKVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCF0YXNrRm9ybS5kdWVEYXRlLnZhbHVlKSB7XG4gICAgYWxlcnQoJ0EgZHVlIGRhdGUgaXMgcmVxdWlyZWQuJylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxldCByZXN1bHRzID0ge1xuICAgIG5hbWU6IHRhc2tGb3JtLm5hbWUudmFsdWUsXG4gICAgZGVzYzogdGFza0Zvcm0uZGVzYy52YWx1ZSxcbiAgICBkdWVEYXRlOiB0YXNrRm9ybS5kdWVEYXRlLnZhbHVlLFxuICAgIHByaW9yaXR5OiBzZWxlY3RlZFByaW9yaXR5LFxuICAgIHByb2plY3Q6IHRhc2tGb3JtLnByb2plY3QudmFsdWVcbiAgfVxuXG4gIHRhc2tMaXN0LmFkZChuZXcgVGFzayhyZXN1bHRzKSlcblxuICBjb25zb2xlLmxvZyhyZXN1bHRzKVxuICBcbiAgY2xvc2VBbmRDbGVhckZvcm0oKVxuICBQYWdlLmlzVGFza0Zvcm1PcGVuID0gZmFsc2Vcbi8qXG4gIHRhc2tGb3JtLmFuaW1hdGUoW1xuICAgIHsgdHJhbnNmb3JtOiAnc2NhbGUoMSwxKScgfSxcbiAgICB7IHRyYW5zZm9ybTogJ3NjYWxlKDAsMCknIH1cbiAgXSwgeyBkdXJhdGlvbjogNTAwIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHRhc2tGb3JtLnJlbW92ZSgpXG4gIH0pXG5cblxuICBsZXQgc2MgPSAxXG4gXG5cbiAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgc2MgLT0gLjFcbiAgICB0YXNrRm9ybS5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoc2MsIHNjKSdcbiAgICBjb25zb2xlLmxvZyh0YXNrRm9ybS5zdHlsZSlcbiAgICBcbiAgfSwgMjAwKVxuXG4gIGZ1bmN0aW9uIGRvVGhpcygpIHsgdGFza0Zvcm0ucmVtb3ZlKCkgfVxuICBzZXRJbnRlcnZhbChkb1RoaXMsIDEwMDApXG5cblxuICBcblxuICBjb25zb2xlLmxvZyh0YXNrTGlzdClcbiAgKi9cbiAgXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==