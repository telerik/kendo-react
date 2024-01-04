/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { ChangeCell, ChangePercentCell, PriceCell, RatingCell, TickerCell, VolumeCell } from './custom-cells';
const VOLUME_INITIAL = 12;
export const KendoGrid = props => {
  const volumeRef = React.useRef(VOLUME_INITIAL);
  React.useEffect(() => {
    props.onDataReset(volumeRef.current);
    props.onStartLiveUpdate(props.refreshRate);
  }, [props.refreshRate]);
  return <>
      <Grid style={{
      height: '400px'

    }} data={props.data} rowHeight={63}  size={"small"}>
        <GridColumn field={'Ticker'} title="TICKER" cell={TickerCell} />
        <GridColumn field={'Price'} title="LAST" filter={'numeric'} cell={PriceCell} />
        <GridColumn field={'Change(%)'} title="CHG %" cell={ChangePercentCell} />
        <GridColumn field={'Change'} title="CHG" cell={ChangeCell} />
        <GridColumn field={'High(D)'} title="HIGH" cell={PriceCell} />
        <GridColumn field={'Low(D)'} title="LOW" cell={PriceCell} />
        <GridColumn field={'Volume'} title="VOL" cell={VolumeCell} />
        <GridColumn title="RATING" format={'{0:c4}'} cell={RatingCell} />
      </Grid>
    </>;
};