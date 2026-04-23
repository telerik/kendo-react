import * as React from 'react';
import { InputPrefix, InputSuffix, MaskedTextBox } from '@progress/kendo-react-inputs';
import { SvgIcon } from '@progress/kendo-react-common';
import { bookIcon, envelopeIcon } from '@progress/kendo-svg-icons';

const App = () => {
    const lettersMask = 'LLLLL';
    const numbersMask = 'NNNNN';
    const rules = {
        L: new RegExp(/[a-zA-Z]/),
        N: new RegExp(/[0-9]/)
    };
    return (
        <div className="k-d-grid k-grid-cols-sm-1 k-grid-cols-md-2 k-gap-4 k-max-w-fit">
            <div className="k-col-span-1">
                <div>
                    inputmode=text <i>(default)</i>
                </div>
                <MaskedTextBox
                    mask={lettersMask}
                    rules={rules}
                    placeholder="Enter text..."
                    inputAttributes={{ inputMode: 'text' }}
                    style={{ width: 300 }}
                />
            </div>
            <div className="k-col-span-1">
                <div>inputmode=tel</div>
                <MaskedTextBox
                    mask="(999) 000-00-00-00"
                    placeholder="(___) ___-__-__-__"
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
                <MaskedTextBox
                    placeholder="example@email.com"
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
                <div>inputmode=numeric</div>
                <MaskedTextBox
                    mask={numbersMask}
                    rules={rules}
                    placeholder="Enter a number..."
                    inputAttributes={{ inputMode: 'numeric' }}
                    style={{ width: 300 }}
                />
            </div>
        </div>
    );
};

export default App;
