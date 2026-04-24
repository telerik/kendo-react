---
title: Operators
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the Operators."
api_reference: true
type: inner_api
slug: api_data-tools_operators
---

# Operators
Represents the operators for the TextFilter, NumericFilter, DateFilter and BooleanFilter components.

The text field of each operator object will be resolved according to the
[localization messages](https://www.telerik.com/kendo-react-ui/components/datatools/globalization#toc-messages).


<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### boolean


</td>
<td type class="table-cell-type">


<code>


[FilterOperator]({% slug api_data-tools_filteroperator %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An array containing the operators for the BooleanFilter component.

The operators are:

- { text: 'filter.eqOperator', operator: 'eq' }
- { text: 'filter.notEqOperator', operator: 'neq' }


</td>
</tr>
<tr>
<td class="table-cell-name">


#### date


</td>
<td type class="table-cell-type">


<code>


[FilterOperator]({% slug api_data-tools_filteroperator %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An array containing the operators for the DateFilter component.

The operators are:

- { text: 'filter.eqOperator', operator: 'eq' }
- { text: 'filter.notEqOperator', operator: 'neq' }
- { text: 'filter.afterOrEqualOperator', operator: 'gte' }
- { text: 'filter.afterOperator', operator: 'gt' }
- { text: 'filter.beforeOperator', operator: 'lt' }
- { text: 'filter.beforeOrEqualOperator', operator: 'lte' }
- { text: 'filter.isNullOperator', operator: 'isnull' }
- { text: 'filter.isNotNullOperator', operator: 'isnotnull' }


</td>
</tr>
<tr>
<td class="table-cell-name">


#### numeric


</td>
<td type class="table-cell-type">


<code>


[FilterOperator]({% slug api_data-tools_filteroperator %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An array containing the operators for the NumericFilter component.

The operators are:

- { text: 'filter.eqOperator', operator: 'eq' }
- { text: 'filter.notEqOperator', operator: 'neq' }
- { text: 'filter.gteOperator', operator: 'gte' }
- { text: 'filter.gtOperator', operator: 'gt' }
- { text: 'filter.lteOperator', operator: 'lte' }
- { text: 'filter.ltOperator', operator: 'lt' }
- { text: 'filter.isNullOperator', operator: 'isnull' }
- { text: 'filter.isNotNullOperator', operator: 'isnotnull' }


</td>
</tr>
<tr>
<td class="table-cell-name">


#### text


</td>
<td type class="table-cell-type">


<code>


[FilterOperator]({% slug api_data-tools_filteroperator %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An array containing the operators for the TextFilter component.

The operators are:

- { text: 'filter.containsOperator', operator: 'contains' }
- { text: 'filter.notContainsOperator', operator: 'doesnotcontain' }
- { text: 'filter.eqOperator', operator: 'eq' }
- { text: 'filter.notEqOperator', operator: 'neq' }
- { text: 'filter.startsWithOperator', operator: 'startswith' }
- { text: 'filter.endsWithOperator', operator: 'endswith' }
- { text: 'filter.isNullOperator', operator: 'isnull' }
- { text: 'filter.isNotNullOperator', operator: 'isnotnull' }
- { text: 'filter.isEmptyOperator', operator: 'isempty' }
- { text: 'filter.isNotEmptyOperator', operator: 'isnotempty' }


</td>
</tr>
</tbody>
</table>



## Constructors

### Operators
<code>


()


</code>




