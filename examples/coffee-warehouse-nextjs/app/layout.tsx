import React from "react";

import type { Metadata } from "next";
import "@progress/kendo-theme-meridian/dist/all.css";
import "./App.scss";
import { GlobalizationAndHeader } from "./globalization-and-header";

export const metadata: Metadata = {
  title: "KendoReact Coffee Warehouse Dashboard",
  description: "Coffee warehouse operations dashboard sample application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalizationAndHeader>{children}</GlobalizationAndHeader>
      </body>
    </html>
  );
}
