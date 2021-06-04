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
/* harmony import */ var _main_disclosure_widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _main_collapsible_cards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony import */ var _main_collapsible_checkboxes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);










Object(_main_responsive_tables__WEBPACK_IMPORTED_MODULE_0__["responsiveTables"])(); // Tie the responsiveTables function to a resize event, and debounce for performance

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
        heading.innerHTML = '<button class="button--ghost" aria-expanded="false">' + heading.innerHTML + '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="30px" height="30px"><use class="angle-down" href="dist/assets/svg/nav-icons.svg#angle-down"></use><use class="angle-up" href="dist/assets/svg/nav-icons.svg#angle-up"></use></svg></button>'; // Add appropriate aria role to the collapsible section

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
  mobileNavToggler.style = "";
  var menuIcon = '<svg class="icon icon--larger" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" aria-hidden="true" viewBox="0 0 448 512" width="1em" height="1em"><use class="menu-icon" href="dist/assets/svg/nav-icons.svg#menu-icon"></use><use class="close-icon" href="dist/assets/svg/nav-icons.svg#close-icon"></use></svg>';
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


  var mq = window.matchMedia('(min-width: 70em)');
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
      var subNav = item.parentNode.querySelector('.nav__submenu__intro');
      var submenuFirstChild = subNav.querySelector('.nav__submenu__intro__text');
      toggleButton.setAttribute('type', 'button');
      toggleButton.setAttribute('aria-expanded', 'false');
      toggleButton.setAttribute('data-trigger', 'subnav');
      toggleButton.innerHTML = linkText + '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 512" class="icon nav-small" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="angle-left" href="dist/assets/svg/nav-icons.svg#angle-left"></use><use class="angle-right" href="dist/assets/svg/nav-icons.svg#angle-right"></use></svg><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon nav-wide" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="angle-down" href="dist/assets/svg/nav-icons.svg#angle-down"></use><use class="angle-up" href="dist/assets/svg/nav-icons.svg#angle-up"></use></svg>';
      backButton.setAttribute('type', 'button');
      backButton.setAttribute('class', 'button button--ghost u-full-width with-icon--before with-icon--larger');
      backButton.setAttribute('data-trigger', 'mobile-back');
      backButton.innerHTML = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="angle-left" href="dist/assets/svg/nav-icons.svg#angle-left"></use><use class="angle-right" href="dist/assets/svg/nav-icons.svg#angle-right"></use></svg>' + backText;
      fragment.appendChild(backButton);
      fragment.appendChild(clonedLink);
      subNav.insertBefore(fragment, submenuFirstChild);
      item.parentNode.replaceChild(toggleButton, item);
    });

    for (var i = 0; i < subNavArray.length; i++) {
      subNavArray[i].setAttribute('aria-hidden', 'true');
      subNavArray[i].style = "";
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
  if ('ResizeObserver' in window) {
    // I18N
    var sliderDescription;
    var slideListDescription;
    var controlsDescription;
    var previousSlide;
    var nextSlide;
    var slideText;
    var ofText;

    if (document.documentElement.lang === 'ja') {
      sliderDescription = 'カルーセル';
      slideListDescription = 'カルーセルコンテンツ';
      controlsDescription = 'カルーセルコントロール';
      previousSlide = '前のスライド';
      nextSlide = '次のスライド';
      slideText = 'スライド';
      ofText = '/';
    } else if (document.documentElement.lang === 'zh-hans') {
      sliderDescription = '轮播';
      slideListDescription = '轮播内容';
      controlsDescription = '轮播控件';
      previousSlide = '上一张幻灯片';
      nextSlide = '下一张幻灯片';
      slideText = '幻灯片';
      ofText = '之';
    } else {
      sliderDescription = 'carousel';
      slideListDescription = 'carousel content';
      controlsDescription = 'carousel controls';
      previousSlide = 'previous slide';
      nextSlide = 'next slide';
      slideText = 'Slide ';
      ofText = ' of ';
    } //let timeout;


    var slider = document.querySelector('[data-component="slider"] section');
    var dir = document.documentElement.getAttribute('dir');

    if (slider) {
      slider.setAttribute('aria-roledescription', sliderDescription);
      var list = slider.querySelector('ul');
      var slides = Array.prototype.slice.call(list.querySelectorAll('li'));

      if (slides.length > 1) {
        list.setAttribute('tabindex', '0');
        list.setAttribute('aria-label', slideListDescription);

        for (var slide = 1; slide < slides.length; slide++) {
          slides[slide].classList.add('js-hidden');
        }

        slides.forEach(function (slide, index) {
          var group = slide.querySelector('.slide');
          group.setAttribute('role', 'group');
          group.setAttribute('aria-roledescription', 'slide');
          group.setAttribute('aria-label', index + 1 + ofText + slides.length);
        }); // Add current class to first slide

        slides[0].classList.add('js-current');
        /**
         * Create container to hold slider controls and aria-live region
         * @return {HTMLDivElement}
         */

        function createControlsWrap() {
          var wrap = document.createElement('div');
          wrap.style.display = 'flex';
          wrap.style.alignItems = 'center';
          wrap.style.marginTop = '0.625rem';
          return wrap;
        }
        /**
         * Create previous and next button controls for slider
         * @return {HTMLUListElement}
         */


        function createControls() {
          var controls = document.createElement('ul');
          controls.setAttribute('class', 'slider-controls');
          controls.setAttribute('aria-label', controlsDescription);
          controls.innerHTML = '<li><button class="button button--ghost previous with-icon--larger" aria-label="' + previousSlide + '" style="padding:0.4375rem;"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="dist/assets/svg/nav-icons.svg#chevron-right"></use></svg></button></li>' + '<li style="margin-top:0;margin-inline-start:0.25rem;"><button class="button button--ghost next with-icon--larger" aria-label="' + nextSlide + '" style="padding:0.4375rem;"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="dist/assets/svg/nav-icons.svg#chevron-right"></use></svg></button></li>';
          controls.style.display = 'inline-flex';
          return controls;
        }
        /**
         * Create ARIA live region for slider
         * @return {HTMLDivElement}
         */


        function createLiveRegion() {
          var liveRegion = document.createElement('div');
          liveRegion.setAttribute('role', 'status');
          liveRegion.setAttribute('aria-live', 'polite');
          liveRegion.setAttribute('class', 'txt-pluto');
          liveRegion.style.display = 'inline-block';
          liveRegion.style.paddingLeft = '0.625rem';
          liveRegion.style.paddingRight = '0.625rem';
          liveRegion.textContent = slideText + 1 + ofText + slides.length;
          return liveRegion;
        }

        var wrap = createControlsWrap();
        var controls = createControls();
        var prev = controls.querySelector('.previous');
        var next = controls.querySelector('.next');
        prev.disabled = true;
        var liveRegion = createLiveRegion();
        slider.setAttribute('class', 'js-slider');
        slider.parentNode.insertBefore(wrap, slider.nextElementSibling);
        wrap.appendChild(controls);
        wrap.appendChild(liveRegion);
        /**
         * Set slide positions, which are used in the switchSlide function
         */

        function setSlidePositions() {
          var slideWidth = slides[0].getBoundingClientRect().width;

          for (var _slide = 0; _slide < slides.length; _slide++) {
            slides[_slide].style.left = slideWidth * _slide + 'px';
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

          currentSlide.classList.toggle('js-current');
          currentSlide.classList.toggle('js-hidden');
          currentSlide.removeAttribute('tabindex');
          targetSlide.classList.toggle('js-current');
          targetSlide.classList.toggle('js-hidden');
          targetSlide.setAttribute('tabindex', '-1');
          targetSlide.focus(); // Disable previous/next buttons

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


          liveRegion.textContent = slideText + (targetSlideIndex + 1) + ofText + slides.length;
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
        });
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
        }); // Use resize Observer API to reset slide positions and move current slide fully into view

        var slideObserver = new ResizeObserver(callback);

        function callback() {
          setSlidePositions();
          var targetSlide = slider.querySelector('.js-current');
          var destination = getComputedStyle(targetSlide).left;

          if (dir === 'rtl') {
            list.style.transform = 'translateX(' + destination + ')';
          } else {
            list.style.transform = 'translateX(-' + destination + ')';
          }
        }

        slideObserver.observe(slider);
      }
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



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disclosureWidget", function() { return disclosureWidget; });
var disclosureWidget = function () {
  var toggleButtonArray = Array.prototype.slice.call(document.querySelectorAll('[data-toggle="true"]'));

  var closeDisclosures = function closeDisclosures() {
    toggleButtonArray.forEach(function (btn) {
      if (btn.getAttribute('aria-expanded') === 'true') {
        btn.setAttribute('aria-expanded', 'false');
        btn.nextElementSibling.setAttribute('aria-hidden', 'true');
      }
    });
  };

  if (toggleButtonArray.length > 0) {
    toggleButtonArray.forEach(function (btn) {
      var content = btn.nextElementSibling;
      btn.style = "";
      btn.setAttribute('aria-expanded', 'false');
      content.setAttribute('aria-hidden', 'true');
    });

    if (document.body.classList.contains('group')) {
      // Media query event handler
      var mq = window.matchMedia('(min-width: 64em)');
      mq.addListener(WidthChange);
      WidthChange(mq); // Media query change

      function WidthChange(mq) {
        var toggleButton = document.querySelector('[data-toggle="true"]');
        var target = toggleButton.nextElementSibling;

        if (!mq.matches) {
          toggleButton.setAttribute('aria-expanded', 'false');
          target.setAttribute('aria-hidden', 'true');
        } else {
          toggleButton.removeAttribute('aria-expanded');
          target.removeAttribute('aria-hidden');
        }
      }
    }

    document.addEventListener('click', function (event) {
      if (event.target.matches('[data-toggle="true"]')) {
        var content = event.target.nextElementSibling;

        if (content.getAttribute('aria-hidden') === 'true') {
          event.target.setAttribute('aria-expanded', 'true');
          content.setAttribute('aria-hidden', 'false');
        } else {
          event.target.setAttribute('aria-expanded', 'false');
          content.setAttribute('aria-hidden', 'true');
        }
      } else {
        closeDisclosures();
      }
    });
    document.addEventListener('keyup', function (event) {
      if (event.defaultPrevented) {
        return;
      }

      var key = event.key || event.keyCode;

      if (key === 'Escape' || key === 'Esc' || key === 27) {
        closeDisclosures();
      }
    });
  }
}();



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapsibleCards", function() { return collapsibleCards; });
/**
 * Collapsible sections
 * See https://heydon.github.io/inclusive-components-demos/collapsible-sections/progressive.html
 */
var collapsibleCards = function () {
  // Get all the collapsible containers
  var collapseArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="collapsible-cards"]'));

  if (collapseArray) {
    // Loop through containers
    collapseArray.forEach(function (item) {
      // Get headings inside a collapsible container
      var headingsArray = Array.prototype.slice.call(item.querySelectorAll('[data-heading="collapsible-cards"]')); // Loop through headings

      headingsArray.forEach(function (heading, index) {
        var headingTitle = heading.getAttribute('data-title'); // Insert a button for opening/closing the collapsible section

        heading.innerHTML = heading.innerHTML + '<button class="button--ghost" aria-expanded="false"><span class="visuallyhidden">' + headingTitle + '</span><svg class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 448 512" width="30px" height="30px"><path class="plus" d="M416 208H272V64a32 32 0 00-32-32h-32a32 32 0 00-32 32v144H32a32 32 0 00-32 32v32a32 32 0 0032 32h144v144a32 32 0 0032 32h32a32 32 0 0032-32V304h144a32 32 0 0032-32v-32a32 32 0 00-32-32z"/><path class="minus" d="M416 208H32a32 32 0 00-32 32v32a32 32 0 0032 32h384a32 32 0 0032-32v-32a32 32 0 00-32-32z"/></svg></button>'; // Add appropriate aria role to the collapsible section

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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapsibleCheckboxes", function() { return collapsibleCheckboxes; });
/**
 * Collapsible sections
 * See https://heydon.github.io/inclusive-components-demos/collapsible-sections/progressive.html
 */
var collapsibleCheckboxes = function () {
  // Get all the collapsible containers
  var collapseArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="collapsible-checkboxes"]'));

  if (collapseArray) {
    // Loop through containers
    collapseArray.forEach(function (item) {
      // Get headings inside a collapsible container
      var headingsArray = Array.prototype.slice.call(item.querySelectorAll('[data-heading="collapsible-checkboxes"]')); // Loop through headings

      headingsArray.forEach(function (heading, index) {
        var headingText = heading.innerText; // Insert a button for opening/closing the collapsible section

        heading.innerHTML = '<span class="faux-label">' + headingText + '</span><button class="button--alt" aria-expanded="false"><span>' + headingText + '</span><svg class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 320 512" width="30px" height="30px"><path class="angle-down" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/><path class="angle-up" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"/></svg></button>'; // Add appropriate aria role to the collapsible section

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



/***/ })
/******/ ]);