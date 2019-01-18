import React, { Component } from 'react';
import './App.css';
import ChatBox from './ChatBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Chat Application
        </header>
        <ChatBox/>
      </div>
    );
  }
}

export default App;
