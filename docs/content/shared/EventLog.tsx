import * as React from 'react';
import './event-log.css';

export interface EventLogProps {
    events: string[];
    onClear?: () => void;
    children?: React.ReactNode;
}

const EventLogIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13 5.5L9.5 2H3.5C3.36739 2 3.24021 2.05268 3.14645 2.14645C3.05268 2.24021 3 2.36739 3 2.5V13.5C3 13.6326 3.05268 13.7598 3.14645 13.8536C3.24021 13.9473 3.36739 14 3.5 14H12.5C12.6326 14 12.7598 13.9473 12.8536 13.8536C12.9473 13.7598 13 13.6326 13 13.5V5.5ZM9.5 2V5.5H13M6 8.5H10M6 10.5H10"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const EraserIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6 6.5L10 10.5M6.99985 13.4998L13.7067 6.79297C13.7996 6.70011 13.8733 6.58986 13.9236 6.46852C13.9738 6.34718 13.9997 6.21713 13.9997 6.08579C13.9997 5.95445 13.9738 5.82439 13.9236 5.70305C13.8733 5.58171 13.7996 5.47146 13.7067 5.3786L11.1211 2.79297C11.0282 2.70009 10.918 2.62641 10.7966 2.57614C10.6753 2.52587 10.5453 2.5 10.4139 2.5C10.2826 2.5 10.1525 2.52587 10.0312 2.57614C9.90984 2.62641 9.79959 2.70009 9.70672 2.79297L2.29297 10.2067C2.20009 10.2996 2.12641 10.4098 2.07614 10.5312C2.02587 10.6525 2 10.7826 2 10.9139C2 11.0453 2.02587 11.1753 2.07614 11.2966C2.12641 11.418 2.20009 11.5282 2.29297 11.6211L4.17172 13.4998H13.4998"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const EmptyIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M26 11L19 4H7C6.73478 4 6.48043 4.10536 6.29289 4.29289C6.10536 4.48043 6 4.73478 6 5V27C6 27.2652 6.10536 27.5196 6.29289 27.7071C6.48043 27.8946 6.73478 28 7 28H25C25.2652 28 25.5196 27.8946 25.7071 27.7071C25.8946 27.5196 26 27.2652 26 27V11ZM19 4V11H26M13 16L19 22M19 16L13 22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const EventLog = ({ events, onClear, children }: EventLogProps) => {
    const isEmpty = !events || events.length === 0;

    const parseEvent = (eventStr: string): { name: string; description?: string } => {
        const colonIdx = eventStr.indexOf(': ');
        if (colonIdx !== -1) {
            return {
                name: eventStr.slice(0, colonIdx),
                description: eventStr.slice(colonIdx + 2)
            };
        }
        return { name: eventStr };
    };

    const panel = (
        <div className="event-log-panel">
            <div className="event-log-header">
                <div className="event-log-title">
                    <EventLogIcon />
                    <span>Event Log</span>
                </div>
                <button
                    type="button"
                    className="event-log-clear"
                    onClick={onClear}
                    disabled={isEmpty}
                    title="Clear"
                    aria-label="Clear event log"
                >
                    <EraserIcon />
                </button>
            </div>

            <div className="event-log-body">
                {isEmpty ? (
                    <div className="event-log-empty">
                        <span className="event-log-empty-icon">
                            <EmptyIcon />
                        </span>
                        <div className="event-log-empty-texts">
                            <div className="event-log-empty-title">No events yet</div>
                            <div className="event-log-empty-subtitle">
                                Interact with the component to see events appear here.
                            </div>
                        </div>
                    </div>
                ) : (
                    <ul className="event-log-list">
                        {events.map((eventStr, index) => {
                            const { name, description } = parseEvent(eventStr);
                            const num = events.length - index;
                            const isLatest = index === 0;
                            return (
                                <li key={index} className="event-log-item">
                                    <span className="event-log-num">{num}.</span>
                                    <span className="event-log-timeline" aria-hidden="true">
                                        <span className="event-log-line" />
                                        <span className={`event-log-dot${isLatest ? ' event-log-dot--latest' : ''}`} />
                                    </span>
                                    <span className="event-log-row-content">
                                        <span className="event-log-name">{name}</span>
                                        {description && <span className="event-log-desc">{description}</span>}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );

    if (children) {
        return (
            <div className="event-log-layout">
                <div className="event-log-content">{children}</div>
                {panel}
            </div>
        );
    }

    return panel;
};

export default EventLog;
