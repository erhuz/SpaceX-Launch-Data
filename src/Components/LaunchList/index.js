import React from 'react';
import PropTypes from 'prop-types';
import StyledLaunchList from './styles';
import LaunchItem from '../LaunchItem';

const LaunchList = (props) => {
  return(
    <StyledLaunchList>
        {
          props.items.map(props => {
            return <LaunchItem />;
          })
        }
    </StyledLaunchList>
  );
}

LaunchList.propTypes = {

}

export default LaunchList;
