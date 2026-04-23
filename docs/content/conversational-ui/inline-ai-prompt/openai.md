---
title: OpenAI Integration
description: 'Learn how to utilize your openAI key to use the KendoReact Inline AI Prompt component with ChatGPT'
components: ["inlineaiprompt"]
slug: openai_inlineaiprompt
position: 45
---

# OpenAI Integration

The KendoReact Inline AI Prompt allows you to easily integrate it with a chat api service such as ChatGPT. This is thanks to the [`onPromptRequest`]({% slug api_conversational-ui_inlineaipromptprops %}#toc-onPromptRequest) event that returns the input text (prompt), and sets the output.

## Using with an OpenAI key

If you have an OpenAI subscription, you can directly use it with the Inline AI Prompt component.

1. Install the openai package from npm.

```sh
npm i openai
```

2. Import the OpenAI interface. If you are not setting the key to an environment variable, you will need to set the `dangerouslyAllowBrowser` or else you will get an error, in order to prevent you from exposing your key.

```jsx
import OpenAI from 'openai';

API_KEY = 'my-key';

const openai = new OpenAI({
    apiKey: API_KEY,
    dangerouslyAllowBrowser: true
});
```

3. Add a method that performs the API call. Make sure to set the correct model that corresponds to your API key.

```jsx
async function generate(prompt) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-3.5-turbo'
    });

    for (const choice of completion.choices) {
        return choice.message.content;
    }
}
```

4. Call this method inside the `onPromptRequest` event handler. Refer to [this section](#perform-the-call) that demonstrates how to use the `generate` method with the `onPromptRequest` event.

## Using with Azure OpenAI

Another common option is getting access to OpenAI using an Azure deployment. Follow the steps below to setup the component with Azure OpenAI.

1. Install the required dependencies.

```sh
npm i openai @azure/identity
```

2. Import the AzureOpenAI interface and set the required keys. Make sure to set the correct API version and model name or else the calls will fail.

```jsx
import AzureOpenAI from 'openai';

const endpoint = 'your-endpoint'; // deployment URL
const apiKey = 'your-key';
const apiVersion = '2024-04-01-preview';
const deployment = 'open-ai-gpt-35-turbo'; // model name
```

3. Add a method that performs the API call. Make sure to set the correct model that corresponds to your API key. `dangerouslyAllowBrowser` should be set to `true` if you are not setting the key to an environment variable.

```jsx
async function generate(prompt) {
    const client = new AzureOpenAI({
        endpoint,
        apiKey,
        apiVersion,
        deployment,
        dangerouslyAllowBrowser: true
    });

    const result = await client.completions.create({
        prompt,
        model: deployment,
        max_tokens: 128
    });

    for (const choice of result.choices) {
    const result = await client.chat.completions.create({
        messages: [
            { role: "user", content: prompt }
        ],
        model: deployment,
        max_tokens: 128
    });

    for (const choice of result.choices) {
        return choice.message?.content;
    }
}
```

4. Call this method in the `onPromptRequest` event handler. Refer to the following section for an example.

## Perform the call

In both cases, you can call the `generate` method inside the `onPromptRequest` event handler. You need to change this method to an asynchronous method since the API request is an asynchronous one. After the request is complete, the output will be displayed.

```jsx
const handleOnRequest = async (prompt) => {
    const gptResult = await generate(prompt);
    if (!prompt) {
        return;
    }
    setPromptOutput({
        id: Date.now().toString(),
        prompt,
        responseContent: gptResult || 'No response received'
    });
};
```

## Suggested Links

-   [Getting Started with the KendoReact Inline AI Prompt]({% slug getting_started_inlineaiprompt %})
-   [OpenAI Quickstart with JavaScript](https://platform.openai.com/docs/quickstart?context=node)
-   [Azure OpenAI Quickstart with JavaScript](https://learn.microsoft.com/en-us/azure/ai-services/openai/quickstart?tabs=command-line%2Cpython-new&pivots=programming-language-javascript)
-   [API Reference of the Inline AI Prompt]({% slug api_conversational-ui_inlineaipromptprops %})
