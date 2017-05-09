import React from 'react';
import './Keg.css';

export default class Keg extends React.Component {
  render() {
    return (<div className="keg">
      <span className="name">{this.props.keg.name}</span>
      <button
        className="add"
        onClick={() => this.props.onResult(this.props.keg.name)}
      >
        Add to Tap
      </button>
    </div>);
  }
}
