import React from 'react';
import PropTypes from 'prop-types';
import StyledComponent from './styles';
import Button from '../Button';

const WelcomeScreen = (props) => {

  return(
    <StyledComponent>
        <h1>SpaceX Launch Data</h1>
        
        <p>
          Welcome to SpaceX Launch Data. This is a client application built in React which retrieves data from 
          the community-driven <a href="https://github.com/r-spacex/SpaceX-API">SpaceX API</a>.
        </p>

        <p>
          There isn't much more than that to this application ¯\_(ツ)_/¯
        </p>

        <Button onClick={props.proceedToApp}>Get going!</Button>
    </StyledComponent>
  );
}

WelcomeScreen.propTypes = {
  proceedToApp: PropTypes.func
}

export default WelcomeScreen;
