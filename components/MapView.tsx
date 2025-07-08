import { Map } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MemberCard from "./MemberCard";
import { mockMembers } from "./mockData";

export default function MapView() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black text-black mb-3">World Map View</h2>
        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          Explore your tribe on the world map and connect with members globally.
        </p>
      </div>
      <Card className="brutal-card bg-pink-100">
        <CardContent className="p-10">
          <div className="brutal-card bg-pink-200 h-96 flex items-center justify-center relative overflow-hidden">
            <div className="text-center space-y-6 z-10">
              <div className="text-2xl font-black text-gray-800">
                Interactive World Map
              </div>
              <div className="text-lg font-bold text-gray-700 max-w-md">
                Coming Soon! Map integration showing member locations
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="space-y-4">
        <h3 className="text-2xl font-black text-black text-center mb-6">
          All Tribe Members
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
