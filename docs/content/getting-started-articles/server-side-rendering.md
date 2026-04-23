---
title: Using with Server Side Rendering
description: "Learn how to use KendoReact components with server-side rendering (SSR)."
components: ["general"]
slug: ssr_integration
position: 80
category: getting-started
level: 0
hidden: true
---

# Using with Server-Side Rendering

The KendoReact components can be used in applications that utilize server-side rendering (SSR) to achieve faster initial loading times.

## Server-Side Rendering with Next.js

For an example of how to use the KendoReact components inside a [Next.js](https://nextjs.org/) application, refer to the [dedicated Next.js article]({% slug nextjs_integration %}).

## Server-Side Rendering with Express

KendoReact server-side rendering support provides the ability to render KendoReact UI components on your React pages from servers such as [Express](https://expressjs.com/). This is achieved by utilizing the [renderToString method](https://react.dev/reference/react-dom/server/renderToString) that comes from the [ReactDOMServer object](https://react.dev/reference/react-dom/server). The method allows to pre-render the HTML on the server and send to the client the already rendered HTML for faster loading speed and SEO optimization.

For more details about the setup, please refer to the following [GitHub repository](https://github.com/telerik/kendo-react-ssr/) that showcases how the [KendoReact Data Grid]({% slug overview_grid %}) is pre-rendered on the server and sent to the client.

### Activating Your License Key (Not Needed for Free Components)

For information on activating your license, see the [Set Up Your KendoReact License Key](slug:my_license) page.
