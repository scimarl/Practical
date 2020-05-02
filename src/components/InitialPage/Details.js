import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';



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

export const Details = props => {
    //fake datas
    var productList = [{id:1, name:'Apple', region:'Australia', price:'10', rate:'4', onStock:1, requirement:0 },
        {id:2, name:'Apple', region:'America', price:'10', rate:'3',  onStock:1, requirement:0},
        {id:3, name:'Apple', region:'China', price:'15', rate:'5',  onStock:1, requirement:0 },
        {id:4, name:'Pear', region:'Australia', price:'20', rate:'2',  onStock:1, requirement:0}
    ];

    //make up styles
    const classes = useStyles();

    //store in somewhere, localhost for now
    var list = [];
    localStorage.setItem('item', list);

    //add to cart
    async function handleAdd(product) {
      //add product to localhost

     
      if(list.includes(product)){
        var foundIndex = list.findIndex(x => x.id === product.id);
        product['requirement']++;
        list[foundIndex] = product;
      }else{
        product['requirement']++;
        list.push(product);
      }
    
    localStorage.setItem('item', JSON.stringify(list));
    }




    return (
        <Grid container justify="center" className={classes.root}>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="center">Fruit Name</TableCell>
                    <TableCell align="center">Region</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Rate</TableCell>
                    <TableCell align="center">Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {productList &&
                    productList
                    .filter(product => product['onStock'])
                    .map(product => {
                        return (
                        <TableRow key={product.id}>
                            <TableCell align="center">{product['name']}</TableCell>
                            <TableCell align="center">{product['region']}</TableCell>
                            <TableCell align="center">{'$'+product['price']}</TableCell>
                            <TableCell align="center">{product['rate'] + 'stars'}</TableCell>
                            <TableCell align="center">
                            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={() => handleAdd(product)}>
                            Add to Cart
                            </Button>
                            </TableCell>
                        </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            </Paper>
        </Grid>
        </Grid>
    );
};