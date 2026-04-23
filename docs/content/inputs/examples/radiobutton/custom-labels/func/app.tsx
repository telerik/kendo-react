import * as React from 'react';
import { RadioButton } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [theme, setTheme] = React.useState<string>('light');

    const handleChange = (event: any) => {
        setTheme(event.value);
    };

    return (
        <div
            style={{
                maxWidth: '400px',
                margin: '20px auto',
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '8px'
            }}
        >
            <h3>Choose Your Theme</h3>
            <br />
            <div
                style={{
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                <RadioButton
                    id="theme-light"
                    name="theme"
                    value="light"
                    checked={theme === 'light'}
                    onChange={handleChange}
                >
                    <Label editorId="theme-light" className="k-radio-label" style={{ display: 'inline-block' }}>
                        🌞 Light Mode <strong style={{ color: 'blue' }}>Enabled</strong>
                    </Label>
                </RadioButton>
            </div>

            <div
                style={{
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                <RadioButton
                    id="theme-dark"
                    name="theme"
                    value="dark"
                    checked={theme === 'dark'}
                    onChange={handleChange}
                >
                    <Label editorId="theme-dark" className="k-radio-label" style={{ display: 'inline-block' }}>
                        🌙 Dark Mode <strong style={{ color: 'purple' }}>Enabled</strong>
                    </Label>
                </RadioButton>
            </div>
            <br />
            <p>
                <strong>Selected Theme:</strong>
                <span
                    style={{
                        marginLeft: '8px',
                        color: theme === 'light' ? 'blue' : 'purple'
                    }}
                >
                    {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode
                </span>
            </p>
        </div>
    );
};

export default App;
