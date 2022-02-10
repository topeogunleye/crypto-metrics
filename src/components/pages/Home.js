import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Meal.css';

function Home() {
  const cryptos = useSelector((state) => state.cryptosReducer.cryptos);

  const cryptoDiv = cryptos.map((crypto) => (

    <div
      key={crypto.id}
      className="meal hover:shadow-lg transition-all duration-1000 ease-out"
    >
      <Link to={`/Details/${crypto.id}`}>
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
      </Link>
    </div>
  ));

  return (
    <div className="bg-gray-500 text-white min-h-screen transition-all duration-1000 ease-out">
      <div className="m-auto py-20 max-w-md sm:max-w-lg md:max-w-5xl flex flex-col items-center justify-center text-center mb-8 transition-all duration-1000 ease-out">
        <div className="meals transition-all duration-1000 ease-out m-0">
          {' '}
          {cryptoDiv}
          {' '}
        </div>
      </div>
    </div>
  );
}

export default Home;
