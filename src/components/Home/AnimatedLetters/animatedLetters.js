import React, { useState } from 'react';
import './animatedLetters.scss';

const AnimatedLetters = () => {
  const [letterClass] = useState('text-animate');
  const [nameArray] = useState(['o', 'm', 'a', 's', 'z']);

  return (
      <span>
      {nameArray.map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;

