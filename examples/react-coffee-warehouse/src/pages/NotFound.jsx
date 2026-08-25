import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@progress/kendo-react-buttons';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <main className="not-found main-content">
            <h1>Error 404: Page not found</h1>
            <p>The warehouse workspace you requested does not exist or has been moved.</p>
            <Button themeColor="primary" onClick={() => navigate('/')}>Go to main dashboard</Button>
        </main>
    );
};

export default NotFound;
