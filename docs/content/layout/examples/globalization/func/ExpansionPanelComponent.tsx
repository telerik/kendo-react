import * as React from 'react';
import { ExpansionPanel, ExpansionPanelContent } from '@progress/kendo-react-layout';
import { Reveal } from '@progress/kendo-react-animation';

const ExpansionPanelComponent = () => {
    const [ expanded, setExpanded ] = React.useState(false);

    return (
      <ExpansionPanel
        title="Colombia"
        expanded={expanded}
        onAction={event => setExpanded(!event.expanded)}
      >
        <Reveal>
          {expanded && (
          <ExpansionPanelContent>
            The name “Colombia” is derived from the last name of the Italian navigator
            Christopher Columbus. It was conceived by the Venezuelan revolutionary
            Francisco de Miranda as a reference to all of the New World, but
            especially to those portions under Spanish law. The name was later adopted
            by the Republic of Colombia of 1819, formed from the territories of the
            old Viceroyalty of New Granada (modern-day Colombia, Panama, Venezuela,
            Ecuador, and northwest Brazil).
          </ExpansionPanelContent>
          )}
        </Reveal>
      </ExpansionPanel>
    );
}

export default ExpansionPanelComponent;
