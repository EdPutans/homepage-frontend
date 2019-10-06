import React from 'react';
import './styles.scss';

const Button = ({ text, onClick, disabled }) => (
  <button className={`Button${disabled ? '_disabled' : ''}`} disabled={disabled} tabIndex={0} type="button" onClick={() => onClick()}>
    {text}
  </button>
);

export default Button;
