import styled from 'styled-components';
import { device } from './GlobalStyles/Utils/device';
import Image from './Image';

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 16px;
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
