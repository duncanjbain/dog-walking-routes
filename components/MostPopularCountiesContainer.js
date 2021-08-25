import Link from "next/link";
import Anchor from "./Anchor";
const MostPopularCountiesContainer = ({ mostPopularCounties }) => {
  return (
    <section className="mb-8">
      <div className="mb-2 md:mb-4">
        <h2 className="text-gray-600 text-2xl lg:text-3xl font-bold">
          Most popular counties
        </h2>
        <p className="text-green-800 text-xl font-light">
          Discover dog walks in the most popular counties
        </p>
      </div>
      <div>
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {mostPopularCounties.map((popularCounty) => (
            <Link key={popularCounty.countyNameSlug} href={`/county/${popularCounty.countyNameSlug}`} passHref>
              <Anchor>
                <li className="text-xl md:text-2xl text-green-900 hover:underline">
                  {popularCounty.countyName} →
                </li>
              </Anchor>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MostPopularCountiesContainer;
