import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import App from './App.jsx';
import {
  Movies,
  MovieInformation,
  Actors,
  Profile,
} from './components/index.js';

function testAppComponent() {
  it.skip('renders the greeting correctly', () => {
    const router = createMemoryRouter(
      createRoutesFromElements(
        <>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="*" element={<Profile />} />
        </>
      )
    );

    render(<App router={router} />);
    const greetingElement = screen.getByText('Hello Alexander');
    expect(greetingElement).toBeInTheDocument();
  });

  it('renders NavBar when route is navigated', () => {
    const router = createMemoryRouter(
      createRoutesFromElements(
        <>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="*" element={<Profile />} />
        </>
      )
    );

    render(<App router={router} />);

    // Assuming NavBar is always visible, we don't have to navigate to a specific route
    const navBarElement = screen.getByText('NavBar');
    expect(navBarElement).toBeInTheDocument();
  });
}

describe('App component', testAppComponent);
