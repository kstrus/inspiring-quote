import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ text, author }) => <blockquote>
    {text}
    <footer>{author}</footer>
</blockquote>;

Quote.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Quote;
