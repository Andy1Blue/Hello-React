import React, {
  Component
} from 'react';
import './App.css';
import Intro from '../intro/index';

class App extends Component {
  state = {
    series: []
  }

  componentDidMount() {
    const series = ["Vikings", "Game sof Thrones","Wataha"];
    this.setState({
      series: series
    });
    setTimeout(() => {

    }, 2000);
  }

  render() {
    return ( <
      div className = "App" >
      <
      header className = "App-header" >
      <
      h1 className = "App-title" > TV Series list < /h1> <
      /header> <
      Intro message = "Here you can find all of your most loved series" / >
      The length of series array - {
        this.state.series.length
      } <
      /div>
    );
  }
}

export default App;