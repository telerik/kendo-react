import * as React from 'react';

import { StackLayout, Avatar, Card, CardHeader, CardTitle, CardSubtitle, CardImage, CardBody, CardActions } from '@progress/kendo-react-layout';
import { ButtonGroup, Button } from '@progress/kendo-react-buttons';

import './styles.css';

let lindseyAvatar = 'https://demos.telerik.com/blazor-ui/images/stack-layout/avatar1.jpg';
let vincenzoAvatar = 'https://demos.telerik.com/blazor-ui/images/stack-layout/avatar2.jpg';
let marissaAvatar = 'https://demos.telerik.com/blazor-ui/images/stack-layout/avatar3.jpg';

let lindseyImage = 'https://demos.telerik.com/blazor-ui/images/stack-layout/dog1.jpg';
let vincenzoImage = 'https://demos.telerik.com/blazor-ui/images/stack-layout/summer.jpg';
let marissaImage = 'https://demos.telerik.com/blazor-ui/images/stack-layout/dog2.jpg';

const App = () => {
    const [isHorizontal, setIsHorizontal] = React.useState(true);

    const horizontalOnClick = React.useCallback(
        () => {
            setIsHorizontal(true);
        },
        [setIsHorizontal]
    );
    const verticalOnClick = React.useCallback(
        () => {
            setIsHorizontal(false);
        },
        [setIsHorizontal]
    );

    return (
    <div className="example-container k-d-flex-col">
      <div className="header k-d-flex">
        <div className="title">Popular Creators</div>
        <span className="k-spacer" />
        <div className="k-d-flex k-align-items-center">
          <ButtonGroup>
            <Button togglable={true} selected={isHorizontal} onClick={horizontalOnClick}>
              Horizontal
            </Button>
            <Button togglable={true} selected={!isHorizontal} onClick={verticalOnClick}>
              Vertical
            </Button>
          </ButtonGroup>
        </div>
      </div>

      <StackLayout
        orientation={isHorizontal ? 'horizontal' : 'vertical'}
        gap={15}
      >
        <Card className="k-flex-30">
          <CardHeader className="k-hbox">
            <Avatar type="image">
              <img src={lindseyAvatar} alt="KendoReact Layout Lindsey Avatar" />
            </Avatar>
            <div>
              <CardTitle>Lindsey Mango</CardTitle>
              <CardSubtitle>34k followers</CardSubtitle>
            </div>
          </CardHeader>
          <CardImage className="k-card-cover" src={lindseyImage} />
          <CardBody>
            <p className="photo-text">Photos by Rikonavt and by Ivana La on Unsplash</p>
          </CardBody>
          <CardActions>
            <Button fillMode="flat" themeColor={'primary'}>See more from Lindsey</Button>
          </CardActions>
        </Card>

        <Card className="k-flex-40">
          <CardHeader className="k-hbox">
            <Avatar type="image">
              <img src={vincenzoAvatar} alt="KendoReact Layout Vincenzo Avatar" />
            </Avatar>
            <div>
              <CardTitle>Vincenzo Mays</CardTitle>
              <CardSubtitle>32k followers</CardSubtitle>
            </div>
          </CardHeader>
          <CardImage className="k-card-cover" src={vincenzoImage} />
          <CardBody>
            <p className="photo-text">Photos by Irene Strong and by the BlackRabbit on Unsplash</p>
          </CardBody>
          <CardActions>
            <Button fillMode="flat" themeColor={'primary'}>See more from Vincenzo</Button>
          </CardActions>
        </Card>

        <Card className="k-flex-30">
          <CardHeader className="k-hbox">
            <Avatar type="image">
              <img src={marissaAvatar} alt="KendoReact Layout Marissa Avatar" />
            </Avatar>
            <div>
              <CardTitle>Marissa Webb</CardTitle>
              <CardSubtitle>36k followers</CardSubtitle>
            </div>
          </CardHeader>
          <CardImage className="k-card-cover" src={marissaImage} />
          <CardBody>
            <p className="photo-text">Photos by JJ Jordan and by Silvana Carlos on Unsplas</p>
          </CardBody>
          <CardActions>
            <Button fillMode="flat" themeColor={'primary'}>See more from Marissa</Button>
          </CardActions>
        </Card>
      </StackLayout>
    </div>
    );
};

export default App;
