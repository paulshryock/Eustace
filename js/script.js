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
	console.log( 'a11y.addMobileNavigationMenuToggleButton()' );

	let nav = document.querySelector('.site-navigation'),
			menu = document.querySelector('.site-navigation ul'),
			button = document.createElement( 'button' ),
			mq = window.matchMedia( '(max-width: 37.5rem)' ),
			addOrRemoveButton;

	button.textContent = 'Menu';
	button.setAttribute( 'aria-expanded', 'false' );

	if (mq.matches) {
		button = nav.insertBefore( button, menu );
	}

	addOrRemoveButton = function( mq ) {
		console.log( 'addOrRemoveButton( mq )' );

		if (mq.matches) {
			button = nav.insertBefore( button, menu );
		} else {
			button = nav.removeChild( button );
		}

	};

	mq.addListener( addOrRemoveButton );

};

/**
	* Hides mobile navigation menu
	*
	*/
a11y.hideMobileNavigationMenu = function() {
	console.log( 'a11y.hideMobileNavigationMenu()' );

	let menu = document.querySelector('.site-navigation ul'),
			mq = window.matchMedia( '(max-width: 37.5rem)' ),
			hideOrShowMenu;

	if (mq.matches) {
		menu.setAttribute( 'hidden', '' );
	}

	hideOrShowMenu = function( mq ) {
		console.log( 'hideOrShowMenu( mq )' );

		if (mq.matches) {
			menu.setAttribute( 'hidden', '' );
		} else {
	    menu.removeAttribute( 'hidden' );
		}

	};

	mq.addListener( hideOrShowMenu );

};

/**
	* Adds mobile navigation
	*
	*/
a11y.addMobileNavigation = function() {
	console.log( 'a11y.addMobileNavigation()' );

	a11y.addMobileNavigationMenuToggleButton();
	a11y.hideMobileNavigationMenu();

	let button = document.querySelector('.site-navigation button'),
			menu = document.querySelector('.site-navigation ul'),
			links = document.querySelectorAll('.site-navigation ul a'),
			mq = window.matchMedia( '(max-width: 37.5rem)' ),
			buttonClickListener;

	button.addEventListener('click', function(){
	  if (menu.classList.contains('is-active')) {
	    this.setAttribute('aria-expanded', 'false');
	    menu.classList.remove('is-active');
	    menu.setAttribute( 'hidden', '' );
	  } else {
	    menu.classList.add('is-active'); 
	    this.setAttribute('aria-expanded', 'true');
	    links[0].focus();
	    menu.removeAttribute( 'hidden' );
	  }
	});

	buttonClickListener = function( mq ) {
		console.log( 'buttonClickListener( mq )' );

		if (mq.matches) {
			console.log( button );

			button.addEventListener('click', function(){
			  if (menu.classList.contains('is-active')) {
			    this.setAttribute('aria-expanded', 'false');
			    menu.setAttribute( 'hidden', '' );
			    menu.classList.remove('is-active');
			  } else {
			    menu.removeAttribute( 'hidden' );
			    menu.classList.add('is-active'); 
			    this.setAttribute('aria-expanded', 'true');
			    links[0].focus();
			  }
			});

		}

	};

	mq.addListener( buttonClickListener );

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

	window.addEventListener( 'load', a11y.addMobileNavigation, false );
	window.addEventListener( 'load', a11y.addPaginationLinkLabels, false );

};

/**
	* Initialize the main a11y object
	*
	*/
a11y.init();
