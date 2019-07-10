import React from 'react';
import './App.scss';
import Routes from './routes/Routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
