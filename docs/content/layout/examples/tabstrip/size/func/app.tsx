import * as React from 'react';

import { TabStrip, TabStripSelectEventArguments, TabStripTab } from '@progress/kendo-react-layout';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [selectedSmall, setSelectedSmall] = React.useState<number>(2);
    const [selectedMedium, setSelectedMedium] = React.useState<number>(2);
    const [selectedLarge, setSelectedLarge] = React.useState<number>(2);

    const handleSelectSmall = (e: TabStripSelectEventArguments) => {
        setSelectedSmall(e.selected);
    };

    const handleSelectMedium = (e: TabStripSelectEventArguments) => {
        setSelectedMedium(e.selected);
    };

    const handleSelectLarge = (e: TabStripSelectEventArguments) => {
        setSelectedLarge(e.selected);
    };

    return (
        <div className="k-d-flex k-flex-col k-gap-4">
            <div>
                <TabStrip selected={selectedSmall} onSelect={handleSelectSmall} scrollable={true} size={'small'}>
                    <TabStripTab title="Paris"></TabStripTab>
                    <TabStripTab title="New York City"></TabStripTab>
                    <TabStripTab title="Tallinn"></TabStripTab>
                    <TabStripTab title="Sydney" disabled={true} />
                    <TabStripTab title="London"></TabStripTab>
                </TabStrip>
            </div>
            <div>
                <TabStrip selected={selectedMedium} onSelect={handleSelectMedium} scrollable={true} size={'medium'}>
                    <TabStripTab title="Paris"></TabStripTab>
                    <TabStripTab title="New York City"></TabStripTab>
                    <TabStripTab title="Tallinn"></TabStripTab>
                    <TabStripTab title="Sydney" disabled={true} />
                    <TabStripTab title="London"></TabStripTab>
                </TabStrip>
            </div>
            <div>
                <TabStrip selected={selectedLarge} onSelect={handleSelectLarge} scrollable={true} size={'large'}>
                    <TabStripTab title="Paris"></TabStripTab>
                    <TabStripTab title="New York City"></TabStripTab>
                    <TabStripTab title="Tallinn"></TabStripTab>
                    <TabStripTab title="Sydney" disabled={true} />
                    <TabStripTab title="London"></TabStripTab>
                </TabStrip>
            </div>
        </div>
    );
};

export default App;
