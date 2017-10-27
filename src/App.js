import React, { Component } from 'react';
import VideoPlayer from 'react-player'
import './App.css';

class App extends Component {
  render() {
    return (
       <VideoPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    );
  }
}

export default App;
