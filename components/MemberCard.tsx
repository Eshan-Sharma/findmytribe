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
      className="border border-black cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={() => setExpanded(!expanded)}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <div className="font-medium text-black">{member.name}</div>
              <div className="text-sm text-gray-600">@{member.username}</div>
            </div>
          </div>
          {expanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </div>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
            {member.organization && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-600" />
                <span className="text-sm">{member.organization}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-sm">
                {member.city}, {member.country}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-600" />
              <span className="text-sm">{member.timezone}</span>
            </div>
            <div className="flex gap-4">
              {member.discordId && (
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4 text-gray-600" />
                  <span className="text-sm">{member.discordId}</span>
                </div>
              )}
              {member.twitterHandle && (
                <div className="flex items-center gap-1">
                  <Twitter className="w-4 h-4 text-gray-600" />
                  <span className="text-sm">{member.twitterHandle}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
