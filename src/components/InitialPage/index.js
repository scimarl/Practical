import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Details} from './Details';
import Grids from './Grid';


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    flexGrow: 1
  },
  paper: {
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: theme.spacing(8)
  },
  table: {
    minWidth: 650
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export const InitialPage = props => {



  const classes = useStyles();
  return (
    <div align = "center" style={{marginTop: '9em'}} >
    <h2 className="form-signin-heading" align = "Center">Please browse and choose what you like!</h2>
    <div><Details /></div>
    <div> 
      <Paper className={classes.paper}>
      <Grids />
      </Paper>
    </div>
    </div>

  );
};
