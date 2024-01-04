import { ItemRenderProps, TreeView, TreeViewExpandChangeEvent, TreeViewItemClickEvent } from '@progress/kendo-react-treeview'
import { getName } from '../helpers/helperMethods';
import { DataModel } from '../interfaces/FileManagerModels';

export const FolderTree = (props) => {
  const handleEdit = (event: React.ChangeEvent<HTMLInputElement>, item: DataModel) => {
    props.onItemEdit({
      item,
      event
    });
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>, item: DataModel) => {
    props.onItemBlur({
      item,
      event
    });
  };

  const handleExpandChange = (event: TreeViewExpandChangeEvent) => {
    props.onItemClick({
      item: event.item,
      event
    });
  };

  const handleItemClick = (event: TreeViewItemClickEvent) => {
    if (event.item) {
      props.onItemClick({
        item: event.item,
        event
      });
    }
  };

  const handleContextMenu = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, item: DataModel) => {
    event.preventDefault();
    props.onContextMenu({
      tree: true,
      dataItem: item,
      event
    });
  };

  const TreeViewItem = (props: ItemRenderProps) => {
    if (props.item.edit) {
      return (
        <span>
          <input className='k-textbox'
            autoFocus
            value={props.item.path}
            onChange={(e) => handleEdit(e, props.item)}
            onBlur={(e) => handleBlur(e, props.item)} />
        </span>
      );
    }
    const name = getName(props.item.path);
    return (
      <span onContextMenu={(event) => handleContextMenu(event, props.item)}>{name}</span>
    );
  };

  return (
    <TreeView
      data={props.data}
      item={TreeViewItem}
      className="k-filemanager-treeview"
      textField="path"
      expandIcons={true}
      onExpandChange={handleExpandChange}
      onItemClick={handleItemClick}
    />
  );
}
