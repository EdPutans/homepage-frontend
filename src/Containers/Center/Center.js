import React, { useState } from 'react';
import Section from '../Section';
import './styles.scss';
import Input from '../../Components/Input/Input';

const Center = () => {
  const [query, setQuery] = useState(null);


  return (
    <Section>
      <Input
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            window.open(`http://google.com/search?q=${query}`, '_blank');
          }
        }}

        placeholder="Search Google"
      />
    </Section>
  );
};

export default Center;

Center.propTypes = {};
Center.defaultProps = {};
