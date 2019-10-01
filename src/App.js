import React, { useState, useEffect } from 'react';
import './App.scss';
import LeftSide from './Containers/LeftSide/LeftSide';
import Center from './Containers/Center/Center';
import RightSide from './Containers/RightSide/RightSide';
import {
  login, getRandomBg, getWeather, getCityByIp,
} from './api-calls';
import AddLinkModal from './Containers/AddLinkModal/AddLinkModal';

function App() {
  const [links, setLinks] = useState(null);
  const [bg, setBg] = useState('y');
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [linkModalOpen, setLinkModalOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // login('Edd', 'qweqweqwe')
    //   .then((r) => {
    //     setLinks(r && r.links);
    //     return setCity(r && r.city);
    //   });
    getCityByIp().then(r => r.city && setCity(r.city));
    getRandomBg().then(r => setBg(r));
  }, []);

  useEffect(() => {
    getWeather(city).then(r => setWeather(r));
  }, [city]);

  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <div className="App_dark">
        <LeftSide weather={city && weather} />
        <Center />
        <RightSide links={links} onClickAdd={() => setLinkModalOpen(true)} />
        {linkModalOpen && <AddLinkModal onClose={() => setLinkModalOpen(false)} />}
      </div>
      <p className="App_disclaimerLOL">
        Built by Ed Putans, for funzies. See repo
        {' '}
        <a className="App_disclaimerLOL_a" href="https://github.com/EdPutans/homepage-frontend">here.</a>
      </p>
    </div>
  );
}

export default App;
