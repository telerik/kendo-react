window.moduleDirectives = (window.moduleDirectives || []).concat([
    {
        module: '@progress/kendo-react-orgchart',
        main: 'dist/cdn/js/kendo-react-orgchart.js',
        match: '(OrgChart|OrgChartExpandChangeEvent|OrgChartActionEvent|processOrgChartItems)',
        import: 'OrgChart, OrgChartExpandChangeEvent, OrgChartActionEvent, processOrgChartItems'
    },
    {
        module: '@progress/kendo-react-data-tools',
        main: 'dist/cdn/js/kendo-react-data-tools.js',
        match: '(createDataTree)',
        import: 'createDataTree'
    },
    {
        module: '@progress/kendo-data-query',
        main: 'dist/cdn/js/kendo-data-query.js',
        import: 'process'
    },
    {
        module: '@progress/kendo-svg-icons',
        main: 'dist/index.js'
    }
]);
