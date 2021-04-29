/**
 * Content slider (carousel)
 */

var contentSlider = (function () {

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

		sliderDescription = 'carousel'
		slideListDescription = 'carousel content';
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
		list.setAttribute('tabindex', '0');
		list.setAttribute('aria-label', slideListDescription);
		var slides = Array.prototype.slice.call(list.querySelectorAll('li'));

		for (var slide = 1; slide < slides.length; slide++) {
			slides[slide].classList.add('js-hidden');
		}

		slides.forEach(function (slide, index) {

			var group = slide.querySelector('.slide');
			group.setAttribute('role', 'group');
			group.setAttribute('aria-roledescription', 'slide');
			group.setAttribute('aria-label', (index + 1) + ofText + slides.length);

		});

		// Add current class to first slide
		slides[0].classList.add('js-current');

		if (slides.length > 1) {

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
				controls.innerHTML = '<li><button class="button button--ghost previous with-icon--larger" aria-label="' + previousSlide + '" style="padding:0.4375rem;"><svg class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 320 512" width="1em" height="1em"><path class="chevron-right" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/><path class="chevron-left" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/></svg></button></li>'
					+ '<li style="margin-top:0;margin-inline-start:0.25rem;"><button class="button button--ghost next with-icon--larger" aria-label="' + nextSlide + '" style="padding:0.4375rem;"><svg class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 320 512" width="1em" height="1em"><path class="chevron-right" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/><path class="chevron-left" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/></svg></button></li>';
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
				var targetSlide = slides[targetSlideIndex];

				// Switches to the correct slide
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
				targetSlide.focus();

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

				}

				// Announce selected slide to screen reader
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

			});

		}

	}

})();


export {contentSlider};