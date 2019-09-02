import React, { useState, useEffect } from 'react';
import './App.scss';
import LeftSide from './Containers/LeftSide/LeftSide';
import Center from './Containers/Center/Center';
import RightSide from './Containers/RightSide/RightSide';
import { login, getRandomBg } from './api-calls';

function App() {
  const [links, setLinks] = useState(null);
  const [bg, setBg] = useState('y');
  useEffect(() => {
    login('Steven', 'qweqweqwe').then(r => r && r.links && setLinks(r.links));
    getRandomBg().then(r => setBg(r));
  }, []);

  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <div className="App_dark">
        <LeftSide />
        <Center />
        <RightSide links={links} />
      </div>
    </div>
  );
}

export default App;
