import * as React from 'react'

import { ExpansionPanel, ExpansionPanelContent } from '@progress/kendo-react-layout';
import { Reveal } from '@progress/kendo-react-animation';
import { data } from './data';
import './styles.css';

const initialExpanded: { [id: string]: boolean } = data.reduce((acc, cur) => ({ ...acc, [cur.id]: false }), {});

const App = () => {
    const [expanded, setExpanded] = React.useState({ ...initialExpanded, Brazil: true });

    const onAction = React.useCallback((id: string) => {
        setExpanded({ ...expanded, [id]: !expanded[id] });
    }, [expanded]);

    return (
    <div className="wrapper">
      {data.map((item) => (
        <ExpansionPanel
          title={item.country}
          subtitle={item.continent}
          expanded={expanded[item.id]}
          tabIndex={0}
          key={item.id}
          onAction={onAction.bind(undefined, item.id)}
        >
          <Reveal transitionEnterDuration={150} transitionExitDuration={150}>
            {expanded[item.id] && (
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
