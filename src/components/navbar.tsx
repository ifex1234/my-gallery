import React from "react";
import { LucideUser2 } from "lucide-react";
export default function Navbar() {
  return (
    <div className="w-full h-28 bg-purple-100 flex justify-between px-5 items-center">
      <p className=" bg-gradient-to-r from-orange-500 to-purple-800 text-2xl px-3">
        Kaphgall
      </p>

      <LucideUser2 className=" cursor-pointer" />
    </div>
  );
}
