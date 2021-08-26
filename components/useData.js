import useSWR from 'swr';
/*
 * Using SWR for client side data fetching
 * see more at: https://swr.vercel.app/
 *
 */

export default function useData() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    'https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6',
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
