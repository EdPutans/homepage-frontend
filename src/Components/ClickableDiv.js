import React from 'react';
import PropTypes from 'prop-types';

const ClickableDiv = ({
  onClick, children, className, ...rest
}) => (
  <div
    role="button"
    tabIndex={0}
    onKeyDown={() => onClick()}
    onClick={() => onClick()}
    className={className}
    {...rest}
  >
    {children}
  </div>
);

ClickableDiv.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};
ClickableDiv.defaultProps = {
  children: undefined,
  className: undefined,
};
export default ClickableDiv;
