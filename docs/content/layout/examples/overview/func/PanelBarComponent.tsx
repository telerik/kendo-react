import * as React from 'react';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';

const PanelBarComponent = (props) => {
    const { dir } = props;
    return (
      <div className="panelbar-wrapper">
        <PanelBar dir={dir}>
          <PanelBarItem title="Invasion Games">
            <PanelBarItem title="Hockey" />
            <PanelBarItem title="Soccer" />
            <PanelBarItem title="Rugby" />
          </PanelBarItem>
          <PanelBarItem title="Net & Court Games" expanded={true}>
            <PanelBarItem title="Badminton" />
            <PanelBarItem title="Squash" />
            <PanelBarItem title="Tennis" selected={true} />
            <PanelBarItem title="Table Tennis" />
            <PanelBarItem title="Volleyball" />
          </PanelBarItem>
          <PanelBarItem title="Target Games">
            <PanelBarItem title="Golf" />
            <PanelBarItem title="Lawn bowls" />
            <PanelBarItem title="Tenpin bowling" />
          </PanelBarItem>
        </PanelBar>
        <style>{`
            .panelbar-wrapper {
                max-width: 300px;
                margin: 0 auto;
            }`}</style>
      </div>
    )
};

export default PanelBarComponent;
