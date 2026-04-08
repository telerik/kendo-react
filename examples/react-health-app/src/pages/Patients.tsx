import { useState, useRef, memo, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import type {
  GridCustomCellProps,
  GridHandle,
} from "@progress/kendo-react-grid";
import { Button } from "@progress/kendo-react-buttons";
import {
  aiAssistanceSparklesIcon,
  exportButtonIcon,
  gridViewProfileIcon,
} from "../icons/customIcons";
import { Chat } from "@progress/kendo-react-conversational-ui";
import { patients } from "../data/sampleData";
import StatusBadge from "../components/StatusBadge";
import AvatarCircle from "../components/AvatarCircle";
import PageHeading from "../components/PageHeading";
import { useAIChat } from "../hooks/useAIChat";
import {
  AIHeaderTemplate,
  AIMessageTemplate,
} from "../components/AIChatTemplates";
import { useDoctorProfile } from "../context/DoctorProfileContext";
import { saveGridPDF } from "@progress/kendo-react-pdf";

const nameCellStyle = {
  display: "flex",
  alignItems: "center",
  gap: 10,
} as const;
const nameCellTextStyle = { fontWeight: 500 } as const;

const PatientNameCell = memo(function PatientNameCell(
  props: Readonly<GridCustomCellProps>,
) {
  const name = props.dataItem.name as string;
  const thumbnail = props.dataItem.thumbnail as string | undefined;
  return (
    <td {...props.tdProps}>
      <div style={nameCellStyle}>
        <AvatarCircle name={name} image={thumbnail} size="sm" />
        <span style={nameCellTextStyle}>{name}</span>
      </div>
    </td>
  );
});

const StatusCell = memo(function StatusCell(
  props: Readonly<GridCustomCellProps>,
) {
  const status = props.dataItem.status as string;
  return (
    <td {...props.tdProps}>
      <StatusBadge status={status} />
    </td>
  );
});

const NavigateContext = createContext<ReturnType<typeof useNavigate> | null>(
  null,
);

const ActionsCell = memo(function ActionsCell(
  props: Readonly<GridCustomCellProps>,
) {
  const navigate = useContext(NavigateContext);
  return (
    <td {...props.tdProps}>
      <Button
        fillMode="flat"
        rounded="full"
        svgIcon={gridViewProfileIcon}
        onClick={(e) => {
          e.stopPropagation();
          navigate?.(`/patients/${props.dataItem.id}`);
        }}
      >
        View Profile
      </Button>
    </td>
  );
});

function AIChatPanel() {
  const { profile } = useDoctorProfile();
  const {
    chatMessages,
    inputValue,
    setInputValue,
    loading,
    handleSendMessage,
    handleSuggestionClick,
    authorId,
    defaultSuggestions,
  } = useAIChat(`Dr. ${profile.fullName.split(" ").pop()}`);

  return (
    <div className="patients-side-panel">
      <div className="side-panel-card">
        <Chat
          messages={chatMessages}
          authorId={authorId}
          onSendMessage={handleSendMessage}
          onSuggestionClick={handleSuggestionClick}
          suggestions={defaultSuggestions}
          receiverMessageSettings={{ messageTemplate: AIMessageTemplate }}
          headerTemplate={AIHeaderTemplate}
          placeholder="Ask about patients, guidelines..."
          inputValue={inputValue}
          onInputValueChange={setInputValue}
          loading={loading}
          showUsername={false}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default function Patients() {
  const gridRef = useRef<GridHandle | null>(null);
  const navigate = useNavigate();
  const [showAiPanel, setShowAiPanel] = useState(false);

  const handleGridExportButtonClick = () => {
    gridRef.current?.exportAsPdf();
  };

  const handleGridPdfExport = async (event: { target: HTMLDivElement }) => {
    saveGridPDF(event.target, { fileName: "patients.pdf" });
  };
  return (
    <NavigateContext.Provider value={navigate}>
      <PageHeading
        title="Patients"
        subtitle="Monitor patient trends, vitals, lab results, and risk levels in one place"
        actions={
          <>
            <Button
              svgIcon={aiAssistanceSparklesIcon}
              themeColor="primary"
              rounded="full"
              onClick={() => setShowAiPanel(!showAiPanel)}
            >
              AI Assistance
            </Button>
            <Button
              svgIcon={exportButtonIcon}
              themeColor="base"
              rounded="full"
              onClick={handleGridExportButtonClick}
            >
              Export
            </Button>
          </>
        }
      />

      <div className="patients-layout">
        <div className="patients-main">
          <Grid
            ref={gridRef}
            data={patients}
            sortable
            filterable
            autoProcessData
            defaultTake={15}
            pageable={{
              pageSizes: [15, 30, 45],
              buttonCount: 5,
              info: true,
              previousNext: true,
            }}
            pdf={true}
            onPdfExport={handleGridPdfExport}
          >
            <GridColumn
              field="name"
              title="Patient Name"
              cells={{ data: PatientNameCell }}
            />
            <GridColumn field="age" title="Age" filter="numeric" />
            <GridColumn
              field="status"
              title="Status"
              cells={{ data: StatusCell }}
            />
            <GridColumn field="gender" title="Gender" />
            <GridColumn field="bloodType" title="Blood Type" />
            <GridColumn field="ward" title="Ward" />
            <GridColumn field="diagnosis" title="Diagnosis" />
            <GridColumn title="Actions" cells={{ data: ActionsCell }} />
          </Grid>
        </div>

        {/* AI Assistance Panel (KendoReact Chat) */}
        {showAiPanel && <AIChatPanel />}
      </div>
    </NavigateContext.Provider>
  );
}
