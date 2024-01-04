import { UploadFileInfo } from '@progress/kendo-react-upload';
import { BreadcrumbDataModel, DataModel, GridViewBtnGroup, SortingBtnGroup } from '../interfaces/FileManagerModels';
import {
  filePdfIcon,
  filePptIcon,
  fileDataIcon,
  fileImageIcon,
  fileTxtIcon,
  fileAudioIcon,
  folderIcon,
  fileIcon
} from '@progress/kendo-svg-icons';


export const convertExtensionToIcon = (item: string | null | undefined) => {
  if (!item) { return null; }
  const extension: string | null = item.split('.').length > 1 ? item.split('.')[1] : null;

  switch (extension ? extension.toLowerCase() : null) {
    case 'pdf':
      return {
        svgIcon: filePdfIcon,
        type: 'Data'
      };
    case 'ppt': case 'pptx':
      return {
        svgIcon: filePptIcon,
        type: 'Data'
      };
    case 'xlsx': case 'xls':
      return {
        svgIcon: fileDataIcon,
        type: 'Data'
      };
    case 'jpg': case 'png':
      return {
        svgIcon: fileImageIcon,
        type: 'Image'
      };
    case 'txt': case 'doc': case 'docx':
      return {
        svgIcon: fileTxtIcon,
        type: 'Text'
      };
    case 'mp3': case 'mp4': case 'mp':
      return {
        svgIcon: fileAudioIcon,
        type: 'Text'
      };
    case null:
      return {
        svgIcon: folderIcon,
        type: 'Folder'
      };
    default:
      return {
        svgIcon: fileIcon,
        type: 'Folder'
      };
  };
};

export const getName = (path: string | undefined) => {
  if (!path) { return path; }
  return path.split('/').pop();
}

export const getFolderPath = (path: string | undefined) => {
  if (!path) { return path; }
  const pathArr = path.split('/');
  pathArr.pop();
  return pathArr.join('/');
}

export const convertDateFormat = (date: Date | null, intl) => {
  return date ? intl.formatDate(date, 'd.MM.y  h:mm:ss aa  EEEE') : date;
};

const mapData = (data, intl) => {
  if (!data) { return []; }

  return data.map(item => {
    const name = getName(item.path);
    return {
      path: item.path,
      dateCreated: convertDateFormat(item.dateCreated || null, intl),
      dateModified: convertDateFormat(item.dateModified || null, intl),
      size: item.size,
      icon: convertExtensionToIcon(name),
      items: item.items && item.items.length ? mapData(item.items, intl) : []
    }
  });
};

export const formatData = (data: DataModel[], intl) => {
  return mapData(data, intl);
};

export const getFolderTree = (data: DataModel[], selectedItem: DataModel | null = null) => {
  if (!data) { return data; }
  const newItems: DataModel[] = [];

  for (let index = 0; index < data.length; index++) {
    const currentItem = { ...data[index] };
    if (currentItem.path && !currentItem.path.includes('.')) {
      if (currentItem.items && currentItem.items.length) {
        currentItem.items = getFolderTree(currentItem.items, selectedItem);
      }
      newItems.push({
        ...currentItem,
        selected: selectedItem ? selectedItem.path === currentItem.path : false,
      });
    }
  }
  return newItems;
};

export const searchTreeItem = (data, selectedItem: DataModel | null) => {
  if (!selectedItem) { return data; }

  for (let index = 0; index < data.length; index++) {
    const currentItem = data[index];
    if (currentItem.path === selectedItem.path) {
      return currentItem;
    }
    if (currentItem.items && currentItem.items.length) {
      const foundItem = searchTreeItem(currentItem.items, selectedItem);
      if (foundItem) {
        return foundItem;
      }
    }
  }
};

export const addDataItem = (data: DataModel[], selectedItem: DataModel | null = null, files: UploadFileInfo[], intl) => {
  if (!selectedItem) {
    files.forEach(file => {
      data.push({
        path: `Home/${file.name}`,
        dateCreated: convertDateFormat(new Date(), intl),
        dateModified: convertDateFormat(new Date(), intl),
        size: file.size,
        icon: convertExtensionToIcon(file.extension)
      });
    });

    return data;
  }

  if (!data) { return data; }

  return data.map((item) => {
    const currentItem = { ...item };

    if (currentItem.path === selectedItem.path) {
      files.forEach(file => {

        if (!currentItem.items) {
          currentItem.items = [];
        }

        currentItem.items.push({
          path: `${currentItem.path}/${file.name}`,
          dateCreated: convertDateFormat(new Date(), intl),
          dateModified: convertDateFormat(new Date(), intl),
          size: file.size,
          icon: convertExtensionToIcon(file.extension)
        });

      });

    } else if (currentItem.items && currentItem.items.length) {
      currentItem.items = addDataItem(currentItem.items, selectedItem, files, intl);
    }

    return currentItem;
  });
};

