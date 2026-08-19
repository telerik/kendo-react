import * as React from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';

const App = () => {
    const [opened, setOpened] = React.useState<boolean>(true);
    const [dataSaved, setDataSaved] = React.useState<boolean>(false);

    const open = () => setOpened(true);
    const close = () => setOpened(false);

    const submit = () => {
        setDataSaved(true);
        close();
    };

    const windowTop = typeof window !== 'undefined' ? Math.max(20, (window.innerHeight - 310) / 2) : 20;

    return (
        <div className="example-wrapper">
            {!opened && (
                <Button type="button" onClick={open}>
                    Open Window
                </Button>
            )}
            {dataSaved && <p>Data has been saved</p>}
            {opened && (
                <Window
                    title="Please provide additional data"
                    onClose={close}
                    minWidth={250}
                    width={450}
                    height="auto"
                    initialTop={windowTop}
                >
                    <form className="k-form">
                        <fieldset>
                            <legend>User Details</legend>
                            <label className="k-form-field">
                                <span>First Name</span>
                                <Input placeholder="Your Name" />
                            </label>
                            <label className="k-form-field">
                                <span>Last Name</span>
                                <Input placeholder="Your Last Name" />
                            </label>
                        </fieldset>
                        <div className="k-actions k-actions-end">
                            <Button type="button" onClick={close}>
                                Cancel
                            </Button>
                            <Button themeColor="primary" type="button" onClick={submit}>
                                Submit
                            </Button>
                        </div>
                    </form>
                </Window>
            )}
        </div>
    );
};

export default App;
