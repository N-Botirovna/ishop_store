// import React, { useState } from 'react';
// import './register.css';
// import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
// import 'react-phone-number-input/style.css'

// const Register = () => {
//   const [value, setValue] = useState('');

//   const handleChange = (phoneNumber) => {
//     setValue(phoneNumber);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isValidPhoneNumber(value)) {
//       alert('Noto\'g\'ri telefon raqami');
//       return;
//     }
//     // Yuborish logikasini davom ettirish
//   };

import React from 'react'

function Register() {
  return (
    <div>REgister is not working </div>
  )
}

export default Register


//   return (
//     <div className="form-container">
//       <h2>Telefon raqamingizni kiriting:</h2>
//       <form onSubmit={handleSubmit}>
//         <PhoneInput
//           international
//           defaultCountry="UZ"
//           placeholder= "123 45 67"
//           value={value}
//           onChange={handleChange}
//           inputProps={{
//             pattern: '[0-9]{9}',
//             required: true,
//           }}
//         />
//         <button type="submit">Sms kodni olish</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

// import React from 'react';
// import PropTypes from 'prop-types';
// import { Avatar } from '@mui/material';
// import Button from '@mui/material';
// import CssBaseline from '@mui/material';
// import FormControl from '@mui/material';
// import FormControlLabel from '@mui/material';
// import Checkbox from '@mui/material';
// import Input from '@mui/material';
// import InputLabel from '@mui/material';
// import LockOutlinedIcon from '@mui/material';
// import Paper from '@mui/material';
// import Typography from '@mui/material';
// import withStyles from '@mui/material';

// const styles = theme => ({
//   main: {
//     width: 'auto',
//     display: 'block', // Fix IE 11 issue.
//     marginLeft: theme.spacing.unit * 3,
//     marginRight: theme.spacing.unit * 3,
//     [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
//       width: 400,
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     },
//   },
//   paper: {
//     marginTop: theme.spacing.unit * 8,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
//   },
//   avatar: {
//     margin: theme.spacing.unit,
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing.unit,
//   },
//   submit: {
//     marginTop: theme.spacing.unit * 3,
//   },
// });

// function Register(props) {
//   const { classes } = props;

//   return (
//     <main className={classes.main}>
//       <CssBaseline />
//       <Paper className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <form className={classes.form}>
//           <FormControl margin="normal" required fullWidth>
//             <InputLabel htmlFor="email">Email Address</InputLabel>
//             <Input id="email" name="email" autoComplete="email" autoFocus />
//           </FormControl>
//           <FormControl margin="normal" required fullWidth>
//             <InputLabel htmlFor="password">Password</InputLabel>
//             <Input name="password" type="password" id="password" autoComplete="current-password" />
//           </FormControl>
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign in
//           </Button>
//         </form>
//       </Paper>
//     </main>
//   );
// }

// SignIn.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Register);