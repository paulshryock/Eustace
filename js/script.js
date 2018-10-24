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
	* Customizes console.log()
	*
	*/
browser.log = function ( message, color='black' ) {
	switch (color) {
		case 'success':  
			color = 'Green'
			break
		case 'info':     
			color = 'Blue'  
			break;
		case 'error':
			color = 'Red'   
			break;
		case 'warning':
			color = 'Orange' 
			break;
		default: 
			color = color
	}
	console.log( `%c${message}`, `color:${color}` )

	// These are available too:
	// console.error()
	// console.warn()
	// console.table()
}

// browser.log('Hello World!')
// browser.log('Success!', 'success')
// browser.log('Error!', 'error')
// browser.log('Warning!', 'warning')
// browser.log('Info...', 'info')

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
	* Adds pagination link labels
	*
	*/
a11y.addPaginationLinkLabels = function() {

	let links = document.querySelectorAll( '.pagination a' );

	if ( 0 < links.length ) {

		for (var i = 0; i < links.length; i++) {

			let counter = i + 1,
					string = "Go to Page " + counter;

			if (links[i].getAttribute('aria-current')) {
				string = "Page " + counter + ", Current Page";
			}

			links[i].setAttribute('aria-label', string);
		}

	}

};

/**
	* Adds a11y event listners
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

/******************************************
	* Navigation
	*****************************************/

/**
	* The main navigation object
	*
	*/
let navigation = {};

/**
	* Initializes the main navigation object
	*
	*/
navigation.init = function() {

	navigation.addEventListeners();

};

/**
	* Adds mobile navigation menu toggle button
	*
	*/
navigation.addNavButton = function() {

	let nav = document.querySelector('.site-navigation'),
			menu = document.querySelector('.site-navigation ul'),
			button = document.createElement( 'button' );

	button.textContent = 'Menu';
	button.setAttribute( 'aria-expanded', 'false' );

	button = nav.insertBefore( button, menu );

};

/**
	* Removes mobile navigation menu toggle button
	*
	*/
navigation.removeNavButton = function() {

	let nav = document.querySelector('.site-navigation'),
			button = document.querySelector( '.site-navigation button' );

	if (button) {
		button = nav.removeChild( button );
	}

};

/**
	* Hides mobile navigation menu
	*
	*/
navigation.hideNavMenu = function() {

	let menu = document.querySelector('.site-navigation ul');

	menu.setAttribute( 'hidden', '' );
  menu.classList.remove('is-active');

};

/**
	* Shows mobile navigation menu
	*
	*/
navigation.showNavMenu = function() {

	let menu = document.querySelector('.site-navigation ul');

	menu.removeAttribute( 'hidden' );
  menu.classList.add('is-active');

};

/**
	* Toggles navigation button and menu elements' states
	*
	*/
navigation.toggleNavElementsStates = function() {

	let menu = document.querySelector('.site-navigation ul'),
			links = document.querySelectorAll('.site-navigation ul a');

  if (menu.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false');
    navigation.hideNavMenu();
  } else {
    this.setAttribute('aria-expanded', 'true');
    navigation.showNavMenu();
    links[0].focus();
  }

};

/**
	* Toggles navigation button and menu elements
	*
	*/
navigation.toggleNavElements = function( mq ) {

	if (mq.matches) { // Tablet and up

		let button = document.querySelector( '.site-navigation button' );

		if (button) {
			button.removeEventListener( 'click', navigation.toggleNavElementsStates, false );
		}
		navigation.removeNavButton();
		navigation.showNavMenu();

	} else { // Mobile

		navigation.addNavButton();
		let button = document.querySelector( '.site-navigation button' );

		if (button) {
			button.addEventListener( 'click', navigation.toggleNavElementsStates, false );
		}
		navigation.hideNavMenu();

	}

};

/**
	* Adds mobile navigation
	*
	*/
navigation.addMobileNavigation = function() {

	let mq = window.matchMedia( '(min-width: 37.5rem)' );

	navigation.toggleNavElements( mq ); // Call listener function at run time
	mq.addListener( navigation.toggleNavElements ); // Attach listener function on state changes

};

/**
	* Adds navigation event listners
	*
	*/
navigation.addEventListeners = function() {

	window.addEventListener( 'load', navigation.addMobileNavigation, false );

};

/**
	* Initialize the main navigation object
	*
	*/
navigation.init();