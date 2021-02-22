/**
 * Content slider (carousel)
 */
var contentSlider = (function () {

	if ('IntersectionObserver' in window) {

		// I18N
		let sliderText;
		let controlsText;
		let prevText;
		let nextText;

		if (document.documentElement.lang === 'ja') {

			sliderText = 'スライダー';
			controlsText = 'スライダーコントロール';
			prevText = '前のスライド';
			nextText = '次のスライド';

		} else if (document.documentElement.lang === 'zh-hans') {

			sliderText = '滑杆';
			controlsText = '滑块控件';
			prevText = '上一张幻灯片';
			nextText = '下一张幻灯片';

		} else {

			sliderText = 'slider';
			controlsText = 'slider controls';
			prevText = 'previous slide';
			nextText = 'next slide';

		}

		let dir = document.documentElement.getAttribute('dir');

		const slider = document.querySelector('[data-component="slider"] .l-center > div');

		if (slider) {

			const list = slider.querySelector('ul');
			const slides = list.querySelectorAll('li');

			if (slides.length > 1) {

				slider.setAttribute('role', 'region');
				slider.setAttribute('aria-label', sliderText);
				slider.setAttribute('class', 'js-slider');
				slider.setAttribute('tabindex', '0');

				const observerSettings = {

					root: slider,
					rootMargin: '-10px'

				}

				const callback = function callback(slides, observer) {

					Array.prototype.forEach.call(slides, function (entry) {

						entry.target.classList.remove('visible');

						if (!entry.intersectionRatio > 0) {

							return;

						}

						entry.target.classList.add('visible');

					});

				};

				const slideObserver = new IntersectionObserver(callback, observerSettings);

				Array.prototype.forEach.call(slides, function (t) {

					return slideObserver.observe(t);

				});

				let controls = document.createElement('ul');
				controls.setAttribute('class', 'slider-controls');
				controls.setAttribute('aria-label', controlsText);
				controls.innerHTML = '<li><button class="button previous with-icon--larger" aria-label="' + prevText + '" style="padding:7px;"><svg class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 256 512" width="1em" height="1em"><path class="angle-right" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/><path class="angle-left" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg></button></li>'
					+ '<li style="margin-top:0;"><button class="button next with-icon--larger" aria-label="' + nextText + '" style="padding:7px;"><svg class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 256 512" width="1em" height="1em"><path class="angle-right" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/><path class="angle-left" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg></button></li>';

				let prev = controls.querySelector('.previous');
				let next = controls.querySelector('.next');
				controls.style.display = 'flex';
				controls.style.justifyContent = 'space-between';
				prev.disabled = true;

				slider.parentNode.insertBefore(controls, slider.nextElementSibling);

				function scrollIt(slideToShow) {

					let scrollPos = Array.prototype.indexOf.call(slides, slideToShow) * (slider.scrollWidth / slides.length);

					if (dir === 'rtl') {

						slider.scrollLeft = -scrollPos;
						return scrollPos;

					} else {

						slider.scrollLeft = scrollPos;
						return scrollPos;

					}

				}

				function showSlide(direction, slides) {

					let visible = slider.querySelectorAll('.visible');
					let i = direction === prev ? 0 : 1;

					if (visible.length > 1) {

						scrollIt(visible[i]);

					} else {

						let newSlide = i === 0 ? visible[0].previousElementSibling : visible[0].nextElementSibling;

						if (newSlide) {

							scrollIt(newSlide);

						}

					}

				}

				controls.addEventListener('click', function (e) {

					showSlide(e.target.closest('button'), slides);

				});

				function disable() {

					if (dir === 'rtl') {

						prev.disabled = slider.scrollLeft === 0;
						next.disabled = slider.scrollLeft === -(slider.scrollWidth - slider.offsetWidth);

					} else {

						prev.disabled = slider.scrollLeft < 1;
						next.disabled = slider.scrollLeft === slider.scrollWidth - slider.offsetWidth;

					}

				}

				//Debouncing for performance
				let debounced;

				slider.addEventListener('scroll', function () {

					window.clearTimeout(debounced);
					debounced = setTimeout(disable, 200);

				});

				function toggleSlide(self) {

					// remove current class (if there is one set)
					var currentDot = document.querySelector('.current');
					if (currentDot) {
						currentDot.classList.remove('current');
					}

					self.classList.add('current');

				}

				let slideNav = document.createElement('ul');
				slideNav.setAttribute('class', 'slide-nav');
				slideNav.setAttribute('class', 'clean-list');
				slideNav.setAttribute('role', 'list');
				slideNav.style.display = 'flex';
				slideNav.style.justifyContent = 'center';

				Array.prototype.forEach.call(slides, function (el, i) {

					let li = document.createElement('li');
					li.style.marginTop= '0';
					let cssClass = (i===0) ? 'class="button current" ' : 'class="button " ';
					let current = (i===0) ? ' <span class="visuallyhidden">(Current Item)</span>' : '';
					li.innerHTML = '<button '+ cssClass +'data-slide="' + i + '"><span class="visuallyhidden">Slide</span> ' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon" focusable="false" aria-hidden="true" width="1em" height="1em"><defs/><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/></svg>' + current + '</button>';
					slideNav.appendChild(li);

				});

				controls.parentNode.insertBefore(slideNav, controls.nextElementSibling);

				document.addEventListener('click', function (event) {

					if (event.target.matches('[data-slide]')) {

						toggleSlide(event.target);

						let scrollPos = event.target.getAttribute('data-slide') * (slider.scrollWidth / slides.length);

						if (dir === 'rtl') {

							slider.scrollLeft = -scrollPos;
							return scrollPos;

						} else {

							slider.scrollLeft = scrollPos;
							return scrollPos;

						}

					}

				});

			}

		}

	}

})();

export {contentSlider};