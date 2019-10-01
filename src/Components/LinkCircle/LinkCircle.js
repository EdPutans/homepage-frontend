import React from 'react';
import './styles.scss';

const LinkCircle = ({ name, img, onClick  }) => (
  <div
    className="Link"
    role="button"
    tabIndex={0}
    onKeyDown={() => onClick()}
    onClick={() => onClick()}
  >
    <div className="Link_circle">
      <img src={img} alt={name} />
    </div>
    <p>{name}</p>
  </div>
);

export default LinkCircle;
