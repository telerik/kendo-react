import * as React from 'react';
import {
  Grid,
  GridColumn,
  GridToolbar,
  GridCustomCellProps,
  GridPageChangeEvent,
} from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import { useTableKeyboardNavigation } from '@progress/kendo-react-data-tools';
import { SizeConfigurator } from './size-configurator';
import companyData from './companyData.json';

interface PageState {
  skip: number;
  take: number;
}

const ChngCellColors = [{ color: '#0058E9' }, { color: '#F31700' }];

const PercentageChngCellColors = [{ color: '#000000' }, { color: '#F31700' }];

const ChngCustomCell = (props: GridCustomCellProps) => {
  const field = props.field || '';
  const value = props.dataItem[field];
  const navigationAttributes = useTableKeyboardNavigation(props.id);
  return (
    <td
      {...props.tdProps}
      style={{
        color: value > 0 ? ChngCellColors[0].color : ChngCellColors[1].color,
      }}
      {...navigationAttributes}
    >
      {value === null ? '' : value.toString()}
    </td>
  );
};

const PercentageCustomCell = (props: GridCustomCellProps) => {
  const field = props.field || '';
  const value = props.dataItem[field];
  const navigationAttributes = useTableKeyboardNavigation(props.id);
  return (
    <td
      {...props.tdProps}
      style={{
        color:
          value > 0
            ? PercentageChngCellColors[0].color
            : PercentageChngCellColors[1].color,
      }}
      {...navigationAttributes}
    >
      {value === null ? '' : value.toString()}
    </td>
  );
};

const App = () => {
  const [size, setSize] = React.useState<'small' | 'medium'>('medium');
  const [page, setPage] = React.useState<PageState>({
    skip: 0,
    take: 10,
  });

  const excelExportRef = React.useRef<ExcelExport | null>(null);

  const handlePageChange = (event: GridPageChangeEvent) => {
    setPage(event.page);
  };

  const handleExport = () => {
    if (excelExportRef.current) {
      excelExportRef.current.save(companyData);
    }
  };

  return (
    <div>
      <SizeConfigurator size={size} onSizeChange={setSize} />
      <ExcelExport ref={excelExportRef}>
        <Grid
          data={companyData.slice(page.skip, page.take + page.skip)}
          pageable
          skip={page.skip}
          take={page.take}
          total={companyData.length}
          size={size}
          onPageChange={handlePageChange}
          style={{ height: '400px' }}
        >
          <GridToolbar>
            <Button icon="excel" onClick={handleExport}>
              Export to Excel
            </Button>
          </GridToolbar>
          <GridColumn field="Name" title="Name" width="250px" />
          <GridColumn field="Price" title="Price" width="150px" />
          <GridColumn
            field="Chng"
            title="Change"
            cells={{ data: ChngCustomCell }}
            width="150px"
          />
          <GridColumn
            field="%Chng"
            title="Percent Change"
            cells={{ data: PercentageCustomCell }}
            width="150px"
          />
          <GridColumn field="Close" title="Close" width="150px" />
          <GridColumn field="Open" title="Open" width="150px" />
        </Grid>
      </ExcelExport>
    </div>
  );
};

export default App;
