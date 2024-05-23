import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Scheduler, DayView } from '@progress/kendo-react-scheduler';
import { data, defaultDate } from './data';
const group = {
  resources: ['Rooms', 'Person'],
  orientation: 'horizontal',
};
const resources = [
  {
    name: 'Rooms',
    data: [
      {
        text: (
          <span>
            Meeting room 101{' '}
            <span
              class="k-icon k-i-check-outline
.k-i-checkmark-outline"
            ></span>
          </span>
        ),
        value: 1,
        color: '#5392E4',
      },
      {
        text: 'Meeting Room 201',
        value: 2,
        color: '#FF7272',
      },
    ],
    field: 'roomId',
    valueField: 'value',
    textField: 'text',
    colorField: 'color',
  },
  {
    name: 'Person',
    data: [
      {
        text: (
          <span>
            Peter{' '}
            <span
              class="k-icon k-i-check-outline
.k-i-checkmark-outline"
            ></span>
          </span>
        ),
        value: 1,
      },
      {
        text: 'Alex',
        value: 2,
      },
    ],
    field: 'personId',
    valueField: 'value',
    textField: 'text',
    colorField: 'color',
  },
];

const App = () => {
  return (
    <Scheduler
      group={group}
      resources={resources}
      data={data}
      defaultDate={defaultDate}
      timezone={'Etc/UTC'}
    >
      <DayView />
    </Scheduler>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
