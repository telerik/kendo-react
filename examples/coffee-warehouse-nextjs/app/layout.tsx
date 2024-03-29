import React from "react";

import "./App.scss";

import type { Metadata } from "next";
import "@progress/kendo-theme-default/dist/all.css"
import { GlobalizationAndHeader } from "./globalization-and-header";

export const metadata: Metadata = {
  title: "KendoReact Coffee WareHouse DashBoard",
  description: "Coffee WareHouse DashBoard Next.js sample application",
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
