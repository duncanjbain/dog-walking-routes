import Link from "next/link";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Anchor from "./Anchor";
const Footer = () => {
  return (
    <footer className="w-full border-t py-4 mb-4 flex flex-row justify-between">
      <ul className="flex flex-row">
        <li className="mr-4">
          {" "}
          <Link href="https://github.com/duncanjbain" passHref>
            <Anchor className="text-lg text-green-900 font-semibold hover:border-b hover:border-yellow-600 hover:text-yellow-600">
              <FontAwesomeIcon icon={faGithub} /> GitHub{" "}
            </Anchor>
          </Link>
        </li>

        <li className="mr-4">
          <Link href="https://twitter.com/duncanbain" passHref>
            <Anchor className="text-lg text-green-900 font-semibold hover:border-b hover:border-yellow-600 hover:text-yellow-600">
              <FontAwesomeIcon icon={faTwitter} /> Twitter{" "}
            </Anchor>
          </Link>
        </li>
      </ul>

      <p className="text-left text-lg font-semibold text-green-900">
        <Link href="https://twitter.com/duncanbain" passHref>
          <Anchor className="text-lg text-green-900 font-semibold hover:border-b hover:border-yellow-600 hover:text-yellow-600">
            Made with ☕ by Duncan Bain{" "}
          </Anchor>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
