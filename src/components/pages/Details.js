import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptoDetails } from '../../redux/crypto/crypto';

function Details() {
  const { id } = useParams();
  const crypto = useSelector((state) => state.cryptoDetailsReducer.crypto);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCryptoDetails(id));
    console.log(crypto);
  }, []);

  const cryptoDetailsDiv = (
    <div className="flex flex-col items-center justify-center text-center mb-8">
      <div className="meals transition-all duration-1000 ease-out m-0">
        <div className="meal hover:shadow-lg transition-all duration-1000 ease-out">
          <h1>{crypto.name}</h1>
          <img
            src={crypto.image}
            alt={crypto.name}
            className="h-40 sm:h-40 w-full object-cover hover:opacity-75"
          />
          <p>
            ₦
            {crypto.current_price}
          </p>
        </div>
      </div>
    </div>
  );
  return <div>{cryptoDetailsDiv}</div>;
}

export default Details;
