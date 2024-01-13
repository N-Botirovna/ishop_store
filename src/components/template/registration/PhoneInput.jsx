import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import './otpInput.css';
import FormattedInputs from './PhoneNumber';

export default function PhoneInput(props) {
  const { onChange, ...other } = props;

  return (
    <div className="otp-page">
      <h3>Ro'yxatdan o'tish</h3>
      <form className='form' action="">
        <Box sx={{ display: 'flex', flexDirection: 'row',marginTop: '25px', marginBottom: '25px', colGap: '15px', '& > :not(style)': { m: 1 }, width: '100%' }}>
          <FormControl sx={{width: '100%'}} variant="standard">
            <input className='input' type="text" placeholder='Ismingizni kiriting:'/>
            <FormattedInputs/>
          </FormControl>
        </Box>

        <button type='submit' className='verify'>SMS kodni olish</button>
      </form>
    </div>
  );
}
