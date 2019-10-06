import React from 'react';
import './styles.scss';

const LinkCircle = ({
  name, img, onClick, editing, removeLink,
}) => (
  <div className="Link">
    <div className="Link_circle_container">
      {editing && <div className="Link_circle_removeButton" onClick={() => removeLink(name)}>X</div>}
      <div
        className="Link_circle"
        role="button"
        tabIndex={0}
        onKeyDown={() => onClick()}
        onClick={() => onClick()}
      >
        <img src={img} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  </div>
);


export default LinkCircle;
