import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState('NGN');
  const [symbol, setSymbol] = useState('₦');

  useEffect(() => {
    if (currency === 'NGN') setSymbol('₦”');
    else if (currency === 'USD') setSymbol('$');
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

CryptoContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CryptoContext;

export const CryptoState = () => useContext(Crypto);
