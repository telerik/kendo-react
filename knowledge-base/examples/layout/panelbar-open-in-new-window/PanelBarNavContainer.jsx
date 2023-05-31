import * as React from 'react';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import { withRouter } from 'react-router-dom';

const CustomPanelBarItem = (props) => {
  return (
    <>
      <a
        style={{ textDecoration: 'inherit', color: 'inherit', cursor: 'unset' }}
        href={'#' + props.route}
      >
        {props.title}
      </a>
    </>
  );
};
const paths = [
  {
    path: '/',
    index: '.0',
  },
  {
    path: '/products',
    index: '.1',
  },
  {
    path: '/about',
    index: '.2',
  },
  {
    path: '/about/team',
    index: '.2.0',
  },
];
const PanelBarNavContainer = (props) => {
  const onSelect = (event) => {
    props.history.push(event.target.props.route);
  };
  const setSelectedIndex = (pathName) => {
    let currentPath = paths.find((item) => item.path === pathName);
    return currentPath.index;
  };
  const selected = setSelectedIndex(props.location.pathname);
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
      }}
    >
      <div
        style={{
          minWidth: '20%',
          maxWidth: '20%',
        }}
      >
        <PanelBar selected={selected} expandMode={'single'} onSelect={onSelect}>
          <PanelBarItem
            title={<CustomPanelBarItem title="Home" route="/" />}
            route="/"
          />
          <PanelBarItem
            title={<CustomPanelBarItem title="Products" route="/products" />}
            route="/products"
          />
          <PanelBarItem
            title={<CustomPanelBarItem title="About" route="/about" />}
            route="/about"
          >
            <PanelBarItem title={'Team'} route="/about/team" />
          </PanelBarItem>
        </PanelBar>
      </div>
      <div
        style={{
          paddingLeft: '10pt',
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
export default withRouter(PanelBarNavContainer);
