import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// import EditIcon from '@mui/icons-material/Edit';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: '100%',
}));

const message = `Noutbuk Hp Laptop`;

export default function ZeroWidthStack() {
  const productPrice = "$999.99"; // Tovar narxi
  const productDate = "2023-12-25"; // Tovar sanasi
  const productQuantity = 10; // Tovar soni
  const adminName = "John Doe"; // Admin ismi
  const category = "Noutbuk"

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>

      <Item
        sx={{
          my: 1,
          mx: '0',
        }}
      >
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
            // gridTemplateColumns: '1fr repeat(2, minmax(0, 1fr))',
            // gridTemplateRows: '1fr',
            // gridGap: 2,
          }}
        >
          <Stack sx={{ height: '100%', width: '10%' }}>
            <Avatar>W</Avatar>
          </Stack>
          <Stack
            sx={{ height: '100%', width: '18%' }}
            direction="column"
          >
            <Typography noWrap>Tovar nomi</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', padding: 1, width: '12%'}}
            direction="column"
          >
            <Typography noWrap>Narxi</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', padding: 1,width: '15%' }}
            direction="column"
          >
            <Typography noWrap>Kategoriya</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', padding: 1, width: '10%' }}
            direction="column"
          >
            <Typography noWrap>Soni</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%',width: '12%' }}
            direction="column"
          >
            <Typography noWrap>Qo'shilgan sana</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', width: '15%' }}
            direction="column"
          >
            {/* <EditIcon /> */}
            <Typography noWrap>Admin</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', width: '8%' }}
            direction="column"
          >
            {/* <EditIcon /> */}
            <Typography noWrap>Edit</Typography>
          </Stack>
        </Stack>
      </Item>

      <Item
        sx={{
          my: 1,
          mx: '0',
        }}
      >
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
            // gridTemplateColumns: '1fr repeat(2, minmax(0, 1fr))',
            // gridTemplateRows: '1fr',
            // gridGap: 2,
          }}
        >
          <Stack sx={{ height: '100%', width: '10%' }}>
            <Avatar>W</Avatar>
          </Stack>
          <Stack
            sx={{ height: '100%', width: '18%' }}
            direction="column"
          >
            <Typography sx={{ fontSize: '15px' }} noWrap>Noutbuk Hp Laptop</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', padding: 1, width: '12%'}}
            direction="column"
          >
            <Typography sx={{ fontSize: '15px' }} noWrap>12 000 000</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', padding: 1,width: '15%' }}
            direction="column"
          >
            <Typography sx={{ fontSize: '15px' }} noWrap>computer</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', padding: 1, width: '10%' }}
            direction="column"
          >
            <Typography noWrap>10</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%',width: '12%' }}
            direction="column"
          >
            <Typography noWrap>10.12.2023</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', width: '15%' }}
            direction="column"
          >
            {/* <EditIcon /> */}
            <Typography noWrap>John</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', width: '8%' }}
            direction="column"
          >
            {/* <EditIcon /> */}
            <Typography noWrap>Edit</Typography>
          </Stack>
        </Stack>
      </Item>

      <Item
        sx={{
          my: 1,
          mx: '0',
        }}
      >
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
            // gridTemplateColumns: '1fr repeat(2, minmax(0, 1fr))',
            // gridTemplateRows: '1fr',
            // gridGap: 2,
          }}
        >
          <Stack sx={{ height: '100%', width: '10%' }}>
            <Avatar>W</Avatar>
          </Stack>
          <Stack
            sx={{ height: '100%', width: '18%' }}
            direction="column"
          >
            <Typography noWrap>Redmi Note 12 Pro</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', padding: 1, width: '12%'}}
            direction="column"
          >
            <Typography noWrap>980 000</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', padding: 1,width: '15%' }}
            direction="column"
          >
            <Typography noWrap>Telefon</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', padding: 1, width: '10%' }}
            direction="column"
          >
            <Typography noWrap>10</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%',width: '12%' }}
            direction="column"
          >
            <Typography noWrap>12.12.2023</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', width: '15%' }}
            direction="column"
          >
            {/* <EditIcon /> */}
            <Typography noWrap>GUlnoza</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', width: '8%' }}
            direction="column"
          >
            {/* <EditIcon /> */}
            <Typography noWrap>Edit</Typography>
          </Stack>
        </Stack>
      </Item>
      
      <Item
        sx={{
          my: 1,
          mx: '0',
        }}
      >
        <Stack
          spacing={2}
          direction="row"
          alignItems='flex-start'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
            // gridTemplateColumns: '1fr repeat(2, minmax(0, 1fr))',
            // gridTemplateRows: '1fr',
            // gridGap: 2,
          }}
        >
          <Stack sx={{ height: '100%', width: '10%' }}>
            <Avatar>W</Avatar>
          </Stack>
          <Stack
            sx={{ height: '100%', width: '18%' }}
            direction="column"
          >
            <Typography noWrap>Noutbuk Hp Laptop X pro Max </Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', padding: 1, width: '12%'}}
            direction="column"
          >
            <Typography noWrap>12 000 000</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', padding: 1,width: '15%' }}
            direction="column"
          >
            <Typography noWrap>Personal computer of NSA</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', padding: 1, width: '10%' }}
            direction="column"
          >
            <Typography noWrap>10</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%',width: '12%' }}
            direction="column"
          >
            <Typography noWrap>10.12.2023</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', width: '15%' }}
            direction="column"
          >
            {/* <EditIcon /> */}
            <Typography noWrap>madina-content</Typography>
          </Stack>
          <Stack
            sx={{ height: '100%', width: '8%' }}
            direction="column"
          >
            {/* <EditIcon /> */}
            <Typography noWrap>Edit</Typography>
          </Stack>
        </Stack>
      </Item>



    </Box>
  );
}