
import * as React from 'react';

import { useLocalization } from '@progress/kendo-react-intl';
import { Card, CardHeader, Avatar, CardTitle, CardSubtitle } from '@progress/kendo-react-layout';
import { guid } from '@progress/kendo-react-common';

import { Scheduler } from './../components/Scheduler';

import { employees } from './../resources/employees';
import { images } from './../resources/images';
import { orders, ordersModelFields } from './../resources/orders';
import { teams } from './../resources/teams';

const orderEmployees = employees.filter(employee => employee.jobTitle === 'Sales Representative');
const initialFilterState = { };

orderEmployees.forEach(employee => {
    if(employee.fullName === 'Wait Peperell') {
        initialFilterState[employee.id] = false;
    } else {
        initialFilterState[employee.id] = true;
    }
});

const Planning = () => {
    const localizationService = useLocalization();
    const [filterState, setFilterState] = React.useState(initialFilterState);
    const [data, setData] = React.useState(orders);

    const onDataChange = React.useCallback(
        ({ created, updated, deleted }) => {
            setData(old => old
                // Filter the deleted items
                .filter((item) => deleted.find(current => current[ordersModelFields.id] === item[ordersModelFields.id]) === undefined)
                // Find and replace the updated items
                .map((item) => updated.find(current => current[ordersModelFields.id] === item[ordersModelFields.id]) || item)
                // Add the newly created items and assign an `id`.
                .concat(created.map((item) => Object.assign({}, item, { [ordersModelFields.id]: guid() }))))
        },
        []
    );

    const onEmployeeClick = React.useCallback(
        (employeeId) => {
            setFilterState({
                ...filterState,
                [employeeId]: !filterState[employeeId]
            });
        },
        [filterState, setFilterState]
    );

    return (
        <div id="Planning" className="planning-page main-content">
            <div className="card-container grid">
                <h3 className="card-title">{localizationService.toLanguageString('custom.teamCalendar')}</h3>
                {

                    orderEmployees.map(employee => {
                        const teamColor = teams.find(({ teamID }) => teamID === employee.teamId).teamColor;

                        return (
                            <div
                                key={employee.id}
                                onClick={() => onEmployeeClick(employee.id)}
                                className={`planning-employee${filterState[employee.id] ? '' : ' planning-employee--disabled'}`}
                                style={{ '--planning-team-color': teamColor }}
                            >
                                <Card className="planning-employee-card">
                                    <CardHeader className="k-hbox" >
                                        <Avatar type='image' shape='circle' size={'large'} className="planning-employee-avatar">
                                            <div className="k-avatar-image planning-employee-image" style={{
                                                backgroundImage: images[employee.imgId + employee.gender],
                                            }}
                                            />
                                        </Avatar>
                                        <div>
                                            <CardTitle className="planning-employee-name">{employee.fullName}</CardTitle>
                                            <CardSubtitle>{employee.jobTitle}</CardSubtitle>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </div>
                        );
                    })
                }

                <div className="card-component" >
                    <Scheduler
                        data={data.filter(event => filterState[event.employeeID])}
                        onDataChange={onDataChange}
                        modelFields={ordersModelFields}
                        resources={[
                            {
                                name: 'Teams',
                                data: teams,
                                field: 'teamID',
                                valueField: 'teamID',
                                textField: 'teamName',
                                colorField: 'teamColor'
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default Planning;
