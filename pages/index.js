import LayoutHero from "../components/LayoutHero";
import LatestWalksContainer from "../components/LatestWalksContainer";
import MostPopularWalksContainer from "../components/MostPopularWalksContainer";
import MostPopularCountiesContainer from "../components/MostPopularCountiesContainer";
import {
  fetchAllWalks,
  fetchLatestWalks,
  fetchPopularWalks
} from "../utils/contentful/getContentfulWalks";
import HeadMeta from "../components/HeadMeta";

export default function Home({ latestWalks, allCounties, popularWalks }) {
  return (
    <LayoutHero>
            <HeadMeta
        metaTitle="Dog walking Route Finder"
        metaDescription="Find the perfect dog walking route"
        metaTwitterImage="https://dog-walking.duncanbain.dev/socialcard.jpg"
        metaTwitterImageAlt="A happy looking dog on a walk"
      />
      <LatestWalksContainer latestWalks={latestWalks} />
      <MostPopularWalksContainer popularWalks={popularWalks} />
      <MostPopularCountiesContainer mostPopularCounties={allCounties} />
    </LayoutHero>
  );
}

export async function getStaticProps() {
  const latestWalks = await fetchLatestWalks();
  const allWalks = await fetchAllWalks();
  const popularWalks = await fetchPopularWalks();
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
      popularWalks
    },
  };
}
