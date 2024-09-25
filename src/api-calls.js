import fetch from 'isomorphic-fetch';

const API_KEY = process.env.REACT_APP_WEATHER_KEY;

export const request = (url, call, body) => fetch(url, {
  method: call || 'GET',
  headers: {
    'Content-Type': 'application/json',

  },
  body: JSON.stringify(body) || undefined,
})
  .then(r => r.json())
  .catch(err => console.log(err));

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
export const getRandomBg = () => request('https://picsum.photos/v2/list', 'GET')
  .then(r => r[getRandomInt(r.length - 1)].download_url)
  .catch(err => console.log(err));


export const getCityByIp = () => request('https://ipapi.co/json', 'GET');
export const getWeather = city => request(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`, 'GET');
