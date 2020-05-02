import React, { useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Gender } from './Gender';

const useStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1,
    background: theme.palette.primary,
    paddingTop: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
	},

}));

export const DetailFields = props => {
	const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');

  const classes = useStyles();


	console.log(firstName, lastName, phone, email, address);


  return (
		<div>
		<Grid container className={classes.container} alignItems="center">
		 <Grid item xs={6}>
      <label >First Name:</label><br/>
        <TextField
          id="First Name"
          label="First Name"
          className={classes.textField}
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
          margin="normal"
          required={true}
          placeholder="first name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={6}>
       <label >Last Name:</label><br/>
        <TextField
          id="last-name"
          label="Last Name"
          className={classes.textField}
          value={lastName}
          onChange={event => setLastName(event.target.value)}
          margin="normal"
          required={true}
          placeholder="last name"
          variant="outlined"
        />
      </Grid>
			<Grid item xs={6}>
			<label>Phone Number:</label><br/>
				<TextField
					id="phone"
					label="phone"
					className={classes.textField}
					value={phone}
					onChange={event => setPhone(event.target.value)}
					margin="normal"
					required={true}
					placeholder="phone"
					variant="outlined"
				/>
			</Grid>
			<Grid item xs={6}>
			<label>Email address:</label><br/>
				<TextField
					id="email"
					label="email"
					className={classes.textField}
					value={email}
					onChange={event => setEmail(event.target.value)}
					margin="normal"
					required={true}
					placeholder="email"
					variant="outlined"
					/>
			</Grid>
			<Grid item xs={6}>
			<label>Living Address:</label><br/>
				<TextField
					id="address"
					label="address"
					className={classes.textField}
					value={address}
					onChange={event => setAddress(event.target.value)}
					margin="normal"
					required={true}
					placeholder="address"
					variant="outlined"
					/>
			</Grid>
		</Grid>
		</div>
  );
};