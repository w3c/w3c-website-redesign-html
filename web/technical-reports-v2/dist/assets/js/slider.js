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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports) {

/**
 * Content slider (carousel)
 */
var contentSlider = function () {
  if ('ResizeObserver' in window) {
    // I18N
    var sliderDescription;
    var controlsDescription;
    var previousSlide;
    var nextSlide;
    var slideText;
    var ofText;

    if (document.documentElement.lang === 'ja') {
      sliderDescription = 'カルーセル';
      controlsDescription = 'カルーセルコントロール';
      previousSlide = '前のスライド';
      nextSlide = '次のスライド';
      slideText = 'スライド';
      ofText = '/';
    } else if (document.documentElement.lang === 'zh-hans') {
      sliderDescription = '轮播';
      controlsDescription = '轮播控件';
      previousSlide = '上一张幻灯片';
      nextSlide = '下一张幻灯片';
      slideText = '幻灯片';
      ofText = '之';
    } else {
      sliderDescription = 'carousel';
      controlsDescription = 'carousel controls';
      previousSlide = 'previous slide';
      nextSlide = 'next slide';
      slideText = 'Slide ';
      ofText = ' of ';
    }

    var slider = document.querySelector('[data-component="slider"] section');
    var dir = document.documentElement.getAttribute('dir');

    if (slider) {
      slider.setAttribute('aria-roledescription', sliderDescription);
      var list = slider.querySelector('ul');
      var slides = Array.prototype.slice.call(list.querySelectorAll('li'));

      if (slides.length > 1) {
        list.setAttribute('tabindex', '0');

        for (var slide = 1; slide < slides.length; slide++) {
          slides[slide].classList.add('js-hidden');
        }

        slides.forEach(function (slide, index) {
          var group = slide.querySelector('.slide');
          group.setAttribute('role', 'group');
          group.setAttribute('aria-roledescription', 'slide');
          group.setAttribute('aria-label', slideText + (index + 1) + ofText + slides.length);
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
          controls.innerHTML = '<li><button class="button button--ghost js-previous with-icon--larger" aria-label="' + previousSlide + '" style="padding:0.4375rem;"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="dist/assets/svg/nav-icons.svg#chevron-right"></use></svg></button></li>' + '<li style="margin-top:0;margin-inline-start:0.25rem;"><button class="button button--ghost js-next with-icon--larger" aria-label="' + nextSlide + '" style="padding:0.4375rem;"><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512" class="icon icon--larger" focusable="false" aria-hidden="true" width="1em" height="1em"><use class="chevron-left" href="dist/assets/svg/nav-icons.svg#chevron-left"></use><use class="chevron-right" href="dist/assets/svg/nav-icons.svg#chevron-right"></use></svg></button></li>';
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
        var prev = controls.querySelector('.js-previous');
        var next = controls.querySelector('.js-next');
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

        document.addEventListener('click', function (event) {
          if (event.target.matches('.js-next')) {
            var currentSlideIndex = getCurrentSlideIndex();
            var nextSlideIndex = currentSlideIndex + 1;
            switchSlide(currentSlideIndex, nextSlideIndex);
          }

          if (event.target.matches('.js-previous')) {
            var _currentSlideIndex = getCurrentSlideIndex();

            var previousSlideIndex = _currentSlideIndex - 1;
            switchSlide(_currentSlideIndex, previousSlideIndex);
          }
        }, false);
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

/***/ })

/******/ });