let FOLDER_NAME_COUNTER = 0;
export const addFolder = (data: DataModel[], selectedItem: DataModel | null, intl) => {
  if (!selectedItem) {
    const folderName = FOLDER_NAME_COUNTER ? `New Folder (${FOLDER_NAME_COUNTER})` : 'New Folder';
    FOLDER_NAME_COUNTER++;

    data.push({
      path: `Home/${folderName}`,
      dateCreated: convertDateFormat(new Date(), intl),
      dateModified: convertDateFormat(new Date(), intl),
      size: 124,
      icon: convertExtensionToIcon(folderName)
    });

    return data.map(item => item);
  }

  if (!data) { return data; }

  return data.map(item => {
    const currentItem = { ...item };

    if (currentItem.path === selectedItem?.path) {
      const folderName = FOLDER_NAME_COUNTER ? `New Folder (${FOLDER_NAME_COUNTER})` : 'New Folder';
      FOLDER_NAME_COUNTER++;

      if (!currentItem.items) {
        currentItem.items = [];
      }

      currentItem.items.push({
        path: `${currentItem.path}/${folderName}`,
        dateCreated: convertDateFormat(new Date(), intl),
        dateModified: convertDateFormat(new Date(), intl),
        size: 124,
        icon: convertExtensionToIcon(folderName)
      });

    } else if (currentItem.items && currentItem.items.length) {
      addFolder(currentItem.items, selectedItem, intl);
    }

    return currentItem;
  });
};

export const toggleViewBtnGroup = (btnGroupState: GridViewBtnGroup, view: string) => {
  if (!btnGroupState.listView && view !== 'grid') {
    return { gridView: false, listView: true };
  }
  if (!btnGroupState.gridView && view !== 'list') {
    return { gridView: true, listView: false };
  }
  return btnGroupState;
};

export const toggleSortBtnGroup = (btnGroupState: SortingBtnGroup, curState: string) => {
  if (!btnGroupState.sortDesc && curState !== 'asc') {
    return { sortAsc: false, sortDesc: true };
  }
  if (!btnGroupState.sortAsc && curState !== 'desc') {
    return { sortAsc: true, sortDesc: false };
  }
  return btnGroupState;
};

export const formatBytes = (bytes: number, decimals: number = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k: number = 1024;
  const dm: number = decimals < 0 ? 0 : decimals;
  const sizes: string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i: number = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const editDataItem = (data, selectedItem: DataModel, newPath: string) => {
  if (!data) { return data; }
  const newItems: DataModel[] = [];

  for (let index = 0; index < data.length; index++) {
    const currentItem = { ...data[index] };
    if (currentItem.path === selectedItem.path) {
      currentItem.path = newPath;
      currentItem.dateModified = new Date();
    }

    if (currentItem.items) {
      currentItem.items = editDataItem(currentItem.items, selectedItem, newPath);
    }
    newItems.push(currentItem);
  }
  return newItems;
};

export const removeDataItem = (data, selectedItem: DataModel) => {
  if (!data) { return data; }
  const newItems: DataModel[] = [];

  for (let index = 0; index < data.length; index++) {
    const currentItem = { ...data[index] };
    if (currentItem.path !== selectedItem.path) {
      if (currentItem.items && currentItem.items.length) {
        currentItem.items = removeDataItem(currentItem.items, selectedItem);
      }

      newItems.push(currentItem);
    }
  }
  return newItems;
};

export const convertToBreadcrumbData = (selectedItem: DataModel | null) => {
  let path: BreadcrumbDataModel[] = [];

  if (!selectedItem) {
    return [{
      id: 'Home',
      name: 'Home',
    }];
  }

  if (selectedItem.path) {
    const items = selectedItem.path.split('/');
    let curItemPath: string[] = [];

    for (let i = 0; i < items.length; i++) {
      curItemPath.push(items[i])

      if (items[i] === 'Home') {
        path.push({
          id: 'Home',
          name: items[i],
        });
      } else {
        path.push({
          id: curItemPath.join('/'),
          name: items[i],
        });
      }
    }
  }
  return path;
};
