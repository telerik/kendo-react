window.moduleDirectives = (window.moduleDirectives || []).concat([
    {
        module: '@progress/kendo-react-map',
        main: 'dist/cdn/js/kendo-react-map.js'
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
        module: '@progress/kendo-drawing',
        main: 'dist/es/main.js'
    }
]);
