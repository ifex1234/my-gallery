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
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full md:w-[1000px] max-w-xs bg-black"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full md:w-[1000px]">
        {CarouselImgs.map((content) => (
          <CarouselItem key={content.id}>
            <div className="p-1 w-full md:w-[1000px]">
              <Card className="w-96 md:w-[1000px]">
                <Image src={content.img} alt="" />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
