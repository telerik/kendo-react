window.moduleDirectives = (window.moduleDirectives || []).concat([
    {
        module: '@progress/kendo-react-editor',
        main: 'dist/cdn/js/kendo-react-editor.js',
        match: '(Editor|EditorTools|EditorUtils|ProseMirror)',
        import: 'Editor, EditorTools, EditorUtils, ProseMirror'
    },
    {
        module: '@progress/kendo-react-intl',
        main: 'dist/cdn/js/kendo-react-intl.js'
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
        module: '@progress/kendo-react-dialogs',
        main: 'dist/cdn/js/kendo-react-dialogs.js'
    },
    {
        module: '@progress/kendo-react-dropdowns',
        main: 'dist/cdn/js/kendo-react-dropdowns.js'
    },
    {
        module: '@progress/kendo-drawing',
        main: 'dist/cdn/js/kendo-drawing.js'
    },
    {
        module: '@progress/kendo-react-inputs',
        main: 'dist/cdn/js/kendo-react-inputs.js'
    },
    {
        module: '@progress/kendo-react-layout',
        main: 'dist/cdn/js/kendo-react-layout.js'
    },
    {
        module: '@progress/kendo-react-upload',
        main: 'dist/cdn/js/kendo-react-upload.js'
    },
    {
        module: '@progress/kendo-svg-icons',
        main: 'dist/index.js'
    }
]);
