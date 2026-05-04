import { InputSuffix } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { xIcon } from "@progress/kendo-svg-icons";

interface SearchClearSuffixProps {
  visible: boolean;
  onClear: () => void;
}

export default function SearchClearSuffix({
  visible,
  onClear,
}: Readonly<SearchClearSuffixProps>) {
  if (!visible) return null;
  return (
    <InputSuffix>
      <Button
        fillMode="clear"
        rounded="full"
        svgIcon={xIcon}
        onClick={onClear}
        aria-label="Clear search"
      />
    </InputSuffix>
  );
}
