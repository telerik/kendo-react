import * as React from 'react';

import { CardBody } from '@progress/kendo-react-layout';
import { TaskBoardCardBodyProps } from '@progress/kendo-react-taskboard';

export const TaskBoardCardBody = (props: TaskBoardCardBodyProps) => {
    return (
      <CardBody>
        {props.children}
      </CardBody>
    );
};
