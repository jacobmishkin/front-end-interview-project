import useSWR from 'swr';
import Product from './Product';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page() {
  const { data, error } = useSWR(
    'https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6',
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      {data.aisle.groups.map((group) => (
        <>
          <h3 key={group.id}>{group.name}</h3>
          {group.products.map((product) => (
            <Product data={product} key={product.id} />
          ))}
        </>
      ))}
    </div>
  );
}
