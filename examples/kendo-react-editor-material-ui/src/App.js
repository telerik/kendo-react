import React from 'react';
import './App.css';

import { EditorTools } from '@progress/kendo-react-editor';

import CustomEditor from '../src/components/CustomEditor';
import ViewHtml from '../src/components/CustomViewHtml';
import { customToolRendering  } from '../src/components/CustomRenderingTool';

const Bold = customToolRendering(EditorTools.Bold);
const Italic = customToolRendering(EditorTools.Italic);
const Underline = customToolRendering(EditorTools.Underline);
const Undo = customToolRendering(EditorTools.Undo);
const Redo = customToolRendering(EditorTools.Redo);

export default class App extends React.Component {
  render() {
    return (
      <CustomEditor
        defaultContent="Hello world"
        tools={[Bold, Italic, Underline, Undo, Redo, ViewHtml]}
      />
    );
  }
}
