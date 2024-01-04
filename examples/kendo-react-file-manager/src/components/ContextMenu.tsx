
import { Menu, MenuItem, MenuSelectEvent } from '@progress/kendo-react-layout';
import { Popup } from '@progress/kendo-react-popup';
import { ContextMenuProps } from '../interfaces/FileManagerModels';
import { editToolsIcon, trashIcon } from "@progress/kendo-svg-icons";

export const ContextMenu = (props: ContextMenuProps) => {
  const handleSelection = (event:  MenuSelectEvent) => {
    props.onContextMenuCLick(event);
  };

  return (
    <Popup show={true} offset={props.offset}>
      <Menu vertical={true} style={{ display: 'inline-block' }} onSelect={handleSelection}>
        <MenuItem text="Rename" svgIcon={editToolsIcon} />
        <MenuItem text="Delete" svgIcon={trashIcon} />
      </Menu>
    </Popup>
  );
}
