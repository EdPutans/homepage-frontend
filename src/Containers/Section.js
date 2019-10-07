import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Section = ({ children }) => (
  <div className="Section">
    {children}
  </div>
);

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
