import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { loadOrders } from '../../store/effects';
import { ApplicationState } from '../../store/types';
import '../../styles/App.scss';
import OrderTable from './OrderTable';


const App: React.FC = () => {
  const dispatch = useDispatch()
  const orders = useSelector((state: ApplicationState) => state.orders)
  const loading = useSelector((state: ApplicationState) => state.loading)

  React.useEffect(() => {
    dispatch(loadOrders())
  }, [])


  return (
    <div>
      {
        loading.orders ? <div className="loading">Loading...</div> :
          <OrderTable
            orders={orders}
          />
      }
    </div>
  );
}

export default App;