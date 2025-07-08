"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Globe,
  User,
  MessageCircle,
  Twitter,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

type Member = {
  id: number;
  name: string;
  username: string;
  organization?: string;
  city: string;
  country: string;
  timezone: string;
  discordId?: string;
  twitterHandle?: string;
};

export default function MemberCard({ member }: { member: Member }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      className="brutal-card bg-pink-100 cursor-pointer group"
      onClick={() => setExpanded(!expanded)}
    >
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="brutal-avatar w-12 h-12 flex items-center justify-center text-xl bg-pink-200">
              {member.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="font-black text-gray-800 text-lg">
                {member.name}
              </div>
              <div className="text-sm font-bold text-pink-600">
                @{member.username}
              </div>
            </div>
          </div>
          <div className="bg-pink-200 rounded-full p-2 border-2 border-black">
            {expanded ? (
              <ChevronUp className="w-5 h-5 text-black" />
            ) : (
              <ChevronDown className="w-5 h-5 text-black" />
            )}
          </div>
        </div>

        {expanded && (
          <div className="mt-5 pt-5 border-t-4 border-dashed border-pink-300 space-y-4">
            {member.organization && (
              <div className="flex items-center gap-3 bg-pink-100 p-3 rounded-2xl border-2 border-black">
                <span className="font-bold text-black">
                  {member.organization}
                </span>
              </div>
            )}
            <div className="flex items-center gap-3 bg-pink-100 p-3 rounded-2xl border-2 border-black">
              <span className="font-bold text-black">
                {member.city}, {member.country}
              </span>
            </div>
            <div className="flex items-center gap-3 bg-pink-100 p-3 rounded-2xl border-2 border-black">
              <span className="font-bold text-black">{member.timezone}</span>
            </div>
            <div className="flex gap-3 flex-wrap">
              {member.discordId && (
                <div className="flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full border-2 border-black">
                  <span className="font-bold text-black text-sm">
                    {member.discordId}
                  </span>
                </div>
              )}
              {member.twitterHandle && (
                <div className="flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full border-2 border-black">
                  <span className="font-bold text-black text-sm">
                    {member.twitterHandle}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
