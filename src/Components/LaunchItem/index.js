import React from 'react';
// import PropTypes from 'prop-types';
import StyledLaunchItem from './styles';

const LaunchItem = (props) => {

  const date = new Date(props.launch_date);

  const upcoming = props.upcoming;

  let upcomingString;

  if(upcoming){
    upcomingString = "True";
  }else{
    upcomingString = "False";
  }

  return(
    <StyledLaunchItem >
      <td>{props.flight_number}</td>
      <td>{props.mission_name}</td>
      <td>{upcomingString}</td>
      <td>{date.toDateString()}</td>
      <td><a href={props.video_link}>Video</a></td>
      <td><a href={props.patch}>Patch</a></td>
    </StyledLaunchItem>
  );
}

export default LaunchItem;

// LaunchList.propTypes = {
  
// }