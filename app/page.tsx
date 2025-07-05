"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  List,
  Map,
  User,
  Globe,
  MessageCircle,
  Twitter,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Mock data
const mockMembers = [
  {
    id: 1,
    name: "Alex Chen",
    username: "alexc",
    organization: "TechCorp",
    city: "San Francisco",
    country: "United States",
    timezone: "PST",
    discordId: "alex#1234",
    twitterHandle: "@alexchen",
    visibility: "public",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    username: "maria_r",
    organization: "StartupXYZ",
    city: "Barcelona",
    country: "Spain",
    timezone: "CET",
    discordId: "maria#5678",
    twitterHandle: "@mariarodriguez",
    visibility: "public",
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    username: "yuki_t",
    organization: "Innovation Labs",
    city: "Tokyo",
    country: "Japan",
    timezone: "JST",
    discordId: "yuki#9012",
    twitterHandle: "@yukitanaka",
    visibility: "public",
  },
  {
    id: 4,
    name: "James Wilson",
    username: "jwilson",
    organization: "DevStudio",
    city: "London",
    country: "United Kingdom",
    timezone: "GMT",
    discordId: "james#3456",
    twitterHandle: "@jameswilson",
    visibility: "public",
  },
  {
    id: 5,
    name: "Sarah Kim",
    username: "sarahk",
    organization: "Design Co",
    city: "Seoul",
    country: "South Korea",
    timezone: "KST",
    discordId: "sarah#7890",
    twitterHandle: "@sarahkim",
    visibility: "public",
  },
];

const timezones = [
  { name: "PST", time: "10:30 AM", members: 1 },
  { name: "GMT", time: "6:30 PM", members: 1 },
  { name: "CET", time: "7:30 PM", members: 1 },
  { name: "JST", time: "3:30 AM", members: 1 },
  { name: "KST", time: "3:30 AM", members: 1 },
];

const countries = [
  {
    name: "United States",
    cities: [
      {
        name: "San Francisco",
        members: mockMembers.filter((m) => m.city === "San Francisco"),
      },
    ],
  },
  {
    name: "Spain",
    cities: [
      {
        name: "Barcelona",
        members: mockMembers.filter((m) => m.city === "Barcelona"),
      },
    ],
  },
  {
    name: "Japan",
    cities: [
      {
        name: "Tokyo",
        members: mockMembers.filter((m) => m.city === "Tokyo"),
      },
    ],
  },
  {
    name: "United Kingdom",
    cities: [
      {
        name: "London",
        members: mockMembers.filter((m) => m.city === "London"),
      },
    ],
  },
  {
    name: "South Korea",
    cities: [
      {
        name: "Seoul",
        members: mockMembers.filter((m) => m.city === "Seoul"),
      },
    ],
  },
];

export default function Home() {
  const [activeView, setActiveView] = useState<"clock" | "list" | "map">(
    "clock"
  );
  const [expandedMembers, setExpandedMembers] = useState<Set<number>>(
    new Set()
  );

  const toggleMemberExpansion = (memberId: number) => {
    const newExpanded = new Set(expandedMembers);
    if (newExpanded.has(memberId)) {
      newExpanded.delete(memberId);
    } else {
      newExpanded.add(memberId);
    }
    setExpandedMembers(newExpanded);
  };

  const MemberCard = ({ member }: { member: (typeof mockMembers)[0] }) => {
    const isExpanded = expandedMembers.has(member.id);

    return (
      <Card
        className="border border-black cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => toggleMemberExpansion(member.id)}
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
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </div>

          {isExpanded && (
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
  };

  const ClockView = () => {
    const [selectedTimezone, setSelectedTimezone] = useState<string | null>(
      null
    );

    const getMembersInTimezone = (timezone: string) => {
      return mockMembers.filter((member) => member.timezone === timezone);
    };

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
  };

  const ListView = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-black">Members by Location</h2>
      {countries.map((country) => (
        <div key={country.name} className="space-y-4">
          <h3 className="text-lg font-semibold text-black border-b border-black pb-2">
            {country.name}
          </h3>
          {country.cities.map((city) => (
            <div key={city.name} className="ml-4 space-y-3">
              <h4 className="font-medium text-black flex items-center gap-2">
                <Globe className="w-4 h-4" />
                {city.name}
                <Badge variant="outline" className="border-black text-black">
                  {city.members.length}
                </Badge>
              </h4>
              <div className="ml-6 space-y-2">
                {city.members.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  const MapView = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-black">World Map View</h2>
      <Card className="border border-black">
        <CardContent className="p-8">
          <div className="bg-gray-100 border border-black rounded-lg h-96 flex items-center justify-center">
            <div className="text-center space-y-4">
              <Map className="w-16 h-16 mx-auto text-gray-600" />
              <div className="text-lg font-medium text-black">
                Interactive Map
              </div>
              <div className="text-sm text-gray-600 max-w-md">
                Map integration with Mapbox or Google Maps would show member
                locations as pins. Click on pins to see member details.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-black bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-black">FindMyTribe.fun</h1>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white bg-transparent"
            >
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-black bg-white">
        <div className="container mx-auto px-4">
          <div className="flex space-x-0">
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
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeView === "clock" && <ClockView />}
        {activeView === "list" && <ListView />}
        {activeView === "map" && <MapView />}
      </main>

      {/* Footer */}
      <footer className="border-t border-black bg-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-gray-600">
            <p>FindMyTribe.fun - Connect with your community worldwide</p>
            <p className="mt-2">Built with privacy-first principles</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
