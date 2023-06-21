import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Sidebar from './Sidebar.jsx';
import store from '../../app/store.js';

import ToggleColorMode from '../../../utils/ToggleColorMode';

describe('Sidebar component', () => {
  test('should render Filmpire Logo', () => {
    render(
      <Provider store={store}>
        <ToggleColorMode>
          <MemoryRouter initialEntries={['/']}>
            <Sidebar />
          </MemoryRouter>
        </ToggleColorMode>
      </Provider>
    );

    const logo = screen.getByAltText('Filmpire Logo');
    expect(logo).toBeInTheDocument();
  });
});
