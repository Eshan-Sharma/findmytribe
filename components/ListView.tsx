import { countries } from "./mockData";
import MemberCard from "./MemberCard";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";

export default function ListView() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black text-black mb-3">
          Members by Location
        </h2>
        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          Discover amazing people from around the world and connect with your
          local community.
        </p>
      </div>
      {countries.map((country, countryIndex) => {
        const countryColors = [
          "bg-purple-200",
          "bg-indigo-200",
          "bg-violet-200",
          "bg-purple-300",
          "bg-indigo-300",
          "bg-violet-300",
        ];
        const countryColor = countryColors[countryIndex % countryColors.length];

        return (
          <div key={country.name} className="space-y-6">
            <div className={`brutal-card ${countryColor} p-6 cursor-pointer`}>
              <h3 className="text-2xl font-black text-gray-800 text-center">
                {country.name}
              </h3>
            </div>
            {country.cities.map((city, cityIndex) => {
              const cityColors = [
                "bg-purple-100",
                "bg-indigo-100",
                "bg-violet-100",
                "bg-purple-200",
                "bg-indigo-200",
              ];
              const cityColor = cityColors[cityIndex % cityColors.length];

              return (
                <div key={city.name} className="ml-6 space-y-4">
                  <div
                    className={`brutal-card ${cityColor} p-4 inline-block cursor-pointer`}
                  >
                    <h4 className="font-black text-gray-800 flex items-center gap-3 text-lg">
                      {city.name}
                      <Badge className="brutal-badge">
                        {city.members.length}
                      </Badge>
                    </h4>
                  </div>
                  <div className="ml-8 space-y-4">
                    {city.members.map((member) => (
                      <MemberCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
