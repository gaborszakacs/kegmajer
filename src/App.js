import React, { Component } from 'react';
import './App.css';
import KegList from './components/KegList/KegList.js';
import WhatsOnTap from './components/WhatsOnTap/WhatsOnTap.js';

const kegs = [
  { name: 'Stella Artois' },
  { name: 'Tuborg' },
  { name: 'Krusovice' },
  { name: 'Soproni' },
];

const keg = {
  name: 'Staropramen',
  daysOld: 3
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Column">
          <KegList
            kegs={kegs}
          />
        </div>
        <div className="Column">
          <WhatsOnTap
            keg={keg}
          />
        </div>
      </div>
    );
  }
}

export default App;
