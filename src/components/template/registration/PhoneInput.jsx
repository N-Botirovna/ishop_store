import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import './otpInput.css';
import { IMaskInput } from 'react-imask';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OtpInput from './OtpInput';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 00-000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export default function PhoneInput() {
  const numberRef = useRef(null);
  const [step, setStep] = useState('phone'); 
  const [num, setNum] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const num = numberRef.current.value.substring(5).trim()

    formData.append('phone', num.replace(/-/g, ''));
    console.log('num', num.replace(/-/g, ''));

    fetch('http://164.92.99.180:8000/api/phone/', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.status);
        if (data.status == true) {
          setNum(num);
          setStep('otp');
          console.log('kjk',step);
        }
      })
      .catch((error) => {
        console.error(error);
      });
      
  };

  return (
    
    <>
      {step === 'phone' && ( 
        <div className="otp-page">
          <h3>Ro'yxatdan o'tish</h3>
          <form className="form" onSubmit={handleSubmit}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '25px',
                marginBottom: '25px',
                colGap: '15px',
                '& > :not(style)': { m: 1 },
                width: '100%',
              }}
            >
              <FormControl sx={{ width: '100%' }} variant="standard">
                <input className="input" type="text" placeholder="Ismingizni kiriting:" />
                <Stack direction="row" spacing={2}>
                  <FormControl variant="standard">
                    <InputLabel htmlFor="formatted-text-mask-input">Telefon raqami:</InputLabel>
                    <Input
                      name="textmask"
                      id="formatted-text-mask-input"
                      inputRef={numberRef}
                      inputComponent={TextMaskCustom}
                    />
                  </FormControl>
                </Stack>
              </FormControl>
            </Box>

            <button type="submit" className="verify">
              SMS kodni olish
            </button>
          </form>
        </div>
      )}
      {step === 'otp' && (
        <OtpInput number = {num}/>
      )}
    </>
  );
}
