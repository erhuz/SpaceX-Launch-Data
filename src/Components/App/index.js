import React, { Component } from 'react';
import WelcomeScreen from '../WelcomeScreen/';
import LaunchList from '../LaunchList';

class App extends Component {

  state = {
    appActive: false
  }

  activateApp = () => {
    this.setState({
      appActive: true
    });
  }

  getLaunches = () => {
    fetch("https://api.spacexdata.com/v3/launches/")
    .then(res => res.json())
    .then(launches => (launches));
  }


  render() {

    if(this.state.appActive){
      return (
        <div className="App">
          <LaunchList items={this.getLaunches()}/>
        </div>
      );
    }else{
      return (
        <WelcomeScreen proceedToApp={this.activateApp}/>
      );
    }

    
  }
}

export default App;
