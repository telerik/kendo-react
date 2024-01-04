import { classNames, SvgIcon } from '@progress/kendo-react-common';
import { getName } from '../helpers/helperMethods';
import { DataModel } from './../interfaces/FileManagerModels';

export const ListView = (props) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, item: DataModel) => {
    props.onItemClick({
      dataItem: item,
      event: event
    });
  };

  const handleDoubleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, item: DataModel) => {
    props.onDoubleClick({
      dataItem: item,
      event: event
    });
  };

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, item: DataModel) => {
    event.preventDefault();
    props.onContextMenu({
      dataItem: item,
      event: event
    });
  };

  
  return (
    <div className="k-listview k-selectable k-filemanager-listview">
      <div className="k-listview-content k-d-flex k-flex-row k-flex-wrap">
        {props.data && 
          props.data.data.map((item: any, i: number) => {
            const name = getName(item.path);
            const { svgIcon } = item.icon;
      
            return (
                <div key={`${name}/${i}`} className={classNames("k-listview-item", { "k-selected": item.selected })}
                  onClick={event => handleClick(event, item)}
                  onDoubleClick={event => handleDoubleClick(event, item)}
                  onContextMenu={event => handleContextMenu(event, item)}
                >
                  <span className="k-file-preview">
                    <SvgIcon icon={svgIcon} size='xxxlarge'/>
                  </span>
                  <span className="k-file-name">{name}</span>
                </div>
            )
          })}
      </div>
    </div>
  );
}
