---
title: Getting Started
description: 'Get started with the KendoReact Conversational UI package and learn how to use the Chat component in React projects.'
components: ['aiprompt', 'chat', 'inlineaiprompt']
slug: get_started_convui
position: 10
---

# Getting Started with the KendoReact Conversational UI

This guide provides essential information about using the KendoReact Conversational UI package and Chat component&mdash;you will learn how to install the Conversational UI package, add a Chat component to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:680 %}
{% embed_file get-started/app.tsx preview %}
{% embed_file get-started/main.tsx %}
{% endmeta %}

## Install the Component

```sh
npm i @progress/kendo-react-conversational-ui
```

## Importing the Component

After installing the package, import the Chat component in your React app. To enable message sending functionality, also import the Message entity.

In the `src/App.js` file of your React project, import the `Chat` component from the Conversational UI package:

```jsx-no-run
// ES2015 module syntax
import { Chat, Message } from "@progress/kendo-react-conversational-ui";
```

## Using the Component

1. Add the required Chat entities: a `user`, `bot`, and `initialMessages`.

```tsx
const user = {
    id: 1,
    avatarUrl: 'assets/dropdowns/contacts/RICSU.jpg',
    avatarAltText: 'KendoReact Conversational UI RICSU'
};

const bot = { id: 0 };

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        timestamp: new Date(),
        text: 'Hello, This is the KendoReact Chat component.'
    }
];
```

2. Set the component messages and configure the updating of the messages collection in the state.

```tsx
const App = () => {
  const [messages, setMessages] = React.useState(initialMessages);

  const addNewMessage = (event) => {
    setMessages([...messages, event.message]);
  };
  ...
```

3. Add the component's markup and set the messages, authorId, and message sending handler. Optionally, configure placeholder text and the height of the Chat component.

```tsx
return (
    <div>
        <Chat
            messages={messages}
            authorId={user.id}
            onSendMessage={addNewMessage}
            placeholder={'Type a message...'}
            width={400}
            height={600}
            className="k-m-auto"
        />
    </div>
);
```

1. To style the Chat, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [themes]({% slug themesandstyles %}) for KendoReact.

    2.1. Install the Default theme package.

    ```sh
    npm i @progress/kendo-theme-default
    ```

    2.2. Import the CSS file from the package in `src/App.js`. Add this import before your existing `App.css` import.

    ```jsx
    import '@progress/kendo-theme-default/dist/all.css';
    ```

## Activating Your License Key

**Important**: The KendoReact Conversational UI is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The Conversational UI package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                  | Description                                                                                                                                                                 |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                     | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-licensing     | Contains the internal infrastructure related to licensing.                                                                                                                  |
| @progress/kendo-react-buttons | Contains the KendoReact Buttons components.                                                                                                                                 |
| @progress/kendo-react-intl    | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-svg-icons     | Contains the KendoReact SVG icons.                                                                                                                                          |
