import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import SingleWalkCard from "../../components/SingleWalkCard";
import Footer from "../../components/Footer";
import { fetchAllWalks } from "../../utils/contentful/getContentfulWalks";

const AllWalks = ({allWalks}) => {
    return (
        <div className="flex flex-col min-h-screen mx-auto container md:container md:px-16 w-full">
        <NavBar />
        <Hero />
        <main className="px-2 sm:px-0">
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
        </main>
        <Footer />
      </div>
    )
}

export async function getStaticProps() {
    const allWalks = await fetchAllWalks()
    console.log(allWalks)
    return { props: {
      allWalks,
    }}
  }

export default AllWalks;