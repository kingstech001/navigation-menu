'use client'
import DesktopCustomInputField from "@/app/components/input-field/DesktopCustomInputField";
import MobileCustomInputField from "@/app/components/input-field/MobileCustomInputField";
import NavigationMenu from "@/app/components/navigation/NavigationMenu";
import { useState } from "react";

export default function Home() {
  const [mobileInputValue, setMobileInputValue] = useState('');
  const [desktopInputValue, setDesktopInputValue] = useState('');
  return (
    <>
    <NavigationMenu/>
    <main className="flex min-h-screen  items-center justify-center ">
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold ">Custom Input Fields</h1>

      <div className="mb-6 lg:hidden">
        <MobileCustomInputField
          id="mobile-input"
          label="Email"
          value={mobileInputValue}
          onChange={(e) => setMobileInputValue(e.target.value)}
          placeholder="Enter email"
        />
      </div>

      <div className="hidden lg:block">
        <DesktopCustomInputField
          id="desktop-input"
          label="Email"
          value={desktopInputValue}
          onChange={(e) => setDesktopInputValue(e.target.value)}
          placeholder="Enter email"
        />
      </div>
    </div>
    </main>
    </>
  );
}
