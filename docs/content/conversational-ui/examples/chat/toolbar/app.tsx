import * as React from 'react';
import { Chat, ChatMessageSendEvent, Message } from '@progress/kendo-react-conversational-ui';
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

const App = () => {
    const fileUpload: any = React.createRef();

    const [showToolbar, setShowToolbar] = React.useState(false);
    const [messages, setMessages] = React.useState<Array<Message>>([]);

    const handleInputChange = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onloadend = (event) => {
            let message = {
                author: user,
                text: '',
                attachments: [
                    {
                        content: event.target ? event.target.result : '',
                        contentType: 'image/'
                    }
                ]
            };
            setShowToolbar(false);
            setMessages([...messages, message]);
        };
        reader.readAsDataURL(file);
    };

    const Toolbar = () => {
        return (
            <span>
                <input type="file" onChange={handleInputChange} style={{ display: 'none' }} ref={fileUpload} />
                <Button
                    themeColor={'base'}
                    fillMode={'flat'}
                    svgIcon={imageAddIcon}
                    rounded="medium"
                    onClick={() => fileUpload.current.click()}
                />
            </span>
        );
    };

    const addNewMessage = (event: ChatMessageSendEvent) => {
        setMessages([...messages, event.message]);
    };

    return (
        <div>
            <Chat
                user={user}
                messages={messages}
                onMessageSend={addNewMessage}
                placeholder={'Type a message...'}
                width={400}
                attachmentTemplate={AttachmentTemplate}
                showToolbar={showToolbar}
                onToolbarActionExecute={() => setShowToolbar(!showToolbar)}
                toolbar={<Toolbar />}
            />
        </div>
    );
};

export default App;
