import * as React from 'react';
import { Diagram, ShapeDefaults, DiagramEditable } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { Button } from '@progress/kendo-react-buttons';
import { shapes, connections } from './data';
import './demo-styles.css';

interface EventLogEntry {
    id: number;
    type: string;
    description: string;
    timestamp: Date;
    details?: Record<string, unknown>;
}

let nextEventId = 0;
const MAX_AUTO_CLEAR_ITEMS = 10;

const shapeDefaults: ShapeDefaults = {
    width: 100,
    height: 60,
    stroke: { color: '#fff', width: 2 },
    tooltip: { visible: true }
};

const editable: DiagramEditable = { drag: true, resize: true, remove: true };

const formatTimestamp = (date: Date): string => {
    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    const s = String(date.getSeconds()).padStart(2, '0');
    const ms = String(date.getMilliseconds()).padStart(3, '0');
    return `${h}:${m}:${s}.${ms}`;
};

const getEventInfo = (type: string, event: any): { description: string; details?: Record<string, unknown> } => {
    switch (type) {
        case 'change':
            return {
                description: 'Diagram data changed',
                details: { action: event.action, items: event.items?.length || 0 }
            };
        case 'diagramClick':
            return {
                description: `Clicked on ${
                    event.item
                        ? event.item.type + ' "' + (event.item.content?.text || event.item.id) + '"'
                        : 'empty area'
                }`,
                details: { point: event.point, item: event.item?.id }
            };
        case 'drag':
            return { description: `Dragging ${event.items?.length || 0} item(s)` };
        case 'dragStart':
            return {
                description: `Started dragging ${event.items?.length || 0} item(s)`,
                details: { items: event.items?.map((item: any) => item.id) || [] }
            };
        case 'dragEnd':
            return { description: `Finished dragging ${event.items?.length || 0} item(s)` };
        case 'shapeBoundsChange':
            return {
                description: `Shape bounds changed for "${event.item?.id}"`,
                details: { bounds: event.bounds }
            };
        case 'mouseEnter':
            return {
                description: `Mouse entered ${event.item?.type} "${event.item?.content?.text || event.item?.id}"`
            };
        case 'mouseLeave':
            return {
                description: `Mouse left ${event.item?.type} "${event.item?.content?.text || event.item?.id}"`
            };
        case 'pan':
            return {
                description: `Diagram panned to (${Math.round(event.pan.x)}, ${Math.round(event.pan.y)})`,
                details: { x: Math.round(event.pan.x), y: Math.round(event.pan.y) }
            };
        case 'select': {
            const count = event.items?.length || 0;
            return {
                description: count > 0 ? `Selected ${count} item(s)` : 'Selection cleared',
                details: { items: event.items?.map((item: any) => item.id) || [] }
            };
        }
        case 'zoomStart':
            return { description: 'Started zooming' };
        case 'zoomEnd':
            return {
                description: `Zoomed to ${Math.round(event.zoom * 100)}%`,
                details: { zoom: Math.round(event.zoom * 100) + '%', point: event.point }
            };
        case 'tooltipShow': {
            const name = event.content?.text || event.id || 'diagram element';
            return {
                description: `Tooltip shown for shape "${name}"`,
                details: { shapeId: event.id, tooltipText: event.tooltipText }
            };
        }
        case 'tooltipHide':
            return { description: 'Tooltip hidden' };
        default:
            return { description: `${type} event occurred` };
    }
};

