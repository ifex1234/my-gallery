import { Carousell } from "@/components/carousels";
import HomeContent from "@/components/home-content";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className=" md:container">
      <main>
        <Carousell />
        <HomeContent />
        <Footer />
      </main>
    </div>
  );
}
