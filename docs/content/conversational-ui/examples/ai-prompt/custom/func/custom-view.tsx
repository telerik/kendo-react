import * as React from 'react';

import {
    AIPromptToolbarItemInterface,
    AIPromptViewRender,
    AIPromptContent,
    promptViewDefaults
} from '@progress/kendo-react-conversational-ui';
import { menuIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';
import { Card, CardActions, CardBody } from '@progress/kendo-react-layout';

export const customViewToolbarItem: AIPromptToolbarItemInterface = {
    name: 'more',
    buttonIcon: menuIcon
};

export const CustomView = (props: { setActiveView: any }) => {
    const { setActiveView } = props;

    return (
        <AIPromptViewRender name={customViewToolbarItem.name}>
            <AIPromptContent>
                <Card>
                    <CardBody>
                        The KendoReact AIPrompt enables you to render custom components for the Generate button and
                        prompt input.
                    </CardBody>
                    <CardActions>
                        <Button
                            size={'medium'}
                            themeColor={'primary'}
                            fillMode={'flat'}
                            rounded={'full'}
                            svgIcon={undefined}
                            onClick={() => setActiveView(promptViewDefaults.name)}
                        >
                            Use AI
                        </Button>
                    </CardActions>
                </Card>
            </AIPromptContent>
        </AIPromptViewRender>
    );
};
