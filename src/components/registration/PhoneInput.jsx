import React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './otpInput.css';
import FormattedInputs from './PhoneNumber';

export default function PhoneInput(props) {
  const { onChange, ...other } = props;

  return (
    <div className="otp-page">
      <h3>Ro'yxatdan o'tish</h3>
      <form className='form' action="">
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Ismingizni kiriting:
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
            <FormattedInputs/>
          </FormControl>
        </Box>

        <button type='submit' className='verify'>SMS kodni olish</button>
      </form>
    </div>
  );
}
