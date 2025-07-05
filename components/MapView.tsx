import { Map } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MemberCard from "./MemberCard";
import { mockMembers } from "./mockData";

export default function MapView() {
  return (
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
                locations as pins.
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
}
