import * as React from 'react';
import { PDFViewer, ZoomEvent, ErrorEvent, PageEvent } from '@progress/kendo-react-pdf-viewer';
import { SampleFileBase64 } from './shared-pv-base64Sample';

const EventsLogger = (props: { events: string[] }) => {
    return (
        <div className="example-config">
            <h5>Event log</h5>
            <ul
                className="event-log"
                style={{
                    textAlign: 'right'
                }}
            >
                {props.events
                    .slice()
                    .reverse()
                    .map((event, index) => {
                        return <li key={index}>{event}</li>;
                    })}
            </ul>
        </div>
    );
};

function App() {
    const [events, setEvents] = React.useState<string[]>([]);

    const onError = React.useCallback(
        (e: ErrorEvent) => {
            setEvents([...events, 'error ' + e.error.message]);
        },
        [events]
    );

    const onDownload = React.useCallback(() => {
        setEvents([...events, 'download']);
    }, [events]);

    const onLoad = React.useCallback(() => {
        setEvents([...events, 'load']);
    }, [events]);

    const onZoom = React.useCallback(
        (e: ZoomEvent) => {
            setEvents([...events, 'zoom ' + e.zoom]);
        },
        [events]
    );

    const onPageChange = React.useCallback(
        (e: PageEvent) => {
            setEvents([...events, 'page change ' + e.page]);
        },
        [events]
    );

    return (
        <>
            <PDFViewer
                style={{ height: 500 }}
                data={SampleFileBase64}
                onError={onError}
                onDownload={onDownload}
                onLoad={onLoad}
                onZoom={onZoom}
                onPageChange={onPageChange}
            />
            <br />
            <br />
            <EventsLogger events={events} />
        </>
    );
}

export default App;
