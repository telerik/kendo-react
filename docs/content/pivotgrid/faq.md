---
title: FAQ
description: 'Get started with the KendoReact PivotGrid and find the most frequently asked questions related to the component and their answers.'
components: ["pivotgrid"]
slug: faq_pivotgrid
position: 40
---

# Frequently Asked Questions

This article lists the answers to the most frequently asked questions (FAQs) when working with the KendoReact PivotGrid.

## Does the PivotGrid work with the OLAP cube that is delivered by MS SSAS?

Yes, it does. The [Microsoft SQL Server Analysis Services (MS SSAS)](<http://technet.microsoft.com/en-us/library/ms175609(v=sql.90).aspx>) use the [XMLA](https://en.wikipedia.org/wiki/XML_for_Analysis) protocol, which is the main requirement for the PivotGrid to work.

## Does the PivotGrid work with different OLAP servers?

If the OLAP service implements the [XMLA](https://en.wikipedia.org/wiki/XML_for_Analysis) standard, it should work out-of-the-box. Note that the supported format of the [`Execute`](https://msdn.microsoft.com/en-us/library/ms186691.Aspx) method is a multidimensional property:

```jsx-no-run
<PropertyList>
    <Format>Multidimensional</Format>
</PropertyList>
```

The value of the `AxisFormat` should be `TupleFormat`.

```jsx-no-run
<PropertyList>
    <AxisFormat>TupleFormat</AxisFormat>
</PropertyList>
```

## How can I connect to a secured OLAP instance?

For more information, refer to the [Accessing the Cube Securely]({% slug data-binding_olap-fundamentals_pivotgrid %}#accessing-the-cube-securely) section.

## If I do not have an OLAP cube, can I still use the PivotGrid?

Currently, the KendoReact PivotGrid does not support `binding to flat data`.
