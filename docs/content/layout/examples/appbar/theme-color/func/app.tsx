import * as React from 'react';
import {
    AppBar,
    AppBarSection,
    AppBarSpacer,
} from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { bellIcon, menuIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';

const themeColors = [
    {
        text: 'Light',
        value: 'light',
    },
    {
        text: 'Primary',
        value: 'primary',
    },
    {
        text: 'Secondary',
        value: 'secondary',
    },
    {
        text: 'Tertiary',
        value: 'tertiary',
    },
    {
        text: 'Info',
        value: 'info',
    },
    {
        text: 'Success',
        value: 'success',
    },
    {
        text: 'Warning',
        value: 'warning',
    },
    {
        text: 'Error',
        value: 'error',
    },
    {
        text: 'Dark',
        value: 'dark',
    },
    {
        text: 'Inherit',
        value: 'inherit',
    },
    {
        text: 'Inverse',
        value: 'inverse',
    },
];
const App = () => {
    return (
    <React.Fragment>
      {themeColors.map((tc, index) => {
        let color: any = tc.value;
        return (
          <div className="wrap" key={index}>
            <AppBar themeColor={color}>
              <AppBarSection>
                <Button fillMode="flat" type="button" svgIcon={menuIcon} />
              </AppBarSection>

              <AppBarSpacer
                style={{
                  width: 8,
                }}
              />

              <AppBarSection>
                <h1 className="title">{tc.text} AppBar</h1>
              </AppBarSection>

              <AppBarSpacer />

              <AppBarSection>
                <Button fillMode="flat" type="button" svgIcon={bellIcon}>
                  <BadgeContainer>
                    <Badge themeColor="info" rounded={"small"} />
                  </BadgeContainer>
                </Button>
              </AppBarSection>
                        </AppBar>
                      </div>
                    )
                })
            }
        <style>{`
                body {
                    background: #dfdfdf;
                }
                .title {
                    font-size: 18px;
                    margin: 0;
                }
                .k-badge-container {
                    margin-right: 4px;
                }
                .k-icon {
                    font-size: 18px;
                }
                .wrap {
                    margin-bottom: 20px;
                }
            `}</style>
    </React.Fragment>
    );
};
export default App;
