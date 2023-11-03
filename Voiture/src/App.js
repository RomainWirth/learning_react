import React, { Component } from 'react';
import './App.css';
import MyCars from './components/MyCars';

class App extends Component {

  state = {
    title: 'My Cars\' Catalog',
    color: 'green'
  }

  render() {
    return (
      <div className='App'>
        <MyCars
          title={ this.state.title }
          color={ this.state.color }
        />
      </div>
    );
  }

}

export default App;
