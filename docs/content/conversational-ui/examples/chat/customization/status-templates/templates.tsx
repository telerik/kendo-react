import * as React from 'react';

// Enhanced status template with text
export const EnhancedStatusTemplate = ({ item }: any) => {
    const getStatusDisplay = (status: string) => {
        switch (status) {
            case 'sent':
                return { icon: '✓', text: 'Sent', color: '#888' };
            case 'delivered':
                return { icon: '✓✓', text: 'Delivered', color: '#2196F3' };
            case 'read':
                return { icon: '✓✓✓', text: 'Read', color: '#4CAF50' };
            case 'failed':
                return { icon: '✗', text: 'Failed', color: '#F44336' };
            default:
                return { icon: '', text: '', color: '#888' };
        }
    };

    const statusDisplay = getStatusDisplay(item.status || '');

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '4px',
                fontSize: '11px',
                color: statusDisplay.color
            }}
        >
            <span>{statusDisplay.text}</span>
            <span style={{ fontSize: '11px' }}>{statusDisplay.icon}</span>
        </div>
    );
};

// Animated status template
export const AnimatedStatusTemplate = ({ item }: any) => {
    const [animate, setAnimate] = React.useState(false);

    React.useEffect(() => {
        if (item.status === 'sent' || item.status === 'delivered' || item.status === 'read') {
            setAnimate(true);
            const timer = setTimeout(() => setAnimate(false), 500);
            return () => clearTimeout(timer);
        }
    }, [item.status]);

    const getStatusDisplay = (status: string) => {
        switch (status) {
            case 'sent':
                return { icon: '✓', color: '#888', text: 'Sent' };
            case 'delivered':
                return { icon: '✓✓', color: '#2196F3', text: 'Delivered' };
            case 'read':
                return { icon: '✓✓✓', color: '#4CAF50', text: 'Read' };
            case 'failed':
                return { icon: '✗', color: '#F44336', text: 'Failed' };
            default:
                return { icon: '⏳', color: '#FFA726', text: 'Sending...' };
        }
    };

    const statusDisplay = getStatusDisplay(item.status || '');

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '6px',
                fontSize: '11px',
                color: statusDisplay.color,
                transform: animate ? 'scale(1.1)' : 'scale(1)',
                transition: 'all 0.3s ease'
            }}
        >
            <span style={{ fontWeight: '500' }}>{statusDisplay.text}</span>
            <span
                style={{
                    fontSize: '11px',
                    animation: animate ? 'pulse 0.5s ease-in-out' : 'none'
                }}
            >
                {statusDisplay.icon}
            </span>
        </div>
    );
};

// Export templates configuration
export const statusTemplates = {
    default: {
        component: undefined,
        name: 'Default',
        desc: 'Built-in Chat component default status template'
    },
    enhanced: {
        component: EnhancedStatusTemplate,
        name: 'Enhanced',
        desc: 'Icons with text labels showing detailed status'
    },
    animated: {
        component: AnimatedStatusTemplate,
        name: 'Animated',
        desc: 'Status updates with smooth animations and transitions'
    }
};
