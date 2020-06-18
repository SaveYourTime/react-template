import React from 'react';
import StyledHeaderWrapper from '../../styles/StyledHeaderWrapper';
import StyledHeader from '../../styles/StyledHeader';
import StyledLogo from '../../styles/StyledLogo';
import StyledLink from '../../styles/StyledLink';

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <StyledLogo to="/">SaveYourTime</StyledLogo>
        <div>
          <StyledLink to="/auth">Auth</StyledLink>
          <StyledLink to="/protected">Protected</StyledLink>
        </div>
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};

export default Header;
