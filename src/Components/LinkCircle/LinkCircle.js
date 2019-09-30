import React from 'react';
import './styles.scss';

const LinkCircle = ({ url, name, img }) => (
  <div
    className="Link"
    role="button"
    tabIndex={0}
    onKeyDown={() => window.open(url, '_self')}
    onClick={() => window.open(url, '_self')}
  >
    <div className="Link_circle">
      <img src={img} alt={name} />
    </div>
    <p>{name}</p>
  </div>
);

export default LinkCircle;
