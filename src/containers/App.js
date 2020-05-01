import React, { Component } from 'react';
import { AppHeader } from '../components/AppHeader';
import { Desktop } from '../components/Desktop';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Theme } from '../Theme';
import { BookingForm } from '../components/BookingForm';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <AppHeader />
        <BookingForm />
      </MuiThemeProvider>
    );
  }
}

export default App;
