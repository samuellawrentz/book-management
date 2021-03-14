import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { HashRouter } from 'react-router-dom';

test('Test Header', () => {
  const { getByText } = render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );

  expect(getByText(/Book Management/i)).toBeInTheDocument();
});
