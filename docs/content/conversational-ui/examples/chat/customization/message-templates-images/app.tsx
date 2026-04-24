import * as React from 'react';
import { Chat, Message, User, ChatSendMessageEvent } from '@progress/kendo-react-conversational-ui';
import { ImageMessageTemplate } from './templates';
import './styles.css';

const user: User = {
    id: 1,
    name: 'Sarah Chen',
    avatarUrl: 'https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg'
};

const bot: User = {
    id: 0,
    name: 'Photo Assistant',
    avatarUrl: 'https://demos.telerik.com/kendo-ui/content/web/Customers/BERGS.jpg'
};

// Extended Message interface to include image data
interface ImageMessage extends Message {
    imageUrl?: string;
    imageCaption?: string;
}

const generateImageMessage = (text: string, author: User, imageUrl?: string, imageCaption?: string): ImageMessage => ({
    author,
    timestamp: new Date(),
    text,
    id: Date.now() + Math.random(),
    imageUrl,
    imageCaption
});

const App = () => {
    const [messages, setMessages] = React.useState<ImageMessage[]>([
        generateImageMessage("Welcome! Here's a beautiful image of Brazil:", bot),
        generateImageMessage(
            'Check out this amazing view!',
            bot,
            'https://demos.telerik.com/kendo-react-ui/assets/layout/countries/brazil.jpg',
            'Beautiful landscape of Brazil'
        ),
        generateImageMessage("Wow, that's stunning! The custom template displays images perfectly.", user)
    ]);

    const addNewMessage = (event: ChatSendMessageEvent) => {
        const newMessage: ImageMessage = {
            author: event.message.author,
            timestamp: new Date(),
            text: event.message.text || '',
            id: Date.now() + Math.random()
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return (
        <div>
            <Chat
                authorId={user.id}
                messages={messages}
                onSendMessage={addNewMessage}
                placeholder="Type a message..."
                style={{ maxWidth: '400px' }}
                height={600}
                className="k-m-auto"
                messageTemplate={ImageMessageTemplate}
            />
        </div>
    );
};

export default App;
