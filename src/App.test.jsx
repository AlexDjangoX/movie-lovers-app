import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './App.jsx';
import store from '../src/app/store.js';

function testAppComponent() {
  it.skip('renders the greeting correctly', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <ThemeProvider theme={createTheme()}>
            <App />
          </ThemeProvider>
        </Provider>
      </MemoryRouter>
    );

    const greetingElement = screen.getByText('Hello Alexander');
    expect(greetingElement).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={createTheme()}>
          <App />
        </ThemeProvider>
      </Provider>
    );
    expect(screen.getByTestId('app-component')).toBeInTheDocument();
  });
}

describe('App component', testAppComponent);
