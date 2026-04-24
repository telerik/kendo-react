import * as React from 'react';
import { SplitButton } from '@progress/kendo-react-buttons';
import { saveIcon, uploadIcon } from '@progress/kendo-svg-icons';

const ButtonContainer = () => {
    const iconItems = [{ text: 'Save as' }, { text: 'Upload to drive', svgIcon: uploadIcon }];
    const iconClassItems = [
        { text: 'Reply all', iconClass: 'fa fa-mail-reply-all fa-fw' },
        { text: 'Forward', iconClass: 'fa fa-mail-forward fa-fw' },
        { text: 'Reply & delete' }
    ];
    const imageItems = [{ text: 'Save as' }, { text: 'Upload to drive', svgIcon: uploadIcon }];
    const imageUrl = 'https://demos.telerik.com/kendo-ui/content/web/toolbar/save.png';

    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
            <div className="row example-wrapper">
                <div className="col-xs-12 col-sm-6 example-col">
                    <p>KendoReact svg icon</p>
                    <div className="k-hstack k-gap-2">
                        <SplitButton items={iconItems} svgIcon={saveIcon} text="Save" />
                        <SplitButton items={iconItems} svgIcon={saveIcon} />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 example-col">
                    <p>FontAwesome icon</p>
                    <div className="k-hstack k-gap-2">
                        <SplitButton items={iconClassItems} iconClass="fa fa-mail-reply fa-fw" text="Reply" />
                        <SplitButton items={iconClassItems} iconClass="fa fa-mail-reply fa-fw" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 example-col">
                    <p>Image icon</p>
                    <div className="k-hstack k-gap-2">
                        <SplitButton items={imageItems} imageUrl={imageUrl} text="Save" />
                        <SplitButton items={imageItems} imageUrl={imageUrl} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ButtonContainer;
