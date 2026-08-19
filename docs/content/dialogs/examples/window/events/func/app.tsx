import * as React from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';
import { EventLog } from '@docs-shared/EventLog';

const App = () => {
    const [visible, setVisible] = React.useState<boolean>(true);
    const [events, setEvents] = React.useState<string[]>([]);

    const log = (message: string) => setEvents((prev) => [message, ...prev]);

    const toggleDialog = () => {
        if (visible) {
            log('Close event');
        }
        setVisible(!visible);
    };
    const handleMove = () => {
        log('Move event');
    };
    const handleResize = () => {
        log('Resize event');
    };
    const handleStageChange = () => {
        log('StageChange event');
    };

    return (
        <EventLog events={events} onClear={() => setEvents([])}>
            <Button type="button" onClick={toggleDialog} id="open-window">
                Open Window
            </Button>
            {visible && (
                <Window
                    title={'Events'}
                    onClose={toggleDialog}
                    onMove={handleMove}
                    onResize={handleResize}
                    onStageChange={handleStageChange}
                />
            )}
        </EventLog>
    );
};
export default App;
