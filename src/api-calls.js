import fetch from 'isomorphic-fetch';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export const request = (url, call, body) => fetch(url, {
  method: call || 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body) || undefined,
})
  .then(r => r.json())
  .catch(err => console.log(err));

export const login = (username, password) => request('http://localhost:5000/users/login', 'POST', { username, password });
export const getRandomBg = () => request('https://picsum.photos/v2/list', 'GET')
  .then(r => r[getRandomInt(r.length - 1)].download_url)
  .catch(err => console.log(err));
