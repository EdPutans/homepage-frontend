import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, disabled }) => (
  <button className={`Button${disabled ? '_disabled' : ''}`} disabled={disabled} type="button" onClick={() => onClick()}>
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
