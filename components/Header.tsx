"use client";

import { Button } from "@/components/ui/button";
import LiveClock from "./LiveClock";

export default function Header() {
  return (
    <header className="border-b-4 border-black bg-pink-100 px-8 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-pink-300 rounded-2xl border-4 border-black flex items-center justify-center transition-all duration-300 hover:shadow-[4px_4px_0px_0px_#000000] hover:transform hover:translate-x-[-2px] hover:translate-y-[-2px]">
            <span className="text-black text-xl font-bold">FT</span>
          </div>
          <div>
            <h1 className="text-3xl font-black text-black">FindMyTribe</h1>
            <p className="text-sm font-medium text-pink-600">
              Connect globally, belong locally
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {/* <div className="brutal-card bg-pink-200 p-4">
            <LiveClock
              timezone={Intl.DateTimeFormat().resolvedOptions().timeZone}
              label="Your Local Time"
              className="text-center"
            />
          </div> */}

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="brutal-button text-black hover:text-pink-600 hover:bg-pink-200"
            >
              About
            </Button>
            <Button className="brutal-button">Sign In</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
