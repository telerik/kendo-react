window.moduleDirectives = (window.moduleDirectives || []).concat([
    {
        module: '@progress/kendo-react-charts',
        main: 'dist/cdn/js/kendo-react-charts.js'
    },
    {
        module: '@progress/kendo-react-buttons',
        main: 'dist/cdn/js/kendo-react-buttons.js'
    },
    {
        module: '@progress/kendo-react-popup',
        main: 'dist/cdn/js/kendo-react-popup.js'
    },
    {
        module: '@progress/kendo-react-dropdowns',
        main: 'dist/cdn/js/kendo-react-dropdowns.js',
        match: '(ComboBox|DropDownList)',
        import: 'ComboBox, DropDownList'
    },
    {
        module: '@progress/kendo-react-inputs',
        main: 'dist/cdn/js/kendo-react-inputs.js'
    },
    {
        module: '@progress/kendo-react-intl',
        main: 'dist/cdn/js/kendo-react-intl.js'
    },
    {
        module: '@progress/kendo-react-layout',
        main: 'dist/cdn/js/kendo-react-layout.js'
    },
    {
        module: '@progress/kendo-react-common',
        main: 'dist/cdn/js/kendo-react-common.js'
    },
    {
        module: '@progress/kendo-data-query',
        main: 'dist/cdn/js/kendo-data-query.js'
    },
    {
        module: '@progress/kendo-drawing',
        main: 'dist/es/main.js'
    },
    {
        module: '@progress/kendo-file-saver',
        main: 'dist/npm/main.js'
    },
    {
        module: '@progress/kendo-svg-icons',
        main: 'dist/index.js'
    }
]);
