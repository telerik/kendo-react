import { RadioGroup } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import type { FieldRenderProps } from "@progress/kendo-react-form";

export const FormRadioGroup = (props: FieldRenderProps) => {
  const { label, data, validationMessage, touched, name, ...others } = props;
  const showValidation = touched && validationMessage;
  const editorId = `${name}-editor`;

  return (
    <div className="block">
      <Label>{label}</Label>
      <RadioGroup id={editorId} data={data} layout="horizontal" {...others} />
      {showValidation && (
        <div className="text-error text-sm">{validationMessage}</div>
      )}
    </div>
  );
};
