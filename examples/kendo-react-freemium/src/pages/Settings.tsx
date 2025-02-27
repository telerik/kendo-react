import { Button } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import { Avatar, Breadcrumb, Stepper, StepperChangeEvent } from "@progress/kendo-react-layout";
import { FloatingLabel } from "@progress/kendo-react-labels";
import { homeIcon, listUnorderedIcon, lockIcon, pencilIcon, wrenchIcon, xIcon } from "@progress/kendo-svg-icons";
import React from "react";
import { ColorPalette, ColorPaletteChangeEvent, InputSuffix, TextBox } from "@progress/kendo-react-inputs";
import { Popup } from "@progress/kendo-react-popup";

interface DataModel {
  id: string;
  text?: string;
  icon?: React.ReactNode;
}

const breadcrumbItems: DataModel[] = [
  {
      id: "home",
      icon: <SvgIcon icon={homeIcon} />,
  },
  {
      id: "settings",
      text: "Settings"
  }
];

const stepperItems = [
  { label: 'Profile Details', svgIcon: listUnorderedIcon },
  { label: 'Account Security', svgIcon: lockIcon },
  { label: 'Preferences', svgIcon: wrenchIcon }
];

export default function Settings() {
  const [value, setValue] = React.useState<number>(0);
  const [fNValue, setFNValue] = React.useState('First Name');
  const [lNValue, setLNValue] = React.useState('Last Name');
  const [emailValue, setEmailValue] = React.useState('Email');
  const [countryValue, setCountryValue] = React.useState('Country');
  const [cityValue, setCityValue] = React.useState('City');
  const [addressValue, setAddresslValue] = React.useState('Address');
  const anchor = React.useRef<any>(null);
  const [show, setShow] = React.useState(false);
  const [color, setColor] = React.useState<string>('');

  const handleChange = (e: StepperChangeEvent) => {
      setValue(e.value);
  };

  const openPalette = () => {
    setShow(!show);
  };

  const handleColorChange = (e: ColorPaletteChangeEvent) => {
    setColor(e.value);
    setShow(false);
  };

  return (
    <>
        <div style={{minHeight: 'calc(100vh - 106px)'}} className="flex flex-col p-10 gap-6">
          <Breadcrumb data={breadcrumbItems} className="!bg-app-surface" />
          <h1 className="!text-4xl">Settings</h1>

        <Stepper items={stepperItems} value={value} onChange={handleChange} />

          <div className="grid grid-cols-2 xl:grid-cols-3">
              <div className="col-span-2 flex flex-col gap-6">
                  <span className="text-lg text-subtle font-bold">Details</span>
                  <div className="flex items-center gap-2">
              <Avatar size="large" rounded="full" style={{ background: color }}>JD</Avatar>
                      <Button svgIcon={pencilIcon} size="large" fillMode="flat" themeColor="primary" ref={anchor} onClick={openPalette}>Change color</Button>
                      <Popup anchor={anchor.current && anchor.current.element} show={show} popupClass={'popup-content'}>
                        <ColorPalette
                          onChange={handleColorChange}
                          columns={9}
                          palette={['#9C38FF', '#800000', '#333333', '#218247', '#DB0000', '#8F7200',
                            '#008B8B', '#C14E34', '#027EB5', '#267B92', '#708090', '#191970',
                            '#7B3F00', '#607F1F', '#DC147F', '#5769D2', '#4682B4', '#4B0082']}
                        />
                    </Popup>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                      <FloatingLabel label="First Name" editorId={'first-name'} editorValue={fNValue}>
                        <TextBox size="large" value={fNValue} onChange={e => setFNValue(e.value as string)} suffix={() => {
                          return (
                          <InputSuffix>
                              <SvgIcon icon={xIcon} onClick={() => setFNValue('')} />
                          </InputSuffix>)
                        }} />
                          </FloatingLabel>
                      <FloatingLabel label="Last Name" editorId={'last-name'} editorValue={lNValue}>
                          <TextBox size="large" value={lNValue} onChange={e => setLNValue(e.value as string)} suffix={() => {
                            return (
                            <InputSuffix>
                                <SvgIcon icon={xIcon} onClick={() => setLNValue('')} />
                            </InputSuffix>)
                          }}/>
                      </FloatingLabel>
                      <FloatingLabel label="Email" editorId={'email'} editorValue={emailValue}>
                          <TextBox size="large" value={emailValue} onChange={e => setEmailValue(e.value as string)} suffix={() => {
                            return (
                            <InputSuffix>
                                <SvgIcon icon={xIcon} onClick={() => setEmailValue('')} />
                            </InputSuffix>)
                          }}/>
                      </FloatingLabel>
                  </div>
                  <span className="text-lg text-subtle font-bold">Contacts</span>
                  <div className="grid grid-cols-2 gap-6">
                      <FloatingLabel label="Country" editorId={'country'} editorValue={countryValue}>
                        <TextBox size="large" value={countryValue} onChange={e => setCountryValue(e.value as string)} suffix={() => {
                          return (
                          <InputSuffix>
                              <SvgIcon icon={xIcon} onClick={() => setCountryValue('')} />
                          </InputSuffix>)
                        }} />
                          </FloatingLabel>
                      <FloatingLabel label="City" editorId={'city'} editorValue={cityValue}>
                          <TextBox size="large" value={cityValue} onChange={e => setCityValue(e.value as string)} suffix={() => {
                            return (
                            <InputSuffix>
                                <SvgIcon icon={xIcon} onClick={() => setCityValue('')} />
                            </InputSuffix>)
                          }}/>
                      </FloatingLabel>
                      <FloatingLabel label="Address" editorId={'address'} editorValue={addressValue}>
                          <TextBox size="large" value={addressValue} onChange={e => setAddresslValue(e.value as string)} suffix={() => {
                            return (
                            <InputSuffix>
                                <SvgIcon icon={xIcon} onClick={() => setAddresslValue('')} />
                            </InputSuffix>)
                          }}/>
                      </FloatingLabel>
                  </div>
              </div>

              {/* Accont Security
              <div className="col-span-2 flex flex-col gap-6">
                  <span className="text-lg text-subtle font-bold">Password</span>
                  <div className="grid grid-cols-2 gap-6">
                      <FloatingLabel label="Old Password">
                          <Textbox type="password" size="large" value="Old Password" />
                      </FloatingLabel>
                      <FloatingLabel label="New Password" className="col-start-1">
                          <Textbox type="password" size="large" value="New Password" />
                      </FloatingLabel>
                      <FloatingLabel label="Confirm New Password">
                          <Textbox type="password" size="large" value="Confirm New Password" />
                      </FloatingLabel>
                  </div>
                  <span className="text-lg text-subtle font-bold">Security Questions:</span>
                  <div className="grid grid-cols-2 gap-6">
                      <FloatingLabel label="Question 1">
                          <Textbox size="large" value="Question 1" />
                      </FloatingLabel>
                      <FloatingLabel label="Answer 1">
                          <Textbox type="password" size="large" value="Answer 1" />
                      </FloatingLabel>
                      <FloatingLabel label="Question 2">
                          <Textbox size="large" value="Question 2" />
                      </FloatingLabel>
                      <FloatingLabel label="Answer 2">
                          <Textbox size="large" type="password" value="Answer 2" />
                      </FloatingLabel>
                      <FloatingLabel label="Question 3">
                          <Textbox size="large" value="Question 3" />
                      </FloatingLabel>
                      <FloatingLabel label="Answer 3">
                          <Textbox size="large" type="password" value="Answer 3" />
                      </FloatingLabel>
                  </div>
              </div> */}

              {/* Preferences
              <div className="col-span-1 col-start-1 flex flex-col gap-6">
                  <span className="text-lg text-subtle font-bold">Notification Settings:</span>
                  <div className="grid gap-6">
                      <div className="flex items-center justify-between">
                          <label>Email Notification</label>
                          <Switch onLabel="On" offLabel="Off" />
                      </div>
                      <div className="flex items-center justify-between">
                          <label>SMS Notifications</label>
                          <Switch onLabel="On" offLabel="Off" />
                      </div>
                      <div className="flex items-center justify-between">
                          <label>Push Notifications</label>
                          <Switch checked onLabel="On" offLabel="Off" />
                      </div>
                  </div>
                  <span className="text-lg text-subtle font-bold">Language and Localization</span>
                  <div className="grid gap-6">
                      <FloatingLabel label="Preferred Language">
                          <Autocomplete size="large" placeholder="-Select Language-" />
                      </FloatingLabel>
                      <FloatingLabel label="Time Zone">
                          <DropdownList size="large" placeholder="-Select Time Zone-" />
                      </FloatingLabel>
                  </div>
              </div> */}
          </div>
          <div className="flex gap-2">
              <Button themeColor="primary" size="large">Save</Button>
              <Button themeColor="primary" fillMode="outline" size="large">Cancel</Button>
          </div>
      </div>
      <div className="bg-surface-alt color-subtle p-2 text-center">
          <span>Copyright &#169; 2025 Progress Software. All rights reserved.</span>
      </div>
    </>
  )
}
