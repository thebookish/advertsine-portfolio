import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-bold max-w-7xl mx-auto text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
        Grow Your Business with <br className="md:hidden" />
        <Cover className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Digital Excellence
        </Cover>
      </h1>
    </div>
  );
}
