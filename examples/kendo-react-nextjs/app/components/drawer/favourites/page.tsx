import * as React from "react";
const Favourites = (props: any) => {
  const text = (
    <div id="Favourites" className="page favourites-page">
      <ul>
        <li>70% Discount!</li>
        <li>90% Discount!</li>
        <li>One time offer!</li>
      </ul>
    </div>
  );
  return <div>{props.children ? props.children : text}</div>;
};
export default Favourites;