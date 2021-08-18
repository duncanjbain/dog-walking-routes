import Image from "next/image";
import Link from "next/link";
import Anchor from "./Anchor";

const MostPopularWalkCard = ({
  imageSrc,
  imageAltText,
  walkCounty,
  walkName,
  walkNameSlug,
  walkCountySlug,
  walkShortDescription,
}) => {
  return (
    <div className="grid grid-cols-5 bg-yellow-400 bg-opacity-70 rounded-lg h-60 mb-8 xl:mb-0 overflow-ellipsis">
      <div className="col-span-2 relative">
        <Image
          src={imageSrc}
          className="rounded"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt={imageAltText}
        />
      </div>

      <div className="col-start-3 col-span-3 p-4 overflow-ellipsis overflow-hidden">
        <Link href={`/walks/${walkCountySlug}/${walkNameSlug}`} passHref>
          <Anchor>
            <h3 className="hover:text-yellow-600 hover:underline text-green-800 text-2xl font-bold mb-1">
              {walkName}
            </h3>
          </Anchor>
        </Link>
        <p className="text-gray-700 font-semibold mb-4">{walkCounty}</p>
        <p className="text-gray-700 overflow-ellipsis overflow-hidden">
          {walkShortDescription}
        </p>
      </div>
    </div>
  );
};

export default MostPopularWalkCard;
