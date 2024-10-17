"use client";
import {
  Navbar as NaviBar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useState, useEffect } from "react";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isDashboardPage = pathname === "/dashboard";

  if (!isMounted) {
    return null; // Render nothing until the client has mounted.
  }

  return (
    <NaviBar
      position="sticky"
      isBordered
      className="w-full py-2 bg-transparent px-8"
    >
      <div className="container mx-auto flex items-center justify-between ">
        {/* Navbar Brand */}
        <NavbarBrand className="flex items-center">
          <Link href="/">
            <img src="/editur_logo.png" alt="Editur Logo" className="w-9 h-9" />
          </Link>
          <Link href="/">
            <p className="font-bold text-xl pl-2 text-white">EDITUR.ai</p>
          </Link>
        </NavbarBrand>

        {/* Navbar Middle Content */}
        <NavbarContent className="hidden sm:flex gap-7" justify="center">
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  radius="sm"
                  variant="light"
                >
                  Features
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Features Menu"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem key="autoscaling" startContent={<span>⚙️</span>}>
                Autoscaling
              </DropdownItem>
              <DropdownItem key="usage_metrics" startContent={<span>📊</span>}>
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                startContent={<span>🚀</span>}
              >
                Production Ready
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <NavbarItem isActive>
            <Link href="#" aria-current="page" className="text-white">
              Pricing
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link color="foreground" href="#">
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Navbar Right Content */}
        <NavbarContent justify="end" className="gap-4">
          {!isDashboardPage && (
            <NavbarItem className="hidden lg:flex">
              {/* Updated Login Link to point to /login */}
              <Link href="/login" className="text-purple-500">
                Login
              </Link>
            </NavbarItem>
          )}

          {isDashboardPage ? (
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered">Manage Acc</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dashboard Menu">
                <DropdownItem key="dashboard" href="/dashboard">
                  Dashboard
                </DropdownItem>
                <DropdownItem
                  key="manage_subscription"
                  href="/manage-subscription"
                >
                  Manage Subscription
                </DropdownItem>
                <DropdownItem key="logout" href="/logout">
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarItem>
              <Button
                as={Link}
                href="/dashboard"
                className="bg-purple-500 text-white" // Apply purple color
                variant="flat"
              >
                Dashboard
              </Button>
            </NavbarItem>
          )}
        </NavbarContent>
      </div>
    </NaviBar>
  );
};
