import * as React from 'react';
import { TabStrip, TabStripTab, type TabStripSelectEventArguments } from '@progress/kendo-react-layout';
import { DraggableTabTitle, type DragState, type DropPosition } from './draggable-tab-title';
import './styles.css';

interface Tab {
    title: string;
    content: string;
}

const initialTabs: Tab[] = [
    { title: 'Tab 1', content: 'Tab 1 Content' },
    { title: 'Tab 2', content: 'Tab 2 Content' },
    { title: 'Tab 3', content: 'Tab 3 Content' },
    { title: 'Tab 4', content: 'Tab 4 Content' }
];

const App = () => {
    const [tabs, setTabs] = React.useState<Tab[]>(initialTabs);
    const [selected, setSelected] = React.useState<number>(0);
    const dragState = React.useRef<DragState>({ fromIndex: null, didDrag: false });

    const handleSelect = (event: TabStripSelectEventArguments) => {
        if (dragState.current.didDrag) {
            return;
        }
        setSelected(event.selected);
    };

    const handleReorder = (fromIndex: number, toIndex: number, position: DropPosition) => {
        let destinationIndex = position === 'after' ? toIndex + 1 : toIndex;
        if (fromIndex < destinationIndex) {
            destinationIndex -= 1;
        }

        if (destinationIndex === fromIndex) {
            return;
        }

        const updated = [...tabs];
        const [moved] = updated.splice(fromIndex, 1);
        updated.splice(destinationIndex, 0, moved);

        // Keep the previously selected tab active after the reorder.
        const selectedTab = tabs[selected];
        const newSelected = updated.indexOf(selectedTab);

        setTabs(updated);
        setSelected(newSelected);
    };

    return (
        <TabStrip selected={selected} onSelect={handleSelect}>
            {tabs.map((tab, index) => (
                <TabStripTab
                    key={tab.title}
                    title={
                        <DraggableTabTitle
                            title={tab.title}
                            index={index}
                            dragState={dragState}
                            onReorder={handleReorder}
                        />
                    }
                >
                    <p>{tab.content}</p>
                </TabStripTab>
            ))}
        </TabStrip>
    );
};

export default App;
