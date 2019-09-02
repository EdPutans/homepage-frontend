import React from 'react';
import './styles.scss';

const Input = ({
  onChange, value, type, placeholder, ...rest
}) => (
  <input
    type={type}
    onChange={e => onChange(e)}
    value={value}
    className="Input"
    placeholder={placeholder}
    {...rest}
  />
);

export default Input;
