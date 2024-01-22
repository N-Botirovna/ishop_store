import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const FilterComponent = () => {
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleFilterClick = () => {
    // Filter logic here
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column', gap: '10px' }}>
      <Box sx={{ fontSize: '24px', fontWeight: 'bold', alignSelf: 'flex-start' }}>
        Filter
      </Box>
      <Box sx={{ fontSize: '18px', alignSelf: 'flex-start' }}>
        Categoriya:
      </Box>
      {/* Select component */}
      <Box sx={{ fontSize: '18px', alignSelf: 'flex-start' }}>
        Model:
      </Box>
      {/* Select component */}
      <Box sx={{ fontSize: '18px', alignSelf: 'flex-start' }}>
        Narx:
      </Box>
      {/* Price input fields */}
      <Box sx={{ fontSize: '18px', alignSelf: 'flex-start' }}>
        Sana bo'yicha:
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <TextField
          label="Boshlanish sanasi"
          variant="outlined"
          size="small"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          sx={{ width: '150px' }}
        />
        <TextField
          label="Tugash sanasi"
          variant="outlined"
          size="small"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          sx={{ width: '150px' }}
        />
      </Box>
      <Button variant="contained" onClick={handleFilterClick}>
        Filter
      </Button>
    </Box>
  );
};

export default FilterComponent;