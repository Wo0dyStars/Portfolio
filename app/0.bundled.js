(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./app/assets/scripts/modules/ResourcesModal.js":
/*!******************************************************!*\
  !*** ./app/assets/scripts/modules/ResourcesModal.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass ResourcesModal {\r\n\tconstructor(HTMLelement) {\r\n\t\tthis.element = HTMLelement;\r\n\t\tthis.closeX = document.querySelector('.close-resources');\r\n\t\tthis.events();\r\n\t}\r\n\r\n\tevents() {\r\n\t\tthis.closeX.addEventListener('click', () => this.close());\r\n\t}\r\n\r\n\topen() {\r\n\t\tthis.element.classList.add('visible');\r\n\t\tthis.element.classList.remove('invisible');\r\n\t}\r\n\r\n\tclose() {\r\n\t\tthis.element.classList.remove('visible');\r\n\t\tthis.element.classList.add('invisible');\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResourcesModal);\r\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/ResourcesModal.js?");

/***/ })

}]);