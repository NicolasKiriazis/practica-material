import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Instagram } from '@mui/icons-material';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#3f51b5', // Puedes cambiar el color de fondo según tus preferencias
    color: '#fff', // Puedes cambiar el color del texto según tus preferencias
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root} sx={{bgcolor:"#ffff"}}>
      <BottomNavigationAction
        label="LinkedIn"
        icon={<LinkedInIcon />}
        href="https://www.linkedin.com/company/somos-mugi/"
        target="_blank"
        rel="noopener noreferrer"
      />
      <BottomNavigationAction
        label="GitHub"
        icon={<Instagram />}
        href="https://www.instagram.com/somosmugi/"
        target="_blank"
        rel="noopener noreferrer"
      />
    </BottomNavigation>
  );
};

export default Footer;