/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { getCityByIp, getRandomBg, getWeather } from './api-calls';
import './App.css';
import AddLinkModal from './Containers/AddLinkModal/AddLinkModal';
import Center from './Containers/Center/Center';
import LeftSide from './Containers/LeftSide/LeftSide';
import RightSide from './Containers/RightSide/RightSide';
import getBase64FromFile from './shared';

function App() {
  const [bg, setBg] = useState('');
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
    if (!city) return;

    getWeather(city).then((r) => {
      setWeather(r);
    });
  }, [city]);

  useEffect(() => {
    let links = JSON.parse(localStorage.getItem('localLinks'));
    if (!links || links === 'undefined') links = [];

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

    setLocalLinks([...localLinks, linkObject]);
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
      <p className="App_disclaimer">
        Built by Ed Putans, for funzies. See repo
        {' '}
        <a className="App_disclaimer_link" href="https://github.com/EdPutans/homepage-frontend">here.</a>
      </p>
    </div>
  );
}

export default App;
