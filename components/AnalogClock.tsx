"use client";

import { useState, useEffect } from "react";

interface AnalogClockProps {
  timezone?: string;
  size?: number;
  className?: string;
}

export default function AnalogClock({
  timezone = typeof window !== "undefined"
    ? Intl.DateTimeFormat().resolvedOptions().timeZone
    : "UTC",
  size = 200,
  className = "",
}: AnalogClockProps) {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Get time in the specified timezone
      const timeInTz = new Date(
        now.toLocaleString("en-US", { timeZone: timezone })
      );
      setTime(timeInTz);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Calculate angles for hands
  const hourAngle = hours * 30 + minutes * 0.5 - 90;
  const minuteAngle = minutes * 6 - 90;
  const secondAngle = seconds * 6 - 90;

  // Calculate hand endpoints with rounded values to avoid hydration errors
  const hourHandLength = size * 0.25;
  const minuteHandLength = size * 0.35;
  const secondHandLength = size * 0.4;

  const hourX = Math.round(
    size / 2 + hourHandLength * Math.cos((hourAngle * Math.PI) / 180)
  );
  const hourY = Math.round(
    size / 2 + hourHandLength * Math.sin((hourAngle * Math.PI) / 180)
  );

  const minuteX = Math.round(
    size / 2 + minuteHandLength * Math.cos((minuteAngle * Math.PI) / 180)
  );
  const minuteY = Math.round(
    size / 2 + minuteHandLength * Math.sin((minuteAngle * Math.PI) / 180)
  );

  const secondX = Math.round(
    size / 2 + secondHandLength * Math.cos((secondAngle * Math.PI) / 180)
  );
  const secondY = Math.round(
    size / 2 + secondHandLength * Math.sin((secondAngle * Math.PI) / 180)
  );

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative">
        <svg width={size} height={size} className="bg-pink-100">
          {/* Clock face - single circle */}
          <circle
            cx={(size / 2).toString()}
            cy={(size / 2).toString()}
            r={(size / 2 - 8).toString()}
            fill="#fce7f3"
            stroke="#000000"
            strokeWidth="4"
          />

          {/* Hour markers */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
            const angle = i * 30 - 90;
            const x1 = Math.round(
              size / 2 + (size / 2 - 15) * Math.cos((angle * Math.PI) / 180)
            );
            const y1 = Math.round(
              size / 2 + (size / 2 - 15) * Math.sin((angle * Math.PI) / 180)
            );
            const x2 = Math.round(
              size / 2 + (size / 2 - 25) * Math.cos((angle * Math.PI) / 180)
            );
            const y2 = Math.round(
              size / 2 + (size / 2 - 25) * Math.sin((angle * Math.PI) / 180)
            );

            return (
              <line
                key={i}
                x1={x1.toString()}
                y1={y1.toString()}
                x2={x2.toString()}
                y2={y2.toString()}
                stroke="#000000"
                strokeWidth="2"
              />
            );
          })}

          {/* Numbers */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => {
            const angle = number * 30 - 90;
            const x = Math.round(
              size / 2 + (size / 2 - 35) * Math.cos((angle * Math.PI) / 180)
            );
            const y = Math.round(
              size / 2 + (size / 2 - 35) * Math.sin((angle * Math.PI) / 180)
            );

            return (
              <text
                key={number}
                x={x.toString()}
                y={y.toString()}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="12"
                fontWeight="bold"
                fill="#000000"
                fontFamily="'Press Start 2P', cursive"
              >
                {number}
              </text>
            );
          })}

          {/* Hour hand */}
          <line
            x1={(size / 2).toString()}
            y1={(size / 2).toString()}
            x2={hourX.toString()}
            y2={hourY.toString()}
            stroke="#000000"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Minute hand */}
          <line
            x1={(size / 2).toString()}
            y1={(size / 2).toString()}
            x2={minuteX.toString()}
            y2={minuteY.toString()}
            stroke="#000000"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Second hand */}
          <line
            x1={(size / 2).toString()}
            y1={(size / 2).toString()}
            x2={secondX.toString()}
            y2={secondY.toString()}
            stroke="#be185d"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Center dot */}
          <circle
            cx={(size / 2).toString()}
            cy={(size / 2).toString()}
            r="8"
            fill="#000000"
          />
        </svg>
      </div>
    </div>
  );
}
