import LayoutNoHero from "../../components/LayoutNoHero";
import SingleWalkCard from "../../components/SingleWalkCard";
import { fetchAllWalks } from "../../utils/contentful/getContentfulWalks";

const AllWalks = ({ allWalks }) => {
  return (
    <LayoutNoHero>
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
