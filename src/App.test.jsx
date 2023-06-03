import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

function testAppComponent() {
  it('renders the greeting correctly', () => {
    render(<App />);
    const greetingElement = screen.getByText('Hello Alexander');
    expect(greetingElement).toBeInTheDocument();
  });
}

describe('App component', testAppComponent);
