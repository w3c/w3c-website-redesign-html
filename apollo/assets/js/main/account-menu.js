var accountMenu = (function () {

	// Helper: Check whether element exists
	function exists(elem) {
		return (elem != null && (elem.length >= 0 || elem.innerHTML.length >= 0) )
	}

	if (document.querySelector('.signed-in')) {

		let toggleButton = document.createElement('button');
		let imgSrc = 'https://www.w3.org/2006/05/u/1682ihk1hqqo-tn.jpg';
		let domTargetSmall = document.querySelector('.logo-link');
		let domTargetWide = document.querySelector('.global-nav__inner ul');

		toggleButton.setAttribute('type', 'button');
		toggleButton.setAttribute('class', 'button button--ghost with-icon--larger');
		toggleButton.setAttribute('data-trigger', 'account-menu');
		toggleButton.setAttribute('aria-expanded', 'false');
		toggleButton.innerHTML = '<span class="sr-only">My account </span><picture class="avatar avatar--small"><img alt="" src="' + imgSrc + '"/></picture>';

		// Media query event handler
		let mq = window.matchMedia('(min-width: 1140px)');
		mq.addListener(insertAccountBtn);
		insertAccountBtn(mq);

		function insertAccountBtn (mq) {

			if (!(mq.matches)) {

				domTargetSmall.parentNode.insertBefore(toggleButton, domTargetSmall.nextSibling);

			} else {

				domTargetWide.parentNode.insertBefore(toggleButton, domTargetWide.nextSibling);

			}

		}

		let accountToggler = document.querySelector('[data-trigger="account-menu"]');

		if (exists(accountToggler)) {

			document.addEventListener('click', function (event) {

				if (event.target.matches('[data-trigger="account-menu"]')) {

					if (event.target.getAttribute('aria-expanded') === 'false') {

						event.target.setAttribute('aria-expanded', 'true');

					} else {

						event.target.setAttribute('aria-expanded', 'false');

					}

				}

			}, false);

		}

	}

})();

export {accountMenu};