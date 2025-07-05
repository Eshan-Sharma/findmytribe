"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const mockUser = {
  name: "Eshan Sharma",
  city: "Delhi",
  country: "India",
  isPublic: true,
  communities: [
    { code: "athenafoss", visible: true },
    { code: "turbine", visible: false },
    { code: "soltribe", visible: true },
  ],
};

export default function ProfilePage() {
  const [user, setUser] = useState(mockUser);

  const toggleCommunityVisibility = (code: string) => {
    const updated = user.communities.map((c) =>
      c.code === code ? { ...c, visible: !c.visible } : c
    );
    setUser({ ...user, communities: updated });
  };

  const togglePublic = () => {
    setUser({ ...user, isPublic: !user.isPublic });
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-white flex justify-center">
      <Card className="w-full max-w-xl border border-black">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Your Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-sm text-gray-600">
              {user.city}, {user.country}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Label>Global Public Visibility</Label>
            <Switch checked={user.isPublic} onCheckedChange={togglePublic} />
          </div>

          <hr />

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Your Communities</h3>
            {user.communities.map((c) => (
              <div
                key={c.code}
                className="flex items-center justify-between border p-2 rounded"
              >
                <span className="capitalize font-medium">{c.code}</span>
                <Switch
                  checked={c.visible}
                  onCheckedChange={() => toggleCommunityVisibility(c.code)}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
