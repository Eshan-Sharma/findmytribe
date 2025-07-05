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
import { mockMembers, timezones } from "./mockData";
import { Clock } from "lucide-react";

export default function ClockView() {
  const getMembersInTimezone = (timezone: string) =>
    mockMembers.filter((member) => member.timezone === timezone);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-black">Global Time Zones</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {timezones.map((tz) => {
          const membersInTz = getMembersInTimezone(tz.name);
          return (
            <Card key={tz.name} className="border border-black">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-black mb-2">
                  {tz.time}
                </div>
                <div className="text-lg font-medium text-black mb-1">
                  {tz.name}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Badge
                      variant="outline"
                      className="border-black text-black cursor-pointer hover:bg-black hover:text-white transition-colors"
                    >
                      {tz.members} member{tz.members !== 1 ? "s" : ""}
                    </Badge>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white border border-black">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-black">
                        Members in {tz.name} ({tz.time})
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-3 mt-4">
                      {membersInTz.length > 0 ? (
                        membersInTz.map((member) => (
                          <MemberCard key={member.id} member={member} />
                        ))
                      ) : (
                        <div className="text-center py-8 text-gray-600">
                          <Clock className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                          <p>No members found in this timezone</p>
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
