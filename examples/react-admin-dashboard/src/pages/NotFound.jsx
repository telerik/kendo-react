import { Link } from 'react-router-dom';
import { Button } from '@progress/kendo-react-buttons';

export const NotFound = () => (
  <main className="not-found-page">
    <p className="not-found-code">404</p>
    <h1>Page not found</h1>
    <p>The page you requested is unavailable or may have moved.</p>
    <Link to="/">
      <Button themeColor="primary">Back to sign in</Button>
    </Link>
  </main>
);
