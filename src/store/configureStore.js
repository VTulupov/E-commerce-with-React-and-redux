import { createStore, combineReducers } from 'redux';
import phonesReducer from './../reducers/phonesReducer';
import filtersReducer from '../reducers/filtersReducer';
import paymentFormReducer from '../reducers/paymentFormReducer';
import ordersReducer from '../reducers/ordersReducer';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      phonesReducer,
      filters: filtersReducer,
      paymentInfo: paymentFormReducer,
      orders: ordersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store;
}

export default configureStore;