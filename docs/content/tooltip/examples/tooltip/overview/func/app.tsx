import * as React from 'react';
import { Tooltip } from '@progress/kendo-react-tooltip';

import './styles.css';

const App = () => {

    return (
          <Tooltip anchorElement="target" position="top">
            <div id="agglomerations">
              <a
                href="#"
                title="Canton - 26,300,000"
                id="canton" />
              <a
                title="Jakarta - 25,800,000"
                id="jakarta" />
              <a
                title="Mexico City - 23,500,000"
                id="mexico" />
              <a
                title="Delhi - 23,500,000"
                id="delhi" />
              <a
                title="Karachi - 22,100,000"
                id="karachi" />
              <a

                title="New York - 21,500,000"
                id="newyork" />
              <a
                title="Sao Paulo - 21,300,000"
                id="saopaolo" />
              <a
                title="Mumbay/Bombay - 21,100,000"
                id="bombay" />
              <a
                title="Los Angeles - 17,100,000"
                id="losangeles" />
              <a
                title="Osaka - 16,800,000"
                id="osaka" />
              <a
                title="Moscow - 16,200,000"
                id="moscow" />
            </div>
          </Tooltip>
    );
}
export default App;
