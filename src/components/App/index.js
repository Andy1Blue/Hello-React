import React, {
  Component
} from 'react';
import './App.css';
import Intro from '../intro/index';
import 'whatwg-fetch';

class App extends Component {
  state = {
    series: []
  }

  componentDidMount() {
    
  }

  render() {
    return ( <div className = "App" >
      <header className = "App-header">
      <h1 className = "App-title" > TV Series list </h1> 
      </header> 
      <Intro message = "Here you can find all of your most loved series" />
      The length of series array - {
        this.state.series.length
      } 
      </div>
    );
  }
}

export default App;