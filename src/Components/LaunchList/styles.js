import styled from 'styled-components';

const StyledLaunchList = styled.table`
  margin: 0 auto;

  th{
    text-align: left;
  }

  td, th {
    padding: 8px 16px;
  }

  tr:nth-child(even){
    background-color: #22222203
  }

  tr:hover {
    background-color: #22222208

    
  }
`;

export default StyledLaunchList;