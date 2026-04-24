---
title: Getting Started
description: 'Get started with the KendoReact Inline AI Prompt and learn how to use the component in React projects.'
components: ['inlineaiprompt']
slug: getting_started_inlineaiprompt
position: 10
tier: premium
---

# Getting Started with the KendoReact Inline AI Prompt

This guide provides essential information about using the KendoReact Inline AI Prompt component. You will learn how to install the Conversational UI package that provides the Inline AI Prompt. Then, you will add an Inline AI Prompt component to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:300 %}
{% embed_file inline-ai-prompt/getting-started/app.tsx preview %}
{% embed_file inline-ai-prompt/getting-started/styles.css %}
{% embed_file inline-ai-prompt/getting-started/main.tsx %}
{% endmeta %}

## Setting Up Your React Project

Before you install the KendoReact Conversational UI package, which contains the Inline AI Prompt component, make sure that you have a running React project. The easiest way to set up a KendoReact project is to use the approach described in the [Get Started with KendoReact]({% slug getting_started %}) guide.

## Installing the Conversational UI Package

All KendoReact packages are distributed through npm and offer a similar installation experience. To use the Inline AI Prompt component, start with the installation of the Conversational UI npm package and its [dependencies](#toc-dependencies). Use [NodeJS LTS](https://nodejs.org/en) (or a version >= 14).

```sh
npm i @progress/kendo-react-conversational-ui
```

## Importing the Component

After installing the package, import the Inline AI Prompt component in the React App.

In the `src/App.js` file of your React project, import the `InlineAIPrompt` from the Conversational UI package.

```jsx-no-run
// ES2015 module syntax
import { InlineAIPrompt } from '@progress/kendo-react-conversational-ui';
```

## Using the Component

1. Define the `InlineAIPrompt` component and configure its basic properties:

    ```jsx-no-run
    <InlineAIPrompt
        show={showPrompt}
        onClose={() => setShowPrompt(false)}
        outputs={outputs}
        onPromptRequest={handlePromptRequest}
    />
    ```

1. Next, handle the [`onPromptRequest`]({% slug api_conversational-ui_inlineaipromptprops %}#toc-onPromptRequest) which is triggered when the user submits a prompt, and configure the [`outputs`]({% slug api_conversational-ui_inlineaipromptprops %}#toc-outputs) to display AI responses:

    ```jsx-no-run
    const [outputs, setOutputs] = useState([]);
    const [showPrompt, setShowPrompt] = useState(false);

    const handlePromptRequest = async (prompt) => {
        try {
            // Replace with your AI service call
            const response = await fetch('/api/ai-chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt })
            });

            const data = await response.json();

            const newOutput = {
                id: Date.now(),
                prompt,
                responseContent: data.response
            };

            setOutputs([newOutput]);
        } catch (error) {
            console.error('AI request failed:', error);
        }
    };
    ```

1. To style the Inline AI Prompt, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [themes]({% slug themesandstyles %}) for KendoReact.

    3.1. Install the Default theme package.

    ```sh
    npm i @progress/kendo-theme-default
    ```

    3.2. Import the CSS file from the package in `src/App.js`. Add this import before your existing `App.css` import.

    ```jsx
    import '@progress/kendo-theme-default/dist/all.css';
    ```

## Activating Your License Key

Using any of the UI components in the KendoReact library requires either a commercial license key or an active trial license key.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to activate your trial or commercial license. You can skip this step if your application already contains a KendoReact license file.

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

## Suggested Links

-   [Getting Started with the KendoReact Conversational UI Package]({% slug get_started_convui %})
-   [API Reference of the KendoReact Inline AI Prompt]({% slug api_conversational-ui_inlineaiprompt %})
-   [API Reference of the InlineAIPromptProps]({% slug api_conversational-ui_inlineaipromptprops %})
