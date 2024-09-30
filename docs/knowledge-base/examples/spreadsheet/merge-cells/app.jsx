import * as React from 'react';
import {
  Spreadsheet,
  Bold,
  Italic,
  Underline,
  Open,
} from '@progress/kendo-react-spreadsheet';
import { Button, ToolbarSeparator } from '@progress/kendo-react-buttons';
import { codeIcon } from '@progress/kendo-svg-icons';
import { sheets } from './sheets.js';

const alertJSON = (props) => {
  const { spreadsheetRef } = props;
  const onClick = () => {
    if (spreadsheetRef.current) {
      alert(JSON.stringify(spreadsheetRef.current.toJSON()));
    }
  };
  return (
    <Button
      className="k-toolbar-button"
      title={'Alert JSON...'}
      svgIcon={codeIcon}
      onClick={onClick}
    />
  );
};

const MergeCellsButton = ({ spreadsheetRef }) => {
  const onClick = () => {
    if (spreadsheetRef.current) {
      const activeSheet = spreadsheetRef.current.activeSheet();
      const selection = activeSheet.selection();
      activeSheet.range(selection).merge();
    }
  };
  return (
    <Button
      className="k-toolbar-button"
      title={'Merge Cells'}
      onClick={onClick}
    >
      Merge Cells
    </Button>
  );
};

const customTabs = (spreadsheetRef) => [
  {
    text: 'Custom Tab',
    selected: true,
    tools: [
      [Bold, Italic, Underline],
      ToolbarSeparator,
      Open,
      ToolbarSeparator,
      () => alertJSON({ spreadsheetRef }),
      () => <MergeCellsButton spreadsheetRef={spreadsheetRef} />,
    ],
  },
];

const App = () => {
  const spreadsheet = React.useRef(null);

  return (
    <>
      <Spreadsheet
        ref={spreadsheet}
        style={{
          width: '100%',
          height: 650,
        }}
        defaultProps={{
          sheets: sheets,
        }}
        toolbar={customTabs(spreadsheet)}
      />
    </>
  );
};

export default App;
