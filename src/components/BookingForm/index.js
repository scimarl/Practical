import React from 'react';

import {DetailFields} from './Details';
import Button from '@material-ui/core/Button';

export const BookingForm = props => {
  return (
    <div align = "center" style={{marginTop: '9em'}} >
    <h2 className="form-signin-heading" align = "Center">Hi! tell us about yourself</h2>
    <div><DetailFields /></div>
    <div style = {{marginTop:10}}><Button >Submit</Button></div>
    </div>

  );
};
