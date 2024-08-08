import { HomeImage } from "@/lib/contant";
import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";

export default function HomeContent() {
  return (
    <div className="flex flex-row gap-6 w-full flex-wrap px-5 md:container my-6 bg-purple-300">
      {HomeImage.map((data) => (
        <div
          className="w-96 md:w-80 h-60 lg:w-72 xl:w-96 my-5 px-5"
          key={data.id}
        >
          <Image src={data.img} alt="" />
          <h4 className=" text-slate-900 text-xs mt-3 mb-1">hello</h4>
          <p className="text-slate-500 text-xs">555</p>
        </div>
      ))}
      <Separator />
    </div>
  );
}
