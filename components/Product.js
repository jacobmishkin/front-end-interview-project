import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from './Image';

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 16px;
`;

const Product = ({ data, data: { assets } }) => {
  // Ran into issues with loader for Next.js created a custom image component
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

Product.propTypes = {
  data: PropTypes.object,
};

export default Product;
