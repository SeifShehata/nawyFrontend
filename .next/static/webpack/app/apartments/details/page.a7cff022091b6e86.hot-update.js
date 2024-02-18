"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/apartments/details/page",{

/***/ "(app-pages-browser)/./src/app/apartments/details/page.js":
/*!********************************************!*\
  !*** ./src/app/apartments/details/page.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// ... (other imports)\nfunction Details() {\n    var _data_imgUrls;\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const id = searchParams.get(\"id\");\n    console.log(id);\n    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null); // Initialize with null\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3000/getapartment/\".concat(id)).then((res)=>{\n            setData(res.data);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    }, [\n        id\n    ]);\n    const appDetails = data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"details-main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-title\",\n                children: data.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-imgs\",\n                children: (_data_imgUrls = data.imgUrls) === null || _data_imgUrls === void 0 ? void 0 : _data_imgUrls.map((url, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: url,\n                        alt: \"Image \".concat(index + 1),\n                        className: \"image-\".concat(index + 1)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-description\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: data.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: [\n                            data.guests,\n                            \" guests  \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"3 guests - 1 bedroom\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"2 reviews\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n        lineNumber: 26,\n        columnNumber: 7\n    }, this) : null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: appDetails\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n        lineNumber: 43,\n        columnNumber: 7\n    }, this);\n}\n_s(Details, \"OiGgvCKkL0XJ7LXmabT6p6Epo3M=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c = Details;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);\nvar _c;\n$RefreshReg$(_c, \"Details\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBhcnRtZW50cy9kZXRhaWxzL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3lCO0FBQ0M7QUFDYztBQUNVO0FBQ2xELHNCQUFzQjtBQUV0QixTQUFTSTtRQXFCRUM7O0lBcEJQLE1BQU1DLGVBQWVILGdFQUFlQTtJQUNwQyxNQUFNSSxLQUFLRCxhQUFhRSxHQUFHLENBQUM7SUFDNUJDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWixNQUFNLENBQUNGLE1BQU1NLFFBQVEsR0FBR1gscURBQWMsQ0FBQyxPQUFPLHVCQUF1QjtJQUVyRUEsc0RBQWUsQ0FBQztRQUNkQyw2Q0FBS0EsQ0FBQ08sR0FBRyxDQUFDLHNDQUF5QyxPQUFIRCxLQUM3Q08sSUFBSSxDQUFDQyxDQUFBQTtZQUNKSixRQUFRSSxJQUFJVixJQUFJO1FBQ2xCLEdBQ0NXLEtBQUssQ0FBQ0MsQ0FBQUE7WUFDTFIsUUFBUUMsR0FBRyxDQUFDTztRQUNkO0lBQ0osR0FBRztRQUFDVjtLQUFHO0lBRVAsTUFBTVcsYUFBYWIscUJBQ2pCLDhEQUFDYztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQWlCZixLQUFLZ0IsSUFBSTs7Ozs7OzBCQUN6Qyw4REFBQ0Y7Z0JBQUlDLFdBQVU7MkJBQ1pmLGdCQUFBQSxLQUFLaUIsT0FBTyxjQUFaakIsb0NBQUFBLGNBQWNrQixHQUFHLENBQUMsQ0FBQ0MsS0FBS0Msc0JBQ3ZCLDhEQUFDQzt3QkFBZ0JDLEtBQUtIO3dCQUFLSSxLQUFLLFNBQW1CLE9BQVZILFFBQVE7d0JBQUtMLFdBQVcsU0FBaUIsT0FBUkssUUFBTTt1QkFBdEVBOzs7Ozs7Ozs7OzBCQUdkLDhEQUFDTjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNTO2tDQUFJeEIsS0FBS3lCLFdBQVc7Ozs7OztrQ0FDckIsOERBQUNDOzs0QkFBSTFCLEtBQUsyQixNQUFNOzRCQUFDOzs7Ozs7O2tDQUNqQiw4REFBQ0M7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBR0w7SUFFSixxQkFDRSw4REFBQ2Q7a0JBQ0VEOzs7Ozs7QUFHUDtHQXZDT2Q7O1FBQ2dCRCw0REFBZUE7OztLQUQvQkM7QUF5Q1AsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hcGFydG1lbnRzL2RldGFpbHMvcGFnZS5qcz9iYTMyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG4vLyAuLi4gKG90aGVyIGltcG9ydHMpXHJcblxyXG5mdW5jdGlvbiBEZXRhaWxzKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBjb25zdCBpZCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJpZFwiKTtcclxuICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICBcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpOyAvLyBJbml0aWFsaXplIHdpdGggbnVsbFxyXG4gIFxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2V0YXBhcnRtZW50LyR7aWR9YClcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgc2V0RGF0YShyZXMuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbaWRdKTtcclxuICBcclxuICAgIGNvbnN0IGFwcERldGFpbHMgPSBkYXRhID8gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGV0YWlscy1tYWluJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGV0YWlscy10aXRsZSc+e2RhdGEubmFtZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGV0YWlscy1pbWdzJz5cclxuICAgICAgICAgIHtkYXRhLmltZ1VybHM/Lm1hcCgodXJsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8aW1nIGtleT17aW5kZXh9IHNyYz17dXJsfSBhbHQ9e2BJbWFnZSAke2luZGV4ICsgMX1gfSBjbGFzc05hbWU9e2BpbWFnZS0ke2luZGV4KzF9YH0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXRhaWxzLWRlc2NyaXB0aW9uJz5cclxuICAgICAgICAgIDxoMz57ZGF0YS5kZXNjcmlwdGlvbn08L2gzPlxyXG4gICAgICAgICAgPGg0PntkYXRhLmd1ZXN0c30gZ3Vlc3RzICA8L2g0PlxyXG4gICAgICAgICAgPHA+MyBndWVzdHMgLSAxIGJlZHJvb208L3A+XHJcbiAgICAgICAgICA8cD4yIHJldmlld3M8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSA6IG51bGw7XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHthcHBEZXRhaWxzfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IERldGFpbHM7Il0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VTZWFyY2hQYXJhbXMiLCJEZXRhaWxzIiwiZGF0YSIsInNlYXJjaFBhcmFtcyIsImlkIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImVyciIsImFwcERldGFpbHMiLCJkaXYiLCJjbGFzc05hbWUiLCJuYW1lIiwiaW1nVXJscyIsIm1hcCIsInVybCIsImluZGV4IiwiaW1nIiwic3JjIiwiYWx0IiwiaDMiLCJkZXNjcmlwdGlvbiIsImg0IiwiZ3Vlc3RzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/apartments/details/page.js\n"));

/***/ })

});