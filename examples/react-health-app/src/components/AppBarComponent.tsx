import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";
import {
  Button,
  DropDownButton,
  SegmentedControl,
  ToolbarSeparator,
} from "@progress/kendo-react-buttons";
import type { DropDownButtonItemClickEvent } from "@progress/kendo-react-buttons";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { notifications as initialNotifications } from "../data/sampleData";
import logo from "../assets/logo.svg";
import logoShort from "../assets/logo-short.svg";
import { useDoctorProfile } from "../context/DoctorProfileContext";
import {
  appBarHomeIcon,
  appBarCalendarIcon,
  appBarPatientsIcon,
  appBarAnalyticsIcon,
  appBarSearchIcon,
  transparencyIcon,
  bellIcon as bellCustomIcon,
  hamburgerMenuIcon,
} from "../icons/customIcons";
import NotificationPanel from "./NotificationPanel";
import ProfileDialog from "./ProfileDialog";
import PatientSearchComboBox from "./PatientSearchComboBox";

const navItems = [
  { path: "/", label: "Home", icon: appBarHomeIcon },
  { path: "/schedule", label: "Schedule", icon: appBarCalendarIcon },
  { path: "/patients", label: "Patients", icon: appBarPatientsIcon },
  {
    path: "/analytics",
    label: "Clinical Analytics",
    icon: appBarAnalyticsIcon,
  },
];

export default function AppBarComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifList, setNotifList] = useState(initialNotifications);
  const [showProfileDialog, setShowProfileDialog] = useState(false);
  const [transparentMode, setTransparentMode] = useState(false);
  const { profile, updateProfile } = useDoctorProfile();
  const notifRef = useRef<HTMLDivElement>(null);

  const isCompact = useMediaQuery("(max-width: 1439px)");
  const isSmallScreen = useMediaQuery("(max-width: 899px)");
  const isMobile = useMediaQuery("(max-width: 575px)");

  const handleMobileNavSelect = (e: DropDownButtonItemClickEvent) => {
    const path = e.item.path as string;
    if (path) navigate(path);
  };

  const handleTransparencyToggle = () => {
    const next = !transparentMode;
    setTransparentMode(next);
    document.body.classList.toggle("transparent-surfaces", next);
  };

  const unreadCount = notifList.filter((n) => !n.read).length;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <AppBar themeColor="inherit" className="app-topbar">
      {/* Logo */}
      <AppBarSection>
        <NavLink to="/" className="app-logo">
          <img src={isSmallScreen ? logoShort : logo} alt="Logo" />
        </NavLink>
      </AppBarSection>

      {isMobile && (
        <>
          <ToolbarSeparator className="app-topbar-separator" />
          <AppBarSection>
            <DropDownButton
              svgIcon={hamburgerMenuIcon}
              fillMode="flat"
              rounded="full"
              items={navItems.map((item) => ({
                text: item.label,
                svgIcon: item.icon,
                path: item.path,
              }))}
              onItemClick={handleMobileNavSelect}
              popupSettings={{ popupClass: "mobile-nav-popup" }}
            />
          </AppBarSection>
        </>
      )}

      <AppBarSpacer />

      {/* Centered nav */}
      {!isMobile && (
        <AppBarSection>
          <SegmentedControl
            value={
              navItems.find((item) =>
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path),
              )?.path ?? "/"
            }
            onChange={(value) => navigate(value)}
            items={navItems.map((item) => ({
              value: item.path,
              text: isCompact ? undefined : item.label,
              svgIcon: item.icon,
            }))}
            size="medium"
          />
        </AppBarSection>
      )}

      <AppBarSpacer />

      {/* Right actions */}
      <AppBarSection className="app-topbar-right">
        {isCompact ? (
          <Button
            svgIcon={appBarSearchIcon}
            fillMode="flat"
            rounded="full"
            onClick={() => navigate("/patients")}
            title="Search patients"
          />
        ) : (
          <PatientSearchComboBox />
        )}

        {/* Transparency Toggle */}
        <Button
          svgIcon={transparencyIcon}
          fillMode="flat"
          rounded="full"
          onClick={handleTransparencyToggle}
          title="Toggle surface transparency"
        />

        {/* Notifications */}
        <div ref={notifRef} className="notif-wrapper">
          <BadgeContainer>
            <Button
              svgIcon={bellCustomIcon}
              fillMode="flat"
              rounded="full"
              onClick={() => setShowNotifications(!showNotifications)}
              title="Notifications"
            />
            {unreadCount > 0 && (
              <Badge
                position="inside"
                align={{ horizontal: "end", vertical: "top" }}
              ></Badge>
            )}
          </BadgeContainer>

          {showNotifications && (
            <NotificationPanel
              notifications={notifList}
              onMarkAllRead={() =>
                setNotifList((prev) => prev.map((n) => ({ ...n, read: true })))
              }
            />
          )}
        </div>
        <ToolbarSeparator className="app-topbar-separator" />

        {/* Profile Avatar */}
        <Button
          fillMode="flat"
          className="app-topbar-avatar"
          onClick={() => {
            setShowProfileDialog(true);
            setShowNotifications(false);
          }}
          aria-label={`Dr. ${profile.fullName} profile`}
        >
          <Avatar type="image" rounded="full" size="medium">
            <img src={profile.image} alt={`Dr. ${profile.fullName}`} />
          </Avatar>
        </Button>
      </AppBarSection>
      {/* Profile Dialog */}
      {showProfileDialog && (
        <ProfileDialog
          profile={profile}
          onSave={(values) => {
            updateProfile(values);
            setShowProfileDialog(false);
          }}
          onClose={() => setShowProfileDialog(false)}
        />
      )}
    </AppBar>
  );
}
