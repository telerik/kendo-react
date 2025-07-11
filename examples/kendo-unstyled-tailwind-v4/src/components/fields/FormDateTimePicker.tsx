import { DateTimePicker } from "@progress/kendo-react-dateinputs";
import { Label } from "@progress/kendo-react-labels";
import type { FieldRenderProps } from "@progress/kendo-react-form";

export const FormDateTimePicker = (props: FieldRenderProps) => {
  const { label, validationMessage, touched, name, ...others } = props;
  const showValidation = touched && validationMessage;
  const editorId = `${name}-editor`;

  return (
    <div>
      <Label editorId={editorId}>{label}</Label>
      <DateTimePicker id={editorId} className="w-full" {...others} />
      {showValidation && (
        <div className="text-error text-sm">{validationMessage}</div>
      )}
    </div>
  );
};
