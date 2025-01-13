import SingleItem from './SingleItem';
import { useMutation, useQuery } from '@tanstack/react-query';
import customFetch from './utils';

const Items = ({ items }) => {
  const { isPending, data, isError, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/');
      return data;
    }
  });

  if (isPending) {
    return <p style={{marginTop: '1rem'}}>Loading...</p>
  }
  if (isError) {
    return <p style={{marginTop: '1rem'}}>There was an error...</p>
  }
  // if (error) {
  //   return <p style={{marginTop: '1rem'}}>{error.response.data}</p>
  // }

  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
