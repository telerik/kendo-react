import * as React from 'react';
import { timezoneNames, ZonedDate } from '@progress/kendo-date-math';
import '@progress/kendo-date-math/tz/all';

const timezones = timezoneNames()
	.filter((l) => l.indexOf('/') > -1)
	.sort((a, b) => a.localeCompare(b));

const App = () => {
	const [timezone, setTimezone] = React.useState('Europe/Sofia');
	const [date, setDate] = React.useState<Date | null>(null);
	const [result, setResult] = React.useState<ZonedDate | null>(null);

	// Set up an interval when the component mounts and when timezone changes
	React.useEffect(() => {
		const intervalId = setInterval(() => tick(), 1000);
		return () => clearInterval(intervalId);
	}, [timezone]);

	const tick = () => {
		const currentDate = new Date();
		const zonedResult = ZonedDate.fromLocalDate(currentDate, timezone);

		setDate(currentDate);
		setResult(zonedResult);
	};

	const handleTimezoneChange = (event) => {
		const selectedTimezone = event.target.value;
		setTimezone(selectedTimezone);
	};

	return (
		<React.Fragment>
			<div className="row example-config">
				<div className="col-xs-12 example-col">
					<p>Current Universal Coordinated Time:</p>
					{date && date.toUTCString()}
				</div>
			</div>
			<div className="row example-config">
				<div className="col-xs-12 example-col">
					<p>
						Local time in{' '}
						<select onChange={handleTimezoneChange} value={timezone}>
							{timezones.map((zone, i) => (
								<option key={i}>{zone}</option>
							))}
						</select>
					</p>
					{result && result.toString()}
				</div>
			</div>
		</React.Fragment>
	);
};

export default App;
