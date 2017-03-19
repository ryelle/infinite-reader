// External dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { isRequestingPostsForQuery, getPostsForQuery } from 'wordpress-query-posts/lib/selectors';

// Internal dependencies
import { getTitle, buildQueryForLocation } from '../../utils';

let PostList = ( props ) => {
	console.log( props );
	const { posts = [] } = props;
	if ( posts.length < 1 ) {
		return null;
	}

	const postsMarkup = posts.map( ( post, i ) => {
		return (
			<article id={ `post-${post.id}` } className="entry" key={ i }>
				<Link to={ `/${ post.id }` }><h2 className="entry-title" dangerouslySetInnerHTML={ getTitle( post ) } /></Link>
			</article>
		);
	} );

	return (
		<div>
			{ postsMarkup }
		</div>
	);
}

export default connect( ( state, ownProps ) => {
	let query = buildQueryForLocation( ownProps );

	const posts = getPostsForQuery( state, query ) || [];
	const requesting = isRequestingPostsForQuery( state, query );

	return {
		posts,
		loading: requesting && ! posts,
	};
} )( PostList );
