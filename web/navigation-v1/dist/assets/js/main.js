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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_tableheaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _main_collapsibles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _main_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



Object(_main_tableheaders__WEBPACK_IMPORTED_MODULE_0__["stickyColumnHead"])(); // Tie the stickyTableHead function to a resize event, and debounce for performance

var timeout;
window.addEventListener('resize', function (event) {
  // If timer is null, reset it to 66ms and run desired functions.
  // Otherwise, wait until timer is cleared
  if (!timeout) {
    timeout = setTimeout(function () {
      // Reset timeout
      timeout = null; // Run our resize functions

      Object(_main_tableheaders__WEBPACK_IMPORTED_MODULE_0__["stickyColumnHead"])();
    }, 66);
  }
}, false);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stickyColumnHead", function() { return stickyColumnHead; });
/**
 * Sticky headers enhancement for tables
 * Loosely based on https://bbc.github.io/gel/components/data-tables/
 */
var stickyColumnHead = function () {
  // Check if `position: sticky;` is supported
  document.documentElement.style['position'] = 'sticky';

  if (document.documentElement.style['position'] === 'sticky') {
    document.documentElement.removeAttribute('style'); // Get all the table wraps

    var tablesArray = Array.prototype.slice.call(document.querySelectorAll('.table-wrap'));

    if (tablesArray) {
      // Loop through them
      tablesArray.forEach(function (item) {
        // Get the parent element of the table wrap, and it's width
        var container = item.parentElement;
        var containerWidth = parseInt(window.getComputedStyle(container, null).getPropertyValue("width"), 10); // Get the table inside the table wrap, and it's width

        var table = item.firstElementChild;
        var tableWidth = parseInt(window.getComputedStyle(table, null).getPropertyValue("width"), 10); // Comparison: true if the container is wider than the table

        var noScroll = containerWidth >= tableWidth; // Only make the container focusable if it needs scrolling

        item.tabIndex = noScroll ? -1 : 0; // Activate sticky headers for non-scrolling tables

        item.style.overflowX = noScroll ? 'visible' : 'auto';
        table.querySelector('thead').classList.toggle('js-sticky', noScroll);
      }); // End loop
    } // End if statement

  } // End if statement

};



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapsibles", function() { return collapsibles; });
/**
 * Collapsible sections
 * See https://heydon.github.io/inclusive-components-demos/collapsible-sections/progressive.html
 */
