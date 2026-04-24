import * as React from 'react';

import { classNames } from '@progress/kendo-react-common';

import { TaskBoardColumnProps } from '@progress/kendo-react-taskboard';
import { ConfirmDialog } from './confirmDialog';
import { TASKBOARD_COLUMN, TASKBOARD_ITEM_ID, TASKBOARD_ITEM_TYPE } from './constants';
import { TaskEditPane } from './taskEditPane';
import { ColumnBody } from './columnBody';
import { ColumnHeader } from './columnHeader';

export const Column = (props: TaskBoardColumnProps) => {
    return (
      <>
        <div
          ref={props.elementRef}
          style={props.style}
          className={classNames('k-taskboard-column', {
            'k-taskboard-column-edit': props.column.edit
          })}
          tabIndex={props.tabIndex}
          {...{
            [TASKBOARD_ITEM_TYPE]: TASKBOARD_COLUMN,
            [TASKBOARD_ITEM_ID]: props.column.id
          }}
        >
          <ColumnHeader
            column={props.column}
            tasks={props.tasks}
            onTitleChange={props.onTitleChange}
            onColumnExitEdit={props.onColumnExitEdit}
            editButtonTitle={props.editButtonTitle}
            onColumnEnterEdit={props.onColumnEnterEdit}
            addButtonTitle={props.addButtonTitle}
            onShowAddCardDialog={props.onShowAddCardDialog}
            closeButtonTitle={props.closeButtonTitle}
            onColumnDelete={props.onColumnDelete}
          />
          <ColumnBody>
            {props.children}
          </ColumnBody>
        </div>
        {props.showAddCard && (
        <props.addCardDialog
          onClose={props.onCloseDialog}
          onSave={props.onTaskCreate}
          priorities={props.priorities}
          editPane={TaskEditPane}
        />)}
        {props.showEditCard && props.editedTask && (
        <props.editCardDialog
          onClose={props.onCloseDialog}
          onSave={props.onTaskEdit}
          task={props.editedTask}
          priorities={props.priorities}
          editPane={TaskEditPane}
        />)}
        {props.showColumnConfirmDelete && (
        <ConfirmDialog
          onClose={props.onColumnDelete}
          onConfirm={props.onColumnConfirmDelete}
          dialogMessage={props.confirmDialogMessage}
          dialogTitle={props.confirmDialogTitle}
          dialogConfirmButton={props.confirmDialogConfirmButton}
          dialogCancelButton={props.confirmDialogCancelButton}
         />
        )}
      </>
    );
};
