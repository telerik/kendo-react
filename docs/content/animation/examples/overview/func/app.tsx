import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Slide, Push, Expand, Fade, Zoom, Reveal } from '@progress/kendo-react-animation';
import { Label } from '@progress/kendo-react-labels';
import { RadioButton } from '@progress/kendo-react-inputs';

import './styles.css';

const App = () => {
    const [show, setShow] = React.useState<boolean>(false);
    const [animationType, setAnimationType] = React.useState('slide');

    const handleSelect = (event) => {
        setAnimationType(event.target.value);
    };

    const children = show ? <div className="content">Content</div> : null;

    let animation;

    switch (animationType) {
        case 'slide':
            animation = <Slide>{children}</Slide>;
            break;
        case 'push':
            animation = <Push>{children}</Push>;
            break;
        case 'expand':
            animation = <Expand>{children}</Expand>;
            break;
        case 'fade':
            animation = <Fade>{children}</Fade>;
            break;
        case 'zoom':
            animation = <Zoom>{children}</Zoom>;
            break;
        case 'reveal':
            animation = <Reveal>{children}</Reveal>;
            break;
        default:
            animation = <Slide>{children}</Slide>;
            break;
    }

    return (
        <div className="example-wrapper row">
            <div className="col-xs-12 col-sm-6 example-col">{animation}</div>
            <div className="col-xs-12 col-sm-6 example-config">
                <RadioButton onClick={handleSelect} id="slide" name="type" value="slide" defaultChecked={true} />
                <Label editorId="slide" className="k-radio-label">
                    &nbsp;Slide
                </Label>
                <br />
                <RadioButton onClick={handleSelect} name="type" id="push" value="push" />
                <Label editorId="push" className="k-radio-label">
                    &nbsp;Push
                </Label>
                <br />
                <RadioButton onClick={handleSelect} name="type" id="expand" value="expand" />
                <Label editorId="expand" className="k-radio-label">
                    &nbsp;Expand
                </Label>
                <br />
                <RadioButton onClick={handleSelect} name="type" id="fade" value="fade" />
                <Label editorId="fade" className="k-radio-label">
                    &nbsp;Fade
                </Label>
                <br />
                <RadioButton onClick={handleSelect} name="type" id="zoom" value="zoom" />
                <Label editorId="zoom" className="k-radio-label">
                    &nbsp;Zoom
                </Label>
                <br />
                <RadioButton onClick={handleSelect} name="type" id="reveal" value="reveal" />
                <Label editorId="reveal" className="k-radio-label">
                    &nbsp;Reveal
                </Label>
                <br />
                <br />
                <Button onClick={() => setShow(!show)}>Animate</Button>
            </div>
        </div>
    );
};

export default App;
