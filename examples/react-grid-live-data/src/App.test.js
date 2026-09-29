import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the accessible portfolio dashboard', () => {
  render(<App />);
  expect(screen.getByText('CryptoVault')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'My portfolio' })).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument();
  expect(screen.getByText('Market open')).toBeInTheDocument();
});
