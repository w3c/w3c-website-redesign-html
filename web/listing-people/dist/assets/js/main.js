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
/* harmony import */ var _main_responsive_tables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _main_collapsibles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _main_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _main_account_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _main_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _main_cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _main_form_error_summary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);







Object(_main_responsive_tables__WEBPACK_IMPORTED_MODULE_0__["responsiveTables"])(); // Tie the stickyTableHead function to a resize event, and debounce for performance

var timeout;
window.addEventListener('resize', function (event) {
  // If timer is null, reset it to 66ms and run desired functions.
  // Otherwise, wait until timer is cleared
  if (!timeout) {
    timeout = setTimeout(function () {
      // Reset timeout
      timeout = null; // Run our resize functions

      Object(_main_responsive_tables__WEBPACK_IMPORTED_MODULE_0__["responsiveTables"])();
    }, 66);
  }
}, false);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsiveTables", function() { return responsiveTables; });
/**
 * Responsive tables
 * Tab index changed from 0 to -1 if there is no horizontal overflow
 */
var responsiveTables = function responsiveTables() {
  // Get all the table wraps
  var tablesArray = Array.prototype.slice.call(document.querySelectorAll('.table-wrap'));

  if (tablesArray) {
    // Loop through them
    tablesArray.forEach(function (item) {
      // Get the parent element of the table wrap, and it's width
      var container = item.parentElement;
      var containerWidth = parseInt(window.getComputedStyle(container, null).getPropertyValue("width"), 10); // Get the table inside the table wrap, and it's width

      var table = item.firstElementChild;
      var tableWidth = parseInt(window.getComputedStyle(table, null).getPropertyValue("width"), 10); // Comparison: true if the container is wider than the table

      var noScroll = containerWidth >= tableWidth;
      var ariaLabel = item.querySelector('caption').id; // Only make the container focusable if it needs scrolling

      if (noScroll === true) {
        item.removeAttribute('role');
        item.removeAttribute('aria-labelledby');
        item.removeAttribute('tabindex');
      } else {
        item.setAttribute('role', 'region');
        item.setAttribute('aria-labelledby', ariaLabel);
        item.setAttribute('tabindex', '0');
      }
    }); // End loop
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
        heading.innerHTML = '<button class="button--ghost" aria-expanded="false">' + heading.innerHTML + '<svg class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 320 512" width="30px" height="30px"><path class="angle-down" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/><path class="angle-up" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"/></svg></button>'; // Add appropriate aria role to the collapsible section

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
  } // Helper: Check whether element exists


  function exists(elem) {
    return elem != null && (elem.length >= 0 || elem.innerHTML.length >= 0);
  }

  var nav = document.querySelector('.global-nav__inner ul');
  var mobileNavToggler = document.querySelector('[data-trigger="mobile-nav"]');
  var menuIcon = '<svg class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 448 512" width="1em" height="1em"><path id="menu-icon" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/><path id="close-icon" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>';
  var parentLinks = [].slice.call(nav.querySelectorAll('.top-nav-item.has-children > a'));
  var subNavArray = [].slice.call(nav.querySelectorAll('.nav__submenu')); // I18N for 'Menu' button text

  var menuText = 'Menu';

  if (document.documentElement.lang === 'ja') {
    menuText = 'メニュー';
  } else if (document.documentElement.lang === 'zh-hans') {
    menuText = '菜单';
  } // I18N for 'Main menu' back button text


  var backText = 'Back to main menu';

  if (document.documentElement.lang === 'ja') {
    backText = 'メインメニューに戻る';
  } else if (document.documentElement.lang === 'zh-hans') {
    backText = '返回主菜单';
  }

  var closeSubNavs = function closeSubNavs() {
    var subNavTriggers = [].slice.call(nav.querySelectorAll('[data-trigger="subnav"]'));
    subNavTriggers.forEach(function (trigger) {
      trigger.setAttribute('aria-expanded', 'false');
      trigger.removeAttribute('class');
      trigger.nextElementSibling.setAttribute('aria-hidden', 'true');
    });
  }; // Toggle mobile navigation


  var toggleMobileNav = function toggleMobileNav() {
    if (mobileNavToggler && nav) {
      mobileNavToggler.innerHTML = menuText + menuIcon;
      mobileNavToggler.setAttribute('aria-expanded', 'false');
      nav.setAttribute('aria-hidden', 'true');
      document.addEventListener('click', function (event) {
        if (event.target.matches('[data-trigger="mobile-nav"]')) {
          if (event.target.getAttribute('aria-expanded') === 'false') {
            event.target.setAttribute('aria-expanded', 'true');
            nav.setAttribute('aria-hidden', 'false');
          } else {
            event.target.setAttribute('aria-expanded', 'false');
            nav.setAttribute('aria-hidden', 'true');
            closeSubNavs();
          }
        }
      }, false);
    }
  }; // Media query event handler


  var mq = window.matchMedia('(min-width: 71.25em)');
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

  if (exists(parentLinks)) {
    parentLinks.forEach(function (item) {
      var clonedLink = item.cloneNode(true);
      var linkText = item.textContent + '&nbsp;';
      var toggleButton = document.createElement('button');
      var backButton = document.createElement('button');
      var fragment = document.createDocumentFragment();
      var subNav = item.parentNode.querySelector('.nav__submenu');
      var submenuFirstChild = item.parentNode.querySelector('.nav__submenu > *');
      toggleButton.setAttribute('type', 'button');
      toggleButton.setAttribute('aria-expanded', 'false');
      toggleButton.setAttribute('data-trigger', 'subnav');
      toggleButton.innerHTML = linkText + '<svg class="icon nav-small" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 256 512" width="1em" height="1em"><path class="angle-right" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/><path class="angle-left" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg><svg class="icon nav-wide" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 320 512" width="1em" height="1em"><path class="angle-down" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/><path class="angle-up" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"/></svg>';
      backButton.setAttribute('type', 'button');
      backButton.setAttribute('class', 'button button--ghost u-full-width with-icon--before with-icon--larger');
      backButton.setAttribute('data-trigger', 'mobile-back');
      backButton.innerHTML = '<svg class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 256 512" width="1em" height="1em"><path class="angle-right" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/><path class="angle-left" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg>' + backText;
      fragment.appendChild(backButton);
      fragment.appendChild(clonedLink);
      subNav.insertBefore(fragment, submenuFirstChild);
      item.parentNode.replaceChild(toggleButton, item);
    });

    for (var i = 0; i < subNavArray.length; i++) {
      subNavArray[i].setAttribute('aria-hidden', 'true');
    }

    document.addEventListener('click', function (event) {
      if (event.target.matches('[data-trigger="subnav"]')) {
        var targetNav = event.target.nextElementSibling;

        if (targetNav.getAttribute('aria-hidden') === 'true') {
          closeSubNavs();
          event.target.setAttribute('aria-expanded', 'true');
          event.target.setAttribute('class', 'js-active');
          targetNav.setAttribute('aria-hidden', 'false');
        } else {
          event.target.setAttribute('aria-expanded', 'false');
          event.target.removeAttribute('class');
          targetNav.setAttribute('aria-hidden', 'true');
        }
      } else if (event.target.matches('[data-trigger="mobile-back"]')) {
        event.target.parentElement.setAttribute('aria-hidden', 'true');
        event.target.closest('li').querySelector('[data-trigger="subnav"]').setAttribute('aria-expanded', 'false');
      } else {
        closeSubNavs();
      }
    });
    document.addEventListener('keyup', function (event) {
      if (event.defaultPrevented) {
        return;
      }

      var key = event.key || event.keyCode;

      if (key === 'Escape' || key === 'Esc' || key === 27) {
        closeSubNavs();
      }
    });
  }
}();



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountMenu", function() { return accountMenu; });
var accountMenu = function () {
  // Helper: Check whether element exists
  function exists(elem) {
    return elem != null && (elem.length >= 0 || elem.innerHTML.length >= 0);
  } // @todo Check whether this if statement for the prototype version is accurate for the live site or needs replacing with a different mechanism


  if (document.querySelector('.signed-in')) {
    // @todo Need JS to make API call to return JSON object with these properties
    var profile = {
      name: 'Simon Jones',
      email: 'simon@studio24.net',
      avatar: 'https://www.w3.org/2006/05/u/1682ihk1hqqo-tn.jpg',
      messages: true
    };
    var fragment = document.createDocumentFragment();
    var status = document.querySelector('.global-header [role="status"]');
    var statusText;
    var toggleButton = document.createElement('button');
    var accMenu = document.createElement('div');
    accMenu.setAttribute('class', 'account-menu'); // @todo This array created from profile object should only contain those values needed for the dropdown menu (name and email)

    var profileArray = Object.keys(profile).map(function (item) {
      return profile[item];
    });
    var list = document.createElement('ul');
    list.setAttribute('class', 'clean-list');
    list.setAttribute('role', 'list');
    profileArray.forEach(function (item) {
      var li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    var accountLink = document.createElement('li');
    var signOutLink = document.createElement('li'); // I18N

    if (document.documentElement.lang === 'ja') {
      accountLink.innerHTML = '<a href="page.html" hreflang="ja">マイアカウント</a>';

      if (profile.messages === true) {
        statusText = '未読メッセージがあります';
      } else {
        statusText = '未読メッセージはありません';
      }
    } else if (document.documentElement.lang === 'zh-hans') {
      accountLink.innerHTML = '<a href="page.html" hreflang="zh-hans">我的帐户</a>';

      if (profile.messages === true) {
        statusText = '您有未读消息';
      } else {
        statusText = '您没有未读邮件';
      }
    } else {
      accountLink.innerHTML = '<a href="page.html">My account</a>';

      if (profile.messages === true) {
        statusText = 'You have unread messages';
      } else {
        statusText = 'You have no unread messages';
      }
    }

    if (document.documentElement.lang === 'ja') {
      signOutLink.innerHTML = '<a href="page.html" hreflang="ja">サインアウト</a>';
    } else if (document.documentElement.lang === 'zh-hans') {
      signOutLink.innerHTML = '<a href="page.html" hreflang="zh-hans">登出</a>';
    } else {
      signOutLink.innerHTML = '<a href="page.html">Sign out</a>';
    }

    list.append(accountLink);
    list.appendChild(signOutLink);
    fragment.appendChild(list);
    accMenu.appendChild(fragment);
    var domTargetSmall = document.querySelector('.logo-link');
    var domTargetWide = document.querySelector('.global-nav__inner ul');
    toggleButton.setAttribute('type', 'button');
    toggleButton.setAttribute('class', 'button button--ghost with-icon--larger');
    toggleButton.setAttribute('data-trigger', 'account-menu');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.innerHTML = '<span class="sr-only">My account </span><div class="avatar avatar--small"><img alt="" src="' + profile.avatar + '"/></div>'; // Media query event handler

    var mq = window.matchMedia('(min-width: 71.25em)');
    mq.addListener(insertAccountBtn);
    insertAccountBtn(mq);

    function insertAccountBtn(mq) {
      if (!mq.matches) {
        domTargetSmall.parentNode.insertBefore(toggleButton, domTargetSmall.nextSibling);
        toggleButton.parentNode.insertBefore(accMenu, toggleButton.nextSibling);
        status.textContent = statusText;
      } else {
        domTargetWide.parentNode.insertBefore(toggleButton, domTargetWide.nextSibling);
        toggleButton.parentNode.insertBefore(accMenu, toggleButton.nextSibling);
        status.textContent = statusText;
      }
    }

    var accountToggler = document.querySelector('[data-trigger="account-menu"]');

    if (exists(accountToggler)) {
      // @todo Not sure if this is sufficient or whether there needs to be a re-usable function to check this. This is for the visual styling on button
      if (profile.messages === true) {
        accountToggler.classList.add('js-has-msg');
      } else {
        accountToggler.classList.remove('js-has-msg');
      }

      document.addEventListener('click', function (event) {
        if (event.target.matches('[data-trigger="account-menu"]')) {
          if (event.target.getAttribute('aria-expanded') === 'false') {
            event.target.setAttribute('aria-expanded', 'true');
          } else {
            event.target.setAttribute('aria-expanded', 'false');
          }
        } else {
          if (accountToggler.getAttribute('aria-expanded') === 'true') {
            accountToggler.setAttribute('aria-expanded', false);
            accMenu.setAttribute('aria-hidden', 'true');
          }
        }
      }, false);
      document.addEventListener('keyup', function (event) {
        if (event.defaultPrevented) {
          return;
        }

        var key = event.key || event.keyCode;

        if (key === 'Escape' || key === 'Esc' || key === 27) {
          if (accountToggler.getAttribute('aria-expanded') === 'true') {
            accountToggler.setAttribute('aria-expanded', false);
            accMenu.setAttribute('aria-hidden', 'true');
          }
        }
      });
    }
  }
}();



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentSlider", function() { return contentSlider; });
/**
 * Content slider (carousel)
 */
var contentSlider = function () {
  // I18N
  var sliderText;
  var controlsText;
  var prevText;
  var nextText;
  var slideText;
  var ofText;
  var activeDotText;
  var selectedText;

  if (document.documentElement.lang === 'ja') {
    sliderText = 'スライダーの内容';
    controlsText = 'スライダーコントロール';
    prevText = '前のスライド';
    nextText = '次のスライド';
    slideText = 'スライド';
    ofText = '/';
    activeDotText = '（現在のアイテム）';
    selectedText = ' 選択済み';
  } else if (document.documentElement.lang === 'zh-hans') {
    sliderText = '滑块内容';
    controlsText = '滑块控件';
    prevText = '上一张幻灯片';
    nextText = '下一张幻灯片';
    slideText = '幻灯片';
    ofText = '之';
    activeDotText = '（当前项）';
    selectedText = ' 选定的';
  } else {
    sliderText = 'slider content';
    controlsText = 'slider controls';
    prevText = 'previous slide';
    nextText = 'next slide';
    slideText = 'Slide ';
    ofText = ' of ';
    activeDotText = ' (current item)';
    selectedText = ' selected';
  }

  var slider = document.querySelector('[data-component="slider"] .l-center > div');
  var dir = document.documentElement.getAttribute('dir');

  if (slider) {
    var list = slider.querySelector('ul');
    list.setAttribute('tabindex', '0');
    list.setAttribute('aria-label', sliderText);
    var slides = Array.prototype.slice.call(list.querySelectorAll('li')); // Add current class to first slide

    slides[0].classList.add('js-current');

    if (slides.length > 1) {
      /**
       * Create previous and next button controls for slider
       * @return {HTMLUListElement}
       */
      function createControls() {
        var controls = document.createElement('ul');
        controls.setAttribute('class', 'slider-controls');
        controls.setAttribute('aria-label', controlsText);
        controls.innerHTML = '<li><button class="button button--ghost previous with-icon--larger" aria-label="' + prevText + '" style="padding:0.4375rem;"><svg class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 256 512" width="1em" height="1em"><path class="angle-right" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/><path class="angle-left" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg></button></li>' + '<li style="margin-top:0;margin-inline-start:0.25rem;"><button class="button button--ghost next with-icon--larger" aria-label="' + nextText + '" style="padding:0.4375rem;"><svg class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 256 512" width="1em" height="1em"><path class="angle-right" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/><path class="angle-left" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg></button></li>'; // controls.style.justifyContent = 'space-evenly';

        controls.style.display = 'inline-flex';
        controls.style.marginTop = '0.625rem';
        return controls;
      }
      /**
       * Create dot navigation for slider
       * @param slides
       * @return {HTMLUListElement}
       */


      function createDotNav(slides) {
        var dotNavContainer = document.createElement('ul');
        dotNavContainer.setAttribute('class', 'slide-nav');
        dotNavContainer.setAttribute('class', 'clean-list');
        dotNavContainer.setAttribute('role', 'list');
        dotNavContainer.style.display = 'flex';
        dotNavContainer.style.justifyContent = 'center';
        Array.prototype.forEach.call(slides, function (el, i) {
          var li = document.createElement('li');
          li.style.marginTop = '0';
          li.style.marginLeft = '0.25rem';
          li.style.marginRight = '0.25rem';
          var cssClass = i === 0 ? 'class="button button--ghost js-current" ' : 'class="button button--ghost " ';
          var current = i === 0 ? ' <span class="visuallyhidden active-dot">' + activeDotText + '</span>' : '';
          li.innerHTML = '<button ' + cssClass + 'data-slide="' + i + '"><span class="visuallyhidden">' + slideText + (i + 1) + ofText + slides.length + '</span>' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="0.625rem" height="0.625rem" focusable="false" aria-hidden="true"><defs/><circle cx="5" cy="5" r="4" fill="currentColor" fill-rule="evenodd" stroke="#111" stroke-width="2"/></svg>' + current + '</button>';
          dotNavContainer.appendChild(li);
        });
        return dotNavContainer;
      }
      /**
       * Create ARIA live region for slider
       * @return {HTMLDivElement}
       */


      function createLiveRegion() {
        var liveRegion = document.createElement('div');
        liveRegion.setAttribute('role', 'status');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.style.display = 'inline-block';
        liveRegion.style.paddingLeft = '0.625rem';
        liveRegion.style.paddingRight = '0.625rem';
        liveRegion.textContent = slideText + 1 + ofText + slides.length + activeDotText; // liveRegion.setAttribute('class', 'visuallyhidden');

        return liveRegion;
      }

      var controls = createControls();
      var prev = controls.querySelector('.previous');
      var next = controls.querySelector('.next');
      prev.disabled = true; // var dotNav = createDotNav(slides);
      // var dots = Array.prototype.slice.call(dotNav.querySelectorAll('.button'));

      var liveRegion = createLiveRegion();
      slider.setAttribute('class', 'js-slider');
      slider.parentNode.insertBefore(controls, slider.nextElementSibling); // controls.parentNode.insertBefore(dotNav, controls.nextElementSibling);
      // dotNav.parentNode.insertBefore(liveRegion, dotNav.nextElementSibling);

      controls.parentNode.insertBefore(liveRegion, controls.nextElementSibling);
      /**
       * Set slide positions, which are used in the switchSlide function
       */

      function setSlidePositions() {
        var slideWidth = slides[0].getBoundingClientRect().width;

        for (var slide = 0; slide < slides.length; slide++) {
          slides[slide].style.left = slideWidth * slide + 'px';
        }
      }

      setSlidePositions();
      /**
       * Switch between slides
       * @param {number} currentSlideIndex
       * @param {number} targetSlideIndex
       */

      function switchSlide(currentSlideIndex, targetSlideIndex) {
        var currentSlide = slides[currentSlideIndex];
        var targetSlide = slides[targetSlideIndex]; // Switches to the correct slide

        var destination = getComputedStyle(targetSlide).left;

        if (dir === 'rtl') {
          list.style.transform = 'translateX(' + destination + ')';
        } else {
          list.style.transform = 'translateX(-' + destination + ')';
        }

        currentSlide.classList.remove('js-current');
        targetSlide.classList.add('js-current'); // Highlights the correct dot
        // var currentDot = dots[currentSlideIndex];
        // var targetDot = dots[targetSlideIndex];
        // currentDot.classList.remove('js-current');
        // var currentDotIndicator = currentDot.querySelector('.active-dot');
        // currentDotIndicator.remove();
        // targetDot.classList.add('js-current');
        // targetDot.innerHTML += '<span class="visuallyhidden active-dot">' + activeDotText + '</span>';
        // Disable previous/next buttons

        if (targetSlideIndex === 0) {
          prev.setAttribute('disabled', true);
          next.removeAttribute('disabled');
        } else if (targetSlideIndex === slides.length - 1) {
          prev.removeAttribute('disabled');
          next.setAttribute('disabled', true);
        } else {
          prev.removeAttribute('disabled');
          next.removeAttribute('disabled');
        } // Announce selected slide to screen reader


        liveRegion.textContent = slideText + (targetSlideIndex + 1) + ofText + slides.length + activeDotText;
      }
      /**
       * Get the current slide index
       * @return {number}
       */


      function getCurrentSlideIndex() {
        var currentSlide = list.querySelector('.js-current');
        return slides.findIndex(function (slide) {
          return slide === currentSlide;
        });
      }

      next.addEventListener('click', function (event) {
        var currentSlideIndex = getCurrentSlideIndex();
        var nextSlideIndex = currentSlideIndex + 1;
        switchSlide(currentSlideIndex, nextSlideIndex);
      });
      prev.addEventListener('click', function (event) {
        var currentSlideIndex = getCurrentSlideIndex();
        var previousSlideIndex = currentSlideIndex - 1;
        switchSlide(currentSlideIndex, previousSlideIndex);
      }); // dotNav.addEventListener('click', function (event) {
      // 	var dot = event.target.closest('button');
      // 	if (!dot) return;
      // 	var currentSlideIndex = getCurrentSlideIndex();
      // 	var targetSlideIndex = dots.findIndex(function (d) {
      // 		return d === dot;
      // 	});
      // 	switchSlide(currentSlideIndex, targetSlideIndex);
      // });

      list.addEventListener('keydown', function (event) {
        var key = event.key;
        if (key !== 'ArrowLeft' && key !== 'ArrowRight') return;
        var currentSlideIndex = getCurrentSlideIndex();
        var targetSlideIndex;

        if (dir === 'rtl') {
          if (key === 'ArrowRight') {
            targetSlideIndex = currentSlideIndex - 1;
          }

          if (key === 'ArrowLeft') {
            targetSlideIndex = currentSlideIndex + 1;
          }
        } else {
          if (key === 'ArrowLeft') {
            targetSlideIndex = currentSlideIndex - 1;
          }

          if (key === 'ArrowRight') {
            targetSlideIndex = currentSlideIndex + 1;
          }
        }

        if (targetSlideIndex < 0) {
          targetSlideIndex = 0;
        }

        if (targetSlideIndex > slides.length - 1) {
          targetSlideIndex = slides.length - 1;
        }

        switchSlide(currentSlideIndex, targetSlideIndex); // Focus on the correct slide
      });
    }
  }
}();



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardEnhancement", function() { return cardEnhancement; });
/**
 * Card enhancement to trigger the main link whenever the card area is clicked
 * See https://css-tricks.com/block-links-the-search-for-a-perfect-solution/
 */
var cardEnhancement = function () {
  var cardsArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="card"]'));

  if (cardsArray) {
    // Loop through cards adding a click event and identifying the main link
    cardsArray.forEach(function (card, index) {
      var mainLink = card.querySelector('.card__link');
      var clickableElems = Array.prototype.slice.call(card.querySelectorAll('[data-click]')); // Allow other links/buttons in the card to still be "clickable"

      if (clickableElems) {
        clickableElems.forEach(function (elem) {
          return elem.addEventListener("click", function (event) {
            return event.stopPropagation();
          });
        });
      }

      card.addEventListener('click', function () {
        var noTextSelected = !window.getSelection().toString();

        if (noTextSelected) {
          mainLink.click();
          mainLink.focus();
        }
      });
    });
  }
}();



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formErrorSummary", function() { return formErrorSummary; });
var formErrorSummary = function () {
  // Helper: Check whether element exists
  function exists(elem) {
    return elem != null && (elem.length >= 0 || elem.innerHTML.length >= 0);
  }

  var errorSummary = document.querySelector('[data-component="error-summary"]');

  if (exists(errorSummary)) {
    errorSummary.focus();
  }
}();



/***/ })
/******/ ]);