var collapsibles = function () {
  // Get all the collapsible containers
  var collapseArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="collapsibles"]'));

  if (collapseArray) {
    // Loop through containers
    collapseArray.forEach(function (item) {
      // Get headings inside a collapsible container
      var headingsArray = Array.prototype.slice.call(item.querySelectorAll('[data-heading="collapsibles"]')); // Loop through headings

      headingsArray.forEach(function (heading, index) {
        // Insert a button for opening/closing the collapsible section
        heading.innerHTML = '<button aria-expanded="false">' + heading.textContent + '<svg aria-hidden="true" focusable="false" viewBox="0 0 10 10"><rect class="vert" height="8" width="2" y="1" x="4" /><rect height="2" width="8" y="4" x="1" /></svg></button>'; // Add appropriate aria role to the collapsible section

        heading.nextElementSibling.setAttribute('aria-hidden', 'true'); // Assign the button

        var btn = heading.querySelector('button'); // Add click event listener

        btn.addEventListener('click', function (event) {
          // Cast the state as a boolean
          var expanded = btn.getAttribute('aria-expanded') === 'true'; // Switch the state

          btn.setAttribute('aria-expanded', !expanded); // Switch the collapsible section's visibility

          heading.nextElementSibling.setAttribute('aria-hidden', expanded);
        });
      }); // End loop
    }); // End loop
  } // End if statement

}();



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return navigation; });
var navigation = function () {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (Element.prototype.matches.call(el, s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  }

  const runMobileNav = function () {
    const mobileNav = document.querySelector('.nav-mobile');
    const mobileNavToggler = document.querySelector('[data-button="mobile-nav-toggle"]');
    const subnavTrigger = Array.from(mobileNav.querySelectorAll('.has-children')); // I18N for button value

    let closeText = 'Close ';

    if (document.documentElement.lang === 'fr') {
      closeText = 'Fermer ';
    } else if (document.documentElement.lang === 'ja') {
      closeText = '閉じる ';
    } else if (document.documentElement.lang === 'zh-Hans') {
      closeText = '关闭 ';
    } // Close all open submenus


    const closeSubmenus = function () {
      subnavTrigger.forEach(function (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
        trigger.nextElementSibling.setAttribute('aria-hidden', 'true');
      });
    }; // Toggle mobile navigation


    const toggleMobileNav = function () {
      if (mobileNavToggler && mobileNav) {
        mobileNavToggler.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.addEventListener('click', function (event) {
          if (event.target.matches('.global-header__menu-btn')) {
            if (event.target.getAttribute('aria-expanded') === 'false') {
              event.target.setAttribute('aria-expanded', 'true');
              event.target.childNodes[0].nodeValue = closeText;
              mobileNav.setAttribute('aria-hidden', 'false');
            } else {
              event.target.setAttribute('aria-expanded', 'false');
              event.target.childNodes[0].nodeValue = 'Menu ';
              mobileNav.setAttribute('aria-hidden', 'true');
              closeSubmenus();
            }
          }
        }, false);
      }
    };

    toggleMobileNav(); // Toggle mobile navigation submenus

    if (subnavTrigger.length > 0) {
      subnavTrigger.forEach(function (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
        trigger.nextElementSibling.setAttribute('aria-hidden', 'true');
      });
      document.addEventListener('click', function (event) {
        if (event.target.matches('.nav-mobile .has-children')) {
          event.preventDefault();
          const subMenu = event.target.parentElement.querySelector('.nav-mobile__submenu');

          if (event.target.getAttribute('aria-expanded') === 'false') {
            event.target.setAttribute('aria-expanded', 'true');
            subMenu.setAttribute('aria-hidden', 'false');
            const prevMenu = subMenu.parentElement.parentElement.parentElement;
            subMenu.style.minHeight = prevMenu.offsetHeight + 'px';
            window.scrollTo({
              top: 0,
              left: 0,
              behaviour: 'auto'
            });
          } else {
            closeSubmenus();
          }
        }

        if (event.target.matches('.nav-mobile [data-button="submenu-close"]')) {
          event.target.parentElement.setAttribute('aria-hidden', 'true');
          event.target.closest('li').querySelector('.has-children').setAttribute('aria-expanded', 'false');
        }
      });
    }
  };

  runMobileNav();

  const runWideNav = function () {
    const wideNav = document.querySelector('.nav-wide');
    const subnavTrigger = Array.from(wideNav.querySelectorAll('.has-children')); // Close all open submenus

    const closeSubmenus = function () {
      subnavTrigger.forEach(function (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
        trigger.parentElement.querySelector('.nav-wide__submenu').setAttribute('aria-hidden', 'true');
      });
    }; // Toggle wide navigation submenus


    if (subnavTrigger.length > 0) {
      subnavTrigger.forEach(function (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
        trigger.parentElement.querySelector('.nav-wide__submenu').setAttribute('aria-hidden', 'true');
      });
      document.addEventListener('click', function (event) {
        if (event.target.matches('.nav-wide .has-children')) {
          event.preventDefault();
          const subMenu = event.target.parentElement.querySelector('.nav-wide__submenu');

          if (event.target.getAttribute('aria-expanded') === 'false') {
            closeSubmenus();
            event.target.setAttribute('aria-expanded', 'true');
            subMenu.setAttribute('aria-hidden', 'false');
          } else {
            event.target.setAttribute('aria-expanded', 'false');
            subMenu.setAttribute('aria-hidden', 'true');
          }
        }

        if (event.target.matches('[data-button="wide-nav-close"]')) {
          closeSubmenus();
        }
      });
    }
  };

  runWideNav();
}();



/***/ })
/******/ ]);