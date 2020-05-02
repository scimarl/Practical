import React, { Component } from 'react';
import { AppHeader } from '../components/AppHeader';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Theme } from '../Theme';
import { InitialPage } from '../components/InitialPage';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <AppHeader />
        <InitialPage />
      </MuiThemeProvider>
    );
  }
}

export default App;
