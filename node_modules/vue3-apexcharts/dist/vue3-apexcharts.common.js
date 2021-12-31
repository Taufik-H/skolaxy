module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "95e6":
/***/ (function(module, exports) {

module.exports = require("apexcharts");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: external {"root":"ApexCharts","commonjs":"apexcharts","commonjs2":"apexcharts"}
var external_root_ApexCharts_commonjs_apexcharts_commonjs2_apexcharts_ = __webpack_require__("95e6");
var external_root_ApexCharts_commonjs_apexcharts_commonjs2_apexcharts_default = /*#__PURE__*/__webpack_require__.n(external_root_ApexCharts_commonjs_apexcharts_commonjs2_apexcharts_);

// CONCATENATED MODULE: ./src/vue3-apexcharts.js
/* eslint-disable */



// define all emitted events in order to better
// document how the component should work
const events = [
  "animationEnd",
  "beforeMount",
  "mounted",
  "updated",
  "click",
  "mouseMove",
  "legendClick",
  "markerClick",
  "selection",
  "dataPointSelection",
  "dataPointMouseEnter",
  "dataPointMouseLeave",
  "beforeZoom",
  "beforeResetZoom",
  "zoomed",
  "scrolled",
  "scrolled"
];

const vueApexcharts = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "apexchart",
  props: {
    options: {
      type: Object
    },
    type: {
      type: String
    },
    series: {
      type: Array,
      required: true
    },
    width: {
      default: "100%"
    },
    height: {
      default: "auto"
    }
  },

  // events emitted by this component
  emits: events,

  setup(props, { emit }) {
    const __el = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    const chart = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);

    const isObject = item => {
      return item && typeof item === "object" && !Array.isArray(item) && item != null;
    };

    const extend = (target, source) => {
      if (typeof Object.assign !== "function") {
        (function() {
          Object.assign = function(target) {
            // We must check against these specific cases.
            if (target === undefined || target === null) {
              throw new TypeError("Cannot convert undefined or null to object");
            }

            let output = Object(target);
            for (let index = 1; index < arguments.length; index++) {
              let source = arguments[index];
              if (source !== undefined && source !== null) {
                for (let nextKey in source) {
                  if (source.hasOwnProperty(nextKey)) {
                    output[nextKey] = source[nextKey];
                  }
                }
              }
            }
            return output;
          };
        })();
      }

      let output = Object.assign({}, target);
      if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
          if (isObject(source[key])) {
            if (!(key in target)) {
              Object.assign(output, {
                [key]: source[key]
              });
            } else {
              output[key] = extend(target[key], source[key]);
            }
          } else {
            Object.assign(output, {
              [key]: source[key]
            });
          }
        });
      }
      return output;
    };

    const init = async () => {
      await Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])();

      const newOptions = {
        chart: {
          type: props.type || props.options.chart.type || "line",
          height: props.height,
          width: props.width,
          events: {}
        },
        series: props.series
      };

      // emit events to the parent component
      // to allow for two-way data binding
      events.forEach(event => {
        let callback = (...args) => emit(event, ...args); // args => chartContext, options
        newOptions.chart.events[event] = callback;
      });

      const config = extend(props.options, newOptions);
      chart.value = new external_root_ApexCharts_commonjs_apexcharts_commonjs2_apexcharts_default.a(__el.value, config);
      return chart.value.render();
    };

    const refresh = () => {
      destroy();
      return init();
    };

    const destroy = () => {
      chart.value.destroy();
    };

    const updateSeries = (newSeries, animate) => {
      return chart.value.updateSeries(newSeries, animate);
    };

    const updateOptions = (newOptions, redrawPaths, animate, updateSyncedCharts) => {
      return chart.value.updateOptions(newOptions, redrawPaths, animate, updateSyncedCharts);
    };

    const toggleSeries = seriesName => {
      return chart.value.toggleSeries(seriesName);
    };

    const showSeries = seriesName => {
      chart.value.showSeries(seriesName);
    };

    const hideSeries = seriesName => {
      chart.value.hideSeries(seriesName);
    };

    const appendSeries = (newSeries, animate) => {
      return chart.value.appendSeries(newSeries, animate);
    };

    const resetSeries = () => {
      chart.value.resetSeries();
    };

    const toggleDataPointSelection = (seriesIndex, dataPointIndex) => {
      chart.value.toggleDataPointSelection(seriesIndex, dataPointIndex);
    };

    const appendData = newData => {
      return chart.value.appendData(newData);
    };

    const zoomX = (start, end) => {
      return chart.value.zoomX(start, end);
    };

    const dataURI = () => {
      return chart.value.dataURI();
    };

    const setLocale = localeName => {
      return chart.value.setLocale(localeName);
    };

    const addXaxisAnnotation = (options, pushToMemory) => {
      chart.value.addXaxisAnnotation(options, pushToMemory);
    };

    const addYaxisAnnotation = (options, pushToMemory) => {
      chart.value.addYaxisAnnotation(options, pushToMemory);
    };

    const addPointAnnotation = (options, pushToMemory) => {
      chart.value.addPointAnnotation(options, pushToMemory);
    };

    const removeAnnotation = (id, options) => {
      chart.value.removeAnnotation(id, options);
    };

    const clearAnnotations = () => {
      chart.value.clearAnnotations();
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onBeforeMount"])(() => {
      window.ApexCharts = external_root_ApexCharts_commonjs_apexcharts_commonjs2_apexcharts_default.a;
    });

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(() => {
      __el.value = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["getCurrentInstance"])().proxy.$el;
      init();
    });

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onBeforeUnmount"])(() => {
      if (!chart.value) {
        return;
      }
      destroy();
    });

    const reactiveProps = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toRefs"])(props);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(reactiveProps.options, () => {
      if (!chart.value && props.options) {
        init();
      } else {
        chart.value.updateOptions(props.options);
      }
    });

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(
      reactiveProps.series,
      () => {
        if (!chart.value && props.series) {
          init();
        } else {
          chart.value.updateSeries(props.series);
        }
      },
      { deep: true }
    );

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(reactiveProps.type, () => {
      refresh();
    });

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(reactiveProps.width, () => {
      refresh();
    });

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(reactiveProps.height, () => {
      refresh();
    });

    return {
      chart,
      init,
      refresh,
      destroy,
      updateOptions,
      updateSeries,
      toggleSeries,
      showSeries,
      hideSeries,
      resetSeries,
      zoomX,
      toggleDataPointSelection,
      appendData,
      appendSeries,
      addXaxisAnnotation,
      addYaxisAnnotation,
      addPointAnnotation,
      removeAnnotation,
      clearAnnotations,
      dataURI
    };
  },

  render() {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("div", {
      class: "vue-apexcharts",
    });
  }
});

/* harmony default export */ var vue3_apexcharts = (vueApexcharts);

// CONCATENATED MODULE: ./src/index.js
/* eslint-disable */


const install = app => {
  app.component(vue3_apexcharts.name, vue3_apexcharts);
};

vue3_apexcharts.install = install;

/* harmony default export */ var src_0 = (vue3_apexcharts);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
//# sourceMappingURL=vue3-apexcharts.common.js.map