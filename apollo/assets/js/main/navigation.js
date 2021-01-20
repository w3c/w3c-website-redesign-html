var navigation = (function () {

	// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches =
			Element.prototype.msMatchesSelector ||
			Element.prototype.webkitMatchesSelector;
	}

	if (!Element.prototype.closest) {
		Element.prototype.closest = function(s) {
			var el = this;

			do {
				if (Element.prototype.matches.call(el, s)) return el;
				el = el.parentElement || el.parentNode;
			} while (el !== null && el.nodeType === 1);
			return null;
		};
	}

	// Helper: Check whether element exists
	function exists(elem) {
		return (elem != null && (elem.length >= 0 || elem.innerHTML.length >= 0) )
	}

	let nav = document.querySelector('#global-nav > ul');
	let mobileNavToggler = document.querySelector('[data-trigger="mobile-nav"]');
	let menuIcon = '<svg class="icon icon--larger" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 448 512" width="1em" height="1em"><path id="menu-icon" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/><path id="close-icon" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>';
	let parentLinks = [].slice.call(nav.querySelectorAll('.top-nav-item.has-children > a'));
	let subNavArray = [].slice.call(nav.querySelectorAll('.nav__submenu'));

	// I18N for 'Menu' button text
	let menuText = 'Menu';
	if (document.documentElement.lang === 'ja') {
		menuText = 'メニュー';
	} else if (document.documentElement.lang === 'zh-hans') {
		menuText = '菜单';
	}

	// I18N for 'Main menu' back button text
	let backText = 'Main menu';
	if (document.documentElement.lang === 'ja') {
		backText = 'メインメニュー';
	} else if (document.documentElement.lang === 'zh-hans') {
		backText = '主菜单';
	}

	let closeSubNavs = function () {
		let subNavTriggers = [].slice.call(nav.querySelectorAll('[data-trigger="subnav"]'));
		subNavTriggers.forEach(function (trigger) {
			trigger.setAttribute('aria-expanded', 'false');
			trigger.removeAttribute('class');
			trigger.nextElementSibling.setAttribute('aria-hidden', 'true');
		});
	}

	// Toggle mobile navigation
	let toggleMobileNav = function () {

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

	}

	// Media query event handler
	let mq = window.matchMedia('(min-width: 1140px)');
	mq.addListener(WidthChange);
	WidthChange(mq);

	// Media query change
	function WidthChange(mq) {
		if (!(mq.matches)) {
			toggleMobileNav();
		} else {
			mobileNavToggler.setAttribute('aria-expanded', 'true');
			nav.setAttribute('aria-hidden', 'false');
		}
	}

	if (exists(parentLinks)) {

		parentLinks.forEach(function (item) {

			let clonedLink = item.cloneNode(true);
			let linkText = item.textContent + '&nbsp;';
			let toggleButton = document.createElement('button');
			let backButton = document.createElement('button');
			let fragment = document.createDocumentFragment();
			let subNav = item.parentNode.querySelector('.nav__submenu');
			let submenuFirstChild = item.parentNode.querySelector('.nav__submenu > *');

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

		for (let i = 0; i < subNavArray.length; i++) {

			subNavArray[i].setAttribute('aria-hidden', 'true');

		}

		document.addEventListener('click', function (event) {

			if (event.target.matches('[data-trigger="subnav"]')) {

				let targetNav = event.target.nextElementSibling;

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

			let key = event.key || event.keyCode;

			if (key === 'Escape' || key === 'Esc' || key === 27) {

				closeSubNavs();

			}

		});

	}

})();

export {navigation};