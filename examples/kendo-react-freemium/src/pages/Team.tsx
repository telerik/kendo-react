import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { teamsData } from "./data";
import { ButtonGroup, Button, FloatingActionButton } from "@progress/kendo-react-buttons";
import { Breadcrumb, Card, CardBody, Avatar, CardTitle, CardSubtitle, CardFooter, BreadcrumbLinkMouseEvent, GridLayout } from "@progress/kendo-react-layout";
import { groupIcon, listUnorderedSquareIcon, homeIcon, detailSectionIcon, plusIcon } from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-react-common";
import React from "react";

interface DataModel {
  id: string;
  text?: string;
  icon?: React.ReactNode;
}

export default function Team() {
  let params = useParams();
  const navigate = useNavigate();
  const [isGridView, setIsGridView] = React.useState(true);
  const team = teamsData.filter(team => team.teamCode === params.teamId)[0];

  const breadcrumbItems: DataModel[] = [
    {
        id: "home",
        icon: <SvgIcon icon={homeIcon} />,
    },
    {
        id: "team-management",
        text: "Team Management",
    },
    {
        id: `${params.teamId}`,
        text: `${teamsData.filter(team => team.teamCode === params.teamId)[0].teamName}`,
    }
  ];

  const handleItemSelect = (e: BreadcrumbLinkMouseEvent) => {
    if (e.id === 'home') {
      navigate('/');
    } else if (e.id === 'team-management') {
      navigate('/team-management');
    }
  }

  const handleViewChange = (view: 'grid' | 'list') => {
    if (view === 'grid') {
      setIsGridView(true);
    } else {
      setIsGridView(false);
    }
  };

  const getInitials = (fullName: string) => {
    const nameParts = fullName.split(" ");
    const firstNameInitial = nameParts[0].charAt(0).toUpperCase();
    const lastNameInitial = nameParts[1].charAt(0).toUpperCase();
    return firstNameInitial + lastNameInitial;
  }

  const openDetailsWindow = () => {

  };

  return (
      <>
         <div style={{minHeight: 'calc(100vh - 106px)'}} className="flex flex-col p-10 gap-6">
               <Breadcrumb data={breadcrumbItems} onItemSelect={handleItemSelect} className="!bg-app-surface" />

               <div>
                  <h1 className="text-4xl">{teamsData.map(team => { return team.teamCode === params.teamId ? team.teamName : '' })}</h1>
                  <h5 className="text-subtle">{teamsData.map(team => { return team.teamCode === params.teamId ? team.teamMembers.length : '' })} team members</h5>
               </div>

               <div className="flex justify-between items-start gap-6">
                   <ButtonGroup>
                       <Button svgIcon={groupIcon} togglable={true} selected={isGridView}
                         onClick={() => handleViewChange('grid')} />
                       <Button svgIcon={listUnorderedSquareIcon} togglable={true} selected={!isGridView}
                       onClick={() => handleViewChange('list')} />
                   </ButtonGroup>
               </div>

              <GridLayout className={`${isGridView ? 'grid-cols-2' : 'grid-cols-1'} ${isGridView ? 'lg:grid-cols-4' : 'lg:grid-cols-1'}`} style={{ gap: "var(--kendo-spacing-4) var(--kendo-spacing-6)" }}>
                {team.teamMembers.map((member, index) => {
                    return <Card key={index}>
                    <CardBody className="flex items-center">
                      <Avatar className="bg-[#008B8B]">{getInitials(member.teamMember)}</Avatar>
                      <div className="overflow-hidden">
                        <CardTitle className="font-medium truncate">{member.teamMember}</CardTitle>
                        <CardSubtitle className="text-subtle m-0 truncate">{member.title}</CardSubtitle>
                      </div>
                    </CardBody>
                    <CardFooter className="border-0 p-2">
                        <Button svgIcon={detailSectionIcon} fillMode="flat" onClick={openDetailsWindow}>Details</Button>
                    </CardFooter>
                    </Card>
                })}
               </GridLayout>

               <div className="flex justify-end mt-auto">
                    <FloatingActionButton svgIcon={plusIcon} text="Add new member" size="small" alignOffset={{ x: 40, y: 75 }}/>
              </div>
           </div>
           <div className="bg-surface-alt color-subtle p-2 text-center">
               <span>Copyright &#169; 2025 Progress Software. All rights reserved.</span>
           </div>
       </>
  )
}