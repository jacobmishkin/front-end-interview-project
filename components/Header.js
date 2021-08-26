import styled from 'styled-components';
import Hamburger from '../public/hamburger.svg';
import Basket from '../public/basket.svg';
import Logo from '../public/logo.svg';
import { size } from './GlobalStyles/Utils/size';
import { device } from './GlobalStyles/Utils/device';
import useViewport from './GlobalStyles/Utils/useViewport';

const StyledHeader = styled.header`
  background: black;
  color: white;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin: 0;
  }

  @media ${device.laptop} {
    justify-content: center;
    padding-top: 0;

    span {
      margin-left: 25px;
    }

    h1 {
      margin-bottom: 0;
      flex: 1;
      text-align: center;
    }
  }
`;

const DesktopButtons = styled.div`
  @media ${device.laptop} {
    margin-left: auto;
    flex: 1;
  }
`;

const BasketContainer = styled.div`
  margin-top: 15px;
  padding-right: 15px;
  @media ${device.laptop} {
    margin-right: auto;
    text-align: right;
    flex: 1;
  }
`;

const Header = () => {
  // Using viewport hook to check viewport width
  const viewport = useViewport();

  return (
    <>
      <StyledHeader>
        {viewport.width >= parseInt(size.laptop) ? (
          <>
            {/* Omitting Link tags as this is for one page only */}
            <DesktopButtons>
              <span>Stories</span>
              <span>Contact Us</span>
            </DesktopButtons>
          </>
        ) : (
          <Hamburger />
        )}

        <h1>
          {/* All images are SVG's and imported via @svgr 
						if I had more time would of loved to animate the logo */}
          <Logo />
        </h1>
        <BasketContainer>
          <Basket />
        </BasketContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
