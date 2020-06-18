import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  padding: 5px 10px;
  font-size: 14px;

  &:hover {
    color: #61dafb;
  }
`;

export default StyledLink;
