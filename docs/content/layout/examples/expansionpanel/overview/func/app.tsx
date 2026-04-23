import * as React from 'react'

import { ExpansionPanel, ExpansionPanelContent, ExpansionPanelActionEvent } from '@progress/kendo-react-layout';
import { Reveal } from '@progress/kendo-react-animation';
import { data } from './data';
import './styles.css';

const App = () => {
    const [expanded, setExpanded] = React.useState('Brazil');

    return (
    <div className="wrapper">
      {data.map((item) => (
        <ExpansionPanel
          title={item.country}
          subtitle={item.continent}
          expanded={expanded === item.id}
          tabIndex={0}
          key={item.id}
          onAction={(event: ExpansionPanelActionEvent) => {
            setExpanded(event.expanded ? '' : item.id)
          }}
        >
          <Reveal>
            {expanded === item.id && (
              <ExpansionPanelContent>
                <div className="content">
                  <div className="image-container">
                    <img src={item.imageUrl} alt={`KendoReact Layout ${item.country}`} />
                  </div>
                  <span className="content-text">{item.text}</span>
                </div>
              </ExpansionPanelContent>
            )}
          </Reveal>
        </ExpansionPanel>
      ))}
    </div>
    );
};

export default App
