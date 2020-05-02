import React, { useState }from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles, IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const PaperComponent = props => {
  return <Paper {...props} />;
};


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

const ShowCart = props => {

	const classes = useStyles();

 	const [open, setOpen] = React.useState(false);
  
	 const [cartList, setCartList ]= React.useState([]);

 	 const handleClickOpen = () => {
	    if(localStorage.getItem('item'))
		setCartList(JSON.parse(localStorage.getItem('item')));

		setOpen(true);
  	};

	const handleClose = () => {
		setOpen(false);
	};


  
  return (
    <div>
      <IconButton color="inherit" onClick={handleClickOpen}>
            
            <ShoppingCartIcon />
          </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="shoppingCart-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="shoppingCart-dialog-title">
          This is your shopping cart
        </DialogTitle>
        <DialogContent dividers>
          
		  
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="center">Fruit Name</TableCell>
                    <TableCell align="center">Region</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Quality</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {cartList &&
                    cartList
                    .map(product => {
                        return (	
                        <TableRow key={product.id}>
                            <TableCell align="center">{product['name']}</TableCell>
                            <TableCell align="center">{product['region']}</TableCell>
                            <TableCell align="center">{'$'+product['price']}</TableCell>
                            <TableCell align="center">{product['requirement']}</TableCell>
                        </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button  color="primary">
            Confirm & bill
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ShowCart;
