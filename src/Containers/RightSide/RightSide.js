import React from 'react';
import Section from '../Section';
import './styles.scss';
import PropTypes from 'prop-types';
import LinkCircle from '../../Components/LinkCircle/LinkCircle';
import Plus from './Plus';

const tempLinks = [{
  url: 'www.yeet.com',
  name: 'Poop',
  img: 'https://picsum.photos/200',
},
{
  url: 'www.yeet.com',
  name: 'Poop',
  img: 'https://picsum.photos/201',
}, {
  url: 'www.yeet.com',
  name: 'Poop',
  img: 'https://picsum.photos/202',
}, {
  url: 'www.yeet.com',
  name: 'Poop',
  img: 'https://picsum.photos/203',
}, {
  url: 'www.yeet.com',
  name: 'Poop',
  img: 'https://picsum.photos/204',
}, {
  url: 'www.yeet.com',
  name: 'Poop',
  img: 'https://picsum.photos/199',
}, {
  url: 'www.yeet.com',
  name: 'Poop',
  img: 'https://picsum.photos/200',
}];

const RightSide = ({ links }) => (
  <Section noborder>
    <div className="RightSide">
      <div className="RightSide_linkContainer">
        {tempLinks.map(l => <LinkCircle img={l.img} url={l.url} name={l.name} />)}
        <LinkCircle img={Plus} name="Add link..." />
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
};
RightSide.defaultProps = { links: [] };
