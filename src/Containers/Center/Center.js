import React, { useState } from 'react';
import Section from '../Section';
import './styles.scss';
import Input from '../../Components/Input/Input';

const Center = () => {
  const [query, setQuery] = useState(null);
  return (
    <Section>
      <div className="Center">
        <Input
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              // eslint-disable-next-line no-undef
              window.open(`http://google.com/search?q=${query}`, '_self');
            }
          }}

          placeholder="Search Google"
        />
      </div>
    </Section>
  );
};

export default Center;
