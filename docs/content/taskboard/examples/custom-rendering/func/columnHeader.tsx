import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';
import { classNames } from '@progress/kendo-react-common';
import { TaskBoardColumnHeaderProps } from '@progress/kendo-react-taskboard';
import { pencilIcon, plusIcon, xIcon } from '@progress/kendo-svg-icons';

export const ColumnHeader = (props: TaskBoardColumnHeaderProps) => {
    const { edit, title } = props.column;
    return (
      <div className={'k-taskboard-column-header'}>
        <div className={'k-taskboard-column-header-text k-text-ellipsis'}>
          {edit ? (
            <Input
              value={title}
              onChange={props.onTitleChange}
              onBlur={props.onColumnExitEdit}
              autoFocus={true}
            />
            ) : title}
        </div>
        <span className={'k-spacer'} />
        <div className={classNames('k-taskboard-column-header-actions', { 'k-disabled': edit })}>
          <Button
            fillMode="flat"
            svgIcon={pencilIcon}
            title={props.editButtonTitle}
            onClick={props.onColumnEnterEdit}
              />
          <Button
            fillMode="flat"
            svgIcon={plusIcon}
            title={props.addButtonTitle}
            onClick={props.onShowAddCardDialog}
              />
          <Button
            fillMode="flat"
            svgIcon={xIcon}
            title={props.closeButtonTitle}
            onClick={props.onColumnDelete}
              />
        </div>
      </div>
    );
};
