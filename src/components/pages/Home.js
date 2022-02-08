import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Home() {
  const cryptos = useSelector((state) => state.cryptosReducer.cryptos);

  useEffect(() => {
    console.log(cryptos);
  }, [cryptos]);

  const cryptoDiv = cryptos.map((crypto) => (
    <div key={crypto.id} cursor="pointer">
      <h1>{crypto.name}</h1>
      <img src={crypto.image} alt={crypto.name} />
      <p>{crypto.description}</p>
    </div>
  ));

  return <div> {cryptoDiv} </div>;
}

export default Home;
