import styled from 'styled-components';
import Product from './Product';
import useData from './useData';

const Center = styled.div`
  text-align: center;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
  grid-gap: 7px;
`;
const ListInfo = styled.div`
  padding-top: 32px;
  h4 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
    margin: 0;
  }
`;

export default function Page() {
  const { data, isLoading, isError } = useData();

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      {data.aisle.groups.map((group, index) => (
        <div key={index}>
          <ListInfo key={index}>
            <h4 key={group.id}>{group.name}</h4>
          </ListInfo>
          <Center key={group.category_id}>
            {group.products.map((product) => (
              <Product data={product} key={product.id} />
            ))}
          </Center>
        </div>
      ))}
    </>
  );
}
