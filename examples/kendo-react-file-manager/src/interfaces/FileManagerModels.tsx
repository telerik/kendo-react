import { SplitButtonItemClickEvent } from "@progress/kendo-react-buttons";
import { TableSelectionChangeEvent } from "@progress/kendo-react-data-tools";
import { GridSelectionChangeEvent } from "@progress/kendo-react-grid";
import { SwitchChangeEvent } from "@progress/kendo-react-inputs";
import { Offset } from "@progress/kendo-react-popup";
import { UploadFileInfo, UploadOnAddEvent } from "@progress/kendo-react-upload";
import { SVGIcon } from "@progress/kendo-svg-icons";

export interface DataModel {
    path?: string;
    expanded?: boolean;
    selected?: boolean;
    size?: number;
    dateCreated?: Date | null;
    dateModified?: Date | null;
    icon?: IconType | null;
    items?: DataModel[];
    edit?: boolean;
    length?: number;
};

export interface IconType {
    svgIcon?: SVGIcon;
    iconClass?: string;
    type?: string;
};

export interface PanesModel {
    size?: string;
    min?: string;
    collapsible?: boolean;
};

export interface BreadcrumbDataModel {
    id?: string;
    name?: string;
    icon?: React.ReactNode;
    iconClass?: string;
    items?: DataModel[];
};
export interface SplitBtnItems {
    text?: string;
    value?: string;
};
export interface GridViewBtnGroup {
    gridView: boolean;
    listView: boolean;
};

export interface SortingBtnGroup {
    sortAsc: boolean;
    sortDesc: boolean;
};

export interface SelectedItemType {
    [id: string]: boolean | number[];
};

export interface SelectionChangeEvent extends GridSelectionChangeEvent {
    event: TableSelectionChangeEvent<any>;
    item?: DataModel;
    type?: string;
    pressedKey?: string;
};

export interface UploadAddEvent extends UploadOnAddEvent {
    event?: UploadOnAddEvent;
    files?: Array<UploadFileInfo>;
};

export interface ViewChangeEvent extends React.MouseEvent<HTMLButtonElement, MouseEvent> {
    viewValue: {
        gridView?: string;
        listView?: string;
    };
};

export interface SortChangeEvent {
    event?: SplitButtonItemClickEvent;
    direction?: 'asc' | 'desc';
    item?: any;
    sort?: any;
};

export interface AppSwitchChangeEvent extends SwitchChangeEvent {
    event: SwitchChangeEvent;
};

export interface ContextMenuEvent {
    event: React.MouseEvent<HTMLDivElement | HTMLSpanElement, MouseEvent>;
    dataItem: DataModel;
    itemId?: string;
    tree?: boolean;
};

export interface ContextMenuProps {
    onContextMenuCLick: (e) => void;
    offset?: Offset;
};
