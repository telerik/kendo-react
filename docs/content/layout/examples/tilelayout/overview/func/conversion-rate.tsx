import * as React from "react";

const ConversionRate = ({ data }) => {
    let conversions = 0;
    let users = 0;
    data.map(
        (item, i) => (
            (conversions = conversions + item.conversion),
            (users = users + item.users)
        )
    );

    return (
    <div>
      <h3>{Math.round(users / conversions)}%</h3>
      <p> Visitor to customer </p>
    </div>
    );
};

export default ConversionRate;
