import * as React from 'react';
import {
    Scheduler,
    MonthView,
    SchedulerItem,
    useSchedulerEditItemFormItemContext,
    useSchedulerEditItemRemoveItemContext,
    useSchedulerEditItemShowOccurrenceDialogContext,
    useSchedulerEditItemShowRemoveDialogContext,
    SchedulerItemHandle,
    SchedulerDataChangeEvent,
    SchedulerResource,
    SchedulerItemProps
} from '@progress/kendo-react-scheduler';
import { Popup } from '@progress/kendo-react-popup';
import { useInternationalization } from '@progress/kendo-react-intl';
import { Card, CardHeader, CardBody, CardTitle } from '@progress/kendo-react-layout';
import { useAsyncFocusBlur, clone } from '@progress/kendo-react-common';
import { Button } from '@progress/kendo-react-buttons';

import { sampleDataWithResources, displayDate } from './sc-events-utc';

const resources: SchedulerResource[] = [
    {
        name: 'Rooms',
        data: [
            { text: 'Meeting Room 101', value: 1, color: '#5392E4' },
            { text: 'Meeting Room 201', value: 2, color: '#FF7272' }
        ],
        field: 'roomId',
        valueField: 'value',
        textField: 'text',
        colorField: 'color'
    }
];

const CustomItem = (props: SchedulerItemProps) => {
    const intl = useInternationalization();
    const item = React.useRef<SchedulerItemHandle>(null);
    const [show, setShow] = React.useState<boolean>(false);

    const resourceWithColor = props.group.resources.find(
        (resource) => resource.colorField && resource[resource.colorField] !== undefined
    );
    const color = resourceWithColor && resourceWithColor.colorField && resourceWithColor[resourceWithColor.colorField];

    const [, setFormItem] = useSchedulerEditItemFormItemContext();
    const [, setRemoveItem] = useSchedulerEditItemRemoveItemContext();

    const [, setShowOccurrenceDialog] = useSchedulerEditItemShowOccurrenceDialogContext();
    const [, setShowRemoveDialog] = useSchedulerEditItemShowRemoveDialogContext();

    const handleClick = React.useCallback(
        (event) => {
            setShow(true);
            if (props.onClick) {
                props.onClick(event);
            }
        },
        [props]
    );
    const handleBlur = React.useCallback(
        (event) => {
            setShow(false);
            if (props.onBlur) {
                props.onBlur(event);
            }
        },
        [props]
    );
    const handleCloseClick = React.useCallback(() => {
        setShow(false);
    }, [setShow]);
    const handleEditClick = React.useCallback(() => {
        setShow(false);
        setFormItem(props.dataItem);
        if (props.isRecurring) {
            setShowOccurrenceDialog(true);
        }
    }, [setFormItem, props.dataItem, props.isRecurring, setShowOccurrenceDialog]);
    const handleDeleteClick = React.useCallback(() => {
        setShow(false);
        setRemoveItem(props.dataItem);

        if (props.isRecurring) {
            setShowOccurrenceDialog(true);
        } else {
            setShowRemoveDialog(true);
        }
    }, [setRemoveItem, props.dataItem, props.isRecurring, setShowOccurrenceDialog, setShowRemoveDialog]);

    const { onFocus, onBlur } = useAsyncFocusBlur({ onFocus: props.onFocus as any, onBlur: handleBlur as any });

    return (
        <React.Fragment>
            <SchedulerItem ref={item} {...props} onClick={handleClick} onFocus={onFocus} onBlur={onBlur}>
                {props.children}
            </SchedulerItem>
            <Popup
                anchor={item.current && item.current.element}
                show={show}
                style={{
                    width: 300
                }}
                anchorAlign={{
                    horizontal: 'right',
                    vertical: 'center'
                }}
                popupAlign={{
                    horizontal: 'left',
                    vertical: 'center'
                }}
            >
                <div tabIndex={-1} onFocus={onFocus} onBlur={onBlur}>
                    <Card>
                        <CardHeader className="ml-auto pb-0">
                            <Button iconClass="k-icon k-i-edit" fillMode="flat" onClick={handleEditClick} />
                            <Button iconClass="k-icon k-i-delete" fillMode="flat" onClick={handleDeleteClick} />
                            <Button iconClass="k-icon k-i-close" fillMode="flat" onClick={handleCloseClick} />
                        </CardHeader>
                        <CardBody>
                            <CardTitle>
                                <div className="row">
                                    <div className="col-1">
                                        <div
                                            style={{
                                                backgroundColor: color,
                                                width: 16,
                                                height: 16,
                                                position: 'relative',
                                                top: '50%',
                                                borderRadius: 4,
                                                transform: 'translateY(-50%)'
                                            }}
                                        />
                                    </div>
                                    <div className="col">
                                        <div>{props.title}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1" />
                                    <div className="col">
                                        <small>{intl.formatDate(props.zonedStart, 'EEEE, d MMMM')}</small>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                        <span className="k-icon k-i-clock" />
                                    </div>
                                    <div className="col">
                                        <div>From: {intl.formatDate(props.zonedStart, 't')}</div>
                                        <div>To: {intl.formatDate(props.zonedEnd, 't')}</div>
                                    </div>
                                </div>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </div>
            </Popup>
        </React.Fragment>
    );
};

const App = () => {
    const [data, setData] = React.useState<any[]>(sampleDataWithResources.slice());

    const handleDataChange = React.useCallback(
        (event: SchedulerDataChangeEvent) => {
            const { created, updated, deleted } = event;

            setData((old) => {
                return (
                    old
                        .slice()
                        // delete
                        .filter((item) => !deleted.find((del) => del.id === item.id))
                        // update
                        .map((item) => {
                            const index = updated.findIndex((current) => current.id === item.id);
                            if (index > -1) {
                                return clone(updated[index]);
                            } else {
                                return clone(item);
                            }
                        })
                        .concat(created.map((i) => ({ ...i, id: new Date().getTime() })))
                );
            });
        },
        [setData]
    );

    return (
        <div>
            <Scheduler
                data={data}
                onDataChange={handleDataChange}
                defaultDate={displayDate}
                editable={true}
                item={CustomItem}
                view={'month'}
                height={600}
                resources={resources}
            >
                <MonthView />
            </Scheduler>
        </div>
    );
};

export default App;
