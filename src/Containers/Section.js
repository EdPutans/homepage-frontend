import PropTypes from 'prop-types';
import React from 'react';
import './styles.css';

const Section = ({ children }) => (
  <div className="Section">
    {children}
  </div>
);

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
