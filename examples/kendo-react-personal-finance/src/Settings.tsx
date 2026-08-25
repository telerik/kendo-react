import React from "react";
import CardInfo from "./SettingsComponents/CardInfo";

const Settings: React.FC = () => {
  return (
    <>
      <h1 className="app-page-title">Settings</h1>
      <div className="app-centered-page">
        <div className="app-column">
          <CardInfo />
        </div>
      </div>
    </>
  );
};

export default Settings;
