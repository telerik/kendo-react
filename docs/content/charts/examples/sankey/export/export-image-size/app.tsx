import * as React from 'react';
import { Sankey, SankeyHandle } from '@progress/kendo-react-charts';
import { Button } from '@progress/kendo-react-buttons';
import { exportImage } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';
import { data } from './data';

const App: React.FC = () => {
    const sankey = React.useRef<SankeyHandle>(null);

    const onImageExport = React.useCallback(() => {
        exportImage(sankey.current!.exportVisual(), {
            width: 1200,
            height: 800
        }).then(function (result) {
            saveAs(result, 'sankey-large.png');
        });
    }, []);

    return (
        <>
            <Button onClick={onImageExport}>Export to Image</Button>
            <Sankey
                ref={sankey}
                style={{ maxWidth: 700, height: 250, margin: 'auto' }}
                data={data}
                links={{
                    colorType: 'source'
                }}
            />
        </>
    );
};

export default App;
