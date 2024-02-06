import React, { useRef, useState, useEffect } from 'react';
import { UilEnvelopeDownload } from '@iconscout/react-unicons'
import './otpInput.css';
import RegistrationForm from './UserDataInput';

export default function OtpInput({ data }) {
  const num_otp = data;
  const inputRefs = useRef([]);
  const [resendTimer, setResendTimer] = useState(60);
  const [verifyCode, setVerifyCode] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    let timerId;

    if (resendTimer > 0) {
      timerId = setTimeout(() => {
        setResendTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }

    if (verifyCode.length === 6) {
      if (verifyCode == data.code.verify_code) {
        setCurrentStep(2); 
      }
      else{
        console.log('error');
      }
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [resendTimer, verifyCode, data.code.verify_code]);

  const handleInputChange = (e, index) => {
    const input = e.target;
    const nextInput = inputRefs.current[index + 1];
    const prevInput = inputRefs.current[index - 1];

    if (input.value) {
      if (nextInput && input.value.length === 1) {
        nextInput.focus();
      }
    } else {
      if (prevInput) {
        prevInput.focus();
      }
    }

    const updatedCode = [...verifyCode];
    updatedCode[index] = input.value;
    setVerifyCode(updatedCode.join(''));
  };

  const handleKeyDown = (e, index) => {
    const prevInput = inputRefs.current[index];

    if (e.key === 'Backspace' && prevInput) {
      prevInput.focus();
    }
  };

  return (
    <>
      {currentStep === 1 && (
        <div className="otp-page">
          <div className="icon">
            <UilEnvelopeDownload />
          </div>
          <h3>Sms orqali yuborilgan xabarni kiriting</h3>
          <p>+998*****{data.code.phone_number.slice(5)} raqamiga qabul qilingan</p>
          <div className="otp-group">
            {[1, 2, 3, 4, 5, 6].map((digit, idx) => (
              <input
                key={idx}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="\d{1}"
                maxLength={1}
                className="otp-input"
                ref={el => (inputRefs.current[idx] = el)}
                onChange={e => handleInputChange(e, idx)}
                onKeyDown={e => handleKeyDown(e, idx)}
              />
            ))}
          </div>
          {resendTimer === 0 ? (
            <button className="verify">
              Qayta kod jo'natish
            </button>
          ) : (
            <p>Qayta yuborishni {resendTimer} soniya ichida sinab ko'ring</p>
          )}
        </div>
      )}
      {currentStep === 2 && (
        <RegistrationForm  propData = {num_otp}/>
      )}
    </>
  );
}
