import { HomeImage } from "@/lib/contant";
import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";
// import Pagination from "./pagination";

export default function HomeContent() {
  return (
    <div className="flex flex-row gap-6 w-full flex-wrap px-5 md:container my-5 bg-purple-300">
      {HomeImage.map((data) => (
        <div
          className="w-96 md:w-72 h-60 lg:w-64 xl:w-96 my-1 px-5"
          key={data.id}
        >
          <Image src={data.img} alt="" />
          <h4 className=" text-slate-900 text-xs mt-3 mb-1">Cohere</h4>
          <p className="text-slate-500 text-xs">5 hours ago</p>
        </div>
      ))}
      <Separator />
      {/* <Pagination /> */}
    </div>
  );
}
