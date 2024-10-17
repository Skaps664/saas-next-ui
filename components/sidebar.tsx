// components/Sidebar.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/react";
import { FaHome, FaCreditCard } from "react-icons/fa"; // Example icons

export const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, href: "/dashboard" },
    {
      name: "Manage Subscription",
      icon: <FaCreditCard />,
      href: "/subscription",
    },
  ];

  return (
    <div className="w-64 min-h-screen shadow-md flex flex-col">
      {/* Logo Section */}
      <div className="p-6 flex items-center space-x-3">
        <img src="/editur_logo.png" alt="Editur Logo" className="w-8 h-8" />
        <p className="font-bold text-lg">Editur.ai</p>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-200 my-4" />

      {/* Menu Items */}
      <nav className="flex-1 px-4 space-y-4">
        {menuItems.map((item) => (
          <Card
            key={item.name}
            isPressable
            // variant="flat"
            onClick={() => {
              setActive(item.name);
              router.push(item.href);
            }}
            className={`flex items-center p-3 cursor-pointer rounded-lg hover:bg-gray-100 ${
              active === item.name ? "bg-purple-100" : ""
            }`}
          >
            <div className="flex items-center">
              <span className="text-xl text-purple-500">{item.icon}</span>
              <p className="ml-4 text-gray-800">{item.name}</p>
            </div>
          </Card>
        ))}
      </nav>
    </div>
  );
};
