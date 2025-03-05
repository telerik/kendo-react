import {
  Avatar,
  Breadcrumb,
  BreadcrumbLinkMouseEvent,
  GridLayout,
} from "@progress/kendo-react-layout";
import {
  homeIcon,
  searchIcon,
} from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-react-common";
import React from "react";
import { useNavigate } from "react-router-dom";
import { InputPrefix, InputSeparator, TextBox, TextBoxChangeEvent } from "@progress/kendo-react-inputs";
import { Badge } from "@progress/kendo-react-indicators";
import { projectsData } from "./data";

interface DataModel {
  id: string;
  text?: string;
  icon?: React.ReactNode;
}

const breadcrumbItems: DataModel[] = [
  { id: "home", icon: <SvgIcon icon={homeIcon} /> },
  { id: "projects", text: "Projects" },
];

export default function Projects() {
  const navigate = useNavigate();
  const [projects, setProjects] = React.useState(projectsData);

  const handleItemSelect = (e: BreadcrumbLinkMouseEvent) => {
    if (e.id === "home") {
      navigate("/");
    }
  };

  const handleSearchChange = (props: TextBoxChangeEvent) => {
    const searchValue = (props.value as string).toLowerCase();

    const filteredProjects = projectsData.filter((project) => {
      return project.ProjectName.toLowerCase().includes(searchValue);
    });
    setProjects(filteredProjects);
  };

  return (
    <div
      style={{ minHeight: "calc(100vh - 106px)" }}
      className="flex flex-col p-10 gap-6"
    >
      <Breadcrumb
        data={breadcrumbItems}
        onItemSelect={handleItemSelect}
        className="!bg-app-surface"
      />

      <div className="flex flex-wrap items-center justify-between">
        <h1 className="text-4xl">Projects</h1>
        <TextBox className="w-75" size="large" onChange={handleSearchChange} prefix={() =>
          <InputPrefix>
            <SvgIcon icon={searchIcon} />
            <InputSeparator />
          </InputPrefix>
        } placeholder="Search projects" />
      </div>

      <GridLayout className="grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ gap: "var(--kendo-spacing-4) var(--kendo-spacing-6)" }}>
        {projects.map((project, index) => {
          return (
            <div key={index} className="bg-surface-alt border-1 border-border rounded-lg">
              <div className="px-4 py-3">
                <div className="font-medium">{project.ProjectName}</div>
                <div className="mt-2 flex flex-wrap items-center justify-between">
                  <span className="text-sm text-subtle">
                    Due Date: <span className="font-medium">{project.DueDate}</span>
                  </span>
                  <Badge themeColor={
                    project.Priority === "Urgent"
                      ? "error"
                      : project.Priority === "Medium priority"
                        ? "warning"
                        : project.Priority === "Low priority"
                          ? "success"
                          : project.Priority === "Routine"
                            ? "tertiary"
                            : "primary"
                  } rounded="full" position="inside" className="!relative !z-0">{project.Priority}</Badge>
                </div>
              </div>
              <div className="flex flex-col gap-2 px-4 py-3">
                <div>
                  <div className="text-sm text-subtle">Project Manager</div>
                  <div className="flex items-center">
                    <Avatar type={'image'} size="small" className="mr-1" border={false}>
                      <img src={project.AvatarSrc} />
                    </Avatar>
                    <span>Marlon66</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-subtle">Stakeholder(s)</div>
                  <div className="flex items-center">
                    <Avatar type={'image'} size="small" className="mr-1">
                      <img src={project.AvatarSrc} />
                    </Avatar>
                    <span>Monserrat49</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </GridLayout>
    </div>
  );
}