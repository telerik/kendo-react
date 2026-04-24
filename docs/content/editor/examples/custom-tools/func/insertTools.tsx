import * as React from 'react';
import { EditorUtils } from '@progress/kendo-react-editor';
import { Button } from '@progress/kendo-react-buttons';
import { horizontalRuleIcon, imageIcon, changeManuallyIcon } from '@progress/kendo-svg-icons';

const createInsertTool = (settings) => (props) => {
    const { view } = props;
    const nodeType = view && view.state.schema.nodes[settings.nodeType];
    const canInsert = view && EditorUtils.canInsert(view.state, nodeType);
    return (
        <Button
            onClick={() => EditorUtils.insertNode(view, nodeType.createAndFill(settings.attrs))}
            disabled={!canInsert}
            onMouseDown={(e) => e.preventDefault()}
            onPointerDown={(e) => e.preventDefault()}
            {...settings.props}
        />
    );
};

const createInsertTextTool = (settings) => (props) => {
    const { view } = props;
    const nodeType = view && view.state.schema.nodes[settings.nodeType];
    const canInsert = view && EditorUtils.canInsert(view.state, nodeType);
    return (
        <Button
            onClick={() => EditorUtils.insertNode(view, view.state.schema.text(settings.text))}
            disabled={!canInsert}
            onMouseDown={(e) => e.preventDefault()}
            onPointerDown={(e) => e.preventDefault()}
            {...settings.props}
        />
    );
};

const InsertHrTool = createInsertTool({
    nodeType: 'horizontal_rule',
    props: {
        svgIcon: horizontalRuleIcon,
        title: 'Insert Horizontal Line'
    }
});

const InsertImageTool = createInsertTool({
    nodeType: 'image',
    attrs: {
        src: 'data:image/png;base64,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',
        title: 'KendoReact'
    },
    props: {
        svgIcon: imageIcon,
        title: 'Insert Image'
    }
});

const InsertTextTool = createInsertTextTool({
    nodeType: 'text',
    text: 'Sample text',
    props: {
        svgIcon: changeManuallyIcon,
        title: 'Insert Text'
    }
});

export { InsertHrTool, InsertImageTool, InsertTextTool };
