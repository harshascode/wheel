/******/ (function (modules) {
  // webpackBootstrap
  /******/ // install a JSONP callback for chunk loading
  /******/ function webpackJsonpCallback(data) {
    /******/ var chunkIds = data[0];
    /******/ var moreModules = data[1];
    /******/ var executeModules = data[2];
    /******/
    /******/ // add "moreModules" to the modules object,
    /******/ // then flag all "chunkIds" as loaded and fire callback
    /******/ var moduleId,
      chunkId,
      i = 0,
      resolves = [];
    /******/ for (; i < chunkIds.length; i++) {
      /******/ chunkId = chunkIds[i];
      /******/ if (
        Object.prototype.hasOwnProperty.call(installedChunks, chunkId) &&
        installedChunks[chunkId]
      ) {
        /******/ resolves.push(installedChunks[chunkId][0]);
        /******/
      }
      /******/ installedChunks[chunkId] = 0;
      /******/
    }
    /******/ for (moduleId in moreModules) {
      /******/ if (
        Object.prototype.hasOwnProperty.call(moreModules, moduleId)
      ) {
        /******/ modules[moduleId] = moreModules[moduleId];
        /******/
      }
      /******/
    }
    /******/ if (parentJsonpFunction) parentJsonpFunction(data);
    /******/
    /******/ while (resolves.length) {
      /******/ resolves.shift()();
      /******/
    }
    /******/
    /******/ // add entry modules from loaded chunk to deferred list
    /******/ deferredModules.push.apply(deferredModules, executeModules || []);
    /******/
    /******/ // run deferred modules when all chunks ready
    /******/ return checkDeferredModules();
    /******/
  }
  /******/ function checkDeferredModules() {
    /******/ var result;
    /******/ for (var i = 0; i < deferredModules.length; i++) {
      /******/ var deferredModule = deferredModules[i];
      /******/ var fulfilled = true;
      /******/ for (var j = 1; j < deferredModule.length; j++) {
        /******/ var depId = deferredModule[j];
        /******/ if (installedChunks[depId] !== 0) fulfilled = false;
        /******/
      }
      /******/ if (fulfilled) {
        /******/ deferredModules.splice(i--, 1);
        /******/ result = __webpack_require__(
          (__webpack_require__.s = deferredModule[0])
        );
        /******/
      }
      /******/
    }
    /******/
    /******/ return result;
    /******/
  }
  /******/
  /******/ // The module cache
  /******/ var installedModules = {};
  /******/
  /******/ // object to store loaded and loading chunks
  /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
  /******/ // Promise = chunk loading, 0 = chunk loaded
  /******/ var installedChunks = {
    /******/ index: 0,
    /******/
  };
  /******/
  /******/ var deferredModules = [];
  /******/
  /******/ // script path function
  /******/ function jsonpScriptSrc(chunkId) {
    /******/ return (
      __webpack_require__.p +
      "" +
      ({
        "locale-de-DE": "locale-de-DE",
        "locale-en-US": "locale-en-US",
        "locale-es-ES": "locale-es-ES",
        "locale-fr-FR": "locale-fr-FR",
        "locale-id-ID": "locale-id-ID",
        "locale-in-IN": "locale-in-IN",
        "locale-it-IT": "locale-it-IT",
        "locale-ja-JP": "locale-ja-JP",
        "locale-ko-KR": "locale-ko-KR",
        "locale-ms-MY": "locale-ms-MY",
        "locale-nl-NL": "locale-nl-NL",
        "locale-ph-PH": "locale-ph-PH",
        "locale-pl-PL": "locale-pl-PL",
        "locale-pt-PT": "locale-pt-PT",
        "locale-ru-RU": "locale-ru-RU",
        "locale-th-TH": "locale-th-TH",
        "locale-tr-TR": "locale-tr-TR",
        "locale-ua-UA": "locale-ua-UA",
        "locale-vn-VN": "locale-vn-VN",
        "locale-zh-TW": "locale-zh-TW",
        "vendors~vibrant": "vendors~vibrant",
        vibrant: "vibrant",
      }[chunkId] || chunkId) +
      "-" +
      {
        "locale-de-DE": "bcb165925324750d5b55",
        "locale-en-US": "863238803f2807777c90",
        "locale-es-ES": "e70c42519948367265ac",
        "locale-fr-FR": "e496074ffd94d5ecb91a",
        "locale-id-ID": "8234bf7d8bf5138dfeaa",
        "locale-in-IN": "57cbb305df3041fed463",
        "locale-it-IT": "b5cc0812bb4bfc751b91",
        "locale-ja-JP": "ec5709bad99268e9da0a",
        "locale-ko-KR": "730a925bc1f52fb564ce",
        "locale-ms-MY": "ecabc34e870bb110d0ce",
        "locale-nl-NL": "9a41ef8c80a6719990e7",
        "locale-ph-PH": "53ee282867b586603668",
        "locale-pl-PL": "5d0aa69ef8c84d8bf126",
        "locale-pt-PT": "27800b43130fa07325db",
        "locale-ru-RU": "ad168c9b10d7b34170a5",
        "locale-th-TH": "7ef99f34341dc113e5b0",
        "locale-tr-TR": "805bed47d789508bb4d1",
        "locale-ua-UA": "41124543c22be5e60af7",
        "locale-vn-VN": "a4ef1ddeec42b0b60497",
        "locale-zh-TW": "eea2f9e9a8fc9983d5ec",
        "vendors~vibrant": "b8f226ffabb2c44dbc29",
        vibrant: "33dab77ca75f917ee1a8",
      }[chunkId] +
      ".js"
    );
    /******/
  }
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // This file contains only the entry chunk.
  /******/ // The chunk loading function for additional chunks
  /******/ __webpack_require__.e = function requireEnsure(chunkId) {
    /******/ var promises = [];
    /******/
    /******/
    /******/ // JSONP chunk loading for javascript
    /******/
    /******/ var installedChunkData = installedChunks[chunkId];
    /******/ if (installedChunkData !== 0) {
      // 0 means "already installed".
      /******/
      /******/ // a Promise means "currently loading".
      /******/ if (installedChunkData) {
        /******/ promises.push(installedChunkData[2]);
        /******/
      } else {
        /******/ // setup Promise in chunk cache
        /******/ var promise = new Promise(function (resolve, reject) {
          /******/ installedChunkData = installedChunks[chunkId] = [
            resolve,
            reject,
          ];
          /******/
        });
        /******/ promises.push((installedChunkData[2] = promise));
        /******/
        /******/ // start chunk loading
        /******/ var script = document.createElement("script");
        /******/ var onScriptComplete;
        /******/
        /******/ script.charset = "utf-8";
        /******/ script.timeout = 120;
        /******/ if (__webpack_require__.nc) {
          /******/ script.setAttribute("nonce", __webpack_require__.nc);
          /******/
        }
        /******/ script.src = jsonpScriptSrc(chunkId);
        /******/
        /******/ // create error before stack unwound to get useful stacktrace later
        /******/ var error = new Error();
        /******/ onScriptComplete = function (event) {
          /******/ // avoid mem leaks in IE.
          /******/ script.onerror = script.onload = null;
          /******/ clearTimeout(timeout);
          /******/ var chunk = installedChunks[chunkId];
          /******/ if (chunk !== 0) {
            /******/ if (chunk) {
              /******/ var errorType =
                event && (event.type === "load" ? "missing" : event.type);
              /******/ var realSrc = event && event.target && event.target.src;
              /******/ error.message =
                "Loading chunk " +
                chunkId +
                " failed.\n(" +
                errorType +
                ": " +
                realSrc +
                ")";
              /******/ error.name = "ChunkLoadError";
              /******/ error.type = errorType;
              /******/ error.request = realSrc;
              /******/ chunk[1](error);
              /******/
            }
            /******/ installedChunks[chunkId] = undefined;
            /******/
          }
          /******/
        };
        /******/ var timeout = setTimeout(function () {
          /******/ onScriptComplete({ type: "timeout", target: script });
          /******/
        }, 120000);
        /******/ script.onerror = script.onload = onScriptComplete;
        /******/ document.head.appendChild(script);
        /******/
      }
      /******/
    }
    /******/ return Promise.all(promises);
    /******/
  };
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = "/";
  /******/
  /******/ // on error function for async loading
  /******/ __webpack_require__.oe = function (err) {
    console.error(err);
    throw err;
  };
  /******/
  /******/ var jsonpArray = (window["webpackJsonp"] =
    window["webpackJsonp"] || []);
  /******/ var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  /******/ jsonpArray.push = webpackJsonpCallback;
  /******/ jsonpArray = jsonpArray.slice();
  /******/ for (var i = 0; i < jsonpArray.length; i++)
    webpackJsonpCallback(jsonpArray[i]);
  /******/ var parentJsonpFunction = oldJsonpFunction;
  /******/
  /******/
  /******/ // add entry module to deferred list
  /******/ deferredModules.push(["./static/index.js", "vendor"]);
  /******/ // run deferred modules when ready
  /******/ return checkDeferredModules();
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/app.vue?vue&type=script&lang=js&":
      /*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/app.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _loadingScreen_vue__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./loadingScreen.vue */ "./static/loadingScreen.vue"
          );
        /* harmony import */ var _toolbar_vue__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./toolbar.vue */ "./static/toolbar.vue");
        /* harmony import */ var _spinningwheel_vue__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./spinningwheel.vue */ "./static/spinningwheel.vue"
          );
        /* harmony import */ var _textboxbuttons_vue__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./textboxbuttons.vue */ "./static/textboxbuttons.vue"
          );
        /* harmony import */ var _textbox_vue__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./textbox.vue */ "./static/textbox.vue");
        /* harmony import */ var _appInfo_vue__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./appInfo.vue */ "./static/appInfo.vue");
        /* harmony import */ var _optionsdialog_vue__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./optionsdialog.vue */ "./static/optionsdialog.vue"
          );
        /* harmony import */ var _winnerdialog_vue__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./winnerdialog.vue */ "./static/winnerdialog.vue"
          );
        /* harmony import */ var _winneranimation_vue__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./winneranimation.vue */ "./static/winneranimation.vue"
          );
        /* harmony import */ var _entry_counter_vue__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./entry-counter.vue */ "./static/entry-counter.vue"
          );
        /* harmony import */ var _appShow_vue__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(/*! ./appShow.vue */ "./static/appShow.vue");
        /* harmony import */ var _bottom_vue__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(/*! ./bottom.vue */ "./static/bottom.vue");
        /* harmony import */ var _recommendWheels_vue__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ./recommendWheels.vue */ "./static/recommendWheels.vue"
          );
        /* harmony import */ var _faq_vue__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(/*! ./faq.vue */ "./static/faq.vue");
        /* harmony import */ var _wheelList_vue__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(/*! ./wheelList.vue */ "./static/wheelList.vue");
        /* harmony import */ var vue_cookie_law__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            /*! vue-cookie-law */ "./node_modules/vue-cookie-law/dist/vue-cookie-law.js"
          );
        /* harmony import */ var vue_cookie_law__WEBPACK_IMPORTED_MODULE_15___default =
          /*#__PURE__*/ __webpack_require__.n(
            vue_cookie_law__WEBPACK_IMPORTED_MODULE_15__
          );
        /* harmony import */ var _ConfettiLauncher_js__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(
            /*! ./ConfettiLauncher.js */ "./static/ConfettiLauncher.js"
          );
        /* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(/*! ./Util.js */ "./static/Util.js");
        /* harmony import */ var _FullScreen_js__WEBPACK_IMPORTED_MODULE_18__ =
          __webpack_require__(/*! ./FullScreen.js */ "./static/FullScreen.js");
        /* harmony import */ var _WheelConfig_js__WEBPACK_IMPORTED_MODULE_19__ =
          __webpack_require__(
            /*! ./WheelConfig.js */ "./static/WheelConfig.js"
          );
        /* harmony import */ var _Preferences_js__WEBPACK_IMPORTED_MODULE_20__ =
          __webpack_require__(
            /*! ./Preferences.js */ "./static/Preferences.js"
          );
        /* harmony import */ var _PageReloader_js__WEBPACK_IMPORTED_MODULE_21__ =
          __webpack_require__(
            /*! ./PageReloader.js */ "./static/PageReloader.js"
          );
        /* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_22__ =
          __webpack_require__(/*! ./audio.js */ "./static/audio.js");
        /* harmony import */ var _Locales_js__WEBPACK_IMPORTED_MODULE_23__ =
          __webpack_require__(/*! ./Locales.js */ "./static/Locales.js");
        function _typeof(o) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return e;
            };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      }
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      }
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw new Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator["return"] &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction"
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = {
          components: {
            bottom: _bottom_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
            loadingScreen:
              _loadingScreen_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
            toolbar: _toolbar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
            textboxbuttons:
              _textboxbuttons_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
            textbox: _textbox_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
            spinningwheel:
              _spinningwheel_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
            appInfo: _appInfo_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
            winnerdialog:
              _winnerdialog_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
            optionsdialog:
              _optionsdialog_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
            winneranimation:
              _winneranimation_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
            entryCounter:
              _entry_counter_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
            appShow: _appShow_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
            recommendWheels:
              _recommendWheels_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
            faq: _faq_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
            wheelList: _wheelList_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
            cookieLaw: vue_cookie_law__WEBPACK_IMPORTED_MODULE_15___default.a,
          },
          created: function created() {
            // this.initNavbar()
          },
          mounted: function mounted() {
            this.initNavbar();
          },
          data: function data() {
            return {
              waitAnimation: {},
              loading: true,
              setting: {
                title: this.$t("home.seo title"),
                keywords: this.$t("home.seo keywords"),
                description: this.$t("home.seo description"),
              },
              originContent: this.$t("home.description"),
              privacyHtml: this.$t("home.privacy"),
              privacyAccept: this.$t("home.privacy accept"),
              privacyIgnore: this.$t("home.privacy ignore"),
              content: "",
              isWheelPage: false,
              showWheelList: false,
              relatedWheels: [],
              newWheels: [],
              popularWheels: [],
              otherWheels: [],
            };
          },
          metaInfo: function metaInfo() {
            return {
              title: this.setting.title,
              meta: [
                {
                  name: "keywords",
                  content: this.setting.keywords,
                },
                {
                  name: "description",
                  content: this.setting.description,
                },
              ],
            };
          },
          computed: {
            names: function names() {
              return this.$store.state.wheelConfig.names;
            },
            wheelConfig: function wheelConfig() {
              return this.$store.state.wheelConfig;
            },
            preferences: function preferences() {
              return this.$store.state.preferences;
            },
            fullScreen: function fullScreen() {
              return this.$store.state.appStatus.fullScreen;
            },
            wheelSpinning: function wheelSpinning() {
              return this.$store.state.appStatus.wheelSpinning;
            },
            darkMode: function darkMode() {
              return this.$store.getters.darkMode;
            },
            pageColor: function pageColor() {
              return this.$store.state.wheelConfig.pageBackgroundColor;
            },
          },
          watch: {
            $route: function $route(to, from) {
              // 对路由变化作出响应...
              // console.log('to.path----',to.path)//跳转后路由
              // console.log('from----',from)//跳转前路由
              this.navSelect(to.path);
            },
            wheelConfig: function wheelConfig(newValue, oldValue) {
              // Util.updateColorStyles(this.darkMode, '#777', this.pageColor);
              localStorage.setItem(
                "LastWheelConfig",
                this.$store.state.wheelConfig.getJson()
              );
              _audio_js__WEBPACK_IMPORTED_MODULE_22__["preloadSounds"](
                newValue.duringSpinSound,
                newValue.afterSpinSound
              );
            },
            names: function names(newValue, oldValue) {
              localStorage.setItem(
                "LastWheelConfig",
                this.$store.state.wheelConfig.getJson()
              );
            },
            preferences: function preferences(newValue) {
              // Util.updateColorStyles(this.darkMode, '#777', this.pageColor);
              localStorage.setItem("Preferences", newValue.getJson());
            },
            fullScreen: function fullScreen(newValue, oldValue) {
              if (newValue) {
                _Util_js__WEBPACK_IMPORTED_MODULE_17__["trackEvent"](
                  "Wheel",
                  "EnterFullscreen",
                  ""
                );
                _FullScreen_js__WEBPACK_IMPORTED_MODULE_18__[
                  "turnOnFullscreen"
                ]();
              }
              if (!newValue) {
                _Util_js__WEBPACK_IMPORTED_MODULE_17__["trackEvent"](
                  "Wheel",
                  "ExitFullscreen",
                  ""
                );
                _FullScreen_js__WEBPACK_IMPORTED_MODULE_18__[
                  "turnOffFullscreen"
                ]();
              }
            },
          },
          methods: {
            gotoWheels: function gotoWheels(category) {
              _Util_js__WEBPACK_IMPORTED_MODULE_17__["gotoInGoogleAnalytics"](
                category,
                "toolbar",
                ""
              );
            },
            initNavbar: function initNavbar() {
              this.content = this.originContent;
              var path = this.$route.path;
              this.navSelect(path);
            },
            // 根据语言获取对应首页分类数据
            getWheelList: function getWheelList(lang) {
              var _this = this;
              return _asyncToGenerator(
                /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
                  var fetchNames, response, data, count, obj;
                  return _regeneratorRuntime().wrap(function _callee$(
                    _context
                  ) {
                    while (1)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          fetchNames = function fetchNames(category, lang) {
                            return fetch(
                              "https://api.spinthewheel.cc/spin/category-wheels?category="
                                .concat(category, "&lang=")
                                .concat(lang)
                            );
                          };
                          _context.next = 3;
                          return fetchNames("Home", lang);
                        case 3:
                          response = _context.sent;
                          _context.next = 6;
                          return response.json();
                        case 6:
                          data = _context.sent;
                          if (data.code === 200 && data.data != null) {
                            count = 0;
                            obj = eval(data.data);
                            _this.newWheels = obj.New;
                            if (
                              _this.newWheels != null &&
                              _this.newWheels.length > 0
                            ) {
                              count += _this.newWheels.length;
                              _this.newWheelsCategory =
                                _this.newWheels[0].subcategory;
                            }
                            _this.popularWheels = obj.Popular;
                            if (
                              _this.popularWheels != null &&
                              _this.popularWheels.length > 0
                            ) {
                              count += _this.popularWheels.length;
                              _this.popWheelsCategory =
                                _this.popularWheels[0].subcategory;
                            }
                            _this.relatedWheels = obj.Related;
                            if (
                              _this.relatedWheels != null &&
                              _this.relatedWheels.length > 0
                            ) {
                              count += _this.relatedWheels.length;
                              _this.relatedWheelsCategory =
                                _this.relatedWheels[0].subcategory;
                            }
                            _this.otherWheels = obj.Other;
                            if (
                              _this.otherWheels != null &&
                              _this.otherWheels.length > 0
                            ) {
                              count += _this.otherWheels.length;
                              _this.otherWheelsCategory =
                                _this.otherWheels[0].subcategory;
                            }
                            if (count > 0) {
                              _this.showWheelList = true;
                            }
                          }
                        case 8:
                        case "end":
                          return _context.stop();
                      }
                  },
                  _callee);
                })
              )();
            },
            // 刷新转盘数据
            navSelect: function navSelect(path) {
              var _this2 = this;
              return _asyncToGenerator(
                /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
                  var locales,
                    lang,
                    _Util$getUrlParams,
                    wheelId,
                    wheelName,
                    localeIndex,
                    wheelConfig,
                    response,
                    lastWheelConfig,
                    lastWheelJson,
                    fetchNames,
                    _fetchNames,
                    data,
                    count;
                  return _regeneratorRuntime().wrap(function _callee2$(
                    _context2
                  ) {
                    while (1)
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          // 获取参数
                          locales =
                            _Locales_js__WEBPACK_IMPORTED_MODULE_23__[
                              "getNames"
                            ]();
                          lang =
                            _this2.$route.params.lang === undefined
                              ? "en"
                              : _this2.$route.params.lang;
                          (_Util$getUrlParams =
                            _Util_js__WEBPACK_IMPORTED_MODULE_17__[
                              "getUrlParams"
                            ](window.location.search)),
                            (wheelId = _Util$getUrlParams.id);
                          wheelName = _this2.$route.params.wheelName;
                          localeIndex = locales.indexOf(wheelName);
                          if (localeIndex > -1) {
                            /**
                             *  如果是这种格式就替换：
                             *  localhost/tw ==> lang=tw, wheelName=undefined
                             */
                            lang = wheelName;
                            wheelName = undefined;
                          }
                          wheelConfig =
                            new _WheelConfig_js__WEBPACK_IMPORTED_MODULE_19__[
                              "default"
                            ](
                              _this2.$t("common.We have a winner!"),
                              _this2.$t("home.title"),
                              _this2.$t("home.names"),
                              lang
                            );
                          if (!(wheelId === undefined && path === "/")) {
                            _context2.next = 14;
                            break;
                          }
                          lastWheelConfig =
                            localStorage.getItem("LastWheelConfig");
                          if (lastWheelConfig === null) {
                            console.log("load default wheel.");
                          } else {
                            lastWheelJson = JSON.parse(lastWheelConfig);
                            if (lastWheelJson.lang === lang) {
                              console.log("load last wheel.");
                              wheelConfig.loadJson(
                                localStorage.getItem("LastWheelConfig")
                              );
                            }
                          }
                          _context2.next = 12;
                          return _this2.getWheelList(lang);
                        case 12:
                          _context2.next = 35;
                          break;
                        case 14:
                          if (
                            !(wheelId === undefined && wheelName === undefined)
                          ) {
                            _context2.next = 20;
                            break;
                          }
                          // 非英文多语言首页
                          console.log("load default wheel.");
                          _context2.next = 18;
                          return _this2.getWheelList(lang);
                        case 18:
                          _context2.next = 35;
                          break;
                        case 20:
                          if (
                            _Util_js__WEBPACK_IMPORTED_MODULE_17__["myIsNaN"](
                              wheelId
                            )
                          ) {
                            _context2.next = 27;
                            break;
                          }
                          // app通过id获取
                          fetchNames = function fetchNames(wheelId) {
                            return fetch(
                              "https://api.spinthewheel.cc/spin/get-wheel-new?id=".concat(
                                wheelId
                              )
                            );
                          };
                          _context2.next = 24;
                          return fetchNames(wheelId);
                        case 24:
                          response = _context2.sent;
                          _context2.next = 31;
                          break;
                        case 27:
                          // 网站通过路径获取
                          _fetchNames = function _fetchNames(wheelName, lang) {
                            return fetch(
                              "https://api.spinthewheel.cc/spin/get-wheel?p="
                                .concat(wheelName, "&lang=")
                                .concat(lang)
                            );
                          };
                          _context2.next = 30;
                          return _fetchNames(wheelName, lang);
                        case 30:
                          response = _context2.sent;
                        case 31:
                          _context2.next = 33;
                          return response.json();
                        case 33:
                          data = _context2.sent;
                          if (
                            data.code === 200 &&
                            data.data.name !== undefined
                          ) {
                            // 转盘页，不展示 appShow中的desc 和 faq 内容
                            _this2.isWheelPage = true;
                            wheelConfig.title = data.data.name;
                            wheelConfig.names = data.data.names;
                            wheelConfig.colorSettings = data.data.colorSettings;
                            if (data.data.title !== undefined) {
                              _this2.setting.title = data.data.title;
                              _this2.setting.keywords =
                                data.data.keywords !== undefined
                                  ? data.data.keywords
                                  : _this2.setting.keywords;
                              _this2.setting.description =
                                data.data.description !== undefined
                                  ? data.data.description.substring(0, 150)
                                  : _this2.setting.description;
                              _this2.content =
                                data.data.content !== undefined
                                  ? data.data.content
                                  : _this2.originContent;
                              _this2.relatedWheels = data.data.recommendWheels;
                              _this2.newWheels = data.data.newWheels;
                              _this2.popularWheels = data.data.popularWheels;
                              _this2.otherWheels = data.data.otherWheels;
                              count = 0;
                              if (
                                _this2.relatedWheels != null &&
                                _this2.relatedWheels.length > 0
                              ) {
                                count += _this2.relatedWheels.length;
                              }
                              if (
                                _this2.newWheels != null &&
                                _this2.newWheels.length > 0
                              ) {
                                count += _this2.newWheels.length;
                              }
                              if (
                                _this2.popularWheels != null &&
                                _this2.popularWheels.length > 0
                              ) {
                                count += _this2.popularWheels.length;
                              }
                              if (
                                _this2.otherWheels != null &&
                                _this2.otherWheels.length > 0
                              ) {
                                count += _this2.otherWheels.length;
                              }
                              if (count > 0) {
                                _this2.showWheelList = true;
                              }
                            }
                          } else {
                            _this2.showSnackbarMessage(
                              _this2.$t(
                                "app.Sorry, the wheel not exist! Loaded default names and options!"
                              )
                            );
                            wheelConfig.loadJson(
                              localStorage.getItem("LastWheelConfig")
                            );
                          }
                        case 35:
                          _this2.$store.commit("setWheelConfig", wheelConfig);
                          _this2.setDocLangProperties();
                          _this2.loadPreferences();
                          _this2.startFullscreenDetection();
                          _this2.startOnlineDetection();
                          _this2.startVisibilityDetection();
                          _this2.displayLanguageTip();
                          _this2.refreshWheelOnFontLoad();
                          _this2.loading = false;
                        case 44:
                        case "end":
                          return _context2.stop();
                      }
                  },
                  _callee2);
                })
              )();
            },
            startFullscreenDetection: function startFullscreenDetection() {
              var self = this;
              document.addEventListener("fullscreenchange", function (event) {
                if (
                  _FullScreen_js__WEBPACK_IMPORTED_MODULE_18__["fullscreenOn"]()
                ) {
                  self.$store.commit("enterFullScreen");
                } else {
                  self.$store.commit("exitFullScreen");
                }
              });
            },
            startOnlineDetection: function startOnlineDetection() {
              this.$store.commit("setOnline", navigator.onLine);
              var self = this;
              window.addEventListener("online", function (event) {
                self.$store.commit("setOnline", navigator.onLine);
              });
              window.addEventListener("offline", function (event) {
                self.$store.commit("setOnline", navigator.onLine);
              });
            },
            startVisibilityDetection: function startVisibilityDetection() {
              var reloader = new _PageReloader_js__WEBPACK_IMPORTED_MODULE_21__[
                "default"
              ]();
              document.addEventListener("visibilitychange", function () {
                reloader.reloadOutdatedPage(document.hidden);
              });
            },
            displayLanguageTip: function displayLanguageTip() {
              var _this3 = this;
              // console.log('this.$i18n.locale', this.$i18n.locale)
              // console.log('navigator.languages', navigator.languages)
              var tipLocale = _Locales_js__WEBPACK_IMPORTED_MODULE_23__[
                "getLangTipLocale"
              ](this.$i18n.locale, navigator.languages);
              if (tipLocale) {
                setTimeout(
                  /*#__PURE__*/ _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(
                      function _callee3() {
                        var file, messages, msg;
                        return _regeneratorRuntime().wrap(function _callee3$(
                          _context3
                        ) {
                          while (1)
                            switch ((_context3.prev = _context3.next)) {
                              case 0:
                                file =
                                  _Locales_js__WEBPACK_IMPORTED_MODULE_23__[
                                    "getMessagesFileName"
                                  ](tipLocale);
                                _context3.next = 3;
                                return __webpack_require__(
                                  "./static/locales lazy recursive ^\\.\\/.*$"
                                )("./".concat(file));
                              case 3:
                                messages = _context3.sent["default"];
                                msg =
                                  messages["app"]["Click the Language menu"];
                                _this3.showSnackbarMessage(msg);
                              case 6:
                              case "end":
                                return _context3.stop();
                            }
                        },
                        _callee3);
                      }
                    )
                  ),
                  3000
                );
              }
            },
            loadPreferences: function loadPreferences() {
              var prefs = new _Preferences_js__WEBPACK_IMPORTED_MODULE_20__[
                "default"
              ]();
              prefs.loadJson(localStorage.getItem("Preferences"));
              this.$store.commit("setPreferences", prefs);
            },
            setDocLangProperties: function setDocLangProperties() {
              document.documentElement.setAttribute("lang", this.$i18n.locale);
              // document.title = 'Wheel-spinner | ' + this.$t('app.Random name picker');
              var desc = this.$t("app.Free and easy to use");
              // document.querySelector('meta[name="description"]').setAttribute("content", desc);
            },
            refreshWheelOnFontLoad: function refreshWheelOnFontLoad() {
              if (document.fonts) {
                var self = this;
                document.fonts.ready.then(function () {
                  self.$refs.spinningwheel.refresh();
                });
              }
            },
            resetWheel: function resetWheel() {
              this.title = this.setting.title;
              this.content = this.originContent;
              this.isWheelPage = false;
              // 设置语言
              var lang =
                this.$route.params.lang === undefined
                  ? "en"
                  : this.$route.params.lang;
              var wheelConfig =
                new _WheelConfig_js__WEBPACK_IMPORTED_MODULE_19__["default"](
                  this.$t("common.We have a winner!"),
                  this.$t("home.title"),
                  this.$t("home.names"),
                  lang
                );
              this.$store.commit("setWheelConfig", wheelConfig);
              this.showSnackbarMessage(
                this.$t("app.Loaded default names and options")
              );
            },
            openCustomizeDialog: function openCustomizeDialog() {
              _Util_js__WEBPACK_IMPORTED_MODULE_17__["trackEvent"](
                "Wheel",
                "ShowCustomizeDialog",
                ""
              );
              this.$refs.optionsdialog.show();
            },
            setLocale: function setLocale(locale) {
              console.log("locale", locale);
              window.location.replace(
                _Locales_js__WEBPACK_IMPORTED_MODULE_23__["getRelativeUrl"](
                  window.location.hostname,
                  locale
                )
              );
            },
            nameChanged: function nameChanged() {
              var state = this.$store.state;
              if (
                state.appStatus.wheelSpinning &&
                state.wheelConfig.shouldPlayTicks()
              ) {
                _audio_js__WEBPACK_IMPORTED_MODULE_22__["playTick"]();
              }
            },
            wheelStarted: function wheelStarted() {
              _audio_js__WEBPACK_IMPORTED_MODULE_22__["startMusic"](
                this.wheelConfig.duringSpinSound
              );
            },
            wheelStopped: function wheelStopped(winningEntry) {
              var _this4 = this;
              _audio_js__WEBPACK_IMPORTED_MODULE_22__["stopMusic"]();
              if (this.wheelConfig.animateWinner) {
                this.$refs.winneranimation.show(winningEntry);
              }
              if (this.wheelConfig.launchConfetti) {
                _ConfettiLauncher_js__WEBPACK_IMPORTED_MODULE_16__["launch"](
                  this.wheelConfig.getCoalescedColors()
                );
              }
              if (this.wheelConfig.displayWinnerDialog) {
                this.$refs.winnerdialog.show(winningEntry);
              }
              if (this.wheelConfig.autoRemoveWinner) {
                setTimeout(function (_) {
                  return _this4.removeName(winningEntry);
                }, 5000);
              }
              _audio_js__WEBPACK_IMPORTED_MODULE_22__["playAfterSpin"](
                this.wheelConfig.afterSpinSound,
                _Util_js__WEBPACK_IMPORTED_MODULE_17__["extractDisplayText"](
                  winningEntry
                )
              );
            },
            showSnackbarMessage: function showSnackbarMessage(msg) {
              this.$buefy.toast.open({
                message: msg,
                duration: 6000,
              });
            },
            startWaitAnimation: function startWaitAnimation() {
              this.waitAnimation = this.$buefy.loading.open({
                container: null,
              });
            },
            stopWaitAnimation: function stopWaitAnimation() {
              this.waitAnimation.close();
            },
            removeName: function removeName(name) {
              if (this.$store.state.wheelConfig.playClickWhenWinnerRemoved) {
                _audio_js__WEBPACK_IMPORTED_MODULE_22__["playClick"]();
              }
              this.$store.commit("removeName", name);
              var msg = this.$t("app.Removed", {
                name: _Util_js__WEBPACK_IMPORTED_MODULE_17__[
                  "extractDisplayText"
                ](name, true),
              });
              this.showSnackbarMessage(msg);
            },
            removeNameAll: function removeNameAll(name) {
              if (this.$store.state.wheelConfig.playClickWhenWinnerRemoved) {
                _audio_js__WEBPACK_IMPORTED_MODULE_22__["playClick"]();
              }
              this.$store.commit("removeNameAll", name);
              var msg = this.$t("app.Removed", {
                name: _Util_js__WEBPACK_IMPORTED_MODULE_17__[
                  "extractDisplayText"
                ](name, true),
              });
              this.showSnackbarMessage(msg);
            },
            resetWheelRotation: function resetWheelRotation() {
              this.$refs.spinningwheel.resetRotation();
            },
          },
        };

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/appInfo.vue?vue&type=script&lang=js&":
      /*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/appInfo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./Util.js */ "./static/Util.js");

        /* harmony default export */ __webpack_exports__["default"] = {
          computed: {
            appInfoVisible: function appInfoVisible() {
              return this.$store.state.preferences.appInfoVisible;
            },
            version: function version() {
              return this.$store.state.version;
            },
          },
          methods: {
            toggleVisibility: function toggleVisibility() {
              _Util_js__WEBPACK_IMPORTED_MODULE_0__["trackEvent"](
                "Wheel",
                "ToggleAppInfoVisibility",
                ""
              );
              this.$store.commit("toggleAppInfoVisibility");
            },
          },
        };

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/appShow.vue?vue&type=script&lang=js&":
      /*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/appShow.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./Util */ "./static/Util.js");

        /* harmony default export */ __webpack_exports__["default"] = {
          name: "appDesc",
          props: {
            isWheelPage: {
              type: Boolean,
              required: true,
            },
          },
          data: function data() {
            return {
              isWheelPage: this.isWheelPage,
            };
          },
          methods: {
            gotoAppMarket: function gotoAppMarket(app) {
              _Util__WEBPACK_IMPORTED_MODULE_0__["gotoInGoogleAnalytics"](
                "gotoAppMarket",
                app,
                ""
              );
            },
          },
        };

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/bottom.vue?vue&type=script&lang=js&":
      /*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/bottom.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = {
          name: "bottom",
        };

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/entry-counter.vue?vue&type=script&lang=js&":
      /*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/entry-counter.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = {
          computed: {
            entriesMessage: function entriesMessage() {
              return this.$t("common.Entries", {
                entryCount: this.$store.getters.entryCount,
              });
            },
          },
        };

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/faq.vue?vue&type=script&lang=js&":
      /*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/faq.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = {
          name: "faq",
          props: ["title", "questions"],
        };

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/hotwheels.vue?vue&type=script&lang=js&":
      /*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/hotwheels.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _simpletoolbar_vue__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./simpletoolbar.vue */ "./static/simpletoolbar.vue"
          );
        /* harmony import */ var _bottom_vue__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./bottom.vue */ "./static/bottom.vue");
        /* harmony import */ var _toolbar_vue__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./toolbar.vue */ "./static/toolbar.vue");
        /* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./Util */ "./static/Util.js");
        function _typeof(o) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return e;
            };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      }
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      }
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw new Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator["return"] &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction"
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = {
          components: {
            SimpleToolbar:
              _simpletoolbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
            bottom: _bottom_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
            toolbar: _toolbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
          },
          created: function created() {
            this.getData();
          },
          methods: {
            getData: function getData() {
              var _this = this;
              return _asyncToGenerator(
                /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
                  var fetchNames, response, data, obj;
                  return _regeneratorRuntime().wrap(function _callee$(
                    _context
                  ) {
                    while (1)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          fetchNames = function fetchNames(category) {
                            return fetch(
                              "https://api.spinthewheel.cc/spin/category-wheels?category=".concat(
                                category
                              )
                            );
                          };
                          _context.next = 3;
                          return fetchNames("HotWheels");
                        case 3:
                          response = _context.sent;
                          _context.next = 6;
                          return response.json();
                        case 6:
                          data = _context.sent;
                          if (data.code === 200 && data.data != null) {
                            obj = eval(data.data);
                            _this.newWheels = obj.New;
                            if (_this.newWheels.length > 0) {
                              _this.newWheelsCategory =
                                _this.newWheels[0].subcategory;
                            }
                            _this.trendingWheels = obj.Popular;
                            if (_this.trendingWheels.length > 0) {
                              _this.trendingWheelsCategory =
                                _this.trendingWheels[0].subcategory;
                            }
                            _this.relatedWheels = obj.Related;
                            if (_this.relatedWheels.length > 0) {
                              _this.relatedWheelsCategory =
                                _this.relatedWheels[0].subcategory;
                            }
                            _this.otherWheels = obj.Other;
                            if (_this.otherWheels.length > 0) {
                              _this.otherWheelsCategory =
                                _this.otherWheels[0].subcategory;
                            }
                          }
                        case 8:
                        case "end":
                          return _context.stop();
                      }
                  },
                  _callee);
                })
              )();
            },
            goto: function goto(path) {
              _Util__WEBPACK_IMPORTED_MODULE_3__["gotoInGoogleAnalytics"](
                "HotWheelsPageGoto",
                path,
                ""
              );
            },
          },
          data: function data() {
            return {
              newWheels: [],
              newWheelsCategory: "",
              trendingWheels: [],
              trendingWheelsCategory: "",
              relatedWheels: [],
              relatedWheelsCategory: "",
              otherWheels: [],
              otherWheelsCategory: "",
            };
          },
        };

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/optionsdialog.vue?vue&type=script&lang=js&":
      /*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/optionsdialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _galleryImageList_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./galleryImageList.js */ "./static/galleryImageList.js"
          );
        /* harmony import */ var _galleryImageList_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _galleryImageList_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _colorThemeList_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./colorThemeList.js */ "./static/colorThemeList.js"
          );
        /* harmony import */ var _colorThemeList_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _colorThemeList_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _hubSizes_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./hubSizes.js */ "./static/hubSizes.js");
        /* harmony import */ var _hubSizes_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _hubSizes_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./audio.js */ "./static/audio.js");
        /* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./Util.js */ "./static/Util.js");
        /* harmony import */ var _ImageUtil_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./ImageUtil.js */ "./static/ImageUtil.js");
        function _typeof(o) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return e;
            };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      }
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      }
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw new Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator["return"] &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction"
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = {
          data: function data() {
            return {
              optionsDialogVisible: false,
              wheelConfig: {},
              activeTab: 0,
              galleryPictures:
                _galleryImageList_js__WEBPACK_IMPORTED_MODULE_0___default.a
                  .list,
              colorThemeCategories:
                _colorThemeList_js__WEBPACK_IMPORTED_MODULE_1___default.a.list,
              colorThemeCategory: null,
              colorThemes: [],
              colorTheme: null,
              uploadedImage: {},
              duringSpinSounds:
                _audio_js__WEBPACK_IMPORTED_MODULE_3__["getDuringSpinSounds"](),
              afterSpinSounds:
                _audio_js__WEBPACK_IMPORTED_MODULE_3__["getAfterSpinSounds"](),
              hubSizes: Object.keys(
                _hubSizes_js__WEBPACK_IMPORTED_MODULE_2__["hubSizes"]
              ),
            };
          },
          computed: {
            pictureType: function pictureType() {
              return this.wheelConfig.pictureType;
            },
            galleryPicture: function galleryPicture() {
              return this.wheelConfig.galleryPicture;
            },
            customPictureName: function customPictureName() {
              return this.wheelConfig.customPictureName;
            },
          },
          watch: {
            pictureType: function pictureType(newValue) {
              if (newValue != "gallery") {
                this.wheelConfig.galleryPicture = "images/none.png";
              }
              if (newValue != "uploaded") {
                this.wheelConfig.customPictureName = "";
                this.wheelConfig.customPictureDataUri = "";
              }
            },
            uploadedImage: function uploadedImage(newValue) {
              var reader = new FileReader();
              var self = this;
              reader.onload = /*#__PURE__*/ (function () {
                var _ref = _asyncToGenerator(
                  /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(e) {
                    var dataUri;
                    return _regeneratorRuntime().wrap(function _callee$(
                      _context
                    ) {
                      while (1)
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            _Util_js__WEBPACK_IMPORTED_MODULE_4__["trackEvent"](
                              "Wheel",
                              "UploadedCustomImage",
                              ""
                            );
                            _context.next = 3;
                            return _ImageUtil_js__WEBPACK_IMPORTED_MODULE_5__[
                              "optimizeCenterImage"
                            ](e.target.result);
                          case 3:
                            dataUri = _context.sent;
                            self.wheelConfig.setCustomPicture(
                              newValue.name,
                              dataUri
                            );
                            self.$buefy.dialog.confirm({
                              message: self.$t(
                                "optionsdialog.Your image has been uploaded",
                                {
                                  fileName: newValue.name,
                                }
                              ),
                              hasIcon: true,
                              icon: "palette",
                              iconPack: "fa",
                              confirmText: self.$t("optionsdialog.Yes"),
                              cancelText: self.$t("optionsdialog.No"),
                              onConfirm: function onConfirm() {
                                return self.setColorsFromCustomPicture();
                              },
                            });
                          case 6:
                          case "end":
                            return _context.stop();
                        }
                    },
                    _callee);
                  })
                );
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              })();
              reader.readAsDataURL(newValue);
            },
            colorThemeCategory: function colorThemeCategory(newValue) {
              if (newValue) {
                this.colorThemes = this.colorThemeCategories[newValue];
                this.colorTheme = null;
              }
            },
            colorTheme: function colorTheme(newValue) {
              if (newValue) {
                _Util_js__WEBPACK_IMPORTED_MODULE_4__["trackEvent"](
                  "Wheel",
                  "SetColorTheme",
                  newValue
                );
                for (
                  var i = 0;
                  i < this.wheelConfig.colorSettings.length;
                  i++
                ) {
                  this.wheelConfig.colorSettings[i] = {
                    color: "#000000",
                    enabled: false,
                  };
                }
                var colors = this.colorThemes[newValue];
                for (var _i = 0; _i < colors.length; _i++) {
                  this.wheelConfig.colorSettings[_i] = {
                    color: colors[_i],
                    enabled: true,
                  };
                }
              }
            },
          },
          methods: {
            show: function show() {
              this.wheelConfig = this.$store.state.wheelConfig.clone();
              this.colorThemeCategory = null;
              this.colorTheme = null;
              this.optionsDialogVisible = true;
            },
            setColorsFromCustomPicture: function setColorsFromCustomPicture() {
              var _this = this;
              return _asyncToGenerator(
                /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
                  var colors, i;
                  return _regeneratorRuntime().wrap(function _callee2$(
                    _context2
                  ) {
                    while (1)
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          _Util_js__WEBPACK_IMPORTED_MODULE_4__["trackEvent"](
                            "Wheel",
                            "SetColorsFromCustomPicture",
                            ""
                          );
                          _context2.next = 3;
                          return _ImageUtil_js__WEBPACK_IMPORTED_MODULE_5__[
                            "extractColors"
                          ](_this.wheelConfig.customPictureDataUri);
                        case 3:
                          colors = _context2.sent;
                          for (i = 0; i < colors.length; i++) {
                            _this.wheelConfig.colorSettings[i] = {
                              color: colors[i],
                              enabled: true,
                            };
                          }
                          _this.$forceUpdate();
                        case 6:
                        case "end":
                          return _context2.stop();
                      }
                  },
                  _callee2);
                })
              )();
            },
            saveOptions: function saveOptions() {
              this.$store.commit("setWheelConfig", this.wheelConfig);
              this.optionsDialogVisible = false;
            },
          },
        };

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/recommendWheels.vue?vue&type=script&lang=js&":
      /*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/recommendWheels.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = {
          name: "recommendWheels",
          props: ["recommendList"],
          data: function data() {
            return {
              recommendList: this.recommendList,
            };
          },
        };

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/simpletoolbar.vue?vue&type=script&lang=js&":
      /*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/simpletoolbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = {
          data: function data() {
            return {
              toolbarBrand: window.location.host,
            };
          },
        };

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/spinningwheel.vue?vue&type=script&lang=js&":
      /*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/spinningwheel.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Wheel_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./Wheel.js */ "./static/Wheel.js");
        /* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./Util.js */ "./static/Util.js");
        /* harmony import */ var _Ticker_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./Ticker.js */ "./static/Ticker.js");
        /* harmony import */ var circletype__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! circletype */ "./node_modules/circletype/dist/circletype.min.js"
          );
        /* harmony import */ var circletype__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            circletype__WEBPACK_IMPORTED_MODULE_3__
          );

        /* harmony default export */ __webpack_exports__["default"] = {
          data: function data() {
            return {
              myWheel: new _Wheel_js__WEBPACK_IMPORTED_MODULE_0__["default"](),
              myTicker: new _Ticker_js__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ](),
              isTouchScreen:
                _Util_js__WEBPACK_IMPORTED_MODULE_1__["isTouchScreen"](),
            };
          },
          mounted: function mounted() {
            this.myWheel = new _Wheel_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ]();
            this.tick(0);
            this.setupOverlay();
            this.startKeyListener();
          },
          computed: {
            wheelConfig: function wheelConfig() {
              return this.$store.state.wheelConfig;
            },
            names: function names() {
              return this.$store.state.wheelConfig.names;
            },
            preferences: function preferences() {
              return this.$store.state.preferences;
            },
            hasEntries: function hasEntries() {
              return this.$store.state.wheelConfig.names.length > 0;
            },
            spinWidth: function spinWidth() {
              return this.isTouchScreen ? "width: 100%;" : "width: 100%";
            },
            title: function title() {
              return this.$store.state.wheelConfig.title;
            },
          },
          watch: {
            wheelConfig: function wheelConfig(newValue, oldValue) {
              this.configureWheel();
            },
            preferences: function preferences(newValue) {
              this.configureWheel();
            },
            names: function names(newValue, oldValue) {
              this.myWheel.setNames(
                newValue,
                this.wheelConfig.maxNames,
                this.wheelConfig.allowDuplicates
              );
            },
          },
          methods: {
            setupOverlay: function setupOverlay() {
              var side = document.getElementById("wheelCanvas").offsetWidth;
              document.getElementById("instructionsLayer").style.fontSize =
                "".concat(Math.round(side / 20), "px");
              if (this.cantBeDisplayedInCircleType(this.$i18n.locale)) return;
              var radius = side / 3;
              new circletype__WEBPACK_IMPORTED_MODULE_3___default.a(
                document.getElementById("topInstruction")
              ).radius(radius);
              if (document.getElementById("bottomInstruction")) {
                new circletype__WEBPACK_IMPORTED_MODULE_3___default.a(
                  document.getElementById("bottomInstruction")
                )
                  .radius(radius)
                  .dir(-1);
              }
            },
            cantBeDisplayedInCircleType: function cantBeDisplayedInCircleType(
              locale
            ) {
              return ["ar", "bn", "fa", "gu", "he", "hi"].includes(locale);
            },
            startKeyListener: function startKeyListener() {
              if (!_Util_js__WEBPACK_IMPORTED_MODULE_1__["isTouchScreen"]()) {
                var self = this;
                document.addEventListener("keyup", function (event) {
                  if (event.key == "Enter" && event.ctrlKey) {
                    self.spin();
                  }
                });
              }
            },
            spin: function spin() {
              if (this.myWheel.isSpinning()) return;
              if (!this.hasEntries) return;
              this.trackInGoogleAnalytics();
              this.$refs.instructionsLayer.style.display = "none";
              this.$store.commit("startWheelSpin");
              this.$emit("wheel-started");
              this.myWheel.click(this.onNameChanged, this.onStopWheelSpin);
            },
            onNameChanged: function onNameChanged() {
              this.$emit("name-changed");
            },
            onStopWheelSpin: function onStopWheelSpin(winningEntry) {
              this.$store.commit("stopWheelSpin");
              this.$emit("wheel-stopped", winningEntry);
            },
            trackInGoogleAnalytics: function trackInGoogleAnalytics() {
              var defaultNames = this.wheelConfig.getDefaultNames();
              if (
                !_Util_js__WEBPACK_IMPORTED_MODULE_1__["arraysEqual"](
                  this.names,
                  defaultNames
                )
              ) {
                var label = this.$store.state.version;
                _Util_js__WEBPACK_IMPORTED_MODULE_1__["trackEvent"](
                  "Wheel",
                  "SpinWithCustomNames",
                  label
                );
              } else {
                _Util_js__WEBPACK_IMPORTED_MODULE_1__["trackEvent"](
                  "Wheel",
                  "SpinWithDefaultNames",
                  ""
                );
              }
            },
            tick: function tick(ms) {
              this.myTicker.setTimestamp(ms);
              while (this.myTicker.shouldTick()) {
                this.myWheel.tick();
              }
              var context = document
                .getElementById("wheelCanvas")
                .getContext("2d");
              this.myWheel.draw(context);
              requestAnimationFrame(this.tick);
            },
            resetRotation: function resetRotation() {
              this.myWheel.resetRotation();
            },
            refresh: function refresh() {
              this.myWheel.refresh();
            },
            configureWheel: function configureWheel() {
              this.myWheel.configure(
                this.$store.state.wheelConfig.getCoalescedColors(),
                this.$store.state.wheelConfig.getWheelImage(),
                this.$store.state.wheelConfig.spinTime,
                this.$store.state.wheelConfig.slowSpin,
                this.$store.state.wheelConfig.hubSize,
                this.$store.getters.darkMode
                  ? "#000"
                  : this.$store.state.wheelConfig.pageBackgroundColor
              );
            },
          },
        };

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/textbox.vue?vue&type=script&lang=js&":
      /*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/textbox.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./Util.js */ "./static/Util.js");

        /* harmony default export */ __webpack_exports__["default"] = {
          data: function data() {
            return {
              updateTriggeredByMe: false,
            };
          },
          computed: {
            names: function names() {
              return this.$store.state.wheelConfig.names;
            },
            wheelConfig: function wheelConfig() {
              return this.$store.state.wheelConfig;
            },
            wheelSpinning: function wheelSpinning() {
              return this.$store.state.appStatus.wheelSpinning;
            },
            sheetLinked: function sheetLinked() {
              return this.$store.state.appStatus.sheetLinked;
            },
          },
          watch: {
            names: function names(newValue, oldValue) {
              if (this.updateTriggeredByMe) {
                this.updateTriggeredByMe = false;
              } else {
                var div = document.getElementById("names");
                div.innerHTML = newValue
                  .map(function (name) {
                    return "<div>".concat(name, "</div>");
                  })
                  .join("");
              }
            },
            wheelConfig: function wheelConfig(newValue, oldValue) {
              var div = document.getElementById("names");
              div.innerHTML = newValue.names
                .map(function (name) {
                  return "<div>".concat(name, "</div>");
                })
                .join("");
            },
            wheelSpinning: function wheelSpinning(isSpinning) {
              var editable = !isSpinning;
              var textBoxDiv = document.getElementById("names");
              textBoxDiv.setAttribute("contenteditable", editable);
            },
            sheetLinked: function sheetLinked(isLinked) {
              var editable = !isLinked;
              var textBoxDiv = document.getElementById("names");
              textBoxDiv.setAttribute("contenteditable", editable);
              if (isLinked) {
                textBoxDiv.style.backgroundImage = "url('/images/link.png')";
                textBoxDiv.style.backgroundSize = "100%";
                textBoxDiv.style.backgroundAttachment = "local";
              } else {
                textBoxDiv.style.backgroundImage = "";
              }
            },
          },
          methods: {
            setNames: function setNames() {
              this.updateTriggeredByMe = true;
              var entries = this.getEntries();
              this.$store.commit("setNames", entries);
            },
            IE_setNames: function IE_setNames() {
              if (_Util_js__WEBPACK_IMPORTED_MODULE_0__["browserIsIE"]()) {
                this.setNames();
              }
            },
            getEntries: function getEntries() {
              var div = document.getElementById("names");
              var html = div.innerHTML;
              return this.getEntriesFromHtml(html);
            },
            getEntriesFromHtml: function getEntriesFromHtml(html) {
              if (!html) return [];
              var rows = html.split(/<div>|<br>|<p>/);
              var junks = ["</div>", "<br>", "</p>", /<span.*?>/, "</span>"];
              return rows
                .map(function (row) {
                  var retVal = row;
                  junks.forEach(function (junk) {
                    retVal = retVal.replace(junk, "");
                  });
                  return retVal;
                })
                .filter(function (entry) {
                  return entry != "";
                });
            },
            onPaste: function onPaste(e) {
              // Intercept paste into the text-box. Transform rich text into plain text,
              // unless a data image is being pasted.
              e.preventDefault();
              _Util_js__WEBPACK_IMPORTED_MODULE_0__["trackEvent"](
                "Wheel",
                "PasteIntoTextbox",
                ""
              );
              if (e.clipboardData) {
                var html = (e.originalEvent || e).clipboardData.getData(
                  "text/html"
                );
                var match = html.match(/(<.*?src="data:image.*?>)/);
                if (match) {
                  document.execCommand("insertHtml", false, match[1]);
                } else {
                  var text = (e.originalEvent || e).clipboardData.getData(
                    "text/plain"
                  );
                  document.execCommand("insertText", false, text);
                }
              } else {
                var clipboardData = window.clipboardData.getData("text");
                if (clipboardData) {
                  this.$store.commit("appendNames", clipboardData.split(/\n/));
                }
              }
            },
          },
        };

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/textboxbuttons.vue?vue&type=script&lang=js&":
      /*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/textboxbuttons.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./Util.js */ "./static/Util.js");
        /* harmony import */ var _ImageUtil_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./ImageUtil.js */ "./static/ImageUtil.js");
        function _typeof(o) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return e;
            };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      }
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      }
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw new Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator["return"] &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction"
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }
        function _createForOfIteratorHelper(o, allowArrayLike) {
          var it =
            (typeof Symbol !== "undefined" && o[Symbol.iterator]) ||
            o["@@iterator"];
          if (!it) {
            if (
              Array.isArray(o) ||
              (it = _unsupportedIterableToArray(o)) ||
              (allowArrayLike && o && typeof o.length === "number")
            ) {
              if (it) o = it;
              var i = 0;
              var F = function F() {};
              return {
                s: F,
                n: function n() {
                  if (i >= o.length) return { done: true };
                  return { done: false, value: o[i++] };
                },
                e: function e(_e) {
                  throw _e;
                },
                f: F,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var normalCompletion = true,
            didErr = false,
            err;
          return {
            s: function s() {
              it = it.call(o);
            },
            n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e2) {
              didErr = true;
              err = _e2;
            },
            f: function f() {
              try {
                if (!normalCompletion && it["return"] != null) it["return"]();
              } finally {
                if (didErr) throw err;
              }
            },
          };
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }

        /* harmony default export */ __webpack_exports__["default"] = {
          data: function data() {
            return {
              uploadedImage: [],
            };
          },
          watch: {
            uploadedImage: function uploadedImage(files) {
              var _this = this;
              if (files.length == 0) return;
              _Util_js__WEBPACK_IMPORTED_MODULE_0__["trackEvent"](
                "Wheel",
                "UploadPieSliceImage",
                files.length
              );
              var _iterator = _createForOfIteratorHelper(files),
                _step;
              try {
                var _loop = function _loop() {
                  var file = _step.value;
                  var reader = new FileReader();
                  var self = _this;
                  reader.onload = /*#__PURE__*/ (function () {
                    var _ref = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(
                        e
                      ) {
                        var dataUri, imageTag;
                        return _regeneratorRuntime().wrap(function _callee$(
                          _context
                        ) {
                          while (1)
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                _context.next = 2;
                                return _ImageUtil_js__WEBPACK_IMPORTED_MODULE_1__[
                                  "optimizeSliceImage"
                                ](e.target.result);
                              case 2:
                                dataUri = _context.sent;
                                imageTag = '<img src="'.concat(
                                  dataUri,
                                  '" style="height:25px" style="font-size: 1rem;">'
                                );
                                self.$store.commit("appendNames", [imageTag]);
                              case 5:
                              case "end":
                                return _context.stop();
                            }
                        },
                        _callee);
                      })
                    );
                    return function (_x) {
                      return _ref.apply(this, arguments);
                    };
                  })();
                  reader.readAsDataURL(file);
                };
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  _loop();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              this.uploadedImage = [];
            },
          },
          computed: {
            buttonsDisabled: function buttonsDisabled() {
              var appStatus = this.$store.state.appStatus;
              return appStatus.sheetLinked || appStatus.wheelSpinning;
            },
          },
          methods: {
            shuffle: function shuffle() {
              _Util_js__WEBPACK_IMPORTED_MODULE_0__["trackEvent"](
                "Wheel",
                "ShuffleNames",
                ""
              );
              this.$store.commit("shuffleNames");
            },
            sort: function sort() {
              _Util_js__WEBPACK_IMPORTED_MODULE_0__["trackEvent"](
                "Wheel",
                "SortNames",
                ""
              );
              this.$store.commit("sortNames");
            },
          },
        };

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/toolbar.vue?vue&type=script&lang=js&":
      /*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/toolbar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./Util.js */ "./static/Util.js");
        /* harmony import */ var _Locales_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./Locales.js */ "./static/Locales.js");

        /* harmony default export */ __webpack_exports__["default"] = {
          data: function data() {
            return {
              toolbarBrand: window.location.host,
              browserIsIEOrOldEdge: _Util_js__WEBPACK_IMPORTED_MODULE_0__[
                "browserIsIEOrOldEdge"
              ](navigator.userAgent),
              locale: this.$i18n.locale,
              locales:
                _Locales_js__WEBPACK_IMPORTED_MODULE_1__["getNamesForAll"](),
            };
          },
          computed: {
            newButtonVisible: function newButtonVisible() {
              var appStatus = this.$store.state.appStatus;
              return (
                !appStatus.fullScreen &&
                !appStatus.sheetLinked &&
                !appStatus.wheelSpinning
              );
            },
            openButtonVisible: function openButtonVisible() {
              var appStatus = this.$store.state.appStatus;
              return (
                !appStatus.fullScreen &&
                !appStatus.sheetLinked &&
                !appStatus.wheelSpinning
              );
            },
            saveButtonVisible: function saveButtonVisible() {
              var appStatus = this.$store.state.appStatus;
              return (
                appStatus.online &&
                !appStatus.fullScreen &&
                !appStatus.wheelSpinning
              );
            },
            shareButtonVisible: function shareButtonVisible() {
              var appStatus = this.$store.state.appStatus;
              return (
                appStatus.online &&
                !appStatus.fullScreen &&
                !appStatus.wheelSpinning
              );
            },
            optionsButtonVisible: function optionsButtonVisible() {
              var appStatus = this.$store.state.appStatus;
              return (
                !this.$store.state.appStatus.fullScreen &&
                !appStatus.wheelSpinning
              );
            },
            fullscreenButtonVisible: function fullscreenButtonVisible() {
              var appStatus = this.$store.state.appStatus;
              return !appStatus.fullScreen && !appStatus.wheelSpinning;
            },
            exitFullscreenButtonVisible:
              function exitFullscreenButtonVisible() {
                return this.$store.state.appStatus.fullScreen;
              },
            moreVisible: function moreVisible() {
              var appStatus = this.$store.state.appStatus;
              return (
                appStatus.online &&
                !appStatus.fullScreen &&
                !appStatus.wheelSpinning
              );
            },
            importVisible: function importVisible() {
              var appStatus = this.$store.state.appStatus;
              return (
                appStatus.online &&
                !appStatus.fullScreen &&
                !appStatus.sheetLinked &&
                !appStatus.wheelSpinning
              );
            },
            unlinkSheetButtonVisible: function unlinkSheetButtonVisible() {
              var appStatus = this.$store.state.appStatus;
              return (
                appStatus.sheetLinked &&
                !appStatus.fullScreen &&
                !appStatus.wheelSpinning
              );
            },
            languageVisible: function languageVisible() {
              var appStatus = this.$store.state.appStatus;
              return (
                appStatus.online &&
                !appStatus.fullScreen &&
                !appStatus.wheelSpinning
              );
            },
            faqbuttonVisible: function faqbuttonVisible() {
              var appStatus = this.$store.state.appStatus;
              return !appStatus.fullScreen && !appStatus.wheelSpinning;
            },
          },
          watch: {
            locale: function locale(newValue) {
              console.log("newValue", newValue);
              _Util_js__WEBPACK_IMPORTED_MODULE_0__["trackEvent"](
                "Wheel",
                "changeLanguage",
                newValue
              );
              this.$emit("set-locale", newValue);
              this.$i18n.locale = newValue;
            },
          },
          methods: {
            toggleDarkMode: function toggleDarkMode() {
              _Util_js__WEBPACK_IMPORTED_MODULE_0__["trackEvent"](
                "Wheel",
                "ToggleDarkMode",
                ""
              );
              this.$store.commit("toggleDarkMode");
            },
            gotoWheels: function gotoWheels(category) {
              _Util_js__WEBPACK_IMPORTED_MODULE_0__["gotoInGoogleAnalytics"](
                category,
                "toolbar",
                ""
              );
            },
          },
        };

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/top10wheels.vue?vue&type=script&lang=js&":
      /*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/top10wheels.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _simpletoolbar_vue__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./simpletoolbar.vue */ "./static/simpletoolbar.vue"
          );
        /* harmony import */ var _bottom_vue__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./bottom.vue */ "./static/bottom.vue");
        /* harmony import */ var _toolbar_vue__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./toolbar.vue */ "./static/toolbar.vue");
        /* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./Util */ "./static/Util.js");
        function _typeof(o) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return e;
            };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      }
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      }
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw new Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator["return"] &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction"
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        /* harmony default export */ __webpack_exports__["default"] = {
          components: {
            SimpleToolbar:
              _simpletoolbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
            bottom: _bottom_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
            toolbar: _toolbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
          },
          created: function created() {
            this.getData();
          },
          methods: {
            getData: function getData() {
              var _this = this;
              return _asyncToGenerator(
                /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
                  var fetchNames, response, data, obj;
                  return _regeneratorRuntime().wrap(function _callee$(
                    _context
                  ) {
                    while (1)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          fetchNames = function fetchNames(category) {
                            return fetch(
                              "https://api.spinthewheel.cc/spin/category-wheels?category=".concat(
                                category
                              )
                            );
                          };
                          _context.next = 3;
                          return fetchNames("Top10Wheels");
                        case 3:
                          response = _context.sent;
                          _context.next = 6;
                          return response.json();
                        case 6:
                          data = _context.sent;
                          if (data.code === 200 && data.data != null) {
                            obj = eval(data.data);
                            _this.newWheels = obj.New;
                            if (_this.newWheels.length > 0) {
                              _this.newWheelsCategory =
                                _this.newWheels[0].subcategory;
                            }
                            _this.trendingWheels = obj.Popular;
                            if (_this.trendingWheels.length > 0) {
                              _this.trendingWheelsCategory =
                                _this.trendingWheels[0].subcategory;
                            }
                            _this.relatedWheels = obj.Related;
                            if (_this.relatedWheels.length > 0) {
                              _this.relatedWheelsCategory =
                                _this.relatedWheels[0].subcategory;
                            }
                            _this.otherWheels = obj.Other;
                            if (_this.otherWheels.length > 0) {
                              _this.otherWheelsCategory =
                                _this.otherWheels[0].subcategory;
                            }
                          }
                        case 8:
                        case "end":
                          return _context.stop();
                      }
                  },
                  _callee);
                })
              )();
            },
            goto: function goto(path) {
              _Util__WEBPACK_IMPORTED_MODULE_3__["gotoInGoogleAnalytics"](
                "Top10WheelsPageGoto",
                path,
                ""
              );
            },
          },
          data: function data() {
            return {
              newWheels: [],
              newWheelsCategory: "",
              trendingWheels: [],
              trendingWheelsCategory: "",
              relatedWheels: [],
              relatedWheelsCategory: "",
              otherWheels: [],
              otherWheelsCategory: "",
            };
          },
        };

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/wheelList.vue?vue&type=script&lang=js&":
      /*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/wheelList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./Util */ "./static/Util.js");

        /* harmony default export */ __webpack_exports__["default"] = {
          name: "wheelList",
          props: ["newWheels", "popWheels", "relatedWheels", "otherWheels"],
          data: function data() {
            return {
              newWheels: this.newWheels,
              newWheelsCategory: "New wheels",
              popWheels: this.popWheels,
              popWheelsCategory: "Popular wheels",
              relatedWheels: this.relatedWheels,
              relatedWheelsCategory: "Related wheels",
              otherWheels: this.otherWheels,
              otherWheelsCategory: "Other wheels",
            };
          },
          methods: {
            goto: function goto(path) {
              _Util__WEBPACK_IMPORTED_MODULE_0__["gotoInGoogleAnalytics"](
                "HomeWheelsPageGoto",
                path,
                ""
              );
            },
          },
        };

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/winneranimation.vue?vue&type=script&lang=js&":
      /*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/winneranimation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./Util.js */ "./static/Util.js");

        /* harmony default export */ __webpack_exports__["default"] = {
          data: function data() {
            return {
              winnerText: "",
            };
          },
          methods: {
            show: function show(winnerText) {
              var _this = this;
              var shortWinnerText = _Util_js__WEBPACK_IMPORTED_MODULE_0__[
                "extractDisplayText"
              ](winnerText, true);
              if (shortWinnerText) {
                this.winnerText = shortWinnerText;
                this.$refs.overlay.style.display = "block";
                setTimeout(function () {
                  _this.$refs.overlay.style.display = "none";
                }, 6000);
              }
            },
          },
        };

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/winnerdialog.vue?vue&type=script&lang=js&":
      /*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./static/winnerdialog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./Util.js */ "./static/Util.js");

        /* harmony default export */ __webpack_exports__["default"] = {
          data: function data() {
            return {
              winnerDialogVisible: false,
              winnerText: "",
              winnerImage: "",
              winnerEntry: "",
            };
          },
          computed: {
            winnerMessage: function winnerMessage() {
              return this.$store.state.wheelConfig.winnerMessage;
            },
            showRemoveButton: function showRemoveButton() {
              return !this.$store.state.wheelConfig.autoRemoveWinner;
            },
            showRemoveAllButton: function showRemoveAllButton() {
              var wheelConfig = this.$store.state.wheelConfig;
              var winnerInstances = _Util_js__WEBPACK_IMPORTED_MODULE_0__[
                "getOccurencesInArray"
              ](wheelConfig.names, this.winnerEntry);
              var autoRemoveWinner = wheelConfig.autoRemoveWinner;
              return !autoRemoveWinner && winnerInstances > 1;
            },
          },
          methods: {
            show: function show(winnerEntry) {
              this.winnerEntry = winnerEntry;
              this.winnerText = _Util_js__WEBPACK_IMPORTED_MODULE_0__[
                "extractDisplayText"
              ](winnerEntry, false);
              this.winnerImage =
                _Util_js__WEBPACK_IMPORTED_MODULE_0__["extractImage"](
                  winnerEntry
                );
              this.winnerDialogVisible = true;
              this.setFocusOnRemoveButton();
            },
            setFocusOnRemoveButton: function setFocusOnRemoveButton() {
              var _this = this;
              this.$nextTick(function () {
                setTimeout(function () {
                  if (_this.$refs.removeButton)
                    _this.$refs.removeButton.$el.focus();
                }, 100);
              });
            },
            close: function close() {
              this.winnerDialogVisible = false;
            },
            removeWinner: function removeWinner() {
              this.$emit("remove-name", this.winnerEntry);
              this.winnerDialogVisible = false;
            },
            removeWinnerAll: function removeWinnerAll() {
              this.$emit("remove-name-all", this.winnerEntry);
              this.winnerDialogVisible = false;
            },
          },
        };

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/app.vue?vue&type=template&id=342a570e&scoped=true&":
      /*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/app.vue?vue&type=template&id=342a570e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _c(
            "span",
            [
              _c("loading-screen", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.loading,
                    expression: "loading",
                  },
                ],
              }),
              _vm._v(" "),
              _c("toolbar", {
                on: {
                  "show-snackbar-message": _vm.showSnackbarMessage,
                  "reset-wheel": function resetWheel($event) {
                    return _vm.resetWheel();
                  },
                  "open-customize-dialog": function openCustomizeDialog(
                    $event
                  ) {
                    return _vm.openCustomizeDialog();
                  },
                  "set-locale": _vm.setLocale,
                },
              }),
              _vm._v(" "),
              _c(
                "section",
                {
                  staticClass: "section",
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "columns",
                      class: {
                        "is-centered": _vm.$store.state.appStatus.fullScreen,
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "column is-6",
                          class: {
                            "is-6": _vm.$store.state.appStatus.fullScreen,
                          },
                          staticStyle: {
                            "padding-top": "20px",
                          },
                        },
                        [
                          _c("spinningwheel", {
                            ref: "spinningwheel",
                            on: {
                              "wheel-started": _vm.wheelStarted,
                              "name-changed": _vm.nameChanged,
                              "wheel-stopped": _vm.wheelStopped,
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "spinLabel",
                            },
                            [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: "/hotwheels",
                                  },
                                  on: {
                                    click: function click($event) {
                                      return _vm.gotoWheels("home");
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t(
                                        "spinningwheel.Explore more wheels"
                                      )
                                    )
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.$store.state.appStatus.fullScreen,
                              expression: "!$store.state.appStatus.fullScreen",
                            },
                          ],
                          staticClass: "column is-3",
                        },
                        [
                          _c(
                            "span",
                            {
                              staticStyle: {
                                "font-family": "Helvetica,serif",
                              },
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.$t("app.Enter names here")) +
                                  "\n        "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("textboxbuttons"),
                          _vm._v(" "),
                          _c("textbox"),
                          _vm._v(" "),
                          _c("entry-counter"),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.$store.state.appStatus.fullScreen,
                              expression: "!$store.state.appStatus.fullScreen",
                            },
                          ],
                          staticClass: "column is-3",
                        },
                        [
                          _c("app-show", {
                            attrs: {
                              "is-wheel-page": _vm.isWheelPage,
                            },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "wheelContent",
                    },
                    [
                      _c("div", {
                        domProps: {
                          innerHTML: _vm._s(this.content),
                        },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _vm.showWheelList
                    ? _c("wheel-list", {
                        attrs: {
                          "new-wheels": _vm.newWheels,
                          "pop-wheels": _vm.popularWheels,
                          "other-wheels": _vm.otherWheels,
                          "related-wheels": _vm.relatedWheels,
                        },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("faq", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.isWheelPage,
                        expression: "!isWheelPage",
                      },
                    ],
                    attrs: {
                      title: this.$t("faq.title"),
                      questions: this.$t("faq.questions"),
                    },
                  }),
                  _vm._v(" "),
                  _c("bottom"),
                ],
                1
              ),
              _vm._v(" "),
              _c("optionsdialog", {
                ref: "optionsdialog",
                on: {
                  "show-snackbar-message": _vm.showSnackbarMessage,
                },
              }),
              _vm._v(" "),
              _c("winnerdialog", {
                ref: "winnerdialog",
                on: {
                  "remove-name": _vm.removeName,
                  "remove-name-all": _vm.removeNameAll,
                },
              }),
              _vm._v(" "),
              _c("winneranimation", {
                ref: "winneranimation",
              }),
              _vm._v(" "),
              _c("cookie-law", {
                attrs: {
                  theme: "base--rounded",
                  buttonLink: "privacy.html",
                  buttonLinkText: "Privacy Policy",
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function fn(props) {
                      return _c("div", {}, [
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(_vm.privacyHtml),
                          },
                        }),
                        _vm._v("\n          \n      "),
                        _c(
                          "button",
                          {
                            staticClass: "skew",
                            on: {
                              click: props.accept,
                            },
                          },
                          [_c("span", [_vm._v(_vm._s(_vm.privacyAccept))])]
                        ),
                        _vm._v("\n          \n      "),
                        _c(
                          "button",
                          {
                            staticClass: "skew",
                            on: {
                              click: props.close,
                            },
                          },
                          [_c("span", [_vm._v(_vm._s(_vm.privacyIgnore))])]
                        ),
                      ]);
                    },
                  },
                ]),
              }),
            ],
            1
          );
        };
        var staticRenderFns = [];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/appInfo.vue?vue&type=template&id=0e84eddc&":
      /*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/appInfo.vue?vue&type=template&id=0e84eddc& ***!
  \*********************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _c(
            "div",
            {
              staticClass: "card can-go-dark",
              staticStyle: {
                "margin-top": "10px",
              },
            },
            [
              _c(
                "div",
                {
                  staticClass: "card-content",
                  staticStyle: {
                    padding: "10px",
                  },
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "content",
                    },
                    [
                      _vm.appInfoVisible
                        ? _c(
                            "div",
                            [
                              _c("b-button", {
                                staticStyle: {
                                  float: "right",
                                  "margin-left": "10px",
                                },
                                attrs: {
                                  type: "is-light",
                                  pack: "fas",
                                  "icon-left": "chevron-circle-down",
                                  size: "is-small",
                                },
                                on: {
                                  click: _vm.toggleVisibility,
                                },
                              }),
                              _vm._v(
                                "\n        " +
                                  _vm._s(
                                    _vm.$t("appInfo.The entries you make")
                                  ) +
                                  "\n        "
                              ),
                              _c("hr", {
                                staticStyle: {
                                  margin: "5px",
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticStyle: {
                                    color: "#999",
                                  },
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("appInfo.Version")) +
                                      " " +
                                      _vm._s(_vm.version)
                                  ),
                                ]
                              ),
                            ],
                            1
                          )
                        : _c(
                            "div",
                            [
                              _c("b-button", {
                                staticStyle: {
                                  float: "right",
                                  "margin-top": "-5px",
                                },
                                attrs: {
                                  type: "is-light",
                                  pack: "fas",
                                  "icon-left": "chevron-circle-up",
                                  size: "is-small",
                                },
                                on: {
                                  click: _vm.toggleVisibility,
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticStyle: {
                                    color: "#999",
                                  },
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("appInfo.Version")) +
                                      " " +
                                      _vm._s(_vm.version)
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                    ]
                  ),
                ]
              ),
            ]
          );
        };
        var staticRenderFns = [];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/appShow.vue?vue&type=template&id=2090b6aa&scoped=true&":
      /*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/appShow.vue?vue&type=template&id=2090b6aa&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _vm._m(0);
        };
        var staticRenderFns = [
          function () {
            var _vm = this,
              _c = _vm._self._c;
            return _c("div", [
              _c("ins", {
                staticClass: "adsbygoogle",
                staticStyle: {
                  display: "block",
                },
                attrs: {
                  "data-ad-client": "ca-pub-4238618992091351",
                  "data-ad-slot": "7859701734",
                  "data-ad-format": "auto",
                  "data-full-width-responsive": "true",
                },
              }),
            ]);
          },
        ];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/bottom.vue?vue&type=template&id=15a69f64&scoped=true&":
      /*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/bottom.vue?vue&type=template&id=15a69f64&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _c("span", [
            _c("section", [
              _c(
                "div",
                {
                  staticClass: "columns",
                  staticStyle: {
                    "padding-top": "60px",
                    "padding-bottom": "0",
                    "text-align": "center",
                  },
                },
              ),
            ]),
          ]);
        };
        var staticRenderFns = [
          function () {
            var _vm = this,
              _c = _vm._self._c;
            return _c(
              "div",
              {
                staticClass: "column is-2",
                staticStyle: {
                  "padding-top": "10px",
                },
              },
              [
                _vm._v("        "),
                _c(
                  "a",
                  {
                    attrs: {
                      target: "_blank",
                      href: "/",
                    },
                  },
                  [_c("b", [_vm._v("DMCA")])]
                ),
              ]
            );
          },
        ];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/entry-counter.vue?vue&type=template&id=810df364&scoped=true&":
      /*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/entry-counter.vue?vue&type=template&id=810df364&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _c(
            "div",
            {
              staticClass: "counter-text",
            },
            [_vm._v("\n  " + _vm._s(_vm.entriesMessage) + "\n")]
          );
        };
        var staticRenderFns = [];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/faq.vue?vue&type=template&id=231ee583&scoped=true&":
      /*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/faq.vue?vue&type=template&id=231ee583&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _c("span", [
            _c(
              "div",
              {
                staticClass: "faq",
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "spinItem",
                  },
                  [_vm._v(_vm._s(this.title))]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  _vm._l(this.questions, function (item) {
                    return _c("li", [
                      _c(
                        "h2",
                        {
                          staticClass: "line-padding",
                        },
                        [_vm._v(_vm._s(item.title))]
                      ),
                      _vm._v(" "),
                      _c("span", {
                        domProps: {
                          innerHTML: _vm._s(item.content),
                        },
                      }),
                    ]);
                  }),
                  0
                ),
              ]
            ),
          ]);
        };
        var staticRenderFns = [];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/hotwheels.vue?vue&type=template&id=a29ca39c&scoped=true&":
      /*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/hotwheels.vue?vue&type=template&id=a29ca39c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _c(
            "span",
            [
              _c("simple-toolbar"),
              _vm._v(" "),
              _c(
                "section",
                {
                  staticClass: "section",
                  staticStyle: {
                    "padding-top": "0",
                    "padding-bottom": "0",
                  },
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "columns",
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "column is-6",
                          staticStyle: {
                            "padding-top": "10px",
                          },
                        },
                        [
                          _c(
                            "h2",
                            {
                              staticClass: "spinItem",
                            },
                            [_vm._v(_vm._s(this.newWheelsCategory))]
                          ),
                          _vm._v(" "),
                          _vm._l(this.newWheels, function (w, index) {
                            return _c(
                              "div",
                              {
                                key: index,
                              },
                              [
                                w.name != null
                                  ? _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          "padding-bottom": "10px",
                                        },
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "wheelTitle",
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "/".concat(w.path),
                                                },
                                                on: {
                                                  click: function click(
                                                    $event
                                                  ) {
                                                    return _vm["goto"](w.path);
                                                  },
                                                },
                                              },
                                              [_vm._v(_vm._s(w.name))]
                                            ),
                                          ]
                                        ),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(w.description) +
                                              "\n              "
                                          ),
                                        ]),
                                      ]
                                    )
                                  : _vm._e(),
                              ]
                            );
                          }),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "column is-6",
                          staticStyle: {
                            "padding-top": "10px",
                          },
                        },
                        [
                          _c(
                            "h2",
                            {
                              staticClass: "spinItem",
                            },
                            [_vm._v(_vm._s(this.trendingWheelsCategory))]
                          ),
                          _vm._v(" "),
                          _vm._l(this.trendingWheels, function (w, index) {
                            return _c(
                              "div",
                              {
                                key: index,
                              },
                              [
                                w.name != null
                                  ? _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          "padding-bottom": "10px",
                                        },
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "wheelTitle",
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "/".concat(w.path),
                                                },
                                                on: {
                                                  click: function click(
                                                    $event
                                                  ) {
                                                    return _vm["goto"](w.path);
                                                  },
                                                },
                                              },
                                              [_vm._v(_vm._s(w.name))]
                                            ),
                                          ]
                                        ),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(w.description) +
                                              "\n              "
                                          ),
                                        ]),
                                      ]
                                    )
                                  : _vm._e(),
                              ]
                            );
                          }),
                        ],
                        2
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "columns",
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "column is-6",
                          staticStyle: {
                            "padding-top": "10px",
                          },
                        },
                        [
                          _c(
                            "h2",
                            {
                              staticClass: "spinItem",
                            },
                            [_vm._v(_vm._s(this.relatedWheelsCategory))]
                          ),
                          _vm._v(" "),
                          _vm._l(this.relatedWheels, function (w, index) {
                            return _c(
                              "div",
                              {
                                key: index,
                              },
                              [
                                w.name != null
                                  ? _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          "padding-bottom": "10px",
                                        },
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "wheelTitle",
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "/".concat(w.path),
                                                },
                                                on: {
                                                  click: function click(
                                                    $event
                                                  ) {
                                                    return _vm["goto"](w.path);
                                                  },
                                                },
                                              },
                                              [_vm._v(_vm._s(w.name))]
                                            ),
                                          ]
                                        ),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(w.description) +
                                              "\n              "
                                          ),
                                        ]),
                                      ]
                                    )
                                  : _vm._e(),
                              ]
                            );
                          }),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "column is-6",
                          staticStyle: {
                            "padding-top": "10px",
                          },
                        },
                        [
                          _c(
                            "h2",
                            {
                              staticClass: "spinItem",
                            },
                            [_vm._v(_vm._s(this.otherWheelsCategory))]
                          ),
                          _vm._v(" "),
                          _vm._l(this.otherWheels, function (w, index) {
                            return _c(
                              "div",
                              {
                                key: index,
                              },
                              [
                                w.name != null
                                  ? _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          "padding-bottom": "10px",
                                        },
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "wheelTitle",
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "/".concat(w.path),
                                                },
                                                on: {
                                                  click: function click(
                                                    $event
                                                  ) {
                                                    return _vm["goto"](w.path);
                                                  },
                                                },
                                              },
                                              [_vm._v(_vm._s(w.name))]
                                            ),
                                          ]
                                        ),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(w.description) +
                                              "\n              "
                                          ),
                                        ]),
                                      ]
                                    )
                                  : _vm._e(),
                              ]
                            );
                          }),
                        ],
                        2
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c("bottom"),
                ],
                1
              ),
            ],
            1
          );
        };
        var staticRenderFns = [];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/loadingScreen.vue?vue&type=template&id=de8bc816&scoped=true&":
      /*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/loadingScreen.vue?vue&type=template&id=de8bc816&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _c(
            "div",
            {
              staticClass: "overlay",
            },
            [_vm._v("\n  🚀\n")]
          );
        };
        var staticRenderFns = [];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/optionsdialog.vue?vue&type=template&id=5a328193&scoped=true&":
      /*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/optionsdialog.vue?vue&type=template&id=5a328193&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _c(
            "b-modal",
            {
              attrs: {
                active: _vm.optionsDialogVisible,
                width: 640,
                scroll: "keep",
                "full-screen": _vm.$mq == "mobile",
              },
              on: {
                "update:active": function updateActive($event) {
                  _vm.optionsDialogVisible = $event;
                },
              },
            },
            [
              _c(
                "div",
                {
                  staticClass: "modal-card",
                  staticStyle: {
                    width: "auto",
                  },
                },
                [
                  _c(
                    "section",
                    {
                      staticClass: "modal-card-body can-go-dark",
                    },
                    [
                      _c(
                        "b-tabs",
                        {
                          attrs: {
                            type: "is-boxed",
                            size: "is-small",
                          },
                          model: {
                            value: _vm.activeTab,
                            callback: function callback($$v) {
                              _vm.activeTab = $$v;
                            },
                            expression: "activeTab",
                          },
                        },
                        [
                          _c(
                            "b-tab-item",
                            {
                              attrs: {
                                label: _vm.$t("optionsdialog.During spin"),
                              },
                            },
                            [
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "columns",
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "column is-2",
                                    },
                                    [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(
                                            _vm.$t("optionsdialog.Sound")
                                          ) +
                                          "\n            "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "column",
                                    },
                                    [
                                      _c(
                                        "b-select",
                                        {
                                          model: {
                                            value:
                                              _vm.wheelConfig.duringSpinSound,
                                            callback: function callback($$v) {
                                              _vm.$set(
                                                _vm.wheelConfig,
                                                "duringSpinSound",
                                                $$v
                                              );
                                            },
                                            expression:
                                              "wheelConfig.duringSpinSound",
                                          },
                                        },
                                        _vm._l(
                                          _vm.duringSpinSounds,
                                          function (sound) {
                                            return _c(
                                              "option",
                                              {
                                                key: sound.value,
                                                domProps: {
                                                  value: sound.value,
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\n                  " +
                                                    _vm._s(_vm.$t(sound.name)) +
                                                    "\n                "
                                                ),
                                              ]
                                            );
                                          }
                                        ),
                                        0
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "b-checkbox",
                                {
                                  model: {
                                    value: _vm.wheelConfig.allowDuplicates,
                                    callback: function callback($$v) {
                                      _vm.$set(
                                        _vm.wheelConfig,
                                        "allowDuplicates",
                                        $$v
                                      );
                                    },
                                    expression: "wheelConfig.allowDuplicates",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(
                                        _vm.$t(
                                          "optionsdialog.Allow duplicates on wheel"
                                        )
                                      ) +
                                      "\n          "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-checkbox",
                                {
                                  model: {
                                    value: _vm.wheelConfig.slowSpin,
                                    callback: function callback($$v) {
                                      _vm.$set(
                                        _vm.wheelConfig,
                                        "slowSpin",
                                        $$v
                                      );
                                    },
                                    expression: "wheelConfig.slowSpin",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(
                                        _vm.$t("optionsdialog.Spin slowly")
                                      ) +
                                      "\n          "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(
                                "\n          " +
                                  _vm._s(
                                    _vm.$t("optionsdialog.Spin time (seconds)")
                                  ) +
                                  "\n          "
                              ),
                              _c(
                                "b-slider",
                                {
                                  attrs: {
                                    min: 1,
                                    max: 60,
                                  },
                                  model: {
                                    value: _vm.wheelConfig.spinTime,
                                    callback: function callback($$v) {
                                      _vm.$set(
                                        _vm.wheelConfig,
                                        "spinTime",
                                        $$v
                                      );
                                    },
                                    expression: "wheelConfig.spinTime",
                                  },
                                },
                                [
                                  _vm._l(
                                    [10, 20, 30, 40, 50, 60],
                                    function (val) {
                                      return [
                                        _c(
                                          "b-slider-tick",
                                          {
                                            key: val,
                                            attrs: {
                                              value: val,
                                            },
                                          },
                                          [_vm._v(_vm._s(val))]
                                        ),
                                      ];
                                    }
                                  ),
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _c("b", [
                                _vm._v(
                                  _vm._s(
                                    _vm.$t("optionsdialog.Max names on wheel")
                                  )
                                ),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("small", [
                                _vm._v(
                                  "\n            " +
                                    _vm._s(
                                      _vm.$t(
                                        "optionsdialog.All names in the text-box"
                                      )
                                    ) +
                                    "\n          "
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-slider",
                                {
                                  attrs: {
                                    min: 4,
                                    max: 500,
                                  },
                                  model: {
                                    value: _vm.wheelConfig.maxNames,
                                    callback: function callback($$v) {
                                      _vm.$set(
                                        _vm.wheelConfig,
                                        "maxNames",
                                        $$v
                                      );
                                    },
                                    expression: "wheelConfig.maxNames",
                                  },
                                },
                                [
                                  _vm._l(
                                    [
                                      50, 100, 150, 200, 250, 300, 350, 400,
                                      450, 500,
                                    ],
                                    function (val) {
                                      return [
                                        _c(
                                          "b-slider-tick",
                                          {
                                            key: val,
                                            attrs: {
                                              value: val,
                                            },
                                          },
                                          [_vm._v(_vm._s(val))]
                                        ),
                                      ];
                                    }
                                  ),
                                ],
                                2
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tab-item",
                            {
                              attrs: {
                                label: _vm.$t("optionsdialog.After spin"),
                              },
                            },
                            [
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "columns",
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "column is-2",
                                    },
                                    [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(
                                            _vm.$t("optionsdialog.Sound")
                                          ) +
                                          "\n            "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "column",
                                    },
                                    [
                                      _c(
                                        "b-select",
                                        {
                                          model: {
                                            value:
                                              _vm.wheelConfig.afterSpinSound,
                                            callback: function callback($$v) {
                                              _vm.$set(
                                                _vm.wheelConfig,
                                                "afterSpinSound",
                                                $$v
                                              );
                                            },
                                            expression:
                                              "wheelConfig.afterSpinSound",
                                          },
                                        },
                                        _vm._l(
                                          _vm.afterSpinSounds,
                                          function (sound) {
                                            return _c(
                                              "option",
                                              {
                                                key: sound.value,
                                                domProps: {
                                                  value: sound.value,
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\n                  " +
                                                    _vm._s(_vm.$t(sound.name)) +
                                                    "\n                "
                                                ),
                                              ]
                                            );
                                          }
                                        ),
                                        0
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "b-checkbox",
                                {
                                  model: {
                                    value: _vm.wheelConfig.animateWinner,
                                    callback: function callback($$v) {
                                      _vm.$set(
                                        _vm.wheelConfig,
                                        "animateWinner",
                                        $$v
                                      );
                                    },
                                    expression: "wheelConfig.animateWinner",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(
                                        _vm.$t(
                                          "optionsdialog.Animate winning entry"
                                        )
                                      ) +
                                      "\n          "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "b-checkbox",
                                {
                                  model: {
                                    value: _vm.wheelConfig.launchConfetti,
                                    callback: function callback($$v) {
                                      _vm.$set(
                                        _vm.wheelConfig,
                                        "launchConfetti",
                                        $$v
                                      );
                                    },
                                    expression: "wheelConfig.launchConfetti",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(
                                        _vm.$t("optionsdialog.Launch confetti")
                                      ) +
                                      "\n          "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "b-checkbox",
                                {
                                  model: {
                                    value: _vm.wheelConfig.autoRemoveWinner,
                                    callback: function callback($$v) {
                                      _vm.$set(
                                        _vm.wheelConfig,
                                        "autoRemoveWinner",
                                        $$v
                                      );
                                    },
                                    expression: "wheelConfig.autoRemoveWinner",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(
                                        _vm.$t(
                                          "optionsdialog.Auto-remove winner after 5 seconds"
                                        )
                                      ) +
                                      "\n          "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "b-checkbox",
                                {
                                  model: {
                                    value: _vm.wheelConfig.displayWinnerDialog,
                                    callback: function callback($$v) {
                                      _vm.$set(
                                        _vm.wheelConfig,
                                        "displayWinnerDialog",
                                        $$v
                                      );
                                    },
                                    expression:
                                      "wheelConfig.displayWinnerDialog",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(
                                        _vm.$t(
                                          "optionsdialog.Display popup with message:"
                                        )
                                      ) +
                                      "\n          "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("b-input", {
                                staticStyle: {
                                  "margin-left": "25px",
                                },
                                attrs: {
                                  disabled:
                                    !_vm.wheelConfig.displayWinnerDialog,
                                  maxlength: "100",
                                },
                                model: {
                                  value: _vm.wheelConfig.winnerMessage,
                                  callback: function callback($$v) {
                                    _vm.$set(
                                      _vm.wheelConfig,
                                      "winnerMessage",
                                      $$v
                                    );
                                  },
                                  expression: "wheelConfig.winnerMessage",
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "b-checkbox",
                                {
                                  model: {
                                    value:
                                      _vm.wheelConfig
                                        .playClickWhenWinnerRemoved,
                                    callback: function callback($$v) {
                                      _vm.$set(
                                        _vm.wheelConfig,
                                        "playClickWhenWinnerRemoved",
                                        $$v
                                      );
                                    },
                                    expression:
                                      "wheelConfig.playClickWhenWinnerRemoved",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(
                                        _vm.$t(
                                          "optionsdialog.Play click sound when the winner is removed"
                                        )
                                      ) +
                                      "\n          "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tab-item",
                            {
                              attrs: {
                                label: _vm.$t("optionsdialog.Colors"),
                              },
                            },
                            [
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "columns",
                                  staticStyle: {
                                    "margin-bottom": "10px",
                                  },
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "column is-one-third",
                                    },
                                    [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(
                                            _vm.$t(
                                              "optionsdialog.Apply a theme"
                                            )
                                          ) +
                                          "\n            "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "column",
                                    },
                                    [
                                      _c(
                                        "b-field",
                                        {
                                          attrs: {
                                            grouped: "",
                                          },
                                        },
                                        [
                                          _c(
                                            "b-select",
                                            {
                                              attrs: {
                                                placeholder: _vm.$t(
                                                  "optionsdialog.Pick category"
                                                ),
                                                expanded: "",
                                              },
                                              model: {
                                                value: _vm.colorThemeCategory,
                                                callback: function callback(
                                                  $$v
                                                ) {
                                                  _vm.colorThemeCategory = $$v;
                                                },
                                                expression:
                                                  "colorThemeCategory",
                                              },
                                            },
                                            _vm._l(
                                              Object.keys(
                                                _vm.colorThemeCategories
                                              ),
                                              function (categoryName) {
                                                return _c(
                                                  "option",
                                                  {
                                                    key: categoryName,
                                                    domProps: {
                                                      value: categoryName,
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                    " +
                                                        _vm._s(categoryName) +
                                                        "\n                  "
                                                    ),
                                                  ]
                                                );
                                              }
                                            ),
                                            0
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-select",
                                            {
                                              attrs: {
                                                placeholder: _vm.$t(
                                                  "optionsdialog.Pick theme"
                                                ),
                                                expanded: "",
                                              },
                                              model: {
                                                value: _vm.colorTheme,
                                                callback: function callback(
                                                  $$v
                                                ) {
                                                  _vm.colorTheme = $$v;
                                                },
                                                expression: "colorTheme",
                                              },
                                            },
                                            _vm._l(
                                              Object.keys(_vm.colorThemes),
                                              function (themeName) {
                                                return _c(
                                                  "option",
                                                  {
                                                    key: themeName,
                                                    domProps: {
                                                      value: themeName,
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                    " +
                                                        _vm._s(themeName) +
                                                        "\n                  "
                                                    ),
                                                  ]
                                                );
                                              }
                                            ),
                                            0
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "columns",
                                  staticStyle: {
                                    "margin-bottom": "10px",
                                  },
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "column is-one-third",
                                    },
                                    [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(
                                            _vm.$t(
                                              "optionsdialog.Customize colors"
                                            )
                                          ) +
                                          "\n            "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "column",
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "color-grid",
                                        },
                                        _vm._l(
                                          _vm.wheelConfig.colorSettings,
                                          function (setting, index) {
                                            return _c(
                                              "div",
                                              {
                                                key: index,
                                              },
                                              [
                                                _c("b-checkbox", {
                                                  model: {
                                                    value: setting.enabled,
                                                    callback: function callback(
                                                      $$v
                                                    ) {
                                                      _vm.$set(
                                                        setting,
                                                        "enabled",
                                                        $$v
                                                      );
                                                    },
                                                    expression:
                                                      "setting.enabled",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: setting.color,
                                                      expression:
                                                        "setting.color",
                                                    },
                                                  ],
                                                  attrs: {
                                                    type: "color",
                                                  },
                                                  domProps: {
                                                    value: setting.color,
                                                  },
                                                  on: {
                                                    input: function input(
                                                      $event
                                                    ) {
                                                      if (
                                                        $event.target.composing
                                                      )
                                                        return;
                                                      _vm.$set(
                                                        setting,
                                                        "color",
                                                        $event.target.value
                                                      );
                                                    },
                                                  },
                                                }),
                                              ],
                                              1
                                            );
                                          }
                                        ),
                                        0
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "columns",
                                  staticStyle: {
                                    "margin-bottom": "10px",
                                  },
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "column is-one-third",
                                    },
                                    [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(
                                            _vm.$t(
                                              "optionsdialog.Background color"
                                            )
                                          ) +
                                          "\n            "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "column",
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "color-grid",
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.wheelConfig
                                                    .pageBackgroundColor,
                                                expression:
                                                  "wheelConfig.pageBackgroundColor",
                                              },
                                            ],
                                            attrs: {
                                              type: "color",
                                            },
                                            domProps: {
                                              value:
                                                _vm.wheelConfig
                                                  .pageBackgroundColor,
                                            },
                                            on: {
                                              input: function input($event) {
                                                if ($event.target.composing)
                                                  return;
                                                _vm.$set(
                                                  _vm.wheelConfig,
                                                  "pageBackgroundColor",
                                                  $event.target.value
                                                );
                                              },
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tab-item",
                            {
                              attrs: {
                                label: _vm.$t("optionsdialog.Image"),
                              },
                            },
                            [
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "columns",
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "column is-half",
                                    },
                                    [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(
                                            _vm.$t(
                                              "optionsdialog.Image in the center of the wheel"
                                            )
                                          ) +
                                          "\n            "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "column",
                                    },
                                    [
                                      _c(
                                        "b-select",
                                        {
                                          attrs: {
                                            expanded: "",
                                          },
                                          model: {
                                            value: _vm.wheelConfig.pictureType,
                                            callback: function callback($$v) {
                                              _vm.$set(
                                                _vm.wheelConfig,
                                                "pictureType",
                                                $$v
                                              );
                                            },
                                            expression:
                                              "wheelConfig.pictureType",
                                          },
                                        },
                                        [
                                          _c(
                                            "option",
                                            {
                                              attrs: {
                                                value: "none",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("optionsdialog.None")
                                                )
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            {
                                              attrs: {
                                                value: "gallery",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "optionsdialog.From Gallery"
                                                  )
                                                )
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            {
                                              attrs: {
                                                value: "uploaded",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("optionsdialog.Custom")
                                                )
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-select",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value:
                                        _vm.wheelConfig.pictureType ==
                                        "gallery",
                                      expression:
                                        "wheelConfig.pictureType=='gallery'",
                                    },
                                  ],
                                  attrs: {
                                    placeholder: _vm.$t(
                                      "optionsdialog.Select a gallery picture"
                                    ),
                                    expanded: "",
                                  },
                                  model: {
                                    value: _vm.wheelConfig.galleryPicture,
                                    callback: function callback($$v) {
                                      _vm.$set(
                                        _vm.wheelConfig,
                                        "galleryPicture",
                                        $$v
                                      );
                                    },
                                    expression: "wheelConfig.galleryPicture",
                                  },
                                },
                                _vm._l(_vm.galleryPictures, function (pic) {
                                  return _c(
                                    "option",
                                    {
                                      key: pic.fileName,
                                      domProps: {
                                        value: pic.fileName,
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(pic.title) +
                                          "\n            "
                                      ),
                                    ]
                                  );
                                }),
                                0
                              ),
                              _vm._v(" "),
                              _c("b-input", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value:
                                      _vm.wheelConfig.pictureType == "uploaded",
                                    expression:
                                      "wheelConfig.pictureType=='uploaded'",
                                  },
                                ],
                                attrs: {
                                  disabled: "",
                                },
                                model: {
                                  value: _vm.wheelConfig.customPictureName,
                                  callback: function callback($$v) {
                                    _vm.$set(
                                      _vm.wheelConfig,
                                      "customPictureName",
                                      $$v
                                    );
                                  },
                                  expression: "wheelConfig.customPictureName",
                                },
                              }),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "b-field",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value:
                                        _vm.wheelConfig.pictureType ==
                                        "uploaded",
                                      expression:
                                        "wheelConfig.pictureType=='uploaded'",
                                    },
                                  ],
                                  staticClass: "file",
                                },
                                [
                                  _c("br"),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c(
                                    "b-upload",
                                    {
                                      attrs: {
                                        accept: "image/*",
                                      },
                                      model: {
                                        value: _vm.uploadedImage,
                                        callback: function callback($$v) {
                                          _vm.uploadedImage = $$v;
                                        },
                                        expression: "uploadedImage",
                                      },
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "button",
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-upload",
                                          }),
                                          _vm._v(
                                            "\n                 \n                " +
                                              _vm._s(
                                                _vm.$t(
                                                  "optionsdialog.Upload image"
                                                )
                                              ) +
                                              "\n              "
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "columns",
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "column is-one-third",
                                    },
                                    [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(
                                            _vm.$t("optionsdialog.Image size")
                                          ) +
                                          "\n            "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "column",
                                    },
                                    [
                                      _c(
                                        "b-select",
                                        {
                                          model: {
                                            value: _vm.wheelConfig.hubSize,
                                            callback: function callback($$v) {
                                              _vm.$set(
                                                _vm.wheelConfig,
                                                "hubSize",
                                                $$v
                                              );
                                            },
                                            expression: "wheelConfig.hubSize",
                                          },
                                        },
                                        _vm._l(
                                          _vm.hubSizes,
                                          function (hubSize) {
                                            return _c(
                                              "option",
                                              {
                                                key: hubSize,
                                                domProps: {
                                                  value: hubSize,
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\n                  " +
                                                    _vm._s(hubSize) +
                                                    "\n                "
                                                ),
                                              ]
                                            );
                                          }
                                        ),
                                        0
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "footer",
                    {
                      staticClass: "modal-card-foot",
                      staticStyle: {
                        "justify-content": "flex-end",
                      },
                    },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: {
                            size: "is-medium",
                          },
                          on: {
                            click: function click($event) {
                              _vm.optionsDialogVisible = false;
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\n        " +
                              _vm._s(_vm.$t("common.Cancel")) +
                              "\n      "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: {
                            size: "is-medium",
                            type: "is-primary",
                          },
                          on: {
                            click: _vm.saveOptions,
                          },
                        },
                        [
                          _vm._v(
                            "\n        " +
                              _vm._s(_vm.$t("common.OK")) +
                              "\n      "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ]
              ),
            ]
          );
        };
        var staticRenderFns = [];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/recommendWheels.vue?vue&type=template&id=552a2441&scoped=true&":
      /*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/recommendWheels.vue?vue&type=template&id=552a2441&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _vm.recommendList
            ? _c(
                "div",
                {
                  staticClass: "recommendWheels",
                },
                [
                  _c(
                    "span",
                    {
                      staticClass: "spinItem",
                    },
                    [_vm._v(_vm._s(_vm.$t("wheelList.Related wheels")))]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.recommendList, function (w, index) {
                    return _c(
                      "div",
                      {
                        key: index,
                        staticStyle: {
                          "padding-top": "20px",
                        },
                      },
                      [
                        _c(
                          "span",
                          {
                            staticClass: "wheelTitle",
                          },
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: "/".concat(w.path),
                                },
                              },
                              [_vm._v(_vm._s(w.name))]
                            ),
                          ],
                          1
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "16px",
                            },
                          },
                          [_vm._v(_vm._s(w.description))]
                        ),
                      ]
                    );
                  }),
                ],
                2
              )
            : _vm._e();
        };
        var staticRenderFns = [];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/simpletoolbar.vue?vue&type=template&id=159adf94&":
      /*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/simpletoolbar.vue?vue&type=template&id=159adf94& ***!
  \***************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _c(
            "b-navbar",
            {
              attrs: {
                type: "is-info",
              },
            },
            [
              _c(
                "template",
                {
                  slot: "brand",
                },
                [
                  _c(
                    "b-navbar-item",
                    {
                      staticStyle: {
                        "font-size": "24px",
                      },
                      attrs: {
                        href: "/",
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-arrow-left",
                      }),
                      _vm._v(" " + _vm._s(_vm.toolbarBrand) + "\n    "),
                    ]
                  ),
                ],
                1
              ),
            ],
            2
          );
        };
        var staticRenderFns = [];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/spinningwheel.vue?vue&type=template&id=78fb99d2&scoped=true&":
      /*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/spinningwheel.vue?vue&type=template&id=78fb99d2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _c(
            "div",
            {
              staticClass: "container",
              staticStyle: {
                "text-align": "center",
              },
            },
            [
              _c("h1", [_vm._v(_vm._s(_vm.title))]),
              _vm._v(" "),
              _c("canvas", {
                style: _vm.spinWidth,
                attrs: {
                  id: "wheelCanvas",
                  width: "700",
                  height: "700",
                },
                on: {
                  click: function click($event) {
                    return _vm.spin();
                  },
                },
              }),
              _vm._v(" "),
              !_vm.isTouchScreen
                ? _c(
                    "div",
                    {
                      ref: "instructionsLayer",
                      attrs: {
                        id: "instructionsLayer",
                      },
                      on: {
                        click: function click($event) {
                          return _vm.spin();
                        },
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "instructionsText",
                          attrs: {
                            id: "topInstruction",
                          },
                        },
                        [
                          _vm._v(
                            "\n      " +
                              _vm._s(_vm.$t("spinningwheel.Click to spin")) +
                              "\n    "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "instructionsText",
                          staticStyle: {
                            "padding-top": "55%",
                          },
                          attrs: {
                            id: "bottomInstruction",
                          },
                        },
                        [
                          _vm._v(
                            "\n      " +
                              _vm._s(
                                _vm.$t("spinningwheel.or press ctrl enter")
                              ) +
                              "\n    "
                          ),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isTouchScreen
                ? _c(
                    "div",
                    {
                      ref: "instructionsLayer",
                      attrs: {
                        id: "instructionsLayer",
                      },
                      on: {
                        click: function click($event) {
                          return _vm.spin();
                        },
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "instructionsText",
                          staticStyle: {
                            "padding-top": "35%",
                          },
                          attrs: {
                            id: "topInstruction",
                          },
                        },
                        [
                          _vm._v(
                            "\n      " +
                              _vm._s(_vm.$t("spinningwheel.Tap to spin")) +
                              "\n    "
                          ),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
            ]
          );
        };
        var staticRenderFns = [];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/textbox.vue?vue&type=template&id=465c016b&":
      /*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/textbox.vue?vue&type=template&id=465c016b& ***!
  \*********************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _c("div", {
            staticClass: "textarea can-go-dark",
            staticStyle: {
              overflow: "auto",
              "font-family":
                "BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            },
            attrs: {
              id: "names",
              spellcheck: "false",
              contentEditable: "true",
            },
            on: {
              paste: _vm.onPaste,
              input: function input($event) {
                return _vm.setNames();
              },
              keyup: _vm.IE_setNames,
            },
          });
        };
        var staticRenderFns = [];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/textboxbuttons.vue?vue&type=template&id=370a9134&scoped=true&":
      /*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/textboxbuttons.vue?vue&type=template&id=370a9134&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _c(
            "span",
            [
              _c(
                "b-button",
                {
                  attrs: {
                    size: "is-small mb-5",
                    type: "is-light",
                    disabled: _vm.buttonsDisabled,
                  },
                  on: {
                    click: _vm.shuffle,
                  },
                },
                [
                  _c("i", {
                    staticClass: "fas fa-random",
                  }),
                  _vm._v(
                    " " + _vm._s(_vm.$t("textboxbuttons.Shuffle")) + "\n  "
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  attrs: {
                    size: "is-small mb-5",
                    type: "is-light",
                    disabled: _vm.buttonsDisabled,
                  },
                  on: {
                    click: _vm.sort,
                  },
                },
                [
                  _c("i", {
                    staticClass: "fas fa-sort-alpha-up",
                  }),
                  _vm._v(" " + _vm._s(_vm.$t("textboxbuttons.Sort")) + "\n  "),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-upload",
                {
                  staticClass: "button is-small is-light mb-5",
                  attrs: {
                    accept: "image/*",
                    multiple: "",
                    disabled: _vm.buttonsDisabled,
                  },
                  model: {
                    value: _vm.uploadedImage,
                    callback: function callback($$v) {
                      _vm.uploadedImage = $$v;
                    },
                    expression: "uploadedImage",
                  },
                },
                [
                  _c("i", {
                    staticClass: "far fa-image",
                  }),
                  _vm._v(
                    " " + _vm._s(_vm.$t("textboxbuttons.Add image")) + "\n  "
                  ),
                ]
              ),
            ],
            1
          );
        };
        var staticRenderFns = [];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/toolbar.vue?vue&type=template&id=4390b8e8&":
      /*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/toolbar.vue?vue&type=template&id=4390b8e8& ***!
  \*********************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _c(
            "b-navbar",
            {
              staticStyle: {
                "box-shadow": "0 3px 3px 0 lightgrey",
              },
              attrs: {
                type: "is-info",
              },
            },
            [
              _c(
                "template",
                {
                  slot: "brand",
                },
                [
                  _c(
                    "b-navbar-item",
                    {
                      staticStyle: {
                        "font-size": "24px",
                      },
                      attrs: {
                        href: "/",
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-arrow-left",
                        attrs: {
                          "aria-hidden": "true",
                        },
                      }),
                      _vm._v("  " + _vm._s(_vm.toolbarBrand) + "\n      "),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "template",
                {
                  slot: "start",
                },
                [
                  _c(
                    "b-tag",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.$store.state.appStatus.online,
                          expression: "!$store.state.appStatus.online",
                        },
                      ],
                      staticStyle: {
                        "margin-top": "1.2em",
                      },
                      attrs: {
                        type: "is-warning",
                      },
                    },
                    [
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.$t("toolbar.Offline mode")) +
                          "\n      "
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "template",
                {
                  slot: "end",
                },
                [
                  _c(
                    "b-navbar-item",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.newButtonVisible,
                          expression: "newButtonVisible",
                        },
                      ],
                      staticClass: "bar-title",
                      attrs: {
                        href: "#",
                      },
                      on: {
                        click: function click($event) {
                          return _vm.$emit("reset-wheel");
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "fas fa-file fa-fw",
                      }),
                      _vm._v(" " + _vm._s(_vm.$t("toolbar.New")) + "\n      "),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-navbar-item",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.optionsButtonVisible,
                          expression: "optionsButtonVisible",
                        },
                      ],
                      staticClass: "bar-title",
                      attrs: {
                        href: "#",
                      },
                      on: {
                        click: function click($event) {
                          return _vm.$emit("open-customize-dialog");
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "fas fa-palette fa-fw",
                      }),
                      _vm._v(
                        " " + _vm._s(_vm.$t("common.Customize")) + "\n      "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-navbar-item",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.fullscreenButtonVisible,
                          expression: "fullscreenButtonVisible",
                        },
                      ],
                      staticClass: "bar-title",
                      attrs: {
                        href: "#",
                      },
                      on: {
                        click: function click($event) {
                          return _vm.$store.commit("enterFullScreen");
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-expand fa-fw",
                      }),
                      _vm._v(
                        " " + _vm._s(_vm.$t("toolbar.Fullscreen")) + "\n      "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-navbar-item",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.exitFullscreenButtonVisible,
                          expression: "exitFullscreenButtonVisible",
                        },
                      ],
                      staticClass: "bar-title",
                      attrs: {
                        href: "#",
                      },
                      on: {
                        click: function click($event) {
                          return _vm.$store.commit("exitFullScreen");
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-compress fa-fw",
                      }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.$t("toolbar.Exit fullscreen")) +
                          "\n      "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-navbar-item",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.unlinkSheetButtonVisible,
                          expression: "unlinkSheetButtonVisible",
                        },
                      ],
                      attrs: {
                        href: "#",
                      },
                      on: {
                        click: function click($event) {
                          return _vm.$store.commit("unlinkSheet");
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-unlink fa-fw",
                      }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.$t("toolbar.Unlink Google Spreadsheet")) +
                          "\n      "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-navbar-item",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.newButtonVisible,
                          expression: "newButtonVisible",
                        },
                      ],
                      staticClass: "bar-title",
                      attrs: {
                        href: "/sitemap.html",
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-link fa-fw",
                      }),
                      _vm._v(
                        " " + _vm._s(_vm.$t("toolbar.Sitemap")) + "\n      "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _vm.$mq === "mobile"
                    ? _c(
                        "b-navbar-dropdown",
                        {
                          attrs: {
                            label: _vm.$t("toolbar.Language"),
                          },
                        },
                        _vm._l(_vm.locales, function (locale) {
                          return _c(
                            "b-navbar-item",
                            {
                              key: locale.name,
                              attrs: {
                                href: "#",
                              },
                              on: {
                                click: function click($event) {
                                  return _vm.$emit("set-locale", locale.name);
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(locale.humanName) +
                                  "\n        "
                              ),
                            ]
                          );
                        }),
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$mq !== "mobile"
                    ? _c(
                        "b-navbar-item",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.languageVisible,
                              expression: "languageVisible",
                            },
                          ],
                          attrs: {
                            tag: "div",
                            href: "#",
                          },
                        },
                        [
                          _c(
                            "b-select",
                            {
                              model: {
                                value: _vm.locale,
                                callback: function callback($$v) {
                                  _vm.locale = $$v;
                                },
                                expression: "locale",
                              },
                            },
                            _vm._l(_vm.locales, function (locale) {
                              return _c(
                                "option",
                                {
                                  key: locale.name,
                                  domProps: {
                                    value: locale.name,
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(locale.humanName) +
                                      "\n          "
                                  ),
                                ]
                              );
                            }),
                            0
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                ],
                1
              ),
            ],
            2
          );
        };
        var staticRenderFns = [];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/top10wheels.vue?vue&type=template&id=305b7a19&scoped=true&":
      /*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/top10wheels.vue?vue&type=template&id=305b7a19&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _c(
            "span",
            [
              _c("simple-toolbar"),
              _vm._v(" "),
              _c(
                "section",
                {
                  staticClass: "section",
                  staticStyle: {
                    "padding-top": "0",
                    "padding-bottom": "0",
                  },
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "columns",
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "column is-6",
                          staticStyle: {
                            "padding-top": "10px",
                          },
                        },
                        [
                          _c(
                            "h2",
                            {
                              staticClass: "spinItem",
                            },
                            [_vm._v(_vm._s(this.newWheelsCategory))]
                          ),
                          _vm._v(" "),
                          _vm._l(this.newWheels, function (w, index) {
                            return _c(
                              "div",
                              {
                                key: index,
                              },
                              [
                                w.name != null
                                  ? _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          "padding-bottom": "10px",
                                        },
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "wheelTitle",
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "/".concat(w.path),
                                                },
                                                on: {
                                                  click: function click(
                                                    $event
                                                  ) {
                                                    return _vm["goto"](w.path);
                                                  },
                                                },
                                              },
                                              [_vm._v(_vm._s(w.name))]
                                            ),
                                          ]
                                        ),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(w.description) +
                                              "\n              "
                                          ),
                                        ]),
                                      ]
                                    )
                                  : _vm._e(),
                              ]
                            );
                          }),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "column is-6",
                          staticStyle: {
                            "padding-top": "10px",
                          },
                        },
                        [
                          _c(
                            "h2",
                            {
                              staticClass: "spinItem",
                            },
                            [_vm._v(_vm._s(this.trendingWheelsCategory))]
                          ),
                          _vm._v(" "),
                          _vm._l(this.trendingWheels, function (w, index) {
                            return _c(
                              "div",
                              {
                                key: index,
                              },
                              [
                                w.name != null
                                  ? _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          "padding-bottom": "10px",
                                        },
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "wheelTitle",
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "/".concat(w.path),
                                                },
                                                on: {
                                                  click: function click(
                                                    $event
                                                  ) {
                                                    return _vm["goto"](w.path);
                                                  },
                                                },
                                              },
                                              [_vm._v(_vm._s(w.name))]
                                            ),
                                          ]
                                        ),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(w.description) +
                                              "\n              "
                                          ),
                                        ]),
                                      ]
                                    )
                                  : _vm._e(),
                              ]
                            );
                          }),
                        ],
                        2
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "columns",
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "column is-6",
                          staticStyle: {
                            "padding-top": "10px",
                          },
                        },
                        [
                          _c(
                            "h2",
                            {
                              staticClass: "spinItem",
                            },
                            [_vm._v(_vm._s(this.relatedWheelsCategory))]
                          ),
                          _vm._v(" "),
                          _vm._l(this.relatedWheels, function (w, index) {
                            return _c(
                              "div",
                              {
                                key: index,
                              },
                              [
                                w.name != null
                                  ? _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          "padding-bottom": "10px",
                                        },
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "wheelTitle",
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "/".concat(w.path),
                                                },
                                                on: {
                                                  click: function click(
                                                    $event
                                                  ) {
                                                    return _vm["goto"](w.path);
                                                  },
                                                },
                                              },
                                              [_vm._v(_vm._s(w.name))]
                                            ),
                                          ]
                                        ),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(w.description) +
                                              "\n              "
                                          ),
                                        ]),
                                      ]
                                    )
                                  : _vm._e(),
                              ]
                            );
                          }),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "column is-6",
                          staticStyle: {
                            "padding-top": "10px",
                          },
                        },
                        [
                          _c(
                            "h2",
                            {
                              staticClass: "spinItem",
                            },
                            [_vm._v(_vm._s(this.otherWheelsCategory))]
                          ),
                          _vm._v(" "),
                          _vm._l(this.otherWheels, function (w, index) {
                            return _c(
                              "div",
                              {
                                key: index,
                              },
                              [
                                w.name != null
                                  ? _c(
                                      "div",
                                      {
                                        staticStyle: {
                                          "padding-bottom": "10px",
                                        },
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "wheelTitle",
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "/".concat(w.path),
                                                },
                                                on: {
                                                  click: function click(
                                                    $event
                                                  ) {
                                                    return _vm["goto"](w.path);
                                                  },
                                                },
                                              },
                                              [_vm._v(_vm._s(w.name))]
                                            ),
                                          ]
                                        ),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(w.description) +
                                              "\n              "
                                          ),
                                        ]),
                                      ]
                                    )
                                  : _vm._e(),
                              ]
                            );
                          }),
                        ],
                        2
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c("bottom"),
                ],
                1
              ),
            ],
            1
          );
        };
        var staticRenderFns = [];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/wheelList.vue?vue&type=template&id=d0bf3074&scoped=true&":
      /*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/wheelList.vue?vue&type=template&id=d0bf3074&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _c("span", [
            _c(
              "section",
              {
                staticClass: "mySection",
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "columns",
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "column is-6",
                        staticStyle: {
                          "padding-top": "10px",
                        },
                      },
                      [
                        _c(
                          "h2",
                          {
                            staticClass: "spinItem",
                          },
                          [_vm._v(_vm._s(this.relatedWheelsCategory))]
                        ),
                        _vm._v(" "),
                        _vm._l(this.relatedWheels, function (w, index) {
                          return _c(
                            "div",
                            {
                              key: index,
                            },
                            [
                              w.name != null
                                ? _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        "padding-bottom": "10px",
                                      },
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "wheelTitle",
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              attrs: {
                                                href: "".concat(w.path),
                                              },
                                              on: {
                                                click: function click($event) {
                                                  return _vm["goto"](w.path);
                                                },
                                              },
                                            },
                                            [_vm._v(_vm._s(w.name))]
                                          ),
                                        ]
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(w.description) +
                                            "\n              "
                                        ),
                                      ]),
                                    ]
                                  )
                                : _vm._e(),
                            ]
                          );
                        }),
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "column is-6",
                        staticStyle: {
                          "padding-top": "10px",
                        },
                      },
                      [
                        _c(
                          "h2",
                          {
                            staticClass: "spinItem",
                          },
                          [_vm._v(_vm._s(this.popWheelsCategory))]
                        ),
                        _vm._v(" "),
                        _vm._l(this.popWheels, function (w, index) {
                          return _c(
                            "div",
                            {
                              key: index,
                            },
                            [
                              w.name != null
                                ? _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        "padding-bottom": "10px",
                                      },
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "wheelTitle",
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              attrs: {
                                                href: "".concat(w.path),
                                              },
                                              on: {
                                                click: function click($event) {
                                                  return _vm["goto"](w.path);
                                                },
                                              },
                                            },
                                            [_vm._v(_vm._s(w.name))]
                                          ),
                                        ]
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(w.description) +
                                            "\n              "
                                        ),
                                      ]),
                                    ]
                                  )
                                : _vm._e(),
                            ]
                          );
                        }),
                      ],
                      2
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "columns",
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "column is-6",
                        staticStyle: {
                          "padding-top": "10px",
                        },
                      },
                      [
                        _c(
                          "h2",
                          {
                            staticClass: "spinItem",
                          },
                          [_vm._v(_vm._s(this.newWheelsCategory))]
                        ),
                        _vm._v(" "),
                        _vm._l(this.newWheels, function (w, index) {
                          return _c(
                            "div",
                            {
                              key: index,
                            },
                            [
                              w.name != null
                                ? _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        "padding-bottom": "10px",
                                      },
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "wheelTitle",
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              attrs: {
                                                href: "".concat(w.path),
                                              },
                                              on: {
                                                click: function click($event) {
                                                  return _vm["goto"](w.path);
                                                },
                                              },
                                            },
                                            [_vm._v(_vm._s(w.name))]
                                          ),
                                        ]
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(w.description) +
                                            "\n              "
                                        ),
                                      ]),
                                    ]
                                  )
                                : _vm._e(),
                            ]
                          );
                        }),
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "column is-6",
                        staticStyle: {
                          "padding-top": "10px",
                        },
                      },
                      [
                        _c(
                          "h2",
                          {
                            staticClass: "spinItem",
                          },
                          [_vm._v(_vm._s(this.otherWheelsCategory))]
                        ),
                        _vm._v(" "),
                        _vm._l(this.otherWheels, function (w, index) {
                          return _c(
                            "div",
                            {
                              key: index,
                            },
                            [
                              w.name != null
                                ? _c(
                                    "div",
                                    {
                                      staticStyle: {
                                        "padding-bottom": "10px",
                                      },
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "wheelTitle",
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              attrs: {
                                                href: "".concat(w.path),
                                              },
                                              on: {
                                                click: function click($event) {
                                                  return _vm["goto"](w.path);
                                                },
                                              },
                                            },
                                            [_vm._v(_vm._s(w.name))]
                                          ),
                                        ]
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(w.description) +
                                            "\n              "
                                        ),
                                      ]),
                                    ]
                                  )
                                : _vm._e(),
                            ]
                          );
                        }),
                      ],
                      2
                    ),
                  ]
                ),
              ]
            ),
          ]);
        };
        var staticRenderFns = [];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/winneranimation.vue?vue&type=template&id=ad0ed4dc&scoped=true&":
      /*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/winneranimation.vue?vue&type=template&id=ad0ed4dc&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _c(
            "div",
            {
              ref: "overlay",
              staticClass: "animated-background",
            },
            [
              _c(
                "div",
                {
                  staticClass: "content",
                },
                [
                  _c(
                    "p",
                    {
                      staticClass: "animated-text",
                      staticStyle: {
                        color: "#FFFFFF",
                      },
                    },
                    [_vm._v("\n      " + _vm._s(_vm.winnerText) + "\n    ")]
                  ),
                ]
              ),
            ]
          );
        };
        var staticRenderFns = [];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/winnerdialog.vue?vue&type=template&id=0208062a&":
      /*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./static/winnerdialog.vue?vue&type=template&id=0208062a& ***!
  \**************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return render;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return staticRenderFns;
          }
        );
        var render = function render() {
          var _vm = this,
            _c = _vm._self._c;
          return _c(
            "b-modal",
            {
              attrs: {
                active: _vm.winnerDialogVisible,
                width: 640,
                scroll: "keep",
              },
              on: {
                "update:active": function updateActive($event) {
                  _vm.winnerDialogVisible = $event;
                },
              },
            },
            [
              _c(
                "div",
                {
                  staticClass: "modal-card",
                  staticStyle: {
                    width: "auto",
                  },
                },
                [
                  _c(
                    "header",
                    {
                      staticClass: "modal-card-head",
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "modal-card-title",
                          staticStyle: {
                            width: "100%",
                          },
                        },
                        [
                          _c(
                            "h5",
                            {
                              staticClass: "modal-title",
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.winnerMessage) +
                                  "\n        "
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "section",
                    {
                      staticClass: "modal-card-body can-go-dark",
                    },
                    [
                      _c(
                        "h1",
                        {
                          staticClass: "title",
                        },
                        [
                          _vm.winnerImage
                            ? _c("img", {
                                staticStyle: {
                                  height: "200px",
                                  "vertical-align": "middle",
                                },
                                attrs: {
                                  src: _vm.winnerImage,
                                },
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(_vm.winnerText))]),
                        ]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "footer",
                    {
                      staticClass: "modal-card-foot",
                      staticStyle: {
                        "justify-content": "flex-end",
                      },
                    },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: {
                            size: "is-medium",
                          },
                          on: {
                            click: function click($event) {
                              _vm.winnerDialogVisible = false;
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\n        " +
                              _vm._s(_vm.$t("common.Close")) +
                              "\n      "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.showRemoveButton,
                              expression: "showRemoveButton",
                            },
                          ],
                          ref: "removeButton",
                          attrs: {
                            size: "is-medium",
                            type: "is-info",
                          },
                          on: {
                            click: _vm.removeWinner,
                          },
                        },
                        [
                          _vm._v(
                            "\n        " +
                              _vm._s(_vm.$t("winnerdialog.Remove")) +
                              "\n      "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.showRemoveAllButton,
                              expression: "showRemoveAllButton",
                            },
                          ],
                          attrs: {
                            size: "is-medium",
                            type: "is-primary",
                          },
                          on: {
                            click: _vm.removeWinnerAll,
                          },
                        },
                        [
                          _vm._v(
                            "\n        " +
                              _vm._s(
                                _vm.$t("winnerdialog.Remove all instances")
                              ) +
                              "\n      "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ]
              ),
            ]
          );
        };
        var staticRenderFns = [];
        render._withStripped = true;

        /***/
      },

    /***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/app.vue?vue&type=style&index=0&id=342a570e&scoped=true&lang=css&":
      /*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/app.vue?vue&type=style&index=0&id=342a570e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/appShow.vue?vue&type=style&index=0&id=2090b6aa&scoped=true&lang=css&":
      /*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/appShow.vue?vue&type=style&index=0&id=2090b6aa&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/bottom.vue?vue&type=style&index=0&id=15a69f64&scoped=true&lang=css&":
      /*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/bottom.vue?vue&type=style&index=0&id=15a69f64&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/entry-counter.vue?vue&type=style&index=0&id=810df364&scoped=true&lang=css&":
      /*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/entry-counter.vue?vue&type=style&index=0&id=810df364&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/faq.vue?vue&type=style&index=0&id=231ee583&scoped=true&lang=css&":
      /*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/faq.vue?vue&type=style&index=0&id=231ee583&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/hotwheels.vue?vue&type=style&index=0&id=a29ca39c&scoped=true&lang=css&":
      /*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/hotwheels.vue?vue&type=style&index=0&id=a29ca39c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/loadingScreen.vue?vue&type=style&index=0&id=de8bc816&scoped=true&lang=css&":
      /*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/loadingScreen.vue?vue&type=style&index=0&id=de8bc816&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/optionsdialog.vue?vue&type=style&index=0&id=5a328193&scoped=true&lang=css&":
      /*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/optionsdialog.vue?vue&type=style&index=0&id=5a328193&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/recommendWheels.vue?vue&type=style&index=0&id=552a2441&scoped=true&lang=css&":
      /*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/recommendWheels.vue?vue&type=style&index=0&id=552a2441&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/spinningwheel.vue?vue&type=style&index=0&id=78fb99d2&scoped=true&lang=css&":
      /*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/spinningwheel.vue?vue&type=style&index=0&id=78fb99d2&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/textboxbuttons.vue?vue&type=style&index=0&id=370a9134&scoped=true&lang=css&":
      /*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/textboxbuttons.vue?vue&type=style&index=0&id=370a9134&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/toolbar.vue?vue&type=style&index=0&id=4390b8e8&lang=css&":
      /*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/toolbar.vue?vue&type=style&index=0&id=4390b8e8&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/top10wheels.vue?vue&type=style&index=0&id=305b7a19&scoped=true&lang=css&":
      /*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/top10wheels.vue?vue&type=style&index=0&id=305b7a19&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/wheelList.vue?vue&type=style&index=0&id=d0bf3074&scoped=true&lang=css&":
      /*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/wheelList.vue?vue&type=style&index=0&id=d0bf3074&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/winneranimation.vue?vue&type=style&index=0&id=ad0ed4dc&scoped=true&lang=css&":
      /*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./static/winneranimation.vue?vue&type=style&index=0&id=ad0ed4dc&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ "./static/CircularArray.js":
      /*!*********************************!*\
  !*** ./static/CircularArray.js ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return CircularArray;
          }
        );
        function _typeof(o) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
        var CircularArray = /*#__PURE__*/ (function () {
          function CircularArray(array) {
            _classCallCheck(this, CircularArray);
            this.array = array.slice(0);
          }
          _createClass(CircularArray, [
            {
              key: "getElement",
              value: function getElement(index) {
                while (index < 0) {
                  index += this.array.length;
                }
                while (index >= this.array.length) {
                  index -= this.array.length;
                }
                return this.array[index];
              },
            },
            {
              key: "setElement",
              value: function setElement(index, value) {
                while (index < 0) {
                  index += this.array.length;
                }
                while (index >= this.array.length) {
                  index -= this.array.length;
                }
                this.array[index] = value;
              },
            },
            {
              key: "getArray",
              value: function getArray() {
                return this.array;
              },
            },
          ]);
          return CircularArray;
        })();

        /***/
      },

    /***/ "./static/ConfettiLauncher.js":
      /*!************************************!*\
  !*** ./static/ConfettiLauncher.js ***!
  \************************************/
      /*! exports provided: launch */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "launch",
          function () {
            return launch;
          }
        );
        /* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! canvas-confetti */ "./node_modules/canvas-confetti/dist/confetti.module.mjs"
          );
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

        var end;
        var myColors;
        function launch(colors) {
          myColors = colors;
          end = Date.now() + 5 * 1000;
          boom();
        }
        function boom() {
          var interval = setInterval(function () {
            if (Date.now() > end) {
              return clearInterval(interval);
            }
            Object(canvas_confetti__WEBPACK_IMPORTED_MODULE_0__["default"])({
              startVelocity: 30,
              particleCount: 100,
              spread: 360,
              ticks: 60,
              origin: {
                x: Math.random(),
                y: Math.random() - 0.2,
              },
              colors: myColors,
            });
          }, 200);
        }

        /***/
      },

    /***/ "./static/DisplayNamePicker.js":
      /*!*************************************!*\
  !*** ./static/DisplayNamePicker.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return DisplayNamePicker;
          }
        );
        /* harmony import */ var _CircularArray_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./CircularArray.js */ "./static/CircularArray.js"
          );
        /* harmony import */ var _NameHat_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./NameHat.js */ "./static/NameHat.js");
        /* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./Util.js */ "./static/Util.js");
        function _typeof(o) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _toConsumableArray(arr) {
          return (
            _arrayWithoutHoles(arr) ||
            _iterableToArray(arr) ||
            _unsupportedIterableToArray(arr) ||
            _nonIterableSpread()
          );
        }
        function _nonIterableSpread() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }
        function _iterableToArray(iter) {
          if (
            (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
            iter["@@iterator"] != null
          )
            return Array.from(iter);
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

        var DisplayNamePicker = /*#__PURE__*/ (function () {
          function DisplayNamePicker() {
            _classCallCheck(this, DisplayNamePicker);
            this.hat = new _NameHat_js__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ]();
            this.namesOnWheel = [];
            this.allNamesFitOnWheel = true;
            this.filledSlices = 0;
          }
          _createClass(DisplayNamePicker, [
            {
              key: "setNames",
              value: function setNames(
                textboxNames,
                maxSlices,
                allowDuplicates
              ) {
                var _this = this;
                if (!allowDuplicates) {
                  // Remove duplicates.
                  textboxNames = _toConsumableArray(new Set(textboxNames));
                }
                if (textboxNames.length <= maxSlices) {
                  this.allNamesFitOnWheel = true;
                  this.namesOnWheel = textboxNames;
                } else {
                  this.allNamesFitOnWheel = false;
                  this.filledSlices = Math.round(maxSlices * 0.66);
                  this.hat.empty();
                  textboxNames.forEach(function (name) {
                    if (!_this.namesOnWheel.includes(name)) {
                      _this.hat.addName(name);
                    }
                  });
                  // Remove names from the wheel that are not in the textbox.
                  this.namesOnWheel = this.namesOnWheel.filter(function (name) {
                    return name == "" || textboxNames.includes(name);
                  });
                  this.namesOnWheel = this.adjustLength(
                    this.namesOnWheel,
                    maxSlices
                  );
                }
              },
            },
            {
              key: "getDisplayNames",
              value: function getDisplayNames() {
                return this.namesOnWheel;
              },
            },
            {
              key: "getNumberOfDisplayNames",
              value: function getNumberOfDisplayNames() {
                return this.namesOnWheel.length;
              },
            },
            {
              key: "tick",
              value: function tick(indexAtPointer) {
                var updated = false;
                if (!this.allNamesFitOnWheel) {
                  var startEmptyIndex =
                    indexAtPointer + Math.ceil(this.filledSlices / 2);
                  var startFilledIndex =
                    indexAtPointer +
                    this.namesOnWheel.length -
                    Math.floor(this.filledSlices / 2);
                  var circDisplayNames =
                    new _CircularArray_js__WEBPACK_IMPORTED_MODULE_0__[
                      "default"
                    ](this.namesOnWheel);
                  for (
                    var i = indexAtPointer;
                    i < indexAtPointer + this.namesOnWheel.length;
                    i++
                  ) {
                    if (
                      i < startEmptyIndex &&
                      !circDisplayNames.getElement(i)
                    ) {
                      circDisplayNames.setElement(i, this.hat.pullRandomName());
                    }
                    if (
                      i >= startEmptyIndex &&
                      i < startFilledIndex &&
                      circDisplayNames.getElement(i)
                    ) {
                      this.hat.addName(circDisplayNames.getElement(i));
                      circDisplayNames.setElement(i, "");
                    }
                    if (
                      i > startFilledIndex &&
                      !circDisplayNames.getElement(i)
                    ) {
                      circDisplayNames.setElement(i, this.hat.pullRandomName());
                    }
                  }
                  var newNames = circDisplayNames.getArray();
                  updated = !_Util_js__WEBPACK_IMPORTED_MODULE_2__[
                    "arraysEqual"
                  ](this.namesOnWheel, newNames);
                  this.namesOnWheel = newNames;
                }
                return updated;
              },
            },
            {
              key: "adjustLength",
              value: function adjustLength(displayNames, maxSlices) {
                while (displayNames.length < maxSlices) {
                  displayNames.push("");
                }
                while (displayNames.length > maxSlices) {
                  var lastName = displayNames[displayNames.length - 1];
                  if (lastName) {
                    this.hat.addName(lastName);
                  }
                  displayNames = displayNames.slice(0, displayNames.length - 1);
                }
                return displayNames;
              },
            },
          ]);
          return DisplayNamePicker;
        })();

        /***/
      },

    /***/ "./static/FontMeasurer.js":
      /*!********************************!*\
  !*** ./static/FontMeasurer.js ***!
  \********************************/
      /*! exports provided: getFontSize */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getFontSize",
          function () {
            return getFontSize;
          }
        );
        /* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./Util.js */ "./static/Util.js");
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

        function getFontSize(
          context,
          displayText,
          sliceCount,
          fontName,
          wheelRadius,
          hubRadius
        ) {
          return bisectSearch(
            context,
            wheelRadius,
            hubRadius,
            fontName,
            sliceCount,
            displayText,
            10,
            200
          );
        }
        function bisectSearch(
          context,
          wheelRadius,
          hubRadius,
          fontName,
          slices,
          text,
          min,
          max
        ) {
          var fontSize;
          while (true) {
            fontSize = Math.round((min + max) / 2);
            var font = fontSize + "px " + fontName;
            if (
              textFits(
                context,
                wheelRadius,
                hubRadius,
                Math.PI / slices,
                text,
                font,
                fontSize
              )
            ) {
              min = fontSize;
            } else {
              max = fontSize;
            }
            if (Math.abs(max - min) < 2) {
              break;
            }
          }
          return fontSize;
        }
        function textFits(context, r, b, a, text, font, h) {
          if (!text) return true;
          context.font = font;
          var w = context.measureText(text).width;
          return _Util_js__WEBPACK_IMPORTED_MODULE_0__["boxFits"](
            a,
            r,
            b,
            w,
            h
          );
        }

        /***/
      },

    /***/ "./static/FullScreen.js":
      /*!******************************!*\
  !*** ./static/FullScreen.js ***!
  \******************************/
      /*! exports provided: fullscreenOn, turnOnFullscreen, turnOffFullscreen */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fullscreenOn",
          function () {
            return fullscreenOn;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "turnOnFullscreen",
          function () {
            return turnOnFullscreen;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "turnOffFullscreen",
          function () {
            return turnOffFullscreen;
          }
        );
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
        function fullscreenOn() {
          var fullscreenElement =
            document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement;
          return fullscreenElement != null;
        }
        function turnOnFullscreen() {
          var i = document.body;
          if (i.requestFullscreen) {
            i.requestFullscreen();
          } else if (i.webkitRequestFullscreen) {
            i.webkitRequestFullscreen();
          } else if (i.mozRequestFullScreen) {
            i.mozRequestFullScreen();
          } else if (i.msRequestFullscreen) {
            i.msRequestFullscreen();
          }
        }
        function turnOffFullscreen() {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          }
        }

        /***/
      },

    /***/ "./static/ImageCache.js":
      /*!******************************!*\
  !*** ./static/ImageCache.js ***!
  \******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return ImageCache;
          }
        );
        /* harmony import */ var _images_none_png__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! .images/none.png */ "./staticimages/none.png"
          );
        /* harmony import */ var _third_party_publicdomainvectors_camera_png__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./third_party/publicdomainvectors/camera.png */ "./static/third_party/publicdomainvectors/camera.png"
          );
        /* harmony import */ var _third_party_publicdomainvectors_cat_png__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./third_party/publicdomainvectors/cat.png */ "./static/third_party/publicdomainvectors/cat.png"
          );
        /* harmony import */ var _third_party_publicdomainvectors_dog_png__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./third_party/publicdomainvectors/dog.png */ "./static/third_party/publicdomainvectors/dog.png"
          );
        /* harmony import */ var _third_party_publicdomainvectors_dollar_sign_png__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./third_party/publicdomainvectors/dollar-sign.png */ "./static/third_party/publicdomainvectors/dollar-sign.png"
          );
        /* harmony import */ var _third_party_publicdomainvectors_dragon_png__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./third_party/publicdomainvectors/dragon.png */ "./static/third_party/publicdomainvectors/dragon.png"
          );
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

        function ImageCache() {
          this.images = new Object();
          this.emptyImage = new Image();
          // This dataUrl is a 1x1 transparent image.
          this.emptyImage.src =
            "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
          this.addImage = function (imageName) {
            this.images[imageName] = new Image();
            this.images[imageName].src = imageName;
          };
          this.getImage = function (imageName) {
            if (imageName in this.images) {
              // Do nothing.
            } else {
              if (imageName) this.addImage(imageName);
            }
            if (
              this.images[imageName] &&
              this.images[imageName].naturalHeight > 0
            ) {
              return this.images[imageName];
            } else {
              // If the image is broken, return an empty image instead,
              // to prevent Javascript errors when attempting to draw it.
              return this.emptyImage;
            }
          };
        }

        /***/
      },

    /***/ "./static/ImageUtil.js":
      /*!*****************************!*\
  !*** ./static/ImageUtil.js ***!
  \*****************************/
      /*! exports provided: optimizeSliceImage, optimizeCenterImage, createInMemoryImage, getTopLeftColor, isTransparent, extractColors */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "optimizeSliceImage",
          function () {
            return optimizeSliceImage;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "optimizeCenterImage",
          function () {
            return optimizeCenterImage;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createInMemoryImage",
          function () {
            return createInMemoryImage;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getTopLeftColor",
          function () {
            return getTopLeftColor;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isTransparent",
          function () {
            return isTransparent;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "extractColors",
          function () {
            return extractColors;
          }
        );
        function _typeof(o) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _regeneratorRuntime() {
          "use strict";
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
            function _regeneratorRuntime() {
              return e;
            };
          var t,
            e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function define(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            define({}, "");
          } catch (t) {
            define = function define(t, e, r) {
              return (t[e] = r);
            };
          }
          function wrap(t, e, r, n) {
            var i = e && e.prototype instanceof Generator ? e : Generator,
              a = Object.create(i.prototype),
              c = new Context(n || []);
            return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
          }
          function tryCatch(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = wrap;
          var h = "suspendedStart",
            l = "suspendedYield",
            f = "executing",
            s = "completed",
            y = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var p = {};
          define(p, a, function () {
            return this;
          });
          var d = Object.getPrototypeOf,
            v = d && d(d(values([])));
          v && v !== r && n.call(v, a) && (p = v);
          var g =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(p));
          function defineIteratorMethods(t) {
            ["next", "throw", "return"].forEach(function (e) {
              define(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function AsyncIterator(t, e) {
            function invoke(r, o, i, a) {
              var c = tryCatch(t[r], t, o);
              if ("throw" !== c.type) {
                var u = c.arg,
                  h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        invoke("next", t, i, a);
                      },
                      function (t) {
                        invoke("throw", t, i, a);
                      }
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return invoke("throw", t, i, a);
                      }
                    );
              }
              a(c.arg);
            }
            var r;
            o(this, "_invoke", {
              value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                  return new e(function (e, r) {
                    invoke(t, n, e, r);
                  });
                }
                return (r = r
                  ? r.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(e, r, n) {
            var o = h;
            return function (i, a) {
              if (o === f) throw new Error("Generator is already running");
              if (o === s) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = maybeInvokeDelegate(c, n);
                  if (u) {
                    if (u === y) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === h) throw ((o = s), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                  if (((o = n.done ? s : l), p.arg === y)) continue;
                  return { value: p.arg, done: n.done };
                }
                "throw" === p.type &&
                  ((o = s), (n.method = "throw"), (n.arg = p.arg));
              }
            };
          }
          function maybeInvokeDelegate(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator["return"] &&
                  ((r.method = "return"),
                  (r.arg = t),
                  maybeInvokeDelegate(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                y
              );
            var i = tryCatch(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  y)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function pushTryEntry(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function resetTryEntry(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function Context(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(e) {
            if (e || "" === e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function next() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (next.value = e[o]), (next.done = !1), next;
                    return (next.value = t), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw new TypeError(_typeof(e) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            o(g, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            o(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              u,
              "GeneratorFunction"
            )),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === GeneratorFunction ||
                  "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
                  : ((t.__proto__ = GeneratorFunctionPrototype),
                    define(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(g)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, c, function () {
              return this;
            }),
            (e.AsyncIterator = AsyncIterator),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new AsyncIterator(wrap(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            defineIteratorMethods(g),
            define(g, u, "Generator"),
            define(g, a, function () {
              return this;
            }),
            define(g, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function next() {
                  for (; r.length; ) {
                    var t = r.pop();
                    if (t in e) return (next.value = t), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (e.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(resetTryEntry),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function stop() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(e) {
                if (this.done) throw e;
                var r = this;
                function handle(n, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return handle("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      u = n.call(i, "finallyLoc");
                    if (c && u) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function complete(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function finish(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return (
                      this.complete(r.completion, r.afterLoc),
                      resetTryEntry(r),
                      y
                    );
                }
              },
              catch: function _catch(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      resetTryEntry(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(e, r, n) {
                return (
                  (this.delegate = {
                    iterator: values(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  y
                );
              },
            }),
            e
          );
        }
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
        function optimizeSliceImage(_x) {
          return _optimizeSliceImage.apply(this, arguments);
        }
        function _optimizeSliceImage() {
          _optimizeSliceImage = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(dataUrl) {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      return _context.abrupt(
                        "return",
                        new Promise(function (resolve, reject) {
                          var image = new Image();
                          image.onload = function () {
                            var canvas = createProportionalCanvas(
                              image.width,
                              image.height,
                              200
                            );
                            drawStretched(canvas, image);
                            resolve(getOptimizedDataUrl(canvas, dataUrl));
                          };
                          image.src = dataUrl;
                        })
                      );
                    case 1:
                    case "end":
                      return _context.stop();
                  }
              }, _callee);
            })
          );
          return _optimizeSliceImage.apply(this, arguments);
        }
        function optimizeCenterImage(_x2) {
          return _optimizeCenterImage.apply(this, arguments);
        }
        function _optimizeCenterImage() {
          _optimizeCenterImage = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(
              dataUrl
            ) {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1)
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      return _context2.abrupt(
                        "return",
                        new Promise(function (resolve, reject) {
                          var image = new Image();
                          image.onload = function () {
                            var canvas = createSquareCanvas(370);
                            if (!topLeftIsWhiteOrTransparent(image)) {
                              drawStretched(canvas, image, "blur(4px)");
                            }
                            drawProportionalOnSquareCanvas(canvas, image);
                            resolve(getOptimizedDataUrl(canvas));
                          };
                          image.src = dataUrl;
                        })
                      );
                    case 1:
                    case "end":
                      return _context2.stop();
                  }
              }, _callee2);
            })
          );
          return _optimizeCenterImage.apply(this, arguments);
        }
        function createInMemoryImage(width, height) {
          var tempCanvas = document.createElement("canvas");
          tempCanvas.width = width;
          tempCanvas.height = height;
          return tempCanvas;
        }
        function getTopLeftColor(image) {
          var context = document.createElement("canvas").getContext("2d");
          context.drawImage(image, 0, 0);
          var data = context.getImageData(0, 0, 1, 1).data;
          if (meantToBeWhite(data[0], data[1], data[2])) {
            return "#FFFFFFFF";
          } else {
            return getHexColor(data[0], data[1], data[2], data[3]);
          }
        }
        function isTransparent(rgbaColor) {
          var retVal = false;
          var match = rgbaColor.match(/#\w\w\w\w\w\w(\w\w)/);
          if (match) {
            retVal = match[1] == "00";
          }
          return retVal;
        }
        function extractColors(_x3) {
          return _extractColors.apply(this, arguments);
        }
        function _extractColors() {
          _extractColors = _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(
              dataUri
            ) {
              var Vibrant, img;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1)
                  switch ((_context4.prev = _context4.next)) {
                    case 0:
                      _context4.next = 2;
                      return Promise.all(
                        /*! import() | vibrant */ [
                          __webpack_require__.e("vendors~vibrant"),
                          __webpack_require__.e("vibrant"),
                        ]
                      ).then(
                        __webpack_require__.t.bind(
                          null,
                          /*! node-vibrant */ "./node_modules/node-vibrant/lib/browser.js",
                          7
                        )
                      );
                    case 2:
                      Vibrant = _context4.sent["default"];
                      img = new Image();
                      img.src = dataUri;
                      return _context4.abrupt(
                        "return",
                        new Promise(function (resolve, reject) {
                          img.onload = /*#__PURE__*/ _asyncToGenerator(
                            /*#__PURE__*/ _regeneratorRuntime().mark(
                              function _callee3() {
                                var v, palette;
                                return _regeneratorRuntime().wrap(
                                  function _callee3$(_context3) {
                                    while (1)
                                      switch (
                                        (_context3.prev = _context3.next)
                                      ) {
                                        case 0:
                                          v = new Vibrant(img);
                                          _context3.next = 3;
                                          return v.getPalette();
                                        case 3:
                                          palette = _context3.sent;
                                          resolve([
                                            palette.Vibrant.hex,
                                            palette.LightVibrant.hex,
                                            palette.DarkVibrant.hex,
                                            palette.Muted.hex,
                                            palette.LightMuted.hex,
                                            palette.DarkMuted.hex,
                                          ]);
                                        case 5:
                                        case "end":
                                          return _context3.stop();
                                      }
                                  },
                                  _callee3
                                );
                              }
                            )
                          );
                        })
                      );
                    case 6:
                    case "end":
                      return _context4.stop();
                  }
              }, _callee4);
            })
          );
          return _extractColors.apply(this, arguments);
        }
        function createProportionalCanvas(imageWidth, imageHeight, maxSide) {
          var xScale = maxSide / imageWidth;
          var yScale = maxSide / imageHeight;
          var scale = Math.max(xScale, yScale);
          var canvas = document.createElement("canvas");
          canvas.width = imageWidth * scale;
          canvas.height = imageHeight * scale;
          return canvas;
        }
        function createSquareCanvas(side) {
          var canvas = document.createElement("canvas");
          canvas.width = side;
          canvas.height = side;
          return canvas;
        }
        function topLeftIsWhiteOrTransparent(image) {
          var hexColor = getTopLeftColor(image);
          return hexColor == "#FFFFFFFF" || hexColor.slice(7) == "FF";
        }
        function topLeftIsTransparent(context) {
          var data = context.getImageData(0, 0, 1, 1).data;
          return data[3] < 5;
        }
        function meantToBeWhite(r, g, b) {
          // An edge effect and slight transparence probably made the
          // color slightly off-white.
          return r == g && r == b && r > 230;
        }
        function getHexColor(r, g, b, a) {
          return "#"
            .concat(hex(r))
            .concat(hex(g))
            .concat(hex(b))
            .concat(hex(a));
        }
        var hex = function hex(d) {
          return Number(d).toString(16).padStart(2, "0");
        };
        function drawStretched(canvas, image, filter) {
          var context = canvas.getContext("2d");
          context.save();
          if (filter) context.filter = filter;
          // Draw image with full bleed to reduce edge artifacts.
          context.drawImage(image, -2, -2, canvas.width + 4, canvas.height + 4);
          context.restore();
        }
        function drawProportionalOnSquareCanvas(canvas, image) {
          var canvasWidth = canvas.width;
          var scale = canvasWidth / Math.max(image.width, image.height);
          var width = image.width * scale;
          var x = (canvasWidth - width) / 2;
          var height = image.height * scale;
          var y = (canvasWidth - height) / 2;
          var context = canvas.getContext("2d");
          context.drawImage(image, x, y, width, height);
        }
        function getOptimizedDataUrl(canvas, originalDataUrl) {
          var newDataUrl;
          if (topLeftIsTransparent(canvas.getContext("2d"))) {
            newDataUrl = canvas.toDataURL("image/png");
          } else {
            newDataUrl = canvas.toDataURL("image/jpeg", 0.5);
          }
          if (originalDataUrl && originalDataUrl.length < newDataUrl.length) {
            return originalDataUrl;
          } else {
            return newDataUrl;
          }
        }

        /***/
      },

    /***/ "./static/Locales.js":
      /*!***************************!*\
  !*** ./static/Locales.js ***!
  \***************************/
      /*! exports provided: getLocale, getRelativeUrl, getAbsoluteUrl, getLoginLocale, getOfficialList, getMessagesFileName, getLangTipLocale, getNamesForAll, getNames, getDomainLocale */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getLocale",
          function () {
            return getLocale;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getRelativeUrl",
          function () {
            return getRelativeUrl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getAbsoluteUrl",
          function () {
            return getAbsoluteUrl;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getLoginLocale",
          function () {
            return getLoginLocale;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getOfficialList",
          function () {
            return getOfficialList;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getMessagesFileName",
          function () {
            return getMessagesFileName;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getLangTipLocale",
          function () {
            return getLangTipLocale;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getNamesForAll",
          function () {
            return getNamesForAll;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getNames",
          function () {
            return getNames;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getDomainLocale",
          function () {
            return getDomainLocale;
          }
        );
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
        var nonEnglishDomains = [
          {
            partialName: "noms",
            locale: "fr",
          },
        ];
        var locales = [
          {
            name: "en",
            humanName: "English",
            googleName: "en_US",
            twitterName: "en",
            file: "en-US.json",
          },
        ];
        function getLocale(hostName, pathName) {
          return getPathLocale(pathName) || getDomainLocale(hostName);
        }
        function getRelativeUrl(hostName, locale) {
          return getDomainLocale(hostName) == locale
            ? "/"
            : "/".concat(locale, "/");
        }
        function getAbsoluteUrl(hostName, locale, path) {
          var link = hostName + getRelativeUrl(hostName, locale) + "/" + path;
          return link.replace("//", "/");
        }
        function getLoginLocale(providerName, locale) {
          var matchedLocales = locales.filter(function (l) {
            return l.name == locale;
          });
          if (providerName.toLowerCase() == "twitter") {
            return matchedLocales.reduce(function (acc, current) {
              return current.twitterName;
            }, "en_US");
          } else {
            return matchedLocales.reduce(function (acc, current) {
              return current.googleName;
            }, "en_US");
          }
        }
        function getOfficialList(hostName) {
          return locales
            .map(function (l) {
              return {
                name: l.name,
                url: hostName + getRelativeUrl(hostName, l.name),
              };
            })
            .filter(function (l) {
              return l.name != "en-PI";
            });
        }
        function getMessagesFileName(locale) {
          return locales
            .filter(function (l) {
              return l.name == locale;
            })
            .reduce(function (acc, current) {
              return current.file;
            }, "en-US.json");
        }
        function getLangTipLocale(systemLocale, navigatorLanguages) {
          if (!navigatorLanguages || !navigatorLanguages.length) return "";
          var userLocale = navigatorLanguages[0];
          var shouldShowLanguageTip =
            !areSameLocale(userLocale, systemLocale) &&
            localeIsSupported(userLocale);
          return shouldShowLanguageTip
            ? getClosestSupportedLocale(userLocale)
            : "";
        }
        function getNamesForAll() {
          return locales
            .map(function (locale) {
              return {
                name: locale.name,
                humanName: locale.humanName,
              };
            })
            .sort(function (a, b) {
              return a.humanName.localeCompare(b.humanName);
            });
        }
        function getNames() {
          return locales.map(function (item) {
            return item.name;
          });
        }
        function getDomainLocale(hostName) {
          return nonEnglishDomains
            .filter(function (domain) {
              return hostName.includes(domain.partialName);
            })
            .reduce(function (acc, current) {
              return current.locale;
            }, "en");
        }
        function areSameLocale(locale1, locale2) {
          if (locale1.length == locale2.length) {
            return locale1 == locale2;
          } else {
            return getLangFromLocale(locale1) == getLangFromLocale(locale2);
          }
        }
        function getLangFromLocale(locale) {
          return locale.split("-")[0];
        }
        function localeIsSupported(locale) {
          return !!locales.find(function (l) {
            return areSameLocale(locale, l.name);
          });
        }
        function getClosestSupportedLocale(locale) {
          return locales.find(function (l) {
            return areSameLocale(locale, l.name);
          }).name;
        }
        function getPathLocale(pathName) {
          return locales
            .map(function (locale) {
              return locale.name;
            })
            .find(function (locale) {
              var re1 = new RegExp("\\/".concat(locale, "\\/?$"));
              var re2 = new RegExp("\\/".concat(locale, "\\/"));
              return pathName.match(re1) || pathName.match(re2);
            });
        }

        /***/
      },

    /***/ "./static/NameHat.js":
      /*!***************************!*\
  !*** ./static/NameHat.js ***!
  \***************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return NameHat;
          }
        );
        function _typeof(o) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
        var NameHat = /*#__PURE__*/ (function () {
          function NameHat() {
            _classCallCheck(this, NameHat);
            this.names = [];
          }
          _createClass(NameHat, [
            {
              key: "setNames",
              value: function setNames(names) {
                this.names = names;
              },
            },
            {
              key: "getNames",
              value: function getNames() {
                return this.names;
              },
            },
            {
              key: "empty",
              value: function empty() {
                this.names = [];
              },
            },
            {
              key: "numberOfNames",
              value: function numberOfNames() {
                return this.names.length;
              },
            },
            {
              key: "pullRandomName",
              value: function pullRandomName() {
                var name = this.getRandomName();
                var indexOfName = this.names.indexOf(name);
                if (indexOfName > -1) {
                  this.names.splice(indexOfName, 1);
                }
                return name;
              },
            },
            {
              key: "addName",
              value: function addName(name) {
                this.names.push(name);
              },
            },
            {
              key: "getRandomName",
              value: function getRandomName() {
                return this.names[
                  Math.floor(Math.random() * this.names.length)
                ];
              },
            },
          ]);
          return NameHat;
        })();

        /***/
      },

    /***/ "./static/PageReloader.js":
      /*!********************************!*\
  !*** ./static/PageReloader.js ***!
  \********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return PageReloader;
          }
        );
        function _typeof(o) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
        var PageReloader = /*#__PURE__*/ (function () {
          function PageReloader() {
            _classCallCheck(this, PageReloader);
            this.pageLoadedTs = this.getNowTimestamp();
          }
          _createClass(PageReloader, [
            {
              key: "reloadOutdatedPage",
              value: function reloadOutdatedPage(pageHidden) {
                if (pageHidden) {
                  var nowTs = this.getNowTimestamp();
                  var TWO_DAYS = 1000 * 3600 * 24 * 2;
                  if (nowTs - this.pageLoadedTs > TWO_DAYS) {
                    location.reload(true);
                  }
                }
              },
            },
            {
              key: "getNowTimestamp",
              value: function getNowTimestamp() {
                return new Date().getTime();
              },
            },
          ]);
          return PageReloader;
        })();

        /***/
      },

    /***/ "./static/Path.js":
      /*!************************!*\
  !*** ./static/Path.js ***!
  \************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return Path;
          }
        );
        /* harmony import */ var _Locales_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./Locales.js */ "./static/Locales.js");
        function _typeof(o) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

        var Path = /*#__PURE__*/ (function () {
          function Path(location) {
            _classCallCheck(this, Path);
            this.protocol = location.protocol;
            this.host = location.host;
            this.locale = _Locales_js__WEBPACK_IMPORTED_MODULE_0__["getLocale"](
              location.host,
              location.pathname
            );
            var match = location.pathname.match(/\w\w\w-\w\w\w/);
            this.sharedWheel = match ? match[0].toLowerCase() : "";
          }
          _createClass(Path, [
            {
              key: "setPathPrefix",
              value: function setPathPrefix(prefix) {
                this.prefix = prefix;
              },
            },
            {
              key: "getAbsoluteUrl",
              value: function getAbsoluteUrl() {
                return (
                  [
                    this.protocol,
                    "/",
                    this.host,
                    this.prefix,
                    _Locales_js__WEBPACK_IMPORTED_MODULE_0__["getDomainLocale"](
                      this.host
                    ) == this.locale
                      ? ""
                      : this.locale,
                    this.sharedWheel,
                  ]
                    .filter(function (x) {
                      return x;
                    })
                    .join("/")
                    .replace("///", "//") + "/"
                );
              },
            },
            {
              key: "getAbsoluteLocalizedRootUrl",
              value: function getAbsoluteLocalizedRootUrl() {
                return (
                  [
                    this.protocol,
                    "/",
                    this.host,
                    _Locales_js__WEBPACK_IMPORTED_MODULE_0__["getDomainLocale"](
                      this.host
                    ) == this.locale
                      ? ""
                      : this.locale,
                  ]
                    .filter(function (x) {
                      return x;
                    })
                    .join("/")
                    .replace("///", "//") + "/"
                );
              },
            },
          ]);
          return Path;
        })();

        /***/
      },

    /***/ "./static/PieSlice.js":
      /*!****************************!*\
  !*** ./static/PieSlice.js ***!
  \****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return PieSlice;
          }
        );
        /* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./Util.js */ "./static/Util.js");
        /* harmony import */ var _ImageUtil_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./ImageUtil.js */ "./static/ImageUtil.js");
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

        function PieSlice(
          radians,
          wheelRadius,
          hubRadius,
          color,
          displayText,
          image
        ) {
          this.radians = radians;
          this.wheelRadius = wheelRadius;
          this.hubRadius = hubRadius;
          this.color = color;
          this.displayText = displayText;
          this.image = image;
          this.draw = function (context) {
            if (!this.displayText && !this.image) return;
            context.save();
            var bgColor = this.color;
            drawBackColor(context, this.wheelRadius, this.radians, bgColor);
            if (this.image) {
              var imgBgColor = _ImageUtil_js__WEBPACK_IMPORTED_MODULE_1__[
                "getTopLeftColor"
              ](this.image);
              drawBackColor(
                context,
                this.wheelRadius,
                this.radians,
                imgBgColor
              );
              if (
                !_ImageUtil_js__WEBPACK_IMPORTED_MODULE_1__["isTransparent"](
                  imgBgColor
                )
              ) {
                bgColor = imgBgColor;
              }
              drawImage(
                context,
                this.radians / 2,
                this.wheelRadius,
                this.hubRadius,
                this.image
              );
            }
            if (this.displayText) {
              drawText(
                context,
                this.wheelRadius,
                this.displayText,
                bgColor,
                this.image
              );
            }
            drawBorder(context, this.wheelRadius, this.radians);
            context.restore();
          };
          function drawBackColor(context, radius, radians, color) {
            context.beginPath();
            context.moveTo(0, 0);
            context.arc(0, 0, radius, -radians / 2, radians / 2);
            context.lineTo(0, 0);
            context.fillStyle = color;
            context.fill();
          }
          function drawText(context, radius, displayText, bgColor, image) {
            context.lineJoin = "round";
            context.textBaseline = "middle";
            context.textAlign = "end";
            var color = getTextColor(bgColor);
            if (image) {
              context.lineWidth = 4;
              context.strokeStyle = color.outline;
              context.strokeText(displayText, radius, 0);
            }
            context.fillStyle = color.fill;
            context.fillText(displayText, radius, 0);
          }
          function drawBorder(context, radius, radians) {
            context.beginPath();
            context.moveTo(0, 0);
            context.arc(0, 0, radius, -radians / 2, radians / 2);
            context.lineTo(0, 0);
            context.lineWidth = 1;
            context.strokeStyle = "#333333";
            context.stroke();
          }
          function drawImage(context, a, r, b, image) {
            var p = getImagePos(a, r, b, image.height / image.width);
            context.drawImage(image, p.x, p.y, p.w, p.h);
          }
          function getImagePos(a, r, b, imageRatio) {
            var w, h;
            for (w = r; w > 0; w--) {
              h = w * imageRatio;
              if (
                _Util_js__WEBPACK_IMPORTED_MODULE_0__["boxFits"](a, r, b, w, h)
              ) {
                break;
              }
            }
            return {
              x: Math.max((h * Math.cos(a)) / (2 * Math.sin(a)), b),
              y: -h / 2,
              w: w,
              h: h,
            };
          }
          function getTextColor(bgColor) {
            if (!bgColor)
              return {
                fill: "#000000",
                outline: "#FFFFFF",
              };
            var color =
              bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
            var r = parseInt(color.substring(0, 2), 16);
            var g = parseInt(color.substring(2, 4), 16);
            var b = parseInt(color.substring(4, 6), 16);
            var uicolors = [r / 255, g / 255, b / 255];
            var c = uicolors.map(function (col) {
              if (col <= 0.03928) {
                return col / 12.92;
              }
              return Math.pow((col + 0.055) / 1.055, 2.4);
            });
            var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
            if (L > 0.179) {
              return {
                fill: "#000000",
                outline: "#FFFFFF",
              };
            } else {
              return {
                fill: "#FFFFFF",
                outline: "#000000",
              };
            }
          }
        }

        /***/
      },

    /***/ "./static/Preferences.js":
      /*!*******************************!*\
  !*** ./static/Preferences.js ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return Preferences;
          }
        );
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
        function Preferences() {
          this.appInfoVisible = true;
          this.darkMode = false;
          this.loadJson = function (jsonString) {
            var obj = JSON.parse(jsonString);
            this.copyPropertiesFrom(obj);
          };
          this.getJson = function () {
            var _this = this;
            var keys = Object.keys(this);
            var retVal = {};
            keys.forEach(function (key) {
              retVal[key] = _this[key];
            });
            return JSON.stringify(retVal);
          };
          this.getValues = function () {
            return JSON.parse(this.getJson());
          };
          this.loadValues = function (values) {
            this.copyPropertiesFrom(values);
          };
          this.clone = function () {
            var clone = new Preferences();
            clone.loadValues(this.getValues());
            return clone;
          };
          this.copyPropertiesFrom = function (obj) {
            Object.assign(this, JSON.parse(JSON.stringify(obj)));
          };
        }

        /***/
      },

    /***/ "./static/Ticker.js":
      /*!**************************!*\
  !*** ./static/Ticker.js ***!
  \**************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return Ticker;
          }
        );
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

        // ----------------------------------------------------------------------
        // Call setTimestamp() on this object every animation frame. You can then
        // call shouldTick() to learn if you should advance the model by 1/60th
        // of a seccond. Call shouldTick() repeatedly (and advance the model each
        // time) until it returns false.
        // ----------------------------------------------------------------------

        function Ticker() {
          this.lastFrameTimeMs = 0;
          this.delta = 0;
          this.timestep = 1000 / 60;
          this.setTimestamp = function (timestamp) {
            if (this.lastFrameTimeMs == 0) {
              // This is the first frame. We need to run tick once to init.
              this.delta = this.timestep;
            } else {
              this.delta += timestamp - this.lastFrameTimeMs;
            }
            this.lastFrameTimeMs = timestamp;
          };
          this.shouldTick = function () {
            var retVal = this.delta >= this.timestep;
            if (retVal) this.delta -= this.timestep;
            return retVal;
          };
        }

        /***/
      },

    /***/ "./static/Util.js":
      /*!************************!*\
  !*** ./static/Util.js ***!
  \************************/
      /*! exports provided: getHtmlAsText, browserCanHandlePersistance, arraysEqual, boxFits, extractDisplayText, extractImage, shuffleArray, getOccurencesInArray, browserIsIE, browserIsIEOrOldEdge, sortWheelEntries, isTouchScreen, sanitizeWheelTitle, getAddedEntries, initTracking, gotoInGoogleAnalytics, trackEvent, trackException, escapeHtml, colorIsWhite, getElementsByClassName, updateColorStyles, getUrlParams, myIsNaN */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getHtmlAsText",
          function () {
            return getHtmlAsText;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "browserCanHandlePersistance",
          function () {
            return browserCanHandlePersistance;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "arraysEqual",
          function () {
            return arraysEqual;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "boxFits",
          function () {
            return boxFits;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "extractDisplayText",
          function () {
            return extractDisplayText;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "extractImage",
          function () {
            return extractImage;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "shuffleArray",
          function () {
            return shuffleArray;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getOccurencesInArray",
          function () {
            return getOccurencesInArray;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "browserIsIE",
          function () {
            return browserIsIE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "browserIsIEOrOldEdge",
          function () {
            return browserIsIEOrOldEdge;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "sortWheelEntries",
          function () {
            return sortWheelEntries;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "isTouchScreen",
          function () {
            return isTouchScreen;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "sanitizeWheelTitle",
          function () {
            return sanitizeWheelTitle;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getAddedEntries",
          function () {
            return getAddedEntries;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "initTracking",
          function () {
            return initTracking;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "gotoInGoogleAnalytics",
          function () {
            return gotoInGoogleAnalytics;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "trackEvent",
          function () {
            return trackEvent;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "trackException",
          function () {
            return trackException;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "escapeHtml",
          function () {
            return escapeHtml;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "colorIsWhite",
          function () {
            return colorIsWhite;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getElementsByClassName",
          function () {
            return getElementsByClassName;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "updateColorStyles",
          function () {
            return updateColorStyles;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getUrlParams",
          function () {
            return getUrlParams;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "myIsNaN",
          function () {
            return myIsNaN;
          }
        );
        /* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js"
          );
        /* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__
          );
        function _typeof(o) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _defineProperty(obj, key, value) {
          key = _toPropertyKey(key);
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }
        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function _iterableToArrayLimit(r, l) {
          var t =
            null == r
              ? null
              : ("undefined" != typeof Symbol && r[Symbol.iterator]) ||
                r["@@iterator"];
          if (null != t) {
            var e,
              n,
              i,
              u,
              a = [],
              f = !0,
              o = !1;
            try {
              if (((i = (t = t.call(r)).next), 0 === l)) {
                if (Object(t) !== t) return;
                f = !1;
              } else
                for (
                  ;
                  !(f = (e = i.call(t)).done) &&
                  (a.push(e.value), a.length !== l);
                  f = !0
                );
            } catch (r) {
              (o = !0), (n = r);
            } finally {
              try {
                if (
                  !f &&
                  null != t["return"] &&
                  ((u = t["return"]()), Object(u) !== u)
                )
                  return;
              } finally {
                if (o) throw n;
              }
            }
            return a;
          }
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }
        function _toConsumableArray(arr) {
          return (
            _arrayWithoutHoles(arr) ||
            _iterableToArray(arr) ||
            _unsupportedIterableToArray(arr) ||
            _nonIterableSpread()
          );
        }
        function _nonIterableSpread() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function _iterableToArray(iter) {
          if (
            (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
            iter["@@iterator"] != null
          )
            return Array.from(iter);
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }
        function _createForOfIteratorHelper(o, allowArrayLike) {
          var it =
            (typeof Symbol !== "undefined" && o[Symbol.iterator]) ||
            o["@@iterator"];
          if (!it) {
            if (
              Array.isArray(o) ||
              (it = _unsupportedIterableToArray(o)) ||
              (allowArrayLike && o && typeof o.length === "number")
            ) {
              if (it) o = it;
              var i = 0;
              var F = function F() {};
              return {
                s: F,
                n: function n() {
                  if (i >= o.length) return { done: true };
                  return { done: false, value: o[i++] };
                },
                e: function e(_e) {
                  throw _e;
                },
                f: F,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var normalCompletion = true,
            didErr = false,
            err;
          return {
            s: function s() {
              it = it.call(o);
            },
            n: function n() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e2) {
              didErr = true;
              err = _e2;
            },
            f: function f() {
              try {
                if (!normalCompletion && it["return"] != null) it["return"]();
              } finally {
                if (didErr) throw err;
              }
            },
          };
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

        var getHtmlAsTextCache = {};
        function getHtmlAsText(html) {
          if (!(html in getHtmlAsTextCache)) {
            var retVal;
            try {
              var doc = new DOMParser().parseFromString(html, "text/html");
              retVal = doc.documentElement.textContent;
            } catch (e) {
              var replacements = [
                ["&amp;", "&"],
                ["&nbsp;", " "],
                ["&lt;", "<"],
                ["&gt;", ">"],
              ];
              retVal = html;
              replacements.forEach(function (element) {
                var re = new RegExp(element[0], "g");
                retVal = retVal.replace(re, element[1]);
              });
            }
            getHtmlAsTextCache[html] = retVal;
          }
          return getHtmlAsTextCache[html];
        }
        function browserCanHandlePersistance(userAgent) {
          // Exclude iOS 12.2 due to a bug in that OS:
          // https://github.com/firebase/firebase-js-sdk/issues/1670
          return userAgent.indexOf("OS 12_2 like Mac OS X") == -1;
        }
        function arraysEqual(a, b) {
          if (a === b) return true;
          if (a == null || b == null) return false;
          if (a.length != b.length) return false;
          for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
          }
          return true;
        }
        function boxFits(a, r, b, w, h) {
          var d =
            Math.sqrt(Math.pow(r, 2) - Math.pow(h / 2, 2)) -
            Math.max((h * Math.cos(a)) / (2 * Math.sin(a)), b);
          return d >= w;
        }
        function extractDisplayText(entry, shorten) {
          if (entry) {
            var match = entry.match(/<img.*?src="(.*?)".*?>/);
            if (match) {
              entry = entry.replace(match[0], "");
            }
          }
          var displayText = "";
          if (entry) {
            displayText = getHtmlAsText(entry);
            if (shorten) {
              var MAX_LENGTH = 18;
              if (displayText.length > MAX_LENGTH) {
                displayText = displayText.substring(0, MAX_LENGTH - 1) + "…";
              }
            }
            // Add font-proportional space between name and edges of wheel.
            displayText = " " + displayText + " ";
          }
          return displayText;
        }
        function extractImage(entry) {
          var imageData = "";
          if (entry) {
            var match = entry.match(/<img.*?src="(.*?)".*?>/);
            if (match) {
              imageData = match[1];
            }
          }
          return imageData;
        }
        function shuffleArray(inputArray) {
          var array = inputArray.slice(0);
          for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
          return array;
        }
        function getOccurencesInArray(array, entry) {
          return array.reduce(function (accumulator, currentValue) {
            return accumulator + (currentValue == entry ? 1 : 0);
          }, 0);
        }
        function browserIsIE() {
          return !!window.document.documentMode;
        }
        function browserIsIEOrOldEdge(userAgent) {
          if (!userAgent) return false;
          var re = new RegExp(" MSIE \\d|Trident/|Edge/");
          return !!userAgent.match(re);
        }
        function sortWheelEntries(entries) {
          return entries.slice(0).sort(function (a, b) {
            return a.localeCompare(b, "en", {
              numeric: true,
              sensitivity: "base",
            });
          });
        }
        function isTouchScreen() {
          var retVal =
            "ontouchstart" in window ||
            (window.DocumentTouch &&
              document instanceof window.DocumentTouch) ||
            navigator.maxTouchPoints > 0 ||
            window.navigator.msMaxTouchPoints > 0;
          return retVal;
        }
        function sanitizeWheelTitle(title) {
          var retVal = title;
          retVal = retVal.replace(/\//g, "\\");
          if (retVal == "..") retVal = ".. ";
          if (retVal == ".") retVal = ". ";
          if (retVal == "") retVal = "?";
          if (retVal.length > 100) {
            retVal = retVal.substring(0, 97) + "...";
          }
          return retVal;
        }
        function getAddedEntries(oldEntries, newEntries) {
          if (!oldEntries) oldEntries = [];
          if (!newEntries) newEntries = [];
          return newEntries.filter(function (x) {
            return !oldEntries.includes(x);
          });
        }
        function initTracking() {
          window.onerror = function (message, source, lineno, colno, error) {
            try {
              if (error) message = error.toString();
              trackEvent("window.onerror", message, navigator.userAgent);
            } catch (ex) {
              console.error(ex);
            }
          };
        }
        function gotoInGoogleAnalytics(eventCategory, eventAction, eventLabel) {
          trackEvent(eventCategory, eventAction, eventLabel);
        }
        function trackEvent(eventCategory, eventAction, eventLabel) {
          if (location.host.startsWith("localhost")) return;
          if (typeof ga !== "undefined") {
            ga("send", "event", eventCategory, eventAction, eventLabel);
          }
        }
        function trackException(exception, extraData) {
          console.error(exception);
        }
        function escapeHtml(unsafe) {
          return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
        }
        function colorIsWhite(color) {
          if (!color) return true;
          return color.toLowerCase() == "#ffffff";
        }
        function getElementsByClassName(classNames) {
          var retVal = [];
          var _iterator = _createForOfIteratorHelper(classNames),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var className = _step.value;
              var _iterator2 = _createForOfIteratorHelper(
                  document.getElementsByClassName(className)
                ),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  var el = _step2.value;
                  retVal.push(el);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return retVal;
        }
        function updateColorStyles(darkMode, darkModeColor, pageColor) {
          var sheet = _toConsumableArray(document.styleSheets).find(function (
            sheet
          ) {
            return (
              sheet.href &&
              (sheet.href.includes("index.css") ||
                sheet.href.includes("admin.css"))
            );
          });
          var rule = _toConsumableArray(sheet.rules).find(function (rule) {
            return rule.selectorText == ".can-go-dark";
          });
          if (darkMode) {
            rule.style.color = "#fff";
            rule.style.backgroundColor = darkModeColor;
            document.documentElement.style.backgroundColor = "#000";
            document.body.style.backgroundColor = "#000";
          } else {
            rule.style.color = "";
            rule.style.backgroundColor = "";
            document.documentElement.style.backgroundColor = pageColor;
            document.body.style.backgroundColor = pageColor;
          }
        }
        function getUrlParams(query) {
          return Array.from(new URLSearchParams(query)).reduce(function (
            p,
            _ref
          ) {
            var _ref2 = _slicedToArray(_ref, 2),
              k = _ref2[0],
              v = _ref2[1];
            return Object.assign(
              {},
              p,
              _defineProperty(
                {},
                k,
                p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v
              )
            );
          },
          {});
        }

        /**
         * 判断是否是数字
         * @param value
         * @returns {boolean}
         */
        function myIsNaN(value) {
          return parseFloat(value).toString() === "NaN";
        }

        /***/
      },

    /***/ "./static/Wheel.js":
      /*!*************************!*\
  !*** ./static/Wheel.js ***!
  \*************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return Wheel;
          }
        );
        /* harmony import */ var _WheelPainter_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./WheelPainter.js */ "./static/WheelPainter.js"
          );
        /* harmony import */ var _DisplayNamePicker_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./DisplayNamePicker.js */ "./static/DisplayNamePicker.js"
          );
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

        function Wheel() {
          this.colors = [];
          this.angle = 0;
          this.speed = 0.005;
          this.stopSpeed = 0.0001;
          this.acceleration = 0.01;
          this.deceleration = 0;
          this.nameLastTick = "";
          this.state = new NotSpunState();
          this.wheelPainter = new _WheelPainter_js__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ]();
          this.namePicker =
            new _DisplayNamePicker_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
          this.doneSpinningCallback = function () {};
          this.nameChangedCallback = function () {};
          this.setNames = function (names, maxSlices, allowDuplicates) {
            if (this.state.editAllowed()) {
              this.namePicker.setNames(names, maxSlices, allowDuplicates);
              this.wheelPainter.refresh();
            }
          };
          this.refresh = function () {
            this.wheelPainter.refresh();
          };
          this.configure = function (
            colors,
            centerImage,
            spinTime,
            slowSpin,
            hubSize,
            pageBackgroundColor
          ) {
            if (this.state.editAllowed()) {
              this.colors = colors;
              this.centerImage = centerImage;
              this.spinTime = spinTime;
              this.acceleration = slowSpin ? 0.001 : 0.01;
              this.hubSize = hubSize;
              this.pageBackgroundColor = pageBackgroundColor;
              this.wheelPainter.refresh();
            }
          };
          this.tick = function () {
            this.state.tick(this);
            var updated = this.namePicker.tick(this.getIndexAtPointer());
            if (updated) this.wheelPainter.refresh();
          };
          this.click = function (nameChangedCallback, doneSpinningCallback) {
            this.nameChangedCallback = nameChangedCallback;
            this.doneSpinningCallback = doneSpinningCallback;
            this.state.click(this);
          };
          this.spinIsDone = function () {
            this.doneSpinningCallback(this.getNameAtPointer());
          };
          this.isSpinning = function () {
            return this.state.isSpinning();
          };
          this.setRandomAngle = function () {
            this.angle = Math.random() * 2 * Math.PI;
          };
          this.advance = function () {
            this.indexFromLastTick = this.indexFromThisTick;
            this.indexFromThisTick = this.getIndexAtPointer();
            if (this.indexFromThisTick != this.indexFromLastTick) {
              this.nameChangedCallback();
            }
            this.angle += this.speed;
            if (this.angle > Math.PI * 2) {
              this.angle -= Math.PI * 2;
            }
          };
          this.getIndexAtPointer = function () {
            var numberOfNames = this.namePicker.getNumberOfDisplayNames();
            var radiansPerSegment = (2 * Math.PI) / numberOfNames;
            var index = this.angle / radiansPerSegment;
            index = Math.round(index);
            if (index >= numberOfNames) {
              index = 0;
            }
            return index;
          };
          this.getNameAtPointer = function () {
            return this.namePicker.getDisplayNames()[this.getIndexAtPointer()];
          };
          this.resetRotation = function () {
            this.angle = 0;
          };
          this.calculateDeceleration = function () {
            var decelTicks = (this.spinTime - 1) * 60;
            var startSpeed = 60 * this.acceleration;
            this.deceleration = Math.exp(
              Math.log(this.stopSpeed / startSpeed) / decelTicks
            );
          };
          this.accelerate = function () {
            this.speed += this.acceleration;
          };
          this.decelerate = function () {
            this.speed = this.speed * this.deceleration;
          };
          this.isBelowStopSpeed = function () {
            return this.speed < this.stopSpeed;
          };
          this.draw = function (context) {
            this.wheelPainter.draw(
              context,
              this.angle,
              this.namePicker.getDisplayNames(),
              this.colors,
              this.centerImage,
              this.hubSize,
              this.pageBackgroundColor
            );
          };
        }
        function NotSpunState() {
          this.tick = function (wheel) {
            wheel.advance();
          };
          this.click = function (wheel) {
            wheel.calculateDeceleration();
            wheel.state = new AcceleratingState();
          };
          this.editAllowed = function () {
            return true;
          };
          this.isSpinning = function () {
            return false;
          };
        }
        function AcceleratingState() {
          this.ticks = 0;
          this.MAX_AGE = 60;
          this.tick = function (wheel) {
            wheel.accelerate();
            wheel.advance();
            this.ticks += 1;
            if (this.ticks > this.MAX_AGE) {
              wheel.setRandomAngle();
              wheel.state = new SpinningState();
            }
          };
          this.click = function (wheel) {};
          this.editAllowed = function () {
            return false;
          };
          this.isSpinning = function () {
            return true;
          };
        }
        function SpinningState() {
          this.tick = function (wheel) {
            wheel.decelerate();
            wheel.advance();
            if (wheel.isBelowStopSpeed()) {
              wheel.speed = 0;
              wheel.state = new OpenForEditState();
              wheel.spinIsDone();
            }
          };
          this.click = function (wheel) {};
          this.editAllowed = function () {
            return false;
          };
          this.isSpinning = function () {
            return true;
          };
        }
        function OpenForEditState() {
          this.tick = function (wheel) {};
          this.click = function (wheel) {
            wheel.calculateDeceleration();
            wheel.state = new AcceleratingState();
          };
          this.editAllowed = function () {
            return true;
          };
          this.isSpinning = function () {
            return false;
          };
        }

        /***/
      },

    /***/ "./static/WheelConfig.js":
      /*!*******************************!*\
  !*** ./static/WheelConfig.js ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return WheelConfig;
          }
        );
        /* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./Util.js */ "./static/Util.js");
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

        function WheelConfig(winnerMessage, title, names, lang) {
          /*this.title = '🍔 What to eat today?';
  this.names = ["Soup 🍜", "Sandwich 🥪", "Steak 🥩", "Chinese 🥡", "BBQ 🍖", "Pasta 🍝", "Hot dog 🌭", "Salad 🥗",
    "Bacon 🥓", "Sushi 🍣", "Burrito 🌯", "Pizza 🍕", "Burger 🍔", "Thai 🍛", "Taco 🌮", "Stew 🍲"];
   */
          this.lang = lang;
          this.title = title;
          if (names === undefined) {
            this.names = [
              "Soup 🍜",
              "Sandwich 🥪",
              "Steak 🥩",
              "Chinese 🥡",
              "BBQ 🍖",
              "Pasta 🍝",
              "Hot dog 🌭",
              "Salad 🥗",
              "Bacon 🥓",
              "Sushi 🍣",
              "Burrito 🌯",
              "Pizza 🍕",
              "Burger 🍔",
              "Thai 🍛",
              "Taco 🌮",
              "Stew 🍲",
            ];
          } else {
            this.names = names;
          }
          this.colorSettings = [
            {
              color: "#66B569",
              enabled: true,
            },
            {
              color: "#20A094",
              enabled: true,
            },
            {
              color: "#2BC0D4",
              enabled: true,
            },
            {
              color: "#23B0EF",
              enabled: true,
            },
            {
              color: "#5968BA",
              enabled: true,
            },
            {
              color: "#5363B9",
              enabled: true,
            },
            {
              color: "#7D58BD",
              enabled: true,
            },
            {
              color: "#A849B8",
              enabled: true,
            },
            {
              color: "#E53C76",
              enabled: true,
            },
            {
              color: "#EF594E",
              enabled: true,
            },
            {
              color: "#F76D42",
              enabled: true,
            },
            {
              color: "#F7A226",
              enabled: true,
            },
            {
              color: "#F8C42B",
              enabled: true,
            },
            {
              color: "#F5E65D",
              enabled: true,
            },
            {
              color: "#CEDB52",
              enabled: true,
            },
            {
              color: "#98C563",
              enabled: true,
            },
          ];
          this.pageBackgroundColor = "#FFFFFF";
          this.pictureType = "none";
          this.galleryPicture = "images/none.png";
          this.customPictureName = "";
          this.customPictureDataUri = "";
          this.allowDuplicates = true;
          this.duringSpinSound = "ticking-sound";
          this.afterSpinSound = "applause-sound";
          this.maxNames = 500;
          this.spinTime = 10;
          this.playCheers = true;
          this.launchConfetti = true;
          this.animateWinner = false;
          this.autoRemoveWinner = false;
          this.displayWinnerDialog = true;
          this.winnerMessage = winnerMessage;
          this.playClickWhenWinnerRemoved = false;
          this.hubSize = "S";
          this.slowSpin = false;
          this.loadJson = function (jsonString) {
            var obj =
              typeof jsonString === "string"
                ? JSON.parse(jsonString)
                : jsonString;
            this.copyPropertiesFrom(obj);
          };
          this.getJson = function () {
            var _this = this;
            var keys = Object.keys(this);
            var retVal = {};
            keys.forEach(function (key) {
              retVal[key] = _this[key];
            });
            return JSON.stringify(retVal);
          };
          this.getValues = function () {
            return JSON.parse(this.getJson());
          };
          this.loadValues = function (values) {
            this.copyPropertiesFrom(values);
          };
          this.clone = function () {
            var clone = new WheelConfig();
            clone.loadValues(this.getValues());
            return clone;
          };
          this.getDefaultColorSettings = function () {
            return new WheelConfig().colorSettings;
          };
          this.getDefaultNames = function () {
            return new WheelConfig().names;
          };
          this.setCustomPicture = function (name, dataUri) {
            this.customPictureName = name;
            this.customPictureDataUri = dataUri;
            this.pictureType = "uploaded";
          };
          this.getWheelImage = function () {
            if (this.pictureType === "none") {
              return null;
            }
            if (this.pictureType === "gallery") {
              if (this.galleryPicture) {
                return this.galleryPicture;
              }
            }
            if (this.pictureType === "uploaded") {
              if (this.customPictureDataUri) {
                return this.customPictureDataUri;
              }
            }
            return null;
          };
          this.shouldPlayTicks = function () {
            return this.duringSpinSound === "ticking-sound";
          };
          this.setColors = function (colorValues, enabledValues) {
            var num = this.colorSettings.length;
            for (var i = 0; i < num; i++) {
              this.colorSettings[i] = {
                color: colorValues[i],
                enabled: enabledValues[i],
              };
            }
          };
          this.getCoalescedColors = function () {
            var retVal = [];
            if (this.colorSettings !== undefined) {
              var num = this.colorSettings.length;
              for (var i = 0; i < num; i++) {
                if (this.colorSettings[i].enabled) {
                  retVal.push(this.colorSettings[i].color);
                }
              }
            }
            if (retVal.length === 0) {
              retVal.push("#dfe6e9");
            }
            return retVal;
          };
          this.isTooBigForDatabase = function () {
            return this.getJson().length > 990000;
          };
          this.copyPropertiesFrom = function (obj) {
            Object.assign(this, JSON.parse(JSON.stringify(obj)));
            this.convertOldData();
          };
          this.convertOldData = function () {
            if (Array.isArray(this.names)) {
              this.names = this.names.map(
                // Convert old height metric to new height metric.
                function (name) {
                  return name.replace(/height="25"/, 'style="height:25px"');
                }
              );
              // Remove any entries that are unprintable characters.
              this.names = this.names.filter(function (name) {
                return name.trim();
              });
            }
            if (Array.isArray(this.entries)) {
              // Convert from new "entries" format to old "names" format.
              this.names = this.entries.map(function (entry) {
                var retVal = "";
                if (entry.image) {
                  retVal += '<img src="'.concat(
                    entry.image,
                    '" style="height:25px;font-size:1rem;">'
                  );
                }
                if (entry.text) {
                  retVal += _Util_js__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"](
                    entry.text
                  );
                }
                return retVal;
              });
              delete this.entries;
            }
            this.maxNames = parseInt(this.maxNames);
            this.spinTime = parseInt(this.spinTime);
            if (this.playTicks === false) {
              this.duringSpinSound = "no-sound";
            }
            delete this.playTicks;
            if (this.playCheers === false) {
              this.afterSpinSound = "no-sound";
            }
            delete this.playCheers;
          };
        }

        /***/
      },

    /***/ "./static/WheelPainter.js":
      /*!********************************!*\
  !*** ./static/WheelPainter.js ***!
  \********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return WheelPainter;
          }
        );
        /* harmony import */ var _ImageCache_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./ImageCache.js */ "./static/ImageCache.js");
        /* harmony import */ var _PieSlice_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./PieSlice.js */ "./static/PieSlice.js");
        /* harmony import */ var _FontMeasurer_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./FontMeasurer.js */ "./static/FontMeasurer.js"
          );
        /* harmony import */ var _hubSizes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./hubSizes.js */ "./static/hubSizes.js");
        /* harmony import */ var _hubSizes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _hubSizes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./Util.js */ "./static/Util.js");
        /* harmony import */ var _ImageUtil_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./ImageUtil.js */ "./static/ImageUtil.js");
        function _typeof(o) {
          "@babel/helpers - typeof";
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      "function" == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            _typeof(o)
          );
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
          if (_typeof(input) !== "object" || input === null) return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (_typeof(res) !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

        var WheelPainter = /*#__PURE__*/ (function () {
          function WheelPainter() {
            _classCallCheck(this, WheelPainter);
            this.imageCache = new _ImageCache_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ]();
            this.names = [];
            this.wheelImages = {};
          }
          _createClass(WheelPainter, [
            {
              key: "draw",
              value: function draw(
                context,
                angle,
                names,
                colors,
                centerImage,
                hubSize,
                backgroundColor
              ) {
                var wheelRadius = context.canvas.width * 0.44;
                var hubRadius = this.getHubRadius(wheelRadius, hubSize);
                var drawShadows =
                  _Util_js__WEBPACK_IMPORTED_MODULE_4__["colorIsWhite"](
                    backgroundColor
                  );
                this.drawBackgroundColor(context, backgroundColor);
                this.drawWheelShadow(context, wheelRadius, drawShadows);
                if (names.includes(""))
                  this.drawHat(context, wheelRadius, hubRadius);
                this.drawWheel(
                  context,
                  wheelRadius,
                  angle,
                  names,
                  colors,
                  hubRadius
                );
                this.drawPointer(context, wheelRadius, drawShadows);
                this.drawHub(context, angle, centerImage, hubRadius);
              },
            },
            {
              key: "getHubRadius",
              value: function getHubRadius(wheelRadius, hubSize) {
                var hubFraction =
                  _hubSizes_js__WEBPACK_IMPORTED_MODULE_3__["hubSizes"][
                    hubSize
                  ] || 0.2;
                return Math.round(hubFraction * wheelRadius);
              },
            },
            {
              key: "refresh",
              value: function refresh() {
                this.wheelImage = null;
                this.pointerImage = null;
              },
            },
            {
              key: "drawBackgroundColor",
              value: function drawBackgroundColor(context, backgroundColor) {
                if (backgroundColor == "#FFFFFF") return;
                context.save();
                context.fillStyle = backgroundColor;
                context.fillRect(
                  0,
                  0,
                  context.canvas.width,
                  context.canvas.height
                );
                context.restore();
              },
            },
            {
              key: "drawWheelShadow",
              value: function drawWheelShadow(
                context,
                wheelRadius,
                drawShadows
              ) {
                if (!drawShadows) return;
                if (!this.wheelShadowImage) {
                  this.wheelShadowImage =
                    _ImageUtil_js__WEBPACK_IMPORTED_MODULE_5__[
                      "createInMemoryImage"
                    ](context.canvas.width, context.canvas.height);
                  this.drawWheelShadowNoCache(
                    this.wheelShadowImage.getContext("2d"),
                    wheelRadius
                  );
                }
                context.drawImage(this.wheelShadowImage, 0, 0);
              },
            },
            {
              key: "drawWheel",
              value: function drawWheel(
                context,
                wheelRadius,
                angle,
                names,
                colors,
                hubRadius
              ) {
                if (!this.wheelImage) {
                  this.wheelImage = _ImageUtil_js__WEBPACK_IMPORTED_MODULE_5__[
                    "createInMemoryImage"
                  ](context.canvas.width, context.canvas.height);
                  this.drawWheelNoCache(
                    this.wheelImage.getContext("2d"),
                    wheelRadius,
                    names,
                    colors,
                    hubRadius
                  );
                  this.names = names.slice(0);
                }
                var width = context.canvas.width;
                var height = context.canvas.height;
                context.save();
                context.translate(width / 2, height / 2);
                context.rotate(angle);
                context.translate(-width / 2, -height / 2);
                context.drawImage(this.wheelImage, 0, 0);
                context.restore();
              },
            },
            {
              key: "drawHat",
              value: function drawHat(context, wheelRadius, hubRadius) {
                var image = this.imageCache.getImage(
                  "images/hat-with-names.png"
                );
                var scale = (wheelRadius - hubRadius) / image.width;
                var x = context.canvas.width / 2 - wheelRadius;
                var height = image.height * scale;
                var y = (context.canvas.height - height) / 2;
                var width = wheelRadius - hubRadius;
                context.drawImage(image, x, y, width, height);
              },
            },
            {
              key: "drawPointer",
              value: function drawPointer(context, wheelRadius, drawShadows) {
                if (!this.pointerImage) {
                  this.pointerImage =
                    _ImageUtil_js__WEBPACK_IMPORTED_MODULE_5__[
                      "createInMemoryImage"
                    ](context.canvas.width, context.canvas.height);
                  this.drawPointerNoCache(
                    this.pointerImage.getContext("2d"),
                    wheelRadius,
                    drawShadows
                  );
                }
                context.drawImage(this.pointerImage, 0, 0);
              },
            },
            {
              key: "drawWheelShadowNoCache",
              value: function drawWheelShadowNoCache(context, wheelRadius) {
                var x = context.canvas.width / 2;
                var y = context.canvas.height / 2;
                var gradient = context.createRadialGradient(
                  x,
                  y,
                  wheelRadius,
                  x,
                  y + 4,
                  wheelRadius + 8
                );
                gradient.addColorStop(0, "#bbb");
                gradient.addColorStop(1, "#fff");
                context.fillStyle = gradient;
                context.fillRect(
                  0,
                  0,
                  context.canvas.width,
                  context.canvas.height
                );
              },
            },
            {
              key: "drawWheelNoCache",
              value: function drawWheelNoCache(
                context,
                wheelRadius,
                names,
                colors,
                hubRadius
              ) {
                context.save();
                context.translate(
                  context.canvas.width / 2,
                  context.canvas.height / 2
                );
                var radiansPerSegment = (2 * Math.PI) / names.length;
                var self = this;
                var slices = names.map(function (entry, index) {
                  var color = colors[index % colors.length];
                  var displayText = _Util_js__WEBPACK_IMPORTED_MODULE_4__[
                    "extractDisplayText"
                  ](entry, true);
                  var imageData =
                    _Util_js__WEBPACK_IMPORTED_MODULE_4__["extractImage"](
                      entry
                    );
                  var image = self.getWheelImage(imageData);
                  return new _PieSlice_js__WEBPACK_IMPORTED_MODULE_1__[
                    "default"
                  ](radiansPerSegment, wheelRadius, hubRadius, color, displayText, image);
                });
                if (slices.length > 0) {
                  context.font = this.getSmallestFont(
                    context,
                    slices,
                    wheelRadius,
                    hubRadius
                  );
                  slices.forEach(function (slice) {
                    slice.draw(context);
                    context.rotate(-radiansPerSegment);
                  });
                }
                context.restore();
                context.save();
                context.translate(
                  context.canvas.width / 2,
                  context.canvas.height / 2
                );
                this.drawCenterCircle(context, hubRadius);
                context.restore();
              },
            },
            {
              key: "getSmallestFont",
              value: function getSmallestFont(
                context,
                slices,
                wheelRadius,
                hubRadius
              ) {
                var minFontSize = 200;
                var fontName = "Quicksand, sans-serif";
                slices.forEach(function (slice) {
                  var fontSize = _FontMeasurer_js__WEBPACK_IMPORTED_MODULE_2__[
                    "getFontSize"
                  ](
                    context,
                    slice.displayText,
                    slices.length,
                    fontName,
                    wheelRadius,
                    hubRadius
                  );
                  if (fontSize < minFontSize) {
                    minFontSize = fontSize;
                  }
                });
                return minFontSize + "px " + fontName;
              },
            },
            {
              key: "drawCenterCircle",
              value: function drawCenterCircle(context, hubRadius) {
                context.fillStyle = "white";
                context.beginPath();
                context.arc(0, 0, hubRadius, 0, Math.PI * 2);
                context.fill();
                context.lineWidth = 2;
                context.strokeStyle = "#333333";
                context.stroke();
              },
            },
            {
              key: "drawPointerNoCache",
              value: function drawPointerNoCache(
                context,
                wheelRadius,
                drawShadows
              ) {
                context.save();
                context.translate(
                  context.canvas.width / 2,
                  context.canvas.height / 2
                );
                if (drawShadows) {
                  context.shadowColor = "#444";
                  context.shadowOffsetY = 4;
                  context.shadowBlur = 10;
                }
                context.beginPath();
                context.moveTo(wheelRadius - 15, 0);
                context.lineTo(wheelRadius + 25, -20);
                context.lineTo(wheelRadius + 25, 20);
                context.lineTo(wheelRadius - 15, 0);
                context.lineWidth = 2;
                context.strokeStyle = "#333333";
                context.stroke();
                context.fillStyle = "lightgray";
                context.fill();
                context.restore();
              },
            },
            {
              key: "drawHub",
              value: function drawHub(context, angle, centerImage, hubRadius) {
                var image = this.imageCache.getImage(centerImage);
                if (image) {
                  context.save();
                  context.translate(
                    context.canvas.width / 2,
                    context.canvas.height / 2
                  );
                  context.rotate(angle);
                  context.beginPath();
                  context.arc(0, 0, hubRadius - 1, 0, Math.PI * 2, true);
                  context.clip();
                  context.drawImage(
                    image,
                    -hubRadius,
                    -hubRadius,
                    hubRadius * 2,
                    hubRadius * 2
                  );
                  context.restore();
                }
              },
            },
            {
              key: "getWheelImage",
              value: function getWheelImage(imageData) {
                if (imageData) {
                  if (!this.wheelImages[imageData]) {
                    var image = new Image();
                    var self = this;
                    image.onload = function () {
                      self.wheelImage = null;
                    };
                    image.setAttribute("crossOrigin", "anonymous");
                    image.src = imageData;
                    this.wheelImages[imageData] = image;
                  }
                  return this.wheelImages[imageData];
                }
              },
            },
          ]);
          return WheelPainter;
        })();

        /***/
      },

    /***/ "./static/app.vue":
      /*!************************!*\
  !*** ./static/app.vue ***!
  \************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _app_vue_vue_type_template_id_342a570e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./app.vue?vue&type=template&id=342a570e&scoped=true& */ "./static/app.vue?vue&type=template&id=342a570e&scoped=true&"
          );
        /* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./app.vue?vue&type=script&lang=js& */ "./static/app.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony import */ var _app_vue_vue_type_style_index_0_id_342a570e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./app.vue?vue&type=style&index=0&id=342a570e&scoped=true&lang=css& */ "./static/app.vue?vue&type=style&index=0&id=342a570e&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ]
        )(
          _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ],
          _app_vue_vue_type_template_id_342a570e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _app_vue_vue_type_template_id_342a570e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          "342a570e",
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/app.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/app.vue?vue&type=script&lang=js&":
      /*!*************************************************!*\
  !*** ./static/app.vue?vue&type=script&lang=js& ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/app.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          "default"
        ] =
          _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ];

        /***/
      },

    /***/ "./static/app.vue?vue&type=style&index=0&id=342a570e&scoped=true&lang=css&":
      /*!*********************************************************************************!*\
  !*** ./static/app.vue?vue&type=style&index=0&id=342a570e&scoped=true&lang=css& ***!
  \*********************************************************************************/
      /*! no static exports found */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_342a570e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&id=342a570e&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/app.vue?vue&type=style&index=0&id=342a570e&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_342a570e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_342a570e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_342a570e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
          if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
            (function (key) {
              __webpack_require__.d(__webpack_exports__, key, function () {
                return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_id_342a570e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[
                  key
                ];
              });
            })(__WEBPACK_IMPORT_KEY__);

        /***/
      },

    /***/ "./static/app.vue?vue&type=template&id=342a570e&scoped=true&":
      /*!*******************************************************************!*\
  !*** ./static/app.vue?vue&type=template&id=342a570e&scoped=true& ***!
  \*******************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_342a570e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=342a570e&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/app.vue?vue&type=template&id=342a570e&scoped=true&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_342a570e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_342a570e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /***/ "./static/appInfo.vue":
      /*!****************************!*\
  !*** ./static/appInfo.vue ***!
  \****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _appInfo_vue_vue_type_template_id_0e84eddc___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./appInfo.vue?vue&type=template&id=0e84eddc& */ "./static/appInfo.vue?vue&type=template&id=0e84eddc&"
          );
        /* harmony import */ var _appInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./appInfo.vue?vue&type=script&lang=js& */ "./static/appInfo.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[
            "default"
          ]
        )(
          _appInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ],
          _appInfo_vue_vue_type_template_id_0e84eddc___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _appInfo_vue_vue_type_template_id_0e84eddc___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          null,
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/appInfo.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/appInfo.vue?vue&type=script&lang=js&":
      /*!*****************************************************!*\
  !*** ./static/appInfo.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./appInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/appInfo.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          "default"
        ] =
          _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ];

        /***/
      },

    /***/ "./static/appInfo.vue?vue&type=template&id=0e84eddc&":
      /*!***********************************************************!*\
  !*** ./static/appInfo.vue?vue&type=template&id=0e84eddc& ***!
  \***********************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_appInfo_vue_vue_type_template_id_0e84eddc___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./appInfo.vue?vue&type=template&id=0e84eddc& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/appInfo.vue?vue&type=template&id=0e84eddc&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_appInfo_vue_vue_type_template_id_0e84eddc___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_appInfo_vue_vue_type_template_id_0e84eddc___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /***/ "./static/appShow.vue":
      /*!****************************!*\
  !*** ./static/appShow.vue ***!
  \****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _appShow_vue_vue_type_template_id_2090b6aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./appShow.vue?vue&type=template&id=2090b6aa&scoped=true& */ "./static/appShow.vue?vue&type=template&id=2090b6aa&scoped=true&"
          );
        /* harmony import */ var _appShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./appShow.vue?vue&type=script&lang=js& */ "./static/appShow.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony import */ var _appShow_vue_vue_type_style_index_0_id_2090b6aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./appShow.vue?vue&type=style&index=0&id=2090b6aa&scoped=true&lang=css& */ "./static/appShow.vue?vue&type=style&index=0&id=2090b6aa&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ]
        )(
          _appShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ],
          _appShow_vue_vue_type_template_id_2090b6aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _appShow_vue_vue_type_template_id_2090b6aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          "2090b6aa",
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/appShow.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/appShow.vue?vue&type=script&lang=js&":
      /*!*****************************************************!*\
  !*** ./static/appShow.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./appShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/appShow.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          "default"
        ] =
          _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ];

        /***/
      },

    /***/ "./static/appShow.vue?vue&type=style&index=0&id=2090b6aa&scoped=true&lang=css&":
      /*!*************************************************************************************!*\
  !*** ./static/appShow.vue?vue&type=style&index=0&id=2090b6aa&scoped=true&lang=css& ***!
  \*************************************************************************************/
      /*! no static exports found */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_appShow_vue_vue_type_style_index_0_id_2090b6aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./appShow.vue?vue&type=style&index=0&id=2090b6aa&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/appShow.vue?vue&type=style&index=0&id=2090b6aa&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_appShow_vue_vue_type_style_index_0_id_2090b6aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_appShow_vue_vue_type_style_index_0_id_2090b6aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_appShow_vue_vue_type_style_index_0_id_2090b6aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
          if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
            (function (key) {
              __webpack_require__.d(__webpack_exports__, key, function () {
                return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_appShow_vue_vue_type_style_index_0_id_2090b6aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[
                  key
                ];
              });
            })(__WEBPACK_IMPORT_KEY__);

        /***/
      },

    /***/ "./static/appShow.vue?vue&type=template&id=2090b6aa&scoped=true&":
      /*!***********************************************************************!*\
  !*** ./static/appShow.vue?vue&type=template&id=2090b6aa&scoped=true& ***!
  \***********************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_appShow_vue_vue_type_template_id_2090b6aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./appShow.vue?vue&type=template&id=2090b6aa&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/appShow.vue?vue&type=template&id=2090b6aa&scoped=true&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_appShow_vue_vue_type_template_id_2090b6aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_appShow_vue_vue_type_template_id_2090b6aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /***/ "./static/audio.js":
      /*!*************************!*\
  !*** ./static/audio.js ***!
  \*************************/
      /*! exports provided: getDuringSpinSounds, getAfterSpinSounds, playTick, playClick, playAfterSpin, startMusic, stopMusic, preloadSounds */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getDuringSpinSounds",
          function () {
            return getDuringSpinSounds;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getAfterSpinSounds",
          function () {
            return getAfterSpinSounds;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "playTick",
          function () {
            return playTick;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "playClick",
          function () {
            return playClick;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "playAfterSpin",
          function () {
            return playAfterSpin;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "startMusic",
          function () {
            return startMusic;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "stopMusic",
          function () {
            return stopMusic;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "preloadSounds",
          function () {
            return preloadSounds;
          }
        );
        /* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! howler */ "./node_modules/howler/dist/howler.js"
          );
        /* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            howler__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./Util.js */ "./static/Util.js");
        /* harmony import */ var _third_party_soundbible_SMALL_CROWD_APPLAUSE_Yannick_Lemieux_1268806408_mp3__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./third_party/soundbibleSMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3 */ "static/third_party/soundbibleSMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3"
          );
        /* harmony import */ var _ding_mp3__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! .ding.mp3 */ "staticding.mp3");
        /* harmony import */ var _third_party_soundbible_Tick_DeepFrozenApps_397275646_mp3__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./third_party/soundbibleTick-DeepFrozenApps-397275646.mp3 */ "static/third_party/soundbibleTick-DeepFrozenApps-397275646.mp3"
          );
        /* harmony import */ var _third_party_filmmusic_io_strength_of_the_titans_by_kevin_macleod_from_filmmusic_io_mp3__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./third_party/filmmusic-iostrength-of-the-titans-by-kevin-macleod-from-filmmusic-io.mp3 */ "static/third_party/filmmusic-iostrength-of-the-titans-by-kevin-macleod-from-filmmusic-io.mp3"
          );
        /* harmony import */ var _third_party_filmmusic_io_amazing_plan_by_kevin_macleod_from_filmmusic_io_mp3__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./third_party/filmmusic-ioamazing-plan-by-kevin-macleod-from-filmmusic-io.mp3 */ "static/third_party/filmmusic-ioamazing-plan-by-kevin-macleod-from-filmmusic-io.mp3"
          );
        /* harmony import */ var _third_party_filmmusic_io_life_of_riley_by_kevin_macleod_from_filmmusic_io_mp3__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./third_party/filmmusic-iolife-of-riley-by-kevin-macleod-from-filmmusic-io.mp3 */ "static/third_party/filmmusic-iolife-of-riley-by-kevin-macleod-from-filmmusic-io.mp3"
          );
        /* harmony import */ var _third_party_freesound_350428_benjaminharveydesign_trumpet_fanfare_mp3__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./third_party/freesound350428__benjaminharveydesign__trumpet-fanfare.mp3 */ "static/third_party/freesound350428__benjaminharveydesign__trumpet-fanfare.mp3"
          );
        /* harmony import */ var _third_party_freesound_370743_podsburgh_winner_metal_bell_ringing_remix_mp3__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./third_party/freesound370743__podsburgh__winner-metal-bell-ringing-remix.mp3 */ "static/third_party/freesound370743__podsburgh__winner-metal-bell-ringing-remix.mp3"
          );
        /* harmony import */ var _third_party_freesound_425432_trivialaccapella_18_crash_hit_soft_mp3__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ./third_party/freesound425432__trivialaccapella__18-crash-hit-soft.mp3 */ "static/third_party/freesound425432__trivialaccapella__18-crash-hit-soft.mp3"
          );
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

        var sounds = {};
        var musicPlayingNow;
        var duringSpinSounds = [
          {
            name: "sounds.No sound",
            value: "no-sound",
          },
          {
            name: "sounds.Ticking sound",
            value: "ticking-sound",
          },
          {
            name: "sounds.Dramatic music",
            value: "dramatic-music",
            musicFile:
              "strength-of-the-titans-by-kevin-macleod-from-filmmusic-io.mp3",
          },
          {
            name: "sounds.Piano music",
            value: "piano-music",
            musicFile: "amazing-plan-by-kevin-macleod-from-filmmusic-io.mp3",
          },
          {
            name: "sounds.Cheerful music",
            value: "cheerful-music",
            musicFile: "life-of-riley-by-kevin-macleod-from-filmmusic-io.mp3",
          },
        ];
        var afterSpinSounds = [
          {
            name: "sounds.No sound",
            value: "no-sound",
          },
          {
            name: "sounds.Applause",
            value: "applause-sound",
            file: "SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3",
          },
          {
            name: "sounds.Fanfare",
            value: "fanfare-sound",
            file: "350428__benjaminharveydesign__trumpet-fanfare.mp3",
          },
          {
            name: "sounds.Bell ringing",
            value: "bell-sound",
            file: "370743__podsburgh__winner-metal-bell-ringing-remix.mp3",
          },
          {
            name: "sounds.Cymbals",
            value: "cymbal-sound",
            file: "425432__trivialaccapella__18-crash-hit-soft.mp3",
          },
          {
            name: "sounds.Read out the winning name",
            value: "read-winner-sound",
          },
        ];
        function getDuringSpinSounds() {
          return duringSpinSounds;
        }
        function getAfterSpinSounds() {
          return afterSpinSounds;
        }
        function playTick() {
          playSound("ding.mp3");
        }
        function playClick() {
          playSound("Tick-DeepFrozenApps-397275646.mp3");
        }
        function playAfterSpin(trackName, winningEntry) {
          if (trackName == "read-winner-sound") {
            if (window.speechSynthesis) {
              var utterThis = new SpeechSynthesisUtterance(winningEntry);
              window.speechSynthesis.speak(utterThis);
            }
          } else {
            var file = afterSpinSounds.find(function (sound) {
              return sound.value == trackName;
            }).file;
            if (file) playSound(file);
          }
        }
        function startMusic(trackName) {
          var file = duringSpinSounds.find(function (sound) {
            return sound.value == trackName;
          }).musicFile;
          if (file)
            musicPlayingNow = new Howl({
              src: [file],
              autoplay: true,
            });
        }
        function stopMusic() {
          if (musicPlayingNow) musicPlayingNow.fade(1, 0, 1000);
          musicPlayingNow = null;
        }
        function playSound(soundName) {
          try {
            if (sounds[soundName]) {
              sounds[soundName].play();
            } else {
              sounds[soundName] = new Howl({
                src: [soundName],
                autoplay: true,
              });
            }
          } catch (ex) {
            _Util_js__WEBPACK_IMPORTED_MODULE_1__["trackException"](ex);
          }
        }
        function preloadSounds(duringSpinSound, afterSpinSound) {
          try {
            preloadFile(
              duringSpinSounds.find(function (sound) {
                return sound.value == duringSpinSound;
              }).musicFile
            );
            if (duringSpinSound == "ticking-sound") preloadFile("ding.mp3");
            preloadFile(
              afterSpinSounds.find(function (sound) {
                return sound.value == afterSpinSound;
              }).file
            );
          } catch (ex) {
            _Util_js__WEBPACK_IMPORTED_MODULE_1__["trackException"](ex);
          }
        }
        function preloadFile(file) {
          if (file && !sounds[file]) {
            sounds[file] = new Howl({
              src: [file],
            });
          }
        }

        /***/
      },

    /***/ "./static/bottom.vue":
      /*!***************************!*\
  !*** ./static/bottom.vue ***!
  \***************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _bottom_vue_vue_type_template_id_15a69f64_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./bottom.vue?vue&type=template&id=15a69f64&scoped=true& */ "./static/bottom.vue?vue&type=template&id=15a69f64&scoped=true&"
          );
        /* harmony import */ var _bottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./bottom.vue?vue&type=script&lang=js& */ "./static/bottom.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony import */ var _bottom_vue_vue_type_style_index_0_id_15a69f64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./bottom.vue?vue&type=style&index=0&id=15a69f64&scoped=true&lang=css& */ "./static/bottom.vue?vue&type=style&index=0&id=15a69f64&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ]
        )(
          _bottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ],
          _bottom_vue_vue_type_template_id_15a69f64_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _bottom_vue_vue_type_template_id_15a69f64_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          "15a69f64",
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/bottom.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/bottom.vue?vue&type=script&lang=js&":
      /*!****************************************************!*\
  !*** ./static/bottom.vue?vue&type=script&lang=js& ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./bottom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/bottom.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          "default"
        ] =
          _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ];

        /***/
      },

    /***/ "./static/bottom.vue?vue&type=style&index=0&id=15a69f64&scoped=true&lang=css&":
      /*!************************************************************************************!*\
  !*** ./static/bottom.vue?vue&type=style&index=0&id=15a69f64&scoped=true&lang=css& ***!
  \************************************************************************************/
      /*! no static exports found */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_style_index_0_id_15a69f64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./bottom.vue?vue&type=style&index=0&id=15a69f64&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/bottom.vue?vue&type=style&index=0&id=15a69f64&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_style_index_0_id_15a69f64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_style_index_0_id_15a69f64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_style_index_0_id_15a69f64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
          if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
            (function (key) {
              __webpack_require__.d(__webpack_exports__, key, function () {
                return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_style_index_0_id_15a69f64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[
                  key
                ];
              });
            })(__WEBPACK_IMPORT_KEY__);

        /***/
      },

    /***/ "./static/bottom.vue?vue&type=template&id=15a69f64&scoped=true&":
      /*!**********************************************************************!*\
  !*** ./static/bottom.vue?vue&type=template&id=15a69f64&scoped=true& ***!
  \**********************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_template_id_15a69f64_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./bottom.vue?vue&type=template&id=15a69f64&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/bottom.vue?vue&type=template&id=15a69f64&scoped=true&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_template_id_15a69f64_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_bottom_vue_vue_type_template_id_15a69f64_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /***/ "./static/colorThemeList.js":
      /*!**********************************!*\
  !*** ./static/colorThemeList.js ***!
  \**********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
        exports.list = {
          Abstract: {
            "Anonymous citation": [
              "#9DC3CA",
              "#B7D4C6",
              "#B7D4C6",
              "#EFECE1",
              "#EDD5C8",
              "#F2C0C5",
            ],
            "Black to blue": [
              "#010101",
              "#011926",
              "#003E5C",
              "#016293",
              "#007BB8",
            ],
            "Centered truth": [
              "#775E56",
              "#E4E1AF",
              "#FF9263",
              "#FF6455",
              "#7C687D",
            ],
            "Cool blues & oranges": [
              "#3C8BEC",
              "#7EBEF6",
              "#FED8B1",
              "#F88102",
              "#F95701",
            ],
            "Dead ennui": ["#85A18C", "#F6FDDF", "#FFECCD", "#F2B783"],
            "Information blues": ["#90B0AB", "#CBCAC0", "#DEDAD6", "#5F729A"],
            "Lavender to dark blue": [
              "#FFBAFF",
              "#DE87FF",
              "#A455FF",
              "#681DFF",
              "#1000CA",
              "#000098",
            ],
            "Offbeat recognition": [
              "#F1647A",
              "#F3F1DB",
              "#74CBCC",
              "#27ABB2",
              "#C1D765",
              "#80C544",
            ],
            "Office hours": [
              "#DE7373",
              "#F0DC9F",
              "#DEBB89",
              "#7787AE",
              "#43487B",
            ],
            "Party fun": [
              "#891180",
              "#EA27A2",
              "#FB9390",
              "#F6C892",
              "#FFF5BD",
              "#FDFFDE",
            ],
            "Pastel tones": [
              "#E0BBE4",
              "#957DAD",
              "#D291BC",
              "#FEC8D8",
              "#FFDFD3",
            ],
            "Perfect feminine": [
              "#C09BE3",
              "#F6E0C7",
              "#F0C589",
              "#EA9A5D",
              "#EA6D63",
              "#E33F64",
            ],
            "Slumber party": ["#278DF0", "#FFEF93", "#FF96E1", "#9B78FC"],
            "Teasing questions": [
              "#C75589",
              "#E369A4",
              "#F5CC22",
              "#F6EF2D",
              "#B2E792",
              "#82D07B",
            ],
            "Turquoise to blue": [
              "#00FEEF",
              "#09EBEE",
              "#19CEEB",
              "#28ACEA",
              "#388EE9",
              "#3D76E0",
            ],
          },
          Brands: {
            Asana: ["#3be8b0", "#1aafd0", "#6a67ce", "#ffb900", "#fc636b"],
            Baidu: ["#de0f17", "#2529d8"],
            Barclays: ["#00aeef", "#00395d"],
            "Booking.com": [
              "#003580",
              "#009fe3",
              "#feba02",
              "#666666",
              "#f2f6fa",
            ],
            "British Airways": [
              "#075aaa",
              "#eb2226",
              "#01295c",
              "#efe9e5",
              "#aca095",
              "#b9cfed",
            ],
            "Burger King": ["#ec1c24", "#fdbd10", "#0066b2", "#ed7902"],
            CNN: ["#cc0000", "#000000", "#282828", "#464646"],
            "Delta Airlines": ["#c8102e", "#862633", "#003a70"],
            Discord: ["#7289da", "#99aab5", "#2c2f33", "#23272a"],
            Dropbox: ["#007ee5", "#7b8994", "#47525d", "#3d464d"],
            Drupal: ["#0077c0", "#81ceff", "#00598e"],
            "E*TRADE": ["#6633cc", "#99cc00"],
            Fedex: ["#4d148c", "#ff6600"],
            Firefox: [
              "#e66000",
              "#ff9500",
              "#ffcb00",
              "#00539f",
              "#0095dd",
              "#331e54",
            ],
            Google: ["#3369E8", "#D50F25", "#EEB211", "#009925"],
            "Google Earth logo": [
              "#F5F5F5",
              "#C4E1FF",
              "#91BFFF",
              "#4285F4",
              "#255FDB",
            ],
            "Google Maps": [
              "#D5D8DB",
              "#E8E8E8",
              "#C3ECB2",
              "#AADAFF",
              "#FFF2AF",
              "#F6CF65",
            ],
            "Google Sheets UI": [
              "#00A568",
              "#85D1B2",
              "#F8F9FA",
              "#C2C3C5",
              "#5F6368",
            ],
            Heineken: ["#008200", "#205527", "#ff2b00", "#c3c3c3"],
            Heroku: ["#c9c3e6", "#6762a6"],
            IKEA: ["#ffcc00", "#003399"],
            LEGO: ["#f6ec35", "#d11013", "#000000"],
            LinkedIn: [
              "#0077b5",
              "#000000",
              "#313335",
              "#86888a",
              "#caccce",
              "#00a0dc",
            ],
            "London Underground": ["#000099", "#cc3333"],
            "Lowe's": ["#004990", "#15b6e5"],
            Lyft: ["#ff00bf", "#352384", "#333447", "#f3f3f5"],
            "McDonald's": [
              "#bf0c0c",
              "#e76a05",
              "#ffc600",
              "#47bc00",
              "#05007b",
              "#9748a8",
            ],
            Microsoft: ["#f65314", "#7cbb00", "#00a1f1", "#ffbb00"],
            MIT: ["#a31f34", "#8a8b8c", "#c2c0bf"],
            Mozilla: ["#c13832", "#d7d3c8", "#4d4e53", "#", "#", "#"],
            NASA: ["#fc3d21", "#0b3d91"],
            NASCAR: ["#ffd659", "#e4002b", "#007ac2"],
            "National Geographic": ["#ffcc00", "#000000"],
            NBC: [
              "#e1ac26",
              "#dc380f",
              "#9f0812",
              "#6347b2",
              "#368dd5",
              "#70af1e",
            ],
            Nest: ["#00afd8", "#7b858e"],
            Netflix: ["#e50914", "#221f1f"],
            Oracle: ["#ff0000", "#000000", "#7f7f7f"],
            "Pizza Hut": ["#ee3124", "#00a160", "#ffc425"],
            Polaroid: ["#00a3e2", "#1ba548", "#fdc800", "#f1860e", "#e41b13"],
            Python: ["#ffde57", "#4584b6", "#646464"],
            Reddit: ["#ff4500", "#5f99cf", "#cee3f8"],
            "Residence Inn": [
              "#b32317",
              "#f58025",
              "#3a6e8f",
              "#87b2d8",
              "#8d8b00",
              "#c1d72f",
            ],
            "Ritz-Carlton": ["#006b95", "#4f5b65", "#b3812a", "#a01a1f"],
            "Rolls-Royce": ["#680021", "#fffaec", "#939598", "#000000"],
            Ryanair: ["#073590", "#f1c933", "#2091eb"],
            Salesforce: ["#1798c1", "#ff1100"],
            Slack: ["#6ecadc", "#e9a820", "#e01563", "#3eb991"],
            Spotify: ["#1db954", "#ffffff", "#000000"],
            "Stack Exchange": ["#1e5397", "#376db6", "#4ca2da", "#91d8f4"],
            Staples: ["#cc0000", "#2c8aec", "#ffcc00"],
            Subway: ["#489e3b", "#fabd42", "#cd0a20"],
            Twitch: ["#6441a5", "#b9a3e3", "#262626", "#f1f1f1"],
            Twitter: [
              "#1da1f2",
              "#14171a",
              "#657786",
              "#aab8c2",
              "#e1e8ed",
              "#f5f8fa",
            ],
            Uber: ["#09091a", "#c0c0c8", "#1fbad6"],
            Ubuntu: [
              "#dd4814",
              "#77216f",
              "#5e2750",
              "#2c001e",
              "#aea79f",
              "#333333",
            ],
            Volvo: [
              "#003057",
              "#115740",
              "#65665c",
              "#425563",
              "#517891",
              "#212721",
            ],
            Walgreens: ["#e31837", "#f37520", "#489cd4", "#2774a6", "#35393d"],
            Wikimedia: ["#339966", "#0063bf", "#990000"],
            Zapier: [
              "#ff4a00",
              "#fd7622",
              "#ffc43e",
              "#5f6c72",
              "#499df3",
              "#13d0ab",
            ],
          },
          Default: {
            Default: ["#3369E8", "#D50F25", "#EEB211", "#009925"],
          },
          Flags: {
            Australia: ["#00008B", "#FFFFFF", "#FF0000"],
            Belgium: ["#000000", "#FDDA24", "#EF3340"],
            Canada: ["#FF0000", "#FFFFFF"],
            Denmark: ["#C60C30", "#FFFFFF"],
            Finland: ["#002F6C", "#FFFFFF"],
            France: ["#0055A4", "#FFFFFF", "#EF4135"],
            Germany: ["#000000", "#DD0000", "#FFCE00"],
            "Hong Kong": ["#DE2408", "#FFFFFF"],
            India: ["#FF9933", "#FFFFFF", "#138808", "#000080"],
            Indonesia: ["#FF0000", "#FFFFFF"],
            Ireland: ["#169B62", "#FFFFFF", "#FF883E"],
            Malaysia: ["#010066", "#CC0001", "#FFFFFF", "#FFCC00"],
            Mexico: ["#006341", "#FFFFFF", "#CE1126"],
            Netherlands: ["#AE1C28", "#FFFFFF", "#21468B"],
            "New Zealand": ["#00247D", "#FFFFFF", "#CC142B"],
            Norway: ["#C8102E", "#FFFFFF", "#003087"],
            Philippines: ["#FCD116", "#0038A8", "#CE1126", "#FFFFFF"],
            Singapore: ["#EF3340", "#FFFFFF"],
            Spain: ["#AA151B", "#F1BF00"],
            Sweden: ["#004B87", "#FFCD00"],
            Thailand: ["#A51931", "#F4F5F8", "#2D2A4A"],
            "United Arab Emirates": [
              "#FF0000",
              "#00732F",
              "#FFFFFF",
              "#000000",
            ],
            "United Kingdom": ["#00247D", "#FFFFFF", "#CF142B"],
            "United States": ["#3C3B6E", "#FFFFFF", "#B22234"],
            Vietnam: ["#DA251D", "#FFCD00"],
          },
          Games: {
            "Candy Crush": [
              "#D98121",
              "#EDB23F",
              "#F5D346",
              "#F7E1B4",
              "#FAF4DC",
              "#D3151C",
            ],
            Candyland: ["#fbd7e7", "#eeddec", "#e1e3f1", "#d4e9f6", "#c7effb"],
            Fortnite: ["#E98F5C", "#B448F0", "#2AC9FA", "#F9E36E", "#C7C9D6"],
            "Mario & Luigi": [
              "#5a98e1",
              "#139334",
              "#cea900",
              "#fe130f",
              "#095cd4",
              "#16b65c",
            ],
            Minecraft: [
              "#477A1E",
              "#70B237",
              "#8FCA5C",
              "#61371F",
              "#854F2B",
              "#C28340",
            ],
            Monopoly: ["#C70000", "#BFDBAE", "#8FBC72", "#FFFFFF", "#D7BAAA"],
            Overwatch: ["#f99e1a", "#43484c", "#405275", "#218ffe", "#000000"],
            Pikachu: ["#FAD61D", "#E19720", "#F62D14", "#811E09", "#000000"],
            "Rocket League": ["#008BFF", "#FF8B00"],
            "The Crew 2": ["#FFDB15", "#FB8018", "#FB1257", "#01CDF9"],
          },
          Holidays: {
            Christmas: [
              "#348228",
              "#469A47",
              "#DAF7FF",
              "#FFFAFA",
              "#EB2029",
              "#D70816",
            ],
            "Earth Day": [
              "#11205B",
              "#E9E9E9",
              "#8F705E",
              "#BF9269",
              "#F0C951",
              "#3C6F36",
            ],
            Easter: ["#367D83", "#BADBD2", "#F47A97", "#F3EB9A", "#E9C05F"],
            Halloween: ["#F36A1F", "#F3861F", "#000000"],
            "New Year": ["#FFDF00", "#FFCC00", "#ECBD00", "#CC9900", "#B8860B"],
            "Saint Patrick's Day": ["#008001", "#228B22", "#00AD43"],
            Thanksgiving: [
              "#FDC149",
              "#E7A755",
              "#873826",
              "#61782A",
              "#D64F06",
              "#BBB300",
            ],
          },
          Nature: {
            "Antarctica evening": [
              "#F4D3C4",
              "#F2AEBB",
              "#D895DA",
              "#A091D6",
              "#696FC7",
              "#A7AAE1",
            ],
            "Beach sunset": [
              "#3C47C6",
              "#656CDE",
              "#DE6CC8",
              "#F8A091",
              "#F7E392",
              "#F7A55D",
            ],
            "Desert scene": [
              "#FAD381",
              "#D79F62",
              "#2E4647",
              "#518D6A",
              "#9BC692",
            ],
            "Evening sky": [
              "#001F38",
              "#526079",
              "#9A7E8E",
              "#E3757F",
              "#FD997F",
              "#FFD0AA",
            ],
            "Fresh meadow": [
              "#84A013",
              "#A8BB2E",
              "#D4DA5E",
              "#EBEF90",
              "#FBFDBC",
              "#FAC703",
            ],
            "Fruit tones": [
              "#E9692C",
              "#ED9121",
              "#FFC324",
              "#FFF000",
              "#66B447",
              "#8EE53F",
            ],
            Giraffe: ["#F0ECE1", "#EDCF8F", "#C97F4E", "#6F4A38", "#977359"],
            Jellyfish: [
              "#3EA1B6",
              "#0E6B8C",
              "#133855",
              "#6B669E",
              "#BB90C8",
              "#EFD8EC",
            ],
            Jungle: [
              "#135E46",
              "#478966",
              "#73A788",
              "#E3C6AD",
              "#D09D7B",
              "#B67B65",
            ],
            "Koi fish": ["#F16323", "#F2F3F4", "#FFD021", "#E34427"],
            Monsoon: ["#01A8CA", "#32D1EC", "#F1F1F1", "#AFDFF3"],
            Moon: ["#31302E", "#94908D", "#DAD9D7", "#F0F0F0", "#C3C2BE"],
            "Purple horizon": [
              "#b7b8f9",
              "#3a1f8a",
              "#2c1357",
              "#462867",
              "#593b6a",
            ],
            Rainbow: [
              "#5E02E9",
              "#3C70EF",
              "#30D800",
              "#E7E200",
              "#FD8B00",
              "#F20800",
            ],
            "Red desert": [
              "#99857A",
              "#C67B5C",
              "#E27B58",
              "#FF9D6F",
              "#663926",
              "#8E6A5A",
            ],
            "Red sunset": [
              "#761000",
              "#C10900",
              "#E92100",
              "#FFDB53",
              "#FFA93D",
              "#FF7A29",
            ],
            "Sandy beach": [
              "#9FE2BF",
              "#FFE5C6",
              "#EFCDB4",
              "#4BC7CF",
              "#5CF5FF",
            ],
            Sun: ["#FFFFFF", "#FFE484", "#FFCC33", "#FC9601", "#D14009"],
            Underwater: ["#4F42B5", "#82E1E3", "#D4F1F9", "#E3FFFA", "#4CC395"],
            "Water lilies": [
              "#448036",
              "#5C9550",
              "#FBBA37",
              "#EE6BA4",
              "#F192B5",
              "#F4B0C7",
            ],
          },
          Seasons: {
            "Fall green": [
              "#529106",
              "#61A307",
              "#86B71B",
              "#B9BD00",
              "#8EA202",
              "#799203",
            ],
            "Fall leaves": [
              "#BA4634",
              "#D85C4E",
              "#EAA250",
              "#F5DD8B",
              "#CEC218",
              "#5F7818",
            ],
            "Fall road": [
              "#A05A48",
              "#563633",
              "#6D463C",
              "#D6BD9D",
              "#D19E6D",
              "#C57D56",
            ],
            "Fall yellow": [
              "#DC7C00",
              "#FF9705",
              "#FEB20A",
              "#FFCB00",
              "#FEDF05",
            ],
            "Spring gentle": [
              "#C3D4C1",
              "#FFFFE5",
              "#B4D2A4",
              "#95BC83",
              "#F6EAD3",
            ],
            "Spring green beauty": [
              "#F99825",
              "#F5C527",
              "#CFFA6B",
              "#9EEC1C",
              "#89DF42",
              "#75CB00",
            ],
            "Spring pastels": [
              "#94DE8B",
              "#B19CD9",
              "#F4A8CF",
              "#F4C3D7",
              "#FDFD96",
              "#B6E7B9",
            ],
            "Spring pink": [
              "#E25157",
              "#F5808F",
              "#FFACCC",
              "#FFCBDF",
              "#EBF0EA",
              "#93C64E",
            ],
            "Summer buzz": [
              "#3BAED5",
              "#5CC8E2",
              "#FDE683",
              "#E66C1E",
              "#D52210",
            ],
            "Summer carnival": [
              "#01A7EC",
              "#FFFF46",
              "#FFC94B",
              "#FE8F5D",
              "#FE47B3",
              "#80DA65",
            ],
            "Summer is hot": [
              "#BF221C",
              "#E8681F",
              "#FBC44F",
              "#FFE67F",
              "#FDFFD2",
              "#F9F500",
            ],
            "Summer pool party": [
              "#0198F1",
              "#49C2FF",
              "#A9EEFF",
              "#0067D4",
              "#E999DE",
              "#7C62C4",
            ],
            "Winter blues": [
              "#2377A4",
              "#50A3C6",
              "#79C0D7",
              "#F8F8F8",
              "#DDDFDF",
              "#C2C2C2",
            ],
            "Winter camouflage": [
              "#7C7C7C",
              "#0E1317",
              "#ACDEF8",
              "#344A78",
              "#FDFAFC",
              "#D6D6D6",
            ],
            "Winter growth": ["#383159", "#656DA6", "#C5E1F2", "#52734F"],
            "Winter wonderland": [
              "#23644D",
              "#D3F1F3",
              "#FFFFFF",
              "#E22A45",
              "#C7102E",
            ],
          },
        };

        /***/
      },

    /***/ "staticding.mp3":
      /*!*************************!*\
  !*** staticding.mp3 ***!
  \*************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p + "ding.mp3";

        /***/
      },

    /***/ "./static/entry-counter.vue":
      /*!**********************************!*\
  !*** ./static/entry-counter.vue ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _entry_counter_vue_vue_type_template_id_810df364_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./entry-counter.vue?vue&type=template&id=810df364&scoped=true& */ "./static/entry-counter.vue?vue&type=template&id=810df364&scoped=true&"
          );
        /* harmony import */ var _entry_counter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./entry-counter.vue?vue&type=script&lang=js& */ "./static/entry-counter.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony import */ var _entry_counter_vue_vue_type_style_index_0_id_810df364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./entry-counter.vue?vue&type=style&index=0&id=810df364&scoped=true&lang=css& */ "./static/entry-counter.vue?vue&type=style&index=0&id=810df364&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ]
        )(
          _entry_counter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ],
          _entry_counter_vue_vue_type_template_id_810df364_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _entry_counter_vue_vue_type_template_id_810df364_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          "810df364",
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/entry-counter.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/entry-counter.vue?vue&type=script&lang=js&":
      /*!***********************************************************!*\
  !*** ./static/entry-counter.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./entry-counter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/entry-counter.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          "default"
        ] =
          _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ];

        /***/
      },

    /***/ "./static/entry-counter.vue?vue&type=style&index=0&id=810df364&scoped=true&lang=css&":
      /*!*******************************************************************************************!*\
  !*** ./static/entry-counter.vue?vue&type=style&index=0&id=810df364&scoped=true&lang=css& ***!
  \*******************************************************************************************/
      /*! no static exports found */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_style_index_0_id_810df364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./entry-counter.vue?vue&type=style&index=0&id=810df364&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/entry-counter.vue?vue&type=style&index=0&id=810df364&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_style_index_0_id_810df364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_style_index_0_id_810df364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_style_index_0_id_810df364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
          if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
            (function (key) {
              __webpack_require__.d(__webpack_exports__, key, function () {
                return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_style_index_0_id_810df364_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[
                  key
                ];
              });
            })(__WEBPACK_IMPORT_KEY__);

        /***/
      },

    /***/ "./static/entry-counter.vue?vue&type=template&id=810df364&scoped=true&":
      /*!*****************************************************************************!*\
  !*** ./static/entry-counter.vue?vue&type=template&id=810df364&scoped=true& ***!
  \*****************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_template_id_810df364_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./entry-counter.vue?vue&type=template&id=810df364&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/entry-counter.vue?vue&type=template&id=810df364&scoped=true&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_template_id_810df364_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_entry_counter_vue_vue_type_template_id_810df364_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /***/ "./static/faq.vue":
      /*!************************!*\
  !*** ./static/faq.vue ***!
  \************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _faq_vue_vue_type_template_id_231ee583_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./faq.vue?vue&type=template&id=231ee583&scoped=true& */ "./static/faq.vue?vue&type=template&id=231ee583&scoped=true&"
          );
        /* harmony import */ var _faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./faq.vue?vue&type=script&lang=js& */ "./static/faq.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony import */ var _faq_vue_vue_type_style_index_0_id_231ee583_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./faq.vue?vue&type=style&index=0&id=231ee583&scoped=true&lang=css& */ "./static/faq.vue?vue&type=style&index=0&id=231ee583&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ]
        )(
          _faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ],
          _faq_vue_vue_type_template_id_231ee583_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _faq_vue_vue_type_template_id_231ee583_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          "231ee583",
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/faq.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/faq.vue?vue&type=script&lang=js&":
      /*!*************************************************!*\
  !*** ./static/faq.vue?vue&type=script&lang=js& ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./faq.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/faq.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          "default"
        ] =
          _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ];

        /***/
      },

    /***/ "./static/faq.vue?vue&type=style&index=0&id=231ee583&scoped=true&lang=css&":
      /*!*********************************************************************************!*\
  !*** ./static/faq.vue?vue&type=style&index=0&id=231ee583&scoped=true&lang=css& ***!
  \*********************************************************************************/
      /*! no static exports found */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_style_index_0_id_231ee583_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./faq.vue?vue&type=style&index=0&id=231ee583&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/faq.vue?vue&type=style&index=0&id=231ee583&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_style_index_0_id_231ee583_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_style_index_0_id_231ee583_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_style_index_0_id_231ee583_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
          if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
            (function (key) {
              __webpack_require__.d(__webpack_exports__, key, function () {
                return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_style_index_0_id_231ee583_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[
                  key
                ];
              });
            })(__WEBPACK_IMPORT_KEY__);

        /***/
      },

    /***/ "./static/faq.vue?vue&type=template&id=231ee583&scoped=true&":
      /*!*******************************************************************!*\
  !*** ./static/faq.vue?vue&type=template&id=231ee583&scoped=true& ***!
  \*******************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_template_id_231ee583_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./faq.vue?vue&type=template&id=231ee583&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/faq.vue?vue&type=template&id=231ee583&scoped=true&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_template_id_231ee583_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_template_id_231ee583_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /***/ "./static/galleryImageList.js":
      /*!************************************!*\
  !*** ./static/galleryImageList.js ***!
  \************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
        exports.list = [
          {
            fileName: "images/camera.png",
            title: "Camera",
          },
          {
            fileName: "images/cat.png",
            title: "Cat",
          },
          {
            fileName: "images/dog.png",
            title: "Dog",
          },
          {
            fileName: "images/dollar-sign.png",
            title: "Dollar sign",
          },
          {
            fileName: "images/dragon.png",
            title: "Dragon",
          },
        ];

        /***/
      },

    /***/ "./static/hotwheels.vue":
      /*!******************************!*\
  !*** ./static/hotwheels.vue ***!
  \******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _hotwheels_vue_vue_type_template_id_a29ca39c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./hotwheels.vue?vue&type=template&id=a29ca39c&scoped=true& */ "./static/hotwheels.vue?vue&type=template&id=a29ca39c&scoped=true&"
          );
        /* harmony import */ var _hotwheels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./hotwheels.vue?vue&type=script&lang=js& */ "./static/hotwheels.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony import */ var _hotwheels_vue_vue_type_style_index_0_id_a29ca39c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./hotwheels.vue?vue&type=style&index=0&id=a29ca39c&scoped=true&lang=css& */ "./static/hotwheels.vue?vue&type=style&index=0&id=a29ca39c&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ]
        )(
          _hotwheels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ],
          _hotwheels_vue_vue_type_template_id_a29ca39c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _hotwheels_vue_vue_type_template_id_a29ca39c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          "a29ca39c",
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/hotwheels.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/hotwheels.vue?vue&type=script&lang=js&":
      /*!*******************************************************!*\
  !*** ./static/hotwheels.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hotwheels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./hotwheels.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/hotwheels.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          "default"
        ] =
          _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hotwheels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ];

        /***/
      },

    /***/ "./static/hotwheels.vue?vue&type=style&index=0&id=a29ca39c&scoped=true&lang=css&":
      /*!***************************************************************************************!*\
  !*** ./static/hotwheels.vue?vue&type=style&index=0&id=a29ca39c&scoped=true&lang=css& ***!
  \***************************************************************************************/
      /*! no static exports found */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hotwheels_vue_vue_type_style_index_0_id_a29ca39c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./hotwheels.vue?vue&type=style&index=0&id=a29ca39c&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/hotwheels.vue?vue&type=style&index=0&id=a29ca39c&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hotwheels_vue_vue_type_style_index_0_id_a29ca39c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hotwheels_vue_vue_type_style_index_0_id_a29ca39c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hotwheels_vue_vue_type_style_index_0_id_a29ca39c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
          if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
            (function (key) {
              __webpack_require__.d(__webpack_exports__, key, function () {
                return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hotwheels_vue_vue_type_style_index_0_id_a29ca39c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[
                  key
                ];
              });
            })(__WEBPACK_IMPORT_KEY__);

        /***/
      },

    /***/ "./static/hotwheels.vue?vue&type=template&id=a29ca39c&scoped=true&":
      /*!*************************************************************************!*\
  !*** ./static/hotwheels.vue?vue&type=template&id=a29ca39c&scoped=true& ***!
  \*************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_hotwheels_vue_vue_type_template_id_a29ca39c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./hotwheels.vue?vue&type=template&id=a29ca39c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/hotwheels.vue?vue&type=template&id=a29ca39c&scoped=true&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_hotwheels_vue_vue_type_template_id_a29ca39c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_hotwheels_vue_vue_type_template_id_a29ca39c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /***/ "./static/hubSizes.js":
      /*!****************************!*\
  !*** ./static/hubSizes.js ***!
  \****************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
        exports.hubSizes = {
          XS: 0.01,
          S: 0.2,
          M: 0.3,
          L: 0.4,
          XL: 0.5,
          XXL: 0.6,
        };

        /***/
      },

    /***/ "./staticimages/404_cat.png":
      /*!***********************************!*\
  !*** ./staticimages/404_cat.png ***!
  \***********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p + "images/404_cat.png";

        /***/
      },

    /***/ "./staticimages/app_screen.png":
      /*!**************************************!*\
  !*** ./staticimages/app_screen.png ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p + "images/app_screen.png";

        /***/
      },

    /***/ "./staticimages/favicon.ico":
      /*!***********************************!*\
  !*** ./staticimages/favicon.ico ***!
  \***********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p + "images/favicon.ico";

        /***/
      },

    /***/ "./staticimages/get-on-appstore.png":
      /*!*******************************************!*\
  !*** ./staticimages/get-on-appstore.png ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p + "images/get-on-appstore.png";

        /***/
      },

    /***/ "./staticimages/get-on-gp.png":
      /*!*************************************!*\
  !*** ./staticimages/get-on-gp.png ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p + "images/get-on-gp.png";

        /***/
      },

    /***/ "./staticimages/hat-with-names.png":
      /*!******************************************!*\
  !*** ./staticimages/hat-with-names.png ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p + "images/hat-with-names.png";

        /***/
      },

    /***/ "./staticimages/none.png":
      /*!********************************!*\
  !*** ./staticimages/none.png ***!
  \********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p + "images/none.png";

        /***/
      },

    /***/ "./staticimages/screen1.png":
      /*!***********************************!*\
  !*** ./staticimages/screen1.png ***!
  \***********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p + "images/screen1.png";

        /***/
      },

    /***/ "./static/index.js":
      /*!*************************!*\
  !*** ./static/index.js ***!
  \*************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
        /* harmony import */ var buefy__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! buefy */ "./node_modules/buefy/dist/esm/index.js"
          );
        /* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.esm.js"
          );
        /* harmony import */ var vue_mq__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! vue-mq */ "./node_modules/vue-mq/dist/vue-mq.es.js"
          );
        /* harmony import */ var vue_a2b__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! vue-a2b */ "./node_modules/vue-a2b/dist/index.js"
          );
        /* harmony import */ var vue_a2b__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            vue_a2b__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./store.js */ "./static/store.js");
        /* harmony import */ var _app_vue__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! ./app.vue */ "./static/app.vue");
        /* harmony import */ var _Path_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! ./Path.js */ "./static/Path.js");
        /* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! ./Util.js */ "./static/Util.js");
        /* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(/*! ./router */ "./static/router.js");
        /* harmony import */ var vue_meta__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! vue-meta */ "./node_modules/vue-meta/dist/vue-meta.esm.js"
          );
        /* harmony import */ var buefy_dist_buefy_css__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! buefy/dist/buefy.css */ "./node_modules/buefy/dist/buefy.css"
          );
        /* harmony import */ var buefy_dist_buefy_css__WEBPACK_IMPORTED_MODULE_11___default =
          /*#__PURE__*/ __webpack_require__.n(
            buefy_dist_buefy_css__WEBPACK_IMPORTED_MODULE_11__
          );
        /* harmony import */ var _images_favicon_ico__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! .images/favicon.ico */ "./staticimages/favicon.ico"
          );
        /* harmony import */ var _images_404_cat_png__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(
            /*! .images/404_cat.png */ "./staticimages/404_cat.png"
          );
        /* harmony import */ var _images_screen1_png__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(
            /*! .images/screen1.png */ "./staticimages/screen1.png"
          );
        /* harmony import */ var _images_get_on_gp_png__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(
            /*! .images/get-on-gp.png */ "./staticimages/get-on-gp.png"
          );
        /* harmony import */ var _images_get_on_appstore_png__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(
            /*! .images/get-on-appstore.png */ "./staticimages/get-on-appstore.png"
          );
        /* harmony import */ var _images_app_screen_png__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(
            /*! .images/app_screen.png */ "./staticimages/app_screen.png"
          );
        /* harmony import */ var _images_hat_with_names_png__WEBPACK_IMPORTED_MODULE_18__ =
          __webpack_require__(
            /*! .images/hat-with-names.png */ "./staticimages/hat-with-names.png"
          );
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

        // 使用 vue-meta

        vue__WEBPACK_IMPORTED_MODULE_0__[
          "default"
        ].config.productionTip = false;
        _Util_js__WEBPACK_IMPORTED_MODULE_8__["initTracking"]();
        if ("serviceWorker" in navigator) {
          window.addEventListener("load", function () {
            navigator.serviceWorker.register("/service-worker.js");
          });
        }
        vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(
          buefy__WEBPACK_IMPORTED_MODULE_1__["default"],
          {
            defaultIconPack: "fas",
          }
        );
        vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(
          vue_mq__WEBPACK_IMPORTED_MODULE_3__["default"],
          {
            breakpoints: {
              mobile: 900,
              desktop: Infinity,
            },
          }
        );
        vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(
          vue_i18n__WEBPACK_IMPORTED_MODULE_2__["default"]
        );
        vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(
          vue_a2b__WEBPACK_IMPORTED_MODULE_4___default.a
        );
        vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(
          vue_meta__WEBPACK_IMPORTED_MODULE_10__["default"]
        );
        var i18n = new vue_i18n__WEBPACK_IMPORTED_MODULE_2__["default"]({
          locale: new _Path_js__WEBPACK_IMPORTED_MODULE_7__["default"](location)
            .locale,
          messages: {
            // top10：印尼、泰国、美国、波兰、德国、法国、菲律宾、英国、台湾、加拿大
            // 印尼语、泰语、英语、波兰语、德语、法语、中文繁体
            en: __webpack_require__(
              /*! ./locales/en-US.json */ "static/locales/en-US.json"
            ),
          },
        });
        new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
          i18n: i18n,
          router: _router__WEBPACK_IMPORTED_MODULE_9__["default"],
          el: "#app",
          template: "<app/>",
          store: _store_js__WEBPACK_IMPORTED_MODULE_5__["default"],
          components: {
            app: _app_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
          },
        });

        /***/
      },

    /***/ "./static/loadingScreen.vue":
      /*!**********************************!*\
  !*** ./static/loadingScreen.vue ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _loadingScreen_vue_vue_type_template_id_de8bc816_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./loadingScreen.vue?vue&type=template&id=de8bc816&scoped=true& */ "./static/loadingScreen.vue?vue&type=template&id=de8bc816&scoped=true&"
          );
        /* harmony import */ var _loadingScreen_vue_vue_type_style_index_0_id_de8bc816_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./loadingScreen.vue?vue&type=style&index=0&id=de8bc816&scoped=true&lang=css& */ "./static/loadingScreen.vue?vue&type=style&index=0&id=de8bc816&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        var script = {};

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[
            "default"
          ]
        )(
          script,
          _loadingScreen_vue_vue_type_template_id_de8bc816_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _loadingScreen_vue_vue_type_template_id_de8bc816_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          "de8bc816",
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/loadingScreen.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/loadingScreen.vue?vue&type=style&index=0&id=de8bc816&scoped=true&lang=css&":
      /*!*******************************************************************************************!*\
  !*** ./static/loadingScreen.vue?vue&type=style&index=0&id=de8bc816&scoped=true&lang=css& ***!
  \*******************************************************************************************/
      /*! no static exports found */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loadingScreen_vue_vue_type_style_index_0_id_de8bc816_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./loadingScreen.vue?vue&type=style&index=0&id=de8bc816&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/loadingScreen.vue?vue&type=style&index=0&id=de8bc816&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loadingScreen_vue_vue_type_style_index_0_id_de8bc816_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loadingScreen_vue_vue_type_style_index_0_id_de8bc816_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loadingScreen_vue_vue_type_style_index_0_id_de8bc816_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
          if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
            (function (key) {
              __webpack_require__.d(__webpack_exports__, key, function () {
                return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loadingScreen_vue_vue_type_style_index_0_id_de8bc816_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[
                  key
                ];
              });
            })(__WEBPACK_IMPORT_KEY__);

        /***/
      },

    /***/ "./static/loadingScreen.vue?vue&type=template&id=de8bc816&scoped=true&":
      /*!*****************************************************************************!*\
  !*** ./static/loadingScreen.vue?vue&type=template&id=de8bc816&scoped=true& ***!
  \*****************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_loadingScreen_vue_vue_type_template_id_de8bc816_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./loadingScreen.vue?vue&type=template&id=de8bc816&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/loadingScreen.vue?vue&type=template&id=de8bc816&scoped=true&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_loadingScreen_vue_vue_type_template_id_de8bc816_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_loadingScreen_vue_vue_type_template_id_de8bc816_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /***/ "./static/locales lazy recursive ^\\.\\/.*$":
      /*!*******************************************************!*\
  !*** ./static/locales lazy ^\.\/.*$ namespace object ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var map = {
          "./de-DE": ["static/locales/de-DE.json", "locale-de-DE"],
          "de-DE.json": ["static/locales/de-DE.json", "locale-de-DE"],
          "./en-US": ["static/locales/en-US.json", "locale-en-US"],
        };
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req)) {
            return Promise.resolve().then(function () {
              var e = new Error("Cannot find module '" + req + "'");
              e.code = "MODULE_NOT_FOUND";
              throw e;
            });
          }

          var ids = map[req],
            id = ids[0];
          return __webpack_require__.e(ids[1]).then(function () {
            return __webpack_require__.t(id, 3);
          });
        }
        webpackAsyncContext.keys = function webpackAsyncContextKeys() {
          return Object.keys(map);
        };
        webpackAsyncContext.id = "./static/locales lazy recursive ^\\.\\/.*$";
        module.exports = webpackAsyncContext;

        /***/
      },

    /***/ "static/locales/en-US.json":
      /*!***********************************!*\
  !*** static/locales/en-US.json ***!
  \***********************************/
      /*! exports provided: app, appInfo, common, optionsdialog, sounds, spinningwheel, textboxbuttons, winnerdialog, appShow, toolbar, wheelList, bottom, home, faq, default */
      /***/ function (module) {
        module.exports = JSON.parse(
          '{"app":{"Ads":"Ads","Click here to report an inappropriate ad":"Click here to report an inappropriate ad.","Click the Language menu":"Click the Language menu in the upper right to switch to English","Close ad":"Close ad","Create your own":"Create your own","Enter names here":"Enter names here","Error":"Error","Free and easy to use":"Free and easy-to-use, Spin The Wheel is a popular tool often used by teachers and event organizers for conducting random draws. Simply enter the names and spin the wheel to select a winner at random. Customize the look and feel of the wheel, save your creations, and share them with others.","Loaded default names and options":"Loaded default names and options","Random name picker":"Random name picker","Removed":"Removed {name}","We try to display only legitimate and honest ads":"We try to display only legitimate and honest ads.","Sorry, the wheel not exist! Loaded default names and options!":"Sorry, the wheel not exist! Loaded default names and options!"},"appInfo":{"The entries you make":"The entries you make above will be displayed on the wheel. When you click the wheel, it spins and picks a random winner. You can customize the appearance and behavior of the wheel.","Version":"Version"},"common":{"Cancel":"Cancel","Close":"Close","Customize":"Customize","Delete":"Delete","Entries":"{entryCount} entries","Import Twitter users":"Import Twitter users","Link Google Spreadsheet":"Link Google Spreadsheet","OK":"OK","Open":"Open","Privacy policy":"Privacy policy","Report offensive content":"Report offensive content","Save":"Save","We have a winner!":"We have a winner!","FAQ":"FAQ","Wheels":"Wheels"},"optionsdialog":{"After spin":"After spin","All names in the text-box":"All names in the text-box have the same chance of winning, regardless of this value.","Allow duplicates on wheel":"Allow duplicates on wheel","Animate winning entry":"Animate winning entry","Apply a theme":"Apply a theme","Auto-remove winner after 5 seconds":"Auto-remove winner after 5 seconds","Background color":"Background color","Colors":"Colors","Custom":"Custom","Customize colors":"Customize colors","Display popup with message:":"Display popup with message:","During spin":"During spin","From Gallery":"From Gallery","Image":"Image","Image in the center of the wheel":"Image in the center of the wheel","Image size":"Image size","Launch confetti":"Launch confetti","Max names on wheel":"Max number of names visible on the wheel","No":"No","None":"None","Pick category":"Pick category","Pick theme":"Pick theme","Play click sound when the winner is removed":"Play a click sound when the winner is removed","Select a gallery picture":"Select a gallery picture","Sound":"Sound","Spin slowly":"Spin slowly","Spin time (seconds)":"Spin time (seconds)","Upload image":"Upload image","Yes":"Yes","Your image has been uploaded":"Your image <b>{fileName}</b> has been uploaded successfully. Would you like to use the prominent colors from this image for the sectors of your wheel?"},"sounds":{"Alarm clock":"Alarm clock","Applause":"Loud applause","Bell ringing":"Bell ringing","Cheerful music":"Cheerful music","Christmas music":"Christmas music","Circus music":"Circus music","Cymbals":"Cymbals","Disco music":"Disco music","Dramatic music":"Dramatic music","Electronic dance music":"Electronic dance music","Fanfare":"Fanfare","Fast piano music":"Fast piano music","Funk music":"Funk music","Irish folk music":"Irish folk music","No sound":"No sound","Old phone ringing":"Old phone ringing","Piano music":"Piano music","Read out the winning name":"Read out the winning name","Reggae music":"Reggae music","Rock music":"Rock music","Ska music":"Ska music","Spooky music":"Spooky music","Subdued applause":"Subdued applause","Ticking sound":"Ticking sound"},"spinningwheel":{"title":"💖Wheel of Fortune💖","Click to spin":"Click to spin","Tap to spin":"Tap to spin","Explore more wheels":"More wheels","or press ctrl enter":"Ctr+Enter orClick to spin"},"textboxbuttons":{"Add image":"Add image","Shuffle":"Shuffle","Sort":"Sort"},"winnerdialog":{"Remove":"Remove","Remove all instances":"Remove all instances"},"appShow":{"Title":"Create fortune wheels in the app","Desc":"Spin the wheel is a common game mechanic that is used in a variety of games and activities. The idea is to Spin the wheel that is divided into numbered or labeled sections, and then to randomly select a section or outcome based on where the wheel lands.","Downloads":"Downloads","MAU":"MAU"},"toolbar":{"Add your language":"Add your language","Dark mode":"Dark mode","Exit fullscreen":"Exit fullscreen","FAQ":"FAQ","Feedback":"Feedback","Fullscreen":"Fullscreen","Language":"Language","More":"More","New":"New","Offline mode":"Offline mode","Please enter your email address":"Please enter your email address to continue","Send debug data":"Send debug data","Share":"Share","Unlink Google Spreadsheet":"Unlink Google Spreadsheet","Your session is now being recorded":"Your session is now being recorded. You can stop the recording by closing your browser window.","Wheels":"Wheels","Sports":"Sports","WorldCup":"World Cup Qatar 2022","Sitemap":"Sitemap","Names":"Names","Truth or Dare":"Truth or Dare","HotWheels":"❤️","Top10Wheels":"😊"},"wheelList":{"Popular wheels":"Popular wheels","New wheels":"New wheels","Related wheels":"Related wheels","Other wheels":"Other wheels","Word Cup wheels":"World Cup Qatar 2022 wheels","NFL wheels":"NFL wheels","NBA wheels":"NBA wheels","MLB wheels":"MLB wheels"},"bottom":{"Contact US":"Contact US","Privacy policy":"Privacy Policy","Sitemap":"Sitemap","All Of Wheels":"All Of Wheels"},"home":{"seo title":"Spin The Wheel - Wheel of Names","seo keywords":"Spin the wheel,Random name picker,Random wheel,Picker wheel,Random names,Wheel of Names","seo description":"Spin The Wheel is an ultimate decision making fortune wheel app. Free and easy to use. Make your entries, spin wheel to pick a random wheel of names. Customize look and feel, save and share wheels.","description":"<span style=\'font-size: 18px;\'></span>","privacy":"This website or its third-party tools use cookies, which are necessary for its functioning and required to achieve the purposes illustrated in the <router-link to=\'privacy.html\'>cookie policy</router-link>.You accept the use of cookies by closing or dismissing this popup or by continuing to browse the website.","privacy accept":"I accept","privacy ignore":"Ignore me","title":"","title suffix":"Spin The Wheel","names":["Las Vegas Raiders","Baltimore Ravens","Miami Dolphins","Los Angeles Rams","Carolina Panthers","Arizona Cardinals","Buffalo Bills","Kansas City Chiefs","Denver Broncos","Chicago Bears"]},"faq":{"title":"Frequently Asked Questions","questions":[{"title":"What is Spin The Wheel?","content":"Spin The Wheel is a free, and easy-to-use, Spin The Wheel is a popular tool often used by teachers and event organizers for conducting random draws. Simply enter the names and spin the wheel to select a winner at random. Customize the look and feel of the wheel, save your creations, and share them with others."},{"title":"What can the wheel of fortune be used for?","content":"Is it difficult for you to decide what to have for lunch? Create a turntable and choose a restaurant at random.<br/>Do you need to choose a random name from a large list of names? Create a name turntable and let luck do its job.<br/>Are you a teacher who wants to choose his students as fairly as possible and make everyone interesting at the same time? Create a name turntable and let the students rotate themselves.<br/>Just need a random number? Random colors? Roll the dice? There are turntables for these, and there are more.<br/>Can\'t decide what to watch on movie night? Create a lucky turntable with a movie list and pick a winner at random.<br/>Use cases are unlimited, and if you can\'t find the runner you need in our runner library, you can always create your own runner."},{"title":"Is the wheel really random?","content":"Yes! When you click the wheel, it accelerates for exactly one second, then it is set to a random rotation between 0 and 360 degrees, and finally it decelerates to a stop. <br/>The setting of a random rotation is not visible to the naked eye as it happens when the wheel is spinning quite fast."},{"title":"Is this service free?","content":"Yes! Spin the Wheel mobile apps and websites are completely free to use, and will always be so.<br/>All features are accessed free of charge."},{"title":"How to contact us?","content":"Email: <b>tikfollowers@gmail.com</b>.&nbsp;&nbsp;&nbsp;<a href=\\"mailto:tikfollowers@gmail.com\\"><b>Contact US</b></a><br/> If you have any questions, please feel free to email us. We will give you feedback as soon as possible. Thank you!"}]}}'
        );

        /***/
      },

    /***/ "./static/optionsdialog.vue":
      /*!**********************************!*\
  !*** ./static/optionsdialog.vue ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _optionsdialog_vue_vue_type_template_id_5a328193_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./optionsdialog.vue?vue&type=template&id=5a328193&scoped=true& */ "./static/optionsdialog.vue?vue&type=template&id=5a328193&scoped=true&"
          );
        /* harmony import */ var _optionsdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./optionsdialog.vue?vue&type=script&lang=js& */ "./static/optionsdialog.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony import */ var _optionsdialog_vue_vue_type_style_index_0_id_5a328193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./optionsdialog.vue?vue&type=style&index=0&id=5a328193&scoped=true&lang=css& */ "./static/optionsdialog.vue?vue&type=style&index=0&id=5a328193&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ]
        )(
          _optionsdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ],
          _optionsdialog_vue_vue_type_template_id_5a328193_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _optionsdialog_vue_vue_type_template_id_5a328193_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          "5a328193",
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/optionsdialog.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/optionsdialog.vue?vue&type=script&lang=js&":
      /*!***********************************************************!*\
  !*** ./static/optionsdialog.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./optionsdialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/optionsdialog.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          "default"
        ] =
          _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ];

        /***/
      },

    /***/ "./static/optionsdialog.vue?vue&type=style&index=0&id=5a328193&scoped=true&lang=css&":
      /*!*******************************************************************************************!*\
  !*** ./static/optionsdialog.vue?vue&type=style&index=0&id=5a328193&scoped=true&lang=css& ***!
  \*******************************************************************************************/
      /*! no static exports found */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_style_index_0_id_5a328193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./optionsdialog.vue?vue&type=style&index=0&id=5a328193&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/optionsdialog.vue?vue&type=style&index=0&id=5a328193&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_style_index_0_id_5a328193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_style_index_0_id_5a328193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_style_index_0_id_5a328193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
          if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
            (function (key) {
              __webpack_require__.d(__webpack_exports__, key, function () {
                return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_style_index_0_id_5a328193_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[
                  key
                ];
              });
            })(__WEBPACK_IMPORT_KEY__);

        /***/
      },

    /***/ "./static/optionsdialog.vue?vue&type=template&id=5a328193&scoped=true&":
      /*!*****************************************************************************!*\
  !*** ./static/optionsdialog.vue?vue&type=template&id=5a328193&scoped=true& ***!
  \*****************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_template_id_5a328193_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./optionsdialog.vue?vue&type=template&id=5a328193&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/optionsdialog.vue?vue&type=template&id=5a328193&scoped=true&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_template_id_5a328193_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_optionsdialog_vue_vue_type_template_id_5a328193_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /***/ "./static/recommendWheels.vue":
      /*!************************************!*\
  !*** ./static/recommendWheels.vue ***!
  \************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _recommendWheels_vue_vue_type_template_id_552a2441_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./recommendWheels.vue?vue&type=template&id=552a2441&scoped=true& */ "./static/recommendWheels.vue?vue&type=template&id=552a2441&scoped=true&"
          );
        /* harmony import */ var _recommendWheels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./recommendWheels.vue?vue&type=script&lang=js& */ "./static/recommendWheels.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony import */ var _recommendWheels_vue_vue_type_style_index_0_id_552a2441_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./recommendWheels.vue?vue&type=style&index=0&id=552a2441&scoped=true&lang=css& */ "./static/recommendWheels.vue?vue&type=style&index=0&id=552a2441&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ]
        )(
          _recommendWheels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ],
          _recommendWheels_vue_vue_type_template_id_552a2441_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _recommendWheels_vue_vue_type_template_id_552a2441_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          "552a2441",
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/recommendWheels.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/recommendWheels.vue?vue&type=script&lang=js&":
      /*!*************************************************************!*\
  !*** ./static/recommendWheels.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recommendWheels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./recommendWheels.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/recommendWheels.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          "default"
        ] =
          _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recommendWheels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ];

        /***/
      },

    /***/ "./static/recommendWheels.vue?vue&type=style&index=0&id=552a2441&scoped=true&lang=css&":
      /*!*********************************************************************************************!*\
  !*** ./static/recommendWheels.vue?vue&type=style&index=0&id=552a2441&scoped=true&lang=css& ***!
  \*********************************************************************************************/
      /*! no static exports found */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_recommendWheels_vue_vue_type_style_index_0_id_552a2441_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./recommendWheels.vue?vue&type=style&index=0&id=552a2441&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/recommendWheels.vue?vue&type=style&index=0&id=552a2441&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_recommendWheels_vue_vue_type_style_index_0_id_552a2441_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_recommendWheels_vue_vue_type_style_index_0_id_552a2441_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_recommendWheels_vue_vue_type_style_index_0_id_552a2441_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
          if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
            (function (key) {
              __webpack_require__.d(__webpack_exports__, key, function () {
                return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_recommendWheels_vue_vue_type_style_index_0_id_552a2441_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[
                  key
                ];
              });
            })(__WEBPACK_IMPORT_KEY__);

        /***/
      },

    /***/ "./static/recommendWheels.vue?vue&type=template&id=552a2441&scoped=true&":
      /*!*******************************************************************************!*\
  !*** ./static/recommendWheels.vue?vue&type=template&id=552a2441&scoped=true& ***!
  \*******************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_recommendWheels_vue_vue_type_template_id_552a2441_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./recommendWheels.vue?vue&type=template&id=552a2441&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/recommendWheels.vue?vue&type=template&id=552a2441&scoped=true&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_recommendWheels_vue_vue_type_template_id_552a2441_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_recommendWheels_vue_vue_type_template_id_552a2441_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /***/ "./static/router.js":
      /*!**************************!*\
  !*** ./static/router.js ***!
  \**************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
        /* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js"
          );
        /* harmony import */ var _app_vue__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./app.vue */ "./static/app.vue");
        /* harmony import */ var _hotwheels_vue__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./hotwheels.vue */ "./static/hotwheels.vue");
        /* harmony import */ var _top10wheels_vue__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./top10wheels.vue */ "./static/top10wheels.vue"
          );
        /* harmony import */ var _appInfo_vue__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./appInfo.vue */ "./static/appInfo.vue");

        vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(
          vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]
        );
        /* harmony default export */ __webpack_exports__["default"] =
          new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
            routes: [
              {
                path: "/hotwheels",
                component:
                  _hotwheels_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
              },
              {
                path: "/top10wheels",
                component:
                  _top10wheels_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
              },
              {
                path: "/appinfo",
                component: _appInfo_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
              },
              {
                path: "/:lang/:wheelName",
                component: _app_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
              },
              {
                path: "/:wheelName",
                component: _app_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
              },
            ],
            scrollBehavior: function scrollBehavior(to, from, savedPosition) {
              return {
                x: 0,
                y: 0,
              };
            },
            mode: "history",
          });

        /***/
      },

    /***/ "./static/simpletoolbar.vue":
      /*!**********************************!*\
  !*** ./static/simpletoolbar.vue ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _simpletoolbar_vue_vue_type_template_id_159adf94___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./simpletoolbar.vue?vue&type=template&id=159adf94& */ "./static/simpletoolbar.vue?vue&type=template&id=159adf94&"
          );
        /* harmony import */ var _simpletoolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./simpletoolbar.vue?vue&type=script&lang=js& */ "./static/simpletoolbar.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[
            "default"
          ]
        )(
          _simpletoolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ],
          _simpletoolbar_vue_vue_type_template_id_159adf94___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _simpletoolbar_vue_vue_type_template_id_159adf94___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          null,
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/simpletoolbar.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/simpletoolbar.vue?vue&type=script&lang=js&":
      /*!***********************************************************!*\
  !*** ./static/simpletoolbar.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simpletoolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./simpletoolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/simpletoolbar.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          "default"
        ] =
          _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simpletoolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ];

        /***/
      },

    /***/ "./static/simpletoolbar.vue?vue&type=template&id=159adf94&":
      /*!*****************************************************************!*\
  !*** ./static/simpletoolbar.vue?vue&type=template&id=159adf94& ***!
  \*****************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_simpletoolbar_vue_vue_type_template_id_159adf94___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./simpletoolbar.vue?vue&type=template&id=159adf94& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/simpletoolbar.vue?vue&type=template&id=159adf94&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_simpletoolbar_vue_vue_type_template_id_159adf94___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_simpletoolbar_vue_vue_type_template_id_159adf94___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /***/ "./static/spinningwheel.vue":
      /*!**********************************!*\
  !*** ./static/spinningwheel.vue ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _spinningwheel_vue_vue_type_template_id_78fb99d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./spinningwheel.vue?vue&type=template&id=78fb99d2&scoped=true& */ "./static/spinningwheel.vue?vue&type=template&id=78fb99d2&scoped=true&"
          );
        /* harmony import */ var _spinningwheel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./spinningwheel.vue?vue&type=script&lang=js& */ "./static/spinningwheel.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony import */ var _spinningwheel_vue_vue_type_style_index_0_id_78fb99d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./spinningwheel.vue?vue&type=style&index=0&id=78fb99d2&scoped=true&lang=css& */ "./static/spinningwheel.vue?vue&type=style&index=0&id=78fb99d2&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ]
        )(
          _spinningwheel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ],
          _spinningwheel_vue_vue_type_template_id_78fb99d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _spinningwheel_vue_vue_type_template_id_78fb99d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          "78fb99d2",
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/spinningwheel.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/spinningwheel.vue?vue&type=script&lang=js&":
      /*!***********************************************************!*\
  !*** ./static/spinningwheel.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./spinningwheel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/spinningwheel.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          "default"
        ] =
          _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ];

        /***/
      },

    /***/ "./static/spinningwheel.vue?vue&type=style&index=0&id=78fb99d2&scoped=true&lang=css&":
      /*!*******************************************************************************************!*\
  !*** ./static/spinningwheel.vue?vue&type=style&index=0&id=78fb99d2&scoped=true&lang=css& ***!
  \*******************************************************************************************/
      /*! no static exports found */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_style_index_0_id_78fb99d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./spinningwheel.vue?vue&type=style&index=0&id=78fb99d2&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/spinningwheel.vue?vue&type=style&index=0&id=78fb99d2&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_style_index_0_id_78fb99d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_style_index_0_id_78fb99d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_style_index_0_id_78fb99d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
          if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
            (function (key) {
              __webpack_require__.d(__webpack_exports__, key, function () {
                return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_style_index_0_id_78fb99d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[
                  key
                ];
              });
            })(__WEBPACK_IMPORT_KEY__);

        /***/
      },

    /***/ "./static/spinningwheel.vue?vue&type=template&id=78fb99d2&scoped=true&":
      /*!*****************************************************************************!*\
  !*** ./static/spinningwheel.vue?vue&type=template&id=78fb99d2&scoped=true& ***!
  \*****************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_template_id_78fb99d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./spinningwheel.vue?vue&type=template&id=78fb99d2&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/spinningwheel.vue?vue&type=template&id=78fb99d2&scoped=true&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_template_id_78fb99d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_spinningwheel_vue_vue_type_template_id_78fb99d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /***/ "./static/store.js":
      /*!*************************!*\
  !*** ./static/store.js ***!
  \*************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
        /* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! vuex */ "./node_modules/vuex/dist/vuex.esm.js"
          );
        /* harmony import */ var _WheelConfig_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./WheelConfig.js */ "./static/WheelConfig.js"
          );
        /* harmony import */ var _Preferences_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./Preferences.js */ "./static/Preferences.js"
          );
        /* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./Util.js */ "./static/Util.js");
        /*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

        vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(
          vuex__WEBPACK_IMPORTED_MODULE_1__["default"]
        );

        /* harmony default export */ __webpack_exports__["default"] =
          new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
            state: {
              wheelConfig: new _WheelConfig_js__WEBPACK_IMPORTED_MODULE_2__[
                "default"
              ](),
              preferences: new _Preferences_js__WEBPACK_IMPORTED_MODULE_3__[
                "default"
              ](),
              appStatus: {
                fullScreen: false,
                online: true,
                wheelSpinning: false,
                sheetLinked: false,
                userIsLoggedIn: false,
                userPhotoUrl: "",
                userDisplayName: "",
                userUid: "",
                darkMode: false,
              },
              version: "2",
            },
            getters: {
              entryCount: function entryCount(state) {
                return state.wheelConfig.names.length;
              },
              darkMode: function darkMode(state) {
                return state.preferences.darkMode;
              },
            },
            mutations: {
              setWheelConfig: function setWheelConfig(state, newWheelConfig) {
                state.wheelConfig = newWheelConfig;
              },
              setWheelTitle: function setWheelTitle(state, title) {
                var clone = state.wheelConfig.clone();
                clone.title = title;
                state.wheelConfig = clone;
              },
              setNames: function setNames(state, names) {
                state.wheelConfig.names = names;
              },
              shuffleNames: function shuffleNames(state) {
                state.wheelConfig.names = _Util_js__WEBPACK_IMPORTED_MODULE_4__[
                  "shuffleArray"
                ](state.wheelConfig.names);
              },
              sortNames: function sortNames(state) {
                state.wheelConfig.names = _Util_js__WEBPACK_IMPORTED_MODULE_4__[
                  "sortWheelEntries"
                ](state.wheelConfig.names);
              },
              appendNames: function appendNames(state, names) {
                var newNames = state.wheelConfig.names.concat(names);
                state.wheelConfig.names = newNames;
              },
              removeName: function removeName(state, name) {
                var newNames = state.wheelConfig.names.slice(0);
                newNames.splice(newNames.indexOf(name), 1);
                state.wheelConfig.names = newNames;
                state.appStatus.sheetLinked = false;
              },
              removeNameAll: function removeNameAll(state, name) {
                state.wheelConfig.names = state.wheelConfig.names.filter(
                  function (entry) {
                    return entry != name;
                  }
                );
                state.appStatus.sheetLinked = false;
              },
              enterFullScreen: function enterFullScreen(state) {
                state.appStatus.fullScreen = true;
              },
              exitFullScreen: function exitFullScreen(state) {
                state.appStatus.fullScreen = false;
              },
              setOnline: function setOnline(state, online) {
                state.appStatus.online = online;
              },
              startWheelSpin: function startWheelSpin(state) {
                state.appStatus.wheelSpinning = true;
              },
              stopWheelSpin: function stopWheelSpin(state) {
                state.appStatus.wheelSpinning = false;
              },
              linkSheet: function linkSheet(state) {
                state.appStatus.sheetLinked = true;
              },
              unlinkSheet: function unlinkSheet(state) {
                state.appStatus.sheetLinked = false;
              },
              logInUser: function logInUser(state, payload) {
                state.appStatus.userIsLoggedIn = true;
                state.appStatus.userPhotoUrl = payload.photoUrl;
                state.appStatus.userDisplayName = payload.displayName;
                state.appStatus.userUid = payload.uid;
              },
              logOutUser: function logOutUser(state) {
                state.appStatus.userIsLoggedIn = false;
                state.appStatus.userPhotoUrl = "";
                state.appStatus.userDisplayName = "";
                state.appStatus.userUid = "";
              },
              setPreferences: function setPreferences(state, newPrefs) {
                state.preferences = newPrefs;
              },
              toggleAppInfoVisibility: function toggleAppInfoVisibility(state) {
                var newPrefs = state.preferences.clone();
                newPrefs.appInfoVisible = !newPrefs.appInfoVisible;
                state.preferences = newPrefs;
              },
              toggleDarkMode: function toggleDarkMode(state) {
                var newPrefs = state.preferences.clone();
                newPrefs.darkMode = !newPrefs.darkMode;
                state.preferences = newPrefs;
              },
            },
          });

        /***/
      },

    /***/ "./static/textbox.vue":
      /*!****************************!*\
  !*** ./static/textbox.vue ***!
  \****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _textbox_vue_vue_type_template_id_465c016b___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./textbox.vue?vue&type=template&id=465c016b& */ "./static/textbox.vue?vue&type=template&id=465c016b&"
          );
        /* harmony import */ var _textbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./textbox.vue?vue&type=script&lang=js& */ "./static/textbox.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[
            "default"
          ]
        )(
          _textbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ],
          _textbox_vue_vue_type_template_id_465c016b___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _textbox_vue_vue_type_template_id_465c016b___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          null,
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/textbox.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/textbox.vue?vue&type=script&lang=js&":
      /*!*****************************************************!*\
  !*** ./static/textbox.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_textbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./textbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/textbox.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          "default"
        ] =
          _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_textbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ];

        /***/
      },

    /***/ "./static/textbox.vue?vue&type=template&id=465c016b&":
      /*!***********************************************************!*\
  !*** ./static/textbox.vue?vue&type=template&id=465c016b& ***!
  \***********************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_textbox_vue_vue_type_template_id_465c016b___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./textbox.vue?vue&type=template&id=465c016b& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/textbox.vue?vue&type=template&id=465c016b&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_textbox_vue_vue_type_template_id_465c016b___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_textbox_vue_vue_type_template_id_465c016b___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /***/ "./static/textboxbuttons.vue":
      /*!***********************************!*\
  !*** ./static/textboxbuttons.vue ***!
  \***********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _textboxbuttons_vue_vue_type_template_id_370a9134_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./textboxbuttons.vue?vue&type=template&id=370a9134&scoped=true& */ "./static/textboxbuttons.vue?vue&type=template&id=370a9134&scoped=true&"
          );
        /* harmony import */ var _textboxbuttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./textboxbuttons.vue?vue&type=script&lang=js& */ "./static/textboxbuttons.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony import */ var _textboxbuttons_vue_vue_type_style_index_0_id_370a9134_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./textboxbuttons.vue?vue&type=style&index=0&id=370a9134&scoped=true&lang=css& */ "./static/textboxbuttons.vue?vue&type=style&index=0&id=370a9134&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ]
        )(
          _textboxbuttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ],
          _textboxbuttons_vue_vue_type_template_id_370a9134_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _textboxbuttons_vue_vue_type_template_id_370a9134_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          "370a9134",
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/textboxbuttons.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/textboxbuttons.vue?vue&type=script&lang=js&":
      /*!************************************************************!*\
  !*** ./static/textboxbuttons.vue?vue&type=script&lang=js& ***!
  \************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_textboxbuttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./textboxbuttons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/textboxbuttons.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          "default"
        ] =
          _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_textboxbuttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ];

        /***/
      },

    /***/ "./static/textboxbuttons.vue?vue&type=style&index=0&id=370a9134&scoped=true&lang=css&":
      /*!********************************************************************************************!*\
  !*** ./static/textboxbuttons.vue?vue&type=style&index=0&id=370a9134&scoped=true&lang=css& ***!
  \********************************************************************************************/
      /*! no static exports found */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_textboxbuttons_vue_vue_type_style_index_0_id_370a9134_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./textboxbuttons.vue?vue&type=style&index=0&id=370a9134&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/textboxbuttons.vue?vue&type=style&index=0&id=370a9134&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_textboxbuttons_vue_vue_type_style_index_0_id_370a9134_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_textboxbuttons_vue_vue_type_style_index_0_id_370a9134_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_textboxbuttons_vue_vue_type_style_index_0_id_370a9134_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
          if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
            (function (key) {
              __webpack_require__.d(__webpack_exports__, key, function () {
                return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_textboxbuttons_vue_vue_type_style_index_0_id_370a9134_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[
                  key
                ];
              });
            })(__WEBPACK_IMPORT_KEY__);

        /***/
      },

    /***/ "./static/textboxbuttons.vue?vue&type=template&id=370a9134&scoped=true&":
      /*!******************************************************************************!*\
  !*** ./static/textboxbuttons.vue?vue&type=template&id=370a9134&scoped=true& ***!
  \******************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_textboxbuttons_vue_vue_type_template_id_370a9134_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./textboxbuttons.vue?vue&type=template&id=370a9134&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/textboxbuttons.vue?vue&type=template&id=370a9134&scoped=true&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_textboxbuttons_vue_vue_type_template_id_370a9134_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_textboxbuttons_vue_vue_type_template_id_370a9134_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /***/ "static/third_party/filmmusic-ioamazing-plan-by-kevin-macleod-from-filmmusic-io.mp3":
      /*!*********************************************************************************************!*\
  !*** static/third_party/filmmusic-ioamazing-plan-by-kevin-macleod-from-filmmusic-io.mp3 ***!
  \*********************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p +
          "amazing-plan-by-kevin-macleod-from-filmmusic-io.mp3";

        /***/
      },

    /***/ "static/third_party/filmmusic-iolife-of-riley-by-kevin-macleod-from-filmmusic-io.mp3":
      /*!**********************************************************************************************!*\
  !*** static/third_party/filmmusic-iolife-of-riley-by-kevin-macleod-from-filmmusic-io.mp3 ***!
  \**********************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p +
          "life-of-riley-by-kevin-macleod-from-filmmusic-io.mp3";

        /***/
      },

    /***/ "static/third_party/filmmusic-iostrength-of-the-titans-by-kevin-macleod-from-filmmusic-io.mp3":
      /*!*******************************************************************************************************!*\
  !*** static/third_party/filmmusic-iostrength-of-the-titans-by-kevin-macleod-from-filmmusic-io.mp3 ***!
  \*******************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p +
          "strength-of-the-titans-by-kevin-macleod-from-filmmusic-io.mp3";

        /***/
      },

    /***/ "static/third_party/freesound350428__benjaminharveydesign__trumpet-fanfare.mp3":
      /*!****************************************************************************************!*\
  !*** static/third_party/freesound350428__benjaminharveydesign__trumpet-fanfare.mp3 ***!
  \****************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p +
          "350428__benjaminharveydesign__trumpet-fanfare.mp3";

        /***/
      },

    /***/ "static/third_party/freesound370743__podsburgh__winner-metal-bell-ringing-remix.mp3":
      /*!*********************************************************************************************!*\
  !*** static/third_party/freesound370743__podsburgh__winner-metal-bell-ringing-remix.mp3 ***!
  \*********************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p +
          "370743__podsburgh__winner-metal-bell-ringing-remix.mp3";

        /***/
      },

    /***/ "static/third_party/freesound425432__trivialaccapella__18-crash-hit-soft.mp3":
      /*!**************************************************************************************!*\
  !*** static/third_party/freesound425432__trivialaccapella__18-crash-hit-soft.mp3 ***!
  \**************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p +
          "425432__trivialaccapella__18-crash-hit-soft.mp3";

        /***/
      },

    /***/ "./static/third_party/publicdomainvectors/camera.png":
      /*!***********************************************************!*\
  !*** ./static/third_party/publicdomainvectors/camera.png ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p + "images/camera.png";

        /***/
      },

    /***/ "./static/third_party/publicdomainvectors/cat.png":
      /*!********************************************************!*\
  !*** ./static/third_party/publicdomainvectors/cat.png ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p + "images/cat.png";

        /***/
      },

    /***/ "./static/third_party/publicdomainvectors/dog.png":
      /*!********************************************************!*\
  !*** ./static/third_party/publicdomainvectors/dog.png ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p + "images/dog.png";

        /***/
      },

    /***/ "./static/third_party/publicdomainvectors/dollar-sign.png":
      /*!****************************************************************!*\
  !*** ./static/third_party/publicdomainvectors/dollar-sign.png ***!
  \****************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p + "images/dollar-sign.png";

        /***/
      },

    /***/ "./static/third_party/publicdomainvectors/dragon.png":
      /*!***********************************************************!*\
  !*** ./static/third_party/publicdomainvectors/dragon.png ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p + "images/dragon.png";

        /***/
      },

    /***/ "static/third_party/soundbibleSMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3":
      /*!*******************************************************************************************!*\
  !*** static/third_party/soundbibleSMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3 ***!
  \*******************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p +
          "SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3";

        /***/
      },

    /***/ "static/third_party/soundbibleTick-DeepFrozenApps-397275646.mp3":
      /*!*************************************************************************!*\
  !*** static/third_party/soundbibleTick-DeepFrozenApps-397275646.mp3 ***!
  \*************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          __webpack_require__.p + "Tick-DeepFrozenApps-397275646.mp3";

        /***/
      },

    /***/ "./static/toolbar.vue":
      /*!****************************!*\
  !*** ./static/toolbar.vue ***!
  \****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _toolbar_vue_vue_type_template_id_4390b8e8___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./toolbar.vue?vue&type=template&id=4390b8e8& */ "./static/toolbar.vue?vue&type=template&id=4390b8e8&"
          );
        /* harmony import */ var _toolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./toolbar.vue?vue&type=script&lang=js& */ "./static/toolbar.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony import */ var _toolbar_vue_vue_type_style_index_0_id_4390b8e8_lang_css___WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./toolbar.vue?vue&type=style&index=0&id=4390b8e8&lang=css& */ "./static/toolbar.vue?vue&type=style&index=0&id=4390b8e8&lang=css&"
          );
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ]
        )(
          _toolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ],
          _toolbar_vue_vue_type_template_id_4390b8e8___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _toolbar_vue_vue_type_template_id_4390b8e8___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          null,
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/toolbar.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/toolbar.vue?vue&type=script&lang=js&":
      /*!*****************************************************!*\
  !*** ./static/toolbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./toolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/toolbar.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          "default"
        ] =
          _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ];

        /***/
      },

    /***/ "./static/toolbar.vue?vue&type=style&index=0&id=4390b8e8&lang=css&":
      /*!*************************************************************************!*\
  !*** ./static/toolbar.vue?vue&type=style&index=0&id=4390b8e8&lang=css& ***!
  \*************************************************************************/
      /*! no static exports found */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_style_index_0_id_4390b8e8_lang_css___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./toolbar.vue?vue&type=style&index=0&id=4390b8e8&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/toolbar.vue?vue&type=style&index=0&id=4390b8e8&lang=css&"
          );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_style_index_0_id_4390b8e8_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_style_index_0_id_4390b8e8_lang_css___WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_style_index_0_id_4390b8e8_lang_css___WEBPACK_IMPORTED_MODULE_0__)
          if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
            (function (key) {
              __webpack_require__.d(__webpack_exports__, key, function () {
                return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_style_index_0_id_4390b8e8_lang_css___WEBPACK_IMPORTED_MODULE_0__[
                  key
                ];
              });
            })(__WEBPACK_IMPORT_KEY__);

        /***/
      },

    /***/ "./static/toolbar.vue?vue&type=template&id=4390b8e8&":
      /*!***********************************************************!*\
  !*** ./static/toolbar.vue?vue&type=template&id=4390b8e8& ***!
  \***********************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_template_id_4390b8e8___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./toolbar.vue?vue&type=template&id=4390b8e8& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/toolbar.vue?vue&type=template&id=4390b8e8&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_template_id_4390b8e8___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_template_id_4390b8e8___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /***/ "./static/top10wheels.vue":
      /*!********************************!*\
  !*** ./static/top10wheels.vue ***!
  \********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _top10wheels_vue_vue_type_template_id_305b7a19_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./top10wheels.vue?vue&type=template&id=305b7a19&scoped=true& */ "./static/top10wheels.vue?vue&type=template&id=305b7a19&scoped=true&"
          );
        /* harmony import */ var _top10wheels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./top10wheels.vue?vue&type=script&lang=js& */ "./static/top10wheels.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony import */ var _top10wheels_vue_vue_type_style_index_0_id_305b7a19_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./top10wheels.vue?vue&type=style&index=0&id=305b7a19&scoped=true&lang=css& */ "./static/top10wheels.vue?vue&type=style&index=0&id=305b7a19&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ]
        )(
          _top10wheels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ],
          _top10wheels_vue_vue_type_template_id_305b7a19_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _top10wheels_vue_vue_type_template_id_305b7a19_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          "305b7a19",
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/top10wheels.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/top10wheels.vue?vue&type=script&lang=js&":
      /*!*********************************************************!*\
  !*** ./static/top10wheels.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_top10wheels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./top10wheels.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/top10wheels.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          "default"
        ] =
          _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_top10wheels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ];

        /***/
      },

    /***/ "./static/top10wheels.vue?vue&type=style&index=0&id=305b7a19&scoped=true&lang=css&":
      /*!*****************************************************************************************!*\
  !*** ./static/top10wheels.vue?vue&type=style&index=0&id=305b7a19&scoped=true&lang=css& ***!
  \*****************************************************************************************/
      /*! no static exports found */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_top10wheels_vue_vue_type_style_index_0_id_305b7a19_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./top10wheels.vue?vue&type=style&index=0&id=305b7a19&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/top10wheels.vue?vue&type=style&index=0&id=305b7a19&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_top10wheels_vue_vue_type_style_index_0_id_305b7a19_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_top10wheels_vue_vue_type_style_index_0_id_305b7a19_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_top10wheels_vue_vue_type_style_index_0_id_305b7a19_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
          if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
            (function (key) {
              __webpack_require__.d(__webpack_exports__, key, function () {
                return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_top10wheels_vue_vue_type_style_index_0_id_305b7a19_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[
                  key
                ];
              });
            })(__WEBPACK_IMPORT_KEY__);

        /***/
      },

    /***/ "./static/top10wheels.vue?vue&type=template&id=305b7a19&scoped=true&":
      /*!***************************************************************************!*\
  !*** ./static/top10wheels.vue?vue&type=template&id=305b7a19&scoped=true& ***!
  \***************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_top10wheels_vue_vue_type_template_id_305b7a19_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./top10wheels.vue?vue&type=template&id=305b7a19&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/top10wheels.vue?vue&type=template&id=305b7a19&scoped=true&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_top10wheels_vue_vue_type_template_id_305b7a19_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_top10wheels_vue_vue_type_template_id_305b7a19_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /***/ "./static/wheelList.vue":
      /*!******************************!*\
  !*** ./static/wheelList.vue ***!
  \******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _wheelList_vue_vue_type_template_id_d0bf3074_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./wheelList.vue?vue&type=template&id=d0bf3074&scoped=true& */ "./static/wheelList.vue?vue&type=template&id=d0bf3074&scoped=true&"
          );
        /* harmony import */ var _wheelList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./wheelList.vue?vue&type=script&lang=js& */ "./static/wheelList.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony import */ var _wheelList_vue_vue_type_style_index_0_id_d0bf3074_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./wheelList.vue?vue&type=style&index=0&id=d0bf3074&scoped=true&lang=css& */ "./static/wheelList.vue?vue&type=style&index=0&id=d0bf3074&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ]
        )(
          _wheelList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ],
          _wheelList_vue_vue_type_template_id_d0bf3074_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _wheelList_vue_vue_type_template_id_d0bf3074_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          "d0bf3074",
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/wheelList.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/wheelList.vue?vue&type=script&lang=js&":
      /*!*******************************************************!*\
  !*** ./static/wheelList.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wheelList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./wheelList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/wheelList.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          "default"
        ] =
          _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wheelList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ];

        /***/
      },

    /***/ "./static/wheelList.vue?vue&type=style&index=0&id=d0bf3074&scoped=true&lang=css&":
      /*!***************************************************************************************!*\
  !*** ./static/wheelList.vue?vue&type=style&index=0&id=d0bf3074&scoped=true&lang=css& ***!
  \***************************************************************************************/
      /*! no static exports found */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wheelList_vue_vue_type_style_index_0_id_d0bf3074_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./wheelList.vue?vue&type=style&index=0&id=d0bf3074&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/wheelList.vue?vue&type=style&index=0&id=d0bf3074&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wheelList_vue_vue_type_style_index_0_id_d0bf3074_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wheelList_vue_vue_type_style_index_0_id_d0bf3074_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wheelList_vue_vue_type_style_index_0_id_d0bf3074_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
          if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
            (function (key) {
              __webpack_require__.d(__webpack_exports__, key, function () {
                return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wheelList_vue_vue_type_style_index_0_id_d0bf3074_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[
                  key
                ];
              });
            })(__WEBPACK_IMPORT_KEY__);

        /***/
      },

    /***/ "./static/wheelList.vue?vue&type=template&id=d0bf3074&scoped=true&":
      /*!*************************************************************************!*\
  !*** ./static/wheelList.vue?vue&type=template&id=d0bf3074&scoped=true& ***!
  \*************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_wheelList_vue_vue_type_template_id_d0bf3074_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./wheelList.vue?vue&type=template&id=d0bf3074&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/wheelList.vue?vue&type=template&id=d0bf3074&scoped=true&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_wheelList_vue_vue_type_template_id_d0bf3074_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_wheelList_vue_vue_type_template_id_d0bf3074_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /***/ "./static/winneranimation.vue":
      /*!************************************!*\
  !*** ./static/winneranimation.vue ***!
  \************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _winneranimation_vue_vue_type_template_id_ad0ed4dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./winneranimation.vue?vue&type=template&id=ad0ed4dc&scoped=true& */ "./static/winneranimation.vue?vue&type=template&id=ad0ed4dc&scoped=true&"
          );
        /* harmony import */ var _winneranimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./winneranimation.vue?vue&type=script&lang=js& */ "./static/winneranimation.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony import */ var _winneranimation_vue_vue_type_style_index_0_id_ad0ed4dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./winneranimation.vue?vue&type=style&index=0&id=ad0ed4dc&scoped=true&lang=css& */ "./static/winneranimation.vue?vue&type=style&index=0&id=ad0ed4dc&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[
            "default"
          ]
        )(
          _winneranimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ],
          _winneranimation_vue_vue_type_template_id_ad0ed4dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _winneranimation_vue_vue_type_template_id_ad0ed4dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          "ad0ed4dc",
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/winneranimation.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/winneranimation.vue?vue&type=script&lang=js&":
      /*!*************************************************************!*\
  !*** ./static/winneranimation.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./winneranimation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/winneranimation.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          "default"
        ] =
          _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ];

        /***/
      },

    /***/ "./static/winneranimation.vue?vue&type=style&index=0&id=ad0ed4dc&scoped=true&lang=css&":
      /*!*********************************************************************************************!*\
  !*** ./static/winneranimation.vue?vue&type=style&index=0&id=ad0ed4dc&scoped=true&lang=css& ***!
  \*********************************************************************************************/
      /*! no static exports found */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_style_index_0_id_ad0ed4dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./winneranimation.vue?vue&type=style&index=0&id=ad0ed4dc&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./static/winneranimation.vue?vue&type=style&index=0&id=ad0ed4dc&scoped=true&lang=css&"
          );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_style_index_0_id_ad0ed4dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_style_index_0_id_ad0ed4dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_style_index_0_id_ad0ed4dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
          if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
            (function (key) {
              __webpack_require__.d(__webpack_exports__, key, function () {
                return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_style_index_0_id_ad0ed4dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[
                  key
                ];
              });
            })(__WEBPACK_IMPORT_KEY__);

        /***/
      },

    /***/ "./static/winneranimation.vue?vue&type=template&id=ad0ed4dc&scoped=true&":
      /*!*******************************************************************************!*\
  !*** ./static/winneranimation.vue?vue&type=template&id=ad0ed4dc&scoped=true& ***!
  \*******************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_template_id_ad0ed4dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./winneranimation.vue?vue&type=template&id=ad0ed4dc&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/winneranimation.vue?vue&type=template&id=ad0ed4dc&scoped=true&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_template_id_ad0ed4dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_winneranimation_vue_vue_type_template_id_ad0ed4dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /***/ "./static/winnerdialog.vue":
      /*!*********************************!*\
  !*** ./static/winnerdialog.vue ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _winnerdialog_vue_vue_type_template_id_0208062a___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./winnerdialog.vue?vue&type=template&id=0208062a& */ "./static/winnerdialog.vue?vue&type=template&id=0208062a&"
          );
        /* harmony import */ var _winnerdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./winnerdialog.vue?vue&type=script&lang=js& */ "./static/winnerdialog.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js"
          );

        /* normalize component */

        var component = Object(
          _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[
            "default"
          ]
        )(
          _winnerdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[
            "default"
          ],
          _winnerdialog_vue_vue_type_template_id_0208062a___WEBPACK_IMPORTED_MODULE_0__[
            "render"
          ],
          _winnerdialog_vue_vue_type_template_id_0208062a___WEBPACK_IMPORTED_MODULE_0__[
            "staticRenderFns"
          ],
          false,
          null,
          null,
          null
        );

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "static/winnerdialog.vue";
        /* harmony default export */ __webpack_exports__["default"] =
          component.exports;

        /***/
      },

    /***/ "./static/winnerdialog.vue?vue&type=script&lang=js&":
      /*!**********************************************************!*\
  !*** ./static/winnerdialog.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_winnerdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib??vue-loader-options!./winnerdialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./static/winnerdialog.vue?vue&type=script&lang=js&"
          );
        /* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[
          "default"
        ] =
          _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_winnerdialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ];

        /***/
      },

    /***/ "./static/winnerdialog.vue?vue&type=template&id=0208062a&":
      /*!****************************************************************!*\
  !*** ./static/winnerdialog.vue?vue&type=template&id=0208062a& ***!
  \****************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_winnerdialog_vue_vue_type_template_id_0208062a___WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! -!../node_modules/babel-loader/lib??ref--0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./winnerdialog.vue?vue&type=template&id=0208062a& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./static/winnerdialog.vue?vue&type=template&id=0208062a&"
          );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "render",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_winnerdialog_vue_vue_type_template_id_0208062a___WEBPACK_IMPORTED_MODULE_0__[
              "render"
            ];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          "staticRenderFns",
          function () {
            return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_winnerdialog_vue_vue_type_template_id_0208062a___WEBPACK_IMPORTED_MODULE_0__[
              "staticRenderFns"
            ];
          }
        );

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=index-0eaf26ebcb547a38f91a.js.map
