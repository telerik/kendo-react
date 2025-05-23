import React from "react";
import Calendar from "./SettingsComponents/Calendar";
import PersonalInfo from "./SettingsComponents/PersonalInfo";
import CardInfo from "./SettingsComponents/CardInfo";
import Weather from "./SettingsComponents/Weather";

const Settings: React.FC = () => {
  return (
    <>
      <h1 className="k-px-md-15 k-p-5 k-m-0">Settings</h1>
      <div className="k-d-grid k-grid-cols-12 k-gap-4 k-gap-lg-6 k-mb-5 k-overflow-hidden k-p-md-5 k-px-md-15 k-p-5">
        <div className="k-col-span-12 k-col-span-xl-7 k-d-flex k-flex-col k-flex-basis-0 k-flex-grow">
          <PersonalInfo />
        </div>
        <div className="k-col-span-12 k-col-span-xl-5 k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-1 k-h-full">
          <Calendar />
        </div>
        <div className="k-col-span-12 k-col-span-xl-7 k-d-flex k-flex-col k-flex-basis-0 k-flex-grow">
          <CardInfo />
        </div>
        <div className="k-col-span-12 k-col-span-xl-5 k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-1 k-h-full">
          <Weather />
        </div>
      </div>
    </>
  );
};

export default Settings;
