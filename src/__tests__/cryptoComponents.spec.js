import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

// mocks
import configureStore from 'redux-mock-store';
import mockCryptos from '../__mocks__/mockCryptos';

const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      cryptos: mockCryptos,
    });

    component = renderer.create(
      <Provider store={store}>
        <mockCryptos />
      </Provider>,
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch an action on page load', () => {
    const actions = store.getActions();
    expect(actions).toEqual([]);
  });
});
