import * as React from 'react';
import { ChatMessageBoxProps } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { TextBox } from '@progress/kendo-react-inputs';
import { arrowRightIcon, paperclipIcon, volumeUpIcon } from '@progress/kendo-svg-icons';

export interface EnhancedMessageBoxProps extends ChatMessageBoxProps {
    onSendMessage: (text: string) => void;
}

const EnhancedMessageBox = (props: EnhancedMessageBoxProps) => {
    const { onSendMessage } = props;
    const [inputValue, setInputValue] = React.useState('');

    const handleSend = () => {
        if (inputValue.trim()) {
            onSendMessage(inputValue);
            setInputValue('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleAttachment = () => {
        setInputValue((prev) => prev + ' 📎[attachment]');
    };

    const handleVoice = () => {
        setInputValue((prev) => prev + ' 🎤[voice note]');
    };

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px',
                backgroundColor: '#ffffff',
                borderTop: '1px solid #e1e5e9',
                borderRadius: '0 0 8px 8px',
                boxShadow: '0 -2px 4px rgba(0,0,0,0.05)'
            }}
        >
            <Button
                svgIcon={paperclipIcon}
                onClick={handleAttachment}
                fillMode="flat"
                themeColor="primary"
                title="Attach file"
                size="small"
                style={{ minWidth: '32px' }}
            />

            <TextBox
                value={inputValue}
                onChange={(e) => setInputValue(e.value as string)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message with enhanced input..."
                rounded="full"
                style={{ flex: 1 }}
            />

            <Button
                svgIcon={volumeUpIcon}
                onClick={handleVoice}
                fillMode="flat"
                themeColor="info"
                title="Voice message"
                size="small"
                style={{ minWidth: '32px' }}
            />

            <Button
                svgIcon={arrowRightIcon}
                onClick={handleSend}
                themeColor="primary"
                disabled={!inputValue.trim()}
                title="Send message"
                size="small"
                style={{ minWidth: '32px' }}
            />
        </div>
    );
};

export const messageBoxTemplates = {
    default: {
        name: 'Default',
        desc: 'No custom messageBox - uses Chat component default',
        component: undefined
    },
    enhanced: {
        name: 'Enhanced',
        desc: 'Custom input with action buttons (attachment and voice)',
        component: EnhancedMessageBox
    }
};
