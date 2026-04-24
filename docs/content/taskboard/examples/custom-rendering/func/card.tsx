import * as React from 'react';

import { TaskBoardCardProps } from '@progress/kendo-react-taskboard';
import { Card } from '@progress/kendo-react-layout';
import { classNames } from '@progress/kendo-react-common';

import { TaskBoardCardHeader } from './cardHeader';
import { TaskBoardCardBody } from './cardBody';
import { ConfirmDialog } from './confirmDialog';
import { PreviewDialog } from './previewDialog';
import { TASKBOARD_ITEM_ID, TASKBOARD_ITEM_TYPE, TASKBOARD_TASK } from './constants';

export const TaskBoardCard = (props: TaskBoardCardProps) => {
    return (
      <>
        <Card
          key={String(props.task.id)}
          ref={props.elementRef}
          style={props.style}
          className={classNames('k-taskboard-card k-cursor-move k-taskboard-card-category', {
            'k-disabled': props.disabled
          })}
          {...{
              [TASKBOARD_ITEM_TYPE]: TASKBOARD_TASK,
              [TASKBOARD_ITEM_ID]: props.task.id,
              tabIndex: props.tabIndex
          }}
        >
          <TaskBoardCardHeader
            showMenu={props.showMenu}
            menuItems={props.menuItems}
            title={props.task.title}
            task={props.task}
            popupRef={props.popupRef}
            onShowPreviewPane={props.onShowPreviewPane}
            onShowMenu={props.onShowMenu}
            onHideMenu={props.onHideMenu}
            onMenuButtonBlur={props.onMenuButtonBlur}
            onMenuItemSelect={props.onMenuItemSelect}
        />
          <TaskBoardCardBody task={props.task}>
            {props.task.description}
          </TaskBoardCardBody>
        </Card>
        {props.showDeleteConfirm && (
        <ConfirmDialog
          onConfirm={props.onTaskDelete}
          onClose={props.onCloseConfirmDialog}
          dialogMessage={props.confirmDialogMessage}
          dialogTitle={props.confirmDialogTitle}
          dialogConfirmButton={props.confirmDialogConfirmButton}
          dialogCancelButton={props.confirmDialogCancelButton}
        />
        )}
        {props.showTaskPreviewPane && (
        <PreviewDialog
          title={props.task.title}
          description={props.task.description}
          priorityLabel={props.previewDialogPriorityLabel}
          delete={props.previewDialogDelete}
          edit={props.previewDialogEdit}
          onClosePreviewPane={props.onClosePreviewPane}
          onTaskDelete={props.onTaskDelete}
          onTaskEdit={props.onTaskEdit}
          priority={props.task.priority}
        />
        )}
      </>
    );
};

export { TaskBoardCard as Card };
