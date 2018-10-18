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

	a11y.labelPaginationLinks( '.pagination a' );

};

/**
	* Labels pagination links
	*
	*/
a11y.labelPaginationLinks = function( selector ) {

	let links = document.querySelectorAll( selector );

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
	* Initialize the main a11y object
	*
	*/
a11y.init();