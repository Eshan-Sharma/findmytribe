"use client";

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b border-black bg-white px-4 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">FindMyTribe.fun</h1>
        <Button
          variant="outline"
          className="border-black text-black hover:bg-black hover:text-white bg-transparent"
        >
          Sign In
        </Button>
      </div>
    </header>
  );
}
