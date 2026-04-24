import * as React from 'react';
import { BottomNavigation, BottomNavigationItemFlow, BottomNavigationSelectEvent } from '@progress/kendo-react-layout';
import { envelopIcon, heartIcon, plusIcon, trashIcon } from '@progress/kendo-svg-icons';

const content = [
    { svgIcon: envelopIcon, text: 'Inbox', selected: true },
    { svgIcon: plusIcon, text: 'Contacts' },
    { svgIcon: heartIcon, text: 'Favorites' },
    { svgIcon: trashIcon, text: 'Deleted' }
];

const App = () => {
    const [flow, setFlow] = React.useState<BottomNavigationItemFlow>('horizontal');
    const [selectedIndex, setSelectedIndex] = React.useState(content.findIndex((x) => x.selected === true));

    const handleFlowChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFlow(event.target.value as BottomNavigationItemFlow);
    };

    const handleSelect = (e: BottomNavigationSelectEvent) => {
        setSelectedIndex(e.itemIndex);
    };

    return (
        <div className="example">
            <div className="radio-group">
                <label>
                    <input
                        type="radio"
                        name="itemFlow"
                        value="horizontal"
                        checked={flow === 'horizontal'}
                        onChange={handleFlowChange}
                    />
                    Horizontal
                </label>
                <label>
                    <input
                        type="radio"
                        name="itemFlow"
                        value="vertical"
                        checked={flow === 'vertical'}
                        onChange={handleFlowChange}
                    />
                    Vertical
                </label>
            </div>

            <BottomNavigation
                itemFlow={flow}
                items={content.map((item, index) => ({
                    ...item,
                    selected: index === selectedIndex
                }))}
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
