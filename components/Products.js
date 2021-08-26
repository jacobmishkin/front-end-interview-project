import useSWR from 'swr';
import styled from 'styled-components';
import Product from './Product';

const Center = styled.div`
  text-align: center;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
  grid-gap: 7px;
`;

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page() {
  const { data, error } = useSWR(
    'https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6',
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      {data.aisle.groups.map((group, index) => (
        <>
          <h3 key={group.id}>{group.name}</h3>
          <Center>
            {group.products.map((product) => (
              <Product data={product} key={product.id} />
            ))}
          </Center>
        </>
      ))}
    </>
  );
}
