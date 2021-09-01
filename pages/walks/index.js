import LayoutNoHero from "../../components/LayoutNoHero";
import SingleWalkCard from "../../components/SingleWalkCard";
import { fetchAllWalks } from "../../utils/contentful/getContentfulWalks";
import HeadMeta from "../../components/HeadMeta";

const AllWalks = ({ allWalks }) => {
  return (
    <LayoutNoHero>
      <HeadMeta
        metaTitle="Dog walking routefinder"
        metaDescription="Find the perfect dog walking route"
        metaTwitterImage="https://dog-walking.duncanbain.dev/socialcard.jpg"
        metaTwitterImageAlt="A happy looking dog on a walk"
      />
      <div className="mb-2 md:mb-8">
        <h2 className="text-gray-600 text-2xl lg:text-3xl font-bold">
          All walks
        </h2>
        <p className="text-green-800 text-xl font-light">
          Explore all of the dog walks available
        </p>
      </div>
      <div className="grid gap-6 grid-cols-2 xl:grid-cols-3 mb-6">
        {allWalks.map((walk) => (
          <SingleWalkCard key={walk.sys.id} walk={walk} />
        ))}
      </div>
    </LayoutNoHero>
  );
};

export async function getStaticProps() {
  const allWalks = await fetchAllWalks();
  return {
    props: {
      allWalks,
    },
  };
}

export default AllWalks;
