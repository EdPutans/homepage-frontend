import React from 'react';
import Section from '../Section';
import './styles.scss';
import PropTypes from 'prop-types';
import LinkCircle from '../../Components/LinkCircle/LinkCircle';

const RightSide = ({ links }) => (
  <Section noborder>
    <p>    right side goes</p>
    <div className="RightSide">
      <div className="RightSide_linkContainer">
        <LinkCircle img={null} url="www.yeet.com" name="poop" />
        <LinkCircle img={null} url="www.yeet.com" name="poop" />
        <LinkCircle img={null} url="www.yeet.com" name="poop" />
        <LinkCircle img={null} url="www.yeet.com" name="poop" />
        <LinkCircle img={null} url="www.yeet.com" name="poop" />
        <LinkCircle img={null} url="www.yeet.com" name="poop" />
        <LinkCircle img={null} url="www.yeet.com" name="poop" />
        <LinkCircle img={null} url="www.yeet.com" name="poop" />
        <LinkCircle img={null} url="www.yeet.com" name="poop" />
        <LinkCircle img={null} url="www.yeet.com" name="poop" />
        <LinkCircle img={null} url="www.yeet.com" name="poop" />
        <LinkCircle img={null} url="www.yeet.com" name="poop" />
        <LinkCircle img={null} url="www.yeet.com" name="poop" />
        <LinkCircle img={null} url="www.yeet.com" name="poop" />
        <LinkCircle img={null} url="www.yeet.com" name="poop" />
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
