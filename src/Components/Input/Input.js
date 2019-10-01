import React from 'react';
import './styles.scss';

const Input = ({
  onChange, value, type, placeholder, textColor, ...rest
}) => (
  <input
    type={type}
    onChange={e => onChange(e)}
    value={value}
    className="Input"
    placeholder={placeholder}
    style={{ color: textColor }}
    {...rest}
  />
);

export default Input;
