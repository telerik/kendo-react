import { useState, useCallback, useRef, useMemo } from "react";
import type {
  Message,
  User,
  ChatSendMessageEvent,
  ChatSuggestion,
} from "@progress/kendo-react-conversational-ui";

const aiBot: User = { id: "ai", name: "AI Assistant" };

const initialMessages: Message[] = [
  {
    id: 1,
    author: aiBot,
    timestamp: new Date(),
    text: "\u{1F44B} Hello! I'm your AI Assistant.\n\nI can help you with your daily clinical tasks, patient information, and quick actions. Try one of the suggestions below!",
  },
];

const defaultSuggestions: ChatSuggestion[] = [
  { id: "summary", text: "Summary for next patient" },
  { id: "lab", text: "Provide lab results" },
  { id: "schedule", text: "Check schedule" },
];

const suggestionResponses: Record<string, string> = {
  "Summary for next patient": `## Next Patient Summary\n\n**Patient:** Sarah Johnson, 34F\n\n**Appointment:** 10:30 AM — Annual Checkup\n\n**Key highlights:**\n- Last visit: **6 months ago** (routine follow-up)\n- Active conditions: **Mild hypertension**, seasonal allergies\n- Current medications: Lisinopril 10 mg, Cetirizine 10 mg\n- Pending: **Lipid panel** ordered last visit, results not yet reviewed\n\n**Notes from nurse:** Patient reports occasional headaches over the past 3 weeks. BP reading on arrival: **138/88 mmHg**.\n\n> Recommend reviewing the lipid panel and discussing lifestyle modifications.`,

  "Provide lab results": `## Recent Lab Results\n\n**Patient:** Michael Torres, 52M\n\n**Panel:** Comprehensive Metabolic + CBC — _Collected: March 28, 2026_\n\n**Flagged values:**\n- Glucose: **112 mg/dL** \u26A0\uFE0F _(ref: 70–99)_\n- HbA1c: **6.3%** \u26A0\uFE0F _(ref: <5.7%)_\n- LDL Cholesterol: **145 mg/dL** \u26A0\uFE0F _(ref: <100)_\n\n**Within normal limits:**\n- HDL Cholesterol: 48 mg/dL\n- Creatinine: 0.9 mg/dL\n- WBC: 6.8 K/\u00B5L\n\n**Clinical takeaways:**\n- Glucose and HbA1c suggest **pre-diabetic range** — consider dietary counseling\n- LDL elevated; **statin therapy** may be warranted\n- Renal and immune markers within normal limits`,

  "Check schedule": `## Today's Schedule — March 31, 2026\n\n**You have 6 appointments today:**\n\n- **9:00 AM** — James Caldwell _(Follow-up: Hypertension)_\n- **10:30 AM** — Sarah Johnson _(Annual Checkup)_ \u2190 **Next**\n- **11:15 AM** — Priya Mehta _(Lab review: Thyroid panel)_\n- **1:00 PM** — Robert Kim _(New patient: Chest pain eval)_\n- **2:30 PM** — Anita Flores _(Post-op follow-up)_\n- **4:00 PM** — David Nguyen _(Diabetes management)_\n\n**Reminders:**\n- Team standup at **12:00 PM** in Conference Room B\n- **2 pending referrals** awaiting your review\n- Lab authorization required for Nguyen's HbA1c order`,
};

const DEMO_RESPONSE = `> \u{1F6C8} **This is a demo assistant.**\n\nFree-text queries are not supported in this preview. In your production app, connect a **real AI service** (e.g. OpenAI, Azure OpenAI, or your own clinical LLM) to handle any message.\n\n**In this demo, you can use the suggestion chips** to see pre-built responses:\n- _Summary for next patient_\n- _Provide lab results_\n- _Check schedule_`;

export function useAIChat(doctorName = "Dr. Carter") {
  const currentUser: User = useMemo(
    () => ({ id: "user", name: doctorName }),
    [doctorName],
  );
  const [chatMessages, setChatMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const streamResponse = useCallback(
    async (
      responseContent: string,
      aiResponse: Message,
      controller: AbortController,
      chunkSize = 20,
      delay = 100,
    ): Promise<void> => {
      let currentIndex = 0;
      while (
        currentIndex < responseContent.length &&
        !controller.signal.aborted
      ) {
        await new Promise<void>((resolve) => setTimeout(resolve, delay));
        if (controller.signal.aborted) break;
        const nextChunk = responseContent.slice(0, currentIndex + chunkSize);
        setChatMessages((prevMessages) => {
          const updated = [...prevMessages];
          const aiMessageIndex = updated.findIndex(
            (msg) => msg.id === aiResponse.id,
          );
          if (aiMessageIndex !== -1) {
            updated[aiMessageIndex] = {
              ...updated[aiMessageIndex],
              text: nextChunk,
            };
          }
          return updated;
        });
        currentIndex += chunkSize;
      }
    },
    [],
  );

  const handleSendMessage = useCallback(
    async (event: ChatSendMessageEvent) => {
      const text = event.message.text ?? "";

      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
        return;
      }

      if (!text.trim()) return;

      const userMsgId = Date.now();
      const userMessage: Message = {
        ...event.message,
        id: userMsgId,
        author: currentUser,
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, userMessage]);
      setInputValue("");

      const controller = new AbortController();
      abortControllerRef.current = controller;
      setLoading(true);

      const aiMsgId = userMsgId + 1;
      const aiResponse: Message = {
        id: aiMsgId,
        author: aiBot,
        timestamp: new Date(),
        text: "",
      };
      setChatMessages((prev) => [...prev, aiResponse]);

      const responseText = suggestionResponses[text] ?? DEMO_RESPONSE;

      try {
        await streamResponse(responseText, aiResponse, controller);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        const errorMessage: Message = {
          id: Date.now(),
          author: aiBot,
          timestamp: new Date(),
          text: "Sorry, there was an error processing your request. Please try again.",
        };
        setChatMessages((prev) => [...prev, errorMessage]);
      } finally {
        abortControllerRef.current = null;
        setLoading(false);
      }
    },
    [currentUser, streamResponse],
  );

  const handleSuggestionClick = (suggestion: ChatSuggestion) => {
    setInputValue(suggestion.text);
  };

  return {
    chatMessages,
    inputValue,
    setInputValue,
    loading,
    handleSendMessage,
    handleSuggestionClick,
    authorId: currentUser.id,
    defaultSuggestions,
  };
}
