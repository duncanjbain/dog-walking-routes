import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer"
import SingleWalkCard from "../../components/SingleWalkCard";
import {
  fetchByCountySlug,
  fetchAllWalks,
} from "../../utils/contentful/getContentfulWalks";

const walksByCounty = ({ walks, params }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto container md:container md:px-16 w-full">
      <NavBar />
      <Hero />
      <main className="px-2 sm:px-0">
        <div className="mb-2 md:mb-8">
          <h2 className="text-gray-600 text-2xl lg:text-3xl font-bold">
            All walks within <span className="capitalize" >{params.countySlug}</span>
          </h2>
          <p className="text-green-800 text-xl font-light">
          Explore some recently added walks within <span className="capitalize" >{params.countySlug}</span>
        </p>
        </div>
        <div className="grid gap-6 grid-cols-2 xl:grid-cols-3 mb-6">
        {walks.map((walk) => (
          <SingleWalkCard key={walk.sys.id} walk={walk} />
        ))}

      </div>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticPaths = async () => {
  const walks = await fetchAllWalks();
  const paths = walks.map((walk) => ({
    params: {
      countySlug: walk.fields.countySlug,
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const walks = await fetchByCountySlug(params.countySlug);
  return {
    props: {
      walks: walks.items,
      params
    },
  };
};

export default walksByCounty;
