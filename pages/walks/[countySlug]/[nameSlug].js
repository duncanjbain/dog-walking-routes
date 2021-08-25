import Link from "next/link";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import {
  fetchByNameSlug,
  fetchWalks,
} from "../../../utils/contentful/getContentfulWalks";

const WalkDetails = ({ walk }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto container w-full">
      <NavBar />
      <main className="px-2">
        <div>
          <h2 className="text-4xl text-green-900 font-bold">
            {walk.fields.routeName}
          </h2>
          <p>{walk.fields.routeCounty}</p>
        </div>
        <div>
          <h2>What&apos;s here</h2>
          <p>Off Lead Enclosed Area, Free Parking, Toilets</p>
        </div>
        <div>
          <h2>About this walk</h2>
          <p>{walk.fields.routeDescription}</p>
        </div>
        <div>
          <h2>How to get there</h2>
          <div>
            <h3>Address</h3>
            <p>Harpenden Woods, Harpenden, Hertfordshire, AL5 5XZ</p>
          </div>
          <div>
            <h3>what3words location</h3>
            <p>
              dog.walking.field <Link href="/">View on what3words</Link>
            </p>
          </div>
          {walk.fields.locationDetails && (
            <div>
              <h3>Location details</h3>
              <p>
            {walk.fields.locationDetails}
              </p>
            </div>
          )}

          <div>
            <h2>Comments</h2>
            <p>No comments</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticPaths = async () => {
  const walks = await fetchWalks();
  const paths = walks.map((walk) => ({
    params: {
      nameSlug: walk.fields.nameSlug,
      countySlug: walk.fields.countySlug,
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const walk = await fetchByNameSlug(params.nameSlug);
  console.log("returned walk", walk);
  return {
    props: {
      walk: walk[0],
    },
  };
};

export default WalkDetails;
