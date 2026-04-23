import * as React from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [visible, setVisible] = React.useState<boolean>(true);
    const [events, setEvents] = React.useState<string[]>([]);

    const toggleDialog = () => {
        if (visible) {
            let newEvents: any = [...events];
            newEvents.unshift('Close event');
            setVisible(!visible);
            setEvents(newEvents);
        } else {
            setVisible(!visible);
        }
    };
    const handleMove = () => {
        let newEvents: string[] = [...events];
        newEvents.unshift('Move event');
        setEvents(newEvents);
    };
    const handleResize = () => {
        let newEvents: string[] = [...events];
        newEvents.unshift('Resize event');
        setEvents(newEvents);
    };
    const handleStageChange = () => {
        let newEvents: string[] = [...events];
        newEvents.unshift('StageChange event');
        setEvents(newEvents);
    };

    return (
        <div>
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
            <div className="example-config">
                <h5>Event Log</h5>
                <ul className="event-log">
                    {events.map((event, index) => (
                        <li key={index}>{event}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default App;
