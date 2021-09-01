/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import Image from "next/image";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LayoutNoHero from "../../components/LayoutNoHero";
import Anchor from "../../components/Anchor";
import Map from "../../components/Map";
import {
  fetchByNameSlug,
  fetchAllWalks,
} from "../../utils/contentful/getContentfulWalks";
import getLatLon3Words from "../../utils/getWhat3Words";
import contentfulImage from "../../utils/contentful/contentfulImage";
import HeadMeta from "../../components/HeadMeta";

const WalkDetails = ({ walk, what3words }) => {
  return (
    <LayoutNoHero>
      <HeadMeta
        metaTitle={`Dog walking route at ${walk.fields.routeName}`}
        metaDescription={`Enjoy a lovely dog walk at ${walk.fields.routeName} in ${walk.fields.routeCounty}`}
        metaTwitterImage={`https:${walk.fields.routePhotos[0].fields.file.url}`}
        metaTwitterImageAlt={walk.fields.routePhotos[0].fields.description}
      />
      <div className="h-96 w-auto relative mb-4">
        <Image
          src={`https:${walk.fields.routePhotos[0].fields.file.url}`}
          loader={contentfulImage}
          className="rounded-lg"
          layout="fill" // required
          objectFit="cover" // change to suit your needs
          quality={100}
          alt={walk.fields.routePhotos[0].fields.description}
        />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-5xl text-green-900 font-bold mb-2">
          {walk.fields.routeName}
        </h2>
        <p className="font-semibold text-2xl text-gray-600 px-1">
          <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
          <Link href={`/county/${walk.fields.countySlug}`} passHref>
            <Anchor className="hover:underline">
              {walk.fields.routeCounty}
            </Anchor>
          </Link>
        </p>
      </div>
      <div className="lg:w-2/3 lg:ml-4">
        <div className="mb-8">
          <h2 className="text-3xl text-green-900 font-semibold">
            What&apos;s here
          </h2>
          <p>Off Lead Enclosed Area, Free Parking, Toilets</p>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl text-green-900 font-semibold ">
            About this walk
          </h2>
          <p className="leading-relaxed">{walk.fields.routeDescription}</p>
        </div>
        <div>
          <h2 className="text-3xl text-green-900 font-semibold mb-2">
            How to get there
          </h2>
          <div className="mb-8">
            <h3 className="text-xl text-green-900 font-semibold">Address</h3>
            <p>Harpenden Woods, Harpenden, Hertfordshire, AL5 5XZ</p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl text-green-900 font-semibold">
              what3words location
            </h3>
            <p>
              <inline className="text-red-500">/// </inline>
              {what3words.words}{" "}
              <Link href={what3words.map} passHref>
                <Anchor className="text-base text-green-900 hover:underline">
                  View on what3words →
                </Anchor>
              </Link>
            </p>
          </div>
          {walk.fields.locationDetails && (
            <div className="mb-8">
              <h3 className="text-xl text-green-900 font-semibold">
                Location details
              </h3>
              <p>{walk.fields.locationDetails}</p>
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-2xl text-green-900 font-semibold">Comments</h2>
            <p>No comments</p>
          </div>
        </div>
      </div>
      <div className="mb-8" style={{ height: "400px", width: "100%" }}>
        <Map
          location={walk.fields.routeLocation}
          containerStyle={{ width: "auto", height: "400px" }}
        />
      </div>
    </LayoutNoHero>
  );
};

export const getStaticPaths = async () => {
  const walks = await fetchAllWalks();
  const paths = walks.map((walk) => ({
    params: {
      nameSlug: walk.fields.nameSlug,
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const walk = await fetchByNameSlug(params.nameSlug);
  const what3words = await getLatLon3Words(walk[0].fields.routeLocation);
  return {
    props: {
      walk: walk[0],
      what3words,
    },
  };
};

export default WalkDetails;
