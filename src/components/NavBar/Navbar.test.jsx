import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from './Navbar';
import store from '../../app/store.js';

import { ThemeProvider, createTheme } from '@mui/material/styles';

function testNavbarComponent() {
  it('renders without crashing', () => {
    const theme = createTheme();
    const { container } = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MemoryRouter initialEntries={['/']}>
            <Navbar />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
}

describe('Navbar component', testNavbarComponent);
