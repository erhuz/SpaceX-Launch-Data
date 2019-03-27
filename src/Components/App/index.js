import React, { Component } from 'react';
import WelcomeScreen from '../WelcomeScreen/';
import LaunchList from '../LaunchList';

class App extends Component {

  state = {
    appActive: false,
    launches: {}
  }

  activateApp = () => {
    const api = "https://api.spacexdata.com/v3/launches/";

    fetch(api)
    .then(res => res.json())
    .then(launches => {
      this.setState({
        appActive: true,
        launches: launches
      })
    });
  }

  render() {

    if(this.state.appActive){

      return (
        <div className="App">
          <LaunchList items={this.state.launches}/>
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
