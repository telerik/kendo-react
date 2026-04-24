import * as React from 'react';
import { SvgIcon } from '@progress/kendo-react-common';
import { TextBox, TextBoxChangeEvent } from '@progress/kendo-react-inputs';
import * as svgIcons from '@progress/kendo-svg-icons';
import './styles.css';

const App = () => {
    const iconNames = Object.keys(svgIcons).filter((key) => key !== 'default');
    const [searchTerm, setSearchTerm] = React.useState<string>('');
    const [filteredIconNames, setFilteredIconNames] = React.useState<string[]>(iconNames);

    const filterIcons = (value: string) => {
        const lowerCaseSearchTerm = value.toLowerCase();
        const filtered = iconNames.filter((iconName) => iconName.toLowerCase().includes(lowerCaseSearchTerm));
        setFilteredIconNames(filtered);
    };

    const handleSearchChange = (event: TextBoxChangeEvent) => {
        const value = String(event.value || '');
        setSearchTerm(value);
        filterIcons(value);
    };
    return (
        <div>
            <div className="search-box">
                <TextBox
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ width: '350px' }}
                    placeholder="Search for an icon (e.g., lock, arrow)"
                />
            </div>
            <ul className="svg-icons-wrapper">
                {filteredIconNames.map((iconName) => {
                    return (
                        <li key={iconName} className="icon-item">
                            <SvgIcon icon={svgIcons[iconName]} size="xlarge" />
                            <p className="icon-name">{iconName}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default App;
