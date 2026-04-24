import * as React from 'react';
import {
  ChipListDataChangeEvent,
  ChipList,
} from '@progress/kendo-react-buttons';

import './styles.css';

const App = () => {
  const [peopleSmall, setPeopleSmall] = React.useState(dataSmall);
  const [peopleMedium, setPeopleMedium] = React.useState(dataMedium);
  const [peopleLarge, setPeopleLarge] = React.useState(dataLarge);

  const handleSmallDataChange = (event: ChipListDataChangeEvent) => {
    setPeopleSmall(event.value);
  };

  const handleMediumDataChange = (event: ChipListDataChangeEvent) => {
    setPeopleMedium(event.value);
  };

  const handleLargeDataChange = (event: ChipListDataChangeEvent) => {
    setPeopleLarge(event.value);
  };

  return (
    <div>
      <ChipList
        size={'small'}
        data={peopleSmall}
        selection={'multiple'}
        onDataChange={handleSmallDataChange}
      />
      <ChipList
        size={'medium'}
        data={peopleMedium}
        selection={'multiple'}
        onDataChange={handleMediumDataChange}
      />
      <ChipList
        size={'large'}
        data={peopleLarge}
        selection={'multiple'}
        onDataChange={handleLargeDataChange}
      />
    </div>
  );
};

const dataSmall = [
  {
    text: 'Edward',
    value: 'christopher',
    icon: 'k-chip-avatar k-avatar christopher',
  },
];

const dataMedium = [
  {
    text: 'Harold',
    value: 'maximilian',
    icon: 'k-chip-avatar k-avatar maximilian',
  },
];

const dataLarge = [
  {
    text: 'Thomas',
    value: 'samantha',
    icon: 'k-chip-avatar k-avatar samantha',
  },
];
export default App;
