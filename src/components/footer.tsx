/* eslint-disable react/no-unescaped-entities */
import {
  LucideFacebook,
  LucideTwitter,
  LucideYoutube,
  LucideMail,
  LucideRss,
} from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-40 flex flex-col md:flex-row  justify-between">
      <div className="w-1/2 md:w-1/4">
        <h4>About</h4>
        <p className="text-sm">
          Kaphgall is a showcase of the world's finest designs.
        </p>
      </div>
      <div className="w-1/2 md:w-1/4">
        <h4>Latest design</h4>
        <ul className="text-xs">
          <li>Luca</li>
          <li>Studio Mistaker</li>
          <li>Brandblack</li>
        </ul>
      </div>
      <div className="w-1/2 md:w-1/4">
        <h4 className="my-2 text-sm font-semibold">Information</h4>
        <ul className="text-xs">
          <li>Privacy</li>
          <li>Sponsorship</li>
        </ul>
      </div>
      <div className="w-1/2 md:w-1/4 ">
        <h4 className="my-2 text-sm font-semibold">Connect with Us</h4>
        <div className="flex flex-row gap-2">
          <LucideYoutube className="cursor-pointer" />
          <LucideFacebook className="cursor-pointer" />
          <LucideTwitter className="cursor-pointer" />
          <LucideMail className="cursor-pointer" />
          <LucideRss className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
