import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Details from './components/pages/Details';
import Home from './components/pages/Home';
import './App.css';
import Header from './components/Header';
import { fetchCryptos } from './redux/crypto/crypto';
import { CryptoState } from './CryptoContext';

function App() {
  const dispatch = useDispatch();

  const currency = CryptoState();

  useEffect(() => {
    dispatch(fetchCryptos(currency.currency));
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
