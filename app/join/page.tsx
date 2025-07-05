"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function JoinCommunityPage() {
  const [code, setCode] = useState("");
  const [joinedCommunities, setJoinedCommunities] = useState<string[]>([
    "athenafoss",
  ]);

  const handleJoin = () => {
    if (code.trim() && !joinedCommunities.includes(code.trim())) {
      setJoinedCommunities((prev) => [...prev, code.trim()]);
      setCode("");
      alert(`Successfully joined ${code}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Card className="w-full max-w-md border border-black">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Join a Community</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              placeholder="Enter community code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <Button onClick={handleJoin} className="w-full bg-black text-white">
              Join
            </Button>

            <div className="mt-4">
              <h3 className="font-semibold">Communities you’ve joined:</h3>
              <ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
                {joinedCommunities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
