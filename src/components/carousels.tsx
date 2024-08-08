"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselImgs } from "@/lib/contant";
import Image from "next/image";

export function Carousell() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="flex items-center justify-center w-full bg-slate-600">
      <Carousel
        plugins={[plugin.current]}
        className="w-full px-3 md:w-3/4 mb-4"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full">
          {CarouselImgs.map((content) => (
            <CarouselItem key={content.id}>
              <div className="p-1 w-full">
                <Card className="w-96 md:w-[950px] lg:h-[600px]">
                  <Image src={content.img} alt="" />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
