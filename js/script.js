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
	* Swaps html element classes: `.no-js` to `.js`
	*
	*/
browser.swapHTMLClasses = function() {

	let el = document.querySelector( 'html' );

	el.classList.toggle( 'no-js' );
	el.classList.toggle( 'js' );

};

/**
	* Adds browser event listners
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
	* Adds mobile navigation menu toggle button
	*
	*/
a11y.addMobileNavigationMenuToggleButton = function() {

	let nav = document.querySelector('.navigation'),
			menu = document.querySelector('.navigation ul'),
			button = document.createElement( 'button' );

	button.textContent = 'Menu';
	button.setAttribute( 'aria-expanded', 'false' );

	button = nav.insertBefore( button, menu );

};

/**
	* Adds mobile navigation
	*
	*/
a11y.addMobileNavigation = function() {

	a11y.addMobileNavigationMenuToggleButton();

	let button = document.querySelector('.navigation button'),
			menu = document.querySelector('.navigation ul'),
			links = document.querySelectorAll('.navigation ul a');

	button.addEventListener('click', function(){
	  if (menu.classList.contains('is-active')) {
	    this.setAttribute('aria-expanded', 'false');
	    menu.classList.remove('is-active');
	  } else {
	    menu.classList.add('is-active'); 
	    this.setAttribute('aria-expanded', 'true');
	    links[0].focus();
	  }
	});

};

/**
	* Adds pagination link labels
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
	* Adds a11y event listners
	*
	*/
a11y.addEventListeners = function() {

	window.addEventListener( 'load', a11y.addPaginationLinkLabels, false );
	window.addEventListener( 'load', a11y.addMobileNavigation, false );

};

/**
	* Initialize the main a11y object
	*
	*/
a11y.init();