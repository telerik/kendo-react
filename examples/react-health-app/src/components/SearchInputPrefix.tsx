import { InputPrefix } from "@progress/kendo-react-inputs";
import { SvgIcon } from "@progress/kendo-react-common";
import { appBarSearchIcon } from "../icons/customIcons";

export default function SearchInputPrefix() {
  return (
    <InputPrefix>
      <SvgIcon icon={appBarSearchIcon} />
    </InputPrefix>
  );
}
