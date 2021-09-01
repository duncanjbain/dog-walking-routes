import Image from "next/image";
import Link from "next/link";
import Anchor from "./Anchor";
import contentfulImage from "../utils/contentful/contentfulImage";

const MostPopularWalkCard = ({ walk }) => {
  return (
    <div className="grid grid-cols-5 bg-yellow-400 bg-opacity-70 rounded-lg h-60 mb-8 xl:mb-0 overflow-ellipsis">
      <div className="col-span-2 relative">
        <Image
          src={`https:${walk.fields.routePhotos[0].fields.file.url}`}
          loader={contentfulImage}
          className="rounded"
          layout="fill"
          objectFit="cover"
          quality={75}
          alt={walk.fields.routePhotos[0].fields.description}
        />
      </div>

      <div className="col-start-3 col-span-3 p-4 overflow-ellipsis overflow-hidden">
        <Link href={`/walks/${walk.fields.nameSlug}`} passHref>
          <Anchor>
            <h3 className="hover:text-yellow-600 hover:underline text-green-800 text-2xl font-bold mb-1">
              {walk.fields.routeName}
            </h3>
          </Anchor>
        </Link>
        <p className="text-gray-700 font-semibold mb-4">
          {walk.fields.routeCounty}
        </p>
        <p className="text-gray-700 line-clamp-4">
          {walk.fields.routeDescription}
        </p>
      </div>
    </div>
  );
};

export default MostPopularWalkCard;
