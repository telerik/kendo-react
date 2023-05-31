import * as React from 'react';
const text = <div>
    <p>
      However engaging wherever growled much methodic shamefully more human agreeable gracefully and
      less equitable insistent gasped that when wasp baboon rebuilt more slept stingily along knew llama.
    </p>
    <p>
      Prim crud far healthy wholesomely more far chortled ouch in adroitly gawked affably reasonably
      manfully reindeer mysteriously overpaid considering far far until.
    </p>
    <p>
      Red-handed off thickly save aboard mawkishly that amidst moth pending jerkily monogamous some much
      or creatively indecent neat far jeepers up spoiled about.
    </p>
    <p>
      Owing desperate like one shark or bit yikes up so thus grumbled gosh more bawled much and regardless
      hey far bought through crud well staunchly hysteric inside incorrect the closed.
    </p>
    <p>
      Industrious jubilant blanched bestially yet that less far far a wow the militant preparatory
      crudely acrimonious under a towards lemur wedded that while decorously this peered darn a much.
    </p>
    <p>
      Dizzy boundless hence but because moodily and alas a truculently less hardheaded so on ambiguously
      incompetently less moaned hilarious until one jeepers amid heinously.
    </p>
    <p>
      Where beneath less misspelled across artistically spiteful jeepers much more that when blushed a
      much a this groundhog therefore far arduous dependent much satanic where dear goodness hummingbird.
    </p>
  </div>;
const Home = props => {
  return <div>
      <h2>Home page</h2>
      {props.children ? props.children : text}
    </div>;
};
export default Home;