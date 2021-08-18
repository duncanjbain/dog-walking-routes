import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import LatestWalksContainer from "../components/LatestWalksContainer";
import MostPopularWalksContainer from "../components/MostPopularWalksContainer";

export default function Home() {
  return (
    <div className="mx-auto w-full lg:w-2/3">
      <NavBar />
      <Hero />
      <main className="mx-3">
      <LatestWalksContainer />
      <MostPopularWalksContainer />
      </main>

    </div>
  );
}
