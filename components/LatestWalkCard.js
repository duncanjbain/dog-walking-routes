import Image from "next/image";
import Link from "next/link";
import Anchor from "./Anchor";

const LatestWalkCard = ({ walk }) => {
  console.log(walk);
  const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)
  return (
    <div>
      <Image
        src={`https:${walk.fields.routePhotos[0].fields.file.url}`}
        className="rounded-lg"
        layout="responsive"
        objectFit="cover"
        width={6}
        height={4}
        quality={75}
        alt={walk.fields.routePhotos[0].fields.description}
      />

      <Link
        href={`/walks/${walk.fields.countySlug}/${walk.fields.nameSlug}`}
        passHref
      >
        <Anchor>
          <h3 className="font-extrabold text-base md:text-2xl text-gray-600 hover:underline">
            {walk.fields.routeName}
          </h3>
        </Anchor>
      </Link>
      <p className="font-semibold text-base text-green-800">
        {walk.fields.routeCounty}
      </p>
      <ul className="flex flex-row text-gray-600">
        {walk.fields.routeTags.slice(0,3).map((walkTag) => (
          <li
            key={walkTag}
            className="text-sm md:text-base pr-2"
          >{`#${walkTag}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default LatestWalkCard;
