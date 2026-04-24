import * as React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardImage, CardActions } from '@progress/kendo-react-layout';
import { Button } from "@progress/kendo-react-buttons";

const CardComponent = (props) => {
    const { dir } = props;
    return (
      <Card dir={dir} style={{ width: 300, margin: 'auto' }}>
        <CardImage src={"https://demos.telerik.com/kendo-ui/content/web/cards/barcelona.jpg"} />
        <CardHeader>
          <CardTitle>
            Barcelona
          </CardTitle>
        </CardHeader>
        <CardBody>
          <p>Barcelona, the cosmopolitan capital of Spain's Catalonia region, is known for its art and architecture.</p>
          <p>The fantastical Sagrada FamÃ­lia church and other modernist landmarks designed by Antoni GaudÃ­ dot the city.</p>
        </CardBody>
        <CardActions>
        <Button fillMode='flat' themeColor={'primary'} type="button"> Map </Button>
        <Button fillMode='flat' themeColor={'primary'} type="button"> Weather </Button>
        </CardActions>
      </Card>
    )
};

export default CardComponent;
