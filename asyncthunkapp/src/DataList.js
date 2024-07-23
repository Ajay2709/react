import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchData from './fetchDataThunk.js';

function DataList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    if (data.status === 'idle') {
      dispatch(fetchData());
    }
  }, [data.status, dispatch]);

  return (
    <div>
      {data.status === 'loading' && <p>Loading...</p>}
      {data.status === 'succeeded' && (
        <ul>
          {data.items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
      {data.status === 'failed' && <p>{data.error}</p>}
    </div>
  );
}

export default DataList;
