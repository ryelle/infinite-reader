// External dependencies
import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { getPost } from 'wordpress-query-posts/lib/selectors';

// Internal dependencies
import {
	getTitle,
	getDate,
	getContent
} from '../../utils';

let Post = ( props ) => {
	const { post } = props;
	if ( ! post ) {
		return null;
	}

	let classes = classNames( {
		entry: true
	} );

	return (
		<article id={ `post-${post.id}` } className={ classes }>
			<h2 className="entry-title" dangerouslySetInnerHTML={ getTitle( post ) } />
			<div className="entry-container">
				<img
					className="entry-image"
					role="presentation"
					src="https://images.pexels.com/photos/285173/pexels-photo-285173.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" />
				<p className="entry-meta">{ getDate( post ) }</p>
				<p className="entry-content" dangerouslySetInnerHTML={ getContent( post ) } />
			</div>
		</article>
	);
};

export default connect( ( state, ownProps ) => {
	const post = getPost( state, ownProps.params.id );

	return {
		post
	};
} )( Post );
