import * as React from 'react';

import { Chart, ChartLegend, ChartSeries, ChartSeriesItem, ChartTitle } from '@progress/kendo-react-charts';

const series = [
	{ category: '0-14', value: 0.2545, visible: false },
	{ category: '15-24', value: 0.1552, visible: true },
	{ category: '25-54', value: 0.4059, visible: true },
	{ category: '55-64', value: 0.0911, visible: true },
	{ category: '65+', value: 0.0933, visible: true }
];

const labelContent = (props) => {
	let formatedNumber = Number(props.dataItem.value).toLocaleString(undefined, {
		style: 'percent',
		minimumFractionDigits: 2
	});
	return `${props.dataItem.category} years old: ${formatedNumber}`;
};

const ChartContainer = () => {
	const [data, setData] = React.useState(series);

	const onLegendItemClick = (e) => {
		var clickedItem = series[e.pointIndex];

		let newSeries = series.map((item) => {
			if (item.category === clickedItem.category) {
				item.visible = !item.visible;
			}
			return item;
		});

		setData(newSeries);
	};

	return (
		<Chart onLegendItemClick={onLegendItemClick}>
			<ChartTitle text="World Population by Broad Age Groups" />
			<ChartLegend position="bottom" />
			<ChartSeries>
				<ChartSeriesItem
					type="pie"
					data={series}
					field="value"
					categoryField="category"
					labels={{ visible: true, content: labelContent }}
				/>
			</ChartSeries>
		</Chart>
	);
};
export default ChartContainer;
