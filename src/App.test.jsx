import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App.jsx';

import { ThemeProvider, createTheme } from '@mui/material/styles';

function testAppComponent() {
  it.skip('renders the greeting correctly', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const greetingElement = screen.getByText('Hello Alexander');
    expect(greetingElement).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    const theme = createTheme();
    const { container } = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    expect(container).toBeInTheDocument();
  });
}

describe('App component', testAppComponent);
