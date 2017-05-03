import React from 'react';
import './Keg.css';

const Keg = (props) => {
  return (
    <li>
      {props.keg.name}
      <button>Add to Tap</button>
    </li>
  );
};

export default Keg;
