exports.ids = [105];
exports.modules = {

/***/ "../../node_modules/@arcgis/core/arcade/functions/featuresetstats.js":
/*!***************************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/arcade/functions/featuresetstats.js ***!
  \***************************************************************************************************************/
/*! exports provided: registerFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFunctions", function() { return m; });
/* harmony import */ var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/languageUtils.js */ "../../node_modules/@arcgis/core/chunks/languageUtils.js");
/* harmony import */ var _fieldStats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fieldStats.js */ "../../node_modules/@arcgis/core/arcade/functions/fieldStats.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "../../node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sql/WhereClause.js */ "../../node_modules/@arcgis/core/core/sql/WhereClause.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function l(n,e,c,s,l,m){if(1===s.length){if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["a"])(s[0]))return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])(Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__["calculateStat"])(n,s[0],Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["C"])(s[1],-1)));if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["b"])(s[0]))return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])(Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__["calculateStat"])(n,s[0].toArray(),Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["C"])(s[1],-1)))}else if(2===s.length){if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["a"])(s[0]))return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])(Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__["calculateStat"])(n,s[0],Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["C"])(s[1],-1)));if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["b"])(s[0]))return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])(Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__["calculateStat"])(n,s[0].toArray(),Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["C"])(s[1],-1)));if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["q"])(s[0]))return s[0].load().then((t=>d(_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_3__["WhereClause"].create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["C"])(s[2],1e3),e.abortSignal)))))}else if(3===s.length&&Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["q"])(s[0]))return s[0].load().then((t=>d(_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_3__["WhereClause"].create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["C"])(s[2],1e3),e.abortSignal)))));return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])(Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_1__["calculateStat"])(n,s,-1))}function d(n,t,r){try{const e=n.getVariables();if(e.length>0){const u=[];for(let n=0;n<e.length;n++){const i={name:e[n]};u.push(t.evaluateIdentifier(r,i))}return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(u).then((t=>{const r={};for(let n=0;n<e.length;n++)r[e[n]]=t[n];return n.parameters=r,n}))}return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])(n)}catch(e){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["reject"])(e)}}function m(i){"async"===i.mode&&(i.functions.stdev=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("stdev",t,r,e,n,i)}))},i.functions.variance=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("variance",t,r,e,n,i)}))},i.functions.average=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,r,e,n,i)}))},i.functions.mean=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,r,e,n,i)}))},i.functions.sum=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("sum",t,r,e,n,i)}))},i.functions.min=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("min",t,r,e,n,i)}))},i.functions.max=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("max",t,r,e,n,i)}))},i.functions.count=function(a,o){return i.standardFunctionAsync(a,o,(function(i,a,o){if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["p"])(o,1,1),Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["q"])(o[0]))return o[0].count(i.abortSignal);if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["a"])(o[0])||Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["g"])(o[0]))return o[0].length;if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__["b"])(o[0]))return o[0].length();throw new Error("Invalid Parameters for Count")}))})}


/***/ }),

/***/ "../../node_modules/@arcgis/core/chunks/_commonjsHelpers.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/chubs/development/react-ags-maps/node_modules/@arcgis/core/chunks/_commonjsHelpers.js ***!
  \******************************************************************************************************/
/*! exports provided: a, c, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}


/***/ })

};;
//# sourceMappingURL=105.render-page.js.map