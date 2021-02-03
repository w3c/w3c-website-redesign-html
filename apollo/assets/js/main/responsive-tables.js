/**
 * Responsive tables
 * Tab index changed from 0 to -1 if there is no horizontal overflow
 */

var responsiveTables = function () {

	// Get all the table wraps
	let tablesArray = Array.prototype.slice.call(document.querySelectorAll('.table-wrap'));

	if (tablesArray) {

		// Loop through them
		tablesArray.forEach(function (item) {

			// Get the parent element of the table wrap, and it's width
			var container = item.parentElement;
			var containerWidth = parseInt(window.getComputedStyle(container, null).getPropertyValue("width"), 10);

			// Get the table inside the table wrap, and it's width
			var table = item.firstElementChild;
			var tableWidth = parseInt(window.getComputedStyle(table, null).getPropertyValue("width"), 10);

			// Comparison: true if the container is wider than the table
			var noScroll = containerWidth >= tableWidth;

			// Only make the container focusable if it needs scrolling
			item.tabIndex = noScroll ? -1 : 0;

		}); // End loop

	} // End if statement

};

export {responsiveTables};