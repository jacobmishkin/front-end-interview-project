import styled from 'styled-components';
import { device } from './GlobalStyles/Utils/device';

const Image = styled.img`
  width: 137px;
  height: 106px;
  max-width: 100%;
  @media ${device.laptop} {
    width: 168px;
    height: 126px;
  }
`;
export default Image;
