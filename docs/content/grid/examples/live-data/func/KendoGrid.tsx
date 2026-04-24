import * as React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

import { ChangeCell, ChangePercentCell, PriceCell, RatingCell, TickerCell, VolumeCell } from './custom-cells';

const VOLUME_INITIAL = 12;

export const KendoGrid = (props) => {
    const volumeRef = React.useRef(VOLUME_INITIAL);

    React.useEffect(() => {
        props.onDataReset(volumeRef.current);
        props.onStartLiveUpdate(props.refreshRate);
    }, [props.refreshRate]);

    return (
        <>
            <Grid
                style={{
                    height: '450px'
                }}
                data={props.data}
                rowHeight={60}
            >
                <GridColumn field={'Ticker'} title="TICKER" cells={{ data: TickerCell }} />
                <GridColumn field={'Price'} title="LAST" filter={'numeric'} cells={{ data: PriceCell }} />
                <GridColumn field={'Change(%)'} title="CHG %" cells={{ data: ChangePercentCell }} />
                <GridColumn field={'Change'} title="CHG" cells={{ data: ChangeCell }} />
                <GridColumn field={'High(D)'} title="HIGH" cells={{ data: PriceCell }} />
                <GridColumn field={'Low(D)'} title="LOW" cells={{ data: PriceCell }} />
                <GridColumn field={'Volume'} title="VOL" cells={{ data: VolumeCell }} />
                <GridColumn title="RATING" format={'{0:c4}'} cells={{ data: RatingCell }} />
            </Grid>
        </>
    );
};
