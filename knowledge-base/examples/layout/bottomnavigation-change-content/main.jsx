import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BottomNavigation } from '@progress/kendo-react-layout';
import { DropDownList } from '@progress/kendo-react-dropdowns';
const content = [
  {
    text: 'Home',
    icon: 'home',
    selected: true,
  },
  {
    text: 'Library',
    icon: 'folder',
  },
  {
    text: 'Search',
    icon: 'search',
  },
];

const Home = () => {
  return <div>Home content</div>;
};

const Library = () => {
  return <div>Library content</div>;
};

const Search = () => {
  return <div>Search content</div>;
};

const NavigationData = [<Home />, <Library />, <Search />];
const App = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(
    content.findIndex((x) => x.selected === true)
  );
  const handleSelect = (e) => {
    setSelectedIndex(e.itemIndex);
  };
  return (
    <div className="example">
      <div className={'example-wrapper'}>
        <div className={'page'}>
          <div>{NavigationData[selectedIndex]}</div>
          <BottomNavigation
            items={content.map((item, index) => ({
              ...item,
              selected: index === selectedIndex,
            }))}
            onSelect={handleSelect}
          />
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
