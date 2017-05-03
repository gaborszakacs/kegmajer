import React from 'react';
import './KegList.css';
import Keg from './../Keg/Keg.js';
import KegInput from './../KegInput/KegInput.js';

const KegList = (props) => {
  const listItems = props.kegs.map((keg, i) =>
    <Keg keg={keg} key={i} />
  );

  return (
    <div className="KegListContainer">
      <h1>Kegs in Stock</h1>
      <ul>
        {listItems}
        <KegInput />
      </ul>
    </div>
  );
};

export default KegList;
