import * as React from 'react';
import {
    smsOutlineIcon,
    commentsRemoveIcon,
    paperPlaneIcon,
    redditIcon,
    sparklesIcon
} from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-react-common';

// Template 1 - SMS Outline Icon
export const SmsEmptyTemplate = () => (
    <div
        style={{
            width: '100%',
            height: '480px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '24px',
            padding: '20px'
        }}
    >
        <SvgIcon
            icon={smsOutlineIcon}
            style={{ fontSize: '64px', width: '64px', height: '64px', color: 'var(--kendo-color-primary-emphasis)' }}
        />
        <div>
            <p style={{ margin: '0', fontSize: 'var(--kendo-font-size-lg)' }}>No messages yet</p>
            <p style={{ margin: '0', fontSize: 'var(--kendo-font-size-md)', color: '#6c757d' }}>
                Start conversation by typing a message
            </p>
        </div>
    </div>
);

// Template 2 - Comments Remove Icon
export const CommentsEmptyTemplate = () => (
    <div
        style={{
            width: '100%',
            height: '480px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '24px',
            padding: '20px'
        }}
    >
        <SvgIcon
            icon={commentsRemoveIcon}
            style={{ fontSize: '64px', width: '64px', height: '64px', color: 'var(--kendo-color-primary-emphasis)' }}
        />
        <div>
            <p style={{ margin: '0', fontSize: 'var(--kendo-font-size-lg)' }}>No messages yet</p>
            <p style={{ margin: '0', fontSize: 'var(--kendo-font-size-md)', color: '#6c757d' }}>
                Start conversation by typing a message
            </p>
        </div>
    </div>
);

// Template 3 - Paper Plane Icon
export const PaperPlaneEmptyTemplate = () => (
    <div
        style={{
            width: '100%',
            height: '480px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '24px',
            padding: '20px'
        }}
    >
        <SvgIcon
            icon={paperPlaneIcon}
            style={{ fontSize: '64px', width: '64px', height: '64px', color: 'var(--kendo-color-primary-emphasis)' }}
        />
        <div>
            <p style={{ margin: '0', fontSize: 'var(--kendo-font-size-lg)' }}>No messages yet</p>
            <p style={{ margin: '0', fontSize: 'var(--kendo-font-size-md)', color: '#6c757d' }}>
                Start conversation by typing a message
            </p>
        </div>
    </div>
);

// Template 4 - Demo Bot (Reddit Icon)
export const DemoBotEmptyTemplate = () => (
    <div
        style={{
            width: '100%',
            height: '480px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '24px',
            padding: '20px'
        }}
    >
        <SvgIcon
            icon={redditIcon}
            style={{ fontSize: '64px', width: '64px', height: '64px', color: 'var(--kendo-color-primary-emphasis)' }}
        />
        <div>
            <p style={{ margin: '0', fontSize: 'var(--kendo-font-size-lg)' }}>Start a Chat with the demo bot</p>
            <p style={{ margin: '0', fontSize: 'var(--kendo-font-size-md)', color: '#6c757d' }}>
                Your virtual assistant is ready to help
            </p>
        </div>
    </div>
);

// Template 5 - Ask AI (Sparkles Icon)
export const AskAIEmptyTemplate = () => (
    <div
        style={{
            width: '100%',
            height: '480px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '24px',
            padding: '20px'
        }}
    >
        <SvgIcon
            icon={sparklesIcon}
            style={{ fontSize: '64px', width: '64px', height: '64px', color: 'var(--kendo-color-primary-emphasis)' }}
        />
        <div>
            <p style={{ margin: '0', fontSize: 'var(--kendo-font-size-lg)' }}>Ask AI</p>
            <p style={{ margin: '0', fontSize: 'var(--kendo-font-size-md)', color: '#6c757d' }}>
                Start conversation by typing a message
            </p>
        </div>
    </div>
);

// Export templates configuration
export const emptyTemplates = {
    sms: {
        component: SmsEmptyTemplate,
        name: 'SMS',
        desc: 'SMS outline icon with centered message'
    },
    comments: {
        component: CommentsEmptyTemplate,
        name: 'Comments',
        desc: 'Comments remove icon with centered message'
    },
    paperPlane: {
        component: PaperPlaneEmptyTemplate,
        name: 'Paper Plane',
        desc: 'Paper plane icon with centered message'
    },
    demoBot: {
        component: DemoBotEmptyTemplate,
        name: 'Demo Bot',
        desc: 'Reddit icon with demo bot welcome message'
    },
    askAI: {
        component: AskAIEmptyTemplate,
        name: 'Ask AI',
        desc: 'Sparkles icon with AI assistant message'
    }
};
