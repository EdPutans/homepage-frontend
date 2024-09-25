import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Edit from '../../assets/edit';
import ClickableDiv from '../../Components/ClickableDiv';
import LinkCircle from '../../Components/LinkCircle/LinkCircle';
import Section from '../Section';
import Plus from './Plus';
import './styles.css';

const RightSide = ({ localLinks, onClickAdd, removeLink }) => {
  const [editing, setEditing] = useState(false);
  // eslint-disable-next-line no-undef
  const openLink = url => window.open(url.includes('http://') ? url : `http://${url}`, '_self');
  return (
    <Section>
      <div className="RightSide">
        <ClickableDiv className="RightSide_edit" onClick={() => setEditing(!editing)}>
          <Edit width={20} height={20} fill={editing ? 'lightgrey' : 'white'} />
        </ClickableDiv>
        <div className="RightSide_linkContainer">
          {localLinks && localLinks.map(l => (
            <LinkCircle
              key={l.name}
              removeLink={() => removeLink(l.name)}
              editing={editing}
              img={l.img}
              onClick={() => {
                !editing ? openLink(l.url) : removeLink(l.name);
              }}
              name={l.name}
            />
          ))}
          {editing && <LinkCircle img={Plus} name="Add link" onClick={() => onClickAdd()} />}
        </div>
      </div>
    </Section>
  );
};

export default RightSide;

const linkProps = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  url: PropTypes.string,
}));

RightSide.propTypes = {
  localLinks: linkProps,
  onClickAdd: PropTypes.func.isRequired,
  removeLink: PropTypes.func.isRequired,
};

RightSide.defaultProps = {
  localLinks: [],
};
