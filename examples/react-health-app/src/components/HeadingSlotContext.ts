import { createContext } from "react";
import type { ReactNode } from "react";
import type { SVGIcon } from "@progress/kendo-svg-icons";

export interface BreadcrumbItem {
  text: string;
  href?: string;
  svgIcon?: SVGIcon;
}

export interface PageHeadingProps {
  title: string;
  subtitle?: string;
  backLabel?: string;
  onBack?: () => void;
  actions?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
}

export const HeadingContext = createContext<
  (config: PageHeadingProps | null) => void
>(() => {});
