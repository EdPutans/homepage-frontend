import React from 'react';
import './styles.scss';

const Button = ({ text, onClick }) => (
  <button className="Button" tabIndex={0} type="button" onClick={() => onClick()}>
    {text}
  </button>
);

export default Button;
