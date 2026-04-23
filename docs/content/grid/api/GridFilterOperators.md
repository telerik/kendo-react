---
title: GridFilterOperators
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridFilterOperators."
api_reference: true
type: inner_api
slug: api_grid_gridfilteroperators
---

# GridFilterOperators
The filter operators for the Grid filters.

```jsx-no-run
// Default Grid filter operators:
const filterOperators: {
    'text': [
        { text: 'grid.filterContainsOperator', operator: 'contains' },
        { text: 'grid.filterNotContainsOperator', operator: 'doesnotcontain' },
        { text: 'grid.filterEqOperator', operator: 'eq' },
        { text: 'grid.filterNotEqOperator', operator: 'neq' },
        { text: 'grid.filterStartsWithOperator', operator: 'startswith' },
        { text: 'grid.filterEndsWithOperator', operator: 'endswith' },
        { text: 'grid.filterIsNullOperator', operator: 'isnull' },
        { text: 'grid.filterIsNotNullOperator', operator: 'isnotnull' },
        { text: 'grid.filterIsEmptyOperator', operator: 'isempty' },
        { text: 'grid.filterIsNotEmptyOperator', operator: 'isnotempty' }
    ],
    'numeric': [
        { text: 'grid.filterEqOperator', operator: 'eq' },
        { text: 'grid.filterNotEqOperator', operator: 'neq' },
        { text: 'grid.filterGteOperator', operator: 'gte' },
        { text: 'grid.filterGtOperator', operator: 'gt' },
        { text: 'grid.filterLteOperator', operator: 'lte' },
        { text: 'grid.filterLtOperator', operator: 'lt' },
        { text: 'grid.filterIsNullOperator', operator: 'isnull' },
        { text: 'grid.filterIsNotNullOperator', operator: 'isnotnull' }
    ],
    'date': [
        { text: 'grid.filterEqOperator', operator: 'eq' },
        { text: 'grid.filterNotEqOperator', operator: 'neq' },
        { text: 'grid.filterAfterOrEqualOperator', operator: 'gte' },
        { text: 'grid.filterAfterOperator', operator: 'gt' },
        { text: 'grid.filterBeforeOperator', operator: 'lt' },
        { text: 'grid.filterBeforeOrEqualOperator', operator: 'lte' },
        { text: 'grid.filterIsNullOperator', operator: 'isnull' },
        { text: 'grid.filterIsNotNullOperator', operator: 'isnotnull' }
    ],
    'boolean': [
        { text: 'grid.filterEqOperator', operator: 'eq' }
    ]
}
```




