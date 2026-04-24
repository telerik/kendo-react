import * as React from 'react';

import { DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { SchedulerFooter, SchedulerFooterProps } from '@progress/kendo-react-scheduler';
import { ToolbarItem, ToolbarSeparator, ToolbarSpacer } from '@progress/kendo-react-buttons';

import { SchedulerConfigContext } from './app';
import { ToolbarDropdown } from './toolbar-dropdown'

export const CustomFooter = (props: SchedulerFooterProps) => {
    const [slotDivision, setSlotDivision] = React.useContext(SchedulerConfigContext).slotDivision;
    const [slotDuration, setSlotDuration] = React.useContext(SchedulerConfigContext).slotDuration;

    const handleDivisionChange = React.useCallback(
        (event: DropDownListChangeEvent) => { setSlotDivision(event.target.value); },
        [setSlotDivision]
    )

    const handleDurationChange = React.useCallback(
        (event: DropDownListChangeEvent) => { setSlotDuration(event.target.value); },
        [setSlotDuration]
    );

    return (
      <SchedulerFooter>
        {props.children}
        <ToolbarSpacer />
        <ToolbarItem>
          <ToolbarDropdown
            text="Slot Division"
            value={slotDivision}
            data={[1, 2, 3, 4]}
            className={'k-toolbar-dropdown'}
            popupSettings={{popupClass: 'k-toolbar-popup'}}
            onChange={handleDivisionChange}
                />
        </ToolbarItem>
        <ToolbarSeparator />
        <ToolbarItem>
          <ToolbarDropdown
            text="Slot Duration"
            value={slotDuration}
            data={[15, 30, 45, 60]}
            className={'k-toolbar-dropdown'}
            popupSettings={{popupClass: 'k-toolbar-popup'}}
            onChange={handleDurationChange}
                />
        </ToolbarItem>
      </SchedulerFooter>
    )
}
