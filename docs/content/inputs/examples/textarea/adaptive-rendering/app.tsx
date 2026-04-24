import * as React from 'react';
import { InputPrefix, InputSuffix, TextArea } from '@progress/kendo-react-inputs';
import { SvgIcon } from '@progress/kendo-react-common';
import { bookIcon, envelopeIcon, searchIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    return (
        <div className="k-d-grid k-grid-cols-sm-1 k-grid-cols-md-2 k-gap-4 k-max-w-fit">
            <div className="k-col-span-1">
                <div>
                    inputmode=text <i>(default)</i>
                </div>
                <TextArea
                    placeholder="Type your message here..."
                    inputAttributes={{ inputMode: 'text' }}
                    rows={1}
                    style={{ width: 300 }}
                />
            </div>
            <div className="k-col-span-1">
                <div>inputmode=email</div>
                <TextArea
                    placeholder="Type your email here..."
                    inputAttributes={{ inputMode: 'email' }}
                    style={{ width: 300 }}
                    rows={1}
                    prefix={() => (
                        <InputPrefix>
                            <SvgIcon icon={envelopeIcon} />
                        </InputPrefix>
                    )}
                />
            </div>
            <div className="k-col-span-1">
                <div>inputmode=search</div>
                <TextArea
                    placeholder="Search here..."
                    inputAttributes={{ inputMode: 'search' }}
                    style={{ width: 300 }}
                    rows={1}
                    suffix={() => (
                        <InputSuffix>
                            <SvgIcon icon={searchIcon} />
                        </InputSuffix>
                    )}
                />
            </div>
            <div className="k-col-span-1">
                <div>inputmode=url</div>
                <TextArea
                    placeholder="Type here..."
                    inputAttributes={{ inputMode: 'url' }}
                    style={{ width: 300 }}
                    rows={1}
                    prefix={() => (
                        <InputPrefix>
                            <Button disabled fillMode={'clear'}>
                                https://
                            </Button>
                        </InputPrefix>
                    )}
                />
            </div>
        </div>
    );
};

export default App;
