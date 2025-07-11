import { MaskedTextBox } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import type { FieldRenderProps } from "@progress/kendo-react-form";

export const FormMaskedTextBox = (props: FieldRenderProps) => {
  const { label, mask, validationMessage, touched, name, ...others } = props;
  const showValidation = touched && validationMessage;
  const editorId = `${name}-editor`;

  return (
    <div>
      <Label editorId={editorId}>{label}</Label>
      <MaskedTextBox id={editorId} mask={mask} className="w-full" {...others} />
      {showValidation && (
        <div className="text-error text-sm">{validationMessage}</div>
      )}
    </div>
  );
};
