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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/styled.js\");\n/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Table */ \"(app-pages-browser)/./node_modules/@mui/material/Table/Table.js\");\n/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/TableBody */ \"(app-pages-browser)/./node_modules/@mui/material/TableBody/TableBody.js\");\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TableCell */ \"(app-pages-browser)/./node_modules/@mui/material/TableCell/TableCell.js\");\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TableCell */ \"(app-pages-browser)/./node_modules/@mui/material/TableCell/tableCellClasses.js\");\n/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/TableContainer */ \"(app-pages-browser)/./node_modules/@mui/material/TableContainer/TableContainer.js\");\n/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/TableHead */ \"(app-pages-browser)/./node_modules/@mui/material/TableHead/TableHead.js\");\n/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TableRow */ \"(app-pages-browser)/./node_modules/@mui/material/TableRow/TableRow.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Paper */ \"(app-pages-browser)/./node_modules/@mui/material/Paper/Paper.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst StyledTableCell = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((param)=>{\n    let { theme } = param;\n    return {\n        [\"&.\".concat(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__[\"default\"].head)]: {\n            backgroundColor: theme.palette.common.black,\n            color: theme.palette.common.white\n        },\n        [\"&.\".concat(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__[\"default\"].body)]: {\n            fontSize: 14\n        }\n    };\n});\n_c = StyledTableCell;\nconst StyledTableRow = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((param)=>{\n    let { theme } = param;\n    return {\n        \"&:nth-of-type(odd)\": {\n            backgroundColor: theme.palette.action.hover\n        },\n        // hide last border\n        \"&:last-child td, &:last-child th\": {\n            border: 0\n        }\n    };\n});\n_c1 = StyledTableRow;\nfunction Details() {\n    var _data_imgUrls;\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const id = searchParams.get(\"id\");\n    console.log(id);\n    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null); // Initialize with null\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://localhost:3000/getapartment/\".concat(id)).then((res)=>{\n            setData(res.data);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    }, [\n        id\n    ]);\n    console.log(data);\n    const appDetails = data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"details-main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-title\",\n                children: data.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-imgs\",\n                children: (_data_imgUrls = data.imgUrls) === null || _data_imgUrls === void 0 ? void 0 : _data_imgUrls.map((url, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: url,\n                        alt: \"Image \".concat(index + 1),\n                        className: \"image-\".concat(index + 1)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"details-description\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: data.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            data.guests,\n                            \" guest/s - \",\n                            data.bedrooms,\n                            \" bedroom/s\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n        lineNumber: 56,\n        columnNumber: 7\n    }, this) : null;\n    function createData(name, value) {\n        return {\n            name,\n            value\n        };\n    }\n    const rows = data ? [\n        createData(\"Additional Fees\", data.additionalFees),\n        createData(\"Address\", data.address),\n        createData(\"Application Fee\", data.applicationFee),\n        createData(\"Bedrooms\", data.bedrooms),\n        createData(\"City\", data.city),\n        createData(\"Deposit Fee\", data.depositFee),\n        createData(\"Description\", data.description),\n        createData(\"Guests\", data.guests),\n        createData(\"Lease Terms\", data.leaseTerms),\n        createData(\"Name\", data.name),\n        createData(\"Parking Details\", data.parkingDetails),\n        createData(\"Price\", data.price)\n    ] : []; //has to be likethat because tis initially null\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"details-main\",\n        children: [\n            appDetails,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n                style: {\n                    width: \"100%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Table__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    sx: {\n                        minWidth: 700\n                    },\n                    \"aria-label\": \"customized table\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {\n                                        children: \"Property\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {\n                                        align: \"right\",\n                                        children: \"Value\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                            children: rows.map((row)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableRow, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {\n                                            component: \"th\",\n                                            scope: \"row\",\n                                            children: row.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                                            lineNumber: 105,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {\n                                            align: \"right\",\n                                            children: row.value\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                                            lineNumber: 108,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, row.name, true, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\projects\\\\nawyFrontend\\\\frontend\\\\src\\\\app\\\\apartments\\\\details\\\\page.js\",\n        lineNumber: 92,\n        columnNumber: 7\n    }, this);\n}\n_s(Details, \"OiGgvCKkL0XJ7LXmabT6p6Epo3M=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c2 = Details;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"StyledTableCell\");\n$RefreshReg$(_c1, \"StyledTableRow\");\n$RefreshReg$(_c2, \"Details\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBhcnRtZW50cy9kZXRhaWxzL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3lCO0FBQ0M7QUFDYztBQUNVO0FBQ0o7QUFDTjtBQUNRO0FBQ3NCO0FBQ1o7QUFDVjtBQUNGO0FBQ047QUFFeEMsTUFBTWEsa0JBQWtCVCxnRUFBTUEsQ0FBQ0csK0RBQVNBLEVBQUU7UUFBQyxFQUFFTyxLQUFLLEVBQUU7V0FBTTtRQUN4RCxDQUFDLEtBQTJCLE9BQXRCTiwrREFBZ0JBLENBQUNPLElBQUksRUFBRyxFQUFFO1lBQzlCQyxpQkFBaUJGLE1BQU1HLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO1lBQzNDQyxPQUFPTixNQUFNRyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0csS0FBSztRQUNuQztRQUNBLENBQUMsS0FBMkIsT0FBdEJiLCtEQUFnQkEsQ0FBQ2MsSUFBSSxFQUFHLEVBQUU7WUFDOUJDLFVBQVU7UUFDWjtJQUNGOztLQVJNVjtBQVVOLE1BQU1XLGlCQUFpQnBCLGdFQUFNQSxDQUFDTyw4REFBUUEsRUFBRTtRQUFDLEVBQUVHLEtBQUssRUFBRTtXQUFNO1FBQ3RELHNCQUFzQjtZQUNwQkUsaUJBQWlCRixNQUFNRyxPQUFPLENBQUNRLE1BQU0sQ0FBQ0MsS0FBSztRQUM3QztRQUNBLG1CQUFtQjtRQUNuQixvQ0FBb0M7WUFDbENDLFFBQVE7UUFDVjtJQUNGOztNQVJNSDtBQWFOLFNBQVNJO1FBcUJFQzs7SUFwQlAsTUFBTUMsZUFBZTNCLGdFQUFlQTtJQUNwQyxNQUFNNEIsS0FBS0QsYUFBYUUsR0FBRyxDQUFDO0lBQzVCQyxRQUFRQyxHQUFHLENBQUNIO0lBRVosTUFBTSxDQUFDRixNQUFNTSxRQUFRLEdBQUduQyxxREFBYyxDQUFDLE9BQU8sdUJBQXVCO0lBRXJFQSxzREFBZSxDQUFDO1FBQ2RDLDZDQUFLQSxDQUFDK0IsR0FBRyxDQUFDLHNDQUF5QyxPQUFIRCxLQUM3Q08sSUFBSSxDQUFDQyxDQUFBQTtZQUNKSixRQUFRSSxJQUFJVixJQUFJO1FBQ2xCLEdBQ0NXLEtBQUssQ0FBQ0MsQ0FBQUE7WUFDTFIsUUFBUUMsR0FBRyxDQUFDTztRQUNkO0lBQ0osR0FBRztRQUFDVjtLQUFHO0lBQ1BFLFFBQVFDLEdBQUcsQ0FBQ0w7SUFDWixNQUFNYSxhQUFhYixxQkFDakIsOERBQUNjO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBaUJmLEtBQUtnQixJQUFJOzs7Ozs7MEJBQ3pDLDhEQUFDRjtnQkFBSUMsV0FBVTsyQkFDWmYsZ0JBQUFBLEtBQUtpQixPQUFPLGNBQVpqQixvQ0FBQUEsY0FBY2tCLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDdkIsOERBQUNDO3dCQUFnQkMsS0FBS0g7d0JBQUtJLEtBQUssU0FBbUIsT0FBVkgsUUFBUTt3QkFBS0wsV0FBVyxTQUFpQixPQUFSSyxRQUFNO3VCQUF0RUE7Ozs7Ozs7Ozs7MEJBR2QsOERBQUNOO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1M7a0NBQUl4QixLQUFLeUIsV0FBVzs7Ozs7O2tDQUNyQiw4REFBQ0M7OzRCQUFHMUIsS0FBSzJCLE1BQU07NEJBQUM7NEJBQVkzQixLQUFLNEIsUUFBUTs0QkFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRzVDO0lBRUosU0FBU0MsV0FBV2IsSUFBSSxFQUFFYyxLQUFLO1FBQzdCLE9BQU87WUFBRWQ7WUFBTWM7UUFBTTtJQUN2QjtJQUVBLE1BQU1DLE9BQU8vQixPQUNYO1FBQ0U2QixXQUFXLG1CQUFtQjdCLEtBQUtnQyxjQUFjO1FBQ2pESCxXQUFXLFdBQVc3QixLQUFLaUMsT0FBTztRQUNsQ0osV0FBVyxtQkFBbUI3QixLQUFLa0MsY0FBYztRQUNqREwsV0FBVyxZQUFZN0IsS0FBSzRCLFFBQVE7UUFDcENDLFdBQVcsUUFBUTdCLEtBQUttQyxJQUFJO1FBQzVCTixXQUFXLGVBQWU3QixLQUFLb0MsVUFBVTtRQUN6Q1AsV0FBVyxlQUFlN0IsS0FBS3lCLFdBQVc7UUFDMUNJLFdBQVcsVUFBVTdCLEtBQUsyQixNQUFNO1FBQ2hDRSxXQUFXLGVBQWU3QixLQUFLcUMsVUFBVTtRQUN6Q1IsV0FBVyxRQUFRN0IsS0FBS2dCLElBQUk7UUFDNUJhLFdBQVcsbUJBQW1CN0IsS0FBS3NDLGNBQWM7UUFDakRULFdBQVcsU0FBUzdCLEtBQUt1QyxLQUFLO0tBQy9CLEdBQ0QsRUFBRSxFQUFFLCtDQUErQztJQUVyRCxxQkFDRSw4REFBQ3pCO1FBQUlDLFdBQVU7O1lBQ2RGOzBCQUNELDhEQUFDakMsb0VBQWNBO2dCQUFDNEQsV0FBV3pELDREQUFLQTtnQkFBRTBELE9BQU87b0JBQUVDLE9BQU87Z0JBQU87MEJBQ3ZELDRFQUFDbEUsNERBQUtBO29CQUFDbUUsSUFBSTt3QkFBRUMsVUFBVTtvQkFBSTtvQkFBR0MsY0FBVzs7c0NBQ3ZDLDhEQUFDaEUsZ0VBQVNBO3NDQUNSLDRFQUFDQyw4REFBUUE7O2tEQUNQLDhEQUFDRTtrREFBZ0I7Ozs7OztrREFDakIsOERBQUNBO3dDQUFnQjhELE9BQU07a0RBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUduQyw4REFBQ3JFLGdFQUFTQTtzQ0FDUHNELEtBQUtiLEdBQUcsQ0FBQyxDQUFDNkIsb0JBQ1QsOERBQUNwRDs7c0RBQ0MsOERBQUNYOzRDQUFnQndELFdBQVU7NENBQUtRLE9BQU07c0RBQ25DRCxJQUFJL0IsSUFBSTs7Ozs7O3NEQUVYLDhEQUFDaEM7NENBQWdCOEQsT0FBTTtzREFBU0MsSUFBSWpCLEtBQUs7Ozs7Ozs7bUNBSnRCaUIsSUFBSS9CLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVl6QztHQTlFT2pCOztRQUNnQnpCLDREQUFlQTs7O01BRC9CeUI7QUFnRlAsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hcGFydG1lbnRzL2RldGFpbHMvcGFnZS5qcz9iYTMyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwsIHsgdGFibGVDZWxsQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9QYXBlcic7XHJcblxyXG5jb25zdCBTdHlsZWRUYWJsZUNlbGwgPSBzdHlsZWQoVGFibGVDZWxsKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJi4ke3RhYmxlQ2VsbENsYXNzZXMuaGVhZH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICB9LFxyXG4gIFtgJi4ke3RhYmxlQ2VsbENsYXNzZXMuYm9keX1gXToge1xyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFN0eWxlZFRhYmxlUm93ID0gc3R5bGVkKFRhYmxlUm93KSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gICcmOm50aC1vZi10eXBlKG9kZCknOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmhvdmVyLFxyXG4gIH0sXHJcbiAgLy8gaGlkZSBsYXN0IGJvcmRlclxyXG4gICcmOmxhc3QtY2hpbGQgdGQsICY6bGFzdC1jaGlsZCB0aCc6IHtcclxuICAgIGJvcmRlcjogMCxcclxuICB9LFxyXG59KSk7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBEZXRhaWxzKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBjb25zdCBpZCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJpZFwiKTtcclxuICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICBcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpOyAvLyBJbml0aWFsaXplIHdpdGggbnVsbFxyXG4gIFxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2V0YXBhcnRtZW50LyR7aWR9YClcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgc2V0RGF0YShyZXMuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbaWRdKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBjb25zdCBhcHBEZXRhaWxzID0gZGF0YSA/IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RldGFpbHMtbWFpbic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RldGFpbHMtdGl0bGUnPntkYXRhLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RldGFpbHMtaW1ncyc+XHJcbiAgICAgICAgICB7ZGF0YS5pbWdVcmxzPy5tYXAoKHVybCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGltZyBrZXk9e2luZGV4fSBzcmM9e3VybH0gYWx0PXtgSW1hZ2UgJHtpbmRleCArIDF9YH0gY2xhc3NOYW1lPXtgaW1hZ2UtJHtpbmRleCsxfWB9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGV0YWlscy1kZXNjcmlwdGlvbic+XHJcbiAgICAgICAgICA8aDM+e2RhdGEuZGVzY3JpcHRpb259PC9oMz5cclxuICAgICAgICAgIDxwPntkYXRhLmd1ZXN0c30gZ3Vlc3QvcyAtIHtkYXRhLmJlZHJvb21zfSBiZWRyb29tL3M8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSA6IG51bGw7XHJcbiAgICAgICAgICAgIFxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRGF0YShuYW1lLCB2YWx1ZSkge1xyXG4gICAgICByZXR1cm4geyBuYW1lLCB2YWx1ZSB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCByb3dzID0gZGF0YVxyXG4gICAgPyBbXHJcbiAgICAgICAgY3JlYXRlRGF0YSgnQWRkaXRpb25hbCBGZWVzJywgZGF0YS5hZGRpdGlvbmFsRmVlcyksXHJcbiAgICAgICAgY3JlYXRlRGF0YSgnQWRkcmVzcycsIGRhdGEuYWRkcmVzcyksXHJcbiAgICAgICAgY3JlYXRlRGF0YSgnQXBwbGljYXRpb24gRmVlJywgZGF0YS5hcHBsaWNhdGlvbkZlZSksXHJcbiAgICAgICAgY3JlYXRlRGF0YSgnQmVkcm9vbXMnLCBkYXRhLmJlZHJvb21zKSxcclxuICAgICAgICBjcmVhdGVEYXRhKCdDaXR5JywgZGF0YS5jaXR5KSxcclxuICAgICAgICBjcmVhdGVEYXRhKCdEZXBvc2l0IEZlZScsIGRhdGEuZGVwb3NpdEZlZSksXHJcbiAgICAgICAgY3JlYXRlRGF0YSgnRGVzY3JpcHRpb24nLCBkYXRhLmRlc2NyaXB0aW9uKSxcclxuICAgICAgICBjcmVhdGVEYXRhKCdHdWVzdHMnLCBkYXRhLmd1ZXN0cyksXHJcbiAgICAgICAgY3JlYXRlRGF0YSgnTGVhc2UgVGVybXMnLCBkYXRhLmxlYXNlVGVybXMpLFxyXG4gICAgICAgIGNyZWF0ZURhdGEoJ05hbWUnLCBkYXRhLm5hbWUpLFxyXG4gICAgICAgIGNyZWF0ZURhdGEoJ1BhcmtpbmcgRGV0YWlscycsIGRhdGEucGFya2luZ0RldGFpbHMpLFxyXG4gICAgICAgIGNyZWF0ZURhdGEoJ1ByaWNlJywgZGF0YS5wcmljZSksXHJcbiAgICAgIF1cclxuICAgIDogW107IC8vaGFzIHRvIGJlIGxpa2V0aGF0IGJlY2F1c2UgdGlzIGluaXRpYWxseSBudWxsXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXRhaWxzLW1haW4nPlxyXG4gICAgICB7YXBwRGV0YWlsc31cclxuICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgPFRhYmxlIHN4PXt7IG1pbldpZHRoOiA3MDAgfX0gYXJpYS1sYWJlbD1cImN1c3RvbWl6ZWQgdGFibGVcIj5cclxuICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPlByb3BlcnR5PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+VmFsdWU8L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAge3Jvd3MubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVSb3cga2V5PXtyb3cubmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAge3Jvdy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LnZhbHVlfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVSb3c+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRGV0YWlsczsiXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsInVzZVJvdXRlciIsInVzZVNlYXJjaFBhcmFtcyIsInN0eWxlZCIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwidGFibGVDZWxsQ2xhc3NlcyIsIlRhYmxlQ29udGFpbmVyIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJQYXBlciIsIlN0eWxlZFRhYmxlQ2VsbCIsInRoZW1lIiwiaGVhZCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJibGFjayIsImNvbG9yIiwid2hpdGUiLCJib2R5IiwiZm9udFNpemUiLCJTdHlsZWRUYWJsZVJvdyIsImFjdGlvbiIsImhvdmVyIiwiYm9yZGVyIiwiRGV0YWlscyIsImRhdGEiLCJzZWFyY2hQYXJhbXMiLCJpZCIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRhIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnIiLCJhcHBEZXRhaWxzIiwiZGl2IiwiY2xhc3NOYW1lIiwibmFtZSIsImltZ1VybHMiLCJtYXAiLCJ1cmwiLCJpbmRleCIsImltZyIsInNyYyIsImFsdCIsImgzIiwiZGVzY3JpcHRpb24iLCJwIiwiZ3Vlc3RzIiwiYmVkcm9vbXMiLCJjcmVhdGVEYXRhIiwidmFsdWUiLCJyb3dzIiwiYWRkaXRpb25hbEZlZXMiLCJhZGRyZXNzIiwiYXBwbGljYXRpb25GZWUiLCJjaXR5IiwiZGVwb3NpdEZlZSIsImxlYXNlVGVybXMiLCJwYXJraW5nRGV0YWlscyIsInByaWNlIiwiY29tcG9uZW50Iiwic3R5bGUiLCJ3aWR0aCIsInN4IiwibWluV2lkdGgiLCJhcmlhLWxhYmVsIiwiYWxpZ24iLCJyb3ciLCJzY29wZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/apartments/details/page.js\n"));

/***/ })

});