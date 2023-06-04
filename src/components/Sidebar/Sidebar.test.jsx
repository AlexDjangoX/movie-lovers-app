import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Sidebar from './Sidebar';

function testSidebarComponent() {
  it('renders the correct number of NavLinks', () => {
    const theme = createTheme();
    const { getAllByRole } = render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/']}>
          <Sidebar />
        </MemoryRouter>
      </ThemeProvider>
    );

    const links = getAllByRole('link');
    expect(links).toHaveLength(8);
  });

  it('renders each category and genre', () => {
    const theme = createTheme();
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/']}>
          <Sidebar />
        </MemoryRouter>
      </ThemeProvider>
    );

    const categories = ['Popular', 'Top rated', 'Upcoming'];
    const genres = ['Comedy', 'Action', 'Horror', 'Anime'];

    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });

    genres.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  it('renders the logo', () => {
    const theme = createTheme();
    const { getByAltText } = render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/']}>
          <Sidebar />
        </MemoryRouter>
      </ThemeProvider>
    );

    const logo = getByAltText('Filmpire Logo');
    expect(logo).toBeInTheDocument();
  });
}

describe('Sidebar component', testSidebarComponent);
