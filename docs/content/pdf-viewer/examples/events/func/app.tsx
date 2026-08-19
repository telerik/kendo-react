import * as React from 'react';
import { PDFViewer, ZoomEvent, ErrorEvent, PageEvent } from '@progress/kendo-react-pdf-viewer';
import { EventLog } from '@docs-shared/EventLog';
import { SampleFileBase64 } from './shared-pv-base64Sample';

function App() {
    const [events, setEvents] = React.useState<string[]>([]);

    const log = (message: string) => setEvents((prev) => [message, ...prev]);

    const onError = React.useCallback((e: ErrorEvent) => {
        log('error ' + e.error.message);
    }, []);

    const onDownload = React.useCallback(() => {
        log('download');
    }, []);

    const onLoad = React.useCallback(() => {
        log('load');
    }, []);

    const onZoom = React.useCallback((e: ZoomEvent) => {
        log('zoom ' + e.zoom);
    }, []);

    const onPageChange = React.useCallback((e: PageEvent) => {
        log('page change ' + e.page);
    }, []);

    return (
        <EventLog events={events} onClear={() => setEvents([])}>
            <PDFViewer
                style={{ height: 500 }}
                data={SampleFileBase64}
                onError={onError}
                onDownload={onDownload}
                onLoad={onLoad}
                onZoom={onZoom}
                onPageChange={onPageChange}
            />
        </EventLog>
    );
}

export default App;
