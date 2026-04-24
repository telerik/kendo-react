import * as React from 'react';
import { Editor } from '@progress/kendo-react-editor';
import { CustomFontSize, CustomFontFamily, CustomForeColor } from './tools';
import './styles.css';

const content: string = `<p>Some content with a list, paragraphs and a table.</p><ul><li>list item 1</li><li>list item 2</li></ul><p>a paragraph</p><table><tbody><tr><td><p>cell 1</p></td><td><p>cell 2</p></td><td><p>cell 3</p></td></tr><tr><td><p>cell 4</p></td><td><p>cell 5</p></td><td><p>cell 6</p></td></tr></tbody></table><p>another paragraph</p>`;

const App = () => {
    return (
        <Editor
            tools={[CustomFontSize, CustomFontFamily, CustomForeColor]}
            contentStyle={{
                height: 290
            }}
            defaultContent={content}
            defaultEditMode="div"
        />
    );
};
export default App;
