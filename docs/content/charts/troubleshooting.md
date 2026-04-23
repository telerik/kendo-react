---
title: Troubleshooting
description: 'Learn about the issues that may occur when using the KendoReact Charts in React projects.'
components: ["chart"]
slug: troubleshooting_charts
position: 70
---

# Troubleshooting

This article provides solutions for issues you might encounter while working with the KendoReact Charts.

> From version **8.1.0** of KendoReact Hammer.js is no longer a dependency of the package.

## HammerJS Dependency

When I try to use the Chart component, a Hammer.js-related error occurs

The `Chart` component requires Hammer.js to be installed as a [dependency]({% slug getstarted_charts %}#dependencies). The error occurs because Hammer.js is not loaded.

**Solution**

Install the [Hammer.js](https://www.npmjs.com/package/hammerjs) package and import it by using the `import 'hammerjs';` command.
