import React from "react";
import RelatedTopics from "./AIAssistantComponents/RelatedTopics";
import AIChat from "./AIAssistantComponents/AIChat";

const AIAssistant: React.FC = () => {
  return (
    <>
      <h1 className="app-page-title">AI Assistant</h1>
      <div className="app-page-grid--twelve">
        <div className="app-column app-span-8">
          <RelatedTopics />
        </div>
        <div className="app-column app-span-4">
          <AIChat />
        </div>
      </div>
    </>
  );
};

export default AIAssistant;
