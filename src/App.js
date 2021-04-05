import React, { Component } from 'react';
import TextEditor from './components/TextEditor/TextEditor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Welcome to the text editor</h1>
        <TextEditor />
      </div>
    );
  }
}

export default App;
