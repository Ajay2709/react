import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchData from './fetchDataThunk.js';

function DataList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data.items);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
      {status === 'failed' && <p>{error}</p>}
    </div>
  );
}

export default DataList;
