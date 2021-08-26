import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import LatestWalksContainer from "../components/LatestWalksContainer";
import MostPopularWalksContainer from "../components/MostPopularWalksContainer";
import MostPopularCountiesContainer from "../components/MostPopularCountiesContainer";
import Footer from "../components/Footer";
import fetchWalks, { fetchLatestWalks } from "../utils/contentful/getContentfulWalks";

const dummyPopularCounties = [
  {
    countyNameSlug: "hertfordshire",
    countyName: "Hertfordshire",
  },
  {
    countyNameSlug: "cambridgeshire",
    countyName: "Cambridgeshire",
  },
  {
    countyNameSlug: "oxfordshire",
    countyName: "Oxfordshire",
  },
  {
    countyNameSlug: "kent",
    countyName: "Kent",
  },
];

export default function Home({latestWalks}) {
  return (
    <div className="flex flex-col min-h-screen mx-auto container md:container md:px-16 w-full">
      <NavBar />
      <Hero />
      <main className="px-2 sm:px-0">
        <LatestWalksContainer latestWalks={latestWalks}/>
        <MostPopularWalksContainer />
        <MostPopularCountiesContainer
          mostPopularCounties={dummyPopularCounties}
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const latestWalks = await fetchLatestWalks();
  return { props: {
    latestWalks,
  }}
}