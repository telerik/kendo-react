import { useState } from "react";
import { FloatingActionButton } from "@progress/kendo-react-buttons";
import { Popup } from "@progress/kendo-react-popup";
import { Chat } from "@progress/kendo-react-conversational-ui";
import { commentIcon } from "@progress/kendo-svg-icons";
import { useAIChat } from "../hooks/useAIChat";
import { AIMessageTemplate, AIHeaderTemplate } from "./AIChatTemplates";
import { useDoctorProfile } from "../context/DoctorProfileContext";

export default function AIChatButton() {
  const [showChat, setShowChat] = useState(false);
  const { profile } = useDoctorProfile();
  const {
    chatMessages,
    inputValue,
    setInputValue,
    loading,
    handleSendMessage,
    handleSuggestionClick,
    authorId,
    defaultSuggestions,
  } = useAIChat(`Dr. ${profile.fullName.split(" ").pop()}`);

  return (
    <div className="fab-container">
      <FloatingActionButton
        svgIcon={commentIcon}
        themeColor="primary"
        id="chat-fab"
        onClick={() => setShowChat(!showChat)}
        size="large"
        rounded="full"
      />
      <Popup
        anchor={document.querySelector<HTMLElement>("#chat-fab")}
        show={showChat}
        anchorAlign={{ vertical: "top", horizontal: "left" }}
        popupAlign={{ vertical: "bottom", horizontal: "right" }}
        popupClass="ai-chat-popup"
        animate={{
          type: "slide" as const,
          direction: "up" as const,
          openDuration: 300,
          closeDuration: 200,
        }}
      >
        <Chat
          messages={chatMessages}
          authorId={authorId}
          onSendMessage={handleSendMessage}
          onSuggestionClick={handleSuggestionClick}
          suggestions={defaultSuggestions}
          headerTemplate={AIHeaderTemplate}
          receiverMessageSettings={{ messageTemplate: AIMessageTemplate }}
          placeholder="Type a message"
          showUsername={false}
          inputValue={inputValue}
          onInputValueChange={setInputValue}
          loading={loading}
          width={400}
          height={617}
        />
      </Popup>
    </div>
  );
}
