export const invoices = [
    {
        name: "Invoices",
        mergedCells: [
            "A1:F1",
            "C15:E15"
        ],
        rows: [
            {
                height: 50,
                cells: [
                    {
                        value: "Invoice #1", fontSize: 25,
                        textAlign: "center"
                    }
                ]
            },
            {
                height: 25,
                cells: [
                    {
                        value: "ID", textAlign: "center"
                    },
                    {
                        value: "Product", textAlign: "center"
                    },
                    {
                        value: "Quantity", textAlign: "center"
                    },
                    {
                        value: "Price", textAlign: "center"
                    },
                    {
                        value: "Tax", textAlign: "center"
                    },
                    {
                        value: "Amount", textAlign: "center"
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 216321, textAlign: "center"
                    },
                    {
                        value: "Calzone"
                    },
                    {
                        value: 1, textAlign: "center"
                    },
                    {
                        value: 12.39, format: "$#,##0.00"
                    },
                    {
                        formula: "C3*D3*0.2", format: "$#,##0.00"
                    },
                    {
                        formula: "C3*D3+E3", format: "$#,##0.00"
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 546897, textAlign: "center"
                    },
                    {
                        value: "Margarita"
                    },
                    {
                        value: 2, textAlign: "center"
                    },
                    {
                        value: 8.79, format: "$#,##0.00"
                    },
                    {
                        formula: "C4*D4*0.2", format: "$#,##0.00"
                    },
                    {
                        formula: "C4*D4+E4", format: "$#,##0.00"
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 456231, textAlign: "center"
                    },
                    {
                        value: "Pollo Formaggio"
                    },
                    {
                        value: 1, textAlign: "center"
                    },
                    {
                        value: 13.99, format: "$#,##0.00"
                    },
                    {
                        formula: "C5*D5*0.2", format: "$#,##0.00"
                    },
                    {
                        formula: "C5*D5+E5", format: "$#,##0.00"
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 455873, textAlign: "center"
                    },
                    {
                        value: "Greek Salad"
                    },
                    {
                        value: 1, textAlign: "center"
                    },
                    {
                        value: 9.49, format: "$#,##0.00"
                    },
                    {
                        formula: "C6*D6*0.2", format: "$#,##0.00"
                    },
                    {
                        formula: "C6*D6+E6", format: "$#,##0.00"
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 456892, textAlign: "center"
                    },
                    {
                        value: "Spinach and Blue Cheese"
                    },
                    {
                        value: 3, textAlign: "center"
                    },
                    {
                        value: 11.49, format: "$#,##0.00"
                    },
                    {
                        formula: "C7*D7*0.2", format: "$#,##0.00"
                    },
                    {
                        formula: "C7*D7+E7", format: "$#,##0.00"
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 546564, textAlign: "center"
                    },
                    {
                        value: "Rigoletto"
                    },
                    {
                        value: 1, textAlign: "center"
                    },
                    {
                        value: 10.99, format: "$#,##0.00"
                    },
                    {
                        formula: "C8*D8*0.2", format: "$#,##0.00"
                    },
                    {
                        formula: "C8*D8+E8", format: "$#,##0.00"
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 789455, textAlign: "center"
                    },
                    {
                        value: "Creme Brulee"
                    },
                    {
                        value: 5, textAlign: "center"
                    },
                    {
                        value: 6.99, format: "$#,##0.00"
                    },
                    {
                        formula: "C9*D9*0.2", format: "$#,##0.00"
                    },
                    {
                        formula: "C9*D9+E9", format: "$#,##0.00"
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 123002, textAlign: "center"
                    },
                    {
                        value: "Radeberger Beer"
                    },
                    {
                        value: 4, textAlign: "center"
                    },
                    {
                        value: 4.99, format: "$#,##0.00"
                    },
                    {
                        formula: "C10*D10*0.2", format: "$#,##0.00"
                    },
                    {
                        formula: "C10*D10+E10", format: "$#,##0.00"
                    }
                ]
            },
            {
                cells: [
                    {
                        value: 564896, textAlign: "center"
                    },
                    {
                        value: "Budweiser Beer"
                    },
                    {
                        value: 3, textAlign: "center"
                    },
                    {
                        value: 4.49, format: "$#,##0.00"
                    },
                    {
                        formula: "C11*D11*0.2", format: "$#,##0.00"
                    },
                    {
                        formula: "C11*D11+E11", format: "$#,##0.00"
                    }
                ]
            },
            {
                index: 13,
                cells: [
                    {

                    },
                    {

                    },
                    {

                    },
                    {

                    },
                    {
                        value: "Tip", textAlign: "right"
                    },
                    {
                        formula: "SUM(F3:F11)*0.1", format: "$#,##0.00"
                    }
                ]
            },
            {
                height: 50,
                index: 14,
                cells: [
                    {
                        index: 0
                    },
                    {
                        index: 1
                    },
                    {
                        index: 2, fontSize: 20, value: "Total Amount", textAlign: "right"
                    },
                    {
                        index: 5, formula: "SUM(F3:F14)",
                        format: "$#,##0.00"
                    }
                ]
            }
        ],
        columns: [
            {
                width: 100
            },
            {
                width: 215
            },
            {
                width: 115
            },
            {
                width: 115
            },
            {
                width: 115
            },
            {
                width: 155
            }
        ]
    }
]
