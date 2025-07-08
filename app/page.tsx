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
    <div className="min-h-screen bg-stone-50">
      <Header />

      <nav className="border-b-4 border-black bg-pink-100 flex">
        <Button
          variant="ghost"
          className={`brutal-nav-button border-r-4 border-black ${
            activeView === "clock" ? "active" : ""
          }`}
          onClick={() => setActiveView("clock")}
        >
          <Clock className="w-5 h-5 mr-3" />
          <span className="font-bold">Time Zones</span>
        </Button>
        <Button
          variant="ghost"
          className={`brutal-nav-button border-r-4 border-black ${
            activeView === "list" ? "active" : ""
          }`}
          onClick={() => setActiveView("list")}
        >
          <List className="w-5 h-5 mr-3" />
          <span className="font-bold">By Location</span>
        </Button>
        <Button
          variant="ghost"
          className={`brutal-nav-button ${
            activeView === "map" ? "active" : ""
          }`}
          onClick={() => setActiveView("map")}
        >
          <Map className="w-5 h-5 mr-3" />
          <span className="font-bold">World Map</span>
        </Button>
      </nav>

      <main className="container mx-auto px-8 py-12">
        <div className="brutal-card bg-stone-100 p-10 mb-8">
          {activeView === "clock" && <ClockView />}
          {activeView === "list" && <ListView />}
          {activeView === "map" && <MapView />}
        </div>
      </main>

      <Footer />
    </div>
  );
}
