import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Movies from './Movies';
import store from '../../app/store.js';

import ToggleColorMode from '../../../utils/ToggleColorMode';

function testMoviesComponent() {
  it('renders without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <ToggleColorMode>
          <MemoryRouter initialEntries={['/']}>
            <Movies />
          </MemoryRouter>
        </ToggleColorMode>
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
}

describe('Movies component', testMoviesComponent);
