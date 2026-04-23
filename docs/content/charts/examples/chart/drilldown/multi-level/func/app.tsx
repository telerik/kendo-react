import * as React from 'react';

import {
    Chart,
    ChartBreadcrumb,
    ChartDrilldownState,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    DrilldownEvent,
    DrilldownSeriesFactoryProps,
    CrosshatchPattern,
    DrilldownStateChangeEvent
} from '@progress/kendo-react-charts';
import { vehiclesByMake, vehiclesByModel, vehiclesByQuarter } from './ch-vehicle-data';

const simulatedDelay = 500;

const useVehiclesByQuarterData = (model: string): any[] => {
    const [data, setData] = React.useState<any[]>([]);
    React.useEffect(() => {
        setTimeout(() => setData(vehiclesByQuarter[model]), simulatedDelay);
    }, [model]);

    return data;
};

const crosshairPattern: CrosshatchPattern = {
    type: 'verticalStripes',
    background: 'rgb(75, 96, 250)',
    width: 1.2,
    gap: 12
};

const useVehiclesByModelData = (make: string): any[] => {
    const [data, setData] = React.useState<any[]>([]);
    React.useEffect(() => {
        setTimeout(() => setData(vehiclesByModel[make]), simulatedDelay);
    }, [make]);

    return data;
};

const useVehiclesByMakeData = () => {
    const [data, setData] = React.useState<any[]>([]);
    React.useEffect(() => {
        setTimeout(() => setData(vehiclesByMake), simulatedDelay);
    }, []);

    return data;
};

const DrilldownByModelSeries = (props: DrilldownSeriesFactoryProps) => (
    <ChartSeriesItem
        name={`${props.drilldownValue} sales by Quarter`}
        data={useVehiclesByQuarterData(props.drilldownValue)}
        field="count"
        categoryField="period"
        {...props}
    />
);

const DrilldownByMakeSeries = (props: DrilldownSeriesFactoryProps) => (
    <ChartSeriesItem
        name={`${props.drilldownValue} EVs registered in 2022`}
        data={useVehiclesByModelData(props.drilldownValue)}
        field="count"
        categoryField="model"
        drilldownField="model"
        drilldownSeriesFactory={DrilldownByModelSeries}
        {...props}
    />
);

const App = () => {
    const vehicleData = useVehiclesByMakeData();
    const [drilldownState, setDrilldownState] = React.useState<ChartDrilldownState>();

    const handleDrilldown = (e: DrilldownEvent | DrilldownStateChangeEvent) => {
        setDrilldownState(e.nextState);
    };

    return (
        <div>
            <ChartBreadcrumb drilldownState={drilldownState} onDrilldownStateChange={handleDrilldown} />
            <Chart drilldownState={drilldownState} onDrilldown={handleDrilldown}>
                <ChartTitle text="EV Registrations" />
                <ChartSeries>
                    <ChartSeriesItem
                        type="column"
                        name="Battery EVs registered in 2022"
                        data={vehicleData}
                        field="count"
                        categoryField="company"
                        drilldownField="company"
                        drilldownSeriesFactory={DrilldownByMakeSeries}
                        color="rgb(148, 236, 255)"
                        pattern={crosshairPattern}
                        tooltip={{ visible: true }}
                    />
                </ChartSeries>
                <ChartLegend position="bottom" />
            </Chart>
        </div>
    );
};

export default App;
