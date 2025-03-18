import * as React from 'react';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import { TextBox } from '@progress/kendo-react-inputs';
import { Rating } from '@progress/kendo-react-inputs';
import {
   Grid,
   GridColumn as Column,
   getSelectedState,
   GridToolbar,
   GRID_COL_INDEX_ATTRIBUTE
 } from '@progress/kendo-react-grid';
import { ButtonGroup, Button } from '@progress/kendo-react-buttons';
import firstTeam  from '../../data/firstTeam.json'
import {
   process,
 } from '@progress/kendo-data-query';
import { getter, SvgIcon } from '@progress/kendo-react-common';
import { useTableKeyboardNavigation } from '@progress/kendo-react-data-tools';
import { fileExcelIcon, filePdfIcon} from '@progress/kendo-svg-icons';

const DATA_ITEM_KEY = 'PersonID';
const SELECTED_FIELD = 'selected';
const idGetter = getter(DATA_ITEM_KEY);

export const DashboardGrid = () => {
   const [isFirstTeam, setIsFirstTeam] = React.useState(true);
   const [filterValue, setFilterValue] = React.useState();
   const [person, setPerson] = React.useState('Joey.png');
   const [filteredSampleProducts, setFilteredSampleProducts] =
     React.useState(firstTeam);
   const [dataState, setDataState] = React.useState({ take: 5, skip: 0 });
   const [dataResult, setDataResult] = React.useState(
     process(
       firstTeam.map((dataItem) =>
         Object.assign(
           {
             selected: false,
           },
           dataItem
         )
       ),
       dataState
     )
   );

 const [selectedState, setSelectedState] = React.useState({});
const onSelectionChange = React.useCallback(
  (event) => {
    const newSelectedState = getSelectedState({
      event,
      selectedState: selectedState,
      dataItemKey: DATA_ITEM_KEY,
    });
    setSelectedState(newSelectedState);
  },
  [selectedState]
);

const onFilterChange = (ev) => {
  let value = ev.value;
  setFilterValue(ev.value);
  let newData = firstTeam.filter((item) => {
    let match = false;
    for (const property in item) {
      if (
        item[property]
          .toString()
          .toLocaleLowerCase()
          .indexOf(value.toLocaleLowerCase()) >= 0
      ) {
        match = true;
      }

      if (
        item[property].toLocaleDateString &&
        item[property].toLocaleDateString().indexOf(value) >= 0
      ) {
        match = true;
      }
    }
    return match;
  });

  setFilteredSampleProducts(newData);
  let clearedPagerDataState = { ...dataState, take: dataState.take, skip: 0 };
  let processedData = process(newData, dataState);
  setDataResult(processedData);
  setDataState(clearedPagerDataState);
};

const getHighlight = (value, filter) => {
  let index = value
    .toLocaleLowerCase()
    .indexOf(filterValue.toLocaleLowerCase());
  if (index >= 0) {
    let left = value.substr(0, index);
    let right = value.substring(index + filter.length, value.length);
    return (
      <React.Fragment>
        {left}
        <span className="highligth">
          {value.substr(index, filter.length)}
        </span>
        {getHighlight(right, filter)}
      </React.Fragment>
    );
  }
  return value;
};

const cellRender = React.useCallback(
  (td, props) => {
    const value = td.props.children;
    if (
      filterValue &&
      filterValue.length > 0 &&
      value.substr &&
      value.toLocaleLowerCase().indexOf(filterValue.toLocaleLowerCase()) >= 0
    ) {
      const children = getHighlight(value, filterValue.toLocaleLowerCase());
      return React.cloneElement(td, [props], [children]);
    }
    return td;
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [filterValue]
);

const onHeaderSelectionChange = React.useCallback((event) => {
  const checkboxElement = event.syntheticEvent.target;
  const checked = checkboxElement.checked;
  const newSelectedState = {};
  event.dataItems.forEach((item) => {
    newSelectedState[idGetter(item)] = checked;
  });
  setSelectedState(newSelectedState);
}, []);

const dataStateChange = (event) => {
  setDataResult(process(filteredSampleProducts, event.dataState));
  setDataState(event.dataState);
};

const RatingCell = (props) => {
  const field = props.field || '';
  const value = props.dataItem[field];
  return (
    <td>
      <Rating
        value={value === null ? '' : props.dataItem[field].toString()}
        readonly={true}
      />
    </td>
  );
};

const PersonCell = (props) => {
  const field = props.field || '';
  const value = props.dataItem[field];

  return (
    <td>
    <img src={require(`../../assets/people/${person}`)} alt="Girl in a jacket" width="34" height="34"/>
     <span className="person-name">{ value === null ? '' : props.dataItem[field].toString()}</span>
    </td>
  );
}

const BudgetCell = props => {
  const field = props.field || '';
  const value = props.dataItem[field];
  const navigationAttributes = useTableKeyboardNavigation(props.id);
  return <td style={{
    color: value > 0 ? props.myProp[0].color : props.myProp[1].color
  }} colSpan={props.colSpan} role={'gridcell'} aria-colindex={props.ariaColumnIndex} aria-selected={props.isSelected} {...{
    [GRID_COL_INDEX_ATTRIBUTE]: props.columnIndex
  }} {...navigationAttributes}>
      ${value === null ? '' : props.dataItem[field].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </td>;
};
const customData = [{
  color: ''
}, {
  color: 'red'
}];

const CustomBudgetCell = props => <BudgetCell {...props} myProp={customData} />;

let _pdfExport;
const exportExcel = () => {
  _export.save();
};
let _export;

const exportPDF = () => {
  _pdfExport.save();
};

const firstTeamOnClick = React.useCallback(
   () => {
       setIsFirstTeam(true);
       setPerson('Joey.png')
 
   },
   [setIsFirstTeam]
 );
 
 const secondTeamOnClick = React.useCallback(
   () => {
      setIsFirstTeam(!true);
      setPerson('BaseAvatar.png')
   },
   [setIsFirstTeam]
 );

   return   <div className="grid-container">
     <div className="card-buttons">
          <p>MK Team</p>
         <ButtonGroup>
         <Button togglable={true} selected={isFirstTeam}  onClick={firstTeamOnClick}>
               My Team
             </Button>
             <Button togglable={true} selected={!isFirstTeam} onClick={secondTeamOnClick}>
               All Teams
             </Button>
         </ButtonGroup>
      </div>
    
   <ExcelExport data={firstTeam} ref={exporter => {
     _export = exporter;
   }}>
   <Grid
   sortable={true}
   cellRender={cellRender}
   data={dataResult.data.map((item) => ({
     ...item,
     [SELECTED_FIELD]: selectedState[idGetter(item)],
   }))}
   total={dataResult.total}
   {...dataState}
   onDataStateChange={dataStateChange}
  autoProcessData={true}
  defaultSkip={0}
  defaultTake={10}
  pageable={{
      buttonCount: 4,
      pageSizes: [5, 10, 15, 'All']
  }}
   dataItemKey={DATA_ITEM_KEY}
   selectedField={SELECTED_FIELD}
   selectable={{
     enabled: true,
     drag: false,
     cell: false,
     mode: 'multiple',
   }}
   onSelectionChange={onSelectionChange}
   onHeaderSelectionChange={onHeaderSelectionChange}
 >
   <GridToolbar className="toolbar">
    <div>
       <span>
         <TextBox
           value={filterValue}
           onChange={onFilterChange}
           style={{
             width: '200px',
           }}
           defaultValue='Search in all columns'
         />
       </span>
      <div className="export-buttons-container">
       <button title="Export to Excel" className="k-grid-excel k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" onClick={exportExcel}>
        <SvgIcon icon={fileExcelIcon}/><span> Export to Excel </span>
       </button>&nbsp;
       <button className="k-grid-pdf k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" onClick={exportPDF}>
        <SvgIcon icon={filePdfIcon} /><span> Export to PDF </span>
       </button>
      </div>  
    </div>
   </GridToolbar>
   <Column
     field={SELECTED_FIELD}
     width="50px"
     headerSelectionValue={
       dataResult.data.findIndex(
         (item) => !selectedState[idGetter(item)]
       ) === -1
       
     }
   />
     <Column title="Employee">
   <Column field="FullName" title="Contact Name" cell={PersonCell}/>
   </Column>
   <Column field="JobTitle" title="Job Title" />
   <Column title="Performance">
   <Column field="Rating" title="Rating" cell={RatingCell} width="300px" />
   </Column>
   <Column field="Budget" title="Budget" cell={CustomBudgetCell}/>
 </Grid>
 </ExcelExport>
 <GridPDFExport ref={element => {
   _pdfExport = element;
 }} margin="1cm">
           {<Grid data={process(firstTeam, {
     skip: dataState.skip,
     take: dataState.take
   })}>
    <Column title="Employee">
   <Column field="FullName" title="Contact Name" cell={PersonCell}/>
   </Column>
   <Column field="JobTitle" title="Job Title" />
   <Column title="Performance">
   <Column field="Rating" title="Rating" cell={RatingCell} width="300px" />
   </Column>
   <Column field="Budget" title="Budget" cell={CustomBudgetCell}/>
       </Grid>}
   </GridPDFExport>
 
   </div>
}

 