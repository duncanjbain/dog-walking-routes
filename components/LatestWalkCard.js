import Image from "next/image";
import Link from "next/link";
import Anchor from "./Anchor";

import contentfulImage from "../utils/contentful/contentfulImage";

const LatestWalkCard = ({
walk
}) => {
  console.log(walk);
  return (
    <div>
      <Image
          src={`https:${walk.fields.routePhotos[0].fields.file.url}`}
          loader={contentfulImage}
        className="rounded-lg"
        width={428}
        height={280}
        layout="intrinsic"
        quality={75}
        alt={walk.fields.routePhotos[0].fields.description}
      />
      <Link href={`/walks/${walk.fields.countySlug}/${walk.fields.nameSlug}`} passHref>
        <Anchor>
          <h3 className="font-extrabold text-base md:text-2xl text-gray-600 hover:underline">
            {walk.fields.routeName}
          </h3>
        </Anchor>
      </Link>
      <p className="font-semibold text-base text-green-800">{walk.fields.routeCounty}</p>
      <ul className="flex flex-row flex-wrap text-gray-600">
        {walk.fields.routeTags.slice(0,3).map((walkTag) => (
          <li key={walkTag} className="text-sm md:text-base pr-2">{`#${walkTag}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default LatestWalkCard;
