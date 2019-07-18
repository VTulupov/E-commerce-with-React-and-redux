import React from 'react';
import './App.scss';
import Routes from './routes/Routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 10,
  },
});
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
