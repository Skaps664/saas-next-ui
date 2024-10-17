"use client";

import { Card } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [isDashboardPage, setIsDashboardPage] = useState(false);

  useEffect(() => {
    // Update the state once the component has mounted
    setIsDashboardPage(window.location.pathname === "/dashboard");
  }, []);

  return (
    <div className="flex flex-col min-h-screen border border-purple-500">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-purple-500">
        <h1 className="text-2xl font-bold">
          {isDashboardPage ? "Dashboard" : "Manage Subscription"}
        </h1>
        <div className="flex items-center space-x-4">
          {/* Conditional button rendering based on the current page */}
          {isDashboardPage ? (
            <Link href="/manage-subscription">
              <Button color="secondary" className="bg-purple-600">
                Manage Subscription
              </Button>
            </Link>
          ) : (
            <Link href="/dashboard">
              <Button color="secondary" className="bg-purple-600">
                Dashboard
              </Button>
            </Link>
          )}
        </div>
      </header>

      {/* Main content section */}
      <main className="flex flex-1 flex-col justify-center items-center">
        {/* Centered card */}
        <Tooltip
          showArrow
          placement="top"
          content="Click here"
          classNames={{
            base: [
              // arrow color
              "before:bg-neutral-400 dark:before:bg-white",
            ],
            content: [
              "py-2 px-4 shadow-xl",
              "text-black bg-gradient-to-br from-white to-neutral-400",
            ],
          }}
        >
          <Card
            isPressable
            className="flex items-center justify-center w-96 h-48 bg-gray-800 border border-blue-500"
          >
            <p className="text-3xl text-white">+</p>
          </Card>
        </Tooltip>
        <p className="pt-2">Click on + icon to upload your video</p>
      </main>
    </div>
  );
}
