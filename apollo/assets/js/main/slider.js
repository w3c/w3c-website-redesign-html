/**
 * Content slider (carousel)
 */

var contentSlider = (function () {

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
		ofText = '/'
		activeDotText = '（現在のアイテム）';
		selectedText = ' 選択済み';

	} else if (document.documentElement.lang === 'zh-hans') {

		sliderText = '滑块内容';
		controlsText = '滑块控件';
		prevText = '上一张幻灯片';
		nextText = '下一张幻灯片';
		slideText = '幻灯片'
		ofText = '之'
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
		var slides = Array.prototype.slice.call(list.querySelectorAll('li'));

		// Add current class to first slide
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
				controls.innerHTML = '<li><button class="button button--ghost previous with-icon--larger" aria-label="' + prevText + '" style="padding:0.4375rem;"><svg class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 256 512" width="1em" height="1em"><path class="angle-right" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/><path class="angle-left" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg></button></li>'
					+ '<li style="margin-top:0;margin-inline-start:0.25rem;"><button class="button button--ghost next with-icon--larger" aria-label="' + nextText + '" style="padding:0.4375rem;"><svg class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 256 512" width="1em" height="1em"><path class="angle-right" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/><path class="angle-left" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg></button></li>';
				// controls.style.justifyContent = 'space-evenly';
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
					var cssClass = (i===0) ? 'class="button button--ghost js-current" ' : 'class="button button--ghost " ';
					var current = (i===0) ? ' <span class="visuallyhidden active-dot">' + activeDotText + '</span>' : '';
					li.innerHTML = '<button '+ cssClass +'data-slide="' + i + '"><span class="visuallyhidden">' + slideText + (i + 1) + ofText + slides.length + '</span>' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="0.625rem" height="0.625rem" focusable="false" aria-hidden="true"><defs/><circle cx="5" cy="5" r="4" fill="currentColor" fill-rule="evenodd" stroke="#111" stroke-width="2"/></svg>' + current + '</button>';
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
				liveRegion.textContent = slideText + 1 + ofText + slides.length + activeDotText;
				// liveRegion.setAttribute('class', 'visuallyhidden');

				return liveRegion;

			}

			var controls = createControls();
			var prev = controls.querySelector('.previous');
			var next = controls.querySelector('.next');
			prev.disabled = true;
			// var dotNav = createDotNav(slides);
			// var dots = Array.prototype.slice.call(dotNav.querySelectorAll('.button'));
			var liveRegion = createLiveRegion();

			slider.setAttribute('class', 'js-slider');
			slider.parentNode.insertBefore(controls, slider.nextElementSibling);
			// controls.parentNode.insertBefore(dotNav, controls.nextElementSibling);
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
				var targetSlide = slides[targetSlideIndex];

				// Switches to the correct slide
				var destination = getComputedStyle(targetSlide).left;

				if (dir === 'rtl') {

					list.style.transform = 'translateX(' + destination + ')';

				} else {

					list.style.transform = 'translateX(-' + destination + ')';

				}

				currentSlide.classList.remove('js-current');
				targetSlide.classList.add('js-current');

				// Highlights the correct dot
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

				}

				// Announce selected slide to screen reader
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
			});

			// dotNav.addEventListener('click', function (event) {
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

})();


export {contentSlider};