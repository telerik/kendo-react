import * as React from 'react';
import { TabStrip, TabStripSelectEventArguments, TabStripTab } from '@progress/kendo-react-layout';

const TabStripComponent = (props) => {
    const { dir } = props;
    const [tabSelected, setTabSelected] = React.useState<number>(0);

    const handleTabSelect = (e: TabStripSelectEventArguments) => {
        setTabSelected(e.selected);
    }
    return (
      <TabStrip  dir={dir} selected={tabSelected} onSelect={handleTabSelect}>
        <TabStripTab title="Baseball" >
          <p>
            Baseball is a bat-and-ball game played between two teams of nine players each,
            who take turns batting and fielding.
          </p>
          <p>
            The batting team attempts to score runs by hitting a ball that is thrown by the pitcher
            with a bat swung by the batter, then running counter-clockwise around a series of four bases:
            first, second, third, and home plate. A run is scored when a player advances around the
            bases and returns to home plate.
          </p>
        </TabStripTab>
        <TabStripTab title="Basketball">
          <p>
            Basketball is a sport that is played by two teams of five players on a rectangular court.
            The objective is to shoot a ball through a hoop 18 inches (46 cm) in diameter and mounted at a height
            of 10 feet (3.048 m) to backboards at each end of the court. The game was invented in 1891 by Dr.
            James Naismith, who would be the first basketball coach of the Kansas Jayhawks, one of the most
            successful programs in the game's history.
          </p>
        </TabStripTab>
        <TabStripTab title="Football">
          <p>
            Football is a family of team sports that involve, to varying degrees, kicking a ball with the foot
            to score a goal. Unqualified, the word football is understood to refer to whichever form of
            football is the most popular in the regional context in which the word appears.
          </p>
        </TabStripTab>
      </TabStrip>
    )
};

export default TabStripComponent;
