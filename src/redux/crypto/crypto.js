import axios from 'axios';

const LOAD_CRYPTOS = 'LOAD_CRYPTOS';
const LOAD_FILTERED_CRYPTOS = 'LOAD_FILTERED_CRYPTOS';
const SINGLE_CRYPTO_DETAILS = 'SINGLE_CRYPTO_DETAILS';

export const loadCryptos = (payload) => ({
  type: LOAD_CRYPTOS,
  payload,
});

export const loadFilteredCryptos = (payload) => ({
  type: LOAD_FILTERED_CRYPTOS,
  payload,
});

export const singleCryptoDetails = (payload) => ({
  type: SINGLE_CRYPTO_DETAILS,
  payload,
});

export const CoinList = (currency) => `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) => `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365, currency) => `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency) => `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

export const fetchCryptos = (currency) => (dispatch) => {
  axios
    .get(CoinList(currency))
    .then((response) => {
      const cryptos = response.data;
      dispatch(loadCryptos(cryptos));
    })
    .catch(() => {});
};

export const filterCryptos = (cryptos, search) => (dispatch) => {
  console.log(search);
  if (!search) return cryptos;
  const filteredCryptos = cryptos.filter((crypto) => crypto.name.toLowerCase().includes(search.toLowerCase()));

  dispatch(loadCryptos(filteredCryptos));
};

export const fetchCryptoDetails = (id) => (dispatch) => {
  console.log(id);
  axios
    .get(SingleCoin(id))
    .then((response) => {
      console.log(response.data);
      const crypto = response.data;
      dispatch(singleCryptoDetails(crypto));
    })
    .catch(() => {});
};

const initialState = {
  cryptos: [],
};

const initCryptoDetailsState = {
  crypto: {},
};

export const cryptoDetailsReducer = (
  state = initCryptoDetailsState,
  action,
) => {
  switch (action.type) {
    case SINGLE_CRYPTO_DETAILS:
      return {
        crypto: action.payload,
      };
    default:
      return state;
  }
};

export const cryptosReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CRYPTOS:
      return {
        cryptos: action.payload,
      };
    case LOAD_FILTERED_CRYPTOS:
      return {
        cryptos: action.payload,
      };
    default:
      return state;
  }
};
