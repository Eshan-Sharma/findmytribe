"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import LiveClock from "./LiveClock";

const majorTimezones = [
  { timezone: "America/New_York", label: "New York", flag: "🇺🇸" },
  { timezone: "Europe/London", label: "London", flag: "🇬🇧" },
  { timezone: "Europe/Paris", label: "Paris", flag: "🇫🇷" },
  { timezone: "Asia/Tokyo", label: "Tokyo", flag: "🇯🇵" },
  { timezone: "Asia/Shanghai", label: "Shanghai", flag: "🇨🇳" },
  { timezone: "Australia/Sydney", label: "Sydney", flag: "🇦🇺" },
];

export default function WorldClock() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-4xl font-black text-black mb-2">World Clock</h2>
        <p className="text-lg text-gray-600 font-medium">
          See what time it is around the world
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {majorTimezones.map((tz, index) => {
          const colors = [
            "bg-pink-100",
            "bg-pink-200",
            "bg-stone-100",
            "bg-stone-200",
            "bg-pink-100",
            "bg-stone-100",
          ];
          const color = colors[index % colors.length];

          return (
            <Card key={tz.timezone} className={`brutal-card ${color}`}>
              <CardContent className="p-6">
                <LiveClock
                  timezone={tz.timezone}
                  label={tz.label}
                  className="text-center"
                />
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Current UTC time display */}
      <Card className="brutal-card bg-black">
        <CardContent className="p-6">
          <div className="text-center">
            <div className="text-3xl font-black text-white mb-2">
              {currentTime.toISOString().split("T")[1].split(".")[0]} UTC
            </div>
            <div className="text-lg font-bold text-pink-300">
              Coordinated Universal Time
            </div>
            <div className="text-sm font-medium text-gray-300 mt-2">
              {currentTime.toISOString().split("T")[0]}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
