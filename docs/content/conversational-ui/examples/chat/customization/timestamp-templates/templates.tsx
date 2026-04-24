import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';

// Relative timestamp template - shows "X minutes ago"
export const RelativeTimestampTemplate = ({ item }: { item: any }) => {
    const timestamp = item?.timestamp;
    const [relativeTime, setRelativeTime] = React.useState('');

    React.useEffect(() => {
        if (!timestamp) return;

        const updateRelativeTime = () => {
            const now = new Date();
            const diffMs = now.getTime() - timestamp.getTime();
            const diffMins = Math.floor(diffMs / (1000 * 60));
            const diffHours = Math.floor(diffMins / 60);
            const diffDays = Math.floor(diffHours / 24);

            if (diffMins < 1) {
                setRelativeTime('Just now');
            } else if (diffMins < 60) {
                setRelativeTime(`${diffMins}m ago`);
            } else if (diffHours < 24) {
                setRelativeTime(`${diffHours}h ago`);
            } else if (diffDays === 1) {
                setRelativeTime('Yesterday');
            } else {
                setRelativeTime(`${diffDays} days ago`);
            }
        };

        updateRelativeTime();
        const interval = setInterval(updateRelativeTime, 60000); // Update every minute

        return () => clearInterval(interval);
    }, [timestamp]);

    if (!timestamp) return null;

    return (
        <div
            style={{
                fontSize: '0.75em',
                color: '#666',
                textAlign: 'right',
                marginTop: '4px',
                fontStyle: 'italic'
            }}
        >
            {relativeTime}
        </div>
    );
};

// Detailed timestamp template - shows full date and time
export const DetailedTimestampTemplate = ({ item }: { item: any }) => {
    const timestamp = item?.timestamp;
    if (!timestamp) return null;

    return (
        <div
            style={{
                fontSize: '0.7em',
                color: '#555',
                textAlign: 'center',
                marginTop: '4px',
                lineHeight: '1.2'
            }}
        >
            <div>{timestamp.toLocaleDateString()}</div>
            <div style={{ marginTop: '1px' }}>
                {timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                })}
            </div>
        </div>
    );
};

// Interactive timestamp template - click to toggle format
export const InteractiveTimestampTemplate = ({ item }: { item: any }) => {
    const timestamp = item?.timestamp;
    const [showFull, setShowFull] = React.useState(false);

    if (!timestamp) return null;

    const getRelativeTime = (date: Date) => {
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / (1000 * 60));

        if (diffMins < 1) return 'now';
        if (diffMins < 60) return `${diffMins}m`;

        const diffHours = Math.floor(diffMins / 60);
        if (diffHours < 24) return `${diffHours}h`;

        const diffDays = Math.floor(diffHours / 24);
        return `${diffDays}d`;
    };

    return (
        <Button
            onClick={() => setShowFull(!showFull)}
            fillMode="clear"
            themeColor="primary"
            size="small"
            style={{
                fontSize: '0.75em',
                textAlign: 'right',
                marginTop: '4px',
                padding: '2px 4px'
            }}
            title="Click to toggle timestamp format"
        >
            {showFull ? timestamp.toLocaleString() : getRelativeTime(timestamp)}
        </Button>
    );
};

// Export templates configuration
export const timestampTemplates = {
    default: {
        component: undefined,
        name: 'Default',
        desc: 'Built-in Chat component default timestamp template'
    },
    relative: {
        component: RelativeTimestampTemplate,
        name: 'Relative',
        desc: 'Shows relative time (updates every minute)'
    },
    detailed: {
        component: DetailedTimestampTemplate,
        name: 'Detailed',
        desc: 'Full date and time with multi-line layout'
    },
    interactive: {
        component: InteractiveTimestampTemplate,
        name: 'Interactive',
        desc: 'Click to toggle between relative and absolute time'
    }
};
