import { Button } from "@progress/kendo-react-buttons";
import { Grid, GridColumn, GridCustomCellProps } from "@progress/kendo-react-grid";
import { Badge } from "@progress/kendo-react-indicators";
import { Checkbox } from "@progress/kendo-react-inputs";
import { Avatar, Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardTitle } from "@progress/kendo-react-layout";
import { Calendar } from "@progress/kendo-react-dateinputs";
import { ListView, ListViewItemWrapper } from "@progress/kendo-react-listview";
import { pencilIcon, plusIcon, trashIcon } from "@progress/kendo-svg-icons";
import { gridData, listData } from "./data";

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

const TaskNameCells = (props: GridCustomCellProps) => {
  return <td {...props.tdProps}>
    <div className="truncate">{props.dataItem.taskName}</div>
  </td>;
}

export default function Home() {
  return (
    <>
      <div style={{ minHeight: 'calc(100vh - 106px)'}} className="bg-linear-[119deg,_#F8F9FF_-1.78%,_#F3F2FF_47.75%,_#E6F5FF_97.28%] p-10">
        <h1 className="text-4xl text-subtle pb-6">Welcome John Doe 👋</h1>
        <div className="grid grid-cols-[360px_1fr] lg:grid-cols-12 xl:grid-cols-[1fr_2fr_360px] gap-6">
            <div className="col-span-2 lg:col-span-6 xl:col-span-2">
                <Card className="rounded-2xl">
                    <CardHeader className="border-0">
                        <CardTitle className="font-medium">Projects</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
                            <Card>
                                <CardBody className="flex flex-col justify-between">
                                    <CardTitle className="font-medium line-clamp-5 h-25.5">AI-Powered Bug Tracking and Resolution System</CardTitle>
                                    <div><Badge themeColor="warning" rounded="full" position={'inside'}  align={{vertical: 'bottom', horizontal: 'start'}} className="relative z-0">Medium priority</Badge></div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody className="flex flex-col justify-between">
                                    <CardTitle className="font-medium line-clamp-5 h-25.5">Virtual Reality Training Module for Employee Onboarding</CardTitle>
                                    <div><Badge themeColor="success" rounded="full" position={'inside'}  align={{vertical: 'bottom', horizontal: 'start'}} className="relative z-0">Low priority</Badge></div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody className="flex flex-col justify-between">
                                    <CardTitle className="font-medium line-clamp-5 h-25.5">Online Learning Management System (LMS)</CardTitle>
                                    <div><Badge themeColor="error" rounded="full" position={'inside'}  align={{vertical: 'bottom', horizontal: 'start'}} className="relative z-0">Urgent</Badge></div>
                                </CardBody>
                            </Card>
                            <Card className="hidden xl:flex">
                                <CardBody className="flex flex-col justify-between">
                                    <CardTitle className="font-medium line-clamp-5 h-25.5">Telehealth and Health Tracking Application</CardTitle>
                                    <div><Badge themeColor="success" rounded="full" position={'inside'}  align={{vertical: 'bottom', horizontal: 'start'}} className="relative z-0">Low priority</Badge></div>
                                </CardBody>
                            </Card>
                            <Card className="hidden 2xl:flex">
                                <CardBody className="flex flex-col justify-between">
                                    <CardTitle className="font-medium line-clamp-5 h-25.5">Market Research and Analytics Tool</CardTitle>
                                    <div><Badge themeColor="success" rounded="full" position={'inside'}  align={{vertical: 'bottom', horizontal: 'start'}} className="relative z-0">Low priority</Badge></div>
                                </CardBody>
                            </Card>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button fillMode="flat" themeColor="primary">See all</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="col-span-1 col-span-md-8 lg:col-span-6 xl:col-span-1">
                <Calendar className="rounded-2xl" />
            </div>
            <div className="col-span-1 col-span-md-4 lg:col-span-2 xl:col-span-1 h-72.5 lg:h-116">
                <Card className="rounded-2xl">
                    <CardHeader className="border-0">
                        <CardTitle className="font-medium">Teams</CardTitle>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-2">
                        <Card>
                            <CardBody className="flex items-center">
                                <Avatar>FE</Avatar>
                                <div className="hidden lg:block">
                                    <CardTitle className="m-0 font-medium">Frontend</CardTitle>
                                    <CardSubtitle className="m-0 truncate text-subtle">10 members</CardSubtitle>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody className="flex items-center">
                                <Avatar themeColor="secondary">BE</Avatar>
                                <div className="hidden lg:block">
                                    <CardTitle className="m-0 font-medium">Backend</CardTitle>
                                    <CardSubtitle className="m-0 truncate text-subtle">10 members</CardSubtitle>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="hidden lg:flex">
                            <CardBody className="flex items-center">
                                <Avatar themeColor="tertiary">DO</Avatar>
                                <div className="hidden lg:block">
                                    <CardTitle className="m-0 font-medium">DevOps</CardTitle>
                                    <CardSubtitle className="m-0 truncate text-subtle">10 members</CardSubtitle>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="hidden lg:flex">
                            <CardBody className="flex items-center">
                                <Avatar>QA</Avatar>
                                <div className="hidden lg:block">
                                    <CardTitle className="m-0 font-medium">QA</CardTitle>
                                    <CardSubtitle className="m-0 truncate text-subtle">10 members</CardSubtitle>
                                </div>
                            </CardBody>
                        </Card>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button fillMode="flat" themeColor="primary">See all</Button>
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
                        <Grid className="h-full" data={gridData}>
                            <GridColumn field="taskName" title="Task Name" editable={false} filterable={false} cells={{ data: TaskNameCells }} />
                            <GridColumn field="status" title="Status" editable={false} filterable={false} />
                        </Grid>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button fillMode="flat" themeColor="primary">See all</Button>
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
