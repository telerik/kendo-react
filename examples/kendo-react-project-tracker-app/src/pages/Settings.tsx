import { Button } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import { Avatar, Breadcrumb, BreadcrumbLinkMouseEvent, Stepper, StepperChangeEvent } from "@progress/kendo-react-layout";
import { FloatingLabel } from "@progress/kendo-react-labels";
import { homeIcon, listUnorderedIcon, lockIcon, pencilIcon, wrenchIcon, xIcon } from "@progress/kendo-svg-icons";
import React from "react";
import { ColorPalette, ColorPaletteChangeEvent, InputSuffix, Switch, TextBox } from "@progress/kendo-react-inputs";
import { Popup } from "@progress/kendo-react-popup";
import { AutoComplete, DropDownList } from "@progress/kendo-react-dropdowns";
import { useNavigate } from 'react-router-dom';
import PageFooter from "../components/PageFooter";

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

const colorPalette = ['#9C38FF', '#800000', '#333333', '#218247', '#DB0000', '#8F7200',
  '#008B8B', '#C14E34', '#027EB5', '#267B92', '#637282', '#191970',
  '#7B3F00', '#607F1F', '#DC147F', '#5769D2', '#3C73A2', '#4B0082'];
const avatarTones = ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning'] as const;

export default function Settings() {
  const [value, setValue] = React.useState<number>(0);
  const [fNValue, setFNValue] = React.useState('First Name');
  const [lNValue, setLNValue] = React.useState('Last Name');
  const [emailValue, setEmailValue] = React.useState('Email');
  const [countryValue, setCountryValue] = React.useState('Country');
  const [cityValue, setCityValue] = React.useState('City');
  const [addressValue, setAddresslValue] = React.useState('Address');
  const [oldPassword, setOldPassword] = React.useState('Old Password');
  const [newPassword, setNewPassowrd] = React.useState('New Password');
  const [confirmPassword, setConfirmPassowrd] = React.useState('Confirm New Password');
  const [question1, setQuestion1] = React.useState('Question 1');
  const [answer1, setAnswer1] = React.useState('Answer 1');
  const [question2, setQuestion2] = React.useState('Question 2');
  const [answer2, setAnswer2] = React.useState('Answer 2');
  const [question3, setQuestion3] = React.useState('Question 3');
  const [answer3, setAnswer3] = React.useState('Answer 3');
  const [lang, setLang] = React.useState('-Select Language-');
  const [timeZone, setTimeZone] = React.useState('-Select Time Zone-');
  const anchor = React.useRef<any>(null);
  const [show, setShow] = React.useState(false);
  const [color, setColor] = React.useState<string>('');
  const navigate = useNavigate();

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
  const avatarTone = avatarTones[(Math.max(colorPalette.indexOf(color), 0)) % avatarTones.length];

  const handleItemSelect = (e: BreadcrumbLinkMouseEvent) => {
    if (e.id === 'home') {
      navigate('/');
    }
};

  return (
    <>
        <main className="tracker-page">
          <Breadcrumb data={breadcrumbItems} onItemSelect={handleItemSelect} className="tracker-page__breadcrumb" />
          <h1 className="tracker-page__heading">Settings</h1>

        <Stepper items={stepperItems} value={value} onChange={handleChange} />

        {value === 0 && (
          <>
            <div className="settings-content">
              <div className="settings-form">
                  <h2 className="settings-section-title">Details</h2>
                  <div className="tracker-modal__person">
              <Avatar size="large" rounded="full" className={`tracker-avatar--${avatarTone}`}>JD</Avatar>
                      <Button svgIcon={pencilIcon} size="large" fillMode="flat" themeColor="primary" ref={anchor} onClick={openPalette} title="Change color">Change color</Button>
                      <Popup anchor={anchor.current && anchor.current.element} show={show} popupClass={'settings-palette'}>
                        <ColorPalette
                          onChange={handleColorChange}
                          columns={9}
                          palette={colorPalette}
                        />
                    </Popup>
                  </div>
                  <div className="settings-fields">
                      <FloatingLabel label="First Name" editorId={'first-name'} editorValue={fNValue}>
                        <TextBox aria-label="First Name" size="large" value={fNValue} onChange={e => setFNValue(e.value as string)} suffix={() => {
                          return (
                          <InputSuffix>
                              <SvgIcon icon={xIcon} onClick={() => setFNValue('')} />
                          </InputSuffix>)
                        }} />
                          </FloatingLabel>
                      <FloatingLabel label="Last Name" editorId={'last-name'} editorValue={lNValue}>
                          <TextBox aria-label="Last Name" size="large" value={lNValue} onChange={e => setLNValue(e.value as string)} suffix={() => {
                            return (
                            <InputSuffix>
                                <SvgIcon icon={xIcon} onClick={() => setLNValue('')} />
                            </InputSuffix>)
                          }}/>
                      </FloatingLabel>
                      <FloatingLabel label="Email" editorId={'email'} editorValue={emailValue}>
                          <TextBox aria-label="Email" size="large" value={emailValue} onChange={e => setEmailValue(e.value as string)} suffix={() => {
                            return (
                            <InputSuffix>
                                <SvgIcon icon={xIcon} onClick={() => setEmailValue('')} />
                            </InputSuffix>)
                          }}/>
                      </FloatingLabel>
                  </div>
                  <h2 className="settings-section-title">Contacts</h2>
                  <div className="settings-fields">
                      <FloatingLabel label="Country" editorId={'country'} editorValue={countryValue} optional={true}>
                        <TextBox aria-label="Country" size="large" value={countryValue} onChange={e => setCountryValue(e.value as string)} suffix={() => {
                          return (
                          <InputSuffix>
                              <SvgIcon icon={xIcon} onClick={() => setCountryValue('')} />
                          </InputSuffix>)
                        }} />
                          </FloatingLabel>
                      <FloatingLabel label="City" editorId={'city'} editorValue={cityValue} optional={true}>
                          <TextBox aria-label="City" size="large" value={cityValue} onChange={e => setCityValue(e.value as string)} suffix={() => {
                            return (
                            <InputSuffix>
                                <SvgIcon icon={xIcon} onClick={() => setCityValue('')} />
                            </InputSuffix>)
                          }}/>
                      </FloatingLabel>
                      <FloatingLabel label="Address" editorId={'address'} editorValue={addressValue} optional={true}>
                          <TextBox aria-label="Address" size="large" value={addressValue} onChange={e => setAddresslValue(e.value as string)} suffix={() => {
                            return (
                            <InputSuffix>
                                <SvgIcon icon={xIcon} onClick={() => setAddresslValue('')} />
                            </InputSuffix>)
                          }}/>
                      </FloatingLabel>
                  </div>
              </div>
            </div>
            <div className="settings-actions">
                <Button themeColor="primary" size="large" title="Save button">Save</Button>
                <Button themeColor="primary" fillMode="outline" size="large" title="Cancel button">Cancel</Button>
            </div>
          </>
        )}
        {value === 1 && (
          <>
            <div className="settings-content">
              <div className="settings-form">
                  <h2 className="settings-section-title">Password</h2>
                  <div className="settings-fields">
                    <FloatingLabel label="Old Password" editorId={'old-password'} editorValue={oldPassword}>
                        <TextBox aria-label="Old Password" type="password" size="large" value={oldPassword} onChange={e => setOldPassword(e.value as string)} suffix={() => {
                          return (
                          <InputSuffix>
                              <SvgIcon icon={xIcon} onClick={() => setOldPassword('')} />
                          </InputSuffix>)
                        }} />
                          </FloatingLabel>
                      <FloatingLabel label="New Password" editorId={'new-password'} editorValue={newPassword} className="settings-fields__field--start">
                          <TextBox aria-label="New Password" type="password" size="large" value={newPassword} onChange={e => setNewPassowrd(e.value as string)} suffix={() => {
                            return (
                            <InputSuffix>
                                <SvgIcon icon={xIcon} onClick={() => setNewPassowrd('')} />
                            </InputSuffix>)
                          }}/>
                      </FloatingLabel>
                      <FloatingLabel label="Confirm New Password" editorId={'confirm-password'} editorValue={confirmPassword}>
                          <TextBox aria-label="Confirm New Password" type="password" size="large" value={confirmPassword} onChange={e => setConfirmPassowrd(e.value as string)} suffix={() => {
                            return (
                            <InputSuffix>
                                <SvgIcon icon={xIcon} onClick={() => setConfirmPassowrd('')} />
                            </InputSuffix>)
                          }}/>
                      </FloatingLabel>
                  </div>
                  <h2 className="settings-section-title">Security Questions:</h2>
                  <div className="settings-fields">
                    <FloatingLabel label="Question 1" editorId={'question-1'} editorValue={question1}>
                        <TextBox aria-label="Question 1" size="large" value={question1} onChange={e => setQuestion1(e.value as string)} suffix={() => {
                          return (
                          <InputSuffix>
                              <SvgIcon icon={xIcon} onClick={() => setQuestion1('')} />
                          </InputSuffix>)
                        }} />
                          </FloatingLabel>
                      <FloatingLabel label="Answer 1" editorId={'answer-1'} editorValue={answer1}>
                          <TextBox aria-label="Answer 1" size="large" value={answer1} onChange={e => setAnswer1(e.value as string)} suffix={() => {
                            return (
                            <InputSuffix>
                                <SvgIcon icon={xIcon} onClick={() => setAnswer1('')} />
                            </InputSuffix>)
                          }}/>
                      </FloatingLabel>
                      <FloatingLabel label="Question 2" editorId={'question-2'} editorValue={question2}>
                          <TextBox aria-label="Question 2" size="large" value={question2} onChange={e => setQuestion2(e.value as string)} suffix={() => {
                            return (
                            <InputSuffix>
                                <SvgIcon icon={xIcon} onClick={() => setQuestion2('')} />
                            </InputSuffix>)
                          }}/>
                    </FloatingLabel>
                    <FloatingLabel label="Answer 2" editorId={'answer-2'} editorValue={answer2}>
                        <TextBox aria-label="Answer 2" size="large" value={answer2} onChange={e => setAnswer2(e.value as string)} suffix={() => {
                          return (
                          <InputSuffix>
                              <SvgIcon icon={xIcon} onClick={() => setAnswer2('')} />
                          </InputSuffix>)
                        }} />
                          </FloatingLabel>
                      <FloatingLabel label="Question 3" editorId={'question-3'} editorValue={question3}>
                          <TextBox aria-label="Question 3" size="large" value={question3} onChange={e => setQuestion3(e.value as string)} suffix={() => {
                            return (
                            <InputSuffix>
                                <SvgIcon icon={xIcon} onClick={() => setQuestion3('')} />
                            </InputSuffix>)
                          }}/>
                      </FloatingLabel>
                      <FloatingLabel label="Answer 3" editorId={'answer-3'} editorValue={answer3}>
                          <TextBox aria-label="Answer 3" size="large" value={answer3} onChange={e => setAnswer3(e.value as string)} suffix={() => {
                            return (
                            <InputSuffix>
                                <SvgIcon icon={xIcon} onClick={() => setAnswer3('')} />
                            </InputSuffix>)
                          }}/>
                      </FloatingLabel>
                  </div>
              </div>
            </div>
            <div className="settings-actions">
                <Button themeColor="primary" size="large" title="Save button">Save</Button>
                <Button themeColor="primary" fillMode="outline" size="large" title="Cancel button">Cancel</Button>
            </div>
          </>
        )}
        {value === 2 && (
          <>
            <div className="settings-content">
              <div className="settings-form">
                  <h2 className="settings-section-title">Notification Settings:</h2>
                  <div className="settings-preference-list">
                      <div className="settings-preference">
                          <label>Email Notification</label>
                          <Switch onLabel="On" offLabel="Off" />
                      </div>
                      <div className="settings-preference">
                          <label>SMS Notifications</label>
                          <Switch onLabel="On" offLabel="Off" />
                      </div>
                      <div className="settings-preference">
                          <label>Push Notifications</label>
                          <Switch checked onLabel="On" offLabel="Off" />
                      </div>
                  </div>
                  <h2 className="settings-section-title">Language and Localization</h2>
                <div className="settings-preference-list">
                      <FloatingLabel label="Preferred Language" editorId={'lang'} editorValue={lang}>
                      <AutoComplete size="large" defaultValue="-Select Language-"
                        data={["English",
                          "Spanish",
                          "French",
                          "German",
                          "Chinese",
                          "Japanese",
                          "Hindi",
                          "Arabic",
                          "Portuguese"]}
                        value={lang} onChange={e => setLang(e.value as string)}
                        suffix={() => {
                            return (
                            <InputSuffix>
                                <SvgIcon icon={xIcon} onClick={() => setLang('-Select Language-')} />
                            </InputSuffix>)
                          }}/>
                      </FloatingLabel>
                      <FloatingLabel label="Time Zone"editorId={'time-zone'} editorValue={timeZone}>
                    <DropDownList size="large" defaultValue="-Select Time Zone-"
                      value={timeZone} onChange={e => setTimeZone(e.value as string)}
                      data={[
                        "PST (Pacific Standard Time)",
                        "EST (Eastern Standard Time)",
                        "CST (Central Standard Time)",
                        "MST (Mountain Standard Time)",
                        "GMT (Greenwich Mean Time)",
                        "CET (Central European Time)",
                        "EET (Eastern European Time)",
                        "IST (Indian Standard Time)",
                        "JST (Japan Standard Time)",
                        "AEST (Australian Eastern Standard Time)",
                        "NZST (New Zealand Standard Time)",
                        "ART (Argentina Time)",
                        "BRT (Brazilian Time)",
                        "WAT (West Africa Time)",
                        "SAST (South Africa Standard Time)",
                        "ICT (Indochina Time)",
                        "MSK (Moscow Time)",
                        "HST (Hawaii-Aleutian Standard Time)",
                        "AKST (Alaska Standard Time)",
                        "UTC"
                      ]} />
                      </FloatingLabel>
                  </div>
              </div>
            </div>
            <div className="settings-actions">
                <Button themeColor="primary" size="large" title="Save button">Save</Button>
                <Button themeColor="primary" fillMode="outline" size="large" title="Cancel button">Cancel</Button>
            </div>
          </>
        )}
      </main>
      <PageFooter />
    </>
  )
}
