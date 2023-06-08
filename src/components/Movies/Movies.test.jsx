import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Movies from './Movies';
import store from '../../app/store.js';

import { ThemeProvider, createTheme } from '@mui/material/styles';

function testMoviesComponent() {
  it('renders without crashing', () => {
    const theme = createTheme();
    const { container } = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MemoryRouter initialEntries={['/']}>
            <Movies />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
}

describe('Movies component', testMoviesComponent);
