import React from 'react';
// import PropTypes from 'prop-types';
import StyledLaunchItem from './styles';

const LaunchItem = (props) => {

  const date = new Date(props.launch_date);


  return(
    <StyledLaunchItem >
        <td>{props.flight_number}</td>
        <td>{props.mission_name}</td>
        <td>{date.toDateString()}</td>
    </StyledLaunchItem>
  );
}

export default LaunchItem;

// LaunchList.propTypes = {
  
// }