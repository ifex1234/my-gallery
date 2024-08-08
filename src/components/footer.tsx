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
    <div className="w-full flex flex-col justify-between">
      <div className="w-full flex flex-col md:flex-row  justify-between min-h-52 px-5 my-3 gap-3">
        <div className="w-1/2 md:w-1/4">
          <h4 className="my-2 text-sm font-semibold text-gray-500">About</h4>
          <p className="text-sm">
            Kaphgall is a showcase of the world's finest designs.
          </p>
        </div>
        <div className="w-1/2 md:w-1/4">
          <h4 className="my-2 text-sm font-semibold text-gray-500">
            Latest design
          </h4>
          <ul className="text-xs">
            <li>Luca</li>
            <li>Studio Mistaker</li>
            <li>Brandblack</li>
          </ul>
        </div>
        <div className="w-1/2 md:w-1/4">
          <h4 className="my-2 text-sm font-semibold text-gray-500">
            Information
          </h4>
          <ul className="text-xs">
            <li>Privacy</li>
            <li>Sponsorship</li>
          </ul>
        </div>
        <div className="w-1/2 md:w-1/4 ">
          <h4 className="my-2 text-sm font-semibold text-gray-500">
            Connect with Us
          </h4>
          <div className="flex flex-row gap-2">
            <LucideYoutube className="cursor-pointer" />
            <LucideFacebook className="cursor-pointer" />
            <LucideTwitter className="cursor-pointer" />
            <LucideMail className="cursor-pointer" />
            <LucideRss className="cursor-pointer" />
          </div>
        </div>
      </div>
      <span className="flex flex-col w-full text-sm justify-center items-center px-5">
        <p>
          Copyright © 2024 Howells—Studio All screenshots © of their respective
          owners.
        </p>
        <p className="text-gray-400">Designed by IFEX</p>
      </span>
    </div>
  );
}
