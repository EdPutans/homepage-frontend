import PropTypes from 'prop-types';
import React from 'react';
import './styles.css';

const Button = ({ text, onClick, disabled }) => (
  <button className={`Button ${disabled ? 'Button_disabled' : ''}`} disabled={disabled} type="button" onClick={() => onClick()}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};


export default Button;
