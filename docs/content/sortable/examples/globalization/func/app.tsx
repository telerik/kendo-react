import * as React from 'react';
import { Sortable, SortableItemUIProps } from '@progress/kendo-react-sortable';

import { IntlProvider, LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';

const bgMessages = {
    "sortable": {
        "noData": "Няма данни"
    }
};

loadMessages(bgMessages, 'bg-BG');

const SortableItemUI = (props: SortableItemUIProps) => {
    const { style, attributes, dataItem, forwardRef } = props;

    return (
      <div
        ref={forwardRef}
        {...attributes}
        style={{
                ...style
            }}
        >
        {dataItem.text}
      </div>
    );
};

const App = () => {
    return (
        <LocalizationProvider language="bg-BG">
          <IntlProvider locale="bg" >
            <div className="container-fluid">
              <Sortable
                idField={'id'}
                data={[]}

                itemUI={SortableItemUI}
                      />
            </div>
          </IntlProvider>
        </LocalizationProvider>
    );
}

export default App;
