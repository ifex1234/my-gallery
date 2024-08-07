import { Carousell } from "@/components/carousels";
import Navbar from "@/components/navbar";
import HomeContent from "@/components/home-content";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className=" md:container">
      <header>
        <Navbar />
      </header>

      <main>
        <Carousell />
        <HomeContent />
        <Footer />
      </main>
    </div>
  );
}
