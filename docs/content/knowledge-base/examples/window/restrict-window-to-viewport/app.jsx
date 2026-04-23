import * as React from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [visible, setVisible] = React.useState(true);
    const [top, setTop] = React.useState(60);
    const [left, setLeft] = React.useState(30);
    const toggleDialog = () => {
        setVisible(!visible);
    };
    const move = (e) => {
        if (e.left < 30 || e.left > 180) {
            console.log('max');
        } else {
            setLeft(e.left);
        }

        if (e.top < 60 || e.top > 160) {
            console.log('max');
        } else {
            setTop(e.top);
        }
    };
    return (
    <div>
      <Button
        type="button"
        onClick={toggleDialog}
      >
        Open Window
      </Button>
      <div
        style={{ border: '1px solid #ccc', width: '450px', height: '400px' }}
      >
        {visible && (
          <Window
            title={'Status'}
            onClose={toggleDialog}
            top={top}
            left={left}
            onMove={move}
          />
        )}
      </div>
    </div>
    );
};
export default App;
