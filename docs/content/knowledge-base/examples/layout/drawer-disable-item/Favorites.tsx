import * as React from 'react';
const Favorites = props => {
  const text = <div id="Favorites" className="page favorites-page">
        <ul>
          <li>70% Discount!</li>
          <li>90% Discount!</li>
          <li>One time offer!</li>
        </ul>
      </div>;
  return <div>
        {props.children ? props.children : text}
      </div>;
};
export default Favorites;
