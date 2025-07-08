"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MemberCard from "./MemberCard";
import LiveClock from "./LiveClock";
import AnalogClock from "./AnalogClock";
import { mockMembers, timezones } from "./mockData";

export default function ClockView() {
  const getMembersInTimezone = (timezone: string) =>
    mockMembers.filter((member) => member.timezone === timezone);

  return (
    <div className="space-y-12">
      {/* Local Time Section - Analog and Digital Side by Side */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-black mb-8">Your Local Time</h2>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 max-w-4xl mx-auto">
          {/* Analog Clock */}
          <div className="brutal-card bg-pink-100 p-8 flex-shrink-0">
            <AnalogClock size={200} className="mx-auto" />
          </div>

          {/* Digital Clock */}
          <div className="brutal-card bg-pink-200 p-8 flex-grow lg:max-w-md">
            <LiveClock
              timezone={
                typeof window !== "undefined"
                  ? Intl.DateTimeFormat().resolvedOptions().timeZone
                  : "UTC"
              }
              label="Local Time"
              className="text-center"
            />
          </div>
        </div>
      </div>

      {/* Global Timezones Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black text-black mb-3">
          Global Time Zones
        </h2>
        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          Discover community members across different time zones around the
          world. Connect with people who share your schedule and interests.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {timezones.map((tz, index) => {
          const membersInTz = getMembersInTimezone(tz.name);
          const colors = [
            "bg-emerald-200",
            "bg-cyan-200",
            "bg-blue-200",
            "bg-orange-200",
            "bg-pink-200",
            "bg-yellow-200",
          ];
          const color = colors[index % colors.length];

          return (
            <Card
              key={tz.name}
              className={`brutal-card ${color} cursor-pointer group`}
            >
              <CardContent className="p-8">
                <LiveClock
                  timezone={tz.timezone}
                  label={tz.label}
                  className="mb-6"
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex justify-center">
                      <Badge className="brutal-badge cursor-pointer inline-flex items-center gap-2">
                        {tz.members} member{tz.members !== 1 ? "s" : ""}
                      </Badge>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto brutal-dialog bg-pink-100 border-4 border-black">
                    <DialogHeader className="pb-6">
                      <DialogTitle className="text-3xl font-black text-black text-center">
                        Members in {tz.label}
                      </DialogTitle>
                      <div className="flex justify-center">
                        <LiveClock
                          timezone={tz.timezone}
                          label=""
                          className="text-lg text-black"
                        />
                      </div>
                    </DialogHeader>
                    <div className="space-y-6 mt-6">
                      {membersInTz.length > 0 ? (
                        membersInTz.map((member) => (
                          <MemberCard key={member.id} member={member} />
                        ))
                      ) : (
                        <div className="text-center py-16">
                          <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            No members here yet!
                          </h3>
                          <p className="text-lg text-gray-600">
                            Be the first to join this timezone community.
                          </p>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
