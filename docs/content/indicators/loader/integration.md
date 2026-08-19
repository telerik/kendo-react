---
title: Integration
description: 'Integrate the KendoReact Loader in another component or use it as part of a more complex functionality.'
slug: integration_loader
position: 3
components: ['loader']
---

# Integration

You can integrate the Loader in another component or use it as a building block of a more complex functionality.

The Loader provides approaches for integration in the following components:

-   [Button](#toc-loader-in-a-button)
-   [Loading Panel](#toc-loader-in-a-loading-panel)
-   [Deferred Loading](#toc-loader-in-deferred-loading)

## Loader in a Button

The following example demonstrates how to integrate the Loader in a Button.

{% meta height:140 %}
{% embed_file loader/integration/button/func/app.tsx preview %}
{% embed_file loader/integration/button/func/main.tsx %}
{% endmeta %}

## Loader in a Loading Panel

The following example demonstrates how to integrate the Loader as a building block in a loading panel.

{% meta height:420 %}
{% embed_file loader/integration/loader-panel/func/app.tsx preview %}
{% embed_file loader/integration/loader-panel/func/main.tsx %}
{% endmeta %}

## Loader in Deferred Loading

The Loader component is ideal for conveying that the application is actively fetching or rendering content. Combine it with a [Skeleton]({% slug overview_skeleton %}) placeholder for the best user experience&mdash;the Skeleton appears instantly while no loading has started, the Loader replaces it while the data is being fetched, and the content renders after loading completes.

The following example demonstrates the Loader used in a deferred loading pattern. Click **Load Grid** to trigger the data fetch&mdash;the Skeleton placeholder is visible initially, the Loader appears during the simulated request, and the Grid renders when loading completes. Click **Reset** to return to the placeholder state.

{% meta height:430 %}
{% embed_file loader/integration/deferred-loading/func/app.tsx preview %}
{% embed_file loader/integration/deferred-loading/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Loader]({% slug api_indicators_loaderprops %})
