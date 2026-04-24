import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { CardHeader, Menu } from '@progress/kendo-react-layout';
import { Popup } from '@progress/kendo-react-popup';
import { TaskBoardCardHeaderProps } from '@progress/kendo-react-taskboard';
import { moreVerticalIcon } from '@progress/kendo-svg-icons';

export const TaskBoardCardHeader = (props: TaskBoardCardHeaderProps) => {
    const buttonRef = React.useRef<any>(undefined);
    return (
      <CardHeader className="k-hbox">
        <span
          className={'k-card-title k-link'}
          onClick={props.onShowPreviewPane}
        >
          {props.title}
        </span>
        <span className={'k-spacer'} />
        <div className='k-card-header-actions'>
          <Button
            fillMode="flat"
            svgIcon={moreVerticalIcon}
            ref={buttonRef}
            onClick={props.showMenu ? props.onHideMenu : props.onShowMenu}
            onBlur={props.onMenuButtonBlur}
          />
          <Popup anchor={buttonRef.current && buttonRef.current.element} show={props.showMenu} ref={props.popupRef}>
            <Menu vertical={true} onSelect={props.onMenuItemSelect} items={props.menuItems} className={'k-context-menu'} />
          </Popup>
        </div>
      </CardHeader>
    );
};
