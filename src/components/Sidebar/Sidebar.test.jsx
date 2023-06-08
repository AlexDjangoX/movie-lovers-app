import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Sidebar from './Sidebar';
import store from '../../app/store.js';

describe('Sidebar component', () => {
  test('should render Filmpire Logo', () => {
    const theme = createTheme();

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MemoryRouter initialEntries={['/']}>
            <Sidebar />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );

    const logo = screen.getByAltText('Filmpire Logo');
    expect(logo).toBeInTheDocument();
  });
});
