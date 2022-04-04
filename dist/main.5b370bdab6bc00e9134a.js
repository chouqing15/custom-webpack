"use strict";
(self["webpackChunkcustom_react_webpack"] = self["webpackChunkcustom_react_webpack"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./src/math.js");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/print.js");



function component() {
  const element = document.createElement('pre'); // Lodash, now imported by this script

  element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cube)(5)].join('\n\n'); //  element.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
  //   const printMe = module.default;
  //   printMe();
  // });

  element.onclick = _print__WEBPACK_IMPORTED_MODULE_1__["default"];
  return element;
}

document.body.appendChild(component());

if (true) {
  module.hot.accept();
}

/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cube": () => (/* binding */ cube)
/* harmony export */ });
/* unused harmony export square */
function square(x) {
  return x * x;
}
function cube(x) {
  return x * x * x;
}

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function printMe() {
  console.log('2');
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./node_modules/webpack-hot-middleware/client.js?reload=true"), __webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41YjM3MGJkYWI2YmMwMGU5MTM0YS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUUsU0FBU0UsU0FBVCxHQUFxQjtBQUNwQixRQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFoQixDQURvQixDQUdwQjs7QUFDQUYsRUFBQUEsT0FBTyxDQUFDRyxTQUFSLEdBQW9CLENBQ2xCLGdCQURrQixFQUVsQix5QkFBeUJOLDhDQUFJLENBQUMsQ0FBRCxDQUZYLEVBR2xCTyxJQUhrQixDQUdiLE1BSGEsQ0FBcEIsQ0FKb0IsQ0FTckI7QUFDQTtBQUVBO0FBQ0E7O0FBRUFKLEVBQUFBLE9BQU8sQ0FBQ0ssT0FBUixHQUFrQlAsOENBQWxCO0FBRUUsU0FBT0UsT0FBUDtBQUNEOztBQUVEQyxRQUFRLENBQUNLLElBQVQsQ0FBY0MsV0FBZCxDQUEwQlIsU0FBUyxFQUFuQzs7QUFFRCxJQUFJUyxJQUFKLEVBQWdCO0FBQ2ZBLEVBQUFBLGlCQUFBO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O0FDM0JNLFNBQVNHLE1BQVQsQ0FBZ0JDLENBQWhCLEVBQW1CO0FBQ3RCLFNBQU9BLENBQUMsR0FBR0EsQ0FBWDtBQUNEO0FBRU0sU0FBU2YsSUFBVCxDQUFjZSxDQUFkLEVBQWlCO0FBQ3RCLFNBQU9BLENBQUMsR0FBR0EsQ0FBSixHQUFRQSxDQUFmO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7OztBQ0xEO0FBRWUsU0FBU2QsT0FBVCxHQUFtQjtBQUNoQ2dCLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2N1c3RvbV9yZWFjdF93ZWJwYWNrLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2N1c3RvbV9yZWFjdF93ZWJwYWNrLy4vc3JjL21hdGguanMiLCJ3ZWJwYWNrOi8vY3VzdG9tX3JlYWN0X3dlYnBhY2svLi9zcmMvcHJpbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3ViZSB9IGZyb20gJy4vbWF0aC5qcyc7XHJcbmltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQnO1xyXG5cclxuICBmdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcbiAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcclxuXHJcbiAgIC8vIExvZGFzaCwgbm93IGltcG9ydGVkIGJ5IHRoaXMgc2NyaXB0XHJcbiAgIGVsZW1lbnQuaW5uZXJIVE1MID0gW1xyXG4gICAgICdIZWxsbyB3ZWJwYWNrIScsXHJcbiAgICAgJzUgY3ViZWQgaXMgZXF1YWwgdG8gJyArIGN1YmUoNSlcclxuICAgXS5qb2luKCdcXG5cXG4nKTtcclxuXHJcbiAgLy8gIGVsZW1lbnQub25jbGljayA9IGUgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicHJpbnRcIiAqLyAnLi9wcmludCcpLnRoZW4obW9kdWxlID0+IHtcclxuICAvLyAgIGNvbnN0IHByaW50TWUgPSBtb2R1bGUuZGVmYXVsdDtcclxuXHJcbiAgLy8gICBwcmludE1lKCk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIGVsZW1lbnQub25jbGljayA9IHByaW50TWU7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcclxuXHJcbiBpZiAobW9kdWxlLmhvdCkge1xyXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcclxufSIsImV4cG9ydCBmdW5jdGlvbiBzcXVhcmUoeCkge1xyXG4gICAgcmV0dXJuIHggKiB4O1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZnVuY3Rpb24gY3ViZSh4KSB7XHJcbiAgICByZXR1cm4geCAqIHggKiB4O1xyXG4gIH0iLCJcclxuICBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xyXG4gICAgY29uc29sZS5sb2coJzInKTtcclxuICB9XHJcbiJdLCJuYW1lcyI6WyJjdWJlIiwicHJpbnRNZSIsImNvbXBvbmVudCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJqb2luIiwib25jbGljayIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCIsInNxdWFyZSIsIngiLCJfIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=