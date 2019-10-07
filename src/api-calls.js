import fetch from 'isomorphic-fetch';

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

export const getWeather = city => request(`https://api.apixu.com/v1/current.json?key=c2cbc4959fb04350be7212444190309&q=${city}`);
export const getCityByIp = () => request('https://ipapi.co/json', 'GET');
