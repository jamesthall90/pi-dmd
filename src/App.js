import React, { Component } from 'react';
import VideoPlayer from 'react-player'
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <VideoPlayer url='https://www.youtube.com/watch?v=Eyc_XPnITOg' width={400} hieght={400} />
          <p>This is the video</p>
        </div>
    );
  }
}

export default App;
