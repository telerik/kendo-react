import * as React from 'react';
import { Notification, NotificationGroup } from '@progress/kendo-react-notification';
import { Fade } from '@progress/kendo-react-animation';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [success, setSuccess] = React.useState(false);

    const onToggle = flag => {
        setSuccess(!success);
        if(!success){
            setTimeout(()=>{
                setSuccess(false);
            },3000)
        }
    }

    return (
        <React.Fragment>
            <Button
                type="button"
                onClick={() => onToggle('success')}
            >
                {(success ? 'hide ' : 'show ') + 'Success'}
            </Button>

            <NotificationGroup
                style={{
                    right: 0,
                    bottom: 0,
                    alignItems: 'flex-start',
                    flexWrap: 'wrap-reverse'
                }}
            >
                <Fade enter={true} exit={true}>
                    {success && <Notification
                        type={{ style: 'success', icon: true }}
                        closable={true}
                        onClose={() => setSuccess(false)}
                    >
                        <span>Your data has been saved.</span>
                    </Notification>}
                </Fade>
            </NotificationGroup>
        </React.Fragment>
    );
}

export default App;

