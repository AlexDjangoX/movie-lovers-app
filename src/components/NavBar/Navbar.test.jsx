import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from './Navbar';
import store from '../../app/store.js';

import ToggleColorMode from '../../../utils/ToggleColorMode';
function testNavbarComponent() {
  it('renders without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <ToggleColorMode>
          <MemoryRouter initialEntries={['/']}>
            <Navbar />
          </MemoryRouter>
        </ToggleColorMode>
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
}

describe('Navbar component', testNavbarComponent);
