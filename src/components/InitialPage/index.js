import React from 'react';

import {Details} from './Details';
import Button from '@material-ui/core/Button';

export const InitialPage = props => {
  return (
    <div align = "center" style={{marginTop: '9em'}} >
    <h2 className="form-signin-heading" align = "Center">Please browse and choose what you like!</h2>
    <div><Details /></div>
    </div>

  );
};
