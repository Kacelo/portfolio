"use client";
import React, { useState } from "react";
import {
    ContactLink,
  DownloadResume,
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/theme-provider/mode-toggle";
export function NavBar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 border-1px",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Shenatungo"
              href="hhttps://shenatungo.com"
              src="shenatungo.png"
              description="A Salon Website built with NextJs and hosted on Vercel"
            />
            <ProductItem
              title="Shiftspace Finance"
              href="https://shiftfinance.m1.com.na"
              src="shift.png"
              description="ShiftSpace Finance is a 100% Namibian corporation."
            />
            <ProductItem
              title="Hovia Consulting"
              href="https://hoviaconsulting.com.na/"
              src="Hovia.png"
              description="Hovia is a consulting firm that focuses on training, management and career consulting services."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>

        <ContactLink />
        <DownloadResume />
        {/* <div className="flex flex-col space-y-4 text-sm"> */}
          <ModeToggle></ModeToggle>
        {/* </div> */}
      </Menu>
    </div>
  );
}
