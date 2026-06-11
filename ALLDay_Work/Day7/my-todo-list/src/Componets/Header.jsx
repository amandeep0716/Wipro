import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
function Header(){
    return(
        
   
      <AppBar position="static">
        <Toolbar variant="dense">
             <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
           <Typography
            variant="h6"
            component="div"
            sx={{
              color: 'inherit',
            }}
          >
            My ToDo App
          </Typography>
        </Toolbar>
       </AppBar>
   
        
    )
}
export default Header;


