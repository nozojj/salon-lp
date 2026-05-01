import Concept from "@/components/Concept";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import ShopInfo from "@/components/ShopInfo";
import Staff from "@/components/Staff";
import StyleGallery from "@/components/StyleGallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Concept />
      <Menu />
      <StyleGallery />
      <Staff />
      <ShopInfo />
    </main>
  );
}
