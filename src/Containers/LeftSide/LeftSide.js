import PropTypes from 'prop-types';
import React from 'react';
import Section from '../Section';
import './styles.scss';

const moment = require('moment');

const LeftSide = ({ weather }) => (
  <Section>
    <div className="Left">
      <div className="Left_dateTime">
        <p className="Left_dateTime_time">{moment().format('HH:mm')}</p>
        <p className="Left_dateTime_date">{moment().format('DD MMM YYYY')}</p>
      </div>
      {weather && (
      <div className="Left_weather">
        <p className="Left_weather_city">
          {weather.location.name}
        </p>
        <p>
          {weather && `${weather.current.temp_c} C - `}
          {weather && weather.current.condition.text}
        </p>
        <div className="Left_weather_icon">
          <img src={weather.current.condition.icon} alt={weather.current.temp_c} />
        </div>
      </div>
      )}
    </div>
  </Section>
);

export default LeftSide;

LeftSide.propTypes = {
  weather: PropTypes.shape({
    location: PropTypes.shape({
      name: PropTypes.string,
    }),
    current: PropTypes.shape({
      temp_c: PropTypes.string,
      condition: PropTypes.shape({
        text: PropTypes.string,
        icon: PropTypes.string,
      }),
    }),
  }).isRequired,
};
LeftSide.defaultProps = {};
