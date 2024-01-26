import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { useDrawerContext } from '../../../hooks/DrawerContext';
import { Container, } from './styles';
import logo from '../../../../assets/logo-page.png'

export const Header = () => {
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Container>
      <Box display="flex" justifyContent="space-between">
        <IconButton onClick={toggleDrawerOpen} style={{ fontSize: '400px', color: '#717339', width: '10%', justifyContent: "center", height: "110px", alignItems: "center" }}>
          <MenuIcon style={{ fontSize: '40px', color: '#717339' }} />        </IconButton>
        <div style={{ width: '10%', justifyContent: "center", height: "110px", alignItems: "center" }}>
          <img src={logo} alt="" width="120px" height="120px" style={{ paddingBottom: "10px" }} />
        </div>
      </Box>
    </Container >
  );
};
