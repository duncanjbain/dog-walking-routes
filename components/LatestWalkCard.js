import Image from "next/image";
import Link from "next/link";
import Anchor from "./Anchor";

const LatestWalkCard = ({
  imageSrc,
  imageAltText,
  walkCounty,
  walkName,
  walkTags,
  walkNameSlug,
  walkCountySlug,
}) => {
  return (
    <div>
      <Image
        src={imageSrc}
        className="rounded-lg"
        quality={100}
        alt={imageAltText}
      />
      <Link href={`/walks/${walkCountySlug}/${walkNameSlug}`} passHref>
        <Anchor>
          <h3 className="font-extrabold text-base md:text-2xl text-gray-600 hover:underline">
            {walkName}
          </h3>
        </Anchor>
      </Link>
      <p className="font-semibold text-base text-green-800">{walkCounty}</p>
      <ul className="flex flex-row text-gray-600">
        {walkTags.map((walkTag) => (
          <li key={walkTag} className="text-sm md:text-base pr-2">{`#${walkTag}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default LatestWalkCard;
