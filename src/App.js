import React, { useState, useEffect } from 'react';
import './App.scss';
import LeftSide from './Containers/LeftSide/LeftSide';
import Center from './Containers/Center/Center';
import RightSide from './Containers/RightSide/RightSide';
import {
  login, getRandomBg, getWeather, getCityByIp,
} from './api-calls';
import AddLinkModal from './Containers/AddLinkModal/AddLinkModal';
import getBase64FromFile from './Components/shared';
import loader from './assets/loading.gif';

function App() {
  // const [links, setLinks] = useState(null);
  const [bg, setBg] = useState('y');
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [linkModalOpen, setLinkModalOpen] = useState(false);
  // const [currentLocation, setCurrentLocation] = useState(null);
  const [localLinks, setLocalLinks] = useState([]);
  const [savingError, setSavingError] = useState(null);
  const [loadingImage, setLoadingImage] = useState(true);
  useEffect(() => {
    // login('Ed', 'passwordHere')
    //   .then((r) => {
    //     setLinks(r && r.links);
    //     return setCity(r && r.city);
    //   });
    getCityByIp().then(r => r.city && setCity(r.city));
    getRandomBg().then((r) => {
      setBg(r);
      setLoadingImage(false);
    });
  }, []);
  useEffect(() => {
    getWeather(city).then(r => setWeather(r));
  }, [city]);
  useEffect(() => {
    const links = JSON.parse(localStorage.getItem('localLinks'));
    setLocalLinks(links);
  }, []);

  const writeLink = async (linkinfo, image) => {
    setSavingError(null);
    const { name, url } = linkinfo;
    let img;
    if (image) {
      img = await getBase64FromFile(image);
    }
    console.log(name, url, img);
    const storedLinks = JSON.parse(localStorage.getItem('localLinks'));
    const linkObject = { name, url, img };
    if (!name || !url) {
      return setSavingError('Must have url and name');
    }
    if (storedLinks.find(l => l.name === name)) {
      return setSavingError('Link name must be unique');
    }
    if (!storedLinks) {
      localStorage.setItem('localLinks', JSON.stringify([linkObject]));
    } else {
      localStorage.setItem('localLinks', JSON.stringify([...storedLinks, linkObject]));
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
  console.log(localLinks);
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>

      <div className="App_dark">
      {loadingImage && <img src={loader} />}

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
          addLink={(linkObj, img) => writeLink(linkObj, img)}
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
