import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { classNames } from '@progress/kendo-react-common';
import { Input } from '@progress/kendo-react-inputs';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { TaskBoardColumn, TaskBoardColumnProps, TaskBoardColumnHeaderProps } from '@progress/kendo-react-taskboard';
import { pencilIcon, plusIcon, xIcon } from '@progress/kendo-svg-icons';

const themeColor = {
    'todo': 'warning',
    'inProgress': 'info',
    'done': 'success'
};

const ColumnHeader = (props: TaskBoardColumnHeaderProps) => {
    const {
        edit,
        title,
        status
    } = props.column;

    return (
    <div className={'k-taskboard-column-header'}>
      <div className={'k-taskboard-column-header-text k-text-ellipsis'}>
        {edit ? <Input value={title} onChange={props.onTitleChange} onBlur={props.onColumnExitEdit} autoFocus={true} /> : <>
          <BadgeContainer style={{ left: '12px', top: '-4px' }}>
            <Badge themeColor={themeColor[status]} style={{ zIndex: 0 }}>
              {props.tasks && props.tasks.length}
            </Badge>
          </BadgeContainer>
          <span style={{ marginLeft: '30px' }}>{title}</span>
        </>}
      </div>
      <span className={'k-spacer'} />
      <div className={classNames('k-taskboard-column-header-actions', {
      'k-disabled': edit
    })}>
        <Button fillMode="flat" svgIcon={pencilIcon} title={props.editButtonTitle} onClick={props.onColumnEnterEdit} />
        <Button fillMode="flat" svgIcon={plusIcon} title={props.addButtonTitle} onClick={props.onShowAddCardDialog} />
        <Button fillMode="flat" svgIcon={xIcon} title={props.closeButtonTitle} onClick={props.onColumnDelete} />
      </div>
    </div>
    );
};

export const Column = (props: TaskBoardColumnProps) => {
    return <TaskBoardColumn {...props} header={ColumnHeader} />;
};
