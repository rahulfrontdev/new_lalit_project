import Image from "next/image";
import Navbar from "./components/Navbar";
import Carousell from "./components/Carousel";
import Footer from "./footer/footer";
import HomeAbout from "./components/HomeAbout";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousell />
      <HomeAbout />
      <Footer />

    </div>
  );
}
