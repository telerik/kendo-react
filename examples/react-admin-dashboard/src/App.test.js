import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import App from './App';

test('renders the sign-in page', () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );

  expect(screen.getByAltText('sign in icon')).toBeInTheDocument();
});
