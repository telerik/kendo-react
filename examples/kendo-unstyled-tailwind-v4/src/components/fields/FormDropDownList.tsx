import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Label } from "@progress/kendo-react-labels";
import type { FieldRenderProps } from "@progress/kendo-react-form";

export const FormDropDownList = (props: FieldRenderProps) => {
  const { label, data, validationMessage, touched, name, ...others } = props;
  const showValidation = touched && validationMessage;
  const editorId = `${name}-editor`;

  return (
    <div>
      <Label editorId={editorId}>{label}</Label>
      <DropDownList
        id={editorId}
        data={data}
        textField="text"
        dataItemKey="value"
        {...others}
      />
      {showValidation && (
        <div className="text-error text-sm">{validationMessage}</div>
      )}
    </div>
  );
};
