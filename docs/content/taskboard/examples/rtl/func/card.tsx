import * as React from 'react';
import { TaskBoardCard, TaskBoardCardProps } from '@progress/kendo-react-taskboard';

export const Card = (props: TaskBoardCardProps) => {
    return (
      <TaskBoardCard
        {...props}
        style={{ borderRightColor: props.style!.borderLeftColor }}
      />
    );
};
