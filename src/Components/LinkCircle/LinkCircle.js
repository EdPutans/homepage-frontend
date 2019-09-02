import React from 'react';
import './styles.scss';

const LinkCircle = ({ url, name, img }) => (
  <div className="Link">
    <div className="Link_circle">
      <img src={img} />
    </div>
    <p>{name}</p>
  </div>
);

export default LinkCircle;
