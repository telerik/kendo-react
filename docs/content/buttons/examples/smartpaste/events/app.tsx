import * as React from 'react';
import './styles.css';
import { Form, Field, FormElement, FormRenderProps } from '@progress/kendo-react-form';
import { Error as ErrorLabel, Label } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
import { Button, SmartPasteButton, SmartPasteClickEvent } from '@progress/kendo-react-buttons';
import { copyIcon } from '@progress/kendo-svg-icons';

const FormInput = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, ...others } = fieldRenderProps;
    const showValidationMessage = touched && validationMessage;
    const errorId = showValidationMessage ? `${id}_error` : '';

    return (
        <div className="k-form-field">
            <Label editorId={id} editorValid={valid}>
                {label}
            </Label>
            <Input valid={valid} id={id} aria-describedby={errorId} {...others} />
            {showValidationMessage && <ErrorLabel id={errorId}>{validationMessage}</ErrorLabel>}
        </div>
    );
};

interface EventLogEntry {
    type: 'request' | 'response';
    timestamp: string;
    data: any;
}

const sampleData = `John Smith
Email: john.smith@example.com
Phone: (555) 123-4567
Company: Acme Corp`;

const App = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [eventLogs, setEventLogs] = React.useState<EventLogEntry[]>([]);

    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));

    const copyToClipboard = () => {
        navigator.clipboard.writeText(sampleData);
    };

    const clearLogs = () => {
        setEventLogs([]);
    };

    const handleSmartPaste = async (event: SmartPasteClickEvent) => {
        // Log the request data
        setEventLogs((prev) => [
            {
                type: 'request',
                timestamp: new Date().toLocaleTimeString(),
                data: event.requestData
            },
            ...prev
        ]);

        setIsLoading(true);

        try {
            const response = await fetch('https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(event.requestData)
            });

            if (!response.ok) {
                throw new Error('AI service error: ' + response.statusText);
            }

            const data = await response.json();

            // Log the response data
            setEventLogs((prev) => [
                {
                    type: 'response',
                    timestamp: new Date().toLocaleTimeString(),
                    data: data
                },
                ...prev
            ]);

            event.setResponse(data);
        } catch (error) {
            console.error('Smart paste failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="demo-wrapper">
            <div className="demo-hint">
                Copy the sample data to your clipboard, then click <strong>Smart Paste</strong> to see the events in the
                log.
            </div>
            <div className="events-demo">
                <div className="sample-data-box">
                    <strong>Sample Data:</strong> {sampleData}
                    <Button svgIcon={copyIcon} onClick={copyToClipboard} fillMode="flat" size="small">
                        Copy
                    </Button>
                </div>

                <div className="main-content">
                    <div className="form-container">
                        <Form
                            onSubmit={handleSubmit}
                            render={(formRenderProps: FormRenderProps) => (
                                <FormElement>
                                    <legend className="k-form-legend">Contact Form</legend>
                                    <SmartPasteButton
                                        disabled={isLoading}
                                        onClick={handleSmartPaste}
                                        themeColor="primary"
                                    >
                                        {isLoading ? 'Processing...' : 'Smart Paste'}
                                    </SmartPasteButton>

                                    <Field name="fullName" id="fullName" component={FormInput} label="Full Name" />
                                    <Field name="email" id="email" component={FormInput} label="Email" />
                                    <Field name="phone" id="phone" component={FormInput} label="Phone" />
                                    <Field name="company" id="company" component={FormInput} label="Company" />

                                    <div className="k-form-buttons">
                                        <Button
                                            type="submit"
                                            themeColor="primary"
                                            disabled={!formRenderProps.allowSubmit}
                                        >
                                            Submit
                                        </Button>
                                    </div>
                                </FormElement>
                            )}
                        />
                    </div>

                    <div className="event-logger">
                        <div className="event-logger-header">
                            <strong>Event Log</strong>
                            <Button onClick={clearLogs} fillMode="flat" size="small">
                                Clear
                            </Button>
                        </div>
                        <div className="event-logger-content">
                            {eventLogs.length === 0 ? (
                                <span className="placeholder-text">Click Smart Paste to see event data...</span>
                            ) : (
                                eventLogs.map((log, index) => (
                                    <div key={index} className={`event-logger-item ${log.type}`}>
                                        <div className="event-logger-label">
                                            {log.type === 'request' ? 'Request' : 'Response'} @ {log.timestamp}
                                        </div>
                                        <div>{JSON.stringify(log.data, null, 2)}</div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
