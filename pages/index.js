import LayoutHero from "../components/LayoutHero";
import LatestWalksContainer from "../components/LatestWalksContainer";
import MostPopularWalksContainer from "../components/MostPopularWalksContainer";
import MostPopularCountiesContainer from "../components/MostPopularCountiesContainer";
import {
  fetchAllWalks,
  fetchLatestWalks,
} from "../utils/contentful/getContentfulWalks";

export default function Home({ latestWalks, allCounties }) {
  return (
    <LayoutHero>
      <LatestWalksContainer latestWalks={latestWalks} />
      <MostPopularWalksContainer />
      <MostPopularCountiesContainer mostPopularCounties={allCounties} />
    </LayoutHero>
  );
}

export async function getStaticProps() {
  const latestWalks = await fetchLatestWalks();
  const allWalks = await fetchAllWalks();
  const allCounties = [
    ...new Map(
      allWalks
        .map((walk) => ({
          countyNameSlug: walk.fields.countySlug,
          countyName: walk.fields.routeCounty,
        }))
        .map((item) => [item.countyNameSlug, item])
    ).values(),
  ];
  return {
    props: {
      latestWalks,
      allCounties,
    },
  };
}