const App = () => {
    const eventLogRef = React.useRef<HTMLDivElement | null>(null);
    const autoClearRef = React.useRef<HTMLInputElement | null>(null);
    const emptyStateRef = React.useRef<HTMLDivElement | null>(null);
    const highlightTimeoutsRef = React.useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());
    const diagramRef = React.useRef<DiagramWidget>(null);

    React.useEffect(() => {
        return () => {
            highlightTimeoutsRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
            highlightTimeoutsRef.current.clear();
        };
    }, []);

    React.useEffect(() => {
        if (diagramRef.current) {
            diagramRef.current.bringIntoView(diagramRef.current.shapes);
        }
    }, []);

    const setEmptyStateVisible = React.useCallback((visible: boolean) => {
        if (!emptyStateRef.current) {
            return;
        }
        emptyStateRef.current.style.display = visible ? 'block' : 'none';
    }, []);

    const createEventEntryElement = React.useCallback((entry: EventLogEntry): HTMLDivElement => {
        const wrapper = document.createElement('div');
        wrapper.className = 'event-entry highlight';
        wrapper.dataset.eventId = String(entry.id);

        const header = document.createElement('div');
        header.className = 'event-header';

        const type = document.createElement('span');
        type.className = 'event-type';
        type.textContent = entry.type;

        const time = document.createElement('span');
        time.className = 'event-time';
        time.textContent = formatTimestamp(entry.timestamp);

        header.appendChild(type);
        header.appendChild(time);

        const description = document.createElement('div');
        description.className = 'event-description';
        description.textContent = entry.description;

        wrapper.appendChild(header);
        wrapper.appendChild(description);

        if (entry.details) {
            const details = document.createElement('div');
            details.className = 'event-details';

            const pre = document.createElement('pre');
            pre.textContent = JSON.stringify(entry.details, null, 2);

            details.appendChild(pre);
            wrapper.appendChild(details);
        }

        return wrapper;
    }, []);

    const onEvent = React.useCallback(
        (type: string, event: any) => {
            const container = eventLogRef.current;
            if (!container) {
                return;
            }

            const { description, details } = getEventInfo(type, event);
            const entry: EventLogEntry = { id: nextEventId++, type, description, timestamp: new Date(), details };
            const entryElement = createEventEntryElement(entry);

            container.insertBefore(entryElement, container.firstChild);
            setEmptyStateVisible(false);

            const autoClearEnabled = autoClearRef.current?.checked ?? true;
            if (autoClearEnabled) {
                while (container.childElementCount > MAX_AUTO_CLEAR_ITEMS) {
                    container.lastElementChild?.remove();
                }
            }

            const existingTimeout = highlightTimeoutsRef.current.get(entry.id);
            if (existingTimeout) {
                clearTimeout(existingTimeout);
            }
            const timeoutId = setTimeout(() => {
                entryElement.classList.remove('highlight');
                highlightTimeoutsRef.current.delete(entry.id);
            }, 1000);
            highlightTimeoutsRef.current.set(entry.id, timeoutId);
        },
        [createEventEntryElement, setEmptyStateVisible]
    );

    const clearLog = React.useCallback(() => {
        const container = eventLogRef.current;
        if (!container) {
            return;
        }

        highlightTimeoutsRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
        highlightTimeoutsRef.current.clear();
        container.textContent = '';
        setEmptyStateVisible(true);
    }, [setEmptyStateVisible]);

    return (
        <div className="example-wrapper">
            <div className="diagram-section">
                <h3>Try clicking, dragging, selecting, and deleting shapes or connections</h3>
                <Diagram
                    ref={diagramRef}
                    shapeDefaults={shapeDefaults}
                    shapes={shapes}
                    connections={connections}
                    layout={{ type: 'tree' }}
                    editable={editable}
                    pannable={true}
                    zoomMin={0.5}
                    zoomMax={2}
                    onDiagramClick={(e) => onEvent('diagramClick', e)}
                    onDragStart={(e) => onEvent('dragStart', e)}
                    onDragEnd={(e) => onEvent('dragEnd', e)}
                    onShapeBoundsChange={(e) => onEvent('shapeBoundsChange', e)}
                    onMouseEnter={(e) => onEvent('mouseEnter', e)}
                    onMouseLeave={(e) => onEvent('mouseLeave', e)}
                    onPan={(e) => onEvent('pan', e)}
                    onSelect={(e) => onEvent('select', e)}
                    onTooltipShow={(e) => onEvent('tooltipShow', e)}
                    onTooltipHide={(e) => onEvent('tooltipHide', e)}
                    onZoomEnd={(e) => onEvent('zoomEnd', e)}
                    onZoomStart={(e) => onEvent('zoomStart', e)}
                    style={{ height: 300 }}
                />
            </div>

            <div className="events-section">
                <div className="events-header">
                    <h3>Event Log</h3>
                    <div className="controls">
                        <Button themeColor="primary" size="small" onClick={clearLog}>
                            Clear Log
                        </Button>
                        <label className="auto-clear-label">
                            <input type="checkbox" defaultChecked={true} ref={autoClearRef} /> Auto-clear (keep last 10)
                        </label>
                    </div>
                </div>

                <div className="event-log" ref={eventLogRef}>
                    <div className="no-events" ref={emptyStateRef}>
                        No events yet. Interact with the diagram above to see events.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
