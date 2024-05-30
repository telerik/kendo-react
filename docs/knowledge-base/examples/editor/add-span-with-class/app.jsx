import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Editor, EditorTools, EditorUtils } from '@progress/kendo-react-editor';

const content = `
    <p>
        The KendoReact Editor allows your users to edit HTML in a familiar,
        user-friendly way.<br />The Editor provides the core HTML
        editing engine, which includes text formatting, hyperlinks, and lists.
        The component <strong>outputs identical HTML</strong> across all major browsers,
        follows accessibility standards, and provides API for content manipulation.
    </p>
`;

const InsertSpan = (props) => {
    const { view } = props;
    const nodeType = view && view.state.schema.nodes.text;
    const canInsert = view && EditorUtils.canInsert(view.state, nodeType);
    return (
        <Button
            onClick={() => {
                const state = view.state;
                const tr = state.tr;
                const markType = state.schema.marks.style;
                const mark = markType.create({ class: 'testSpan' });
                const content = state.schema.text('test');
                tr.addStoredMark(mark);

                // https://prosemirror.net/docs/ref/#state.Transaction.replaceSelectionWith
                tr.replaceSelectionWith(content, true);

                view.dispatch(tr);
            }}
            disabled={!canInsert}
            onMouseDown={e => e.preventDefault()}
            onPointerDown={e => e.preventDefault()}
            title="Insert span"

            // https://www.telerik.com/kendo-angular-ui/components/styling/icons/#toc-list-of-font-icons
            icon="comment"
        />
    );
};

class App extends React.Component {
    render() {
        return (
            <Editor
                tools={[
                    [ EditorTools.Bold, InsertSpan ]
                ]}
                contentStyle={{ height: 300 }}
                defaultContent={content}
            />
        );
    }
}

export default App;

