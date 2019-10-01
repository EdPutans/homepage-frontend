import React from 'react';
import Section from '../Section';
import './styles.scss';

const m = require('moment');

const LeftSide = ({ weather }) => (
  <Section>
    <div className="Left">
      <div className="Left_dateTime">
        <p className="Left_dateTime_time">{m().format('HH:mm')}</p>
        <p className="Left_dateTime_date">{m().format('DD MMM YYYY')}</p>
      </div>
      <div className="Left_weather">
        <p className="Left_weather_city">
          {weather && weather.location.name}
        </p>
        <p>
          {weather && `${weather.current.temp_c} C - `}
          {weather && weather.current.condition.text}
        </p>
        <div className="Left_weather_icon">
          <img src={weather && weather.current.condition.icon} />
        </div>
      </div>
    </div>
  </Section>
);

export default LeftSide;

LeftSide.propTypes = {};
LeftSide.defaultProps = {};
