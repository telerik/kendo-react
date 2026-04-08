import { useCallback, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AppBarComponent from "./AppBarComponent";
import { Button } from "@progress/kendo-react-buttons";
import { Breadcrumb } from "@progress/kendo-react-layout";
import { SvgIcon } from "@progress/kendo-react-common";
import { HeadingContext } from "./HeadingSlotContext";
import type { PageHeadingProps } from "./HeadingSlotContext";

export default function Layout() {
  const navigate = useNavigate();
  const [heading, setHeading] = useState<PageHeadingProps | null>(null);
  const updateHeading = useCallback(
    (config: PageHeadingProps | null) => setHeading(config),
    [],
  );

  return (
    <div className="app-layout">
      <div className="app-header">
        <AppBarComponent />
        {heading && (
          <div className="page-heading">
            <div className="page-heading-row">
              <div className="page-heading-titles">
                {heading.backLabel && heading.onBack && (
                  <Button
                    fillMode="flat"
                    className="page-heading-back-btn"
                    onClick={heading.onBack}
                  >
                    {heading.backLabel}
                  </Button>
                )}
                <h1>{heading.title}</h1>
                {heading.subtitle && <p>{heading.subtitle}</p>}
              </div>
              {heading.actions && (
                <div className="page-heading-actions">{heading.actions}</div>
              )}
            </div>
            {heading.breadcrumbs && (
              <div className="page-heading-breadcrumb">
                <Breadcrumb
                  data={heading.breadcrumbs.map((b, i) => ({
                    id: String(i),
                    text: b.text,
                    href: b.href,
                    icon: b.svgIcon ? <SvgIcon icon={b.svgIcon} /> : undefined,
                  }))}
                  onItemSelect={(e) => {
                    e.nativeEvent?.preventDefault();
                    const idx = Number(e.id);
                    const item = heading.breadcrumbs![idx];
                    if (item?.href) navigate(item.href);
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>
      <div className="app-content">
        <HeadingContext.Provider value={updateHeading}>
          <Outlet />
        </HeadingContext.Provider>
      </div>
    </div>
  );
}
