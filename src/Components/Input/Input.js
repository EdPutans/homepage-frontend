import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Input = ({
  onChange, value, type, placeholder, textColor, onEnter,
}) => (
  <input
    type={type}
    onChange={e => onChange(e)}
    onKeyDown={onEnter}
    value={value}
    className="Input"
    placeholder={placeholder}
    style={{ color: textColor }}
  />
);

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  onEnter: PropTypes.func,
};

Input.defaultProps = {
  onChange: () => {},
  value: '',
  type: undefined,
  textColor: 'black',
  onEnter: () => {},
};
export default Input;
