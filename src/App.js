import React, { Component } from 'react';
import Home from './Component/Home';
import Images from './Component/Images';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>CyberPhysical Systems DVR Project</h1>
          <ul className="header">
              <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
              <li><Link to="/images" activeClassName="active">Images</Link></li>
              <li><Link to="/ScreenShots" activeClassName="active">Screen Shots</Link></li>
          </ul>
        <Home/>
        <Images/>
      </div>
    );
  }
}

export default App;
