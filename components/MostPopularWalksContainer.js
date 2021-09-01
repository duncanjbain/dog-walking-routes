import MostPopularWalkCard from "../components/MostPopularWalkCard";

const MostPopularWalksContainer = ({popularWalks}) => {
  return (
    <section className="mb-8">
      <div className="mb-2 md:mb-4">
        <h2 className="text-gray-600 text-2xl lg:text-3xl font-bold">
          Most popular dog walks
        </h2>
        <p className="text-green-800 text-xl font-light">
          Discover our most popular dog walks
        </p>
      </div>
      <div className="xl:grid grid-cols-2 gap-6">
        {popularWalks.map((walk) => (
          <MostPopularWalkCard key={walk.sys.id} walk={walk} />
        ))}
      </div>
    </section>
  );
};

export default MostPopularWalksContainer;
