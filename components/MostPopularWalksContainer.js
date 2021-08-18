import dogWalkImage from "../public/images/dog_walking_3.jpg";

import MostPopularWalkCard from '../components/MostPopularWalkCard'

const MostPopularWalksContainer = () => {
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
          <MostPopularWalkCard             imageSrc={dogWalkImage}
          walkCountySlug="hertfordshire"
          walkNameSlug="harpenden-woods"
          imageAltText="Alt Text"
          walkCounty="Hertfordshire"
          walkName="Harpenden Woods"
          walkShortDescription="Short description..." />
          <MostPopularWalkCard             imageSrc={dogWalkImage}
          walkCountySlug="hertfordshire"
          walkNameSlug="harpenden-woods"
          imageAltText="Alt Text"
          walkCounty="Hertfordshire"
          walkName="Harpenden Woods"
          walkShortDescription="Short description..." />
          <MostPopularWalkCard             imageSrc={dogWalkImage}
          walkCountySlug="hertfordshire"
          walkNameSlug="harpenden-woods"
          imageAltText="Alt Text"
          walkCounty="Hertfordshire"
          walkName="Harpenden Woods"
          walkShortDescription="Short description..." />
      </div>
        </section>

    )
}

export default MostPopularWalksContainer;