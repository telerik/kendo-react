import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { TaskBoardPreviewDialogProps } from '@progress/kendo-react-taskboard';
import { xIcon } from '@progress/kendo-svg-icons';

export const PreviewDialog = (props: TaskBoardPreviewDialogProps) => {
    return (
      <div className="k-taskboard-pane k-taskboard-preview-pane">
        <div className='k-taskboard-pane-header'>
          <div className='k-taskboard-pane-header-text'>{props.title}</div>
          <span className="k-spacer" />
          <div className="k-taskboard-pane-header-actions">
            <Button svgIcon={xIcon} fillMode="flat" onClick={props.onClosePreviewPane} />
          </div>
        </div>

        <div className="k-taskboard-pane-content">
          <p>{props.description}</p>
          <p>
            {props.priorityLabel}
            &nbsp;
            <span style={{backgroundColor: props.priority.color}}>&nbsp;</span>
            &nbsp;
            {props.priority.priority}
          </p>
        </div>

        <div className="k-taskboard-pane-actions k-actions k-hstack k-justify-content-end">
          <Button onClick={props.onTaskDelete}>
            {props.delete}
          </Button>
          <Button themeColor={'primary'} onClick={props.onTaskEdit}>
            {props.edit}
          </Button>
        </div>
      </div>
    );
};
