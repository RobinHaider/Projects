import { Mail, Notifications, Pets } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
  display: 'flex',
});

const SearchContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(0, 2),
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const UserContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          React MUI
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <SearchContainer>
          <InputBase fullWidth placeholder='Search...' />
        </SearchContainer>
        <IconContainer>
          <Badge badgeContent={4} color='primary'>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color='primary'>
            <Notifications />
          </Badge>
          <Avatar
            onClick={() => setOpen(!open)}
            alt='Remy Sharp'
            src='https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg'
          />
        </IconContainer>
        <UserContainer onClick={() => setOpen(!open)}>
          <Avatar
            alt='Remy Sharp'
            src='https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg'
          />
          <Typography variant='body1'>Robin</Typography>
        </UserContainer>
      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
