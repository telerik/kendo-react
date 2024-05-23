import * as React from 'react';
const text = <div>
    <p>
      Inclusive and foolishly more on yikes far one vociferous squinted lied much the howled disagreed
      yet seal needlessly vulgarly far moistly wanton.
    </p>
    <p>
      Human and some barring roadrunner behind swore hello ebulliently pending less upon amiable less
      amiably dear harsh telepathic regarding hey poignant ahead.
    </p>
    <p>
      Immensely a that gosh accurately by naughtily patted laxly far pangolin ouch this like marvelous
      bitter crab jeez after unobtrusive flamboyant octopus.
    </p>
    <p>
      So koala that ouch and much porpoise falcon from and wasp curtly crud much more frequently and
      accidental beneath during far.
    </p>
  </div>;
const Products = props => {
  return <div>
      <h2>Products</h2>
      {props.children ? props.children : text}
    </div>;
};
export default Products;