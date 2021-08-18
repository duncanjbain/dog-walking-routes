import Image from "next/image";
import dogWalk from "../public/images/dog_walking_3.jpg";

const LatestWalkCard = () => {
  return (
    <div>
      <Image
        src={dogWalk}
        className="rounded-lg"
        quality={100}
        alt="Dog walk route image"
      />
      <h3 className="font-extrabold text-2xl text-gray-600">
        Harpenden Forest
      </h3>
      <p className="font-semibold text-base">Hertfordshire</p>
      <ul className="flex flex-row">
          <li className="pr-2">#Woods</li>
          <li className="pr-2">#Parking</li>
          <li className="pr-2">#Toilets</li>
      </ul>
    </div>
  );
};

export default LatestWalkCard;
