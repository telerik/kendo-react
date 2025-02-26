import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { teamsData } from "./data";
import { ButtonGroup, Button, FloatingActionButton } from "@progress/kendo-react-buttons";
import { Breadcrumb, Card, CardBody, Avatar, CardTitle, CardSubtitle, CardFooter, BreadcrumbLinkMouseEvent, GridLayout } from "@progress/kendo-react-layout";
import { groupIcon, listUnorderedSquareIcon, homeIcon, detailSectionIcon, plusIcon } from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-react-common";
import { Dialog, DialogActionsBar, Window } from '@progress/kendo-react-dialogs';
import React from "react";
import { MaskedTextBox, TextBox } from "@progress/kendo-react-inputs";
import { FloatingLabel, Hint } from "@progress/kendo-react-labels";
import { MultiSelect } from "@progress/kendo-react-dropdowns";

interface DataModel {
  id: string;
  text?: string;
  icon?: React.ReactNode;
}

export default function Team() {
  let params = useParams();
  const navigate = useNavigate();
  const [isGridView, setIsGridView] = React.useState(true);
  const [openWindow, setOpenWindow] = React.useState(false);
  const [windowContent, setWindowContent] = React.useState({ teamMember: '', title: '' });
  const [openDialog, setOpenDialog] = React.useState(false);
  const [fNValue, setFNValue] = React.useState('First Name');
  const [lNValue, setLNValue] = React.useState('Last Name');
  const [emailValue, setEmailValue] = React.useState('Email');
  const [titleValue, setTitleValue] = React.useState('Job Title');
  const [phoneValue, setPhoneValue] = React.useState('(___) ___-___-___');
  const [reportsToValue, setReportsToValue] = React.useState(['Name', 'Name']);

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

  const getEmail = (fullName: string) => {
    const nameParts = fullName.split(" ");
    return nameParts[0].toLowerCase() + '_' + nameParts[1].toLowerCase() + '@company.com';
  }

  const openDetailsWindow = (member: { teamMember: string; title: string }) => {
    setWindowContent({
      teamMember: member.teamMember,
      title: member.title,
    });
    setOpenWindow(!openWindow);
  };

  const addNewMember = () => {
    setOpenDialog(true);
  }

  return (
      <>
         <div style={{minHeight: 'calc(100vh - 106px)'}} className="flex flex-col p-10 gap-6">
               <Breadcrumb data={breadcrumbItems} onItemSelect={handleItemSelect} className="!bg-app-surface" />

               <div>
                  <h1 className="text-4xl">{teamsData.map(team => { return team.teamCode === params.teamId ? team.teamName : '' })}</h1>
                  <h5 className="text-subtle">{teamsData.map(team => { return team.teamCode === params.teamId ? team.teamMembers.length : '' })} members</h5>
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
                        <Button svgIcon={detailSectionIcon} fillMode="flat" onClick={() => openDetailsWindow(member)}>Details</Button>
                    </CardFooter>
                    </Card>


                })}
               </GridLayout>

               <div className="flex justify-end mt-auto">
                  <FloatingActionButton svgIcon={plusIcon} text="Add new member" size="small" alignOffset={{ x: 40, y: 75 }} onClick={addNewMember} />
               </div>

              {openWindow &&
                  <Window title={windowContent.teamMember + ' Details'} initialWidth={480} onClose={() => setOpenWindow(false)}>
                    <div className="flex flex-col gap-4">
                          <div className="flex gap-2 items-center">
                              <Avatar className="bg-[#008B8B]">JS</Avatar>
                              <div className="flex flex-col gap-1">
                                  <span className="text-lg font-medium">{windowContent.teamMember}</span>
                                  <span className="text-subtle">{windowContent.title}</span>
                              </div>
                          </div>
                          <div className="flex gap-1">
                              <span className="color-subtle">Team:</span>
                              <span className="underline">{team.teamName}</span>
                          </div>
                          <div className="flex gap-1">
                              <span className="color-subtle">Email:</span>
                              <span className="underline">{getEmail(windowContent.teamMember)}</span>
                          </div>
                          <div className="flex gap-1">
                              <span className="color-subtle">Phone Number:</span>
                              <span>(436)-256-140-482</span>
                          </div>
                          <div className="flex gap-1">
                              <span className="color-subtle">Reports to:</span>
                              <span className="underline">{team.teamMembers[0].teamMember}</span>
                          </div>
                      </div>
                  </Window>}
                
                  {openDialog && <Dialog title="Add Member" width={450} onClose={() => setOpenDialog(false)}>
                      <div className="flex flex-col gap-4">
                        <FloatingLabel label="First Name" editorId={'first-name'} editorValue={fNValue}>
                          <TextBox size="large" value={fNValue} onChange={e => setFNValue(e.value as string)} />
                            </FloatingLabel>
                        <FloatingLabel label="Last Name" editorId={'last-name'} editorValue={lNValue}>
                            <TextBox size="large" value={lNValue} onChange={e => setLNValue(e.value as string)} />
                        </FloatingLabel>
                        <FloatingLabel label="Job Title" editorId={'job-title'} editorValue={titleValue}>
                            <TextBox size="large" value={titleValue} onChange={e => setTitleValue(e.value as string)} />
                        </FloatingLabel>
                        <FloatingLabel label="Email" editorId={'email'} editorValue={emailValue}>
                            <TextBox size="large" value={emailValue} onChange={e => setEmailValue(e.value as string)} />
                        </FloatingLabel>
                        <FloatingLabel label="Phone Number" editorId={'phone'} editorValue={phoneValue}>
                            <MaskedTextBox size="large" value={phoneValue} mask="(999) 000-000-000" onChange={e => setPhoneValue(e.value as string)} />
                        </FloatingLabel>
                        <FloatingLabel label="Reports to" editorId={'email'} editorValue={emailValue}>
                            <MultiSelect size="large" data={['William Smith', 'Alex Morgan', 'James Parker', 'Nina Roberts', 'Isabella White']} value={reportsToValue} onChange={e => setReportsToValue([...e.value])} />
                            <Hint>Multiple options could be selected at once.</Hint>
                        </FloatingLabel>
                      </div>
                      <DialogActionsBar>
                        <Button type="button" themeColor={'primary'} onClick={() => alert('Member added successfully!')}>
                            Save
                        </Button>
                        <Button type="button" onClick={() => setOpenDialog(false)}>
                            Cancel
                        </Button>
                    </DialogActionsBar>
                  </Dialog>}
           </div>
           <div className="bg-surface-alt color-subtle p-2 text-center">
               <span>Copyright &#169; 2025 Progress Software. All rights reserved.</span>
           </div>
       </>
  )
}