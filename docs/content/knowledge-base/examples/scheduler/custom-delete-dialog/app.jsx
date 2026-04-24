import * as React from 'react';
import { Scheduler, SchedulerEditItem, TimelineView, DayView, MonthView } from '@progress/kendo-react-scheduler';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { guid } from '@progress/kendo-react-common';
import { sampleData, displayDate } from './shared-kb-events-utc';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
	const [data, setData] = React.useState(sampleData);
	const handleDataChange = ({ created, updated, deleted }) => {
		setData((old) =>
			old
				// Filter the deleted items
				.filter((item) => deleted.find((current) => current.id === item.id) === undefined)
				// Find and replace the updated items
				.map((item) => updated.find((current) => current.id === item.id) || item)
				// Add the newly created items and assign an `id`.
				.concat(
					created.map((item) =>
						Object.assign({}, item, {
							id: guid()
						})
					)
				)
		);
	};

	const MyDialog = (props) => {
		return (
			<Dialog
				title={'Custom Delete Event Dialog'}
				onClose={props.onClose}
				contentStyle={{
					margin: '25px',
					textAlign: 'center'
				}}
			>
				<p>Are you sure you want delete {props.dataItem.title}</p>
				<DialogActionsBar>
					<Button onClick={props.onCancel}>No</Button>
					<Button themeColor="primary" onClick={props.onConfirm}>
						Yes
					</Button>
				</DialogActionsBar>
			</Dialog>
		);
	};

	const CustomEditItem = (props) => {
		return <SchedulerEditItem {...props} removeDialog={MyDialog} />;
	};

	return (
		<Scheduler
			data={data}
			editItem={CustomEditItem}
			onDataChange={handleDataChange}
			editable={{
				add: true,
				remove: true,
				drag: true,
				resize: true,
				select: true,
				edit: true
			}}
			defaultDate={displayDate}
		>
			<TimelineView />
			<DayView numberOfDays={2} />
			<MonthView />
		</Scheduler>
	);
};
export default App;
