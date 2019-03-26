import styled from 'styled-components';

const StyledLaunchItem = styled.tr`
  padding: 12px;
  
  &:not(:last-child){
    border-bottom: 1px solid #222;
  }

  &:hover {
    border: 1px solid #333;
    cursor: pointer;
  }
`;

export default StyledLaunchItem;