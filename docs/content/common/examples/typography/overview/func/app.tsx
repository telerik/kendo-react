import * as React from 'react';

import { Typography } from '@progress/kendo-react-common';

const App = () => {
    return (
        <React.Fragment>
            <Typography.h1>Headline 1</Typography.h1>
            <Typography.h2>Headline 2</Typography.h2>
            <Typography.h3>Headline 3</Typography.h3>
            <Typography.h4>Headline 4</Typography.h4>
            <Typography.h5>Headline 5</Typography.h5>
            <Typography.h6>Headline 6</Typography.h6>
            <Typography.p>I am a paragraph</Typography.p>
            <Typography.code>code</Typography.code>
            <Typography.pre>
                <Typography.code
                    dangerouslySetInnerHTML={{
                        __html: `const handleChange = ({ target }) => {
  const { name, value } = target;
  const newData = Object.assign({}, data, { [name]: value });
  setData(newData);
}`
                    }}
                />
            </Typography.pre>
        </React.Fragment>
    );
};

export default App;
