import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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
      <Select label="Categoriya" variant="outlined" size="small" sx={{ width: '200px' }}>
        <MenuItem value="">Barcha</MenuItem>
        <MenuItem value="category1">Kategoriya 1</MenuItem>
        <MenuItem value="category2">Kategoriya 2</MenuItem>
      </Select>
      <Box sx={{ fontSize: '18px', alignSelf: 'flex-start' }}>
        Model:
      </Box>
      <Select label="Model" variant="outlined" size="small" sx={{ width: '200px' }}>
        <MenuItem value="">Barcha</MenuItem>
        <MenuItem value="model1">Model 1</MenuItem>
        <MenuItem value="model2">Model 2</MenuItem>
      </Select>
      <Box sx={{ fontSize: '18px', alignSelf: 'flex-start' }}>
        Narx:
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <TextField label="dan" variant="outlined" size="small" sx={{ width: '100px' }} />
        <TextField label="gacha" variant="outlined" size="small" sx={{ width: '100px' }} />
      </Box>

      {/* Price input fields */}
      <Box sx={{ fontSize: '18px', alignSelf: 'flex-start' }}>
        Sana bo'yicha:
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <TextField
          variant="outlined"
          size="small"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          sx={{ width: '150px' }}
        />
      </Box>
      <Button variant="contained" sx={{background: 'rgb(51, 217, 54)'}} onClick={handleFilterClick}>
        Filter
      </Button>
    </Box>
  );
};

export default FilterComponent;