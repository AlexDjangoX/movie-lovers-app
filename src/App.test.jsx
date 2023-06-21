import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App.jsx';
import store from '../src/app/store.js';

import ToggleColorMode from '../utils/ToggleColorMode.jsx';

function testAppComponent() {
  it.skip('renders the greeting correctly', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <ToggleColorMode>
            <App />
          </ToggleColorMode>
        </Provider>
      </MemoryRouter>
    );

    const greetingElement = screen.getByText('Hello Alexander');
    expect(greetingElement).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <ToggleColorMode>
          <App />
        </ToggleColorMode>
      </Provider>
    );
    expect(screen.getByTestId('app-component')).toBeInTheDocument();
  });
}

describe('App component', testAppComponent);
