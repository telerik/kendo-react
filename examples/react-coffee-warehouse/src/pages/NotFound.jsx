import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@progress/kendo-react-buttons';
import { useLocalization } from '@progress/kendo-react-intl';

const NotFound = () => {
    const navigate = useNavigate();
    const localizationService = useLocalization();
    return (
        <main className="not-found main-content">
            <h1>{localizationService.toLanguageString('custom.notFoundTitle')}</h1>
            <p>{localizationService.toLanguageString('custom.notFoundDescription')}</p>
            <Button themeColor="primary" onClick={() => navigate('/')}>{localizationService.toLanguageString('custom.goToDashboard')}</Button>
        </main>
    );
};

export default NotFound;
