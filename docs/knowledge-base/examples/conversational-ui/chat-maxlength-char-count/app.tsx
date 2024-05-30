import * as React from 'react';
import {
  Chat,
  Message,
  ChatMessageBoxProps,
} from '@progress/kendo-react-conversational-ui';
import { Input } from '@progress/kendo-react-inputs';

const user = {
  id: 1,
  avatarUrl:
    'https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg',
  avatarAltText: 'KendoReact Conversational UI RICSU',
};

const AttachmentTemplate = (props) => {
  let attachment = props.item;
  return (
    <div className="k-card k-card-type-rich">
      <div className="k-card-body quoteCard">
        <img
          style={{ maxHeight: '120px' }}
          src={attachment.content}
          draggable={false}
        />
      </div>
    </div>
  );
};

const CustomTextInput = ({ onSend }) => {
  const [value, setValue] = React.useState('');
  const max: number = 5;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && value.trim()) {
      onSend({
        author: user,
        text: value,
        timestamp: new Date(),
      });
      setValue('');
    }
  };

  return (
    <>
      <Input
        maxLength={max}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type your message here"
      />
      <div>{`${value.length}/${max}`}</div>
    </>
  );
};

const App = () => {
  const [messages, setMessages] = React.useState<Message[]>([]);

  const addNewMessage = (event: any) => {
    setMessages([...messages, event.message]);
  };

  const customMessage = (props: ChatMessageBoxProps) => {
    const handleCustomSend = (message: Message) => {
      setMessages([...messages, message]);
    };

    return (
      <>
        {props.sendButton}
        <CustomTextInput onSend={handleCustomSend} />
      </>
    );
  };

  return (
    <Chat
      messages={messages}
      user={user}
      onMessageSend={addNewMessage}
      placeholder={'Type a message...'}
      width={400}
      messageBox={customMessage}
      attachmentTemplate={AttachmentTemplate}
    />
  );
};

export default App;