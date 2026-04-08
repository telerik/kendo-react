import { useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Checkbox, TextBox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Window } from "@progress/kendo-react-dialogs";
import { Label, Error } from "@progress/kendo-react-labels";
import { patientOptions } from "../data/sampleData";

const allLabTests = [
  "Complete blood count (CBC)",
  "Comprehensive metabolic panel (CMP)",
  "Basic metabolic panel (BMP)",
  "Lipid panel",
  "HbA1c",
  "Thyroid panel (TSH, T3, T4)",
  "Liver function tests",
  "Coagulation panel",
  "Iron studies",
  "Vitamin D level",
  "Urinalysis",
  "Blood culture",
  "C-reactive protein (CRP)",
  "Erythrocyte sedimentation rate (ESR)",
  "Prothrombin time (PT/INR)",
];

interface Props {
  onClose: () => void;
  initialPatientId?: number;
}

export default function LabRequestWindow({
  onClose,
  initialPatientId,
}: Readonly<Props>) {
  const defaultPatient =
    patientOptions.find((p) => p.value === initialPatientId) ??
    patientOptions[0];

  const [selectedPatient, setSelectedPatient] = useState(defaultPatient);
  const [search, setSearch] = useState("");
  const [selectedTests, setSelectedTests] = useState<Set<string>>(new Set());
  const [testsError, setTestsError] = useState("");

  const filteredTests = allLabTests.filter((t) =>
    t.toLowerCase().includes(search.toLowerCase()),
  );

  const toggleTest = (test: string) => {
    setSelectedTests((prev) => {
      const next = new Set(prev);
      if (next.has(test)) next.delete(test);
      else next.add(test);
      return next;
    });
    if (testsError) setTestsError("");
  };

  return (
    <Window
      title="Request Lab Tests"
      onClose={onClose}
      initialWidth={560}
      initialHeight={580}
      minimizeButton={() => null}
      maximizeButton={() => null}
      modal
    >
      <div className="lab-request-window">
        <div>
          <Label className="form-label" editorId="lab-win-patient">
            Select Patient
          </Label>
          <DropDownList
            id="lab-win-patient"
            data={patientOptions}
            textField="text"
            dataItemKey="value"
            value={selectedPatient}
            onChange={(e) => setSelectedPatient(e.value)}
            className="window-form-patient-select"
          />
        </div>

        <div>
          <Label className="form-label" editorId="lab-win-search">
            Search Lab Tests
          </Label>
          <TextBox
            id="lab-win-search"
            value={search}
            onChange={(e) => setSearch(String(e.value ?? ""))}
            placeholder="Search Lab Tests"
          />
        </div>

        <div className="lab-test-list">
          {filteredTests.map((test) => (
            <Button
              key={test}
              className="lab-test-item"
              fillMode="flat"
              onClick={() => toggleTest(test)}
            >
              <Checkbox
                checked={selectedTests.has(test)}
                onChange={() => toggleTest(test)}
                onClick={(e) => e.stopPropagation()}
                tabIndex={-1}
              >
                <span className="lab-test-name">{test}</span>
              </Checkbox>
            </Button>
          ))}
        </div>
        {testsError && <Error>{testsError}</Error>}

        <div className="window-form-actions">
          <Button themeColor="base" onClick={onClose} size="small">
            Discard
          </Button>
          <Button
            themeColor="primary"
            onClick={() => {
              if (selectedTests.size === 0) {
                setTestsError("Please select at least one lab test.");
                return;
              }
              onClose();
            }}
            size="small"
          >
            Send request
          </Button>
        </div>
      </div>
    </Window>
  );
}
