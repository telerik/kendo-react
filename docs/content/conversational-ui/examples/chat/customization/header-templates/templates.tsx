import * as React from 'react';
import { Button, DropDownButton } from '@progress/kendo-react-buttons';
import { downloadIcon, moreVerticalIcon, trashIcon } from '@progress/kendo-svg-icons';
import { Avatar } from '@progress/kendo-react-layout';

// Status header template with online indicators
export const StatusHeaderTemplate = () => {
    return (
        <div
            style={{
                padding: '12px 16px',
                backgroundColor: '#2c3e50',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
            }}
        >
            <div>
                <div style={{ fontWeight: 'bold' }}>Customer Support</div>
                <div style={{ fontSize: '0.8em', opacity: 0.8 }}>{'🟢 Online'}</div>
            </div>
            <div style={{ fontSize: '0.8em' }}>{'Available now'}</div>
        </div>
    );
};

// Business header template with branding
export const BusinessHeaderTemplate = () => (
    <div
        style={{
            padding: '16px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
        }}
    >
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
                style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px',
                    fontSize: '20px'
                }}
            >
                🏢
            </div>
            <div>
                <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Acme Corp Support</div>
                <div style={{ fontSize: '12px', opacity: 0.9 }}>How can we help you today?</div>
            </div>
        </div>
        <Button
            fillMode="flat"
            themeColor="base"
            size="small"
            rounded="medium"
            style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                fontSize: '12px'
            }}
        >
            End Chat
        </Button>
    </div>
);

// AI Communication header template with avatar and actions
export const AIHeaderTemplate = () => {
    const corgi_link = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/corgi.jpg';

    const handleItemClick = (props: any) => {
        console.log('Action clicked:', props.item.name);
        switch (props.item.name) {
            case 'download':
                console.log('Downloading conversation...');
                // In a real app, this would download the conversation
                alert('Download functionality would be implemented here');
                break;
            case 'clear':
                console.log('Clearing conversation...');
                // In a real app, this would clear the conversation
                alert('Clear functionality would be implemented here');
                break;
        }
    };

    return (
        <>
            <Avatar rounded="full" type="image">
                <img src={corgi_link} alt="AI Assistant" />
            </Avatar>
            <div className={'k-spacer'} />
            <div>Chat with an AI Service</div>
            <div className={'k-spacer'} />
            <DropDownButton
                fillMode={'clear'}
                svgIcon={moreVerticalIcon}
                onItemClick={handleItemClick}
                items={[
                    {
                        name: 'download',
                        text: 'Download conversation',
                        svgIcon: downloadIcon
                    },
                    {
                        name: 'clear',
                        text: 'Clear conversation',
                        svgIcon: trashIcon
                    }
                ]}
            />
        </>
    );
};

// Export templates configuration
export const headerTemplates = {
    default: {
        component: undefined,
        name: 'Default',
        desc: 'Built-in Chat component default header template'
    },
    ai: {
        component: AIHeaderTemplate,
        name: 'AI Assistant',
        desc: 'AI communication header with avatar and action menu'
    },
    status: {
        component: StatusHeaderTemplate,
        name: 'Status',
        desc: 'Status indicators showing online state'
    },
    business: {
        component: BusinessHeaderTemplate,
        name: 'Business',
        desc: 'Professional gradient header with branding and action button'
    }
};
