import * as React from 'react';
import { ExpansionPanel, ExpansionPanelContent, ExpansionPanelActionEvent } from '@progress/kendo-react-layout';
import { Reveal } from '@progress/kendo-react-animation';
import { data } from './data';
import './style.css';

const App = () => {
    const [expanded, setExpanded] = React.useState('Brazil');

    const handleAction = (event: ExpansionPanelActionEvent, panelId: string) => {
        const se = event.syntheticEvent as unknown as { key?: string; preventDefault?: () => void };

        if (se?.key === 'Enter') {
            se.preventDefault?.();
            return;
        }

        setExpanded(event.expanded ? '' : panelId);
    };

    return (
        <div className="wrapper">
            {data.map((item) => (
                <ExpansionPanel
                    key={item.id}
                    title={item.country}
                    subtitle={item.continent}
                    expanded={expanded === item.id}
                    tabIndex={0}
                    onAction={(e) => handleAction(e, item.id)}
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

export default App;
