import React from "react";
import RelatedTopics from "./AIAssistantComponents/RelatedTopics";
import AIChat from "./AIAssistantComponents/AIChat";

const AIAssistant: React.FC = () => {
  return (
    <>
      <h1 className="k-px-md-15 k-p-5 k-m-0">AI Assistant</h1>
      <div className="k-d-grid k-grid-cols-12 k-gap-4 k-gap-lg-6 k-mb-5 k-overflow-hidden k-p-md-5 k-px-md-15 k-p-5">
        <div className="k-col-span-12 k-col-span-xl-8 k-d-flex k-flex-col k-flex-basis-0 k-flex-grow">
          <RelatedTopics />
        </div>
        <div className="k-col-span-12 k-col-span-xl-4 k-d-flex k-flex-col k-flex-basis-0 k-flex-grow k-gap-1">
          <AIChat />
        </div>
      </div>
    </>
  );
};

export default AIAssistant;
