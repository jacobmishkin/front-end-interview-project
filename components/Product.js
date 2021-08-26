import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from './Image';

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 16px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

const Price = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #6d7173;
  font-weight: 400;
`;

const Product = ({ data, data: { assets } }) => {
  // Ran into issues with loader for Next.js created a custom image component
  const url = assets.map((image) => image.url);

  return (
    <ListItem>
      <Image src={url} alt={data.slug} />
      {data.title}
      <Price>
        <span>$</span>
        {data.unitPrice}
      </Price>
    </ListItem>
  );
};

Product.propTypes = {
  data: PropTypes.object,
};

export default Product;
