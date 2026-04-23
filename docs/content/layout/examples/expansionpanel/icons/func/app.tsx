import * as React from 'react'

import { ExpansionPanel, ExpansionPanelContent } from '@progress/kendo-react-layout';
import { Reveal } from '@progress/kendo-react-animation';
import { minusIcon, plusIcon } from '@progress/kendo-svg-icons';

const App = () => {
    const [ expanded, setExpanded ] = React.useState(false);

    return (
    <>
      <ExpansionPanel
        title="Colombia"
        expandSVGIcon= {plusIcon}
        collapseSVGIcon={minusIcon}
        expanded={expanded}
        onAction={e => setExpanded(!e.expanded)}
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
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  /></>
    );
}

export default App
