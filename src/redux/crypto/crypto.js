import axios from 'axios';

const LOAD_CRYPTOS = 'LOAD_CRYPTOS';

export const loadCryptos = (payload) => ({
  type: LOAD_CRYPTOS,
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

const initialState = {
  cryptos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CRYPTOS:
      return {
        cryptos: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
