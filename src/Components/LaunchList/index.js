import React from 'react';
import PropTypes from 'prop-types';
import StyledLaunchList from './styles';

const LaunchList = (props) => {
  return(
    <StyledLaunchList>
        {
          props.items.map(() => )
        }
    </StyledLaunchList>
  );
}

export default LaunchList;


<ul>
  {elements.map((value, index) => {
    return <li key={index}>{value}</li>
  })}
</ul>