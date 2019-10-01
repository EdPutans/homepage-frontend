import fetch from 'isomorphic-fetch';

export const getMotivation = () => fetch('https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=10&cat=movies', {
  method: 'POST',
  headers: {
    'x-rapidapi-host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
    'x-rapidapi-key': '5de03cc785mshdddfc2e97888b00p1fbf9djsn1d2ca88a96f2',
    'content-type': 'application/x-www-form-urlencoded',
  },
  body: {},
})
  .then(r => r.json())
  .then(r => console.log(r));


export const request = (url, call, body) => fetch(url, {
  method: call || 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body) || undefined,
})
  .then(r => r.json())
  .catch(err => !console.log(err));

export const login = (username, password) => request('http://localhost:5000/users/login', 'POST', { username, password });

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
export const getRandomBg = () => request('https://picsum.photos/v2/list', 'GET')
  .then(r => r[getRandomInt(r.length - 1)].download_url)
  .catch(err => console.log(err));

export const getWeather = city => request(`http://api.apixu.com/v1/current.json?key=c2cbc4959fb04350be7212444190309&q=${city}`);
export const getCityByIp = () => request('https://ipapi.co/json', 'GET');
