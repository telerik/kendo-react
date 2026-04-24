import * as React from 'react';

import { Spreadsheet } from '@progress/kendo-react-spreadsheet';
import { Button } from '@progress/kendo-react-buttons';
import { ExternalDropZone, Upload } from '@progress/kendo-react-upload';
import { data } from './basic-data';

const SprеadsheetContainer = () => {
    const spreadsheet = React.useRef(null);
    const uploadRef = React.createRef();

    const loadFromJSON = () => {
        if (spreadsheet.current) {
            spreadsheet.current.fromJSON({
                sheets: data
            });
        }
    };

    const onAdd = (props) => {
        const file = props.affectedFiles[0].getRawFile();
        if (spreadsheet.current) {
            spreadsheet.current.fromFile(file);
        }
    };
    return (
        <>
            <Button type="button" id="fromJSONBtn" onClick={loadFromJSON}>
                Load from JSON
            </Button>
            <ExternalDropZone uploadRef={uploadRef} style={{ height: '200px' }} />
            <Upload
                ref={uploadRef}
                batch={false}
                multiple={true}
                defaultFiles={[]}
                withCredentials={false}
                saveUrl={'https://demos.telerik.com/service/v2/odata/upload/save'}
                removeUrl={'https://demos.telerik.com/service/v2/odata/upload/remove'}
                onAdd={onAdd}
            />
            <Spreadsheet
                ref={spreadsheet}
                style={{
                    width: '100%',
                    height: 350
                }}
            />
        </>
    );
};

export default SprеadsheetContainer;
