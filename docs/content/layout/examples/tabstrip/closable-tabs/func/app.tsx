import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';

import { TabStrip, TabStripSelectEventArguments, TabStripTab } from '@progress/kendo-react-layout';
import '@progress/kendo-react-intl';
import '@progress/kendo-react-dropdowns';
import 'react-router-dom';
import { SvgIcon } from '@progress/kendo-react-common';
import { xIcon } from '@progress/kendo-svg-icons';

const initialTabs: Array<any> = [
    { title: 'Paris', content: 'Paris is the capital and most populous city of France.', visible: true },
    { title: 'New York City', content: 'The City of New York, often called New York City or simply New York, is the most populous city in the United States.', visible: true },
    { title: 'Tallinn', content: 'Tallinn is the capital and largest city of Estonia.', visible: true }

];

const Title = (props: any) => {
    return (
    <>
      {props.content}
      <span className={'k-spacer'} />
      <Button
        onClick={() => props.onTabRemove(props.content)}
        svgIcon={xIcon}
        fillMode="flat"
        type="button"
      ></Button>
    </>
    )
};

const App = () => {
    const [selected, setSelected] = React.useState<number>(0);
    const [tabs, setTabs] = React.useState<Array<any>>(initialTabs);

    const handleSelect = (e: TabStripSelectEventArguments) => {
        setSelected(e.selected);
    };

    const removeTab = (tab: any) => {
        let newTabs = tabs.filter(item => { return item.title !== tab; });
        setTabs(newTabs);
    };

    return (
    <TabStrip selected={selected} onSelect={handleSelect}>
      {
        tabs.map((item, index) => {
          return item.visible && <TabStripTab title={<Title content={item.title} onTabRemove={removeTab} />} key={index}>
            <div>
              <p>{item.content}</p>
            </div>
          </TabStripTab>
        })
      }
    </TabStrip>
    )
}

export default App;

