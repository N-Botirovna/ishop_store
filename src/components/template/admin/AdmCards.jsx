import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AdmProductModal from '../../../modals/AdmProductModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const card1 = (
  <React.Fragment>
    <CardContent>
      <Typography size="small" component="div" align="center">
        Tovarlar soni:
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: 'center', marginTop: '-25px'  }}>
      <Button size="large">15</Button>
    </CardActions>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
    <CardContent>
      <Typography size="small" component="div" align="center">
        Shu oy mobaynida:
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: 'center', marginTop: '-15px' }}>
      <Button size="large">7</Button>
    </CardActions>
  </React.Fragment>
);

const card3 = (
  <React.Fragment>
    <CardContent>
      <Typography size="small" component="div" align="center">
        Tovar qo'shish:
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: 'center', marginTop: '-15px'  }}>
      <Button size="large">+</Button>
    </CardActions>
  </React.Fragment>
);

const card4 = (
  <React.Fragment>
    <CardContent>
      <Typography size="small" component="div" align="center">
        Reklama qo'shish:
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: 'center', marginTop: '-15px'  }}>
      <Button size="large">+</Button>
    </CardActions>
  </React.Fragment>
)

export default function AdmCards({data}) {
  const [complete, isComplete] = useState(data);
  console.log(complete);
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '50px', marginTop: '20px', marginBottom: '50px' }}>
      <Typography variant="h5" sx={{ alignSelf: 'center',paddingInlineStart: "80px", width: '60%' }}>Tovarlar ro'yxati</Typography>
      <Card variant="outlined" sx={{ width: '20%', height: '100px' }}>
        {card1}
      </Card>
      <Card variant="outlined" sx={{ width: '20%' , height: '100px'}}>
        {card2}
      </Card>
      <Link to={'/admin/admin/add'} >
      <Card variant="outlined" sx={{ width: '100%' , height: '100px'}} >
        {card3}
      </Card>
      </Link>
      <Card variant="outlined" sx={{ width: '20%' , height: '100px'}} >
        {card4}
      </Card>
    </Box>
  );
}