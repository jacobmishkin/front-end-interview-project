import styled from 'styled-components';
import Hamburger from '../public/hamburger.svg';
import Basket from '../public/basket.svg';
import Logo from '../public/logo.svg';

const StyledHeader = styled.div`
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  margin-bottom: 20px;
  h1 {
    margin: 0;
    margin-bottom: 19px;
  }
`;

const BasketContainer = styled.div`
  margin-top: 15px;
  margin-right: 16px;
`;

const Header = () => (
  <>
    <StyledHeader>
      <Hamburger />
      <h1>
        <Logo />
      </h1>
      <BasketContainer>
        <Basket />
      </BasketContainer>
    </StyledHeader>
  </>
);

export default Header;
