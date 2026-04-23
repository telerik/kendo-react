import * as React from 'react';
import { Chat, Message, User, MessageAction, ChatSendMessageEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { copyIcon, arrowRotateCwIcon, downloadIcon } from '@progress/kendo-svg-icons';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { AIMessageTemplate, AskAIEmptyTemplate, CustomHeaderTemplate } from './templates';
import { getSuggestion, streamResponse, createAIResponse } from './service';

const cv_template_link =
    (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/cv_template.pdf';

const cover_letter_link =
    (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/cover_letter.pdf';

const user1: User = {
    id: 1,
    name: 'User',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg',
    avatarAltText: 'KendoReact Conversational UI RICSU'
};

const ai_tool: User = {
    id: 'ai_tool',
    name: 'AI'
};

const initialMessages: Message[] = [];

// Define toolbar actions for AI messages only
const aiToolbarActions: MessageAction[] = [
    {
        id: 'copy',
        label: 'Copy',
        svgIcon: copyIcon
    },
    {
        id: 'retry',
        label: 'Retry',
        svgIcon: arrowRotateCwIcon
    },
    {
        id: 'download',
        label: 'Download',
        svgIcon: downloadIcon
    }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [abortController, setAbortController] = React.useState<AbortController | null>(null);
    const [showClearDialog, setShowClearDialog] = React.useState<boolean>(false);
    const abortControllerRef = React.useRef<AbortController | null>(null);
    const messageIdCounterRef = React.useRef<number>(0);

    // Generate unique ID that never decreases, even after messages are removed
    const generateMessageId = React.useCallback(() => {
        messageIdCounterRef.current += 1;
        return `msg-${Date.now()}-${messageIdCounterRef.current}`;
    }, []);

    const renderHeaderTemplate = React.useCallback(
        () => <CustomHeaderTemplate messages={messages} onShowClearDialog={() => setShowClearDialog(true)} />,
        [messages]
    );

    const handleToolbarAction = React.useCallback(
        (action: MessageAction, event: React.SyntheticEvent<any>, message: Message) => {
            switch (action.id) {
                case 'copy':
                    if (message.text) {
                        navigator.clipboard.writeText(message.text);
                    }
                    break;
                case 'retry':
                    // Find the original user message that triggered this AI response
                    const messageIndex = messages.findIndex((msg) => msg.id === message.id);
                    if (messageIndex > 0) {
                        const previousMessage = messages[messageIndex - 1];
                        if (previousMessage.author.id === user1.id && previousMessage.text) {
                            // Remove all messages from the user message onwards
                            setMessages((prevMessages) => prevMessages.slice(0, messageIndex - 1));

                            // Retry the request
                            const retryEvent = {
                                nativeEvent: event,
                                syntheticEvent: event,
                                message: {
                                    text: previousMessage.text,
                                    id: new Date().toString(),
                                    author: previousMessage.author
                                }
                            } as ChatSendMessageEvent;
                            addNewMessage(retryEvent, user1);
                        }
                    }
                    break;
                case 'download':
                    if (message.text) {
                        const blob = new Blob([message.text], { type: 'text/plain' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `message_${message.id}.txt`;
                        a.style.display = 'none';
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        URL.revokeObjectURL(url);
                    }
                    break;
            }
        },
        [messages]
    );

    const handleAbort = React.useCallback(() => {
        console.log('Aborting current request');
        const controller = abortControllerRef.current;
        if (controller) {
            console.log('Aborting AI response generation');
            controller.abort();
            abortControllerRef.current = null;
            setAbortController(null);
            setLoading(false);
        }
    }, []);

    const addNewMessage = async (event: ChatSendMessageEvent, user: User) => {
        // If we're currently generating and this is an abort request (empty message), handle abort
        if (abortController && (!event.message.text || event.message.text.trim() === '')) {
            handleAbort();
            return;
        }

        // If we're already generating, ignore new messages
        if (abortController) {
            return;
        }

        console.log('New message sent:', event.message);

        // Add user message
        const userMessage = { ...event.message, id: generateMessageId(), author: user };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        // Create new abort controller for AI response
        const controller = new AbortController();
        setAbortController(controller);
        abortControllerRef.current = controller;

        setLoading(true);

        try {
            // Check if message has text content
            if (!event.message.text) {
                return;
            }

            // Get AI response
            const responseContent = await getSuggestion(event.message.text, controller.signal);

            // Create AI response message
            const aiResponse = createAIResponse(generateMessageId(), ai_tool);

            // Add initial AI message
            setMessages((prevMessages) => [...prevMessages, aiResponse]);

            // Simulate streaming by splitting responseContent into chunks
            await streamResponse(responseContent, aiResponse, controller, setMessages);
        } catch (error) {
            // Handle abort - don't add any output, just stop streaming
            if (error instanceof Error && error.name === 'AbortError') {
                return;
            }

            // Handle other errors
            const errorMessage = createAIResponse(
                generateMessageId(),
                ai_tool,
                'Sorry, there was an error processing your request. Please try again.'
            );
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        } finally {
            abortControllerRef.current = null;
            setAbortController(null);
            setLoading(false);
        }
    };

    const handleFileDownload = React.useCallback((files: any[], message: Message) => {
        if (files.length === 1) {
            // For single file, trigger download
            const a = document.createElement('a');
            a.href = files[0].url || '';
            a.download = files[0].name;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }, []);

    const handleSuggestionClick = React.useCallback(
        async (suggestion: any) => {
            // If we're already generating, ignore new suggestions
            if (abortController) {
                return;
            }

            // Add user message
            const newMessage: Message = {
                id: generateMessageId(),
                author: user1,
                text: suggestion.text,
                timestamp: new Date()
            };

            setMessages((prevMessages) => [...prevMessages, newMessage]);

            // Create new abort controller for this request
            const controller = new AbortController();
            setAbortController(controller);
            abortControllerRef.current = controller;

            // Set generating state with enabled send button for abort
            setLoading(true);

            try {
                let responseContent: string;
                let aiResponse: Message;

                // Handle special cases with file attachments
                if (suggestion.id === 'cv_template') {
                    responseContent =
                        'Sure. Here is a CV template file in PDF format. Can I help you with something else? *';
                    aiResponse = createAIResponse(generateMessageId(), ai_tool, '', [
                        {
                            id: '1a9d4a62-398b-4964-954b-e5ab2b33111a',
                            name: 'cv_template.pdf',
                            size: 389000,
                            mimetype: 'application/pdf',
                            url: cv_template_link,
                            filename: 'cv_template.pdf'
                        }
                    ]);
                } else if (suggestion.id === 'cover_letter') {
                    responseContent =
                        'Sure. Here is a cover letter template file in PDF format. Can I help you with something else? *';
                    aiResponse = createAIResponse(generateMessageId(), ai_tool, '', [
                        {
                            id: '1h9d4a62-398b-4964-954b-e4ab2b332222',
                            name: 'cover_letter.pdf',
                            size: 1500000,
                            mimetype: 'application/pdf',
                            url: cover_letter_link,
                            filename: 'cover_letter.pdf'
                        }
                    ]);
                } else {
                    // For analyze_photo and other suggestions, use AI service
                    responseContent = await getSuggestion(suggestion.text, controller.signal);
                    aiResponse = createAIResponse(generateMessageId(), ai_tool);
                }

                // Add initial AI message
                setMessages((prevMessages) => [...prevMessages, aiResponse]);

                // Simulate streaming by splitting responseContent into chunks
                await streamResponse(responseContent, aiResponse, controller, setMessages);
            } catch (error) {
                // Handle abort - don't add any output, just stop streaming
                if (error instanceof Error && error.name === 'AbortError') {
                    return;
                }

                // Handle other errors
                const errorMessage = createAIResponse(
                    generateMessageId(),
                    ai_tool,
                    'Sorry, there was an error processing your request. Please try again.'
                );
                setMessages((prevMessages) => [...prevMessages, errorMessage]);
            } finally {
                abortControllerRef.current = null;
                setAbortController(null);
                setLoading(false);
            }
        },
        [abortController, messages, handleAbort]
    );

    return (
        <>
            <Chat
                authorId={1}
                messages={messages}
                style={{ maxWidth: '400px' }}
                height={600}
                className="k-m-auto"
                onSendMessage={(ev) => {
                    loading ? handleAbort() : addNewMessage(ev, user1);
                }}
                placeholder={'Type a message...'}
                headerTemplate={renderHeaderTemplate}
                messageWidthMode={'full'}
                loading={loading}
                noDataTemplate={AskAIEmptyTemplate}
                receiverMessageSettings={{
                    messageTemplate: AIMessageTemplate,
                    messageToolbarActions: aiToolbarActions
                }}
                onToolbarAction={handleToolbarAction}
                suggestions={[
                    { id: 'cv_template', text: 'Provide CV template' },
                    { id: 'cover_letter', text: 'Generate a cover letter' }
                ]}
                onDownload={handleFileDownload}
                onSuggestionClick={handleSuggestionClick}
            />
            {showClearDialog && (
                <Dialog title={'Delete conversation'} onClose={() => setShowClearDialog(false)}>
                    <p style={{ margin: '25px', textAlign: 'center' }}>
                        Are you sure you want to delete the <b>'Job application'</b> conversation?
                    </p>
                    <DialogActionsBar>
                        <Button
                            type="button"
                            themeColor={'primary'}
                            onClick={() => {
                                setMessages([]);
                                setShowClearDialog(false);
                            }}
                        >
                            Delete
                        </Button>
                        <Button type="button" onClick={() => setShowClearDialog(false)}>
                            Cancel
                        </Button>
                    </DialogActionsBar>
                </Dialog>
            )}
        </>
    );
};

export default App;
