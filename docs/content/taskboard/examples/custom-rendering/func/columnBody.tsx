import * as React from 'react';

import { TaskBoardColumnBodyProps } from '@progress/kendo-react-taskboard';

export const ColumnBody = (props: TaskBoardColumnBodyProps) => {
    return (
      <div className={'k-taskboard-column-cards-container'}>
        <div className={'k-taskboard-column-cards'}>
          {props.children}
        </div>
      </div>
    );
};
