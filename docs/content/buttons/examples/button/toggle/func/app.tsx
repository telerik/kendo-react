import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';

const ButtonContainer = () => {
    const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

    return (
        <div>
            <div>
                <Button
                    togglable={true}
                    selected={isDarkMode}
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    themeColor={isDarkMode ? 'dark' : 'light'}
                >
                    {isDarkMode ? 'Dark Mode Enabled' : 'Light Mode Enabled'}
                </Button>
            </div>
            <div
                style={{
                    marginTop: '30px',
                    padding: '20px',
                    backgroundColor: isDarkMode ? '#333' : '#f9f9f9',
                    color: isDarkMode ? '#fff' : '#000',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease'
                }}
            >
                <p>This is a preview of the {isDarkMode ? 'dark' : 'light'} mode.</p>
            </div>
        </div>
    );
};

export default ButtonContainer;
