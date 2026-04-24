import React from 'react';
import { EditorUtils } from '@progress/kendo-react-editor';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import type { EditorView } from '@progress/kendo-editor-common';

type ToolProps = { view?: EditorView | null };

type Shortcode = { text: string; code: string; id: number };

const shortcodes: Shortcode[] = [
    { text: 'Name', code: '{{name}}', id: 1 },
    { text: 'Initials', code: '{{initials}}', id: 2 },
    { text: 'Address (Street)', code: '{{address_street}}', id: 3 },
    { text: 'Address (City)', code: '{{address_city}}', id: 4 },
    { text: 'Address (State)', code: '{{address_state}}', id: 5 },
    { text: 'Address (Zip)', code: '{{address_zip}}', id: 6 },
    { text: 'Email', code: '{{email}}', id: 7 },
    { text: 'Phone', code: '{{phone}}', id: 8 }
];

const defaultItem: Shortcode = { text: 'Insert Shortcode', code: '', id: 0 };

export const InsertShortcodeTool = (props: ToolProps) => {
    const { view } = props;

    const handleChange = React.useCallback(
        (event: DropDownListChangeEvent) => {
            const item = event.value as Shortcode | null;
            if (!item || !item.code || !view) return;

            const { state, dispatch } = view;
            const { schema, selection } = state;

            const nonEditable = (schema.nodes as any)?.nonEditable;

            if (nonEditable && typeof nonEditable.createAndFill === 'function') {
                const node = nonEditable.createAndFill({ class: 'shortcode' }, schema.text(item.code));
                if (node) {
                    EditorUtils.insertNode(view, node, true);
                } else {
                    dispatch(state.tr.insertText(item.code, selection.from, selection.to));
                }
            } else {
                dispatch(state.tr.insertText(item.code, selection.from, selection.to));
            }

            view.focus();
        },
        [view]
    );

    const disabled = !view;

    return (
        <DropDownList
            data={shortcodes}
            textField="text"
            dataItemKey="id"
            defaultItem={defaultItem}
            value={defaultItem}
            disabled={disabled}
            onChange={handleChange}
            style={{ userSelect: 'none' }}
        />
    );
};
