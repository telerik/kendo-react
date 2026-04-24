import * as React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { useRecentSelections } from './recentSelectionsService';
import { Label } from '@progress/kendo-react-labels';

interface Country {
    code: string;
    name: string;
    flag: string;
    group?: string;
}

const countries: Country[] = [
    { code: 'US', name: 'United States', flag: '🇺🇸', group: 'All Countries' },
    { code: 'CA', name: 'Canada', flag: '🇨🇦', group: 'All Countries' },
    { code: 'UK', name: 'United Kingdom', flag: '🇬🇧', group: 'All Countries' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪', group: 'All Countries' },
    { code: 'FR', name: 'France', flag: '🇫🇷', group: 'All Countries' },
    { code: 'IT', name: 'Italy', flag: '🇮🇹', group: 'All Countries' },
    { code: 'ES', name: 'Spain', flag: '🇪🇸', group: 'All Countries' },
    { code: 'JP', name: 'Japan', flag: '🇯🇵', group: 'All Countries' },
    { code: 'CN', name: 'China', flag: '🇨🇳', group: 'All Countries' },
    { code: 'IN', name: 'India', flag: '🇮🇳', group: 'All Countries' },
    { code: 'BR', name: 'Brazil', flag: '🇧🇷', group: 'All Countries' },
    { code: 'AU', name: 'Australia', flag: '🇦🇺', group: 'All Countries' },
    { code: 'RU', name: 'Russia', flag: '🇷🇺', group: 'All Countries' },
    { code: 'KR', name: 'South Korea', flag: '🇰🇷', group: 'All Countries' },
    { code: 'MX', name: 'Mexico', flag: '🇲🇽', group: 'All Countries' }
];

const App: React.FC = () => {
    const [selectedCountry, setSelectedCountry] = React.useState<Country | null>(null);

    const { recentSelections, addRecentSelection, clearRecentSelections } = useRecentSelections<Country>(
        (country) => country.code,
        {
            maxRecentItems: 3,
            storageKey: 'recent-countries'
        }
    );

    // Create dropdown data by combining recent selections with all countries
    const dropdownData = React.useMemo(() => {
        const recentWithGroup = recentSelections.map((country) => ({
            ...country,
            group: 'Recent Selections'
        }));

        return [...recentWithGroup, ...countries];
    }, [recentSelections]);

    const handleSelectionChange = (event: { value: Country }) => {
        const selectedCountry = event.value;
        setSelectedCountry(selectedCountry);

        addRecentSelection(selectedCountry);
    };

    const handleClearRecent = () => {
        clearRecentSelections();
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px' }}>
            <div style={{ marginBottom: '20px' }}>
                <Label editorId="country-dropdown">Select a country</Label>
                <br />
                <DropDownList
                    id="country-dropdown"
                    data={dropdownData}
                    value={selectedCountry}
                    onChange={handleSelectionChange}
                    textField="name"
                    groupField="group"
                    style={{ width: '300px' }}
                />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h4>Recent Selections ({recentSelections.length}):</h4>
                {recentSelections.length > 0 ? (
                    <div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                            {recentSelections.map((country) => (
                                <div
                                    key={country.code}
                                    style={{
                                        padding: '6px 12px',
                                        backgroundColor: '#f0f8ff',
                                        border: '1px solid #0078d7',
                                        borderRadius: '16px',
                                        fontSize: '14px',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <span style={{ marginRight: '6px' }}>{country.flag}</span>
                                    {country.name}
                                </div>
                            ))}
                        </div>
                        <Button
                            type="button"
                            onClick={handleClearRecent}
                            themeColor="error"
                            size="small"
                        >
                            Clear Recent Selections
                        </Button>
                    </div>
                ) : (
                    <p style={{ color: '#666', fontStyle: 'italic' }}>
                        No recent selections yet. Select a country to see it appear here.
                    </p>
                )}
            </div>
        </div>
    );
};

export default App;
