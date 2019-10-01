import React from 'react';
import Section from '../Section';
import './styles.scss';

const LeftSide = ({ weather }) => (
  <Section>
    <p>{weather && weather.location.name}</p>
    <p>
      {weather && weather.current.temp_c}
      {weather && weather.current.condition.text}
    </p>
    <div>
      <img src={weather && weather.current.condition.icon} />
    </div>
  </Section>
);

export default LeftSide;

LeftSide.propTypes = {};
LeftSide.defaultProps = {};
