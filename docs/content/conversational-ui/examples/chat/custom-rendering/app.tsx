import * as React from 'react';

import { Chat, ChatMessageBoxProps, ChatSendMessageEvent, Message } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { imageAddIcon } from '@progress/kendo-svg-icons';

const AttachmentTemplate = (props) => {
    let attachment = props.item;
    return (
        <div className="k-card k-card-type-rich">
            <div className="k-card-body quoteCard">
                <img style={{ maxHeight: '120px' }} src={attachment.content} draggable={false} />
            </div>
        </div>
    );
};

const user = {
    id: 1,
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg',
    avatarAltText: 'KendoReact Conversational UI RICSU'
};

const fileUpload: any = React.createRef();

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>([]);

    const addNewMessage = (event: ChatSendMessageEvent) => {
        setMessages([...messages, { ...event.message, text: event.message.text || ' ' }]);
    };

    const handleInputChange = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onloadend = (event) => {
            let message: Message = {
                id: Date.now().toString(),
                author: user,
                text: '',
                timestamp: new Date(),
                attachments: [
                    {
                        content: event.target ? event.target.result : '',
                        contentType: 'image'
                    }
                ]
            };
            setMessages([...messages, message]);
        };
        reader.readAsDataURL(file);
    };

    const customMessage = (props: ChatMessageBoxProps) => {
        return (
            <>
                {props.sendButton}
                {props.messageInput}
                <>
                    <input type="file" onChange={handleInputChange} style={{ display: 'none' }} ref={fileUpload} />
                    <Button
                        themeColor={'base'}
                        fillMode={'flat'}
                        svgIcon={imageAddIcon}
                        rounded="medium"
                        onClick={() => fileUpload.current.click()}
                    />
                </>
            </>
        );
    };

    return (
        <Chat
            messages={messages}
            authorId={user.id}
            onSendMessage={addNewMessage}
            placeholder={'Type a message...'}
            width={400}
            height={600}
            className="k-m-auto"
            messageBox={customMessage}
            attachmentTemplate={AttachmentTemplate}
        />
    );
};

export default App;
