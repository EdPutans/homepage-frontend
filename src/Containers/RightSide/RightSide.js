import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import './styles.scss';
import LinkCircle from '../../Components/LinkCircle/LinkCircle';
import Plus from './Plus';
import def from '../../assets/global.png';
import Edit from '../../assets/edit';

const RightSide = ({
  // links,
  localLinks,
  onClickAdd,
  removeLink,
}) => {
  const [editing, setEditing] = useState(false);

  const openLink = url => window.open(url.includes('http://') ? url : `http://${url}`, '_self');

  return (
    <Section>
      <div className="RightSide">
        <div className="RightSide_edit" role="button" tabIndex={0} onKeyDown={() => {}} onClick={() => setEditing(!editing)}>
          <Edit width={20} height={20} fill={editing ? 'lightgrey' : 'white'} />
        </div>
        <div className="RightSide_linkContainer">
          {localLinks && localLinks.map(l => (
            <LinkCircle
              removeLink={removeLink}
              editing={editing}
              img={l.img || def}
              onClick={() => openLink(l.url)}
              name={l.name}
            />
          ))}
          {editing && <LinkCircle img={Plus} name="Add link" onClick={() => onClickAdd()} />}
          {/* {links && links.map(l => <LinkCircle img={l.img} url={l.url} name={l.name} />)} */}
        </div>
      </div>
    </Section>
  );
};


export default RightSide;

RightSide.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })),
  onClickAdd: PropTypes.func.isRequired,
};

RightSide.defaultProps = {
  links: [],
};
