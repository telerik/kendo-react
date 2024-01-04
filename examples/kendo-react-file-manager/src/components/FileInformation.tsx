import { useInternationalization } from '@progress/kendo-react-intl';
import { convertDateFormat, getName, formatBytes } from '../helpers/helperMethods';
import { DataModel } from '../interfaces/FileManagerModels';
import { SvgIcon } from '@progress/kendo-react-common';
import { fileIcon } from '@progress/kendo-svg-icons';

export const FileInformation = (props) => {
  return (
    props.data
      ? typeof props.data === 'number' ? MultipleSelectionRendering(props.data) : FileSelectionRendering(props.data)
      : NoDataRendering());
}

const NoDataRendering = () => {
  return (
    <div className="k-filemanager-preview" style={{ width: '100%', border: 0 }}>
      <div className="k-file-info">
        <span className="k-file-preview">
          <span className="k-file-icon k-icon k-icon k-i-none">
          </span>
        </span>
        <span className="k-file-name k-no-file-selected">No File Selected</span>
      </div>
    </div>
  )
}

const FileSelectionRendering = (item: DataModel) => {
  const intl = useInternationalization();
  const dateCreated: String = convertDateFormat(item.dateCreated ? item.dateCreated : null, intl);
  const dateModified: String = convertDateFormat(item.dateModified ? item.dateModified : null, intl);
  const { svgIcon }  = item.icon!;
  
  return (
    <div className="k-filemanager-preview" style={{ width: '100%', border: 0 }}>
      <div className="k-file-info">
        <span className="k-file-preview">
          <SvgIcon icon={svgIcon} size='xxxlarge'/>
        </span>
        <span className="k-file-name k-single-file-selected">{item.path ? getName(item.path) : ''}</span>
        <dl className="k-file-meta">
          <dt className="k-file-meta-label">Type:  </dt>
          <dd className={"k-file-meta-value k-file-type"}> {item.icon ? item.icon.type : ''}</dd>
          <dd className="k-line-break"></dd>
          <dt className="k-file-meta-label">Size:  </dt>
          <dd className="k-file-meta-value k-file-size"> {item.size ? formatBytes(item.size) : ''}</dd>
          <dd className="k-line-break"></dd>
          <dt className="k-file-meta-label">Date Created:  </dt>
          <dd className="k-file-meta-value k-file-created"> {dateCreated ? dateCreated : ''}</dd>
          <dd className="k-line-break"></dd>
          <dt className="k-file-meta-label">Date Modified:  </dt>
          <dd className="k-file-meta-value k-file-modified"> {dateModified ? dateModified : ''}</dd>
          <dd className="k-line-break"></dd>
        </dl>
      </div>
    </div>
  );
}

const MultipleSelectionRendering = (length: number) => {
  return (
    <div className="k-filemanager-preview" style={{ width: '100%', border: 0 }}>
      <div className="k-file-info">
        <span className="k-file-preview" style={{ width: '100%', border: 0 }}>
          <SvgIcon icon={fileIcon} size='xxxlarge'/>
        </span>
        <span className="k-file-name k-multiple-files-selected">{length} items</span>
      </div>
    </div>
  );
}
