import { Layout } from "@progress/kendo-drawing";
import { ButtonGroup, Button, ChipList, Chip, ChipProps, ChipListChangeEvent } from "@progress/kendo-react-buttons";
import { SvgIcon } from "@progress/kendo-react-common";
import { Breadcrumb, Card, CardBody, Avatar, CardTitle, CardSubtitle, CardFooter, BreadcrumbLinkMouseEvent, StackLayout } from "@progress/kendo-react-layout";
import { checkIcon, chevronRightIcon, groupIcon, homeIcon, listUnorderedSquareIcon } from "@progress/kendo-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";

interface DataModel {
  id: string;
  text?: string;
  icon?: React.ReactNode;
}

const breadcrumbItems: DataModel[] = [
  {
      id: "home",
      icon: <SvgIcon icon={homeIcon} />,
  },
  {
      id: "team-management",
      text: "Team Management",
  }
];

const teams = [
  { text: "All", value: 'all', disabled: false },
  { text: "Technology and Developement", value: 'technology', disabled: true },
  { text: "Product and Design", value: 'product', disabled: true },
  { text: "Business Operation", value: 'business', disabled: true },
  { text: "Marketing and Sales", value: 'marketing', disabled: true },
];

export default function TeamManagement() {
  const navigate = useNavigate();
  const [chipValue, setChipValue] = React.useState<string[]>(['All']);
  const [isGridView, setIsGridView] = React.useState(true);

  const handleItemSelect = (e: BreadcrumbLinkMouseEvent) => {
    if (e.id === 'home') {
      navigate('/');
    }
  }

  const handleChipValueChange = (event: ChipListChangeEvent) => {
    setChipValue(event.value);
  };

  const handleViewChange = (view: 'grid' | 'list') => {
    if (view === 'grid') {
      setIsGridView(true);
    } else {
      setIsGridView(false);
    }
  };

  return (
    <>
      <div style={{minHeight: 'calc(100vh - 106px)'}} className="flex flex-col p-10 gap-6">
            <Breadcrumb data={breadcrumbItems} onItemSelect={handleItemSelect} className="!bg-app-surface" />

            <div>
                <h1 className="text-4xl">Team Management</h1>
                <h5 className="text-subtle">18 teams</h5>
            </div>

            <div className="flex justify-between items-start gap-6">
                <ButtonGroup>
                    <Button svgIcon={groupIcon} togglable={true} selected={isGridView}
                      onClick={() => handleViewChange('grid')} />
                    <Button svgIcon={listUnorderedSquareIcon} togglable={true} selected={!isGridView}
                    onClick={() => handleViewChange('list')} />
                </ButtonGroup>
                <ChipList className="justify-end" data={teams} selection="multiple" onChange={handleChipValueChange} value={chipValue}
                    chip={(props: ChipProps) => (
                      <Chip
                        {...props}
                        selected={!props.dataItem.disabled}
                        selectedSvgIcon={checkIcon}
                        fillMode="outline"
                      />
                  )} />
            </div>

            <StackLayout className={`grid grid-cols-${isGridView ? 2 : 1} lg:grid-cols-${isGridView ? 4 : 1}`} orientation="horizontal" style={{gap: "var(--kendo-spacing-4) var(--kendo-spacing-6)"}}>
                <Card>
                    <CardBody className="flex items-center">
                        <Avatar className="bg-[#9C38FF]">FE</Avatar>
                        <div className="overflow-hidden">
                            <CardTitle className="font-medium truncate">Frontend team</CardTitle>
                            <CardSubtitle className="text-subtle m-0 truncate">10 members</CardSubtitle>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody className="flex items-center">
                        <Avatar className="bg-[#800000]">BE</Avatar>
                        <div className="overflow-hidden">
                            <CardTitle className="font-medium truncate">Backend Team</CardTitle>
                            <CardSubtitle className="text-subtle m-0 truncate">10 members</CardSubtitle>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody className="flex items-center">
                        <Avatar className="bg-[#333333]">DO</Avatar>
                        <div className="overflow-hidden">
                            <CardTitle className="font-medium truncate">DevOps Team</CardTitle>
                            <CardSubtitle className="text-subtle m-0 truncate">10 members</CardSubtitle>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody className="flex items-center">
                        <Avatar className="bg-[#218247]">QA</Avatar>
                        <div className="overflow-hidden">
                            <CardTitle className="font-medium truncate">QA Team</CardTitle>
                            <CardSubtitle className="text-subtle m-0 truncate">10 members</CardSubtitle>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody className="flex items-center">
                        <Avatar className="bg-[#DB0000]">UX</Avatar>
                        <div className="overflow-hidden">
                            <CardTitle className="font-medium truncate">UX/UI Design Team</CardTitle>
                            <CardSubtitle className="text-subtle m-0 truncate">10 members</CardSubtitle>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody className="flex items-center">
                        <Avatar className="bg-[#8F7200]">DB</Avatar>
                        <div className="overflow-hidden">
                            <CardTitle className="font-medium truncate">Database Team</CardTitle>
                            <CardSubtitle className="text-subtle m-0 truncate">10 members</CardSubtitle>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody className="flex items-center">
                        <Avatar className="bg-[#008B8B]">М</Avatar>
                        <div className="overflow-hidden">
                            <CardTitle className="font-medium truncate">Marketing Team</CardTitle>
                            <CardSubtitle className="text-subtle m-0 truncate">10 members</CardSubtitle>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody className="flex items-center">
                        <Avatar className="bg-[#C14E34]">PM</Avatar>
                        <div className="overflow-hidden">
                            <CardTitle className="font-medium truncate">Product Management Team</CardTitle>
                            <CardSubtitle className="text-subtle m-0 truncate">10 members</CardSubtitle>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody className="flex items-center">
                        <Avatar className="bg-[#027EB5]">TS</Avatar>
                        <div className="overflow-hidden">
                            <CardTitle className="font-medium truncate">Technical Support Team</CardTitle>
                            <CardSubtitle className="text-subtle m-0 truncate">10 members</CardSubtitle>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody className="flex items-center">
                        <Avatar className="bg-[#267B92]">S</Avatar>
                        <div className="overflow-hidden">
                            <CardTitle className="font-medium truncate">Security Team</CardTitle>
                            <CardSubtitle className="text-subtle m-0 truncate">10 members</CardSubtitle>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody className="flex items-center">
                        <Avatar className="bg-[#708090]">DS</Avatar>
                        <div className="overflow-hidden">
                            <CardTitle className="font-medium truncate">Data Science Team</CardTitle>
                            <CardSubtitle className="text-subtle m-0 truncate">10 members</CardSubtitle>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody className="flex items-center">
                        <Avatar className="bg-[#191970]">IE</Avatar>
                        <div className="overflow-hidden">
                            <CardTitle className="font-medium truncate">Infrastructure Engineering</CardTitle>
                            <CardSubtitle className="text-subtle m-0 truncate">10 members</CardSubtitle>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody className="flex items-center">
                        <Avatar className="bg-[#7B3F00]">RD</Avatar>
                        <div className="overflow-hidden">
                            <CardTitle className="font-medium truncate">Research and Development </CardTitle>
                            <CardSubtitle className="text-subtle m-0 truncate">10 members</CardSubtitle>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody className="flex items-center">
                        <Avatar className="bg-[#607F1F]">BA</Avatar>
                        <div className="overflow-hidden">
                            <CardTitle className="font-medium truncate">FBusiness Analysis Team </CardTitle>
                            <CardSubtitle className="text-subtle m-0 truncate">10 members</CardSubtitle>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody className="flex items-center">
                        <Avatar className="bg-[#DC147F]">TW</Avatar>
                        <div className="overflow-hidden">
                            <CardTitle className="font-medium truncate">Technical Writing Team</CardTitle>
                            <CardSubtitle className="text-subtle m-0 truncate">10 members</CardSubtitle>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody className="flex items-center">
                        <Avatar className="bg-[#5769D2]">S</Avatar>
                        <div className="overflow-hidden">
                            <CardTitle className="font-medium truncate">Sales Team</CardTitle>
                            <CardSubtitle className="text-subtle m-0 truncate">10 members</CardSubtitle>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody className="flex items-center">
                        <Avatar className="bg-[#4682B4]">SA</Avatar>
                        <div className="overflow-hidden">
                            <CardTitle className="font-medium truncate">System Administration</CardTitle>
                            <CardSubtitle className="text-subtle m-0 truncate">10 members</CardSubtitle>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody className="flex items-center">
                        <Avatar className="bg-[#4B0082]">CG</Avatar>
                        <div className="overflow-hidden">
                            <CardTitle className="font-medium truncate">Compliance and Governance</CardTitle>
                            <CardSubtitle className="text-subtle m-0 truncate">10 members</CardSubtitle>
                        </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={chevronRightIcon} fillMode="flat">Explore team</Button>
                    </CardFooter>
                </Card>
            </StackLayout>

        </div>
        <div className="bg-surface-alt color-subtle p-2 text-center">
            <span>Copyright &#169; 2025 Progress Software. All rights reserved.</span>
        </div>
    </>
  )
}
