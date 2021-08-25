import styled from 'styled-components';

const Product = ({ data, data: { assets } }) => {
  const url = assets.map((image) => image.url);

  return (
    <div key={data.id}>
      <ul>
        <li>
          <img src={url} alt={data.slug} width={170} height={100} />
          {data.title}
          <div>${data.unitPrice}</div>
        </li>
      </ul>
    </div>
  );
};

export default Product;
