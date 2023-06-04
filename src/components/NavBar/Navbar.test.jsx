import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

import { ThemeProvider, createTheme } from '@mui/material/styles';

function testNavbarComponent() {
  it.skip('renders without crashing', () => {
    const theme = createTheme();
    const { container } = render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/']}>
          <Navbar />
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(container).toBeInTheDocument();
  });
}

describe('Navbar component', testNavbarComponent);
