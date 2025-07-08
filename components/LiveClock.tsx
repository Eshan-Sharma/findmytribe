"use client";

import { useState, useEffect } from "react";

interface LiveClockProps {
  timezone: string;
  label: string;
  className?: string;
}

export default function LiveClock({
  timezone,
  label,
  className = "",
}: LiveClockProps) {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();

        // Format time with timezone
        const timeOptions: Intl.DateTimeFormatOptions = {
          timeZone: timezone,
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        };

        // Format date with timezone
        const dateOptions: Intl.DateTimeFormatOptions = {
          timeZone: timezone,
          weekday: "short",
          month: "short",
          day: "numeric",
        };

        const formattedTime = now.toLocaleTimeString("en-US", timeOptions);
        const formattedDate = now.toLocaleDateString("en-US", dateOptions);

        setTime(formattedTime);
        setDate(formattedDate);
      } catch (error) {
        // Fallback for invalid timezones
        setTime("Invalid TZ");
        setDate("");
      }
    };

    // Update immediately
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className={`text-center ${className}`}>
      <div className="text-3xl font-black text-black mb-2">{time}</div>
      <div className="text-lg font-bold text-pink-600 mb-2">{label}</div>
      <div className="text-sm font-medium text-gray-600">{date}</div>
    </div>
  );
}
