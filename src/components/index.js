import React from 'react';
import { connect } from 'react-redux';
import QueryPosts from 'wordpress-query-posts';
import { isRequestingPostsForQuery, getPostsForQuery } from 'wordpress-query-posts/lib/selectors';

// Internal dependencies
import { buildQueryForLocation } from '../utils';

const Index = ( { query, children, loading = false } ) => {
	return (
		<div className="blog">
			<QueryPosts query={ query } />
			{ loading ?
				<h1 className="blog-loading">Loading…</h1> :
				children
			}
		</div>
	);
};

export default connect( ( state, ownProps ) => {
	const query = buildQueryForLocation( ownProps );
	const posts = getPostsForQuery( state, query ) || [];
	const requesting = isRequestingPostsForQuery( state, query );

	return {
		query,
		posts,
		loading: requesting && ! posts,
	};
} )( Index );
