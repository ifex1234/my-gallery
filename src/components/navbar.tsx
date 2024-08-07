import React from "react";
import { Avatar } from "./ui/avatar";

export default function Navbar() {
  return (
    <div className="w-full h-28 bg-purple-100 flex justify-between px-5 items-center">
      <div>icon</div>
      <div>
        <Avatar className="bg-black">hello</Avatar>
      </div>
    </div>
  );
}
