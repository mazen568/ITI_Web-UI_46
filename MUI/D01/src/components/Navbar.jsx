import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#000000'}}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
         <Button color='white' fontWeight='bold' size='large' sx={{fontSize:18}} startIcon={<AcUnitIcon />}>
            Vought
         </Button>
        <Button 
          variant="contained"
          color='secondary'
          sx={{ 
            fontWeight: 'bold',
          }}
        >
          LOGIN
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
