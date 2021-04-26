import {responsiveTables} from "./main/responsive-tables";
import {collapsibles} from "./main/collapsibles";
import {navigation} from "./main/navigation";
import {accountMenu} from "./main/account-menu";
import {contentSlider} from "./main/slider";
import {cardEnhancement} from "./main/cards";
import {formErrorSummary} from "./main/form-error-summary";

responsiveTables();

// Tie the stickyTableHead function to a resize event, and debounce for performance
var timeout;

window.addEventListener('resize', function (event) {

	// If timer is null, reset it to 66ms and run desired functions.
	// Otherwise, wait until timer is cleared
	if (!timeout) {
		timeout = setTimeout(function () {

			// Reset timeout
			timeout = null;

			// Run our resize functions
			responsiveTables();

		}, 66);
	}

}, false);