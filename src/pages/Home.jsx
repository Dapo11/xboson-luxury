import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import BrandIntro from "../components/home/BrandIntro";
import FiveLenses from "../components/home/FiveLenses";
import CollectionPreview from "../components/home/CollectionPreview";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-xb-black">
      <Navbar />
      <Hero />
      <BrandIntro />
      <FiveLenses />
      <CollectionPreview />
      <Footer />
    </div>
  );
}

export default Home;
