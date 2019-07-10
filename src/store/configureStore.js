import { createStore, combineReducers } from 'redux';
import phonesReducer from './../reducers/phonesReducer';
import filtersReducer from '../reducers/filtersReducer';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      phonesReducer,
      filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store;
}

export default configureStore;