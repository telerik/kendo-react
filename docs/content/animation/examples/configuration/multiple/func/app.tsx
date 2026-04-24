import * as React from 'react';

import { Slide } from '@progress/kendo-react-animation';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';
import { SvgIcon } from '@progress/kendo-react-common';
import { xIcon } from '@progress/kendo-svg-icons';

interface Item {
    name: string;
}

const Task = ({ dataItem, onRemove }) => {
    const click = function () {
        onRemove(dataItem);
    };

    return (
        <div className="k-item k-header">
            <SvgIcon icon={xIcon} style={{ cursor: 'pointer' }} onClick={click} />
            <span style={{ verticalAlign: 'middle' }}>{dataItem.name}</span>
        </div>
    );
};

const App = () => {
    const [tasks, setTasks] = React.useState<Item[]>([
        { name: 'John' },
        { name: 'Carrey' },
        { name: 'Joe' },
        { name: 'Doe' },
        { name: 'Chan' },
        { name: 'Chani' },
        { name: 'Bush' }
    ]);
    const [inputValue, setInputValue] = React.useState<string>('');
    const [action, setAction] = React.useState('');

    const itemNameInput: any = React.createRef();

    const add = () => {
        let newTasks = tasks.slice();

        newTasks.push({
            name: itemNameInput.current.value
        });

        setInputValue('');
        setTasks(newTasks);
        setAction('add');
    };

    const remove = (item: Item) => {
        let predicate = function (current: Item) {
            return current !== item;
        };

        setAction('remove');
        setTasks(tasks.filter(predicate));
    };

    const renderTasks = () => {
        return tasks.map((task, idx) => <Task key={idx} dataItem={task} onRemove={remove} />);
    };

    const currentTasks = renderTasks();

    return (
        <div>
            {action}
            <fieldset>
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.value)}
                    placeholder="Item name..."
                    ref={itemNameInput}
                    style={{ width: '150px' }}
                />
                <Button type="button" onClick={add}>
                    Add
                </Button>
            </fieldset>
            <Slide direction="right" className="k-list-scroller">
                {currentTasks}
            </Slide>
        </div>
    );
};

export default App;
