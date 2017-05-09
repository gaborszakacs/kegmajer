import React from 'react';
import './WhatsOnTap.css';

export default class WhatsOnTap extends React.Component {
  render() {
    return (<div className="WhatsOnTapContainer">
      <h1>What&apos;s on Tap?</h1>
      <div className="KegOnTap">{this.props.keg}</div>
      <div>🍻 for 0 days now 🍻</div>
    </div>);
  }
}
