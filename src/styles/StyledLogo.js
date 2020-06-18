import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLogo = styled(Link)`
  color: #61dafb;
  font-size: 20px;
  font-weight: 700;

  &:hover {
    opacity: 0.8;
  }
`;

export default StyledLogo;
