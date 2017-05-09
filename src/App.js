import React from 'react';
import './App.css';
import KegList from './components/KegList/KegList';
import WhatsOnTap from './components/WhatsOnTap/WhatsOnTap';

const kegs = [
  { id: 1, name: 'Stella Artois' },
  { id: 2, name: 'Tuborg' },
  { id: 3, name: 'Krusovice' },
  { id: 4, name: 'Soproni' },
];

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kegOnTap: [],
    };
  }

  addKegToTap(name) {
    this.setState({
      kegOnTap: name,
    });
  }

  render() {
    return (<div className="app">
      <div className="keg-list">
        <KegList
          kegs={kegs}
          onKegSelected={keg => this.addKegToTap(keg)}
        />
      </div>
      <div className="whats-on-tap">
        <WhatsOnTap
          keg={this.state.kegOnTap}
        />
      </div>
    </div>);
  }
}
