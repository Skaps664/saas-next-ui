// app/Dashboard/layout.tsx

"use client";

import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <main className="p-6 min-h-screen">{children}</main>;
}
