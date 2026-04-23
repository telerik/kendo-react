import * as React from 'react';
import { InputPrefix, InputSuffix, TextBox } from '@progress/kendo-react-inputs';
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
                <TextBox
                    placeholder="Type your message here..."
                    inputAttributes={{ inputMode: 'text' }}
                    style={{ width: 300 }}
                />
            </div>
            <div className="k-col-span-1">
                <div>inputmode=tel</div>
                <TextBox
                    placeholder="(999) 000-00-00-00"
                    inputAttributes={{ inputMode: 'tel' }}
                    style={{ width: 300 }}
                    suffix={() => (
                        <InputSuffix>
                            <SvgIcon icon={bookIcon} />
                        </InputSuffix>
                    )}
                />
            </div>
            <div className="k-col-span-1">
                <div>inputmode=email</div>
                <TextBox
                    placeholder="Type your email here..."
                    inputAttributes={{ inputMode: 'email' }}
                    style={{ width: 300 }}
                    prefix={() => (
                        <InputPrefix>
                            <SvgIcon icon={envelopeIcon} />
                        </InputPrefix>
                    )}
                />
            </div>
            <div className="k-col-span-1">
                <div>inputmode=search</div>
                <TextBox
                    placeholder="Search here..."
                    inputAttributes={{ inputMode: 'search' }}
                    style={{ width: 300 }}
                    suffix={() => (
                        <InputSuffix>
                            <SvgIcon icon={searchIcon} />
                        </InputSuffix>
                    )}
                />
            </div>
            <div className="k-col-span-1">
                <div>inputmode=url</div>
                <TextBox
                    placeholder="Type here..."
                    inputAttributes={{ inputMode: 'url' }}
                    style={{ width: 300 }}
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
