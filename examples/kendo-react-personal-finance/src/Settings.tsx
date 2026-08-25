import React from "react";
import Calendar from "./SettingsComponents/Calendar";
import PersonalInfo from "./SettingsComponents/PersonalInfo";
import CardInfo from "./SettingsComponents/CardInfo";
import Weather from "./SettingsComponents/Weather";

const Settings: React.FC = () => {
  return (
    <>
      <h1 className="app-page-title">Settings</h1>
      <div className="app-page-grid--twelve">
        <div className="app-column app-span-7">
          <PersonalInfo />
        </div>
        <div className="app-column app-span-5">
          <Calendar />
        </div>
        <div className="app-column app-span-7">
          <CardInfo />
        </div>
        <div className="app-column app-span-5">
          <Weather />
        </div>
      </div>
    </>
  );
};

export default Settings;
