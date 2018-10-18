/******************************************
	* Browser
	*****************************************/

/**
	* The main browser object
	*
	*/
let browser = {};

/**
	* Initializes the main browser object
	*
	*/
browser.init = function() {

	browser.addEventListeners();

};

/**
	* Swap html element classes: `.no-js` to `.js`
	*
	*/
browser.swapHTMLClasses = function() {

	let el = document.querySelector( 'html' );

	el.classList.toggle( 'no-js' );
	el.classList.toggle( 'js' );

};

/**
	* Add browser event listners
	*
	*/
browser.addEventListeners = function() {

	window.addEventListener( 'load', browser.swapHTMLClasses, false );

};

/**
	* Initialize the main browser object
	*
	*/
browser.init();

/******************************************
	* Accessibility
	*****************************************/

/**
	* The main a11y object
	*
	*/
let a11y = {};

/**
	* Initializes the main a11y object
	*
	*/
a11y.init = function() {

	a11y.addEventListeners();

};

/**
	* Add pagination link labels
	*
	*/
a11y.addPaginationLinkLabels = function() {

	let links = document.querySelectorAll( '.pagination a' );

	for (var i = 0; i < links.length; i++) {

		let counter = i + 1,
				string = "Go to Page " + counter;

		if (links[i].getAttribute('aria-current')) {
			string = "Page " + counter + ", Current Page";
		}

		links[i].setAttribute('aria-label', string);
	}

};

/**
	* Add a11y event listners
	*
	*/
a11y.addEventListeners = function() {

	window.addEventListener( 'load', a11y.addPaginationLinkLabels, false );

};

/**
	* Initialize the main a11y object
	*
	*/
a11y.init();