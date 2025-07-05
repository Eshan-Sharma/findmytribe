"use client";

import { useState } from "react";
import ClockView from "@/components/ClockView";
import ListView from "@/components/ListView";
import MapView from "@/components/MapView";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, List, Map } from "lucide-react";

export default function FindMyTribe() {
  const [activeView, setActiveView] = useState<"clock" | "list" | "map">(
    "clock"
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <nav className="border-b border-black flex">
        <Button
          variant={activeView === "clock" ? "default" : "ghost"}
          className={`rounded-none border-r border-black ${
            activeView === "clock"
              ? "bg-black text-white"
              : "text-black hover:bg-gray-100"
          }`}
          onClick={() => setActiveView("clock")}
        >
          <Clock className="w-4 h-4 mr-2" />
          Clock View
        </Button>
        <Button
          variant={activeView === "list" ? "default" : "ghost"}
          className={`rounded-none border-r border-black ${
            activeView === "list"
              ? "bg-black text-white"
              : "text-black hover:bg-gray-100"
          }`}
          onClick={() => setActiveView("list")}
        >
          <List className="w-4 h-4 mr-2" />
          List View
        </Button>
        <Button
          variant={activeView === "map" ? "default" : "ghost"}
          className={`rounded-none ${
            activeView === "map"
              ? "bg-black text-white"
              : "text-black hover:bg-gray-100"
          }`}
          onClick={() => setActiveView("map")}
        >
          <Map className="w-4 h-4 mr-2" />
          Map View
        </Button>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeView === "clock" && <ClockView />}
        {activeView === "list" && <ListView />}
        {activeView === "map" && <MapView />}
      </main>

      <Footer />
    </div>
  );
}
