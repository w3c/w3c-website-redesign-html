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
/* harmony import */ var _main_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
// import {stickyColumnHead} from "./main/tableheaders";
// import {collapsibles} from "./main/collapsibles";
 // stickyColumnHead();
// Tie the stickyTableHead function to a resize event, and debounce for performance

var timeout;
/*
window.addEventListener('resize', function (event) {

	// If timer is null, reset it to 66ms and run desired functions.
	// Otherwise, wait until timer is cleared
	if (!timeout) {
		timeout = setTimeout(function () {

			// Reset timeout
			timeout = null;

			// Run our resize functions
			stickyColumnHead();

		}, 66);
	}

}, false);*/

/***/ }),
/* 1 */
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
  } // Get the nav


  var nav = document.querySelector('#global-nav'); // Get the nav toggle button

  var mobileNavToggler = document.querySelector('[data-trigger="mobile-nav"]'); // Get all links in nav with class of "has children"

  var parentLinks = [].slice.call(nav.querySelectorAll('a.has-children')); // Get the different nav levels

  var levelOneLi = [].slice.call(document.querySelectorAll('#global-nav > ul > li'));
  var levelTwoLi = [].slice.call(document.querySelectorAll('#global-nav > ul > li > .nav__submenu > ul > li')); // Get all submenus

  var subMenuArray = [].slice.call(nav.querySelectorAll('.nav__submenu')); // Menu icon

  var menuIcon = '<svg class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="0.75em" height="0.75em"><path id="menu-icon" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/><path id="close-icon" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>'; // I18N for 'Menu' button text

  let openText = '<span class="visuallyhidden">Open</span> Menu';

  if (document.documentElement.lang === 'fr') {
    openText = '<span class="visuallyhidden">Ouvrir le</span> Menu';
  } else if (document.documentElement.lang === 'ja') {
    openText = 'メニュー<span class="visuallyhidden">を開く</span>';
  } else if (document.documentElement.lang === 'zh-Hans') {
    openText = '<span class="visuallyhidden">打开</span>菜单';
  } // I18N for 'Close' button text


  let closeText = 'Close <span class="visuallyhidden">Menu</span>';

  if (document.documentElement.lang === 'fr') {
    closeText = '<span class="visuallyhidden">Fermer le</span> Menu';
  } else if (document.documentElement.lang === 'ja') {
    closeText = '<span class="visuallyhidden">メニュー</span>を閉じる';
  } else if (document.documentElement.lang === 'zh-Hans') {
    closeText = '关闭<span class="visuallyhidden">菜单</span>';
  } // I18N for 'Back' button value


  let backText = 'Back ';

  if (document.documentElement.lang === 'fr') {
    backText = 'Retour ';
  } else if (document.documentElement.lang === 'ja') {
    backText = '戻る ';
  } else if (document.documentElement.lang === 'zh-Hans') {
    backText = '返回 ';
  } // Function to close all open submenus


  var closeSubmenus = function () {
    var submenuTriggers = [].slice.call(nav.querySelectorAll('[data-trigger]'));
    submenuTriggers.forEach(function (trigger) {
      trigger.setAttribute('aria-expanded', 'false');
      trigger.parentElement.querySelector('.nav__submenu').setAttribute('aria-hidden', 'true');
    });
  }; // Function to close all open level 2 menus


  var closeLevelTwoMenus = function () {
    var levelTwoTriggers = [].slice.call(nav.querySelectorAll('[data-trigger="level-two"]'));
    levelTwoTriggers.forEach(function (trigger) {
      trigger.setAttribute('aria-expanded', 'false');
      trigger.parentElement.querySelector('.nav__submenu').setAttribute('aria-hidden', 'true');
    });
  }; // Toggle mobile navigation


  var toggleMobileNav = function () {
    if (mobileNavToggler && nav) {
      mobileNavToggler.innerHTML = openText + menuIcon;
      mobileNavToggler.setAttribute('aria-expanded', 'false');
      nav.setAttribute('aria-hidden', 'true');
      document.addEventListener('click', function (event) {
        if (event.target.matches('[data-trigger="mobile-nav"]')) {
          if (event.target.getAttribute('aria-expanded') === 'false') {
            event.target.setAttribute('aria-expanded', 'true');
            mobileNavToggler.innerHTML = closeText + menuIcon;
            nav.setAttribute('aria-hidden', 'false');
          } else {
            event.target.setAttribute('aria-expanded', 'false');
            mobileNavToggler.innerHTML = openText + menuIcon;
            nav.setAttribute('aria-hidden', 'true');
            closeSubmenus();
          }
        }
      }, false);
    }
  }; // Media query event handler


  var mq = window.matchMedia('(min-width: 1024px)');
  mq.addListener(WidthChange);
  WidthChange(mq); // Media query change

  function WidthChange(mq) {
    if (!mq.matches) {
      toggleMobileNav();
    } else {
      mobileNavToggler.setAttribute('aria-expanded', 'true');
      nav.setAttribute('aria-hidden', 'false');
    }
  }

  parentLinks.forEach(function (item, index) {
    // Clone the link
    var clonedLink = item.cloneNode(true); // Get the inner text content

    var linkText = item.textContent + '&nbsp;'; // Create an equivalent button element with the link text

    var toggleButton = document.createElement('button');
    toggleButton.setAttribute('type', 'button');
    toggleButton.innerHTML = linkText + '<svg class="icon nav-mobile" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 6 10" width="0.75em" height="0.75em"><path class="arrow-right-ltr" d="M1.269 9.616l4.594-4.434a.415.415 0 000-.616L1.27.132a.451.451 0 00-.638 0L.137.609a.415.415 0 000 .616L3.09 4.076l.752.799-.687.747-3.02 2.914a.415.415 0 000 .616l.495.477a.463.463 0 00.638-.013z"/><path class="arrow-left-ltr" d="M1.269 9.616l4.594-4.434a.415.415 0 000-.616L1.27.132a.451.451 0 00-.638 0L.137.609a.415.415 0 000 .616L3.09 4.076l.752.799-.687.747-3.02 2.914a.415.415 0 000 .616l.495.477a.463.463 0 00.638-.013z" transform="rotate(180 3 4.876)" /></svg><svg class="icon nav-wide" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 6 10" width="0.75em" height="0.75em"><path class="arrow-down" d="M1.269 9.616l4.594-4.434a.415.415 0 000-.616L1.27.132a.451.451 0 00-.638 0L.137.609a.415.415 0 000 .616L3.09 4.076l.752.799-.687.747-3.02 2.914a.415.415 0 000 .616l.495.477a.463.463 0 00.638-.013z" transform="rotate(90 3 4.876)"></path><path class="arrow-up" d="M1.269 9.616l4.594-4.434a.415.415 0 000-.616L1.27.132a.451.451 0 00-.638 0L.137.609a.415.415 0 000 .616L3.09 4.076l.752.799-.687.747-3.02 2.914a.415.415 0 000 .616l.495.477a.463.463 0 00.638-.013z" transform="rotate(270 3 4.876)"></path></svg>'; // Get the submenu

    var submenu = item.parentNode.querySelector('.nav__submenu'); // Get list in submenu

    var submenuFirstChild = item.parentNode.querySelector('.nav__submenu > *'); // Insert cloned link ahead of the list

    submenu.insertBefore(clonedLink, submenuFirstChild); // Replace the link with the button

    item.parentNode.replaceChild(toggleButton, item); // Create submenu 'Back' button

    var closeSubmenuButton = document.createElement('button');
    closeSubmenuButton.setAttribute('type', 'button');
    closeSubmenuButton.setAttribute('data-close', 'level');
    closeSubmenuButton.setAttribute('class', 'with-icon--before');
    closeSubmenuButton.innerHTML = '<svg class="icon" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 6 10" width="0.75em" height="0.75em"><path class="arrow-right-ltr" d="M1.269 9.616l4.594-4.434a.415.415 0 000-.616L1.27.132a.451.451 0 00-.638 0L.137.609a.415.415 0 000 .616L3.09 4.076l.752.799-.687.747-3.02 2.914a.415.415 0 000 .616l.495.477a.463.463 0 00.638-.013z"/><path class="arrow-left-ltr" d="M1.269 9.616l4.594-4.434a.415.415 0 000-.616L1.27.132a.451.451 0 00-.638 0L.137.609a.415.415 0 000 .616L3.09 4.076l.752.799-.687.747-3.02 2.914a.415.415 0 000 .616l.495.477a.463.463 0 00.638-.013z" transform="rotate(180 3 4.876)" /></svg> ' + backText; // Insert submenu 'Back' button into DOM

    submenu.appendChild(closeSubmenuButton);
  }); // Add attributes needed for dropdown functionality

  for (var i = 0; i < subMenuArray.length; i++) {
    subMenuArray[i].setAttribute('aria-hidden', 'true');
  }

  levelOneLi.forEach(function (li) {
    var button = li.querySelector('button');

    if (button) {
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('data-trigger', 'level-one');
    }
  });
  levelTwoLi.forEach(function (li) {
    var button = li.querySelector('button');

    if (button) {
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('data-trigger', 'level-two');
    }
  }); // Level one toggle functionality

  var levelOneTriggers = [].slice.call(nav.querySelectorAll('[data-trigger="level-one"]'));

  if (levelOneTriggers.length > 0) {
    document.addEventListener('click', function (event) {
      if (event.target.matches('[data-trigger="level-one"]')) {
        var targetMenu = event.target.parentElement.querySelector('.nav__submenu');
        var prevMenu = targetMenu.parentElement.parentElement.parentElement;

        if (event.target.getAttribute('aria-expanded') === 'false') {
          closeSubmenus();
          event.target.setAttribute('aria-expanded', 'true');
          targetMenu.setAttribute('aria-hidden', 'false');
          targetMenu.style.minHeight = prevMenu.offsetHeight + 'px';
        } else {
          event.target.setAttribute('aria-expanded', 'false');
          targetMenu.setAttribute('aria-hidden', 'true');
        }
      }

      if (event.target.matches('[data-close="level"]')) {
        event.target.parentElement.setAttribute('aria-hidden', 'true');
        event.target.closest('li').querySelector('[data-trigger]').setAttribute('aria-expanded', 'false');
      }
    });
  } // Level two toggle functionality


  var levelTwoTriggers = [].slice.call(nav.querySelectorAll('[data-trigger="level-two"]'));

  if (levelTwoTriggers.length > 0) {
    document.addEventListener('click', function (event) {
      if (event.target.matches('[data-trigger="level-two"]')) {
        var targetMenu = event.target.parentElement.querySelector('.nav__submenu');
        var prevMenu = targetMenu.parentElement.parentElement.parentElement;

        if (event.target.getAttribute('aria-expanded') == 'false') {
          closeLevelTwoMenus();
          event.target.setAttribute('aria-expanded', 'true');
          targetMenu.setAttribute('aria-hidden', 'false');
          targetMenu.style.minHeight = prevMenu.offsetHeight + 'px';
        } else {
          event.target.setAttribute('aria-expanded', 'false');
          targetMenu.setAttribute('aria-hidden', 'true');
        }
      }
    });
  } // Escape key functionality to close nav menus


  document.addEventListener('keyup', function (event) {
    if (event.defaultPrevented) {
      return;
    }

    var key = event.key || event.keyCode;

    if (key === 'Escape' || key === 'Esc' || key === 27) {
      var levelOneTrigger = nav.querySelector('[data-trigger="level-one"][aria-expanded="true"]');
      var levelTwoTrigger = nav.querySelector('[data-trigger="level-two"][aria-expanded="true"]');

      if (levelTwoTrigger) {
        var levelTwoTarget = levelTwoTrigger.parentElement.querySelector('.nav__submenu');
        levelTwoTrigger.setAttribute('aria-expanded', 'false');
        levelTwoTarget.setAttribute('aria-hidden', 'true');
      } else if (levelOneTrigger) {
        var levelOneTarget = levelOneTrigger.parentElement.querySelector('.nav__submenu');
        levelOneTrigger.setAttribute('aria-expanded', 'false');
        levelOneTarget.setAttribute('aria-hidden', 'true');
      } else if (mobileNavToggler.getAttribute('aria-expanded') === 'true') {
        mobileNavToggler.setAttribute('aria-expanded', 'false');
        nav.setAttribute('aria-hidden', 'true');
      }
    }
  });
}();



/***/ })
/******/ ]);