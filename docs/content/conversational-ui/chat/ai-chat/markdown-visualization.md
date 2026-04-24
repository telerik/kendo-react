---
title: Markdown Visualization
description: 'Display formatted markdown content directly in Chat messages for technical discussions and knowledge sharing.'
components: ["chat"]
slug: ai_chat_markdown_visualization
position: 2
---

# React Chat Markdown Content Visualization

Display formatted markdown content directly in Chat messages. Users can view tables, code snippets, and other formatted text as part of the conversation flow, making technical discussions more accessible and engaging.

<demo metaUrl="conversational-ui/chat/markdown-visualization/" height="700"></demo>

## Setup

To display markdown content inside the Chat messages interface, follow these steps:

### 1. Install a markdown parsing library

This example uses the [marked](https://www.npmjs.com/package/marked) library:

> **Note:** KendoReact is not affiliated with the marked library. You can use any markdown parsing library that fits your project requirements.

```bash
npm install marked
```

### 2. Create a function to parse markdown content

```tsx
import { setOptions } from 'marked';

const parseMarkdown = (text: string): string => {
  const parser = setOptions({});
  return parser.parse(text || '') as string;
};
```

### 3. Use the messageTemplate to render markdown content

```tsx
const MessageTemplate = (props: ChatMessageTemplateProps) => {
  const message = props.item as AppMessage;
  const isUser = message.author?.id === user.id;

  if (isUser) {
    return (
      <div className="k-chat-bubble k-bubble">
        <div className="k-bubble-content">
          <span className="k-chat-bubble-text">{message.text}</span>
        </div>
      </div>
    );
  }

  const htmlContent = parseMarkdown(message.text || '');

  return (
    <div className="k-chat-bubble k-bubble">
      <div className="k-bubble-content">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
};

<Chat
  messages={messages}
  authorId={user.id}
  messageTemplate={MessageTemplate}
/>
```

## Suggested Links

-   [Getting Started with KendoReact Chat](slug:getting_started_chat)
-   [Chat API Reference](slug:api_conversational-ui)
-   [Getting Started with KendoReact (Online Guide)](slug:getting_started)
-   [KendoReact Learning Resources](https://www.telerik.com/kendo-react-ui/resources)
-   [React Conversational UI Product Page](https://www.telerik.com/kendo-react-ui/conversationalui)
