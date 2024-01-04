import React from 'react';

export const AppContext = React.createContext({
    languageId: 'en',
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    phoneNumber: '',
    avatar: null,
    country: '',
    isInPublicDirectory: false,
    biography: '',
    teamId: null,
    onLanguageChange: () => {},
    onProfileChange: () => {}
});

AppContext.displayName = 'AppContext';
