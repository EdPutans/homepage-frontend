/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import './App.scss';
import LeftSide from './Containers/LeftSide/LeftSide';
import Center from './Containers/Center/Center';
import RightSide from './Containers/RightSide/RightSide';
import { getRandomBg, getWeather, getCityByIp } from './api-calls';
import AddLinkModal from './Containers/AddLinkModal/AddLinkModal';
import getBase64FromFile from './shared';

function App() {
  const [bg, setBg] = useState('y');
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [linkModalOpen, setLinkModalOpen] = useState(false);
  const [localLinks, setLocalLinks] = useState([]);
  const [savingError, setSavingError] = useState(null);
  useEffect(() => {
    getCityByIp().then(r => r.city && setCity(r.city));
    getRandomBg().then(r => setBg(r));
  }, []);

  useEffect(() => {
    getWeather(city).then(r => setWeather(r));
  }, [city]);

  useEffect(() => {
    const links = JSON.parse(localStorage.getItem('localLinks'));
    setLocalLinks(links);
  }, []);

  const writeLink = async (linkinfo) => {
    setSavingError(null);
    const { name, url, image } = linkinfo;
    let parsedImg;
    if (image) {
      parsedImg = await getBase64FromFile(image);
    }
    const storedLinks = JSON.parse(localStorage.getItem('localLinks'));
    if (storedLinks && storedLinks.find(l => l.name === name)) {
      return setSavingError('Bookmark name must be unique');
    }
    const linkObject = { name, url, image: parsedImg };
    if (storedLinks) {
      localStorage.setItem('localLinks', JSON.stringify([...storedLinks, linkObject]));
    } else {
      localStorage.setItem('localLinks', JSON.stringify([linkObject]));
    }
    setLocalLinks([...storedLinks, linkObject]);
    setLinkModalOpen(false);
  };

  const removeLink = (name) => {
    const storedLinks = JSON.parse(localStorage.getItem('localLinks'));
    const filteredLinks = storedLinks.filter(l => l.name !== name);
    localStorage.setItem('localLinks', JSON.stringify(filteredLinks));
    setLocalLinks(filteredLinks);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>

      <div className="App_dark">
        <LeftSide weather={city && weather} />
        <Center />
        <RightSide
          localLinks={localLinks}
          removeLink={linkName => removeLink(linkName)}
          onClickAdd={() => setLinkModalOpen(true)}
        />
        {linkModalOpen && (
        <AddLinkModal
          savingError={savingError}
          addLink={(linkObj) => {
            writeLink(linkObj);
          }}
          onClose={() => {
            setLinkModalOpen(false);
            setSavingError(null);
          }
          }
        />
        )}
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
