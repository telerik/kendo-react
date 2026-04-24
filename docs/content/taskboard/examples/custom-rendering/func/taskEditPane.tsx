import * as React from 'react';

import { DropDownList, ListItemProps } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { FieldWrapper } from '@progress/kendo-react-form';
import { TaskBoardTaskEditPaneProps } from '@progress/kendo-react-taskboard';
import { xIcon } from '@progress/kendo-svg-icons';

const itemRender = (
    li: React.ReactElement<HTMLLIElement>,
    itemProps: ListItemProps
) => {
    const color = itemProps.dataItem.color;
    const itemChildren = (
      <>
        <span style={{backgroundColor: color}}>&nbsp;</span>
        {li.props.children}
      </>
    );

    return React.cloneElement(li, li.props, itemChildren);
};

const valueRender = (
    element: React.ReactElement<HTMLSpanElement>,
    value: any
) => {

    if (!value) {
        return element;
    }

    const children =
      (<>
        <span style={{backgroundColor: value.color}}>&nbsp;</span>
        <span>&nbsp; {element.props.children as any}</span>
      </>);

    return React.cloneElement(element, { ...element.props }, children);
};

export const TaskEditPane = (props: TaskBoardTaskEditPaneProps) => {
    return (
      <div className='k-taskboard-pane k-taskboard-edit-pane'>
        <div className='k-taskboard-pane-header'>
          <div className='k-taskboard-pane-header-text'>{props.header}</div>
          <span className="k-spacer" />
          <div className="k-taskboard-pane-header-actions">
            <Button svgIcon={xIcon} fillMode="flat" onClick={props.onClose} />
          </div>
        </div>

        <div className="k-taskboard-pane-content">
          <div
            role="form"
            data-role="form"
            className="k-form"
            >
            <FieldWrapper>
              <Label editorId={'title'}>
                {props.titleLabel}
              </Label>
              <Input
                id={'title'}
                onChange={props.onTitleChange}
                value={props.title}
                title={props.titleInputTitle}
              />
            </FieldWrapper>

            <FieldWrapper>
              <Label editorId={'description'}>
                {props.descriptionLabel}
              </Label>
              <Input
                id={'description'}
                onChange={props.onDescriptionChange}
                value={props.description}
                title={props.descriptionInputTitle}
              />
            </FieldWrapper>

            <FieldWrapper>
              <Label editorId={'priority'}>
                {props.priorityLabel}
              </Label>
              <DropDownList
                id={'priority'}
                data={props.priorities}
                value={props.priority}
                onChange={props.onPriorityChange}
                itemRender={itemRender}
                valueRender={valueRender}
                textField="priority"
                dataItemKey="priority"
                title={props.priorityDropDownTitle}
              />
            </FieldWrapper>
          </div>
        </div>

        <div className="k-taskboard-pane-actions k-actions k-hstack k-justify-content-end">
          <Button onClick={props.onClose}>
            {props.cancelButton}
          </Button>
          <Button
            themeColor={'primary'}
            onClick={props.onSave}
            disabled={!props.title || !props.description}
          >
            {props.saveButton}
          </Button>
        </div>
      </div>
    );
};
