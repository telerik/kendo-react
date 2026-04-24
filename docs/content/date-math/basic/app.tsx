import * as React from 'react';

import { addDays, addWeeks, addMonths, addYears, addDecades, addCenturies } from '@progress/kendo-date-math';
import { Calendar } from '@progress/kendo-react-dateinputs';
import { NumericTextBox } from '@progress/kendo-react-inputs';

const initialState = {
	startDate: new Date(),
	resultDate: new Date(),
	dateParts: {
		days: 1,
		weeks: 0,
		months: 0,
		years: 0,
		decades: 0,
		centuries: 0
	}
};

const App = () => {
	const [state, setState] = React.useState(initialState);

	const changeStartDate = ({ value }) => {
		setState({
			startDate: value,
			resultDate: value,
			dateParts: {
				days: 1,
				weeks: 0,
				months: 0,
				years: 0,
				decades: 0,
				centuries: 0
			}
		});
	};

	const computeResultDate = (startDate: Date, parts: typeof initialState.dateParts): Date => {
		let result = addDays(startDate, parts.days);
		result = addWeeks(result, parts.weeks);
		result = addMonths(result, parts.months);
		result = addYears(result, parts.years);
		result = addDecades(result, parts.decades);
		result = addCenturies(result, parts.centuries);
		return result;
	};

	const changePart = (part: string) => ({ value }: { value: number | null }) => {
		const { startDate, dateParts } = state;
		const newParts = { ...dateParts, [part]: value ?? 0 };
		const resultDate = computeResultDate(startDate, newParts);
		setState({ ...state, resultDate, dateParts: newParts });
	};

	const { startDate, dateParts, resultDate } = state;
	return (
		<div>
			The new date is {resultDate.toLocaleDateString()}
			<div className="row example-config">
				<div className="col-sm-12 col-md-6 example-col">
					<p>Start Date</p>
					<Calendar value={resultDate} onChange={changeStartDate} />
				</div>
				<div className="col-sm-12 col-md-6 example-col">
					<div className="row">
						<div className="col-sm-4">
							<p>Days</p>
							<NumericTextBox
								format="N0"
								width={80}
								value={dateParts.days}
								onChange={changePart('days')}
							/>
						</div>
						<div className="col-sm-4">
							<p>Weeks</p>
							<NumericTextBox
								format="N0"
								width={80}
								value={dateParts.weeks}
								onChange={changePart('weeks')}
							/>
						</div>
						<div className="col-sm-4">
							<p>Months</p>
							<NumericTextBox
								format="N0"
								width={80}
								value={dateParts.months}
								onChange={changePart('months')}
							/>
						</div>
						<div className="col-sm-4">
							<p>Years</p>
							<NumericTextBox
								format="N0"
								width={80}
								value={dateParts.years}
								onChange={changePart('years')}
							/>
						</div>
						<div className="col-sm-4">
							<p>Decades</p>
							<NumericTextBox
								format="N0"
								width={80}
								value={dateParts.decades}
								onChange={changePart('decades')}
							/>
						</div>
						<div className="col-sm-4">
							<p>Centuries</p>
							<NumericTextBox
								format="N0"
								width={80}
								value={dateParts.centuries}
								onChange={changePart('centuries')}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
