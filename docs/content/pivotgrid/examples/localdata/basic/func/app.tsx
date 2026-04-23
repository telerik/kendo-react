import * as React from 'react'

import {
    PivotGrid,
    PivotGridContainer,
    PivotGridConfigurator,
    sumAggregate, minAggregate, maxAggregate, averageAggregate,
    Dimension, Measure,
    usePivotLocalDataService, PivotLocalDataServiceArgs,
    PivotGridAxis,
    PivotGridConfiguratorButton
} from '@progress/kendo-react-pivotgrid';
import { Loader } from '@progress/kendo-react-indicators';

import './styles.css';

import { FilterDescriptor, SortDescriptor } from '@progress/kendo-data-query';

import { createData } from './data';

const data = createData(1_000_000);

const dimensions: { [key: string]: Dimension } = {
    Category: {
        caption: 'Categories',
        displayValue: item => item.Category,
        sortValue: (displayValue: string) => displayValue
    },
    Product: {
        caption: 'Products',
        displayValue: item => item.Product,
        sortValue: (displayValue: string) => displayValue
    },
    Region: {
        caption: 'Regions',
        displayValue: item => item.Region,
        sortValue: (displayValue: string) => displayValue
    },
    Country: {
        caption: 'Countries',
        displayValue: item => item.Country,
        sortValue: (displayValue: string) => displayValue
    }
};

const measures: Measure[] = [
    { name: 'Total', value: item => item.Price, aggregate: sumAggregate },
    { name: 'Max', value: item => item.Price, aggregate: maxAggregate },
    { name: 'Min', value: item => item.Price, aggregate: minAggregate },
    { name: 'Average', value: item => item.Price, aggregate: averageAggregate }
];

const defaultMeasureAxes: PivotGridAxis[] = [
    { name: ['Total'] }
];

const defaultRowAxes: PivotGridAxis[] = [
    { name: ['Region'], expand: true },
    { name: ['Country'] }
];

const defaultColumnAxes: PivotGridAxis[] = [
    { name: ['Category'], expand: true },
    { name: ['Product'] }
];

const defaultFilter: FilterDescriptor[] = [];
const defaultSort: SortDescriptor[] = Object.keys(dimensions).map(k => ({ field: k, dir: 'asc' as 'asc' }));
const serviceArgs: PivotLocalDataServiceArgs = {
    dimensions,
    measures,
    data,

    defaultRowAxes,
    defaultColumnAxes,
    defaultMeasureAxes,
    defaultSort,
    defaultFilter
};

const App = () => {
    const [show, setShow] = React.useState(false);
    const { pivotProps, configuratorProps, state } = usePivotLocalDataService(serviceArgs);

    const handleButtonClick = React.useCallback(() => {
        setShow(!show);
    }, [show]);

    return (
    <PivotGridContainer>
      <PivotGrid
        {...pivotProps}
        style={{
            height: state.loading ? 350 : undefined,
            maxHeight: state.loading ? undefined : 700
          }}
        />
      {show && <PivotGridConfigurator {...configuratorProps} />}
      <PivotGridConfiguratorButton onClick={handleButtonClick} />
      {state.loading && (
      <Loader
        style={{
              position: 'absolute',
              top: '60%',
              left: '50%',
              transform: 'translate(-50%,-50%)'
            }}
        size="large"
          />
        )}
    </PivotGridContainer>
    );
};

export default App;

