import * as React from 'react';

import { RangeSlider, SliderLabel } from '@progress/kendo-react-inputs';

const styles = `
.k-slider.myRangeSlider {
  .k-slider-track {
    background: rgb(255, 199, 37);
    background: linear-gradient(
      90deg,
      rgba(255, 199, 37, 1) 19%,
      rgba(154, 208, 223, 1) 84%
    );
  }
  div.k-slider-selection {
    background-color: transparent;
  }

  .k-draghandle {
    background-color: white;
    border-width: 2px;
  }
}`;

const App = () => {
	return (
		<>
			<style>{styles}</style>
			<RangeSlider
				defaultValue={{ start: 3500, end: 5500 }}
				step={1}
				min={2500}
				max={6500}
				style={{ backgroudColor: 'red' }}
				className={'myRangeSlider'}
			>
				{[2500, 6500].map((perc, i) => (
					<SliderLabel key={i} position={perc}>
						{perc.toString()}
					</SliderLabel>
				))}
			</RangeSlider>
		</>
	);
};

export default App;
