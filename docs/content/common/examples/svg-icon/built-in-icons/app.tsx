import * as React from 'react';
import { SplitButton } from '@progress/kendo-react-buttons';
import { saveIcon, uploadIcon } from '@progress/kendo-svg-icons';
import { IconsContext } from '@progress/kendo-react-common';

import { caretAltDownIcon, filterIcon } from '@progress/kendo-svg-icons';

const inflatable = {
    name: 'inflatable',
    content:
        '<svg viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M511.7 512m-446.9 0a446.9 446.9 0 1 0 893.8 0 446.9 446.9 0 1 0-893.8 0Z" fill="#E4E4E4" /><path d="M160.2 788.1l351.5-276-276-351.5C41.6 313 7.8 593.9 160.2 788.1zM863.8 788.1l-351.5-276 276-351.5c194.1 152.4 227.9 433.3 75.5 627.5z" fill="#F25421" /><path d="M512.1 512.1m-186.4 0a186.4 186.4 0 1 0 372.8 0 186.4 186.4 0 1 0-372.8 0Z" fill="#8FCEE2" /><path d="M511.2 698.5c90.7 0 166.3-64.8 182.9-150.7-6.2 1.3-12.5 1.6-18.7 0.2-13.1-2.9-24.5-16.9-19.7-29.3-22.1 15.6-49.3 23.7-76.3 22.8-7.5-0.3-15.1-1.3-21.6-5-6.5-3.7-11.5-10.7-11.1-18.1-7.3 11.4-20 18.4-33.2 21.6-13.1 3.2-26.8 3.1-40.4 2.9-9.1-0.1-18.6-0.4-26.5-5-11.1-6.5-15.8-19.9-19.6-32.2-12 18.6-34.8 27.9-56.8 29.3-15 0.9-29.9-1.4-44.6-4.6 9.3 94.4 88.9 168.1 185.6 168.1z" fill="#13AEE5" /><path d="M423.5 204.2c3.2 2.6 7.6 3.5 11.6 2.3 29.4-9 60.7-13.8 93-13.8 176.2 0 319.5 143.3 319.5 319.5 0 10-0.5 20-1.4 29.8-0.4 4.2 1.3 8.2 4.5 10.9 7.8 6.4 19.5 1.4 20.4-8.6 1-10.6 1.5-21.3 1.5-32 0-46.5-9.1-91.6-27.1-134.1-17.4-41-42.2-77.9-73.8-109.5-31.6-31.6-68.5-56.5-109.5-73.8-42.5-18-87.6-27.1-134.1-27.1-34.4 0-68 5-100.3 14.9-9.6 2.7-12.1 15.2-4.3 21.5z" fill="#FFFDFD" /><path d="M856.1 619m-14 0a14 14 0 1 0 28 0 14 14 0 1 0-28 0Z" fill="#FFFDFD" /></svg>',
    viewBox: '0 0 512 512'
};

const App = () => {
    const iconItems: any = [{ text: 'Save as' }, { text: 'Upload to drive', svgIcon: uploadIcon }];
    const iconClassItems: any = [
        { text: 'Reply all', iconClass: 'fa fa-mail-reply-all fa-fw' },
        { text: 'Forward', iconClass: 'fa fa-mail-forward fa-fw' },
        { text: 'Reply & delete' }
    ];
    const imageItems: any = [{ text: 'Save as' }, { text: 'Upload to drive', svgIcon: uploadIcon }];
    const imageUrl: string = 'https://demos.telerik.com/kendo-ui/content/web/toolbar/save.png';

    return (
        <div>
            <IconsContext.Provider
                value={{
                    type: 'svg',
                    icons: {
                        //a custom SVG icon
                        [caretAltDownIcon.name]: inflatable
                        //or any of the built-in SVG icons
                        //[caretAltDownIcon.name]: filterIcon,
                    }
                }}
            >
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
                />
                <div className="row example-wrapper">
                    <div className="col-xs-12 col-sm-6 example-col">
                        <p>KendoReact Built-in SVG icon</p>
                        <div>
                            <SplitButton items={iconItems} svgIcon={saveIcon} text="Save" />
                            <SplitButton items={iconItems} svgIcon={saveIcon} />
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 example-col">
                        <p>FontAwesome icon</p>
                        <div>
                            <SplitButton items={iconClassItems} iconClass="fa fa-mail-reply fa-fw" text="Reply" />
                            <SplitButton items={iconClassItems} iconClass="fa fa-mail-reply fa-fw" />
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 example-col">
                        <p>Image icon</p>
                        <div>
                            <SplitButton items={imageItems} imageUrl={imageUrl} text="Save" />
                            <SplitButton items={imageItems} imageUrl={imageUrl} />
                        </div>
                    </div>
                </div>
            </IconsContext.Provider>
        </div>
    );
};

export default App;
