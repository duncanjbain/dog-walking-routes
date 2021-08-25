import LatestWalkCard from "../components/LatestWalkCard";

const LatestWalksContainer = ({ latestWalks }) => {
  return (
    <section className="mb-8 md:mb-10">
      <div className="mb-2 md:mb-8">
        <h2 className="text-gray-600 text-2xl lg:text-3xl font-bold">
          Latest walks added
        </h2>
        <p className="text-green-800 text-xl font-light">
          Explore some recently added walks
        </p>
      </div>
      <div className="grid gap-6 grid-cols-2 xl:grid-cols-3 mb-6">
        {latestWalks.map((latestWalk) => (
          <LatestWalkCard key={latestWalk.sys.id} walk={latestWalk} />
        ))}

      </div>
      <button className="px-2 py-2 xl:px-2 bg-green-900 text-yellow-400 text-base xl:text-2xl font-bold rounded hover:bg-green-800 focus:outline-none focus:bg-green-800">
        Show all walks
      </button>
    </section>
  );
};

export default LatestWalksContainer;
