import React from 'react';
import PropTypes from 'prop-types';

require( './style.css' );

const Content = ( props ) => (
	<section className="content">
		{ props.children }
	</section>
);

Content.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Content;
