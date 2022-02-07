import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import SettingsIcon from '@material-ui/icons/Settings';
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    type: 'dark',
  },
});

function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate('/')}
              variant="h6"
              className={classes.title}
            >
              Crypto Metrics
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            <MicIcon style={{ marginRight: 10 }} />
            <SettingsIcon />
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="NGN">NGN</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
