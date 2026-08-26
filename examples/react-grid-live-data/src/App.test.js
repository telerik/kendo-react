import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the dashboard title', () => {
  render(<App />);
  expect(screen.getByText('CryptoVault')).toBeInTheDocument();
});
