import { countries } from "./mockData";
import MemberCard from "./MemberCard";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";

export default function ListView() {
  return (
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
}
