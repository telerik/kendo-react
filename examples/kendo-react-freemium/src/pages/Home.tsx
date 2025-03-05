import { Button } from "@progress/kendo-react-buttons";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { Badge } from "@progress/kendo-react-indicators";
import { Checkbox } from "@progress/kendo-react-inputs";
import { Avatar, Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardTitle } from "@progress/kendo-react-layout";
import { Calendar } from "@progress/kendo-react-dateinputs";
import { ListView, ListViewItemWrapper } from "@progress/kendo-react-listview";
import { pencilIcon, plusIcon, trashIcon } from "@progress/kendo-svg-icons";
import { tasksData, listData, projectsData, teamsData } from "./data";
import React from "react";
import { useNavigate } from "react-router-dom";

const ListItemRender = (props: any) => {
  let item = props.dataItem;
  return <ListViewItemWrapper className="!flex !my-2 !gap-2 !p-0.5">
    <Checkbox rounded="small" />
    <span>{item.text}</span>
    <div className="ml-auto shrink-0">
        <Button svgIcon={pencilIcon} fillMode="flat" />
        <Button svgIcon={trashIcon} fillMode="flat" themeColor="error" />
    </div>
  </ListViewItemWrapper>;
};

export default function Home() {
    const navigate = useNavigate();
    const [showAllProjects, setShowAllProjects] = React.useState(false);
    const [showAllTeams, setShowAllTeams] = React.useState(false);
    const [showAllTasks, setShowAllTasks] = React.useState(false);

    const handleSeeAllProjectsClick = () => {
        setShowAllProjects(!showAllProjects);
    };

    const handleSeeAllTeamsClick = () => {
        setShowAllTeams(!showAllTeams);
    };

    const handleSeeAllTasksClick = () => {
        setShowAllTasks(!showAllTasks);
    }

    const projectsToShow = showAllProjects ? projectsData : projectsData.slice(0, 5);
    const teamsToShow = showAllTeams ? teamsData : teamsData.slice(0, 4);

    const tasksToShow = showAllTasks ? tasksData : tasksData.slice(0, 5);

  return (
    <>
      <div style={{ minHeight: 'calc(100vh - 106px)'}} className="bg-linear-[119deg,_#F8F9FF_-1.78%,_#F3F2FF_47.75%,_#E6F5FF_97.28%] p-10">
        <h1 className="text-4xl text-subtle pb-6">Welcome John Porter 👋</h1>
        <div className="grid grid-cols-[360px_1fr] lg:grid-cols-12 xl:grid-cols-[1fr_2fr_360px] gap-6">
            <div className="col-span-2 lg:col-span-6 xl:col-span-2">
                <Card className="rounded-2xl">
                    <CardHeader className="border-0">
                        <CardTitle className="font-medium">Projects</CardTitle>
                    </CardHeader>
                    <CardBody>
                              <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
                                  {projectsToShow.map((project, index) => {
                                      return <Card key={'project-' + index}>
                                          <CardBody className="flex flex-col justify-between">
                                              <div onClick={() => navigate('/projects')} className="cursor-pointer">
                                                <CardTitle className="font-medium line-clamp-5 h-25.5">{project.ProjectName}</CardTitle>
                                                <div><Badge themeColor={
                                                    project.Priority === "Urgent"
                                                    ? "error"
                                                    : project.Priority === "Medium priority"
                                                    ? "warning"
                                                    : project.Priority === "Low priority"
                                                    ? "success"
                                                    : project.Priority === "Routine"
                                                    ? "tertiary"
                                                    : "primary"
                                                } rounded="full" position={'inside'} align={{ vertical: 'bottom', horizontal: 'start' }} className="relative z-0">{project.Priority}</Badge></div>
                                              </div>
                                          </CardBody>
                                      </Card>
                                  })}
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                              <Button fillMode="flat" themeColor="primary" onClick={handleSeeAllProjectsClick}>{!showAllProjects ? 'See all' : 'Collapse'}</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="col-span-1 col-span-md-8 lg:col-span-6 xl:col-span-1">
                <Calendar className="rounded-2xl" />
            </div>
            <div className="col-span-1 col-span-md-4 lg:col-span-2 xl:col-span-1 h-72.5 lg:h-116">
                <Card className="rounded-2xl overflow-auto max-h-72.5 lg:max-h-116">
                    <CardHeader className="border-0">
                        <CardTitle className="font-medium">Teams</CardTitle>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-2">
                        {teamsToShow.map((team, index) => {
                            return <Card key={'team-' + index}>
                                    <div onClick={() => navigate('/team-management')} className="cursor-pointer">
                                <CardBody className="flex items-center">
                                        <Avatar style={{ background: team.avatarColor }}>{team.teamCode}</Avatar>
                                        <div className="hidden lg:block">
                                            <CardTitle className="m-0 font-medium">{team.teamName.replace("Team", "")}</CardTitle>
                                            <CardSubtitle className="m-0 truncate text-subtle">{team.teamMembers.length} members</CardSubtitle>
                                        </div>
                                </CardBody>
                                    </div>
                            </Card>
                        })}
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button fillMode="flat" themeColor="primary" onClick={handleSeeAllTeamsClick}>{!showAllTeams ? 'See all' : 'Collapse'}</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="col-span-2 lg:col-span-5 xl:col-span-1 h-116">
                <Card className="rounded-2xl h-full">
                    <CardHeader className="border-0 flex justify-between items-center">
                        <CardTitle className="font-medium">To-Do List</CardTitle>
                        <Button fillMode="flat" themeColor="primary" svgIcon={plusIcon}>Add more tasks</Button>
                    </CardHeader>
                    <CardBody className="h-full overflow-y-hidden">
                        <ListView data={listData} item={ListItemRender} className="h-full overflow-y-auto"/>
                    </CardBody>
                </Card>
            </div>
            <div className="col-span-2 lg:col-span-5 xl:col-span-1 h-116">
                <Card className="rounded-2xl h-full">
                    <CardHeader className="border-0 flex justify-between items-center">
                        <CardTitle className="font-medium">Tasks</CardTitle>
                    </CardHeader>
                    <CardBody className="h-full overflow-y-hidden">
                        <Grid className="h-full" data={tasksToShow}>
                            <GridColumn field="taskName" title="Task Name" />
                            <GridColumn field="status" title="Status" width={115} />
                        </Grid>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                              <Button fillMode="flat" themeColor="primary" onClick={handleSeeAllTasksClick}>{!showAllTasks ? 'See all' : 'Collapse'}</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </div>
    <div className="bg-surface-alt color-subtle p-2 text-center">
        <span>Copyright &#169; 2025 Progress Software. All rights reserved.</span>
    </div>
    </>
  )
}
