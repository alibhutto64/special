"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/trophy-api";
exports.ids = ["pages/api/trophy-api"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/trophy-api.js":
/*!*********************************!*\
  !*** ./pages/api/trophy-api.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nfunction handler(req, res) {\n    saveData(req.body);\n    res.status(200).json({\n        upload: true\n    });\n};\nfunction saveData(data) {\n    fs.writeFileSync('./data/reward.content.json', JSON.stringify(data, null, 4));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJvcGh5LWFwaS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsRUFBNkU7QUFDN0UsS0FBSyxDQUFDQSxFQUFFLEdBQUdDLG1CQUFPLENBQUMsY0FBSTtBQUVSLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ3pDQyxRQUFRLENBQUNGLEdBQUcsQ0FBQ0csSUFBSTtJQUNqQkYsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztRQUFDQyxNQUFNLEVBQUUsSUFBSTtJQUFDLENBQUM7QUFDdkMsQ0FBQztTQUVRSixRQUFRLENBQUNLLElBQUksRUFBRSxDQUFDO0lBQ3ZCVixFQUFFLENBQUNXLGFBQWEsQ0FBQyxDQUE0Qiw2QkFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNILElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUM3RSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvd3MvLi9wYWdlcy9hcGkvdHJvcGh5LWFwaS5qcz9mZGE2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgc2F2ZURhdGEocmVxLmJvZHkpXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdXBsb2FkOiB0cnVlIH0pXG59XG5cbmZ1bmN0aW9uIHNhdmVEYXRhKGRhdGEpIHtcbiAgZnMud3JpdGVGaWxlU3luYygnLi9kYXRhL3Jld2FyZC5jb250ZW50Lmpzb24nLCBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCA0KSk7XG59XG4iXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNhdmVEYXRhIiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJ1cGxvYWQiLCJkYXRhIiwid3JpdGVGaWxlU3luYyIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/trophy-api.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/trophy-api.js"));
module.exports = __webpack_exports__;

})();