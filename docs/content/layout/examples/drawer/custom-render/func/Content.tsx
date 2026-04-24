import * as React from 'react';

export const Paris = (props) => {
    const text = (
    <React.Fragment>
      <span className="weather-icon sunny" />
      <span className="weather">
        <h2>21<span>ºC</span></h2>
        <p>Sunny weather in Paris</p>
      </span>
    </React.Fragment>
    );

    return (
    <div>
      {props.children ? props.children : text}
    </div>
    );
}

export const Rome = (props) => {
    const text = (
      <React.Fragment>
        <span className="weather-icon sunny" />
        <span className="weather">
          <h2>30<span>ºC</span></h2>
          <p>Sunny weather in Rome</p>
        </span>
      </React.Fragment>
    );

    return (
      <div>
        {props.children ? props.children : text}
      </div>
    );
}

export const Berlin = (props) => {
    const text = (
    <React.Fragment>
      <span className="weather-icon cloudy" />
      <span className="weather">
        <h2>18<span>ºC</span></h2>
        <p>Cloudy weather in Berlin</p>
      </span>
    </React.Fragment>
    );

    return (
    <div>
      {props.children ? props.children : text}
    </div>
    );
}

export const Madrid = (props) => {
    const text = (
    <React.Fragment>
      <span className="weather-icon sunny" />
      <span className="weather">
        <h2>31<span>ºC</span></h2>
        <p>Sunny weather in Madrid</p>
      </span>
    </React.Fragment>
    );

    return (
    <div>
      {props.children ? props.children : text}
    </div>
    );
}

const App = () => {
    return (
    <div>Custom rendering demo</div>
    );
}

export default App;
