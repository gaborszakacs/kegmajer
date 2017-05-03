import React from 'react';
import './WhatsOnTap.css';

const WhatsOnTap = (props) => {
  return (
    <div className="WhatsOnTapContainer">
      <h1>What's on Tap?</h1>
      <div className="KegOnTap">{props.keg.name}</div>
      <div>🍻 for {props.keg.daysOld} days now 🍻</div>
      <button>Remove from Tap</button>
    </div>
  );
};

export default WhatsOnTap;
