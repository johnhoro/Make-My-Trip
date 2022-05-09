import Download from "./Download";
import Explore from "./Explore";
import Footer from "./Footer";
import Hero from "./Hero";
import Offer from "./Offer";

function Home() {
  return (
    <>
      <div className="hero">
        <Hero />
      </div>
      <Explore />
      <Offer />
      <Download />
      <Footer />
    </>
  );
}

export default Home;
