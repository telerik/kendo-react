import { ComboBox } from "@progress/kendo-react-dropdowns";
import { Label } from "@progress/kendo-react-labels";
import type { FieldRenderProps } from "@progress/kendo-react-form";

export const FormComboBox = (props: FieldRenderProps) => {
  const { label, data, validationMessage, touched, name, ...others } = props;
  const showValidation = touched && validationMessage;
  const editorId = `${name}-editor`;

  return (
    <div>
      <Label editorId={editorId}>{label}</Label>
      <ComboBox id={editorId} data={data} className="w-full" {...others} />
      {showValidation && (
        <div className="text-error text-sm">{validationMessage}</div>
      )}
    </div>
  );
};
