import { useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { TextBox, TextArea } from "@progress/kendo-react-inputs";
import { AutoComplete } from "@progress/kendo-react-dropdowns";
import { Window } from "@progress/kendo-react-dialogs";
import { Label, Error } from "@progress/kendo-react-labels";
import { recipientEmails } from "../data/sampleData";

interface Props {
  onClose: () => void;
}

export default function NewMessageWindow({ onClose }: Readonly<Props>) {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    recipient?: string;
    message?: string;
  }>({});

  const handleSend = () => {
    const newErrors: { recipient?: string; message?: string } = {};
    if (!recipient.trim()) newErrors.recipient = "Recipient is required.";
    if (!message.trim()) newErrors.message = "Message is required.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onClose();
  };

  return (
    <Window
      title="New Message"
      onClose={onClose}
      initialWidth={520}
      initialHeight={490}
      minimizeButton={() => null}
      maximizeButton={() => null}
      modal
    >
      <div className="window-form">
        <div>
          <Label className="form-label" editorId="msg-win-to">
            To
          </Label>
          <AutoComplete
            id="msg-win-to"
            data={recipientEmails}
            value={recipient}
            onChange={(e) => {
              setRecipient(e.value);
              if (errors.recipient)
                setErrors((prev) => ({ ...prev, recipient: undefined }));
            }}
            placeholder="Search or enter an email..."
            valid={!errors.recipient}
          />
          {errors.recipient && <Error>{errors.recipient}</Error>}
        </div>
        <div>
          <Label className="form-label" editorId="msg-win-subject">
            Subject
          </Label>
          <TextBox
            id="msg-win-subject"
            value={subject}
            onChange={(e) => setSubject(String(e.value ?? ""))}
            placeholder="Message subject..."
          />
        </div>
        <div>
          <Label className="form-label" editorId="msg-win-text">
            Message
          </Label>
          <TextArea
            id="msg-win-text"
            value={message}
            onChange={(e) => {
              setMessage(String(e.value ?? ""));
              if (errors.message)
                setErrors((prev) => ({ ...prev, message: undefined }));
            }}
            placeholder="Type your message..."
            rows={6}
            valid={!errors.message}
          />
          {errors.message && <Error>{errors.message}</Error>}
        </div>
        <div className="window-form-actions">
          <Button fillMode="outline" onClick={onClose} size="small">
            Discard
          </Button>
          <Button themeColor="primary" onClick={handleSend} size="small">
            Send Message
          </Button>
        </div>
      </div>
    </Window>
  );
}
