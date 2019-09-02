import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Section = ({ children, noborder }) => (
  <div className="Section" style={{ border: noborder ? 'none' : undefined }}>
    {children}
  </div>
);

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
  noborder: PropTypes.bool,
};

Section.defaultProps = {
  noborder: false,
};
