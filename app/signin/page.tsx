"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignInPage() {
  const [form, setForm] = useState({
    name: "",
    city: "",
    country: "",
    discord: "",
    twitter: "",
    isPublic: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = () => {
    setForm((prev) => ({ ...prev, isPublic: !prev.isPublic }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New user created:", form);
    alert("Welcome to FindMyTribe!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Card className="w-full max-w-lg border border-black">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Create Your Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label>Name</Label>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label>Country</Label>
              <Input
                name="country"
                value={form.country}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label>City</Label>
              <Input
                name="city"
                value={form.city}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label>Discord ID</Label>
              <Input
                name="discord"
                value={form.discord}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Twitter Handle</Label>
              <Input
                name="twitter"
                value={form.twitter}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label>Make Profile Public?</Label>
              <Switch checked={form.isPublic} onCheckedChange={handleToggle} />
            </div>
            <Button type="submit" className="w-full bg-black text-white">
              Save Profile
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
