import React from 'react';
import PropTypes from 'prop-types';
import StyledLaunchList from './styles';
import LaunchItem from '../LaunchItem';

const LaunchList = (props) => {
  return(
    <StyledLaunchList>
      <thead>
        <tr>
          <th>Flight ID</th>
          <th>Mission Name</th>
          <th>Upcoming</th>
          <th>Launch Date</th>
        </tr>
      </thead>
      <tbody>
        {
          props.items.map((item, index) => {
            return (
              <LaunchItem
                key={index}
                flight_number={item.flight_number}
                mission_name={item.mission_name}
                upcoming={item.upcoming}
                launch_date={item.launch_date_utc}
                video_link={item.links.video_link}
                patch={item.links.mission_patch}
              />
            )
          })
        }
      </tbody>
    </StyledLaunchList>
  );
}
    
    export default LaunchList;
    
    // LaunchList.propTypes = {
    
    // }
