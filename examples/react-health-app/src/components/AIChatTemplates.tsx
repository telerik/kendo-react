import type { ChatMessageTemplateProps } from "@progress/kendo-react-conversational-ui";
import { SvgIcon } from "@progress/kendo-react-common";
import { setOptions } from "marked";
import { aiSparklesIcon } from "../icons/customIcons";

const parseMarkdown = (text: string): string => {
  const parser = setOptions({});
  return parser.parse(text) as string;
};

export const AIMessageTemplate: React.FC<ChatMessageTemplateProps> = ({
  item,
}) => (
  <div className="ai-chat-message">
    <div className="ai-chat-message-body">
      <div dangerouslySetInnerHTML={{ __html: parseMarkdown(item?.text ?? "") }} />
    </div>
  </div>
);

export const AIHeaderTemplate = () => (
  <div className="ai-chat-header">
    <SvgIcon className="ai-chat-header-icon" icon={aiSparklesIcon} />
    <h3 className="ai-chat-header-title">AI Assistant</h3>
    <div className="k-spacer" />
  </div>
);
