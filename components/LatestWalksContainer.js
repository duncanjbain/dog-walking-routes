import dogWalkImage from "../public/images/dog_walking_3.jpg";
import LatestWalkCard from "../components/LatestWalkCard";

const LatestWalksContainer = () => {
  return (
    <section>
      <div className="mb-2 md:mb-4">
        <h2 className="text-gray-600 text-2xl lg:text-3xl font-bold">
          Latest walks added
        </h2>
        <p className="text-green-800 text-xl font-light">
          Explore some recently added walks
        </p>
      </div>
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 mb-6">
        <LatestWalkCard
          imageSrc={dogWalkImage}
          walkCountySlug="hertfordshire"
          walkNameSlug="harpenden-woods"
          imageAltText="Alt Text"
          walkCounty="Hertfordshire"
          walkName="Harpenden Woods"
          walkTags={["Tag 1", "Tag 2", "Tag 3"]}
        />
        <LatestWalkCard
          imageSrc={dogWalkImage}
          walkCountySlug="hertfordshire"
          walkNameSlug="harpenden-woods"
          imageAltText="Alt Text"
          walkCounty="Hertfordshire"
          walkName="Harpenden Woods"
          walkTags={["Tag 1", "Tag 2", "Tag 3"]}
        />
        <LatestWalkCard
          imageSrc={dogWalkImage}
          walkCountySlug="hertfordshire"
          walkNameSlug="harpenden-woods"
          imageAltText="Alt Text"
          walkCounty="Hertfordshire"
          walkName="Harpenden Woods"
          walkTags={["Tag 1", "Tag 2", "Tag 3"]}
        />
        <LatestWalkCard
          imageSrc={dogWalkImage}
          walkCountySlug="hertfordshire"
          walkNameSlug="harpenden-woods"
          imageAltText="Alt Text"
          walkCounty="Hertfordshire"
          walkName="Harpenden Woods"
          walkTags={["Tag 1", "Tag 2", "Tag 3"]}
        />
        <LatestWalkCard
          imageSrc={dogWalkImage}
          walkCountySlug="hertfordshire"
          walkNameSlug="harpenden-woods"
          imageAltText="Alt Text"
          walkCounty="Hertfordshire"
          walkName="Harpenden Woods"
          walkTags={["Tag 1", "Tag 2", "Tag 3"]}
        />
        <LatestWalkCard
          imageSrc={dogWalkImage}
          walkCountySlug="hertfordshire"
          walkNameSlug="harpenden-woods"
          imageAltText="Alt Text"
          walkCounty="Hertfordshire"
          walkName="Harpenden Woods"
          walkTags={["Tag 1", "Tag 2", "Tag 3"]}
        />
      </div>
      <button className="px-2 py-2 xl:px-2 xl:py-2 bg-green-900 text-yellow-400 text-base xl:text-2xl font-bold rounded hover:bg-green-800 focus:outline-none focus:bg-green-800">
        Show all walks
      </button>
    </section>
  );
};

export default LatestWalksContainer;