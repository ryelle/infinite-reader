// External dependencies
import moment from 'moment';

// A group of utlity functions
export function buildQueryForLocation( props ) {
	console.log( props );
	return {};
};

export function getDate( data ) {
	let date = moment( data.date );
	return date.format( 'MMMM Do YYYY' );
};

export function getTitle( data ) {
	// A title exists, and is less than 15 chars…
	if ( data.title.rendered.length && data.title.rendered.length < 20 ) {
		return { __html: data.title.rendered };
	}

	// Otherwise use the date.
	return { __html: getDate( data ) };
};

export function getContent( data ) {
	if ( ! data.content.protected ) {
		return { __html: data.content.rendered };
	}

	return { __html: '<p>This content is password-protected.</p>' };
};
