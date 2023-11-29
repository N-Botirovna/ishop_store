import React, { useState } from 'react';
import './register.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

const Register = () => {
  const [value, setValue] = useState('');

  const handleChange = (phoneNumber) => {
    setValue(phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidPhoneNumber(value)) {
      alert('Noto\'g\'ri telefon raqami');
      return;
    }
    // Yuborish logikasini davom ettirish
  };

  return (
    <div className="form-container">
      <h2>Telefon raqamingizni kiriting:</h2>
      <form onSubmit={handleSubmit}>
        <PhoneInput
          international
          defaultCountry="UZ"
          placeholder= "123 45 67"
          value={value}
          onChange={handleChange}
          inputProps={{
            pattern: '[0-9]{9}',
            required: true,
          }}
        />
        <button type="submit">Sms kodni olish</button>
      </form>
    </div>
  );
};

export default Register;