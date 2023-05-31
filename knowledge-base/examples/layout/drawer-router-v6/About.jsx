import * as React from 'react';
const text = <div>
    <p>
      So cuffed therefore by some sadistically mallard rewrote yet accommodatingly more
      cat adequate pesky far this dear fitting and groundhog horse some selfish jeepers juggled
      about since upheld heatedly well much.
    </p>
    <p>
      Therefore falcon usefully crab during onto hello regally rat wiped misread reluctant unlike
      iguanodon fish far bald abjectly far chameleon more scurrilous gagged virtuously sufficient
      arrogant cobra froze dog waywardly staunch thus consoled.
    </p>
    <p>
      Amphibious darn well densely far meanly inanimately incoherent away flamingo outside yet jeez
      that yawned secret evasive dear overrode rat cow one overpaid far hatchet much.
    </p>
    <p>
      Had aerial well well coasted darn chuckled studied underlay fatally the but among because
      patient or shook depending much sloth wetted cheered some bee.
    </p>
    <p>
      Bombastically yikes some coquettish erroneously in therefore disgracefully glanced some
      connected and goodness more read marvelous up one rebukingly darn fuzzily.
    </p>
    <p>
      Meadowlark and hence regarding flaunting amongst steadfastly demurely like far and stiffly
      bled reluctant alongside jeez this save opposite well and this shuddered and smoked wherever
      condescendingly hey onto much.
    </p>
    <p>
      Hello gosh gosh up effortlessly valiant hotly less rubbed gerbil and ouch inside fatuous
      suitably far fuzzily unihibitedly locked froze timidly hello much revealed lorikeet lantern
      this much one and far decidedly.
    </p>
  </div>;

const About = props => {
  return <div>
      <h2>About</h2>
      {props.children ? props.children : text}
    </div>;
};

export default About;