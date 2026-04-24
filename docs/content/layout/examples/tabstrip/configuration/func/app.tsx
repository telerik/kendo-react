import * as React from 'react'

import { TabStrip, TabStripSelectEventArguments, TabStripTab } from '@progress/kendo-react-layout';

import './styles.css';

const items: Array<any> = [{
    disabled: true,
    city: "Paris",
    temp: 17,
    weather: "rainy"
}, {
    disabled: false,
    city: "New York",
    temp: 29,
    weather: "sunny"
}, {
    disabled: false,
    city: "Sofia",
    temp: 23,
    weather: "cloudy"
}, {
    disabled: false,
    city: "London",
    temp: 19,
    weather: "cloudy"
}]

const App = () => {
    const [selected, setSelected] = React.useState<number>(1);

    const handleSelect = (e: TabStripSelectEventArguments) => {
        setSelected(e.selected);
    }

    return (
    <TabStrip selected={selected} onSelect={handleSelect}>
      {items.map((item, index) => {
              return (
                <TabStripTab disabled={item.disabled} title={item.city} key={index}>
                  <div className="weather">
                    <h4>{item.temp}<span>&ordm;C</span></h4>
                    <p>Weather in {item.city} is {item.weather}.</p>
                  </div>
                </TabStripTab>
              );
          })}
    </TabStrip>
    )

}
export default App
