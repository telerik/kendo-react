import * as React from 'react';

const PageTemplate = (props) => {
  return (
    <div>
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
        }}
      >
        Footer Page {props.pageNum} of {props.totalPages}
      </div>
    </div>
  );
};

export default PageTemplate;
