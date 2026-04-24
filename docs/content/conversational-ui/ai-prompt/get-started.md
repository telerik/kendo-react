---
title: Getting Started
description: 'Get started with the KendoReact AIPrompt and learn how to use the component in React projects.'
components: ['aiprompt']
slug: get_started_aiprompt
position: 10
---

# Getting Started with the KendoReact AIPrompt

This guide provides essential information about using the KendoReact AIPrompt component. You will learn how to install the Conversational UI package that provides the AIPrompt. Then, you will add a AIPrompt component to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:470 %}
{% embed_file ai-prompt/get-started/func/app.tsx preview %}
{% embed_file ai-prompt/get-started/func/main.tsx %}
{% embed_file ai-prompt/get-started/func/service-ai-data %}
{% embed_file ai-prompt/get-started/func/overview-styles.css %}
{% endmeta %}

## Setting Up Your React Project

Before you install the KendoReact Conversational UI package, which contains the AIPrompt component, make sure that you have a running React project. The easiest way to set up a KendoReact project is to use the approach described in [Get Started with KendoReact]({% slug getting_started %}).

## Installing the Conversational UI Package

All KendoReact packages are distributed through npm and offer a similar installation experience. To use the AIPrompt component, start with the installation of the Conversational UI npm package and its [dependencies](#toc-dependencies). Use NodeJS LTS or a version >= 14.

```sh
npm i @progress/kendo-react-conversational-ui
```

## Importing the Component

After installing the package, import the AIPrompt component in the React App.

In the `src/App.js` file of your React project, import the `AIPrompt`, `AIPromptView`, `AIPromptCommandsView` and `AIPromptOutputView` from the Conversational UI package.

```jsx-no-run
// ES2015 module syntax
import { AIPrompt, AIPromptView,  AIPromptOutputView, AIPromptCommandsView} from '@progress/kendo-react-conversational-ui';
```

## Using the Component

1. Define the `AIPrompt` component and add the [`AIPromptView`]({% slug api_conversational-ui_aipromptview %}) and [`AIPromptOutputView`]({% slug api_conversational-ui_aipromptoutputview %})

    ```jsx-no-run
      <AIPrompt>
         <AIPromptView/>
         <AIPromptOutputView>
         <AIPromptCommandsView/>
      </AIPrompt>
    ```

1. Next, define the [`activeView`]({% slug api_conversational-ui_aipromptprops %}#toc-activeView), handle the [`onActiveViewChange`]({% slug api_conversational-ui_aipromptprops %}#toc-onActiveViewChange), [`onPromptRequest`]({% slug api_conversational-ui_aipromptprops %}#toc-onPromptRequest) which is triggered when the user clicks the `Generate` button in the Prompt view and the [`onCommandExecute`]({% slug api_conversational-ui_aipromptprops %}#toc-onCommandExecute) when the `Command` view is clicked. Finally pass `promptViewDefaults`, `outputViewDefaults`, `commandsViewDefaults` to the [`toolbarItems`]({% slug api_conversational-ui_aipromptprops %}#toc-toolbarItems) prop.

    ```jsx-no-run
      <AIPrompt
         style={{ width: '400px', height: '400px' }}
         activeView={activeView}
         onActiveViewChange={handleActiveViewChange}
         onPromptRequest={handleOnRequest}
         onCommandExecute={handleCommandExecute}
         toolbarItems={[promptViewDefaults, outputViewDefaults, commandsViewDefaults]}
      >
         <AIPromptView promptSuggestions={suggestionsList} />
         <AIPromptOutputView outputs={outputs} showOutputRating={true} />
         <AIPromptCommandsView commands={promptCommands} />
      </AIPrompt>
    ```

1. To style the AIPrompt, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [themes]({% slug themesandstyles %}) for KendoReact.

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
-   [API Reference of the KendoReact AIPrompt]({% slug api_conversational-ui_aiprompt %})
-   [API Reference of the AIPromptProps]({% slug api_conversational-ui_aipromptprops %})
