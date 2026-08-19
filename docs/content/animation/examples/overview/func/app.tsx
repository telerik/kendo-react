import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Slide, Push, Expand, Fade, Zoom, Reveal } from '@progress/kendo-react-animation';
import { RadioButton } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

import './styles.css';

type NotificationType = 'success' | 'warning' | 'info';

interface Notification {
    id: number;
    type: NotificationType;
    title: string;
    message: string;
    time: string;
}

const notifications: Notification[] = [
    {
        id: 1,
        type: 'success',
        title: 'Deployment successful',
        message: 'Release v2.4.1 was deployed to production successfully.',
        time: '2 min ago'
    },
    {
        id: 2,
        type: 'warning',
        title: 'High memory usage',
        message: 'Server eu-west-1 is at 87% memory capacity.',
        time: '18 min ago'
    },
    {
        id: 3,
        type: 'info',
        title: 'Scheduled maintenance',
        message: 'Database maintenance window scheduled for tonight at 02:00 UTC.',
        time: '1 hour ago'
    }
];

const dotLabels: Record<NotificationType, string> = {
    success: '✓',
    warning: '!',
    info: 'i'
};

type AnimationType = 'slide' | 'push' | 'expand' | 'fade' | 'zoom' | 'reveal';

const animationTypes: { type: AnimationType; label: string }[] = [
    { type: 'slide', label: 'Slide' },
    { type: 'push', label: 'Push' },
    { type: 'expand', label: 'Expand' },
    { type: 'fade', label: 'Fade' },
    { type: 'zoom', label: 'Zoom' },
    { type: 'reveal', label: 'Reveal' }
];

const App = () => {
    const [open, setOpen] = React.useState(true);
    const [visible, setVisible] = React.useState(true);
    const [animationType, setAnimationType] = React.useState<AnimationType>('slide');
    const isFirstRender = React.useRef(true);

    React.useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        if (!open) return;
        setVisible(false);
        const timer = setTimeout(() => setVisible(true), 400);
        return () => clearTimeout(timer);
    }, [animationType]);

    const handleToggle = () => {
        const next = !open;
        setOpen(next);
        setVisible(next);
    };

    const panel = visible ? (
        <div className="notification-panel">
            {notifications.map((n) => (
                <div key={n.id} className="notification-item">
                    <span className={`notification-dot notification-dot-${n.type}`}>{dotLabels[n.type]}</span>
                    <div className="notification-body">
                        <strong className="notification-title">{n.title}</strong>
                        <p className="notification-message">{n.message}</p>
                    </div>
                    <span className="notification-time">{n.time}</span>
                </div>
            ))}
            <div className="notification-footer">
                <Button fillMode="flat" size="small">
                    Mark all as read
                </Button>
            </div>
        </div>
    ) : null;

    const renderAnimation = (children: React.ReactNode) => {
        switch (animationType) {
            case 'push':
                return <Push>{children}</Push>;
            case 'expand':
                return <Expand>{children}</Expand>;
            case 'fade':
                return <Fade>{children}</Fade>;
            case 'zoom':
                return <Zoom>{children}</Zoom>;
            case 'reveal':
                return <Reveal>{children}</Reveal>;
            default:
                return <Slide>{children}</Slide>;
        }
    };

    return (
        <div className="demo-wrapper">
            <div className="app-panel">
                <div className="app-header">
                    <span className="app-name">AppMonitor</span>
                    <Button fillMode="outline" size="small" onClick={handleToggle}>
                        {open ? 'Hide' : 'Show notifications'}
                    </Button>
                </div>
                {renderAnimation(panel)}
            </div>
            <div className="config-panel">
                <p className="config-label">
                    <strong>Animation type</strong>
                </p>
                {animationTypes.map(({ type, label }) => (
                    <div key={type} className="radio-row">
                        <RadioButton
                            name="animationType"
                            id={type}
                            value={type}
                            checked={animationType === type}
                            onChange={() => setAnimationType(type)}
                        />
                        <Label editorId={type} className="k-radio-label">
                            &nbsp;{label}
                        </Label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
