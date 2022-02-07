import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Details from './components/pages/Details';
import Home from './components/pages/Home';
import './App.css';
import Header from './components/Header';

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#3f51b5',
      color: 'white',
      minHeight: '100vh',
    },
  }));

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/*" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
