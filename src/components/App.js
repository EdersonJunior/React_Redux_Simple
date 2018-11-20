import React, { Component } from 'react';

import FavoriteBand from '../containers/FavoriteBand'
import Bands from '../containers/Bands'

class App extends Component {
  render() {
    return (
      <div >
        <div>
          <FavoriteBand />
        </div>
        <div>
          <Bands />
        </div>
      </div>
    );
  }
}

export default App;
