import React from 'react';
import './KegList.css';
import Keg from './../Keg/Keg';

export default class KegList extends React.Component {
  render() {
    return (<div className="KegListContainer">
      <h1>Kegs in Stock</h1>
      {this.props.kegs.map(keg => (
        <Keg
          keg={keg}
          key={keg.id}
          onResult={i => this.props.onKegSelected(i)}
        />
      ))}
    </div>);
  }
}
