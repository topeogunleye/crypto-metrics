import axios from 'axios';

const LOAD_CRYPTOS = 'LOAD_CRYPTOS';
const LOAD_FILTERED_CRYPTOS = 'LOAD_FILTERED_CRYPTOS';
const GET_HISTORICAL_DATA = 'GET_HISTORICAL_DATA';

export const loadCryptos = (payload) => ({
  type: LOAD_CRYPTOS,
  payload,
});

export const loadFilteredCryptos = (payload) => ({
  type: LOAD_FILTERED_CRYPTOS,
  payload,
});

export const getHistoricalData = (payload) => ({
  type: GET_HISTORICAL_DATA,
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

/* eslint-disable consistent-return */
export const filterCryptos = (cryptos, search) => (dispatch) => {
  if (!search) return cryptos;
  const filteredCryptos = cryptos
    .filter((crypto) => crypto.name.toLowerCase().includes(search.toLowerCase()));

  dispatch(loadCryptos(filteredCryptos));
};

const initialState = {
  cryptos: [],
};

const initHistoricalData = {
  history: {},
};

export const cryptoHistoryReducer = (state = initHistoricalData, action) => {
  switch (action.type) {
    case GET_HISTORICAL_DATA:
      return {
        history: action.payload,
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
        cryptos: action.payload
          .filter((crypto) => crypto.name.toLowerCase()
            .includes(action.payload.search.toLowerCase())),
      };
    default:
      return state;
  }
};
