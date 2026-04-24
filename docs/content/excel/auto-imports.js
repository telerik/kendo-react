window.moduleDirectives = (window.moduleDirectives || []).concat([
    {
        module: '@progress/kendo-react-excel-export',
        main: 'dist/cdn/js/kendo-react-excel-export.js',
        match: '(ExcelExport|ExcelExportColumn|ExcelExportColumnGroup|ExcelExportFooter|ExcelExportGroupFooter|ExcelExportGroupHeader)',
        import: 'ExcelExport, ExcelExportColumn, ExcelExportColumnGroup, ExcelExportFooter, ExcelExportGroupFooter, ExcelExportGroupHeader'
    },
    {
        module: '@progress/kendo-react-treelist',
        main: 'dist/cdn/js/kendo-react-treelist.js'
    },
    {
        module: '@progress/kendo-react-intl',
        main: 'dist/cdn/js/kendo-react-intl.js'
    },
    {
        module: '@progress/kendo-data-query',
        main: 'dist/cdn/js/kendo-data-query.js'
    },
    {
        module: '@progress/kendo-date-math',
        main: 'dist/cdn/js/kendo-date-math.js'
    },
    {
        module: '@progress/kendo-react-grid',
        main: 'dist/cdn/js/kendo-react-grid.js'
    },
    {
        module: '@progress/kendo-react-indicators',
        main: 'dist/cdn/js/kendo-react-indicators.js'
    }
]);
