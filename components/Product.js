import styled from 'styled-components';
import { device } from './GlobalStyles/Utils/device';

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 16px;
`;
const Image = styled.img`
  width: 137px;
  height: 106px;
  max-width: 100%;
  @media ${device.laptop} {
    width: 168px;
    height: 126px;
  }
`;

const Product = ({ data, data: { assets } }) => {
  const url = assets.map((image) => image.url);

  return (
    <ListItem>
      <Image src={url} alt={data.slug} />
      {data.title}
      <div>
        <span>$</span>
        {data.unitPrice}
      </div>
    </ListItem>
  );
};

export default Product;
