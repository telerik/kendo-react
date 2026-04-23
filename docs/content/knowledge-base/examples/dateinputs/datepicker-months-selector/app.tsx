import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Calendar, CalendarProps } from '@progress/kendo-react-dateinputs';

const CustomCalendar = (props: CalendarProps) => {
    return <Calendar bottomView="year" topView="year" value={props.value} onChange={props.onChange} />;
};

const App = () => {
    return (
        <div>
            <DatePicker format={'MM/yyyy'} calendar={CustomCalendar} />
        </div>
    );
};

export default App;
