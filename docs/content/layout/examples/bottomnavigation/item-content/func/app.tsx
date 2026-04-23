import * as React from 'react';
import { BottomNavigation, BottomNavigationSelectEvent } from '@progress/kendo-react-layout';
import { folderIcon, moreHorizontalIcon, photosIcon, searchIcon } from '@progress/kendo-svg-icons';

const content = [
    { text: 'Photos', svgIcon: photosIcon, selected: true },
    { text: 'Albums', svgIcon: folderIcon },
    { text: 'Search', svgIcon: searchIcon },
    { text: 'More', svgIcon: moreHorizontalIcon }
];

const App = () => {
    const [type, setType] = React.useState(0);
    const [selectedIndex, setSelectedIndex] = React.useState(content.findIndex((x) => x.selected === true));

    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setType(parseInt(event.target.value, 10));
    };

    const handleSelect = (e: BottomNavigationSelectEvent) => {
        setSelectedIndex(e.itemIndex);
    };

    return (
        <div className="example">
            <div className="radio-group">
                <label>
                    <input type="radio" name="contentType" value="0" checked={type === 0} onChange={handleTypeChange} />
                    Icon & Text
                </label>
                <label>
                    <input type="radio" name="contentType" value="1" checked={type === 1} onChange={handleTypeChange} />
                    Icon Only
                </label>
            </div>

            <BottomNavigation
                items={content.map(({ text, ...rest }, index) =>
                    type === 0
                        ? { text, ...rest, selected: index === selectedIndex }
                        : { ...rest, selected: index === selectedIndex }
                )}
                onSelect={handleSelect}
            />

            <style>{`
                .radio-group {
                    margin: 20px;
                    display: flex;
                    gap: 15px;
                }
                .radio-group label {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default App;
