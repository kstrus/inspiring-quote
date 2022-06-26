import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ text, author }) => {
    return <blockquote>
        {text}
        <footer>{author}</footer>
    </blockquote>;
}

Quote.propTypes = {
    text: PropTypes.string,
    author: PropTypes.string,
};

export default Quote;
