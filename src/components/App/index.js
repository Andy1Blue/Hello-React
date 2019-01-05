import React, { Component} from 'react';
import 'whatwg-fetch';
import './App.css';
import Main from '../Main';

class App extends Component {
  render() {
    return ( <div className = "App" >
      <header className = "App-header">
      <h1 className = "App-title" > TV Series list </h1> 
      </header> 
      <Main />
      </div>
    );
  }
}

export default App;