"use client";

import * as React from "react";

const WarehouseShellContext = React.createContext(null);

export function WarehouseShellProvider({ children }) {
  const [expanded, setExpanded] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);
  const menuButtonRef = React.useRef(null);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => {
      setIsMobile(mediaQuery.matches);
      if (mediaQuery.matches) {
        setExpanded(false);
      }
    };

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const toggleDrawer = React.useCallback(() => {
    setExpanded((current) => !current);
  }, []);

  const closeDrawer = React.useCallback(() => {
    setExpanded(false);
    window.requestAnimationFrame(() => {
      window.setTimeout(() => {
        const menuButton =
          document.querySelector("[aria-controls='warehouse-navigation']") ||
          menuButtonRef.current;
        menuButton?.focus?.();
      }, 0);
    });
  }, []);

  React.useEffect(() => {
    if (!isMobile || !expanded) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeDrawer();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeDrawer, expanded, isMobile]);

  React.useEffect(() => {
    if (!isMobile || !expanded) {
      return undefined;
    }

    const focusTimer = window.setTimeout(() => {
      const drawer = document.querySelector(
        "#warehouse-navigation .k-drawer-container"
      );
      const firstItem = document.querySelector(
        "#warehouse-navigation [role='menuitem'], #warehouse-navigation .k-drawer-item"
      );

      if (
        drawer?.classList.contains("k-drawer-expanded") &&
        firstItem instanceof HTMLElement
      ) {
        firstItem.tabIndex = 0;
        firstItem.focus();
      }
    }, 0);

    return () => window.clearTimeout(focusTimer);
  }, [expanded, isMobile]);

  return (
    <WarehouseShellContext.Provider
      value={{
        closeDrawer,
        expanded,
        isMobile,
        menuButtonRef,
        toggleDrawer,
      }}
    >
      {children}
    </WarehouseShellContext.Provider>
  );
}

export function useWarehouseShell() {
  const context = React.useContext(WarehouseShellContext);

  if (!context) {
    throw new Error(
      "useWarehouseShell must be used within a WarehouseShellProvider"
    );
  }

  return context;
}
