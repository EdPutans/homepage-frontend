import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import './styles.scss';
import LinkCircle from '../../Components/LinkCircle/LinkCircle';
import Plus from './Plus';

const tempLinks = [{
  url: 'http://www.yeet.com',
  name: 'Reddit',
  img: 'https://picsum.photos/200',
},
{
  url: 'http://www.yeet.com',
  name: 'Im a baguette',
  img: 'https://picsum.photos/201',
}, {
  url: 'http://www.yeet.com',
  name: 'I love donkeys',
  img: 'https://picsum.photos/202',
}, {
  url: 'http://www.yeet.com',
  name: 'Youtube',
  img: 'https://picsum.photos/203',
}, {
  url: 'http://www.yeet.com',
  name: 'PoopTube',
  img: 'https://picsum.photos/204',
}, {
  url: 'http://www.yeet.com',
  name: 'YouPoop',
  img: 'https://picsum.photos/199',
}, {
  url: 'http://www.yeet.com',
  name: 'Duck',
  img: 'https://picsum.photos/200',
}];

const RightSide = ({ links, onClickAdd }) => (
  <Section noborder>
    <div className="RightSide">
      <div className="RightSide_linkContainer">
        {tempLinks.map(l => <LinkCircle img={l.img} onClick={() => window.open(l.url, '_self')} name={l.name} />)}
        <LinkCircle img={Plus} name="Add link" onClick={() => onClickAdd()} />
        {links && links.map(l => <LinkCircle img={l.img} url={l.url} name={l.name} />)}
      </div>
    </div>
  </Section>
);

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
