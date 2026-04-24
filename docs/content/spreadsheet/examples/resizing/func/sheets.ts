export const sheets = [
    {
        'name': 'Food Order',
        'rows': [
            {
                'index': 0,
                'height': 25,
                'cells': [
                    {
                        'value': 'ID',
                        'background': '#a7d6ff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 0
                    },
                    {
                        'value': 'Product',
                        'background': '#a7d6ff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 1
                    },
                    {
                        'value': 'Quantity',
                        'background': '#a7d6ff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 2
                    },
                    {
                        'value': 'Price',
                        'background': '#a7d6ff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 3
                    },
                    {
                        'value': 'Tax',
                        'background': '#a7d6ff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 4
                    },
                    {
                        'value': 'Amount',
                        'background': '#a7d6ff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 5
                    },
                    {
                        'background': '#a7d6ff',
                        'color': '#003e75',
                        'index': 6
                    }
                ]
            },
            {
                'index': 12,
                'height': 25,
                'cells': [
                    {
                        'background': '#c1e2ff',
                        'color': '#003e75',
                        'index': 0
                    },
                    {
                        'background': '#c1e2ff',
                        'color': '#003e75',
                        'index': 1
                    },
                    {
                        'background': '#c1e2ff',
                        'color': '#003e75',
                        'index': 2
                    },
                    {
                        'background': '#c1e2ff',
                        'color': '#003e75',
                        'index': 3
                    },
                    {
                        'value': 'Tip:',
                        'background': '#c1e2ff',
                        'color': '#003e75',
                        'textAlign': 'right',
                        'verticalAlign': 'bottom',
                        'index': 4
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 20.0748,
                        'formula': 'SUM(F2:F10)*0.1',
                        'background': '#c1e2ff',
                        'color': '#003e75',
                        'bold': true,
                        'verticalAlign': 'bottom',
                        'index': 5
                    },
                    {
                        'background': '#c1e2ff',
                        'color': '#003e75',
                        'index': 6
                    }
                ]
            },
            {
                'index': 13,
                'height': 50,
                'cells': [
                    {
                        'background': '#c1e2ff',
                        'color': '#003e75',
                        'index': 0
                    },
                    {
                        'background': '#c1e2ff',
                        'color': '#003e75',
                        'index': 1
                    },
                    {
                        'value': 'Total Amount:',
                        'background': '#c1e2ff',
                        'color': '#003e75',
                        'fontSize': 20,
                        'textAlign': 'right',
                        'index': 2
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 220.8228,
                        'formula': 'SUM(F2:F13)',
                        'background': '#c1e2ff',
                        'color': '#003e75',
                        'fontSize': 20,
                        'bold': true,
                        'index': 5
                    },
                    {
                        'background': '#c1e2ff',
                        'color': '#003e75',
                        'index': 6
                    }
                ]
            },
            {
                'index': 1,
                'cells': [
                    {
                        'value': 216321,
                        'background': '#ffffff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 0
                    },
                    {
                        'value': 'Calzone',
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 1
                    },
                    {
                        'value': 1,
                        'background': '#ffffff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 2
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 12.39,
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 3
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 2.478,
                        'formula': 'C2*D2*0.2',
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 4
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 14.868,
                        'formula': 'C2*D2+E2',
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 5
                    },
                    {
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 6
                    }
                ]
            },
            {
                'index': 2,
                'cells': [
                    {
                        'value': 546897,
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 0
                    },
                    {
                        'value': 'Margarita',
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 1
                    },
                    {
                        'value': 2,
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 2
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 8.79,
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 3
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 3.516,
                        'formula': 'C3*D3*0.2',
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 4
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 21.096,
                        'formula': 'C3*D3+E3',
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 5
                    },
                    {
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 6
                    }
                ]
            },
            {
                'index': 3,
                'cells': [
                    {
                        'value': 456231,
                        'background': '#ffffff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 0
                    },
                    {
                        'value': 'Pollo Formaggio',
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 1
                    },
                    {
                        'value': 1,
                        'background': '#ffffff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 2
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 13.99,
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 3
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 2.798,
                        'formula': 'C4*D4*0.2',
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 4
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 16.788,
                        'formula': 'C4*D4+E4',
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 5
                    },
                    {
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 6
                    }
                ]
            },
            {
                'index': 4,
                'cells': [
                    {
                        'value': 455873,
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 0
                    },
                    {
                        'value': 'Greek Salad',
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 1
                    },
                    {
                        'value': 1,
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 2
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 9.49,
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 3
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 1.898,
                        'formula': 'C5*D5*0.2',
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 4
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 11.388,
                        'formula': 'C5*D5+E5',
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 5
                    },
                    {
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 6
                    }
                ]
            },
            {
                'index': 5,
                'cells': [
                    {
                        'value': 456892,
                        'background': '#ffffff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 0
                    },
                    {
                        'value': 'Spinach and Blue Cheese',
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 1
                    },
                    {
                        'value': 3,
                        'background': '#ffffff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 2
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 11.49,
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 3
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 6.894,
                        'formula': 'C6*D6*0.2',
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 4
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 41.364,
                        'formula': 'C6*D6+E6',
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 5
                    },
                    {
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 6
                    }
                ]
            },
            {
                'index': 6,
                'cells': [
                    {
                        'value': 546564,
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 0
                    },
                    {
                        'value': 'Rigoletto',
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 1
                    },
                    {
                        'value': 1,
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 2
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 10.99,
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 3
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 2.198,
                        'formula': 'C7*D7*0.2',
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 4
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 13.188,
                        'formula': 'C7*D7+E7',
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 5
                    },
                    {
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 6
                    }
                ]
            },
            {
                'index': 7,
                'cells': [
                    {
                        'value': 789455,
                        'background': '#ffffff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 0
                    },
                    {
                        'value': 'Creme Brulee',
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 1
                    },
                    {
                        'value': 5,
                        'background': '#ffffff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 2
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 6.99,
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 3
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 6.990000000000001,
                        'formula': 'C8*D8*0.2',
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 4
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 41.94,
                        'formula': 'C8*D8+E8',
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 5
                    },
                    {
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 6
                    }
                ]
            },
            {
                'index': 8,
                'cells': [
                    {
                        'value': 123002,
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 0
                    },
                    {
                        'value': 'Radeberger Beer',
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 1
                    },
                    {
                        'value': 4,
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 2
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 4.99,
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 3
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 3.992,
                        'formula': 'C9*D9*0.2',
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 4
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 23.952,
                        'formula': 'C9*D9+E9',
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 5
                    },
                    {
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 6
                    }
                ]
            },
            {
                'index': 9,
                'cells': [
                    {
                        'value': 564896,
                        'background': '#ffffff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 0
                    },
                    {
                        'value': 'Budweiser Beer',
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 1
                    },
                    {
                        'value': 3,
                        'background': '#ffffff',
                        'color': '#003e75',
                        'textAlign': 'center',
                        'index': 2
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 4.49,
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 3
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 2.694,
                        'formula': 'C10*D10*0.2',
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 4
                    },
                    {
                        'format': '$#,##0.00',
                        'value': 16.164,
                        'formula': 'C10*D10+E10',
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 5
                    },
                    {
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 6
                    }
                ]
            },
            {
                'index': 10,
                'cells': [
                    {
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 0
                    },
                    {
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 1
                    },
                    {
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 2
                    },
                    {
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 3
                    },
                    {
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 4
                    },
                    {
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 5
                    },
                    {
                        'background': '#e5f3ff',
                        'color': '#003e75',
                        'index': 6
                    }
                ]
            },
            {
                'index': 11,
                'cells': [
                    {
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 0
                    },
                    {
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 1
                    },
                    {
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 2
                    },
                    {
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 3
                    },
                    {
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 4
                    },
                    {
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 5
                    },
                    {
                        'background': '#ffffff',
                        'color': '#003e75',
                        'index': 6
                    }
                ]
            }
        ],
        'columns': [
            {
                'index': 0,
                'width': 100
            },
            {
                'index': 1,
                'width': 215
            },
            {
                'index': 2,
                'width': 114.99999999999999
            },
            {
                'index': 3,
                'width': 114.99999999999999
            },
            {
                'index': 4,
                'width': 114.99999999999999
            },
            {
                'index': 5,
                'width': 155
            }
        ],
        'selection': 'A1:A1',
        'activeCell': 'A1:A1',
        'frozenRows': 0,
        'frozenColumns': 0,
        'showGridLines': true,
        'gridLinesColor': null,
        'mergedCells': [
            'C14:E14'
        ],
        'hyperlinks': [],
        'defaultCellStyle': {
            'fontFamily': 'Arial',
            'fontSize': 12
        },
        'drawings': []
    }
];
