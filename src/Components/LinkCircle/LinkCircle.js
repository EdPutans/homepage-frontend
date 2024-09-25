import PropTypes from 'prop-types';
import React from 'react';
import def from '../../assets/global.png';
import ClickableDiv from '../ClickableDiv';
import './styles.css';

const LinkCircle = ({
  name, img, onClick, editing, removeLink,
}) => (
  <div className="Link">
    <div className="Link_circle_container">
      {editing && <ClickableDiv className="Link_circle_removeButton" onClick={() => removeLink()}>X</ClickableDiv>}
      <ClickableDiv
        className="Link_circle"
        onClick={() => onClick()}
      >
        <img src={img} alt={name} />
      </ClickableDiv>
      <p>{name}</p>
    </div>
  </div>
);
LinkCircle.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  removeLink: PropTypes.func.isRequired,
};
LinkCircle.defaultProps = {
  img: def,
  name: '',
};

export default LinkCircle;
