import * as React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartLegend,
    DrilldownEvent,
    DrilldownSeriesFactoryProps,
    GridPattern,
    ChartDrilldownState
} from '@progress/kendo-react-charts';

import { Breadcrumb, BreadcrumbLinkMouseEvent, DataModel } from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { folderIcon } from '@progress/kendo-svg-icons';
import { vehiclesByMake, vehiclesByModel, vehiclesByQuarter } from './ch-vehicle-data';

const simulatedDelay = 500;

const useVehiclesByQuarterData = (model: string): any[] => {
    const [data, setData] = React.useState<any[]>([]);
    React.useEffect(() => {
        setTimeout(() => setData(vehiclesByQuarter[model]), simulatedDelay);
    }, [model]);

    return data;
};

const gridPattern: GridPattern = {
    type: 'grid',
    background: 'rgb(255, 255, 0, 1)',
    size: 12,
    gap: 1.2
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
    const [items, setItems] = React.useState<DataModel[]>([
        {
            id: '0',
            text: 'Root',
            icon: <SvgIcon icon={folderIcon} />
        }
    ]);

    const onDrilldown = (e: DrilldownEvent) => {
        setDrilldownState(e.nextState);

        // Create a new breadcrumb item for the current level.
        setItems([
            ...items,
            {
                id: items.length.toString(),
                text: `${e.point?.category?.toString()}`
            }
        ]);
    };

    const onItemSelect = (e: BreadcrumbLinkMouseEvent) => {
        const level = items.findIndex((item) => item.id === e.id);

        // Remove all lower drilldown levels below <level>
        setDrilldownState({
            steps: drilldownState!.steps.slice(0, level)
        });

        // Remove all breadcrumb items below <level>, except the root item.
        setItems(items.slice(0, level + 1));
    };

    return (
        <div>
            <Breadcrumb data={items} onItemSelect={onItemSelect} />
            <Chart drilldownState={drilldownState} onDrilldown={onDrilldown}>
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
                        color="rgb(255, 99, 88)"
                        pattern={gridPattern}
                        tooltip={{ visible: true }}
                    />
                </ChartSeries>
                <ChartLegend position="bottom" />
            </Chart>
            <pre style={{ height: 150 }}>{JSON.stringify(drilldownState, null, 2)}</pre>
        </div>
    );
};

export default App;
