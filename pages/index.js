import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import LatestWalksContainer from "../components/LatestWalksContainer";
import MostPopularWalksContainer from "../components/MostPopularWalksContainer";
import MostPopularCountiesContainer from "../components/MostPopularCountiesContainer";

const dummyPopularCounties = [
  {
    "countyNameSlug": "hertfordshire",
    "countyName": "Hertfordshire"
  },
  {
    "countyNameSlug": "cambridgeshire",
    "countyName": "Cambridgeshire"
  },
  {
    "countyNameSlug": "oxfordshire",
    "countyName": "Oxfordshire"
  },
  {
    "countyNameSlug": "kent",
    "countyName": "Kent"
  },
]

export default function Home() {
  return (
    <div className="mx-auto w-full lg:w-2/3">
      <NavBar />
      <Hero />
      <main className="mx-3">
      <LatestWalksContainer />
      <MostPopularWalksContainer />
      <MostPopularCountiesContainer mostPopularCounties={dummyPopularCounties} />
      </main>

    </div>
  );
}
