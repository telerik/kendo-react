import * as React from 'react';
const text = <div>
    <p>
      Leapt sprang volubly that or adroitly cozy sold creepy shuffled spent flirted withdrew gosh zebra
      prideful swung yawned monkey penguin.
    </p>
    <p>
      This wow flinched one immoral this dear far inflexible newt far outside up hey excluding goodness
      hello much after feverishly direly fitted wow some youthful crud stark more strict unjustifiable
      that told one.
    </p>
    <p>
      Shark audible mistook removed tryingly much delicate yet sudden after contrary thus brusque more
      won wallaby frowningly much censorious spryly thanks circuitous this sewed dreamed wow.
    </p>
    <p>
      The against alas less adoringly some cutting aboard lighted some dear agilely and enticingly before
      thanks upon was neglectful merrily some porpoise tenably and and groundhog together kiwi much barked
      miser.
    </p>
    <p>
      Much flamingo mocking much far far some since among ritually since crud near one tartly left far and
      far this ineffectively goodness mighty some and intricately far.
    </p>
    <p>
      Modestly mastodon hypocritically hatchet gerbil successful dispassionate nefariously and
      the dangerously far in one less save gosh became and sparing that by alas.
    </p>
  </div>;

const Team = props => {
  return <div>
      <h3>Team</h3>
      {props.children ? props.children : text}
    </div>;
};

export default Team;