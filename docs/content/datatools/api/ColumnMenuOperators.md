---
title: ColumnMenuOperators
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the ColumnMenuOperators."
api_reference: true
type: inner_api
slug: api_data-tools_columnmenuoperators
---

# ColumnMenuOperators
Represents the operators for the ColumnMenuTextFilter, ColumnMenuNumericFilter,
ColumnMenuDateFilter and ColumnMenuBooleanFilter components.

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


An array containing the operators for the ColumnMenuBooleanFilter component.

The operators are:

- { text: 'columnMenu.filterIsTrue', operator: '' }


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


An array containing the operators for the ColumnMenuDateFilter component.

The operators are:

- { text: 'columnMenu.filterEqOperator', operator: 'eq' }
- { text: 'columnMenu.filterNotEqOperator', operator: 'neq' }
- { text: 'columnMenu.filterAfterOrEqualOperator', operator: 'gte' }
- { text: 'columnMenu.filterAfterOperator', operator: 'gt' }
- { text: 'columnMenu.filterBeforeOperator', operator: 'lt' }
- { text: 'columnMenu.filterBeforeOrEqualOperator', operator: 'lte' }
- { text: 'columnMenu.filterIsNullOperator', operator: 'isnull' }
- { text: 'columnMenu.filterIsNotNullOperator', operator: 'isnotnull' }


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


An array containing the operators for the ColumnMenuNumericFilter component.

The operators are:

- { text: 'columnMenu.filterEqOperator', operator: 'eq' }
- { text: 'columnMenu.filterNotEqOperator', operator: 'neq' }
- { text: 'columnMenu.filterGteOperator', operator: 'gte' }
- { text: 'columnMenu.filterGtOperator', operator: 'gt' }
- { text: 'columnMenu.filterLteOperator', operator: 'lte' }
- { text: 'columnMenu.filterLtOperator', operator: 'lt' }
- { text: 'columnMenu.filterIsNullOperator', operator: 'isnull' }
- { text: 'columnMenu.filterIsNotNullOperator', operator: 'isnotnull' }


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


An array containing the operators for the ColumnMenuTextFilter component.

The operators are:

- { text: 'columnMenu.filterContainsOperator', operator: 'contains' }
- { text: 'columnMenu.filterNotContainsOperator', operator: 'doesnotcontain' }
- { text: 'columnMenu.filterEqOperator', operator: 'eq' }
- { text: 'columnMenu.filterNotEqOperator', operator: 'neq' }
- { text: 'columnMenu.filterStartsWithOperator', operator: 'startswith' }
- { text: 'columnMenu.filterEndsWithOperator', operator: 'endswith' }
- { text: 'columnMenu.filterIsNullOperator', operator: 'isnull' }
- { text: 'columnMenu.filterIsNotNullOperator', operator: 'isnotnull' }
- { text: 'columnMenu.filterIsEmptyOperator', operator: 'isempty' }
- { text: 'columnMenu.filterIsNotEmptyOperator', operator: 'isnotempty' }


</td>
</tr>
</tbody>
</table>



## Constructors

### ColumnMenuOperators
<code>


()


</code>




