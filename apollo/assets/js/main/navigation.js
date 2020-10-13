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

	const runMobileNav = function () {

		const mobileNav = document.querySelector('.nav-mobile');
		const mobileNavToggler = document.querySelector('[data-button="mobile-nav-toggle"]');
		const subnavTrigger = Array.from(mobileNav.querySelectorAll('.has-children'));

		// I18N for button value
		let closeText = 'Close ';
		if (document.documentElement.lang === 'fr') {
			closeText = 'Fermer '
		} else if (document.documentElement.lang === 'ja') {
			closeText = '閉じる '
		} else if (document.documentElement.lang === 'zh-Hans') {
			closeText = '关闭 '
		}

		// Close all open submenus
		const closeSubmenus = function () {

			subnavTrigger.forEach(function (trigger) {

				trigger.setAttribute('aria-expanded', 'false');
				trigger.nextElementSibling.setAttribute('aria-hidden', 'true');

			});

		}

		// Toggle mobile navigation
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

		}
		toggleMobileNav();

		// Toggle mobile navigation submenus
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

	}
	runMobileNav();

	const runWideNav = function () {

		const wideNav = document.querySelector('.nav-wide');
		const subnavTrigger = Array.from(wideNav.querySelectorAll('.has-children'));

		// Close all open submenus
		const closeSubmenus = function () {

			subnavTrigger.forEach(function (trigger) {

				trigger.setAttribute('aria-expanded', 'false');
				trigger.parentElement.querySelector('.nav-wide__submenu').setAttribute('aria-hidden', 'true');

			});

		}

		// Toggle wide navigation submenus
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

	}
	runWideNav();

})();

export {navigation};