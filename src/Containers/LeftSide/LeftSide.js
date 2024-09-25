import PropTypes from 'prop-types';
import React from 'react';
import Section from '../Section';
import './styles.css';

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
          <div className="Left_weather_icon">
            <img src={weather.current.weather_icons[0]} alt={weather.current.weather_descriptions.join(', ')} />
          </div>
          <div>
            <p className="Left_weather_city">
              {weather.location.name}
            </p>
            <p>
              {weather && `${weather.current.temperature} C - `}
              {weather && weather.current.weather_descriptions.join(', ')}
            </p>
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
      temperature: PropTypes.string,
      weather_descriptions: PropTypes.arrayOf(PropTypes.string),
      weather_icons: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};
LeftSide.defaultProps = {};
