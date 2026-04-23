import * as React from 'react';

import { EditorTools } from '@progress/kendo-react-editor';
import { customToolRendering, customToolRenderingWithDialog } from './customToolRendering';
import { EditorCustom } from './EditorCustom';

const Bold = customToolRendering(EditorTools.Bold);
const Italic = customToolRendering(EditorTools.Italic);
const Underline = customToolRendering(EditorTools.Underline);
const Link = customToolRenderingWithDialog(EditorTools.Link);

const App = () => {
    return <EditorCustom defaultContent="Hello world" tools={[[Bold, Italic, Underline], [Link]]} />;
};

export default App;
